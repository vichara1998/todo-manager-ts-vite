import { useEffect, useState } from 'react';


const SearchBar = () => {
    const [searchQuarry, setSearchQuarry] = useState<string>('');

    useEffect(() => {
        console.log(searchQuarry);
    }, [searchQuarry]);

    return (
        <input
            type="text"
            className="p-2 mx-8 h-10 w-50 outline-none font-bold"
            value={searchQuarry}
            onChange={(e) => {
                setSearchQuarry(e.target.value);
            }}
        />
    );
};

export default SearchBar;
