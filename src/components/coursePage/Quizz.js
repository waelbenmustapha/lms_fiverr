import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import xcircle from "../../assets/images/x-circle.png";
import checkcircle from "../../assets/images/check-circle.png";
import useAxiosToken from "../../utils/apis/AxiosWithToken";
import { ReactComponent as Check } from "../../assets/svg/check.svg";

function Quizz({ data, progressquizz, courseId }) {
  const axiosToken = useAxiosToken();
  const [questions, setQuestions] = useState(data);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswerCorrect, setshowAnswerCorrect] = useState(false);
  const [showAnswerRequired, setShowAnswerRequired] = useState(false);
  const [showAnswerFalse, setShowAnswerFalse] = useState(false);
  const [finish, setFinish] = useState(false);
  const navigate = useNavigate();
  const [quizFinished, setQuizFinished] = useState(false);
  function nextQuestion() {
    const nextQuestion = currentQuestion + 1;
    setSelectedAnswer(null);
    setShowAnswerFalse(false);
    setShowAnswerRequired(false);
    setshowAnswerCorrect(false);
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinish(true);
    }
  }

  function certification() {
    axiosToken
      .post("http://0.0.0.0:8000/lms/api/v2/finish_quiz/", {
        course_id: courseId,
        quiz_id: data[0].id,
      })
      .then(() => navigate("/certificate"));
  }

  function next() {
    if (
      currentQuestion === questions.length - 1 &&
      selectedAnswer?.is_correct
    ) {
      setshowAnswerCorrect(true);
      setShowAnswerFalse(false);
      setShowAnswerRequired(false);
      setFinish(true);
    } else if (showAnswerCorrect) {
      nextQuestion();
    } else if (selectedAnswer === null) {
      setShowAnswerRequired(true);
    } else if (selectedAnswer.is_correct) {
      setshowAnswerCorrect(true);
      setShowAnswerFalse(false);
      setShowAnswerRequired(false);
    } else if (!selectedAnswer.is_correct) {
      setShowAnswerFalse(true);
      setshowAnswerCorrect(false);
      setShowAnswerRequired(false);
    }
  }
  return (
    <>
      {quizFinished ? (
        <div className=" bg-white h-full py-[64px] p-horizontal flex flex-col overflow-y-auto justify-center items-center ">
          <Check/>
          <p className=" text-[40px] text-[rgba(43,53,213,1)] font-bold mt-[40px]">Congratulations</p>
          <p className=" text-[16px] font-[400] text-[#232323] mt-[16px]">You have successfully completed your first quiz</p>
          <div
              className=" h-[50px] mt-[40px] w-[200px] py-[8px] px-[16px] font-[inherit] text-[14px] font-bold cursor-pointer whitespace-nowrap no-underline text-center flex items-center justify-center border-[1px] rounded-[4px] border-blue outline-none bg-blue-gradient text-white"
              onClick={()=>certification()}
            >
              <p className="text-[16px] text-white font-bold ">Continue</p>
            </div>
        </div>
      ) : (
        <div className=" bg-white h-full py-[64px] p-horizontal overflow-y-auto">
          <p className="text-[rgba(43,53,213,1)] text-[24px] font-bold ">
            Knowledge quiz{" "}
            <span className="text-[#9C8DFD]">
              ( {currentQuestion + 1}/{questions.length} )
            </span>
          </p>
          <p className="text-[#5E45FF] text-[12px] mt-[10px]">
            Please Select the correct option.
          </p>

          <p className="text-[rgba(43,53,213,1)] text-[14px] mt-[40px]  font-bold">
            Question {currentQuestion + 1}:
          </p>
          <p className=" text-[24px] text-[#232323]  mb-[30px] font-bold">
            Sample Multiple Choice Question.
          </p>
          <div className="flex flex-col gap-[30px] mb-[30px]">
            {questions[currentQuestion].quizzes.answer.map((el, index) => (
              <div
                key={index}
                onClick={() => setSelectedAnswer(el)}
                className="flex flex-row  items-center gap-[17px]"
              >
                <div className="h-5 w-5 border-[2px] p-[1px] rounded-[4px] border-[#153C3F] cursor-pointer">
                  {selectedAnswer?.text === el.text && (
                    <div className="bg-[#5E45FF] rounded-[2px] h-full w-full"></div>
                  )}
                </div>
                <p className="text-[16px] text-[#153C3F]">{el.text}</p>
              </div>
            ))}
          </div>

          {!finish ? (
            <div
              className=" h-[50px] mt-[20px] w-[200px] py-[8px] px-[16px] font-[inherit] text-[14px] font-bold cursor-pointer whitespace-nowrap no-underline text-center flex items-center justify-center border-[1px] rounded-[4px] border-blue outline-none bg-blue-gradient text-white"
              onClick={next}
            >
              <p className="text-[16px] text-white font-bold ">Next Question</p>
            </div>
          ) : (
            <div
              className=" h-[50px] mt-[20px] w-[200px] py-[8px] px-[16px] font-[inherit] text-[14px] font-bold cursor-pointer whitespace-nowrap no-underline text-center flex items-center justify-center border-[1px] rounded-[4px] border-blue outline-none bg-blue-gradient text-white"
              onClick={() => setQuizFinished(true)}
            >
              <p className="text-[16px] text-white font-bold ">Finish Quiz</p>
            </div>
          )}
          {showAnswerFalse && (
            <div className="bg-[rgba(236,0,0,0.1)] justify-center mt-[17px] h-[43px] bg-black min-w-[200px] w-fit flex px-[13px] items-center">
              <img src={xcircle} className="h-[16px] w-[16px]  mr-[5px] " />
              <p className="text-[14px] font-bold text-[#EC0000] mr-[10px]">
                Incorrect Answer, Try Again
              </p>
            </div>
          )}
          {showAnswerCorrect && (
            <div className="bg-[rgba(0,236,139,0.1)] mt-[17px] h-[43px] min-w-[200px] w-fit flex px-[13px] items-center">
              <img src={checkcircle} className="h-[16px] w-[16px] mr-[5px]" />
              <p className="text-[14px] font-bold text-[#203B3E] mr-[10px] ">
                Correct Answer!
              </p>
            </div>
          )}
          {showAnswerRequired && (
            <div className="bg-[rgb(238,210,2,0.1)] mt-[17px] h-[43px] min-w-[200px] w-fit flex px-[13px] items-center">
              <p className="text-[14px] font-bold text-[#203B3E] mr-[10px] ">
                Please Select An Answer
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Quizz;
