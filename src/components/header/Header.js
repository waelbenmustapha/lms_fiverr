import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ReactComponent as Calendar } from "../../assets/svg/calendarOutline.svg";
import { ReactComponent as Check } from "../../assets/svg/check-circle-greeno-utline.svg";
import { ReactComponent as Clock } from "../../assets/svg/clock.svg";
import { EnrollToCourse } from "../../utils/apis/course/CoursePage";
import { ReactComponent as PlayButton } from "../../assets/svg/play-circle.svg";
import VideoModal from "../videoModal/VideoModal";
import { RotatingLines } from "react-loader-spinner";
import { useAuth } from "../../contexts/AuthContext";

function Header({
  course_id,
  title,
  description,
  image,
  video,
  start_date,
  duration,
  learning_average,
  is_enrolled,
  is_course_details,
}) {
  const [previewVideoOpen, setPreviewVideoOpen] = useState(false);
  // status of user is erolled or not
  const [joined, setJoined] = useState(is_enrolled);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();
  // handle user enroll to course
  const enrollToCourse = () => {
    if (auth.user) {
      EnrollToCourse({
        course_id: course_id,
        is_enrolled: true,
        name: "test", // this is just to make fake api work remove it in later part
        job: "test", // this is just to make fake api work remove it in later part
      })
        .then((res) => {
          console.log(res);
          // display loader
          setIsSubmitting(true);
          // delay 1 second
          setTimeout(() => {
            setIsSubmitting(false);
            setJoined(true);
          }, 1000);
        })
        .catch((error) => console.log(error));
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="relative flex flex-row justify-between mediamax-950:flex-col-reverse mediamax-950:justify-center gap-[40px] bg-[#fafafa] py-[100px] mediamax-1279:py-[70px] p-horizontal">
        <div className="flex-[1] flex flex-col justify-between max-w-[750px]">
          <div>
            <p className="text-[48px] leading-[1.2] font-bold mb-[30px] mediamax-1279:mb-[20px] mediamax-1279:text-[32px] mediamax-1023:text-[28px] mediamax-950:text-[24px]">
              {title}
            </p>
            <p className="text-[20px] mb-[30px] mediamax-1279:text-[18px] mediamax-1279:mb-[20px]">
              {description}
            </p>
            <div className="flex flex-row flex-nowrap mb-[30px] mediamax-1279:text-[14px] mediamax-1279:mb-[20px]">
              <Calendar className="w-[24px] h-[24px] ml-[10px] mediamax-1279:w-[22px] mediamax-1279:h-[22px] mediamax-1279:ml-[10px]" />
              <p>
                يبدأ البرنامج في تاريخ{" "}
                <span style={{ fontWeight: "bold" }}>{start_date}</span>
              </p>
            </div>
            <div className="flex flex-row flex-nowrap mb-[30px] mediamax-1279:text-[14px] mediamax-1279:mb-[20px]">
              <Clock className="w-[24px] h-[24px] ml-[10px] mediamax-1279:w-[22px] mediamax-1279:h-[22px] mediamax-1279:ml-[10px]" />
              <p>
                مدة البرنامج{" "}
                <span style={{ fontWeight: "bold" }}>{duration}</span>، بمعدل{" "}
                <span style={{ fontWeight: "bold" }}>{learning_average}</span>
              </p>
            </div>
          </div>
          {is_course_details ? (
            <div>
              {joined ? (
                <Link to={"/academy-lessons/course?course_id=" + course_id}>
                  <div className="animate-[animate-width_0.65s_ease-in-out] min-w-fit w-[60%] h-[55px] py-[8px] px-[16px] text-[20px] mediamax-1279:text-[16px] mediamax-1279:h-[40px] font-[inherit] font-bold text-center flex items-center justify-center no-underline outline-none border-none cursor-pointer bg-[#00ec8b] text-primary-color">
                    ابدأ دورتك الآن
                  </div>
                </Link>
              ) : (
                <button
                  disabled={isSubmitting}
                  onClick={() => enrollToCourse()}
                  className="w-full h-[55px] py-[8px] px-[16px] text-[20px] mediamax-1279:text-[16px] mediamax-1279:h-[40px] font-[inherit] font-bold text-center flex items-center justify-center no-underline outline-none border-none cursor-pointer bg-[#00ec8b] text-primary-color"
                >
                  {isSubmitting ? (
                    <RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="1"
                      width="35"
                      visible={true}
                    />
                  ) : (
                    <span>انضم للبرنامج التدريبي</span>
                  )}
                </button>
              )}
            </div>
          ) : (
            <div>
              {joined ? (
                <button
                  disabled={isSubmitting}
                  className="w-full h-[55px] py-[8px] px-[16px] text-[20px] mediamax-1279:text-[16px] mediamax-1279:h-[40px] font-[inherit] font-bold text-center flex items-center justify-center no-underline outline-none border-none cursor-pointer bg-[#153C3F] text-[#00ec8b]"
                >
                  {isSubmitting ? (
                    <RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="1"
                      width="35"
                      visible={true}
                    />
                  ) : (
                    <div className="flex flex-row gap-[10px] items-center">
                      <Check />
                      <p>تم انضمامك للبرنامج بنجاح!</p>
                    </div>
                  )}
                </button>
              ) : (
                <button
                  disabled={isSubmitting}
                  onClick={() => enrollToCourse()}
                  className="w-full h-[55px] py-[8px] px-[16px] text-[20px] mediamax-1279:text-[16px] mediamax-1279:h-[40px] font-[inherit] font-bold text-center flex items-center justify-center no-underline outline-none border-none cursor-pointer bg-[#00ec8b] text-primary-color"
                >
                  {isSubmitting ? (
                    <RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="1"
                      width="35"
                      visible={true}
                    />
                  ) : (
                    <span>انضم للبرنامج التدريبي</span>
                  )}
                </button>
              )}
              {joined && (
                <div className="w-fit text-[16px] mt-3">
                  يمكنك الآن عرض البرنامج والبدء فيه..
                  <Link
                    to={`/academy-lessons/course-details?course_id=${course_id}`}
                    className="font-bold cursor-pointer text-green"
                  >
                    ابدأ البرنامج
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
        <div
          onClick={() => setPreviewVideoOpen(true)}
          className="cursor-pointer flex-[1] relative max-w-[580px] max-h-[500px] mediamax-950:max-w-full mediamax-950:max-h-full flex items-center justify-center"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 588 503"
            fill="url(#imgpattern)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M584 499H12V36.7648H373.179L436.126 4H584V499Z"
              stroke="#153C3F"
              strokeWidth="8"
            />
            <path
              d="M4 491V44.5H348L405 11H576V491H4Z"
              stroke="#00EC8B"
              strokeWidth="8"
            />
            <path d="M12 33L12 500" stroke="#153C3F" strokeWidth="8" />
            <defs>
              <pattern id="imgpattern" x="0" y="0" width="1" height="1">
                <image
                  className="brightness-[70%]"
                  width="588"
                  height="503"
                  xlinkHref={image}
                />
              </pattern>
            </defs>
          </svg>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center">
            <PlayButton
              className="text-white h-[56px] w-[56px]"
              stroke="white"
            />
            <p className="text-white font-bold text-[24px]">شغل الفيديو</p>
          </div>
        </div>
        <VideoModal
          video={video}
          previewVideoOpen={previewVideoOpen}
          setPreviewVideoOpen={setPreviewVideoOpen}
        />
      </div>
    </>
  );
}

export default Header;
