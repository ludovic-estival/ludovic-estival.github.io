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