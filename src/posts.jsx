import React from 'react'
import { connect } from 'react-redux'

const Posts = (props) => {
    const posts=[];
    for(let post of props.posts){
        posts.push(<div key={post.id}>{post.title}</div>)
    }    
  return (
    <>
    <div>    
        {posts}
    </div>
    </>
  )
}
const mapStateToProps=(state)=>{
    return{
        posts:state.posts,
    }

}

export default connect(mapStateToProps) (Posts);