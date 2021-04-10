import React from "react";
import TodoItem from "./todoItem";
import Input from "./input";
import Filter from "./filter";

const getKey = () => Math.random().toString(32).substring(2);

const Todo = () => {
    const [items, setItems] = React.useState([]);
    const [filter, setFilter] = React.useState("ALL");

    const handleAddTodo = text => {
        // 「...」ってなんだ、、、？
        setItems([...items, { key: getKey(), text, done: false }]);
    };

    const handleFilter = filter => {
        setFilter(filter);
    }

    const dispItems = items.filter(item => {
        if (filter === "ALL") return true;
        if (filter === "TODO") return !item.done;
        if (filter === "DONE") return item.done;
        return true;
    });

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
            <Filter
                onChangeFilter={handleFilter}
                value={filter}
            />
            {
                dispItems.map(item => (
                    <TodoItem
                        key={item.key}
                        item={item}
                        onCheck={handleCheck}
                    />
                ))
            }
            <div className="panel-block">
                {dispItems.length} items
            </div>
        </div>
    );
};

export default Todo;