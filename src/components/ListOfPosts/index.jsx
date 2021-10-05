import { PostCard } from '../PostCard';
import "./styles.css"
export const ListOfPosts = ({ posts }) => {
    return (
        <div className="posts">
            {posts.map(post => (
                <PostCard post={post} key={post.id} />
            )
            )}
        </div>
    );
}