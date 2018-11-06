import styled from 'styled-components'
 
export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;
export const HomeLeft = styled.div`
    width: 625px;
    margin: 0 auto;
    padding-top: 30px;
    float: left;
    .banner {
        width: 625px;
        height: 270px;
    }
`;
export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #eee;
`;
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px; 
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic_pic {
        display: block;
        float: left;
        width: 32px;
        line-height: 32px;
        margin-right: 10px;
    }
    &.moreItem {
        background: #fff;
        border: none;
        cursor: pointer;
    }
`;
export const ArticleList = styled.div`
    overflow: hidden;
    margin-top: 20px;
`;
export const ArticleItem = styled.div`
    .pic {
        display: inline-block;
        width: 120px;
        height: 80px;
        float: right;
    }
    height: 100px;
    margin-top:20px;
    border-bottom: 1px solid #eee;

`;
export const ArticleInfo = styled.div`
   float: left;
   display: inline-block;
   width:500px;
   h3 {
       font-size: 18px;
       font-weight: 700;
       line-height: 24px;
       color: #333;
   }
   p {
       font-size: 13px;
       color: #999;
   }
`;
export const RecommendWrapper = styled.div`
   margin-top: 25px;
`;
export const RecommendItem = styled.a`
   display: block;
   cursor: pointer;
   width: 280px;
   height:50px;
   margin-top: 5px;
   img {
      with: 100%;
      height: 100%;
   }
`;
export const LoadMore = styled.div`
   width: 100%;
   height: 30px;
   line-height: 30px;
   background: #aaa;
   color: #ccc;
   margin: 20px;
   border-radius: 12px;
   cursor: pointer;
   text-align: center;
`;
export const BackTop = styled.div`
   position: fixed;
   right: 100px;
   bottom: 100px;
   width: 60px;
   height: 60px;
   line-height: 60px;
   border: 1px solid #eee;
   text-align: center;
   font-size: 14px;
   cursor: pointer;
`;
