import React, { Component } from "react";
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import {
    TopicWrapper,
    TopicItem
} from '../style'
class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.list.map((item)=>{
                        return (
                            <TopicItem key={item.id}>
                                <img src={item.imgUrl} alt="error" className="topic_pic" />
                                {item.text}
                            </TopicItem>
                        )
                    })
                }
                <TopicItem className='moreItem'>更多专题></TopicItem>
            </TopicWrapper>
        )
    }
    componentWillMount() {
        this.props.queryTopicList()
    }
}

// 传递state 返回一个对象
const mapStateToProps = (state) =>({
    list: state.get('home').get('topicList')
})
// 传递dispath
const mapDispathToProps = (dispath) =>{
  return {
      queryTopicList() {
          dispath(actionCreators.getTopicList())
      }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Topic)
