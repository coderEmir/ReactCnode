function reducer(state={
    list:{},
    topic:{},
    user:{},
}, action) {
    return {
        list:list(state.list, action),
        topic:topic(state.topic, action),
        user:user(state.user, action)
    }
}

function list(list={

}, action) {
    return list
}

function topic(topic={

}, action) {
    return topic
}

function user(user={

}, action) {
    return user
}

export default reducer