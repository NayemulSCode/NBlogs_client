import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const BlogDetails = () => {
    const [isLoading, setIsLoading] = useState(false)
    let {id} = useParams()
    const [post, setPost] = useState({});
    const shortName = () =>{
        let subName;
        if(post?.title){
            return subName =  post?.title.slice(0,1);
        }
    }
    const fetchData = async() =>{
        setIsLoading(true)
        const response = await fetch(`http://localhost:5000/blog/${id}`)
        const data = await response.json();
        setPost(data);
        setIsLoading(false)
    }
    useEffect(()=>{
        fetchData();
    },[])
    if(isLoading){
        <div>Loading....</div>
    }
    return (
        <>
        <Navbar />
            <div className="p-10">
            <div className=" w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Mountain">
            {
                        post.image ? <img style={{width:"300px", height: '300px'}} src={`data:image/png;base64,${post?.image.img}`} />
                        :
                    <img style={{height: '300px'}} src={`http://localhost:5000/blogs${post.image}`} alt=""/>
                    }
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">{post.title}</div>
                <p className="text-gray-700 text-base text-left">{post.content}</p>
                </div>
                <div className="flex items-center">
                    <span className="w-10 h-10 rounded-full mr-2 text-center pt-2 bg-black text-white" >{shortName()}</span>
                <div className="text-sm">
                    <p className="text-gray-900 leading-none">Nayemul Hasan</p>
                    <p className="text-gray-600 text-left">June 23 2021</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
    )
}

export default BlogDetails
