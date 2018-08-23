import * as constants from './constants'
import axios from 'axios'
const queryTopicList = (list) =>({
    type: constants.GETTOPLIST,
    list
})

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