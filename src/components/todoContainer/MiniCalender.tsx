import { useEffect, useState } from 'react';
import MiniCalenderCard from './MiniCalenderCard';

const MiniCalender = () => {
    const [calenderDateObjs, setCalenderDateObjs] = useState<Date[]>([]);

    useEffect(() => {
        const baseDate = new Date();
        const dateObjs: Date[] = [];
        for (let i = -3; i < 7; i++) {
            const baseDateClone = new Date(baseDate);
            baseDateClone.setDate(baseDate.getDate() + i);
            dateObjs.push(baseDateClone);
        }
        setCalenderDateObjs(dateObjs);
    }, []);

    return (
        <div className="w-full flex justify-between items-center gap-5 h-[15vh] ">
            {calenderDateObjs.map((calenderItem, index) => {
                return (
                    <MiniCalenderCard key={index} calenderItem={calenderItem} />
                );
            })}
        </div>
    );
};

export default MiniCalender;
