import React from "react";

const TodoItem = ({ item, onCheck, onDelete }) => {
    const handleCheckChange = () => {
        onCheck(item);
    };

    const handleClick = () => {
        onDelete(item);
    }

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
            <button
                className="delete-btn"
                onClick={handleClick}
            >
                Delete
            </button>
        </label>
    );
};

export default TodoItem;