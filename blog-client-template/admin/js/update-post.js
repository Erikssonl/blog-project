
console.log('Query string: ', location.search)
const urlParams = new URLSearchParams(location.search)
console.log(urlParams.get('id'))

fetchPost();

async function fetchPost() {
    try{
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts/' + urlParams.get('id'), );
        if (!response.ok) {
            throw new Error('Something when wrong');
        }
        const post = await response.json();
        console.log(post);
    
    
        document.getElementById('title').value = post.title;
        document.getElementById('author').value = post.author;
        document.getElementById('content-textarea').value = post.content;
        // document.getElementById('tags').value = post.tags;

    } catch(error) {
        console.log(error)
    }

}

document.getElementById('update-post-form').addEventListener('submit', updatePost)

async function updatePost(e) {
    e.preventDefault();
    let form = e.target;

    try {
        let formData = new FormData(form)
        let data = {
            "title": formData.get('title'),
            "author": formData.get('author'),
            "content": formData.get('content')
        };

        let response = await fetch('https://blog-api-assignment.up.railway.app/posts/' + urlParams.get('id'), {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if(response.ok) {
            location.replace('index.html');
        }

    } catch(error) {
        console.log(error)
    } 
}


const select = document.getElementById('tags');

select.addEventListener('mousedown', (e) => {
    e.preventDefault();

    const option = e.target;
    const alreadySelected = option.selected;

    if (alreadySelected) {
        option.selected = false;
    } else {
        option.selected = true;
    }
});
