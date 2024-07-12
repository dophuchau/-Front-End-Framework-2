import React, { useState, useEffect } from 'react';
import SearchInput from '../searchInput/searchInput';
const Time = () => {
    const [currentTime, setCurrentTime] = useState(getTime());

    function getTime() {
        return (new Date()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour24: false });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getTime());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const hours = currentTime.split(':')[0];
    const minutes = currentTime.split(':')[1];
    const seconds = currentTime.split(':')[2].split(' ')[0];
    const period = currentTime.includes('AM') || currentTime.includes('PM') ? currentTime.split(' ')[1] : '';



    return (
        <div>
            <div className='flex justify-center items-center mt-5'> <SearchInput /></div>
            <div className='flex justify-center items-center h-screen'>

                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": hours }}></span>
                        </span>
                        giờ
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": minutes }}></span>
                        </span>
                        phút
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": seconds }}></span>
                        </span>
                        giây
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            {period}
                        </span>

                    </div>
                </div>
            </div></div>


    );
};

export default Time;
