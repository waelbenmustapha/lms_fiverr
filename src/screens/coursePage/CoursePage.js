import React, { useState } from "react";
import helpme from "../../assets/images/helpme.png";
import DataElement from "../../components/coursePage/DataElement";
import "./coursePage.css";
function CoursePage() {
  const [selectedData, setSelectedData] = useState(null);
  const courseData = {
    totalProgress: 6,
    sections: [
      {
        name: "مقدمة عن البرنامج",
        progress: 15,
        content: [
          {
            id: "1",
            text: "نص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد أزرق. ص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد أزرق.",
            type: "video",
            name: "مقدمة",
            finished: true,
          },
          {
            id: "2",
            type: "video",
            name: "مقدمة ٢",
            finished: true,
          },
          {
            id: "3",
            name: "مقال",
            type: "text",
            finished: true,
          },
          {
            id: "4",

            name: "مقدمة ١",
            type: "video",
            finished: false,
          },
          {
            id: "5",

            name: "دليل",
            type: "video",
            finished: false,
          },
          {
            id: "6",

            name: "مقدمة ٢",
            type: "text",
            finished: false,
          },
        ],
      },
      {
        name: "مقدمة عن البرنامج",
        progress: 0,
        content: [
          {
            id: "7",

            name: "مقدمة",
            finished: true,
          },
          {
            id: "8",

            name: "مقدمة",
            finished: true,
          },
        ],
      },
    ],
  };
  return (
    <div className="container">
      <div className="sidebar">
        <p
          style={{
            fontSize: "16px",
            marginBottom: "40px",
            fontFamily: "bold",
            marginRight: "60px",
          }}
        >
          تقدمك بالبرنامج:
        </p>
        <div className="datascroll">
          {courseData.sections.map((element) => (
            <DataElement
              selectedData={selectedData}
              setSelectedData={setSelectedData}
              element={element}
            />
          ))}
        </div>
        <div className="contactHelp">
          <img style={{ left: "20px", top: "30px",position:"absolute" }} src={helpme} />
          <p style={{fontFamily:"bold",fontSize:"16px",color:"#153C3F",marginRight:"15px"}}><p>في حال كنت </p>  تواجه مشاكل في برامجك<p> التدريبية، تواصل مع فريق الدعم</p></p>
        <p className="btnhelp">تواصل معنا</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default CoursePage;
