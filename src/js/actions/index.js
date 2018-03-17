// action for adding a todo item
let TodoId = 0;

// format date for an item
let dateItemCreatedFormat = () => {

    let dateAddedItem = new Date();

    // date
    let date = dateAddedItem.getDate() > 9 ? dateAddedItem.getDate() : '0' + dateAddedItem.getDate();
    let month = dateAddedItem.getMonth() > 9 ? dateAddedItem.getMonth() + 1 : '0' + (dateAddedItem.getMonth() + 1);
    let year = dateAddedItem.getFullYear();

    // time
    let hours = dateAddedItem.getHours();
    let minutes = dateAddedItem.getMinutes() > 9 ? dateAddedItem.getMinutes() : '0' + dateAddedItem.getMinutes();

    // we split the date of a created item into two parts: date and time for convenience

    // date
    let dateFormat = date + '-' + month + '-' + year + ' ';
    
    // time
    let timeFormat = hours + ':' + minutes;

    return dateFormat + timeFormat;
}

export const addTodo = (title, message) => {
    return {
        type: 'ADD_ITEM',
        id: TodoId++,
        title,
        message,
        date: dateItemCreatedFormat()
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
        type: 'EDIT_ITEM_SAVE',
        id,
        title,
        message
    }
}