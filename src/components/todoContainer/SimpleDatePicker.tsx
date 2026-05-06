import { useEffect, useMemo, useRef, useState } from 'react';
import dayjs, { type Dayjs } from 'dayjs';
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type SimpleDatePickerProps = {
    value: Date | null;
    onChange: (date: Date) => void;
    placeholder?: string;
};

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const buildCalendarDays = (month: Dayjs) => {
    const firstDayOfMonth = month.startOf('month');
    const firstVisibleDay = firstDayOfMonth.subtract(
        firstDayOfMonth.day(),
        'day',
    );

    return Array.from({ length: 42 }, (_, index) =>
        firstVisibleDay.add(index, 'day'),
    );
};

const SimpleDatePicker = ({
    value,
    onChange,
    placeholder = 'Pick a date',
}: SimpleDatePickerProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [visibleMonth, setVisibleMonth] = useState(() =>
        value ? dayjs(value).startOf('month') : dayjs().startOf('month'),
    );
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!value) {
            return;
        }

        setVisibleMonth(dayjs(value).startOf('month'));
    }, [value]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                event.target instanceof Node &&
                !containerRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        onChange(today.toDate());
        
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const selectedDate = value ? dayjs(value) : null;
    const today = dayjs();
    const calendarDays = useMemo(
        () => buildCalendarDays(visibleMonth),
        [visibleMonth],
    );

    return (
        <div className="relative w-full max-w-xs" ref={containerRef}>
            <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                className="cursor-pointer flex w-full rounded-full items-center justify-between bg-white px-4 py-3 text-left transition border"
            >
                <span className="flex items-center gap-3">
                    <span className="rounded-xl bg-slate-100 p-2 text-slate-600">
                        <FaCalendarAlt />
                    </span>
                    <span className="flex flex-col">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Due date
                        </span>
                        <span className="text-sm font-medium text-slate-700">
                            {selectedDate
                                ? selectedDate.format('MMM D, YYYY')
                                : placeholder}
                        </span>
                    </span>
                </span>
            </button>

            {isOpen ? (
                <div className="absolute left-0 top-[calc(100%+12px)] z-20 w-[320px] rounded-3xl border border-slate-200 bg-white p-4 shadow-xl">
                    <div className="mb-4 flex items-center justify-between">
                        <button
                            type="button"
                            onClick={() =>
                                setVisibleMonth((month) =>
                                    month.subtract(1, 'month'),
                                )
                            }
                            className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                            aria-label="Previous month"
                        >
                            <FaChevronLeft />
                        </button>

                        <p className="text-sm font-semibold text-slate-700">
                            {visibleMonth.format('MMMM YYYY')}
                        </p>

                        <button
                            type="button"
                            onClick={() =>
                                setVisibleMonth((month) =>
                                    month.add(1, 'month'),
                                )
                            }
                            className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                            aria-label="Next month"
                        >
                            <FaChevronRight />
                        </button>
                    </div>

                    <div className="mb-2 grid grid-cols-7 gap-1">
                        {weekDays.map((day) => (
                            <span
                                key={day}
                                className="py-2 text-center text-xs font-semibold uppercase tracking-wide text-slate-400"
                            >
                                {day}
                            </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                        {calendarDays.map((day) => {
                            const isCurrentMonth =
                                day.month() === visibleMonth.month();
                            const isSelected = selectedDate
                                ? day.isSame(selectedDate, 'day')
                                : false;
                            const isToday = day.isSame(today, 'day');

                            return (
                                <button
                                    key={day.format('YYYY-MM-DD')}
                                    type="button"
                                    onClick={() => {
                                        onChange(day.toDate());
                                        setIsOpen(false);
                                    }}
                                    className={[
                                        'flex h-10 w-10 items-center justify-center rounded-full text-sm transition',
                                        isSelected
                                            ? 'bg-slate-900 font-semibold text-white'
                                            : 'text-slate-700 hover:bg-slate-100',
                                        !isCurrentMonth && !isSelected
                                            ? 'text-slate-300'
                                            : '',
                                        isToday && !isSelected
                                            ? 'border border-slate-300'
                                            : '',
                                    ].join(' ')}
                                >
                                    {day.date()}
                                </button>
                            );
                        })}
                    </div>

                    <button
                        type="button"
                        onClick={() => {
                            const nextDate = today.toDate();
                            onChange(nextDate);
                            setVisibleMonth(dayjs(nextDate).startOf('month'));
                            setIsOpen(false);
                        }}
                        className="mt-4 w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                    >
                        Choose today
                    </button>
                </div>
            ) : null}
        </div>
    );
};

export default SimpleDatePicker;
