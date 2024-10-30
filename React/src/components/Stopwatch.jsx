import React, { useEffect, useState } from 'react'

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [active, setActive] = useState(false);

    useEffect(()=>{
        let intervalObj;
        if(active){
            intervalObj = setInterval(()=>setTime(prev=>prev+10), 10);
        }
        return ()=>clearInterval(intervalObj);
    }, [active, time]);

    const hrs = Math.floor(time / 3600000);
    const mins = Math.floor((time % 3600000) / 60000);
    const secs = Math.floor((time % 60000) / 1000);
    const ms = Math.floor((time % 1000) / 10);

    const toggleActive=()=>{
        setActive(prev=>!prev);
    }

    return (
        <div>
            <div className='text-5xl'>
                <span className='bg-black p-2 rounded-xl mx-2'>
                    {hrs.toString().padStart(2, '0')}
                </span>
                :
                <span className='bg-black p-2 rounded-xl mx-2'>
                    {mins.toString().padStart(2, '0')}
                </span>
                :
                <span className='bg-black p-2 rounded-xl mx-2'>
                    {secs.toString().padStart(2, '0')}:
                </span>
                :
                <span className='bg-black p-2 rounded-xl mx-2'>
                    {ms.toString().padStart(2, '0')}
                </span>
            </div>
            <div className='btn-grp m-4'>
                <button className='p-3 m-3' onClick={toggleActive}>{(active)?"Stop":"Start"}</button>
                <button onClick={()=>{
                setTime(0);
                setActive(false);
                }}
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Stopwatch
