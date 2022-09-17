import React, { useEffect, useState } from "react";
import helpme from "../../assets/images/helpme.png";
import DataElement from "../../components/coursePage/DataElement";
import ReactPlayer from "react-player";
import axios from "axios";
import "./coursePage.css";
function CoursePage() {
  const [courseData, setCourseData] = useState(null);

  const [selectedData, setSelectedData] = useState(null);

  function fetchCourseData() {
    axios
      .get("https://mocki.io/v1/09157feb-9534-4ca0-a50b-c98e012acd02")
      .then((res) => {
        setCourseData(res.data);
        setSelectedData(res.data?.sections[0].content[0]);
      });
  }
  useEffect(() => {
    fetchCourseData();
  }, []);
  if (courseData == null || selectedData == null) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="sidebar">
          <div className="onScreenContent">
            <div
              style={{
                marginBottom: "40px",
                marginTop: "76px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginRight: "60px",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  fontFamily: "bold",
                }}
              >
                تقدمك بالبرنامج:
              </p>
              <div className="percent">
                <svg>
                  <circle cx="28" cy="28" r="25"></circle>
                  <circle
                    cx="28"
                    cy="28"
                    r="25"
                    style={{ "--percent": courseData.totalProgress }}
                  ></circle>
                </svg>
                <div className="number">
                  <h3>
                    {courseData.totalProgress}
                    <span>%</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="datascroll">
              {courseData.sections.map((element, index) => (
                <DataElement
                  collapsed={index === 0 ? true : false}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                  element={element}
                />
              ))}
            </div>
          </div>
          <div className="contactHelp">
            <img
              style={{ left: "20px", top: "30px", position: "absolute" }}
              src={helpme}
            />
            <p
              style={{
                fontFamily: "bold",
                fontSize: "16px",
                color: "#153C3F",
                marginRight: "15px",
              }}
            >
              <p>في حال كنت </p> تواجه مشاكل في برامجك
              <p> التدريبية، تواصل مع فريق الدعم</p>
            </p>
            <p className="btnhelp">تواصل معنا</p>
          </div>
        </div>
        <div style={{ width: "100%", flex: 1 }}>
          <div className=" onScreenContent">
            {selectedData.type === "video" ? (
              <ReactPlayer
                controls={true}
                playIcon={<></>}
                onClickPreview={() => console.log("hi")}
                playing={true}
                light={"https://i.postimg.cc/fL1TPFG6/Group-284.jpg"}
                key={selectedData.id}
                className="react-player"
                height={"100%"}
                width="100%"
                url={selectedData.url}
              />
            ) : selectedData.type === "text" ? (
              <div style={{ backgroundColor: "#f2f2f2", height: "100%" }}></div>
            ) : null}
          </div>
          <div style={{ paddingLeft: "65px" }}>
            <div
              style={{
                marginTop: "30px",
                fontFamily: "regular",
                fontSize: "16px",
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <p style={{ fontFamily: "bold" }}>مقدمة عن المحاضرة</p>
              <div
                style={{
                  height: "8px",
                  width: "8px",
                  display: "block",
                  backgroundColor: "#153C3F",
                  borderRadius: "50%",
                  marginTop: "5px",
                }}
              ></div>
              <p>نص المحاضرة</p>
              <div
                style={{
                  height: "8px",
                  width: "8px",
                  display: "block",
                  backgroundColor: "#153C3F",
                  borderRadius: "50%",
                  marginTop: "5px",
                }}
              ></div>
              <p>الأسئلة الشائعة</p>
            </div>
            <div
              style={{
                height: "1px",
                backgroundColor: "rgba(21, 60, 63, 0.1)",
                width: "100%",
                marginTop: "28px",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  width: "135px",
                  height: "100%",
                  backgroundColor: "#153C3F",
                }}
              ></div>
            </div>
            <p style={{ lineHeight: "120%" }}>
              نص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد
              أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد
              أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد
              أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد
              أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد
              أزرق{" "}
            </p>
            <p style={{ lineHeight: "120%" }}>
              . ص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد
              أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد
              أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد
              أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد
              أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد
              أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد
              أزرقص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد
              أزرق.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CoursePage;
