const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    message: action.message,
                    isTriggeredEdit: false
                }
            ]
        case 'TOGGLE_ITEM':
            return state.map(item => {
                // if we found a desired element,
                // then change the state of isTriggeredEdit
                if (item.id === action.id) {
                    return {
                        ...item,
                        isTriggeredEdit: !item.isTriggeredEdit
                    };
                }
                return item;
            })
        
        case 'EDIT_ITEM_SAVE':
            return state.map(item => {
                // if we found a desired element,
                // then change the state of isTriggeredEdit
                if (item.id === action.id) {
                    return {
                        ...item,
                        title: action.title,
                        message: action.message
                    }
                }
                else {
                    return item;
                }
            })

        default:
            return state;
    }
}

export default items;