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
                <td><a href="update-post.html?id=${post._id}">Update</a> | <a href="#" data-id="${post._id}" class="delete-link">Delete</a></td>
            </tr>
            `
        }

        document.getElementById('table-body').innerHTML = tbodyHTML;

    } catch(error) {
        console.log(error)
    }

    let deletePostLinks = document.getElementsByClassName('delete-link')

    for (let deleteLink of deletePostLinks){
        deleteLink.addEventListener('click', async function(e){
            e.preventDefault();
            if (e.target.classname === 'delete-link') {

            }
            let postId = e.target.dataset.id;
            let response = await fetch('https://blog-api-assignment.up.railway.app/posts/' + postId, {
                method: "DELETE"
    
            });

            if(response.ok){
                e.target.parentNode.parentNode.remove();
                }


        })
    }
}

