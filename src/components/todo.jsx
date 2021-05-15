import React from "react";
import TodoItem from "./todoItem";
import Input from "./input";
import Filter from "./filter";

// TODO eslint と prettier 入れる

const getKey = () => Math.random().toString(32).substring(2);
const APP_KEY = "appTodoList";

const Todo = () => {
    const appState = localStorage.getItem(APP_KEY);

    const [items, setItems] = React.useState(
        appState ? JSON.parse(appState) : []
    );
    const [filter, setFilter] = React.useState("ALL");

    const handleAddTodo = (text) => {
        setItems([...items, { key: getKey(), text, done: false }]);
        console.log("items::", items);
    };

    React.useEffect(() => {
        localStorage.setItem(APP_KEY, JSON.stringify(items));
    }, [items]);

    const handleFilter = (filter) => {
        setFilter(filter);
    };

    // 表示するアイテムを取得する
    const dispItems = items.filter((item) => {
        if (filter === "ALL") return true;
        if (filter === "TODO") return !item.done;
        if (filter === "DONE") return item.done;
        return true;
    });

    // アイテムのTODO・DONEのステータスを変更する
    const handleCheck = (check) => {
        const newItem = items.map((item) => {
            if (item.key === check.key) {
                item.done = !item.done;
            }
            return item;
        });
        setItems(newItem);
    };

    // 削除アイテムを除いたアイテムをセットする
    const handleDelete = (btnItem) => {
        const restItem = items.filter((item) => item.key !== btnItem.key);
        setItems(restItem);
    };

    return (
        <div className="panel">
            <div className="panel-heading">✡️ React Todo</div>
            <Input onAdd={handleAddTodo} />
            <Filter onChangeFilter={handleFilter} value={filter} />
            {dispItems.map((item) => (
                <TodoItem
                    key={item.key}
                    item={item}
                    onCheck={handleCheck}
                    onDelete={handleDelete}
                />
            ))}
            <div className="panel-block">{dispItems.length} items</div>
        </div>
    );
};

export default Todo;
