import { PostCard } from '../PostCard';

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