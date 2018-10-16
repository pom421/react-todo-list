const initialState = {
    todos: [
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
    ],
    visibility: "ALL"
}

function* generateId(i = 0) {
    while (true) {
        yield i++
    }
}

const max = initialState.todos.reduce((memo, curr) => curr.id > memo ? curr.id : memo, 0)

const generatorId = generateId(max + 1)

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return ({
                ...state,
                todos: [...state.todos, {
                    id: generatorId.next().value,
                    title: action.title,
                    completed: false
                }]
            })
        case "TOGGLE_TODO":
            const index = state.todos.findIndex(todo => todo.id === action.id)
            let newTodo = {
                ...state.todos[index]
            }

            newTodo.completed = !newTodo.completed

            return ({
                ...state,
                todos: [...state.todos.slice(0, index),
                    newTodo,
                ...state.todos.slice(index + 1)
                ]
            })

        case "SET_VISIBILITY":
            return ({
                ...state,
                visibility: action.visibility
            })

        case "CLEAR":
            return ({
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            })

        default:
            return state
    }
}