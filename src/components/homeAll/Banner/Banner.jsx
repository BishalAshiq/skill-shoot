
import React from 'react';

import style from "./Banner.module.css";

const Banner = () => {
    return (
        <div>
            <div className={style.bannerfulldiv}>
                <div className='row'>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                        <div>
                            <div>
                                <h1 className={style.bannerTeg}>There is <span className={style.alwaystext}>always</span> something new for us to learn</h1>
                                <p className={style.bannerParagraph}>we have created more than 100+ materials on various things that will help your career, with mentors who are experienced in their fields.</p>
                            </div>

                            <div className={style.bannerlowerpart}>
                                <button className={style.bannerbtn}>Start Journey <span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 1C2 0.447715 2.44772 0 3 0L11 5.36442e-07C11.5523 5.36442e-07 12 0.447716 12 1V9C12 9.55229 11.5523 10 11 10C10.4477 10 10 9.55229 10 9V3.41421L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L8.58579 2L3 2C2.44772 2 2 1.55228 2 1Z" fill="white" />
                                    </svg>
                                </span> 
                                </button>

                                <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.1838 7.38132C23.1712 6.4346 22.994 5.49729 22.6601 4.61132C22.3705 3.86401 21.9283 3.18532 21.3616 2.61861C20.7948 2.0519 20.1161 1.60963 19.3688 1.32007C18.4943 0.991765 17.5703 0.814245 16.6363 0.795068C15.4338 0.741318 15.0526 0.726318 12.0001 0.726318C8.94759 0.726318 8.55634 0.726318 7.36259 0.795068C6.42904 0.814386 5.50552 0.991903 4.63134 1.32007C3.88391 1.60943 3.20511 2.05162 2.63838 2.61836C2.07164 3.18509 1.62945 3.86389 1.34009 4.61132C1.01113 5.48523 0.833992 6.40896 0.816338 7.34257C0.762588 8.54632 0.746338 8.92757 0.746338 11.9801C0.746338 15.0326 0.746338 15.4226 0.816338 16.6176C0.835088 17.5526 1.01134 18.4751 1.34009 19.3513C1.62993 20.0985 2.07246 20.777 2.63938 21.3435C3.20631 21.91 3.88517 22.352 4.63259 22.6413C5.50438 22.9828 6.42805 23.173 7.36384 23.2038C8.56759 23.2576 8.94884 23.2738 12.0013 23.2738C15.0538 23.2738 15.4451 23.2738 16.6388 23.2038C17.5728 23.1854 18.4968 23.0083 19.3713 22.6801C20.1185 22.3902 20.797 21.9478 21.3636 21.3811C21.9303 20.8145 22.3727 20.1359 22.6626 19.3888C22.9913 18.5138 23.1676 17.5913 23.1863 16.6551C23.2401 15.4526 23.2563 15.0713 23.2563 12.0176C23.2538 8.96507 23.2538 8.57757 23.1838 7.38132ZM11.9926 17.7526C8.80009 17.7526 6.21384 15.1663 6.21384 11.9738C6.21384 8.78132 8.80009 6.19507 11.9926 6.19507C13.5252 6.19507 14.9951 6.8039 16.0788 7.88763C17.1625 8.97135 17.7713 10.4412 17.7713 11.9738C17.7713 13.5064 17.1625 14.9763 16.0788 16.06C14.9951 17.1437 13.5252 17.7526 11.9926 17.7526ZM18.0013 7.32882C17.8243 7.32898 17.649 7.29424 17.4855 7.22658C17.3219 7.15892 17.1733 7.05967 17.0481 6.93451C16.923 6.80935 16.8237 6.66074 16.7561 6.49718C16.6884 6.33362 16.6537 6.15832 16.6538 5.98132C16.6538 5.80444 16.6887 5.6293 16.7564 5.46589C16.824 5.30248 16.9233 5.154 17.0483 5.02893C17.1734 4.90386 17.3219 4.80466 17.4853 4.73697C17.6487 4.66928 17.8238 4.63444 18.0007 4.63444C18.1776 4.63444 18.3527 4.66928 18.5161 4.73697C18.6796 4.80466 18.828 4.90386 18.9531 5.02893C19.0782 5.154 19.1774 5.30248 19.2451 5.46589C19.3127 5.6293 19.3476 5.80444 19.3476 5.98132C19.3476 6.72632 18.7451 7.32882 18.0013 7.32882Z" fill="white" />
                                    </svg>

                                </span>

                                <span>
                                    <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5412 4.99618C22.5575 5.21493 22.5575 5.43243 22.5575 5.64993C22.5575 12.3062 17.4912 19.9762 8.2325 19.9762C5.38 19.9762 2.73 19.1499 0.5 17.7149C0.905 17.7612 1.295 17.7774 1.71625 17.7774C3.98249 17.7829 6.18456 17.0251 7.9675 15.6262C6.91678 15.6072 5.89822 15.2605 5.05405 14.6346C4.20988 14.0087 3.58223 13.1348 3.25875 12.1349C3.57 12.1812 3.8825 12.2124 4.21 12.2124C4.66125 12.2124 5.115 12.1499 5.53625 12.0412C4.39595 11.811 3.37059 11.1929 2.63452 10.292C1.89845 9.39121 1.49712 8.26324 1.49875 7.09993V7.03743C2.17 7.41118 2.94875 7.64493 3.77375 7.67618C3.08261 7.21691 2.5159 6.59371 2.12417 5.86217C1.73245 5.13063 1.52789 4.3135 1.52875 3.48368C1.52875 2.54868 1.7775 1.69118 2.21375 0.943682C3.47892 2.49996 5.05688 3.77313 6.84542 4.68076C8.63396 5.58838 10.5932 6.1102 12.5963 6.21243C12.5188 5.83743 12.4712 5.44868 12.4712 5.05868C12.4709 4.39738 12.6009 3.74251 12.8538 3.13148C13.1068 2.52046 13.4776 1.96528 13.9452 1.49767C14.4128 1.03006 14.968 0.659196 15.5791 0.40628C16.1901 0.153364 16.845 0.0233537 17.5062 0.0236823C18.9562 0.0236823 20.265 0.631182 21.185 1.61368C22.3122 1.3957 23.3932 0.98421 24.38 0.397432C24.0043 1.56095 23.2172 2.54756 22.1663 3.17243C23.166 3.05841 24.143 2.7955 25.065 2.39243C24.3764 3.39631 23.5232 4.27661 22.5412 4.99618Z" fill="white" />
                                    </svg>

                                </span>
                                <span>
                                    <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.525 0.324951C16.2768 0.76956 16.0555 1.22873 15.8625 1.69995C13.966 1.40001 12.0341 1.40001 10.1375 1.69995C9.94451 1.22873 9.72327 0.76956 9.47502 0.324951C7.68851 0.630202 5.95177 1.17687 4.31252 1.94995C1.38119 6.18031 0.051815 11.3161 0.562518 16.4375C2.47282 17.8735 4.61684 18.9688 6.90002 19.6749C7.41991 18.9882 7.8839 18.2609 8.28752 17.5C7.54261 17.2253 6.82664 16.8778 6.15002 16.4625C6.3356 16.339 6.51114 16.201 6.67502 16.05C8.64809 17.0003 10.81 17.4939 13 17.4939C15.1901 17.4939 17.3519 17.0003 19.325 16.05C19.5 16.2 19.675 16.3375 19.85 16.4625C19.1697 16.8745 18.4545 17.2259 17.7125 17.5125C18.0994 18.2906 18.551 19.0349 19.0625 19.7375C21.3428 19.0337 23.4832 17.9382 25.3875 16.5C25.9105 11.3777 24.58 6.23768 21.6375 2.01245C20.0167 1.22337 18.2971 0.655789 16.525 0.324951ZM8.85002 13.5125C8.2245 13.4675 7.6407 13.1821 7.22117 12.7159C6.80164 12.2498 6.57901 11.6392 6.60002 11.0125C6.57584 10.3848 6.79738 9.77256 7.21753 9.30571C7.63769 8.83887 8.22334 8.55429 8.85002 8.51245C9.47669 8.55429 10.0623 8.83887 10.4825 9.30571C10.9027 9.77256 11.1242 10.3848 11.1 11.0125C11.1242 11.6401 10.9027 12.2523 10.4825 12.7192C10.0623 13.186 9.47669 13.4706 8.85002 13.5125ZM17.15 13.5125C16.5245 13.4675 15.9407 13.1821 15.5212 12.7159C15.1016 12.2498 14.879 11.6392 14.9 11.0125C14.8758 10.3848 15.0974 9.77256 15.5175 9.30571C15.9377 8.83887 16.5233 8.55429 17.15 8.51245C17.7779 8.55117 18.3654 8.83483 18.7862 9.30238C19.207 9.76994 19.4274 10.384 19.4 11.0125C19.4274 11.6409 19.207 12.255 18.7862 12.7225C18.3654 13.1901 17.7779 13.4737 17.15 13.5125Z" fill="white" />
                                </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                        <div className={style.bannerrightSidefull}>
                            <div className={style.bannerrightSide}>
                                <div className={style.bannercarddiv}>
                                    <div>
                                        <img className={style.bannercardImg} src='/images/dppic.jpeg' alt='' />
                                    </div>
                                    <div className={style.cardtextbtn}>
                                        <span className={style.cardtebtn}>Learn basic ui ux design</span>
                                        <span className={style.cardtebtntime}>Today at 12 PM</span>
                                        <button className={style.cardtebtnJoin}>Join Now</button>
                                    </div>
                                </div>

                                <div>
                                    <img className={style.bannerImg} src="/images/banner.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;