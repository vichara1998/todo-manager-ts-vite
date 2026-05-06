import { IoMdAdd } from 'react-icons/io';
import CenterDiv from '../CenterDiv';

const AddNewListButton = () => {
    return (
        <>
            <button className='rounded-3xl text-white cursor-pointer ml-5 px-5 py-2 bg-gray-800'>
                <CenterDiv>
                    <IoMdAdd className='mr-2'/>
                    <p>Add New</p>
                </CenterDiv>
            </button>
        </>
    );
};

export default AddNewListButton;
