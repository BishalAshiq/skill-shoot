import Doexist from '@/components/homeAll/Doexist/Doexist';
import LetUsSkShoot from '@/components/homeAll/LetUsSkShoot/LetUsSkShoot';
import PopCourseWeek from '@/components/homeAll/PopCourseWeek/PopCourseWeek';
import SubscribeUs from '@/components/homeAll/SubscribeUs/SubscribeUs';
import TrustCompany from '@/components/homeAll/TrustedCompany/TrustCompany';
import React from 'react';

const HomePage  = () => {
    return (
        <div>
            <div className=''> 
                <TrustCompany/>
                <Doexist/>
                <PopCourseWeek/>
                <LetUsSkShoot/>
                <SubscribeUs/>
            </div>
        </div>
    );
};

export default HomePage ;