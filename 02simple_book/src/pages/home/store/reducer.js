import { fromJS } from 'immutable'
import * as constants from './constants'

// 设置state初始值 已转化immutable对象
const defaultState =fromJS({
    topicList: [],
    articleList: [],
    ArticlePage: 1,
    showFlag: false
})
// 默认暴露一个纯函数
export default (state = defaultState, action)=> {
    switch(action.type) {
        case constants.GETTOPLIST:
            return state.set('topicList',action.list)
        case constants.GET_ARTICLE_LIST:
            return state.set('articleList',action.list)
        case constants.QUERY_MORE_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.list),
                ArticlePage: action.nextPage
            })
        case constants.CHANGE_SCROLL_FLAG:
            return state.set('showFlag', action.show)
		default: 
			return state
	}
}
