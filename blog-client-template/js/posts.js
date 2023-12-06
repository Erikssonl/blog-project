fetchAllBlogPosts();

async function fetchAllBlogPosts(){
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
        if (!response.ok) {
            throw new Error('Something when wrong');
        }
        const posts = await response.json();

        let postsHTML = "";
        for (let post of posts){
            let postDate = new Date(post.date)

            postsHTML += `
            <li class="list-posts-item">
                <h3>${post.title}</h3>
                <p>${post.author} <br> <span class="date"> ${postDate.getFullYear()}-${postDate.getMonth()+1}-${postDate.getDate()} ${postDate.toLocaleTimeString()}</span></p>
                <p><span class="tags">tags: </span>${post.tags}</p> 
                <div>${post.content.substring(0, 100) + "...."} <a href="#">Read more</a> </div>

            </li>

            `
        }

        document.getElementById('blog-list').innerHTML = postsHTML;

    } catch(error) {
        console.log(error)
    }
}