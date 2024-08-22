"use client"
import Slider from "react-slick";
import React from 'react';
import style from "./PopCourseWeek.module.css"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PopCourseWeek = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
                                        <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="iframe"
                        sx={{ height: 315 }}
                        src="https://www.youtube.com/embed/dzkAh5o5Nv8?si=yrBg-2XLrFzKMKWC"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Basics of learning team management
                        </Typography>
                    </CardContent>
                    <div>
                        <div>
                            <img className={style.cardimg} src="/images/dppic.jpeg" alt=""/>
                        </div>
                    </div>
                    </Card>
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
                        <div>
                            <h3>7</h3>
                        </div>
                        <div>
                            <h3>8</h3>
                        </div>
                    </Slider>
                </div>
               

             </div>
              
            </div>
        </div>
    );
};

export default PopCourseWeek;





















// "use client"; // Required for client-side components in Next.js 13+
// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import style from "./PopCourseWeek.module.css";



// const PopCourseWeek = () => {
//     var settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         initialSlide: 0,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };
//     return (
//         <div>
//             <div className={style.PopCourseWeekfulldiv}>
//                 <div className={style.PopCourseWeektextdiv}>
//                     <h2 className={style.PopCourseWeekTag}>
//                         Popular courses of the week
//                     </h2>
//                     <p className={style.PopCourseWeekText}>List of the most popular lists that are often studied by our members</p>
//                 </div>


               

//             </div>
//         </div>
//     );
// };

// export default PopCourseWeek;