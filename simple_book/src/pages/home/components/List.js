import React, { Component } from "react";
import { connect } from 'react-redux'
import { actionCreators } from "../store";
import {
    ArticleList,
    ArticleItem,
    ArticleInfo,
    LoadMore
} from '../style'

class List extends Component {
    render() {
        return (
            <div>
                <ArticleList>
                    {
                        this.props.list.map((item, index)=>{
                            return (
                                <ArticleItem key={index}>
                                    <img src={item.imgUrl} alt="" className="pic"/>
                                    <ArticleInfo>
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </ArticleInfo>
                                </ArticleItem>
                            )
                        })
                    }
                </ArticleList>
                <LoadMore onClick={()=>{this.props.getMoreList(this.props.page)}}>
                    加载更多
                </LoadMore>
            </div>
        )
    }
    componentDidMount() {
        this.props.queryArticleList()
    }
}

const mapState = (state) =>({
    list: state.getIn(['home','articleList']),
    page: state.getIn(['home', 'ArticlePage'])
})

const mapDispath = (dispath) =>{
    return {
        queryArticleList() {
            dispath(actionCreators.getArticleList())
        },
        getMoreList(page) {
            dispath(actionCreators.getMoreList(page))
        }
    }
}
export default connect(mapState, mapDispath)(List)
