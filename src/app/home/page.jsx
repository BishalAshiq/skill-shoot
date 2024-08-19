import Doexist from '@/components/homeAll/Doexist/Doexist';
import PopCourseWeek from '@/components/homeAll/PopCourseWeek/PopCourseWeek';
import TrustCompany from '@/components/homeAll/TrustedCompany/TrustCompany';
import React from 'react';

const HomePage  = () => {
    return (
        <div>
            <div className=''> 
                <TrustCompany/>
                <Doexist/>
                <PopCourseWeek/>
            </div>
        </div>
    );
};

export default HomePage ;