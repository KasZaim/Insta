

function postsTemplate(i, post) {
    return/*html*/`<div class="main-posts">
                <div class="post-header">
                    <div class="post-header-left">
                        <div class="profil-icon"><img src="${post['profilimg']}"></div>
                        <div class="influencer"><b>${post['author']}</b> ${post['location']}</div> 
                    </div>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
                <div class="post-img">
                    <div class="main-carousel d-none" data-flickity='{ "adaptiveHeight": true, "autoPlay": true }' id="carousel-container${i}" >
                    
                    </div>
                    <img id="multi-img${i}" src="${post['image']}">
                </div>
                <div class="interactions">
                    <div class="like-icons">
                        <div class="like-comment-share">
                            <img onclick="gotLiked(${i})" id="heart${i}" src="img/love.png" alt="">
                            <img src="img/comment.png">
                            <img src="img/send.png" alt="">
                        </div>
                        <div>
                            <b>Gefällt <span id="liked${i}"> ${post['likes']}</span> Mal</b>
                        </div>
                    </div>
                </div>
                <div id="posted-text-container${i}" class="post-text cut-posted-text">
                    <b>${post['author']}</b> ${post['desription']} <span class="read-more" id="more${i}" onclick="readmore(${i})" >...more</span> <div id="full-text${i}" class="full-text d-none">${post['full-description']} <div class="hashtags">
                    ${post['hashtags']}
                </div></div>
                </div>
                
                <div class="comments">
                    Alle 255 Kommentare ansehen
                </div>
                <div class="date">${post['date']}</div>
                
                <div class="comment-section">
                    <img src="img/smile.png" alt="">
                    <input placeholder="Kommentieren ..." type="text">
                    <button>Posten</button>
                </div>
            </div>`;
}

function carousel() {
    return/*html*/`<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner" id="carousel-container${i}">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="img/posts/img2.jpg" alt="First slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="img/posts/img3.jpg" alt="Second slide">
                             </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="img/posts/img4.jpg" alt="Third slide">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                        </a>
                    </div>`;
}