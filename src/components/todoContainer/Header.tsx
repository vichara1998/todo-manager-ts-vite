import SearchBar from '../search/SearchBar';
import { useState } from 'react';
import { CiAlignBottom, CiCalendar, CiFilter } from 'react-icons/ci';
import SearchButton from '../search/SearchButton';

const Header = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return (
        <div className="flex w-full justify-between items-center h-[5vh] mt-[2vh]">
            <SearchButton />
            <div className="flex gap-5">
                <button className="group hover:bg-primary-fg size-10 fl cursor-pointer flex items-center justify-center transition rounded-full">
                    <CiAlignBottom className="text-2xl text-primary-fg  group-hover:text-primary-bg" />
                </button>
                <button className="group hover:bg-primary-fg size-10 cursor-pointer  flex items-center justify-center transition rounded-full">
                    <CiCalendar className="text-2xl text-primary-fg  group-hover:text-primary-bg" />
                </button>
                <button className="group hover:bg-primary-fg size-10 cursor-pointer flex items-center justify-center transition rounded-full">
                    <CiFilter className="text-2xl text-primary-fg  group-hover:text-primary-bg" />
                </button>
            </div>
            {/* <SimpleDatePicker value={selectedDate} onChange={setSelectedDate} />
                <div>
                    <AddNewListButton />
                </div> */}
        </div>
    );
};

export default Header;
