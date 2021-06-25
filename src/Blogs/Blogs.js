import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Blogs = (posts) => {
    const [isClick, setIsClick] = useState(false);
    // regular expression 
    const shortContent = posts.posts?.content.replace(/<(.|\n)*?>/g, "");
    const subContent = shortContent.substring(0, 220) + '...';
    console.log(posts.posts?._id)
    const id = posts.posts?._id;
  return (
      
    <article className="divide-y divide-gray-200 space-x-5 m-5 xl:grid xl:grid-cols-4 xl:space-y-0 ">
        <Link to={`/blog/${id}`}>
            <div className="text-base font-medium text-gray-500">
            {
                posts.posts?.image ? <img style={{width:"300px", height: '300px'}} src={`data:image/png;base64,${posts.posts?.image.img}`} />
                :
            <img style={{height: '300px'}} src={`https://intense-waters-52527.herokuapp.com/blogs${posts.image}`} alt=""/>
            }
            </div>
        </Link>
        <div className="space-y-5 xl:col-span-3">
            <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">
                <Link to={`/blog/${id}`} className="text-gray-900">
                    {posts.posts?.title}
                </Link>
            </h2>
            <div class="prose max-w-none">
                <p className="text-left text-gray-500">
                {
                    isClick?
                    <span>{posts.posts?.content}</span>
                    :
                    <span>{subContent}</span>
                }
                <span style={{cursor:'pointer', color: 'green'}} onClick={ ()=>{setIsClick(true)}}>{ isClick ? <span></span>: <span>read more</span>}</span>
                </p>
            </div>
            </div>
            
        </div>
    </article>
          
      
    
  );
}

export default Blogs
