// action for adding a todo item
let TodoId = 0;
// ugly date, needed a serious reimplementation due to is ugliness
let dateAdded = new Date();
let uglyDate = dateAdded.getDate() + '-' + (dateAdded.getMonth()+1) + '-' + dateAdded.getFullYear() + ' ' + dateAdded.getHours() + ':' + dateAdded.getMinutes();
export const addTodo = (message, title) => {
    return {
        type: 'ADD_ITEM',
        id: TodoId++,
        title,
        message,
        date: uglyDate
    }
}

// action for removing an item
export const removeItem = (id) => {
    return {
        type: 'REMOVE_ITEM',
        id
    }
}

// action for toggling an item
export const toggleItem = (id) => {
    return {
        type: 'TOGGLE_ITEM',
        id
    }
}

// action for saving an edited item
export const editItemSave = (id, title, message) => {
    return {
        id,
        title,
        message
    }
}