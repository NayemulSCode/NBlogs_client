import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { useForm } from "react-hook-form";
import './AddBlog.css';

const Input = ({ label,name, register, required }) => (
    <>
      <label>{label}</label>
      <input {...register(name, { required })} />
    </>
  );
const AddBlog = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const [file, setFile] = useState(null)
    const handleFileChange = (e) =>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const onSubmit = (data,e) => {
        e.preventDefault();
        // const {file,title,content} = data;
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', data.title);
        formData.append('content', data.content);

        fetch('https://intense-waters-52527.herokuapp.com/addBlog',{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            alert('blogs added!!')
            console.log(data)
        })

        console.log(data,file);
    }
    return (
        <div className="flex flex-no-wrap">
        <Sidebar />
        <div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
                    {/* Place your content here */}
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <Input name="title" label="Title" register={register} required />
                        <p>{errors.pName && "Title is required"}</p>
                        <Input name="content" label="Content" type="textarea"  rows={5}
                        cols={5} register={register}  required />
                       <input name="file" type="file" onChange = {handleFileChange} />
                        <button className="mb-3" type="submit">Add Blog</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBlog
