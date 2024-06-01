export async function getAllPosts() {
    const response = await fetch("http://localhost:5000/posts", {
        cache: "no-cache"
    });
    const data = await response.json();

    return data;
}