import React from 'react';
import style from "./TrustCompany.module.css";

const TrustCompany = () => {
    return (
        <div>
            <div>
                <div className={style.trusttextdiv}>
                    <h3 className={style.trusttexttag}>Trusted more than 100+ in the world</h3>
                    <p className={style.trusttextparagra}>they have asked us more than 3 times to teach their employees about various things. to improve their skills</p>
                </div>
                <div className={style.trustImgsdiv}>
                    <img className={style.trustImg} src='/images/uber.png' alt=''/>
                    <img className={style.trustImg1} src='/images/google.png' alt=''/>
                    <img className={style.trustImg2} src='/images/paypal.png' alt=''/>
                    <img className={style.trustImg3} src='/images/dribble.png' alt=''/>
                    <img className={style.trustImg4} src='/images/microsoft.png' alt=''/>
                </div>
            </div>


            <div className={style.hcnyareadiv}>
                <div className={style.hcnyarea}>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div className={style.hcnytextarea}>
                                <p className={style.hcyntag}>
                                Happy <span className={style.hcyntagspan}>Chinese New Year</span>, 20% discount for you today
                                </p>
                                <button className={style.hcynbtn}>
                                Subscribe Course
                                </button>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div className={style.hcnypicfulldiv}>
                                <div className={style.hcnypicdiv}>
                                    <img className={style.hcnypic} src='/images/HCNYpic.png' alt=''/>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustCompany;