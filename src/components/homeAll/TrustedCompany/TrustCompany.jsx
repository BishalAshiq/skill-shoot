import React from 'react';
import style from "./TrustCompany.module.css";

const TrustCompany = () => {
    return (
        <div>
            <div>
                <div className={style.trusttextdiv}>
                    <h3>Trusted more than 100+ in the world</h3>
                    <p>they have asked us more than 3 times to teach their employees about various things. to improve their skills</p>
                </div>
                <div className={style.trustImgsdiv}>
                    <img className={style.trustImg} src='/images/uber.png' alt=''/>
                    <img className={style.trustImg1} src='/images/google.png' alt=''/>
                    <img className={style.trustImg2} src='/images/paypal.png' alt=''/>
                    <img className={style.trustImg3} src='/images/dribble.png' alt=''/>
                    <img className={style.trustImg4} src='/images/microsoft.png' alt=''/>
                </div>
            </div>
        </div>
    );
};

export default TrustCompany;