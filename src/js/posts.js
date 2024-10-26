/*
To add a new post:
- create a new variable and copy/paste in it the generated post card
- add this variable in corresponding array(s)
*/

/* Part to modify  */

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
    postGoregrind
]

// Posts in '2024/all.html'
var all2024Posts = [
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