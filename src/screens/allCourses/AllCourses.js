import { useState, useEffect } from "react";
import "./allCourses.css";
import axios from "axios";
import CourseCard from "../../components/courseCard/CourseCard";

function AllCourses() {
  //store programs data
  const [programs, setPrograms] = useState([]);

  // selected category
  const [selectedCat, setselectedCat] = useState("all");

  // category items
  const category = [
    { name: "جميع البرامج", category: "all" },
    { name: "برامج ا", category: "برامج ا" },
    { name: "برامج ابرامج ا", category: "برامج ابرامج ا" },
    { name: "برامج ابرامج ابرامج ا", category: "برامج ابرامج ابرامج ا" },
  ];

  // get all programs
  const getPrograms = () => {
    axios
      .get("https://mocki.io/v1/c772ebe2-ea4a-47dc-906a-f9ef4631c85c")
      .then((res) => setPrograms(res.data));
  };

  // run api to load the data
  useEffect(() => {
    getPrograms();
  }, []);

  return (
    <div className="pt-[64px] pb-[150px] all-courses p-horizontal">
      <p className="title mb-40">جميع البرامج</p>
      <div className="programs-category mb-40">
        <p className="title">تصنيف البرامج</p>
        {category.map((ctg, index) => (
          <div
            key={`category-${index}`}
            onClick={() => setselectedCat(ctg.category)}
            className={
              "btn-category " + (ctg.category === selectedCat && "active")
            }
          >
            <span>{ctg.name}</span>
          </div>
        ))}
      </div>
      <div className="all-courses-content">
        {selectedCat === "all"
          ? programs.map((prog, index) => (
              <div key={`prog-${index}`} className="stretched">
                <CourseCard program={prog} />
              </div>
            ))
          : programs
              .filter((el) => el.category === selectedCat)
              .map((prog, index) => (
                <div key={`prog-${index}`} className="stretched">
                  <CourseCard program={prog} />
                </div>
              ))}
      </div>
    </div>
  );
}

export default AllCourses;
