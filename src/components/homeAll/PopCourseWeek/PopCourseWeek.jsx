"use client"; // Required for client-side components in Next.js 13+

import React from "react";


import style from "./PopCourseWeek.module.css";



const PopCourseWeek = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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

{/* 
                    <Slider {...settings}>
                        <div>
                            <h3>Slide 1</h3>
                        </div>
                        <div>
                            <h3>Slide 2</h3>
                        </div>
                        <div>
                            <h3>Slide 3</h3>
                        </div>
                        <div>
                            <h3>Slide 4</h3>
                        </div>
                        <div>
                            <h3>Slide 5</h3>
                        </div>
                    </Slider> */}
                </div>

            </div>
        </div>
    );
};

export default PopCourseWeek;