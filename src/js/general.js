/* Append common elements */

function addIndexNav() {
    const body = document.getElementById("body").innerHTML +=
    `<div class="col-sm-3">
    <div id="mySidenav" class="sidenav ml-5">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"><i class="fa-solid fa-xmark"></i></a>
        <a href="index.html">Accueil</a>
        <a href="blog/posts.html">Posts</a>
        <a href="blog/categories.html">Catégories</a>
        <a href="blog/about.html">A propos</a>
    </div>
    <h1><i class="fa-solid fa-bars" data-bs-toggle="tooltip" title="Navigation" onclick="openNav()"></i></h1>
    </div>
    `;

    const footer = document.getElementById("footer").innerHTML +=
    `<div class="col-sm-3"></div>
        <div class="col-sm-8 footer mt-5">
            <p>Un blog sur le metal par Ludovic Estival</p>
            <a href="index.html">- Accueil</a>
            <a href="blog/posts.html">- Posts</a>
            <a href="blog/categories.html">- Catégories</a>
            <a href="blog/about.html">- A propos</a>
            <a href="https://github.com/ludovic-estival"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/ludovic-estival-a7bb5224b/"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <div class="col-sm-2"></div>
    `;
}

function addCategAboutPostNav() {
    const body = document.getElementById("body").innerHTML +=
    `<div class="col-sm-3">
    <div id="mySidenav" class="sidenav ml-5">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"><i class="fa-solid fa-xmark"></i></a>
        <a href="../index.html">Accueil</a>
        <a href="posts.html">Posts</a>
        <a href="categories.html">Catégories</a>
        <a href="about.html">A propos</a>
    </div>
    <h1><i class="fa-solid fa-bars" data-bs-toggle="tooltip" title="Navigation" onclick="openNav()"></i></h1>
    </div>
    `;

    const footer = document.getElementById("footer").innerHTML +=
    `<div class="col-sm-3"></div>
        <div class="col-sm-8 footer mt-5">
            <p>Un blog sur le metal par Ludovic Estival</p>
            <a href="../index.html">- Accueil</a>
            <a href="posts.html">- Posts</a>
            <a href="categories.html">- Catégories</a>
            <a href="about.html">- A propos</a>
            <a href="https://github.com/ludovic-estival"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/ludovic-estival-a7bb5224b/"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <div class="col-sm-2"></div>
    `;
}

function addAllNav() {
    const body = document.getElementById("body").innerHTML +=
    `<div class="col-sm-3">
    <div id="mySidenav" class="sidenav ml-5">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"><i class="fa-solid fa-xmark"></i></a>
        <a href="../../index.html">Accueil</a>
        <a href="../posts.html">Posts</a>
        <a href="../categories.html">Catégories</a>
        <a href="../about.html">A propos</a>
    </div>
    <h1><i class="fa-solid fa-bars" data-bs-toggle="tooltip" title="Navigation" onclick="openNav()"></i></h1>
    </div>
    `;

    const footer = document.getElementById("footer").innerHTML +=
    `<div class="col-sm-3"></div>
        <div class="col-sm-8 footer mt-5">
            <p>Un blog sur le metal par Ludovic Estival</p>
            <a href="../../index.html">- Accueil</a>
            <a href="../posts.html">- Posts</a>
            <a href="../categories.html">- Catégories</a>
            <a href="../about.html">- A propos</a>
            <a href="https://github.com/ludovic-estival"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/ludovic-estival-a7bb5224b/"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <div class="col-sm-2"></div>
    `;
}

function addPostNav() {
    const body = document.getElementById("body").innerHTML +=
    `<div class="col-sm-3">
    <div id="mySidenav" class="sidenav ml-5">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"><i class="fa-solid fa-xmark"></i></a>
        <a href="../../../index.html">Accueil</a>
        <a href="../../posts.html">Posts</a>
        <a href="../../categories.html">Catégories</a>
        <a href="../../about.html">A propos</a>
    </div>
    <h1><i class="fa-solid fa-bars" data-bs-toggle="tooltip" title="Navigation" onclick="openNav()"></i></h1>
    </div>  
    `;

    const footer = document.getElementById("footer").innerHTML +=
    `<div class="col-sm-3"></div>
        <div class="col-sm-8 footer mt-5">
            <p>Un blog sur le metal par Ludovic Estival</p>
            <a href="../../../index.html">- Accueil</a>
            <a href="../../posts.html">- Posts</a>
            <a href="../../categories.html">- Catégories</a>
            <a href="../../about.html">- A propos</a>
            <a href="https://github.com/ludovic-estival"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/ludovic-estival-a7bb5224b/"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <div class="col-sm-2"></div>
    `;
}

// Head
const head = document.getElementById("head").innerHTML +=
`<meta charset='utf-8'>
<meta http-equiv='X-UA-Compatible' content='IE=edge'>
<meta name='viewport' content='width=device-width, initial-scale=1'>
<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet'>
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossorigin="anonymous" referrerpolicy="no-referrer"/>
`;

// Navigation
var url = window.location.href

if (url.includes('index.html')) {
    addIndexNav();
} else {
    split = url.split("/blog/")[1];
    const dir1 = ["about.html", "categories.html", "posts.html"];

    if (dir1.includes(split)) {
        addCategAboutPostNav();
    }
    console.log(split);
    if (split.includes("all.html") || split.includes("categories/")) {
        addAllNav();
    }

    // Regex 'année/mois/'
    if (split.search('[0-9]{4}\/((0[1-9])|(1[0-2]))\/') != -1) {
        addPostNav();
    }
}

// Page main title  
const body = document.getElementById("body").innerHTML +=
`<div class="col-sm-6 mt-5">
    <h1>Un blog sur le metal</h1>
    <h3>par Ludovic Estival</h3>
</div>
<div class="col-sm-3"></div>
`;

/* The side navigation menu */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* Enable all tooltips */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
})
