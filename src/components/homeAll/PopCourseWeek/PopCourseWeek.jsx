"use client"; // Required for client-side components in Next.js 13+
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import style from "./PopCourseWeek.module.css";



const PopCourseWeek = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div>
            <div className={style.PopCourseWeekfulldiv}>
                <div className={style.PopCourseWeektextdiv}>
                    <h2 className={style.PopCourseWeekTag}>
                        Popular courses of the week
                    </h2>
                    <p className={style.PopCourseWeekText}>List of the most popular lists that are often studied by our members</p>
                </div>


                <div>

                    <div>
                        I want a slider in next js pattern

                    </div>
                    {/* <Slider {...settings}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider> */}

                </div>

            </div>
        </div>
    );
};

export default PopCourseWeek;