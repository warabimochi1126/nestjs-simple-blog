export async function getAllPosts() {
    const response = await fetch("http://localhost:5000/posts", {
        cache: "no-cache"
    });
    const data = await response.json();

    return data;
}

export async function getPostById(id: string) {
    const response = await fetch(`http://localhost:5000/posts/${id}`, {
        cache: "no-cache"
    });
    const data = await response.json();

    return data;
}