import React from "react";

const TodoItem = ({ item, onCheck }) => {
    const handleCheckChange = () => {
        onCheck(item);
    };

    return (
        <label className="panel-block">
            <input
                type="checkbox"
                checked={item.done}
                onChange={handleCheckChange}
            />
            <span className={item.done ? "has-text-grey-light" : ""} >
                {item.text}
            </span>
        </label>
    );
};

export default TodoItem;