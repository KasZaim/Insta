let posts = [
    {
        'profilimg': 'img/Profilbilder/ali-pazani-2613260.jpg',
        'author': 'JasminTasty',
        'image': ['img/posts/img1.jpg'],
        'desription': 'Breakfast for Champions,',
        'location': 'Home',
        'likes': 2533,
        'full-description': 'Das Rezept für die Pancakes gibt es in meiner Bio :-)',
        'date': 'Gestern',
        'hashtags': '#foodie #lazy',
        'liked': false,
    },
    {
        'profilimg': 'img/Profilbilder/daniel-xavier-1239288.jpg',
        'author': 'Fashion_Nova',
        'image': ['img/posts/img2.jpg', 'img/posts/img3.jpg', 'img/posts/img4.jpg'],
        'desription': 'Photoshoot for the New Brand Prana Luna.',
        'location': 'Hamburg',
        'likes': 1521,
        'full-description': 'Leute checkt die neue Kollektion von Prana Luna for Her ab! Die haben ein paar richtig nice Outfits für euch',
        'date': 'vor 45 Minuten',
        'hashtags': '#fashion #instalife #prana',
        'liked': false,
    },
    {
        'profilimg': 'img/Profilbilder/pixabay-38554.jpg',
        'author': 'Healthy_Recipes',
        'image': ['img/posts/img5.jpg'],
        'desription': 'Hier haben wir ein High Protein Porridge,',
        'location': 'LXS Studios GmbH, Köln',
        'likes': 558,
        'full-description': 'mit unglaublichen 50gr Protein pro Portion, und dazu schmeckt es einfach fantastisch',
        'date': 'vor 5 std',
        'hashtags': '#goodlife #healthylifestyle #fruits',
        'liked': false,
    },
    {
        'profilimg': 'img/Profilbilder/pexels-pixabay-413959.jpg',
        'author': 'Travel_addicted',
        'image': ['img/posts/img6.jpg'],
        'desription': 'Mal wieder unterwegs,',
        'location': 'Budapest',
        'likes': 2685,
        'full-description': 'diesesmal bin ich in Budapest.. und was soll ich sagen es ist einfach schön hier zu der Jahreszeit!m ',
        'date': 'vor 10 std',
        'hashtags': '#travel #vloglifestyle #happy ',
        'liked': false,
    }
];

function renderPosts() {
    let content = document.getElementById('posted');
    content.innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        //Soll den multiple image slider rendern
        if (post.image.length > 1) {
            content.innerHTML += postsTemplate(i, post);
            document.getElementById(`carousel-container${i}`).classList.remove('d-none');
            document.getElementById(`multi-img${i}`).remove();

            for (let j = 0; j < posts[i].image.length; j++) {
                const postad = posts[i];
                const carousel = document.getElementById(`carousel-container${i}`);
                carousel.innerHTML += `<div class="carousel-cell">
                                            <img src="${postad.image[j]}">
                                        </div>`;
            }
        } else {
            content.innerHTML += postsTemplate(i, post); // rendert die normale Posts mit jeweils 1 Bild;
        }
    }
}

function readmore(i) {
    let span = document.getElementById(`more${i}`);
    let fullText = document.getElementById(`full-text${i}`);
    let textContainer = document.getElementById(`posted-text-container${i}`);
    span.classList.add('d-none');
    fullText.classList.remove('d-none');
    textContainer.classList.remove('cut-posted-text');
}
function scrollLinks() {
    let scrollableDiv = document.getElementById('horizontal-scroll');
    scrollableDiv.scrollLeft -= 100;
};
function scrollRight() {
    let scrollableDiv = document.getElementById('horizontal-scroll');
    scrollableDiv.scrollLeft += 100;
};
/* 
let currentImage = "img/love.png"; // funktioniert nur wenn die variable global ist!-- alternative Like Funktion;
function gotLiked(i) {
    let image = document.getElementById(`heart${i}`);
    if (currentImage == "img/love.png") {
        image.src = "img/heart.png";
        currentImage = "img/heart.png";
        posts[i].likes++;
    } else {
        image.src = "img/love.png";
        currentImage = "img/love.png";
        posts[i].likes--;
    }
    document.getElementById(`liked${i}`).innerHTML = posts[i].likes;
}*/
function gotLiked(i) {
    let image = document.getElementById(`heart${i}`);
    if (posts[i].liked == false) {
        image.src = "img/heart.png";
        posts[i].liked = true;
        ++posts[i].likes;
    } else {
        image.src = "img/love.png";
        posts[i].liked = false;
        --posts[i].likes;
    }
    document.getElementById(`liked${i}`).innerHTML = posts[i].likes;
}

//Filters out the Authors;
function filterNames() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    let content = document.getElementById('posted');
    content.innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        if (post.author.toLowerCase().includes(search)) {
            content.innerHTML += postsTemplate(i, post);
        }

    }

}










