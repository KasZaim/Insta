let posts = [
    {
        'profilimg': 'img/Profilbilder/ali-pazani-2613260.jpg',
        'author': 'JasminTasty',
        'image': ['img/posts/img1.jpg'],
        'description': 'Breakfast for Champions,',
        'location': 'Home',
        'likes': 2533,
        'full-description': 'Das Rezept für die Pancakes gibt es in meiner Bio :-)',
        'date': 'Gestern',
        'hashtags': '#foodie #lazy',
        'liked': false,
        'comments': [
            {
                'author': 'Mister Joe',
                'pic': 'img/Profilbilder/pexels-anna-nekrashevich-6801642.jpg',
                'comment': 'wow'
            }
        ]
    },
    {
        'profilimg': 'img/Profilbilder/daniel-xavier-1239288.jpg',
        'author': 'Fashion_Nova',
        'image': ['img/posts/img2.jpg', 'img/posts/img3.jpg', 'img/posts/img1.jpg'],
        'description': 'Photoshoot for the New Brand Prana Luna.',
        'location': 'Hamburg',
        'likes': 1521,
        'full-description': 'Leute checkt die neue Kollektion von Prana Luna for Her ab! Die haben ein paar richtig nice Outfits für euch',
        'date': 'vor 45 Minuten',
        'hashtags': '#fashion #instalife #prana',
        'liked': false,
        'comments': [
            {
                'author': 'jasmin',
                'pic': 'img/Profilbilder/pexels-anna-nekrashevich-6801642.jpg',
                'comment': 'yeha'
            },
            {
                'author': 'Mister Joe',
                'pic': 'img/Profilbilder/pexels-anna-nekrashevich-6801642.jpg',
                'comment': 'Das sieht Lecker aus'
            }
        ]
    },
    {
        'profilimg': 'img/Profilbilder/pixabay-38554.jpg',
        'author': 'Healthy_Recipes',
        'image': ['img/posts/img5.jpg'],
        'description': 'Hier haben wir ein High Protein Porridge,',
        'location': 'LXS Studios GmbH, Köln',
        'likes': 558,
        'full-description': 'mit unglaublichen 50gr Protein pro Portion, und dazu schmeckt es einfach fantastisch',
        'date': 'vor 5 std',
        'hashtags': '#goodlife #healthylifestyle #fruits',
        'liked': false,
        'comments': [
            {
                'author': 'kempinski',
                'pic': 'img/Profilbilder/pexels-anna-nekrashevich-6801642.jpg',
                'comment': 'oha'
            },
            {
                'author': 'Mister Joe',
                'pic': 'img/Profilbilder/pexels-anna-nekrashevich-6801642.jpg',
                'comment': 'Das sieht Lecker aus'
            }
        ]
    },
    {
        'profilimg': 'img/Profilbilder/pexels-pixabay-413959.jpg',
        'author': 'Travel_addicted',
        'image': ['img/posts/img6.jpg'],
        'description': 'Mal wieder unterwegs,',
        'location': 'Budapest',
        'likes': 2685,
        'full-description': 'diesesmal bin ich in Budapest.. und was soll ich sagen es ist einfach schön hier zu der Jahreszeit!m ',
        'date': 'vor 10 std',
        'hashtags': '#travel #vloglifestyle #happy ',
        'liked': false,
        'comments': [
            {
                'author': 'Mister Joe',
                'pic': 'img/Profilbilder/pexels-anna-nekrashevich-6801642.jpg',
                'comment': 'Das sieht Lecker aus'
            },
            {
                'author': 'Mister Joe',
                'pic': 'img/Profilbilder/pexels-anna-nekrashevich-6801642.jpg',
                'comment': 'Das sieht Lecker aus'
            }
        ]
    }
];

function renderPosts() {
    let content = document.getElementById('posted');
    content.innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        let commentsAmount = posts[i].comments.length;

        content.innerHTML += postsTemplate(i, post, commentsAmount);
        multipleImageSlider(i, post, commentsAmount);
        renderComments(i);
    }
}
function renderComments(i) {
    let comments = document.getElementById(`comments${i}`);
    let commentsAmount = posts[i].comments.length;
    comments.innerHTML = '';
    for (let k = 0; k < commentsAmount; k++) {
        const comment = posts[i].comments[k];
        comments.innerHTML += `
            <div><b>${comment.author}</b>: ${comment.comment}</div>`;
    }
}
function save(i){
    let commentValue = document.getElementById(`comment-input${i}`).value;
    let newComment = {
        'author':'Kaser',
        'comment':`${commentValue}`
    };
    posts[i].comments.push(newComment)
    renderPosts();
    saveInLocalStorage();
}
function saveInLocalStorage(){
    
}
function multipleImageSlider(i, post) {//Soll den multiple image slider rendern
    if (post.image.length > 1) {
        document.getElementById(`multi-img${i}`).remove();
        document.getElementById(`carousel-container${i}`).innerHTML = carouselNewTemplate();

        for (let j = 0; j < post.image.length; j++) {
            const image = post.image[j];
            if (j == 1) {
                document.getElementById(`carousel-inners`).innerHTML += `
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="${image}">
                    </div>`;
            } else {
                document.getElementById(`carousel-inners`).innerHTML += `
                <div class="carousel-item ">
                    <img class="d-block w-100" src="${image}">
                </div>`;
            }

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

function enableButton(i) {
    let input = document.getElementById(`comment-input${i}`);
    let commentBtn = document.getElementById(`comment-btn${i}`);
    commentBtn.disabled = !input.value;
    if (commentBtn.disabled == false) {
        commentBtn.style.color = 'darkblue';
    } else {
        commentBtn.style.color = 'gray';
    }
}









