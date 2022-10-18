import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import xcircle from "../../assets/images/x-circle.png";
import checkcircle from "../../assets/images/check-circle.png";
import { axiosToken } from "../../utils/apis/AxiosWithToken";
function Quizz({ data, progressquizz, courseId }) {
  const [questions, setQuestions] = useState(data);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswerCorrect, setshowAnswerCorrect] = useState(false);
  const [showAnswerRequired, setShowAnswerRequired] = useState(false);
  const [showAnswerFalse, setShowAnswerFalse] = useState(false);
  const [finish, setFinish] = useState(false);
  const navigate = useNavigate();
  const numbersStrings = [
    "الأول",
    "الثاني",
    "الثالث",
    "الرابع",
    "الخامس",
    "السادس",
    "السابع",
    "الثامن",
    "التاسع",
    "العاشر",
    "الحادي عشر",
    "الثاني عشر",
    "الثالث عشر",
    "الرابع عشر",
    "الخامس عشر",
    "السادس عشر",
    "السابع عشر",
    "الثامن عشر",
    "التاسع عشر",
    "عشرون",
  ];
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
    axiosToken.post("http://0.0.0.0:8000/lms/api/v2/finish_quiz/", {
      course_id: courseId,
      quiz_id: data[0].id,
    }).then(()=>navigate("/certificate"));
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
    <div className=" bg-white h-full py-[64px] p-horizontal overflow-y-auto">
      <p className="text-[#00EC8B] text-[16px] font-[bold] ">
        اختبار المعرفة ({questions.length.toLocaleString("ar-EG")}/
        {(currentQuestion + 1).toLocaleString("ar-EG")})
      </p>
      <p className="text-[#153C3F] text-[24px] mt-[10px]">
        اختر الاجابة الصحيحة
      </p>
      <p className="text-[#00EC8B] text-[32px] mt-[10px] mb-[30px] font-[bold]">
        السؤال {numbersStrings[currentQuestion]}:{" "}
        <span className="text-[#153C3F]">
          {questions[currentQuestion].title}
        </span>
      </p>
      <div className="flex flex-col gap-[30px] mb-[30px]">
        {questions[currentQuestion].answer.map((el) => (
          <div
            onClick={() => setSelectedAnswer(el)}
            className="flex flex-row  items-center gap-[17px]"
          >
            <div className="h-5 w-5 border-[2px] p-[1px] border-[#153C3F] cursor-pointer">
              {selectedAnswer?.id === el.id && (
                <div className="bg-[#00EC8B] h-full w-full"></div>
              )}
            </div>
            <p className="text-[16px] text-[#153C3F]">{el.text}</p>
          </div>
        ))}
      </div>

      {!finish ? (
        <div
          className="h-[55px] w-[200px] bg-[#00EC8B] flex justify-center items-center cursor-pointer"
          onClick={next}
        >
          <p className="text-[16px] font-[bold] text-[#153C3F]">
            {!showAnswerCorrect ? "ارسل الاجابة" : "التالي"}
          </p>
        </div>
      ) : (
        <div
          className="h-[55px] w-[200px] bg-[#00EC8B] flex justify-center items-center cursor-pointer"
          onClick={certification}
        >
          <p className="text-[16px] font-[bold] text-[#153C3F]">
            انهاء الاختبار
          </p>
        </div>
      )}
      {showAnswerFalse && (
        <div className="bg-[rgba(236,0,0,0.1)] mt-[17px] h-[43px] min-w-[200px] w-fit flex px-[13px] items-center">
          <img src={xcircle} className="h-[16px] w-[16px]" />
          <p className="text-[14px] font-[bold] text-[#EC0000] mr-[10px] mb-[3px]">
            إجابة خاطئة! أعد المحاولة
          </p>
        </div>
      )}
      {showAnswerCorrect && (
        <div className="bg-[rgba(0,236,139,0.1)] mt-[17px] h-[43px] min-w-[200px] w-fit flex px-[13px] items-center">
          <img src={checkcircle} className="h-[16px] w-[16px]" />
          <p className="text-[14px] font-[bold] text-[#203B3E] mr-[10px] mb-[3px]">
            إجابة صحيحة!
          </p>
        </div>
      )}
      {showAnswerRequired && (
        <div className="bg-[rgb(238,210,2,0.1)] mt-[17px] h-[43px] min-w-[200px] w-fit flex px-[13px] items-center">
          <p className="text-[14px] font-[bold] text-[#203B3E] mr-[10px] mb-[3px]">
            الرجاء اختيار اجابة
          </p>
        </div>
      )}
    </div>
  );
}

export default Quizz;
