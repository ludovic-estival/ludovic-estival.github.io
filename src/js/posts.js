/*
To add a new post:
- create a new variable and copy/paste in it the generated post card
- add this variable in corresponding array(s)
*/

/* Part to modify  */
var postLymphatic =
`<div class="post" onclick="window.location='https://ludovic-estival.github.io/blog/2024/lymphatic-phlegm.html';">
    <img src="https://www.metal-archives.com/images/3/2/8/8/3288_logo.gif" class="rounded">
    <h4>Lymphatic Phlegm</h4>
    <span class='badge bg-danger'>Hard</span>
    <p>Groupe brézilien légendaire.</p>
    <span class="date">27/10/2024</span>
</div>
`;

var postPharmacist =
`<div class="post" onclick="window.location='https://ludovic-estival.github.io/blog/2024/pharmacist.html';">
    <img src="https://f4.bcbits.com/img/0019503318_10.jpg" class="rounded">
    <h4>Pharmacist</h4>
    <span class='badge bg-warning'>Medium</span>
    <p>Un groupe que j'adore.</p>
    <span class="date">26/10/2024</span>
</div>
`;

var postGoregrind = 
`<div class="post" onclick="window.location='https://ludovic-estival.github.io/blog/2024/goregrind.html';">
    <img src="https://iili.io/2q45W5F.png" alt="goregrind" class="rounded">
    <h4>Qu'est-ce que le Goregrind ?</h4>
    <p>Une explication de ce genre musical très spécial.</p>
    <span class="date">26/10/2024</span>
</div>
`;

// Posts in 'index.html'
var homePosts = [
    postLymphatic,
    postPharmacist,
    postGoregrind
]

// Posts in '2024/all.html'
var all2024Posts = [
    postLymphatic,
    postPharmacist,
    postGoregrind
]

/* Content load */

// Get id of post cards

var container = document.getElementsByClassName("post-zone");
var ids = [];
for (let i = 0; i < container.length; i++) {
    ids.push(container[i].attributes.id.nodeValue);
}

// Load post cards

var url = window.location.href;
var posts = undefined;

if (url.includes("2024/all.html")) {
    posts = all2024Posts;
}

if (url.includes("index.html") || url == "https://ludovic-estival.github.io/") {
    posts = homePosts;
}

for (let i = 0; i < posts.length; i++) {
    zoneId = ids[i];
    postContent = posts[i];
    document.getElementById(zoneId).innerHTML += postContent;
}