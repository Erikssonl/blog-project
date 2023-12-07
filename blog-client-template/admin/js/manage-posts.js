fetchAllBlogPosts();

async function fetchAllBlogPosts(){
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
        if (!response.ok) {
            throw new Error('Something when wrong');
        }
        const posts = await response.json();

        let tbodyHTML = "";
        for (let post of posts){
            let postDate = new Date(post.date)

            tbodyHTML += `
            <tr>
                <td>${post.title}</td>
                <td>${post.author}</td>
                <td>${post.tags}</td>
                <td>${postDate.getFullYear()}-${postDate.getMonth()+1}-${postDate.getDate()} ${postDate.toLocaleTimeString()}</td>
                <td><a href="update-post.html?id=${post._id}">Update</a> | <a href="#">Delete</a></td>
            </tr>
            `
        }

        document.getElementById('table-body').innerHTML = tbodyHTML;

    } catch(error) {
        console.log(error)
    }
}