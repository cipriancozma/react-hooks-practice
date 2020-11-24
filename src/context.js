import React, { createContext } from 'react';

const TodosContext = createContext({
    todos:[
        // {
        //     id: 1, text: "Eat breakfast", completed: true
        // },
        // {
        //     id: 2, text: "Eat lunch", completed: false
        // },
        // {
        //     id: 3, text: "Eat dinner", completed: false
        // }
    ],
    currentTodo: {}
})


export default TodosContext;