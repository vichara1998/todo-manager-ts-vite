import { CiCalendar } from 'react-icons/ci';
import NewTaskInput from './NewTaskInput';
import { HiOutlineHashtag } from 'react-icons/hi';
import { MdOutlineLowPriority } from 'react-icons/md';
import { IoMdAddCircle } from 'react-icons/io';

const CenterConsole = () => {
    return (
        <div className="bg-white dark:bg-primary-fg-dark flex items-center absolute left-1/2 -translate-x-1/2 bottom-10 border border-primary-fg rounded-full p-2">
            <NewTaskInput />
            <button className="group hover:bg-primary-fg size-10 cursor-pointer  flex items-center justify-center transition rounded-full">
                <CiCalendar className="text-xl text-gray-500  group-hover:text-primary-bg dark:text-primary-bg transition" />
            </button>
            <button className="group hover:bg-primary-fg size-10 cursor-pointer  flex items-center justify-center transition rounded-full">
                <HiOutlineHashtag className="text-xl text-gray-400  group-hover:text-primary-bg dark:text-primary-bg transition" />
            </button>
            <button className="group hover:bg-primary-fg size-10 cursor-pointer  flex items-center justify-center transition rounded-full">
                <MdOutlineLowPriority className="text-xl text-gray-400  group-hover:text-primary-bg dark:text-primary-bg transition" />
            </button>
            <button className="group ml-2 hover:bg-primary-fg size-10 cursor-pointer  flex items-center justify-center transition rounded-full">
                <IoMdAddCircle className="text-4xl text-primary-fg  group-hover:text-primary-bg transition dark:text-primary-bg" />
            </button>
        </div>
    );
};

export default CenterConsole;
