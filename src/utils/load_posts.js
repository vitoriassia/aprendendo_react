export const loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');

    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
    const postJson = await posts.json();
    const photosJson = await photos.json();
    const postAndPhoto = postJson.map((post, index) => {
        return { ...post, cover: photosJson[index].url }
    })
    return postAndPhoto;
}