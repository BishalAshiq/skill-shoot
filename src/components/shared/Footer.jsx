import Link from 'next/link';
import React from 'react';
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={style.footerFullDiv}>
            <div>
                <div className={style.footertagstextsDiv}>
                    <h1 className={style.footertags}>Subscribe to get notified about update</h1>
                    <p className={style.footertexts}>By subscribing with your mail, you will accept our privacy policy</p>

                    <div className={style.footerInputsDiv}>
                        <input className={style.footerInput} type='email' placeholder='Enter your email' />
                        <button className={style.footerInputsbutton}>Subscribe us</button>
                    </div>
                </div>


                <div className={style.footeritemsLastdiv}>
                <h6 className={style.CompanyTag}>Skill <span className={style.CompanyTagspan}>Shoot</span></h6>
                    <div className={style.footeritemsfirst}>
                        <Link href="/">
                            Home
                        </Link>
                        <Link href="/">
                            Course
                        </Link>
                        <Link href="/">
                            Subscribe
                        </Link>
                        <Link href="/">
                            About
                        </Link>
                        <Link href="/">
                            Testimoni
                        </Link>
                    </div>
                    <h6 className={style.CompanyTagmob}>Skill <span className={style.CompanyTagspanmob}>Shoot</span></h6>
                </div>
            </div>
        </div>
    );
};

export default Footer;  