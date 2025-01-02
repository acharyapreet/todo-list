import Todo from "../Todo/Todo";

function TodoList({ list, updateList }) {
    return (
        <div>
            {list.length > 0 &&
                list.map(todo => (
                    <Todo
                        key={todo.id}
                        isFinished={todo.finished}
                        id={todo.id}
                        todoData={todo.todoData}
                        changeFinished={() => updateList(todo.id)}
                    />
                ))}
        </div>
    );
}

export default TodoList;