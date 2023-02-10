import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function ExpandablePanel({ header, children }) {
    const [expandPanel, setExpandPanel] = useState(false);
    const handleClick = (e) => {
        setExpandPanel(!expandPanel);
    };
    return (
        <div className="mx-3 mb-2 border rounded">
            <div className="flex p-2 justify-between items-center">
                <div className="flex flex-row justify-center items-center" >
                    {header}
                </div>
                <div onClick={handleClick} className="cursor-pointer">
                    {expandPanel ? <GoChevronDown /> : <GoChevronLeft />}
                </div>
            </div>
            {expandPanel && <div className="p-2 border-t">{children}</div>}
        </div>
    )
};

export default ExpandablePanel;