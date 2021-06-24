import React, { useEffect, useState } from 'react'
import Blogs from '../Blogs/Blogs'

const Home = () => {
    const [post, setPost] = useState([]);
    const [next, setNext] = useState(10)
    const [postToShow, setPostToShow] = useState([])
    const [loading, setLoading] = useState(false);
    const postsPerPage = 10;
    let holdingPosts = [];
    // slice part
    const loopWithSlice = (start, end) =>{
        const slicePosts = post.slice(start, end);
        holdingPosts = [...holdingPosts, ...slicePosts];
        setPostToShow(holdingPosts);
    }
    const handleShowPosts = () =>{
        loopWithSlice(0, next+postsPerPage);
        setNext(next + postsPerPage);
    }
    // fetch data from end point 
    const fetchData = () =>{
        setLoading(true);
        fetch('http://localhost:5000/blogs/')
        .then(res => res.json())
        .then(posts => {
            setPost(posts)
            // set initial Slice
            setPostToShow(posts.slice(0, postsPerPage));
            setLoading(false);
        });
    }
    useEffect(() => {
        fetchData();
    }, [])
    console.log(postToShow);
    const buttonStyle={
        padding: '15px 10px',
        marginBottom:'10px',
        backgroundColor: '#e9edef',
        borderRadius: '50px',
        fontSize: '16px'
       
    }
    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">Recent Blogs</h1>
                </div>
            </header>
            <main>
                <div className=" max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {/* <!-- Replace with your content --> */}
                {
                    postToShow.map((posts, index)=> <Blogs key={index} posts={posts}></Blogs>)
                }
                <button style={buttonStyle} onClick={handleShowPosts}>{loading? 'Loading...': 'Show More'}</button>
                </div>
            </main>
        </div>
    )
}

export default Home
