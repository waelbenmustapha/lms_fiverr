import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import CourseCard from "../../components/courseCard/CourseCard";

function AllCourses() {
  //store programs data
  const [programs, setPrograms] = useState([]);

  // selected category
  const [selectedCat, setselectedCat] = useState("all");

  // Calculate the options for filtering
  // courses by category
  const category = useMemo(() => {
    const options = new Set();
    programs.forEach((row) => {
      options.add(row["category"]);
    });
    let iterator = [...options.values()];
    let items = [{ name: "جميع البرامج", category: "all" }];
    iterator.forEach((element) => {
      items.push({ name: element, category: element });
    });
    return items;
  }, [programs]);

  // get all programs
  const getPrograms = () => {
    axios
      .get("https://mocki.io/v1/bf36b2d1-2551-4e1f-884e-a545b8eb6876")
      .then((res) => setPrograms(res.data));
  };

  // run api to load the data
  useEffect(() => {
    getPrograms();
  }, []);

  return (
    <div className="pt-[64px] mediamax-1079:pt-[40px] pb-[150px] mediamax-1079:pb-[80px] px-[64px] mediamax-1079:px-[40px] mediamax-767:px-[20px]">
      <p className="text-primary-color text-[32px] mediamax-1079:text-[24px] mb-[40px]">
        جميع البرامج
      </p>
      <div className="flex flex-row flex-wrap items-center gap-[36px] mediamax-1079:gap-[20px] mb-[40px]">
        <p className="text-[20px] text-primary-color">تصنيف البرامج</p>
        {category.map((ctg, index) => (
          <div
            key={`category-${index}`}
            onClick={() => setselectedCat(ctg.category)}
            className={
              "flex justify-center items-center font-[inherit] text-[20px] mediamax-1079:text-[16px] font-bold h-[55px] mediamax-1079:h-[40px] px-[32px] py-[8px] mediamax-1079:px-[28px] border-[1px] border-primary-color outline-none whitespace-nowrap cursor-pointer " +
              (ctg.category === selectedCat ? "bg-green" : "bg-white")
            }
          >
            <span>{ctg.name}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-row flex-wrap items-center ml-[-12px] mr-[-12px]">
        {selectedCat === "all"
          ? programs.map((prog, index) => (
              <div
                key={`prog-${index}`}
                className="flex justify-center items-center max-w-fit w-[33.33333%] mediamax-1023:w-[50%] mediamax-650:w-[100%] pl-[12px] pr-[12px] pb-[24px]"
              >
                <CourseCard program={prog} />
              </div>
            ))
          : programs
              .filter((el) => el.category === selectedCat)
              .map((prog, index) => (
                <div
                  key={`prog-${index}`}
                  className="flex justify-center items-center max-w-fit w-[33.33333%] mediamax-1023:w-[50%] mediamax-650:w-[100%] pl-[12px] pr-[12px] pb-[24px]"
                >
                  <CourseCard program={prog} />
                </div>
              ))}
      </div>
    </div>
  );
}

export default AllCourses;
