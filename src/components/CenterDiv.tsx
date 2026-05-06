import type React from "react";

type Prop = {
    children: React.ReactElement[]
}

const CenterDiv = ({children}: Prop) => {
    return (
        <div className="flex justify-center items-center">
            {children}
        </div>
    )
}

export default CenterDiv;