import { useState } from "react";

const NewTaskInput = () => {

    const [searchQuarry, setSearchQuarry] = useState<string>('');

    return (
        <input
            type="text"
            className=" mx-8 h-10 w-100 outline-none font-bold dark:text-primary-bg text-md"
            value={searchQuarry}
            placeholder="New Task? Just put it here"
            onChange={(e) => {
                setSearchQuarry(e.target.value);
            }}
        />
    )
}

export default NewTaskInput;