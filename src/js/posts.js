/* Part to modify */

var postDiversBlack =
`<div class="post" onclick="window.open('https://ludovic-estival.github.io/blog/2024/divers-black.html');">
    <div class="img">
        <img src="https://iili.io/2uU5Mej.png">
    </div>
    <h4>Albums Black Metal</h4>
    <span class='badge bg-success'>Easy</span>
    <span class='badge bg-info'>Black Metal</span>
    <p>Une liste d'albums divers de Black Metal.</p>
    <span class="date">13/11/2024</span>
</div>
`

var postDiversGoregrind =
`<div class="post" onclick="window.open('https://ludovic-estival.github.io/blog/2024/divers-goregrind.html');">
    <div class="img">
        <img src="https://iili.io/2uU55zl.png">
    </div>
    <h4>Albums Goregrind</h4>
    <span class='badge bg-success'>Easy</span>
    <span class='badge bg-warning'>Medium</span>
    <span class='badge bg-info'>Goregrind</span>
    <p>Une liste d'albums de Goregrind à découvrir.</p>
    <span class="date">01/11/2024</span>
</div>
`;

var postKiller = 
`<div class="post" onclick="window.open('https://ludovic-estival.github.io/blog/2024/killer-klown.html');">
    <div class="img">
        <img src="https://www.metal-archives.com/images/3/5/4/0/3540486471_logo.jpg?4144" alt="killer klown">
    </div>
    <h4>Killer Klown</h4>
    <span class='badge bg-success'>Easy</span>
    <span class='badge bg-info'>Goregrind</span>
    <p>Idéal pour découvrir le Goregrind.</p>
    <span class="date">31/10/2024</span>
</div>
`;

var postLDOH =
`<div class="post" onclick="window.open('https://ludovic-estival.github.io/blog/2024/ldoh.html');">
    <div class="img">
        <img src="https://iili.io/2BZ7k9S.jpg">
    </div>
    <h4>Last Days of Humanity</h4>
    <span class='badge bg-warning'>Medium</span>
    <span class='badge bg-info'>Goregrind</span>
    <p>Le premier groupe de Goregrind que j'ai découvert.</p>
    <span class="date">28/10/2024</span>
</div>
`;

var postSerotonin =
`<div class="post" onclick="window.open('https://ludovic-estival.github.io/blog/2024/serotonin-leakage.html');">
    <div class="img">
        <img src="https://iili.io/2BRsfyX.jpg">
    </div>
    <h4>Serotonin Leakage</h4>
    <span class='badge bg-success'>Easy</span>
    <span class='badge bg-warning'>Medium</span>
    <span class='badge bg-info'>Goregrind / Black Metal</span>
    <p>Un groupe qui propose du Goregrind avec du Black Metal et de l'ambient.</p>
    <span class="date">27/10/2024</span>
</div>
`;

var postLymphatic =
`<div class="post" onclick="window.open('https://ludovic-estival.github.io/blog/2024/lymphatic-phlegm.html');">
    <div class="img">
        <img src="https://www.metal-archives.com/images/3/2/8/8/3288_logo.gif">
    </div>
    <h4>Lymphatic Phlegm</h4>
    <span class='badge bg-danger'>Hard</span>
    <span class='badge bg-info'>Goregrind</span>
    <p>Groupe brézilien légendaire.</p>
    <span class="date">27/10/2024</span>
</div>
`;

var postPharmacist =
`<div class="post" onclick="window.open('https://ludovic-estival.github.io/blog/2024/pharmacist.html');">
    <div class="img">
        <img src="https://f4.bcbits.com/img/0019503318_10.jpg">
    </div>
    <h4>Pharmacist</h4>
    <span class='badge bg-success'>Easy</span>
    <span class='badge bg-warning'>Medium</span>
    <span class='badge bg-info'>Goregrind / Death Metal</span>
    <p>Un groupe que j'adore.</p>
    <span class="date">26/10/2024</span>
</div>
`;

var postGoregrind = 
`<div class="post" onclick="window.open('https://ludovic-estival.github.io/blog/2024/goregrind.html');">
    <div class="img">    
        <img src="https://iili.io/2q45W5F.png" alt="goregrind">
    </div>
    <h4>Qu'est-ce que le Goregrind ?</h4>
    <p>Une explication de ce genre musical très spécial.</p>
    <span class="date">26/10/2024</span>
</div>
`;

// Posts in 'index.html'- Max. 6 posts by default
var homePosts = [
    postDiversBlack,
    postDiversGoregrind,
    postKiller,
    postLDOH,
    postSerotonin,
    postLymphatic
]

// Posts in '2024/all.html' - Max. 6 posts by default
var all2024Posts = [
    postDiversBlack,
    postDiversGoregrind,
    postKiller,
    postLDOH,
    postSerotonin,
    postLymphatic,
    postPharmacist,
    postGoregrind
]

/* End of part to modify */

var url = window.location.href;

if (url.includes("index.html") || url.includes("about.html") || url == "https://ludovic-estival.github.io/") {

    document.getElementById("head").innerHTML +=
    `<link rel='stylesheet' type='text/css' href='src/css/general.css'>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    `;

    if(!url.includes("about.html")) {
        loadCards(homePosts);
    }

} else {
    document.getElementById("head").innerHTML +=
    `<link rel='stylesheet' type='text/css' href='../../src/css/general.css'>
    <link rel="icon" type="image/x-icon" href="../../favicon.ico">
    `;

    if (!url.includes("all.html")) {
        document.getElementById("head").innerHTML += `<link rel='stylesheet' type='text/css' href='../../src/css/post.css'>`;
    } else {

        if (url.includes("2024")) {
            loadCards(all2024Posts);
        }
    }
}


/* Function for loading post cards */

function loadCards(posts) {
    var container = document.getElementsByClassName("post-zone");

    // Get id of post cards
    var ids = [];
    for (let i = 0; i < container.length; i++) {
        ids.push(container[i].attributes.id.nodeValue);
    }

    // Load post cards
    
    for (let i = 0; i < posts.length; i++) {
        zoneId = ids[i];
        postContent = posts[i];
        document.getElementById(zoneId).innerHTML += postContent;
    }
}

/* Append common elements */

// Librairies
document.getElementById("head").innerHTML +=
`<meta charset='utf-8'>
<meta http-equiv='X-UA-Compatible' content='IE=edge'>
<meta name='viewport' content='width=device-width, initial-scale=1'>
<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet'>
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossorigin="anonymous" referrerpolicy="no-referrer"/>
`;

// Header
document.getElementById("body").innerHTML +=
`<header>
    <div class="header-left">
        <h1>Un blog sur le metal</h1>
        <h3>par Ludovic Estival</h3>
    </div>
    <div class="header-right">
        <button><a href="https://ludovic-estival.github.io/index.html">Accueil</a></button>
        <div class="dropdown">
            <button>Posts <i class="fa-solid fa-chevron-down"></i></button>
            <div class="dropdown-content">
                <a href="https://ludovic-estival.github.io/blog/2024/all.html">2024</a>
            </div>
        </div>
        <button><a href="https://ludovic-estival.github.io/about.html">A propos</a></button>
    </div>
</header>
`;

// Footer
document.getElementById("footer").innerHTML +=
`<div class="col-sm-4"></div>
<div class="col-sm-4 footer mt-5">
    <p>Un blog sur le metal par Ludovic Estival</p>
    <a href="https://ludovic-estival.github.io/index.html">- Accueil</a>
    <a href="https://ludovic-estival.github.io/about.html">- A propos</a>
    <a href="https://github.com/ludovic-estival"><i class="fa-brands fa-github"></i></a>
    <a href="https://www.linkedin.com/in/ludovic-estival-a7bb5224b/"><i class="fa-brands fa-linkedin"></i></a>
</div>
<div class="col-sm-4"></div>
`;
