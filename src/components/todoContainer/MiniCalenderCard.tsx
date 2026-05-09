import { useEffect, useState } from 'react';

type MiniCalenderProps = {
    calenderItem: Date;
};

const daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const MiniCalenderCard = ({ calenderItem }: MiniCalenderProps) => {
    const currentDate = new Date();

    const [isToday, setIsToday] = useState(false);

    useEffect(() => {
        const checkIfItIsToday = (date: number): boolean => {
            if (date == currentDate.getDate()) {
                return true;
            } else {
                return false;
            }
        };

        setIsToday(checkIfItIsToday(calenderItem.getDate()));
    }, []);

    return (
        <div
            className={`flex flex-col items-center justify-center flex-1 px-6 py-3 rounded-2xl border cursor-pointer hover:bg-white dark:hover:bg-primary-fg-dark ${isToday ? 'bg-primary-fg-faded border-primary-fg-bold dark:bg-primary-fg-dark dark:border-primary-fg ' : 'border-primary-fg dark:border-primary-fg-dark'}`}
        >
            <p className="text-primary-fg text-xs">
                {daysOfWeek[calenderItem.getDay()]}
            </p>
            <p className=" text-primary-fg text-lg font-bold dark:text-primary-bg">
                {calenderItem.getDate()}
            </p>
        </div>
    );
};

export default MiniCalenderCard;
