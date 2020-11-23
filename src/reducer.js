import {v4 as uuid} from 'uuid';

export default function reducer(state, action){
    switch(action.type){
        case "ADD_TODO":
            if(!action.payload){
                return state;
            }
            if(state.todos.findIndex(el => el.text === action.payload) > -1) {
                return state;
            }
            const newTodo = {
                id: uuid.v4,
                text: action.payload,
                completed: false
            }
            const addTodos = [...state.todos, newTodo];
            return {
                ...state,
                todos: addTodos
            }

        case "SET_CURRENT_TODO":
            return {
                ...state,
                currentTodo: action.payload
            }
        case "TOGGLE_TODO":
            const toogleTodos = state.todos.map(el => el.id === action.payload.id ? { ...action.payload, complete: !action.payload.complete } : el) 
            return {
                ...state,
                todos: toogleTodos
            }
        case "UPDATE_TODO":
            if(!action.payload){
                return state;
            }
            if(state.todos.findIndex(el => el.text === action.payload) > -1) {
                return state;
            }
            const updatedTodo = {...state.currentTodo, text: action.payload }
            const updatedTodoIndex = state.todos.findIndex(el => el.id === state.currentTodo.id)
            const updatedTodos = [
                ...state.todos.slice(0, updatedTodoIndex),
                updatedTodo,
                ...state.todos.slice(updatedTodoIndex + 1)
            ]
            return {
                ...state,
                currentTodo: {},
                todos: updatedTodos
            }
        case "REMOVE_TODO":
            const filteredTodos = state.todos.filter(el => el.id !== action.payload.id);
            const removedTodo = state.currentTodo.id === action.payload.id ? {} : state.currentTodo;
            return {
                ...state,
                currentTodo: removedTodo,
                todos: filteredTodos
            }
        default:
            return state;
    }
}