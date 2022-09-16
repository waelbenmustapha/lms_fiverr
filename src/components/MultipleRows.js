import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseCard from "./courseCard/CourseCard";

export default class MultipleRows extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      slidesToShow: 2.2,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
    };
    return (
      <div>
        <h2>Multiple Rows</h2>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div>
            <CourseCard />
          </div>
          <div>
            <CourseCard />
          </div>
          <div>
            <CourseCard />
          </div>
          <div>
            <CourseCard />
          </div>
          <div>
            <CourseCard />
          </div>
          <div>
            <CourseCard />
          </div>
          <div>
            <CourseCard />
          </div>
          <div>
            <CourseCard />
          </div>
          <div>
            <CourseCard />
          </div>
          <div>
            <CourseCard />
          </div>
          <div>
            <CourseCard />
          </div>
          <div>
            <CourseCard />
          </div>
          <div>
            <CourseCard />
          </div>
          <div>
            <CourseCard />
          </div>
          <div>
            <CourseCard />
          </div>
          <div>
            <CourseCard />
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
