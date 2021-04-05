import React from "react";
import TodoItem from "./todoItem";
import Input from "./input";

const getKey = () => Math.random().toString(32).substring(2);

const Todo = () => {
    const [items, setItems] = React.useState([
        { key: getKey(), text: "APEX", done: false },
        { key: getKey(), text: "見てないアニメ見る", done: false },
        { key: getKey(), text: "React勉強", done: false }
    ]);
    const handleAddTodo = text => {
        setItems([...items, { key: getKey(), text, done: false }]);
    };
    const handleCheck = check => {
        const newItem = items.map(item => {
            if (item.key === check.key) {
                item.done = !item.done
            }
            return item;
        });
        setItems(newItem);
    }

    return (
        <div className="panel">
            <div className="panel-heading">✡️ React Todo</div>
            <Input onAdd={handleAddTodo} />
            {
                items.map(item => (
                    <TodoItem
                        key={item.key}
                        item={item}
                        onCheck={handleCheck}
                    />
                ))
            }
            <div className="panel-block">
                {items.length} items
            </div>
        </div>
    );
};

export default Todo;