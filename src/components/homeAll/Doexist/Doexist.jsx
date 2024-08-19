import React from 'react';
import style from "./Doexist.module.css"

const Doexist = () => {
    return (
        <div>
            <div className={style.doexistFulldiv}>
                <div className='row'>
                    <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12'>
                        <div>
                            <div className={style.doexisittagdiv}>
                                <h4 className={style.doexisittag}>Why do we <span className={style.doexisittagspan}>exist?</span></h4>
                                <p className={style.doexisittagstexTs}>Because we know that many people or companies have the same problem when it comes to how difficult it is to improve their skills</p>
                            </div>
                            <div className={style.doexisiIddiv}>
                                <img className={style.DoExsimgCss} src='/images/dppic.jpeg' alt='' />
                                <div className={style.doexisiidtextdiv}>
                                    <span className={style.doexisiIdName}>Jerony Pulquosta</span>
                                    <span className={style.doexisiIdDesig}>CEO Skill Shoot</span>
                                </div>
                            </div>

                            <div className={style.doexisinumberdiv}>
                                <div>
                                    <span className={style.doexisinumber1}>100+</span>
                                    <span className={style.doexisinumbertext}>Updated Material</span>
                                </div>
                                <div>
                                <span className={style.doexisinumber1}>15k</span>
                                <span className={style.doexisinumbertext}>Member Join</span>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12'>
                        <div>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                    <div className={style.doexistMUVHdiv}>
                                        <img className={style.doexistMUVHimg} src='/images/greenQube.png' alt='' />
                                        <h5 className={style.doexistMUVHh5}>Material Limitations</h5>
                                        <p className={style.doexistMUVHpara}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                    <div className={style.doexistMUVHdiv}>
                                        <img className={style.doexistMUVHimg} src='/images/magentaDimond.png' alt='' />
                                        <h5 className={style.doexistMUVHh5}>Material Limitations</h5>
                                        <p className={style.doexistMUVHpara}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                    <div className={style.doexistMUVHdiv}>
                                        <img className={style.doexistMUVHimg} src='/images/circle.png' alt='' />
                                        <h5 className={style.doexistMUVHh5}>Material Limitations</h5>
                                        <p className={style.doexistMUVHpara}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                    <div className={style.doexistMUVHdiv}>
                                        <img className={style.doexistMUVHimg} src='/images/yellowrac.png' alt='' />
                                        <h5 className={style.doexistMUVHh5}>Material Limitations</h5>
                                        <p className={style.doexistMUVHpara}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doexist;