export const addTodo = (title) => {

    return {
        type: "ADD_TODO",
        title
    }
}

export const toggleTodo = (id) => {

    return {
        type: "TOGGLE_TODO",
        id
    }
}

export const setVisibility = (visibility) => {

    return {
        type: "SET_VISIBILITY",
        visibility
    }
}

export const clear = () => {
    
    return {
        type: "CLEAR"
    }
}
