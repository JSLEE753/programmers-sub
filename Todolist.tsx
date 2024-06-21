import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const TodoList: React.FC = () => {
  const title: string = "오늘 할 일";
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "할 일1", isChecked: false },
    { id: 2, text: "할 일2", isChecked: false },
    { id: 3, text: "할 일3", isChecked: false },
  ]);

  const [newTodo, setNewTodo] = useState<string>("");

  const handleCheckedChange = (itemId: number) => {
    setTodos((prevItems) =>
      prevItems.map((item) => {
        return item.id === itemId
          ? { ...item, isChecked: !item.isChecked }
          : item;
      })
    );
  };

  // 공백 방지 , 중복된 값(change 여부) 확인
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }]);
      setNewTodo("");
    }
  };

  const removeTodo = (id: number) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };


  return (
    <div>
      <h1>{title}</h1>
      <div className="container">
        <div>
          <input
            type="text"
            placeholder="할 일 입력"
            style={{ marginRight: "10px", writingMode: "horizontal-tb" }}
            onChange={(e) => setNewTodo(e.target.value)}
            value={newTodo}
          />
          <Button
            variant="success"
            onClick={() => {
              addTodo();
            }}
          >
            추가
          </Button>
        </div>
        <p></p>
        <div className="board">
          <ul>
            {todos.map((todo, index) => {
              return (
                <li key={index}>
                  <input
                    type="checkbox"
                    onChange={() => {
                      handleCheckedChange(todo.id);
                    }}
                  ></input>
                  <span>
                    {todo.isChecked ? (
                      <del>{todo.text}</del>
                    ) : (
                      <span>{todo.text}</span>
                    )}
                  </span>
                  <button
                    className="del-button"
                    onClick={() => removeTodo(todo.id)}
                  >
                    삭제
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
