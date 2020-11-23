import React, { useContext } from 'react';
import TodosContext from '../context';

export default function TodoList(){
    const { state, dispatch } = useContext(TodosContext);

    return (
        <div>
            <h1>My Todos List {state.todos.length > 0 ? state.todos.length : " - Nothing to do..."}</h1>
            <ul>
                {state.todos.map((todo) => 
                <>
                    <li key={todo.id}>
                        <span onDoubleClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo})}>{todo.text}</span>
                        <p>{todo.completed && <span>Completed</span>}</p>
                    </li>
                    <button onClick={() => dispatch({type: "SET_CURRENT_TODO", payload: todo })}>Edit</button>
                    <button onClick={() => dispatch({type: "REMOVE_TODO", payload: todo })}>Delete</button>
                </>
                )}
            </ul>
        </div>
    )
}