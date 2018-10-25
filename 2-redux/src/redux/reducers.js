import { combineReducers } from "redux"

const initialTodos = [
    {
        id: 0,
        title: "ejzroize",
        completed: false
    },
    {
        id: 1,
        title: "azeaze",
        completed: false
    },
    {
        id: 3,
        title: "bbbb",
        completed: false
    }
]

function* generateId(i = 0) {
    while (true) {
        yield i++
    }
}

const max = initialTodos.reduce((memo, curr) => curr.id > memo ? curr.id : memo, 0)

const generatorId = generateId(max + 1)

const todoReducer = (state = initialTodos, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {
                id: generatorId.next().value,
                title: action.title,
                completed: false
            }]
        case "TOGGLE_TODO":
            const index = state.findIndex(todo => todo.id === action.id)
            let newTodo = {
                ...state[index]
            }

            newTodo.completed = !newTodo.completed

            return [...state.slice(0, index),
                newTodo,
            ...state.slice(index + 1)
            ]

        case "CLEAR":
            return state.filter(todo => !todo.completed)

        default:
            return state
    }
}

const visibilityReducer = (state = "ALL", action) => {
    switch (action.type) {
        case "SET_VISIBILITY":
            return action.visibility
        default:
            return state
    }
}

export default combineReducers({
    todos: todoReducer,
    visibility: visibilityReducer
})