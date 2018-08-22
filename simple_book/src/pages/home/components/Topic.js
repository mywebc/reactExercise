import React, { Component } from "react";
// 组件小，没必要再单独建
import {
    TopicWrapper,
    TopicItem
} from '../style'
class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                <TopicItem>
                    <img src="" alt=""/>
                </TopicItem>
            </TopicWrapper>
        )
    }
}

export default Topic
