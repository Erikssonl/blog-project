
console.log('Query string: ', location.search)
const urlParams = new URLSearchParams(location.search)
console.log(urlParams.get('id'))

fetchPost();

async function fetchPost() {
    const response = await fetch('https://blog-api-assignment.up.railway.app/posts/' + urlParams.get('id'), );
    if (!response.ok) {
        throw new Error('Something when wrong');
    }
    const post = await response.json();

    let postDate = new Date(post.date)

    postHTML = `
        <div>
            <h1>${post.title}</h1>
            <p>${post.author} <br> <span class="date"> ${postDate.getFullYear()}-${postDate.getMonth()+1}-${postDate.getDate()} ${postDate.toLocaleTimeString()}</span></p>
            <p><span class="tags">tags: </span>${post.tags}</p> 
            <div>${post.content}</div>
            <br>
            <a href="index.html" <i class="fa fa-long-arrow-left" aria-hidden="true"></i>  Back </a>
        </div>
    `

    document.getElementById('blog-post').innerHTML = postHTML;
}