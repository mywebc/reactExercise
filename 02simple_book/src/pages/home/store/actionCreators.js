import * as constants from './constants'
import axios from 'axios'
const queryTopicList = (list) =>({
    type: constants.GETTOPLIST,
    list
})

const queryArticleList = (list) => ({
    type: constants.GET_ARTICLE_LIST,
    list
})

const queryMoreList = (list, nextPage) => ({
    type: constants.QUERY_MORE_LIST,
    list,
    nextPage
})

export const changeScrollFlag = (show)=>({
    type: constants.CHANGE_SCROLL_FLAG,
    show
})

// 获取topic
export const getTopicList = () =>{
	return (dispath)=>{
		axios.get('/api/topicList.json').then((res)=>{
			// 修I改store里的数据
			dispath(queryTopicList(res.data.topicList))
		}).catch((e)=>{
			console.log(e)
		})
	}
}
// 获取列表数据
export const getArticleList = () =>{
	return (dispath)=>{
		axios.get('/api/articleList.json').then((res)=>{
			// 修I改store里的数据
			dispath(queryArticleList(res.data.articleList))
		}).catch((e)=>{
			console.log(e)
		})
	}
}
// 加载更多数据
export const getMoreList = (page) =>{
    return (dispath)=>{
        axios.get(`/api/articleList.json?page=${page}`).then((res)=>{
            // 追加store里list里的数据
            dispath(queryMoreList(res.data.articleList, page + 1))
        }).catch((e)=>{
			console.log(e)
		})
    }
}