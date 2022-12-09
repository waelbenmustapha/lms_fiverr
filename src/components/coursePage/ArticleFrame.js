import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { IsOpenDone } from "../../utils/apis/course/CoursePage";
import { ReactComponent as External } from "../../assets/svg/external.svg";

function ArticleFrame({
  chapterId,
  selectedContent,
  setselectedContent,
  fetchCourseData,
}) {
  const [isOpened, setIsOpened] = useState(false);
  const [loading, setLoading] = useState(true);
  return (
    <div className="h-full w-full relative">
      {isOpened ? (
        <>
          {loading && (
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <RotatingLines
                strokeColor="#00ec8b"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
              />
            </div>
          )}
          <a
            onClick={() => {
              setselectedContent({ ...selectedContent, is_complete: true });
              IsOpenDone({
                lesson_id: selectedContent.id,
                course_id: chapterId,
              }).then(() => fetchCourseData());
            }}
            href={selectedContent.article_url}
            target="_blank"
            rel="noreferrer"
          >
            <External className="h-[65px] w-[65px] cursor-pointer absolute bottom-[20px] right-[20px] opacity-60" />
          </a>
          <iframe
            onLoad={() => setLoading(false)}
            src={selectedContent.article_url}
            className="h-full w-full"
          ></iframe>
        </>
      ) : (
        <div className="  h-full flex justify-center items-center">
          <div
            className=" h-[50px]  w-[200px] py-[8px] px-[16px] font-[inherit] text-[14px] font-bold cursor-pointer whitespace-nowrap no-underline text-center flex items-center justify-center border-[1px] rounded-[4px] border-blue outline-none bg-blue-gradient text-white"
            onClick={() => {
              setIsOpened(true);
              setselectedContent({ ...selectedContent, is_complete: true });
              IsOpenDone({
                lesson_id: selectedContent.id,
                course_id: chapterId,
              }).then(() => fetchCourseData());
            }}
          >
            <p className="text-[16px] text-white font-bold ">Read Article</p>
          </div>

          <a
            onClick={() => {
              setselectedContent({ ...selectedContent, is_complete: true });
              IsOpenDone({
                lesson_id: selectedContent.id,
                course_id: chapterId,
              }).then(() => fetchCourseData());
            }}
            href={selectedContent.article_url}
            target="_blank"
            rel="noreferrer"
          >
            <External className="h-[65px] w-[65px] cursor-pointer" />
          </a>
        </div>
      )}
    </div>
  );
}

export default ArticleFrame;
