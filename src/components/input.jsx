import React from "react";

const Input = ({ onAdd }) => {
    const [val, setInput] = React.useState("");
    const handleTextChage = e => setInput(e.target.value);
    const handleEnter = e => {
        if (e.key === "Enter") {
            onAdd(val);
            setInput("");
        }
    }

    return (
        <div className="panel-block">
            <input
                class="input"
                type="text"
                value={val}
                placeholder="Enter or add"
                onChange={handleTextChage}
                onKeyDown={handleEnter}
            />
        </div>
    );
};

export default Input;