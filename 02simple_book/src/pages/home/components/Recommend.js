import React, { Component } from "react";
import { 
    RecommendItem,
    RecommendWrapper
} from '../style'

class Recommend extends Component {
    render() {
        return (
            <div>
                <RecommendWrapper>
                    <RecommendItem>
                            <img src="/recommend1.png" alt=""/>
                    </RecommendItem>
                    <RecommendItem>
                            <img src="/recommend2.png" alt=""/>
                    </RecommendItem>
                    <RecommendItem>
                            <img src="/recommend3.png" alt=""/>
                    </RecommendItem>
                    <RecommendItem>
                            <img src="/recommend4.png" alt=""/>
                    </RecommendItem>
                    <RecommendItem>
                            <img src="/recommend5.png" alt=""/>
                    </RecommendItem>
                </RecommendWrapper>
            </div>
        )
    }
}

export default Recommend
