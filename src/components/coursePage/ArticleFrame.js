import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { IsOpenDone } from "../../utils/apis/course/CoursePage";
import { ReactComponent as External } from "../../assets/svg/external.svg";

function ArticleFrame({
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
              IsOpenDone(selectedContent.id,selectedContent.is_complete).then(() => fetchCourseData());
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
          <p
            onClick={() => {
              setIsOpened(true);
              setselectedContent({ ...selectedContent, is_complete: true });
              IsOpenDone(selectedContent.id,selectedContent.is_complete).then(() => fetchCourseData());
            }}
            className="bg-[#00ec8b] cursor-pointer p-[20px] w-[200px] text-center font-[bold] text-[16px]"
            target="_blank"
            rel="noreferrer"
          >
            اقرأ المقال
          </p>
          <a
            onClick={() => {
              setselectedContent({ ...selectedContent, is_complete: true });
              IsOpenDone(selectedContent.id,selectedContent.is_complete).then(() => fetchCourseData());
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
