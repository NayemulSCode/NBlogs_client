import React, { useEffect, useState } from 'react'

const ManageBlog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/blogs/')
        .then(res => res.json())
        .then((data)=>{
            setBlogs(data);
        })
    },[])
    const handleDeleteBlog = id =>{
        fetch(`http://localhost:5000/blog/${id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
          if(result){ 
            setBlogs( blogs.filter((blog) => blog._id !== id))
          }
          alert('deletion successfully!');
        })
      }
    return (
<       div className="table w-full p-2">
        <table className="w-full border">
            <thead>
                <tr className="bg-gray-50 border-b">
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div className="flex items-center justify-center">
                            ID
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div className="flex items-center justify-center">
                            Title
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div className="flex items-center justify-center">
                            Content
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div className="flex items-center justify-center">
                            Action
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
            {
                blogs.map((blog, index)=>
                    <tr key={index} className="bg-gray-100 text-center border-b text-sm text-gray-600">
                    <td className="p-2 border-r">{index}</td>
                    <td className="p-2 border-r text-left">{blog.title}</td>
                    <td className="p-2 border-r text-left">{blog.content}</td>
                    <td>
                        <a href="#" className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</a>
                        <a href="#" onClick={ ()=> {handleDeleteBlog(blog._id)}} className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</a>
                    </td>
                </tr>
                )
            }

            </tbody>
        </table>
    </div>
    )
}

export default ManageBlog
