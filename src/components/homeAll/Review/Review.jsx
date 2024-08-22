"use client"
import Slider from "react-slick";
import React, { useRef } from "react";
import style from "./Review.module.css";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Review = () => {

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
                <div className={style.Reviewtagsdiv}>
                    <h1 className={style.Reviewtag}>What do they <span Reviewtagspan>say?</span></h1>
                    <p className={style.Reviewtagp}>This is an honest review from members who have joined us</p>
                </div>
                <div className="container">
                    <Slider
                        ref={slider => {
                            sliderRef = slider;
                        }}
                        {...settings}
                    >
                        <div key={1}>
                            <div>
                                <div className={style.reviewSliderImgdiv}>
                                    <img className={style.reviewSliderImg} src="/images/dppic.jpeg" alt="" />
                                    <Stack spacing={1}>
                                        <Rating name="size-small" defaultValue={2} size="small" />
                                    </Stack>
                                    <span className={style.reviewSlidertag}>Jason Bay</span>
                                    <span className={style.reviewSliderp}>I am quite satisfied, because the skills I want or dream of can really be mastered</span>
                                </div>
                            </div>

                        </div>



                        <div key={2}>
                            <div>
                                <div className={style.reviewSliderImgdiv}>
                                    <img className={style.reviewSliderImg} src="/images/dppic.jpeg" alt="" />
                                    <Stack spacing={1}>
                                        <Rating name="size-small" defaultValue={2} size="small" />
                                    </Stack>
                                    <span className={style.reviewSlidertag}>Nany Brugman</span>
                                    <span className={style.reviewSliderp}>I am quite satisfied, because the skills I want or dream of can really be mastered</span>
                                </div>
                            </div>
                        </div>
                        <div key={3}>
                            <div>
                                <div className={style.reviewSliderImgdiv}>
                                    <img className={style.reviewSliderImg} src="/images/dppic.jpeg" alt="" />
                                    <Stack spacing={1}>
                                        <Rating name="size-small" defaultValue={2} size="small" />
                                    </Stack>
                                    <span className={style.reviewSlidertag}>Alexa Nowan</span>
                                    <span className={style.reviewSliderp}>I am quite satisfied, because the skills I want or dream of can really be mastered</span>
                                </div>
                            </div>
                        </div>
                        <div key={4}>
                            <div>
                                <div className={style.reviewSliderImgdiv}>
                                    <img className={style.reviewSliderImg} src="/images/dppic.jpeg" alt="" />
                                    <Stack spacing={1}>
                                        <Rating name="size-small" defaultValue={2} size="small" />
                                    </Stack>
                                    <span className={style.reviewSlidertag}>Jason Bay</span>
                                    <span className={style.reviewSliderp}>I am quite satisfied, because the skills I want or dream of can really be mastered</span>
                                </div>
                            </div>
                        </div>
                        <div key={5}>
                            <div>
                                <div className={style.reviewSliderImgdiv}>
                                    <img className={style.reviewSliderImg} src="/images/dppic.jpeg" alt="" />
                                    <Stack spacing={1}>
                                        <Rating name="size-small" defaultValue={2} size="small" />
                                    </Stack>
                                    <span className={style.reviewSlidertag}>Jason Bay</span>
                                    <span className={style.reviewSliderp}>I am quite satisfied, because the skills I want or dream of can really be mastered</span>
                                </div>
                            </div>
                        </div>
                        <div key={6}>
                            <div>
                                <div className={style.reviewSliderImgdiv}>
                                    <img className={style.reviewSliderImg} src="/images/dppic.jpeg" alt="" />
                                    <Stack spacing={1}>
                                        <Rating name="size-small" defaultValue={2} size="small" />
                                    </Stack>
                                    <span className={style.reviewSlidertag}>Jason Bay</span>
                                    <span className={style.reviewSliderp}>I am quite satisfied, because the skills I want or dream of can really be mastered</span>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <div style={{ textAlign: "center", margin: "20px 0" }}>
                        <span className={style.revsliderbutton} onClick={previous}>
                            <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.08331 16.8447L27.625 16.8447" stroke="#0C111F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15 25.8445C15 21.9874 7 16.8445 7 16.8445C7 16.8445 15 11.7016 15 7.84448" stroke="#0C111F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </span>
                        <span className={style.revsliderbutton} onClick={next}>
                            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.9167 10.8447L1.375 10.8447" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14 19.8445C14 15.9874 22 10.8445 22 10.8445C22 10.8445 14 5.70165 14 1.84448" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;