const Blog = ({blog}) => {
const { cover, title, author, authorImg, publishDate, readTime, hashtags}= blog;
    console.log(blog)
    return (
        <div>
            <img src={cover} alt="" />
        </div>
    );
};

export default Blog;