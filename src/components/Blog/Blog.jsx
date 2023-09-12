const Blog = ({blog}) => {
const { cover, title, author, authorImg, publishDate, readTime, hashtags}= blog;
    console.log(blog)
    return (
        <div className="py-8 space-y-4">
            <img src={cover} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex gap-6 items-center">
                    <img className="w-14 h-14 rounded-full"src={authorImg} alt="" />
                    <div>
                        <h3 className="text-2xl font-bold">{author}</h3>
                        <p>{publishDate}</p>
                    </div>
                </div>
                <span>{readTime} min read</span>
            </div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p>
                {
                    hashtags.map((hash, index) =>
                        <span key={index} className="mr-2 text-blue-600 cursor-pointer hover:underline">#{hash}</span>
                    )
                }
            </p>
            <button className="text-purple-700 underline">Mark As Read</button>
        </div>
    );
};

export default Blog;