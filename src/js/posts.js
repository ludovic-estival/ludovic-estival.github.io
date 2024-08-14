/*
To add a new post:
- create a new variable and copy/paste in it the generated post card
- add this variable in corresponding array(s)
*/

/* Part to modify  */

var postBlackbraid = 
`<div class="post" onclick="window.location='https://ludovic-estival.github.io/blog/2024/08/14.html';">
    <img src="https://www.metal-archives.com/images/1/0/6/7/1067183.jpg?3342" class="rounded">
    <h4>Blackbraid</h4>
    <div class="categories mb-2">
        <span class="badge bg-success">Black Metal</span>
    </div>
    <p>
        Je vous présente une découverte récente: Blackbraid.
        C'est un groupe de Black Metal atmosphérique très intéressant.
    </p>
    <span class="date">14 août 2024</span>
</div>
`;

var postSerotonin = 
`<div class="post" onclick="window.location='https://ludovic-estival.github.io/blog/2024/08/01.html';">
    <img src="https://www.metal-archives.com/images/1/1/4/0/1140219.jpg?4712" class="rounded">
    <h4>Serotonin Leakage</h4>
    <div class="categories mb-2">
        <span class="badge bg-success">Goregrind</span>
    </div>
    <p>Je vous parler du groupe Serotonin Leakage.</p>
    <span class="date">1er août 2024</span>
</div>
`;

var postFavGoregrind = 
`<div class="post" onclick="window.location='https://ludovic-estival.github.io/blog/2024/07/28.html';">
    <img src="https://www.metal-archives.com/images/1/1/2/5/1125805.jpg?2013" class="rounded">
    <h4>Mes albums de Goregrind préférés</h4>
    <div class="categories mb-2">
        <span class="badge bg-success">Goregrind</span>
    </div>
    <p>Je vous présente mes albums de Goregrind préférés.</p>
    <span class="date">28 juillet 2024</span>
</div>
`;

var postFavAlbums = 
`<div class="post" onclick="window.location='https://ludovic-estival.github.io/blog/2024/07/19.html';">
    <img src="https://www.metal-archives.com/images/8/5/4/8/854872.jpg?3831" class="rounded">
    <h4>Mes albums préférés</h4>
    <div class="categories mb-2">
        <span class="badge bg-success">Black Metal</span>
        <span class="badge bg-success">Speed Metal</span>
        <span class="badge bg-success">Goregrind</span>
    </div>
    <p>Je vous présente mes albums préférés.</p>
    <span class="date">19 juillet 2024</span>
</div>
`;

// Posts in 'index.html'
var homePosts = [
    postBlackbraid,
    postSerotonin,
    postFavGoregrind
]

// Posts in '2024/all.html'
var all2024Posts = [
    postBlackbraid,
    postSerotonin,
    postFavGoregrind,
    postFavAlbums
]

// Posts in 'black.html':
var blackMetal = [
    postBlackbraid,
    postFavAlbums
]

// Posts in 'speed.html'
var speedMetal = [
    postFavAlbums
]

// Posts in 'goregrind.html'
var goregrind = [
    postSerotonin,
    postFavGoregrind,
    postFavAlbums
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

if (url.includes("index.html") || url == "https://ludovic-estival.github.io") {
    posts = homePosts;
}

if (url.includes("black.html")) {
    posts = blackMetal;
}

if (url.includes("speed.html")) {
    posts = speedMetal;
}

if (url.includes("goregrind.html")) {
    posts = goregrind;
}

for (let i = 0; i < posts.length; i++) {
    zoneId = ids[i];
    postContent = posts[i];
    document.getElementById(zoneId).innerHTML += postContent;
}