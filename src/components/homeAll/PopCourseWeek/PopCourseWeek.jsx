"use client"
import Slider from "react-slick";
import React from 'react';
import style from "./PopCourseWeek.module.css"

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


const PopCourseWeek = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 6000,
        cssEase: "linear",
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

                    <div className="container">
                        <Slider {...settings}>
                            <div>
                                <Card className={style.cardfulldiv}>
                                    <CardMedia
                                        component="iframe"
                                        sx={{ height: 250 }}
                                        src="https://www.youtube.com/embed/eXDNkwIeOqA?si=eoshdIXXtuXWR9Ct"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                    <div className={style.cardtextfulldiv}>
                                        <div>
                                            <h3 className={style.PopCoursecardtag}> Basics of learning team management </h3>
                                        </div>
                                        <div className={style.cardInfofulldiv}>
                                            <div className={style.cardInfosingdiv}>
                                                <img className={style.cardimg} src="/images/dppic.jpeg" alt="" />
                                                <div className={style.cardimgtextPdiv}>
                                                    <span className={style.cardimgtextP}>Jone Owel</span>
                                                    <span className={style.cardimgtextspan}>IT Manager</span>
                                                </div>
                                            </div>
                                            <div className={style.cardInfosingdiv}>
                                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.5 2.91669C16.0578 2.91669 14.6481 3.34434 13.449 4.14555C12.2499 4.94677 11.3153 6.08558 10.7634 7.41795C10.2115 8.75033 10.0671 10.2164 10.3484 11.6309C10.6298 13.0453 11.3243 14.3446 12.344 15.3643C13.3638 16.3841 14.663 17.0786 16.0775 17.3599C17.4919 17.6413 18.958 17.4969 20.2904 16.945C21.6228 16.3931 22.7616 15.4585 23.5628 14.2594C24.364 13.0603 24.7917 11.6505 24.7917 10.2084C24.7917 8.27448 24.0234 6.41982 22.656 5.05237C21.2885 3.68491 19.4339 2.91669 17.5 2.91669ZM17.5 14.5834C16.6347 14.5834 15.7888 14.3268 15.0694 13.846C14.3499 13.3653 13.7892 12.682 13.458 11.8826C13.1269 11.0832 13.0403 10.2035 13.2091 9.35483C13.3779 8.50617 13.7946 7.72662 14.4064 7.11476C15.0183 6.50291 15.7978 6.08623 16.6465 5.91742C17.4951 5.74861 18.3748 5.83525 19.1742 6.16638C19.9737 6.49751 20.6569 7.05827 21.1377 7.77773C21.6184 8.4972 21.875 9.34306 21.875 10.2084C21.875 11.3687 21.4141 12.4815 20.5936 13.3019C19.7731 14.1224 18.6603 14.5834 17.5 14.5834ZM30.625 30.625V29.1667C30.625 26.4593 29.5495 23.8627 27.635 21.9483C25.7206 20.0339 23.1241 18.9584 20.4167 18.9584H14.5833C11.8759 18.9584 9.27939 20.0339 7.36495 21.9483C5.45052 23.8627 4.375 26.4593 4.375 29.1667V30.625H7.29167V29.1667C7.29167 27.2328 8.05989 25.3782 9.42735 24.0107C10.7948 22.6432 12.6495 21.875 14.5833 21.875H20.4167C22.3505 21.875 24.2052 22.6432 25.5727 24.0107C26.9401 25.3782 27.7083 27.2328 27.7083 29.1667V30.625H30.625Z" fill="#245D51" />
                                                </svg>

                                                <div className={style.cardimgtextPdiv}>
                                                    <span className={style.cardimgtextP}>Jone Owel</span>
                                                    <span className={style.cardimgtextspan}>IT Manager</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={style.cardInfobtndiv}>
                                            <button className={style.cardInfobtn}>Buy Now</button>
                                            <p className={style.cardInfobtnp}>$120 <span className={style.cardInfobtnspan}>/25 Videos</span></p>
                                        </div>
                                    </div>

                                </Card>
                            </div>
                            <div>
                                <Card className={style.cardfulldiv}>
                                    <CardMedia
                                        component="iframe"
                                        sx={{ height: 250 }}
                                        src="https://www.youtube.com/embed/wR0jg0eQsZA?si=c2MgvcJ9O1s0tVCM"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                    <div className={style.cardtextfulldiv}>
                                        <div>
                                            <h3 className={style.PopCoursecardtag}> Learn basic database structure </h3>
                                        </div>
                                        <div className={style.cardInfofulldiv}>
                                            <div className={style.cardInfosingdiv}>
                                                <img className={style.cardimg} src="/images/dppic.jpeg" alt="" />
                                                <div className={style.cardimgtextPdiv}>
                                                    <span className={style.cardimgtextP}>Roynaldo Jr</span>
                                                    <span className={style.cardimgtextspan}>Data Science</span>
                                                </div>
                                            </div>
                                            <div className={style.cardInfosingdiv}>
                                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.5 2.91669C16.0578 2.91669 14.6481 3.34434 13.449 4.14555C12.2499 4.94677 11.3153 6.08558 10.7634 7.41795C10.2115 8.75033 10.0671 10.2164 10.3484 11.6309C10.6298 13.0453 11.3243 14.3446 12.344 15.3643C13.3638 16.3841 14.663 17.0786 16.0775 17.3599C17.4919 17.6413 18.958 17.4969 20.2904 16.945C21.6228 16.3931 22.7616 15.4585 23.5628 14.2594C24.364 13.0603 24.7917 11.6505 24.7917 10.2084C24.7917 8.27448 24.0234 6.41982 22.656 5.05237C21.2885 3.68491 19.4339 2.91669 17.5 2.91669ZM17.5 14.5834C16.6347 14.5834 15.7888 14.3268 15.0694 13.846C14.3499 13.3653 13.7892 12.682 13.458 11.8826C13.1269 11.0832 13.0403 10.2035 13.2091 9.35483C13.3779 8.50617 13.7946 7.72662 14.4064 7.11476C15.0183 6.50291 15.7978 6.08623 16.6465 5.91742C17.4951 5.74861 18.3748 5.83525 19.1742 6.16638C19.9737 6.49751 20.6569 7.05827 21.1377 7.77773C21.6184 8.4972 21.875 9.34306 21.875 10.2084C21.875 11.3687 21.4141 12.4815 20.5936 13.3019C19.7731 14.1224 18.6603 14.5834 17.5 14.5834ZM30.625 30.625V29.1667C30.625 26.4593 29.5495 23.8627 27.635 21.9483C25.7206 20.0339 23.1241 18.9584 20.4167 18.9584H14.5833C11.8759 18.9584 9.27939 20.0339 7.36495 21.9483C5.45052 23.8627 4.375 26.4593 4.375 29.1667V30.625H7.29167V29.1667C7.29167 27.2328 8.05989 25.3782 9.42735 24.0107C10.7948 22.6432 12.6495 21.875 14.5833 21.875H20.4167C22.3505 21.875 24.2052 22.6432 25.5727 24.0107C26.9401 25.3782 27.7083 27.2328 27.7083 29.1667V30.625H30.625Z" fill="#245D51" />
                                                </svg>

                                                <div className={style.cardimgtextPdiv}>
                                                    <span className={style.cardimgtextP}>55</span>
                                                    <span className={style.cardimgtextspan}>Participant</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={style.cardInfobtndiv}>
                                            <button className={style.cardInfobtn}>Buy Now</button>
                                            <p className={style.cardInfobtnp}>$180 <span className={style.cardInfobtnspan}>/20 Videos</span></p>
                                        </div>
                                    </div>

                                </Card>
                            </div>
                            <div>
                                <Card className={style.cardfulldiv}>
                                    <CardMedia
                                        component="iframe"
                                        sx={{ height: 250 }}
                                        src="https://www.youtube.com/embed/dzkAh5o5Nv8?si=yrBg-2XLrFzKMKWC"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                    <div className={style.cardtextfulldiv}>
                                        <div>
                                            <h3 className={style.PopCoursecardtag}> Create dynamic website with basic php </h3>
                                        </div>
                                        <div className={style.cardInfofulldiv}>
                                            <div className={style.cardInfosingdiv}>
                                                <img className={style.cardimg} src="/images/dppic.jpeg" alt="" />
                                                <div className={style.cardimgtextPdiv}>
                                                    <span className={style.cardimgtextP}>Markus Low</span>
                                                    <span className={style.cardimgtextspan}>Programer</span>
                                                </div>
                                            </div>
                                            <div className={style.cardInfosingdiv}>
                                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.5 2.91669C16.0578 2.91669 14.6481 3.34434 13.449 4.14555C12.2499 4.94677 11.3153 6.08558 10.7634 7.41795C10.2115 8.75033 10.0671 10.2164 10.3484 11.6309C10.6298 13.0453 11.3243 14.3446 12.344 15.3643C13.3638 16.3841 14.663 17.0786 16.0775 17.3599C17.4919 17.6413 18.958 17.4969 20.2904 16.945C21.6228 16.3931 22.7616 15.4585 23.5628 14.2594C24.364 13.0603 24.7917 11.6505 24.7917 10.2084C24.7917 8.27448 24.0234 6.41982 22.656 5.05237C21.2885 3.68491 19.4339 2.91669 17.5 2.91669ZM17.5 14.5834C16.6347 14.5834 15.7888 14.3268 15.0694 13.846C14.3499 13.3653 13.7892 12.682 13.458 11.8826C13.1269 11.0832 13.0403 10.2035 13.2091 9.35483C13.3779 8.50617 13.7946 7.72662 14.4064 7.11476C15.0183 6.50291 15.7978 6.08623 16.6465 5.91742C17.4951 5.74861 18.3748 5.83525 19.1742 6.16638C19.9737 6.49751 20.6569 7.05827 21.1377 7.77773C21.6184 8.4972 21.875 9.34306 21.875 10.2084C21.875 11.3687 21.4141 12.4815 20.5936 13.3019C19.7731 14.1224 18.6603 14.5834 17.5 14.5834ZM30.625 30.625V29.1667C30.625 26.4593 29.5495 23.8627 27.635 21.9483C25.7206 20.0339 23.1241 18.9584 20.4167 18.9584H14.5833C11.8759 18.9584 9.27939 20.0339 7.36495 21.9483C5.45052 23.8627 4.375 26.4593 4.375 29.1667V30.625H7.29167V29.1667C7.29167 27.2328 8.05989 25.3782 9.42735 24.0107C10.7948 22.6432 12.6495 21.875 14.5833 21.875H20.4167C22.3505 21.875 24.2052 22.6432 25.5727 24.0107C26.9401 25.3782 27.7083 27.2328 27.7083 29.1667V30.625H30.625Z" fill="#245D51" />
                                                </svg>

                                                <div className={style.cardimgtextPdiv}>
                                                    <span className={style.cardimgtextP}>98</span>
                                                    <span className={style.cardimgtextspan}>Participant</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={style.cardInfobtndiv}>
                                            <button className={style.cardInfobtn}>Buy Now</button>
                                            <p className={style.cardInfobtnp}>$135 <span className={style.cardInfobtnspan}>/20 Videos</span></p>
                                        </div>
                                    </div>

                                </Card>
                            </div>
                            <div>
                                <Card className={style.cardfulldiv}>
                                    <CardMedia
                                        component="iframe"
                                        sx={{ height: 250 }}
                                        src="https://www.youtube.com/embed/dzkAh5o5Nv8?si=yrBg-2XLrFzKMKWC"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                    <div className={style.cardtextfulldiv}>
                                        <div>
                                            <h3 className={style.PopCoursecardtag}> Basics of learning team management </h3>
                                        </div>
                                        <div className={style.cardInfofulldiv}>
                                            <div className={style.cardInfosingdiv}>
                                                <img className={style.cardimg} src="/images/dppic.jpeg" alt="" />
                                                <div className={style.cardimgtextPdiv}>
                                                    <span className={style.cardimgtextP}>Jone Owel</span>
                                                    <span className={style.cardimgtextspan}>IT Manager</span>
                                                </div>
                                            </div>
                                            <div className={style.cardInfosingdiv}>
                                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.5 2.91669C16.0578 2.91669 14.6481 3.34434 13.449 4.14555C12.2499 4.94677 11.3153 6.08558 10.7634 7.41795C10.2115 8.75033 10.0671 10.2164 10.3484 11.6309C10.6298 13.0453 11.3243 14.3446 12.344 15.3643C13.3638 16.3841 14.663 17.0786 16.0775 17.3599C17.4919 17.6413 18.958 17.4969 20.2904 16.945C21.6228 16.3931 22.7616 15.4585 23.5628 14.2594C24.364 13.0603 24.7917 11.6505 24.7917 10.2084C24.7917 8.27448 24.0234 6.41982 22.656 5.05237C21.2885 3.68491 19.4339 2.91669 17.5 2.91669ZM17.5 14.5834C16.6347 14.5834 15.7888 14.3268 15.0694 13.846C14.3499 13.3653 13.7892 12.682 13.458 11.8826C13.1269 11.0832 13.0403 10.2035 13.2091 9.35483C13.3779 8.50617 13.7946 7.72662 14.4064 7.11476C15.0183 6.50291 15.7978 6.08623 16.6465 5.91742C17.4951 5.74861 18.3748 5.83525 19.1742 6.16638C19.9737 6.49751 20.6569 7.05827 21.1377 7.77773C21.6184 8.4972 21.875 9.34306 21.875 10.2084C21.875 11.3687 21.4141 12.4815 20.5936 13.3019C19.7731 14.1224 18.6603 14.5834 17.5 14.5834ZM30.625 30.625V29.1667C30.625 26.4593 29.5495 23.8627 27.635 21.9483C25.7206 20.0339 23.1241 18.9584 20.4167 18.9584H14.5833C11.8759 18.9584 9.27939 20.0339 7.36495 21.9483C5.45052 23.8627 4.375 26.4593 4.375 29.1667V30.625H7.29167V29.1667C7.29167 27.2328 8.05989 25.3782 9.42735 24.0107C10.7948 22.6432 12.6495 21.875 14.5833 21.875H20.4167C22.3505 21.875 24.2052 22.6432 25.5727 24.0107C26.9401 25.3782 27.7083 27.2328 27.7083 29.1667V30.625H30.625Z" fill="#245D51" />
                                                </svg>

                                                <div className={style.cardimgtextPdiv}>
                                                    <span className={style.cardimgtextP}>Jone Owel</span>
                                                    <span className={style.cardimgtextspan}>IT Manager</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={style.cardInfobtndiv}>
                                            <button className={style.cardInfobtn}>Buy Now</button>
                                            <p className={style.cardInfobtnp}>$120 <span className={style.cardInfobtnspan}>/25 Videos</span></p>
                                        </div>
                                    </div>

                                </Card>
                            </div>
                            <div>
                                <Card className={style.cardfulldiv}>
                                    <CardMedia
                                        component="iframe"
                                        sx={{ height: 250 }}
                                        src="https://www.youtube.com/embed/dzkAh5o5Nv8?si=yrBg-2XLrFzKMKWC"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                    <div className={style.cardtextfulldiv}>
                                        <div>
                                            <h3 className={style.PopCoursecardtag}> Learn basic database structure </h3>
                                        </div>
                                        <div className={style.cardInfofulldiv}>
                                            <div className={style.cardInfosingdiv}>
                                                <img className={style.cardimg} src="/images/dppic.jpeg" alt="" />
                                                <div className={style.cardimgtextPdiv}>
                                                    <span className={style.cardimgtextP}>Roynaldo Jr</span>
                                                    <span className={style.cardimgtextspan}>Data Science</span>
                                                </div>
                                            </div>
                                            <div className={style.cardInfosingdiv}>
                                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.5 2.91669C16.0578 2.91669 14.6481 3.34434 13.449 4.14555C12.2499 4.94677 11.3153 6.08558 10.7634 7.41795C10.2115 8.75033 10.0671 10.2164 10.3484 11.6309C10.6298 13.0453 11.3243 14.3446 12.344 15.3643C13.3638 16.3841 14.663 17.0786 16.0775 17.3599C17.4919 17.6413 18.958 17.4969 20.2904 16.945C21.6228 16.3931 22.7616 15.4585 23.5628 14.2594C24.364 13.0603 24.7917 11.6505 24.7917 10.2084C24.7917 8.27448 24.0234 6.41982 22.656 5.05237C21.2885 3.68491 19.4339 2.91669 17.5 2.91669ZM17.5 14.5834C16.6347 14.5834 15.7888 14.3268 15.0694 13.846C14.3499 13.3653 13.7892 12.682 13.458 11.8826C13.1269 11.0832 13.0403 10.2035 13.2091 9.35483C13.3779 8.50617 13.7946 7.72662 14.4064 7.11476C15.0183 6.50291 15.7978 6.08623 16.6465 5.91742C17.4951 5.74861 18.3748 5.83525 19.1742 6.16638C19.9737 6.49751 20.6569 7.05827 21.1377 7.77773C21.6184 8.4972 21.875 9.34306 21.875 10.2084C21.875 11.3687 21.4141 12.4815 20.5936 13.3019C19.7731 14.1224 18.6603 14.5834 17.5 14.5834ZM30.625 30.625V29.1667C30.625 26.4593 29.5495 23.8627 27.635 21.9483C25.7206 20.0339 23.1241 18.9584 20.4167 18.9584H14.5833C11.8759 18.9584 9.27939 20.0339 7.36495 21.9483C5.45052 23.8627 4.375 26.4593 4.375 29.1667V30.625H7.29167V29.1667C7.29167 27.2328 8.05989 25.3782 9.42735 24.0107C10.7948 22.6432 12.6495 21.875 14.5833 21.875H20.4167C22.3505 21.875 24.2052 22.6432 25.5727 24.0107C26.9401 25.3782 27.7083 27.2328 27.7083 29.1667V30.625H30.625Z" fill="#245D51" />
                                                </svg>

                                                <div className={style.cardimgtextPdiv}>
                                                    <span className={style.cardimgtextP}>55</span>
                                                    <span className={style.cardimgtextspan}>Participant</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={style.cardInfobtndiv}>
                                            <button className={style.cardInfobtn}>Buy Now</button>
                                            <p className={style.cardInfobtnp}>$180 <span className={style.cardInfobtnspan}>/20 Videos</span></p>
                                        </div>
                                    </div>

                                </Card>
                            </div>
                            <div>
                                <Card className={style.cardfulldiv}>
                                    <CardMedia
                                        component="iframe"
                                        sx={{ height: 250 }}
                                        src="https://www.youtube.com/embed/dzkAh5o5Nv8?si=yrBg-2XLrFzKMKWC"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                    <div className={style.cardtextfulldiv}>
                                        <div>
                                            <h3 className={style.PopCoursecardtag}> Create dynamic website with basic php </h3>
                                        </div>
                                        <div className={style.cardInfofulldiv}>
                                            <div className={style.cardInfosingdiv}>
                                                <img className={style.cardimg} src="/images/dppic.jpeg" alt="" />
                                                <div className={style.cardimgtextPdiv}>
                                                    <span className={style.cardimgtextP}>Markus Low</span>
                                                    <span className={style.cardimgtextspan}>Programer</span>
                                                </div>
                                            </div>
                                            <div className={style.cardInfosingdiv}>
                                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.5 2.91669C16.0578 2.91669 14.6481 3.34434 13.449 4.14555C12.2499 4.94677 11.3153 6.08558 10.7634 7.41795C10.2115 8.75033 10.0671 10.2164 10.3484 11.6309C10.6298 13.0453 11.3243 14.3446 12.344 15.3643C13.3638 16.3841 14.663 17.0786 16.0775 17.3599C17.4919 17.6413 18.958 17.4969 20.2904 16.945C21.6228 16.3931 22.7616 15.4585 23.5628 14.2594C24.364 13.0603 24.7917 11.6505 24.7917 10.2084C24.7917 8.27448 24.0234 6.41982 22.656 5.05237C21.2885 3.68491 19.4339 2.91669 17.5 2.91669ZM17.5 14.5834C16.6347 14.5834 15.7888 14.3268 15.0694 13.846C14.3499 13.3653 13.7892 12.682 13.458 11.8826C13.1269 11.0832 13.0403 10.2035 13.2091 9.35483C13.3779 8.50617 13.7946 7.72662 14.4064 7.11476C15.0183 6.50291 15.7978 6.08623 16.6465 5.91742C17.4951 5.74861 18.3748 5.83525 19.1742 6.16638C19.9737 6.49751 20.6569 7.05827 21.1377 7.77773C21.6184 8.4972 21.875 9.34306 21.875 10.2084C21.875 11.3687 21.4141 12.4815 20.5936 13.3019C19.7731 14.1224 18.6603 14.5834 17.5 14.5834ZM30.625 30.625V29.1667C30.625 26.4593 29.5495 23.8627 27.635 21.9483C25.7206 20.0339 23.1241 18.9584 20.4167 18.9584H14.5833C11.8759 18.9584 9.27939 20.0339 7.36495 21.9483C5.45052 23.8627 4.375 26.4593 4.375 29.1667V30.625H7.29167V29.1667C7.29167 27.2328 8.05989 25.3782 9.42735 24.0107C10.7948 22.6432 12.6495 21.875 14.5833 21.875H20.4167C22.3505 21.875 24.2052 22.6432 25.5727 24.0107C26.9401 25.3782 27.7083 27.2328 27.7083 29.1667V30.625H30.625Z" fill="#245D51" />
                                                </svg>

                                                <div className={style.cardimgtextPdiv}>
                                                    <span className={style.cardimgtextP}>98</span>
                                                    <span className={style.cardimgtextspan}>Participant</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={style.cardInfobtndiv}>
                                            <button className={style.cardInfobtn}>Buy Now</button>
                                            <p className={style.cardInfobtnp}>$135 <span className={style.cardInfobtnspan}>/20 Videos</span></p>
                                        </div>
                                    </div>

                                </Card>
                            </div>

                        </Slider>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default PopCourseWeek;





