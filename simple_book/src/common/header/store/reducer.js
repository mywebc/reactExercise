import * as constants from './constants'
import { fromJS } from 'immutable'

// 设置state初始值 已转化immutable对象
const defaultState =fromJS({
	focused: false,
	list: [],
	page: 1,
	totalPage: 1,
	mouseIn: false
})
// 默认暴露一个纯函数
export default (state=defaultState, action)=> {
	switch(action.type) {
		case constants.SEARCH_FOCUS: 
			return state.set('focused', true)
		case constants.SEARCH_BLUR: 
			return state.set('focused', false)
		case constants.CHANGELIST: 
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			})
			// return state.set('list',action.data).set('totalPage', action.totalPage)
		case constants.ONMOUSE_ENTER:
			return state.set('mouseIn', true)
		case constants.ONMOUSE_LEAVE:
			return state.set('mouseIn', false)
		case constants.SWITCHITEM:
			return state.set('page', action.page)
		default: 
			return state
	}
}
