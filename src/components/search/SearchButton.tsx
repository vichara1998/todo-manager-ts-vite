import { useEffect, useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import SearchBar from './SearchBar';
import { MdClose } from 'react-icons/md';

const SearchButton = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);

    useEffect(() => {
        inputRef.current?.focus();
    }, [isSearchBarOpen])

    const toggleSearch = () => {
        setIsSearchBarOpen((pre) => !pre);
    };

    return (
        <div
            className={`${isSearchBarOpen ? 'bg-white dark:bg-primary-fg-dark' : 'bg-primary-bg dark:bg-primary-bg-dark'}  flex items-center border border-primary-fg rounded-3xl dark:text-primary-bg`}
        >
            {isSearchBarOpen && <SearchBar inputRef={inputRef} />}
            <button
                className="text-2xl group hover:bg-primary-fg dark:hover:bg-primary-bg-dark cursor-pointer rounded-3xl p-2 transition duration-300 ease-in-out"
                onClick={() => toggleSearch()}
            >
                {isSearchBarOpen ? (
                    <MdClose className="text-primary-fg group-hover:text-primary-bg transition" />
                ) : (
                    <CiSearch className="text-primary-fg group-hover:text-primary-bg transition" />
                )}
            </button>
        </div>
    );
};

export default SearchButton;
