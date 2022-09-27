import { useRef } from "react";
import ReactPlayer from "react-player";
import { useOnClickOutside } from "../../hooks";

function VideoModal({ video, previewVideoOpen, setPreviewVideoOpen }) {
  const previewVideoRef = useRef();
  useOnClickOutside(previewVideoRef, () => setPreviewVideoOpen(false));

  return (
    <>
      {previewVideoOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen overflow-x-hidden overflow-y-auto z-[1043] outline-none bg-black/50">
          <div className="text-center w-full h-full py-[40px] px-[20px] before:content-[''] before:inline-block before:h-full before:align-middle">
            <div
              ref={previewVideoRef}
              className="relative inline-block align-middle m-[0_auto] z-[1045] w-full max-w-[900px] h-auto min-h-[150px] bg-black"
            >
              <div className="w-full h-0 overflow-hidden pt-[56.25%]">
                <div
                  onClick={() => setPreviewVideoOpen(false)}
                  title="Close"
                  className="text-white text-[28px] opacity-70 absolute top-[-40px] right-[-6px] text-right block w-full h-[44px] leading-[44px] p-0 pr-[6px] overflow-visible cursor-pointer outline-none bg-transparent border-0 appearance-none touch-manipulation"
                >
                  ×
                </div>
                <div className="absolute block top-0 left-0 w-full h-full bg-black">
                  <ReactPlayer
                    controls={true}
                    playing={false}
                    height={"100%"}
                    width="100%"
                    url={video}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoModal;
