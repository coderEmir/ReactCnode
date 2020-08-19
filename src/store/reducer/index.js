import { combineReducers } from "redux"
// reducer 拆分
import list from './list'
import topicList from './topicList'
import user from './user'

// 使用combineReducers：
const reducer = combineReducers({
    //列表
    // list:list,
    list,
    // 帖子主题
    topicList,
    // 用户
    user,
})
export default reducer

// 不使用 combineReducers：
// export default function reducer(state={
//     //列表
//     list:{},
//     // 帖子主题
//     topic:{},
//     // 用户
//     user:{},
// }, action) {
//     return {
//         list:list(state.list, action),
//         topic:topic(state.topic, action),
//         user:user(state.user, action)
//     }
// }
