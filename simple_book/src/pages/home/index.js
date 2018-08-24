import React, { Component } from "react";
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

import { connect } from 'react-redux'
import { actionCreators } from "./store";

class Home extends Component {
    handleTop() {
        window.scrollTo(0,0)
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img  className="banner" src="/banner.jpg" alt="error"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {
                    this.props.showFlag ? <BackTop onClick={this.handleTop}>顶部</BackTop> : null
                }
            </HomeWrapper>
         )
    }
    componentDidMount() {
        this.bindEvents()
    }
    // 监听scroll事件
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScroll())
    }
}
const mapState = (state) =>({
    showFlag: state.getIn(['home', 'showFlag'])
})
const mapDispath = (dispath) =>{
    return {
        changeScroll() {
            if(document.documentElement.scrollTop > 100) {
                dispath(actionCreators.changeScrollFlag(true))
            }else {
                dispath(actionCreators.changeScrollFlag(false))
            }
        }
    }
}

export default connect(mapState, mapDispath)(Home)
