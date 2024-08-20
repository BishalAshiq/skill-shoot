"use client"
import React from 'react';
import style from "./PopCourseWeek.module.css";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";




const PopCourseWeek = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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
                    <Slider {...settings}>
                        <div>
                            <h3>Hello</h3>
                        </div>
                        <div>
                            <h3>Dullo</h3>
                        </div>
                        <div>
                            <h3>Dullo</h3>
                        </div>
                        <div>
                            <h3>Dullo</h3>
                        </div>
                        
                    </Slider>
                </div>

            </div>
        </div>
    );
};

export default PopCourseWeek;