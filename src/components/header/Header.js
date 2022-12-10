import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ReactComponent as Calendar } from "../../assets/svg/calendarOutline.svg";
import { ReactComponent as Check } from "../../assets/svg/check-circle-greeno-utline.svg";
import { ReactComponent as Clock } from "../../assets/svg/clock.svg";
import { EnrollToCourse } from "../../utils/apis/course/CoursePage";
import { ReactComponent as PlayButton } from "../../assets/svg/play.svg";
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
      window.location.replace("https://google.com");
    }
  };

  return (
    <div className="bg-header bg-no-repeat bg-cover p-horizontal p-vertical">
      <div className="relative flex flex-row justify-between rounded-[4px] mediamax-950:flex-col-reverse mediamax-950:justify-center gap-[40px] bg-[#fafafa] p-vertical p-horizontal">
        <div className="w-[50%] mediamax-950:w-full flex flex-col justify-between max-w-[750px]">
          <div>
            <p className="w-full break-words text-[40px] text-blue leading-[1.2] font-bold mb-[30px] mediamax-1279:mb-[20px] mediamax-1279:text-[32px] mediamax-1023:text-[28px] mediamax-950:text-[24px]">
              {title}
            </p>
            <p className="text-[20px] mb-[30px] line-clamp-6 mediamax-1279:text-[18px] mediamax-1279:mb-[20px]">
              {description}
            </p>
            <div className="flex flex-row flex-nowrap mb-[30px] mediamax-1279:text-[14px] mediamax-1279:mb-[20px]">
              <Calendar className="w-[24px] h-[24px] mr-[10px] text-blue mediamax-1279:w-[22px] mediamax-1279:h-[22px] mediamax-1279:ml-[10px]" />
              <p>
                Course starts on{" "}
                <span style={{ fontWeight: "bold" }}>{start_date}</span>
              </p>
            </div>
            <div className="flex flex-row flex-nowrap mb-[30px] mediamax-1279:text-[14px] mediamax-1279:mb-[20px]">
              <Clock className="w-[24px] h-[24px] mr-[10px] text-blue mediamax-1279:w-[22px] mediamax-1279:h-[22px] mediamax-1279:ml-[10px]" />
              <p>
                <span>Course lasts </span>
                <span style={{ fontWeight: "bold" }}>{duration}</span>,{" "}
                <span style={{ fontWeight: "bold" }}>{learning_average}</span>
                <span> a week</span>
              </p>
            </div>
          </div>
          {is_course_details ? (
            <div>
              {joined ? (
                <Link
                  className="animate-[animate-width_0.65s_ease-in-out] min-w-fit w-[60%] py-[16px] px-[16px] text-[16px] font-[inherit] font-bold text-center flex items-center justify-center no-underline outline-none border-none cursor-pointer rounded-[4px] bg-blue-gradient text-white"
                  to={"/academy-lessons/course?course_id=" + course_id}
                >
                  <span>Start the course</span>
                </Link>
              ) : (
                <button
                  disabled={isSubmitting}
                  onClick={() => enrollToCourse()}
                  className="w-full py-[16px] px-[16px] text-[16px] font-[inherit] font-bold text-center flex items-center justify-center no-underline outline-none border-none cursor-pointer rounded-[4px] bg-blue-gradient text-white"
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
                    <span>Join Course</span>
                  )}
                </button>
              )}
            </div>
          ) : (
            <div>
              {joined ? (
                <>
                  <button
                    disabled={isSubmitting}
                    className="w-full py-[16px] px-[16px] text-[16px] mediamax-767:text-[14px] mediamax-1279:h-[40px] font-[inherit] font-bold text-center flex items-center justify-center no-underline outline-none border-none cursor-pointer rounded-[4px] bg-[#E7F4E5] text-[#1E860F]"
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
                      <div className="flex flex-row gap-[8px] items-center">
                        <Check />
                        <p>
                          You have been successfully registered in the course !
                        </p>
                      </div>
                    )}
                  </button>
                  <div className="w-fit text-[16px] mediamax-767:text-[14px] mt-3">
                    You can now view or{" "}
                    <Link
                      to={`/academy-lessons/course-details?course_id=${course_id}`}
                      className="font-bold cursor-pointer text-yellow"
                    >
                      Start the course
                    </Link>
                  </div>
                </>
              ) : (
                <button
                  disabled={isSubmitting}
                  onClick={() => enrollToCourse()}
                  className="w-full py-[16px] px-[16px] text-[16px] font-[inherit] font-bold text-center flex items-center justify-center no-underline outline-none border-none cursor-pointer rounded-[4px] bg-blue-gradient text-white"
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
                    <span>Join Course</span>
                  )}
                </button>
              )}
            </div>
          )}
        </div>
        <div
          onClick={() => setPreviewVideoOpen(true)}
          className="cursor-pointer w-[50%] mediamax-950:w-full relative max-w-[580px] max-h-[500px] mediamax-950:max-w-full mediamax-950:max-h-full flex items-center justify-center"
        >
          <div className="w-full h-full rounded-[4px] overflow-hidden">
            <img
              className="brightness-75 w-full h-full"
              src={image ? image : require("../../assets/images/noimg.png")}
            />
          </div>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center">
            <PlayButton className="text-white h-[50px] w-[40px]" />
            <p className="text-white font-bold text-[20px] mediamax-860:text-[18px] mt-[20px]">
              Course Preview
            </p>
          </div>
        </div>
        <VideoModal
          video={video}
          previewVideoOpen={previewVideoOpen}
          setPreviewVideoOpen={setPreviewVideoOpen}
        />
      </div>
    </div>
  );
}

export default Header;
