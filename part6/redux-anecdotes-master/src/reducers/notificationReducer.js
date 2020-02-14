export const updateNotification = (content) => {
    return {
        type: 'SET',
        content: content
    }
}

export const addNotification = (content) => {
    return {
        type: 'ADD',
        content: content
    }
}

export const removeNotification = () => {
    return {
        type: 'REMOVE'
    }
}

const notificationReducer = (state = '', action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch (action.type) {
        case 'SET': {
            return 'you voted for ' + '"' + action.content + '"';
        }
        case 'ADD': {
            return 'you added ' + '"' + action.content + '"';
        }
        case 'REMOVE': {
            return '';
        }
    }
    return state;
}
export default notificationReducer