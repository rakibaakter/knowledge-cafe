import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])
    return (
        <div className="px-8 md:px-24 py-6 md:flex md:flex-row-reverse justify-between">
            <div>
                <h2>list/card</h2>
            </div>
            <div>
            {
                blogs.map(blog => 
                    <Blog key={blog.id} blog={blog}></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;