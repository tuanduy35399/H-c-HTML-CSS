
var postAPI= 'https://picsum.photos/v2/list'
fetch(postAPI)
    .then((response)=>response.json())
    .then(posts=>{
        var html= posts.map(post=>{
            return `<div class='flex'>
                <img src=${post.download_url} alt=${post.author} style="width:100%; height:150px; object-fit:cover;">
                <p>${post.author}</p>
            </div>`
        }).join('')
        document.querySelector(".container").innerHTML= html
    })
    .catch(error=>console.log('Có lỗi:', error))
