/*Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
Milestone 1
 Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.*/

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

console.log(posts)

for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    //console.log(`id: ${post.id}`)
    //console.log(`content: ${post.content}`)
    //console.log(`media: ${post.media}`)
    //console.log(`name: ${post.name}`)
    //console.log(`image: ${post.image}`)
    //console.log(`likes: ${post.likes}`)
    //console.log(`created: ${post.created}`)
}

const containerEl = document.getElementById("container")

posts.forEach((post) => {
    let profilePic = post.author.image;
    let profilename = post.author.name;
    //let nameInitials;
    //if (profilePic == null){
       //profilePic = generateDefaultPropic(post.author.image)
    //}

    let time = post.created;
    let text = post.content;
    let picture = post.media;
    let number = post.id;
    let likes = post.likes;

    containerEl.insertAdjacentElement("beforeend", generatePosts(profilePic, profilename, time, text, picture, number, likes)) 
})

function generatePosts(propic, name, created, content, media, id, likes){
    const markup = `  
        <!--<div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${propic}" alt="${name}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${name}</div>
                            <div class="post-meta__time">${created}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${content}</div>
                <div class="post__image">
                    <img src="${media}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="${id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="${id}" class="js-likes-counter">${likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div> -->`
            return markup;
}

//funzione per mettere l'immagine di default con le iniziali del nome
// prendere dal ciclo forEach la variabile della foto profilo di default, portarla fuori dal ciclo per inserirla nella funzione sotto 


/*function generateDefaultPropic (userName){
    const name = userName.split(" ");
    //console.log(name)
    let firstName = name[0];
    let lastName = name[1];
    const capitalizedfirstName = firstName.charAt(0)
    const capitalizedlastName = lastName.charAt(0)
    let initials = `<div class=rounded>${capitalizedfirstName} ${capitalizedlastName}</div>`
    return initials; 
}*/
