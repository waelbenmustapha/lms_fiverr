import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import CourseCard from "../../components/courseCard/CourseCard";

import Loader from "../../components/Loader";
import useAxiosToken from "../../utils/apis/AxiosWithToken";

function AllCourses() {
  //store programs data
  const axiosToken = useAxiosToken();
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
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
    let items = [{ name: "All Courses", category: "all" }];
    iterator.forEach((element) => {
      items.push({ name: element, category: element });
    });
    return items;
  }, [programs]);

  // get all programs
  const getPrograms = () => {
    axiosToken
      .get("https://mocki.io/v1/63ecf56c-bfab-4c82-a512-2304072ad3e5")
      .then((res) => {
        setLoading(false);
        setPrograms(res.data.items);
      });
  };

  // run api to load the data
  useEffect(() => {
    getPrograms();
  }, []);
  if (loading) {
    return (
      <div className="h-[calc(100vh-200px)] w-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="bg-gray pt-[64px] mediamax-1079:pt-[40px] pb-[150px] mediamax-1079:pb-[80px] px-[64px] mediamax-1079:px-[40px] mediamax-767:px-[20px]">
      <p className="text-black text-[32px] font-bold mediamax-1079:text-[24px] mb-[40px]">
        All Courses
      </p>
      <div className="flex flex-row flex-wrap items-center gap-[20px] mediamax-1079:gap-[20px] mb-[40px]">
        <p className="text-[16px] text-black">Filter Courses</p>
        {category.map((ctg, index) => (
          <div
            key={`category-${index}`}
            onClick={() => setselectedCat(ctg.category)}
            className={
              "flex justify-center items-center font-[inherit] text-[16px] mediamax-1079:text-[14px] font-bold h-[55px] mediamax-1079:h-[40px] px-[32px] py-[8px] mediamax-1079:px-[28px] rounded-[2px] border-blue border-[2px] outline-none whitespace-nowrap cursor-pointer " +
              (ctg.category === selectedCat
                ? "bg-blue text-white"
                : "bg-white text-blue")
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
