document.getElementById('create-post-form').addEventListener('submit', createPost)

async function createPost(e) {
    e.preventDefault();
    let form = e.target;

    try {
        let formData = new FormData(form)
        let data = {
            "title": formData.get('title'),
            "author": formData.get('author'),
            "content": formData.get('content'),
            "tags": getSelectedTags()
        };

        let response = await fetch('https://blog-api-assignment.up.railway.app/posts/', {
            method: "POST",
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

function getSelectedTags() {
    const select = document.getElementById('tags');
    const selectedOptions = select.selectedOptions;
    const tags = Array.from(selectedOptions).map(option => option.value);
    return tags;
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