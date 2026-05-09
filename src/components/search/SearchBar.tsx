import { useEffect, useState } from 'react';

type InputRefType = {
    inputRef: React.RefObject<HTMLInputElement | null>;
};

const SearchBar = ({ inputRef }: InputRefType) => {
    const [searchQuarry, setSearchQuarry] = useState<string>('');

    useEffect(() => {
        console.log(searchQuarry);
    }, [searchQuarry]);

    return (
        <input
            type="text"
            className="p-2 mx-8 h-10 w-100 outline-none font-bold"
            ref={inputRef}
            value={searchQuarry}
            onChange={(e) => {
                setSearchQuarry(e.target.value);
            }}
        />
    );
};

export default SearchBar;
