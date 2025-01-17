/* --- CONFIG  --- */

// Commands allowed

const main_commands = ["ls", "cd", "clear", "help", "cat",]
const options = [
    "ls -l", "cd cv/", "cd cv", "cd projects/", "cd projects", 
    "cd ..", "cd ../cv", "cd ../cv/", "cd ../projects", 
    "cd ../projects/", "cat aboutme", "cat experiences", "cat skills", "cat education"
];

// Directories content

const home_directories = [
    "<p class='blue'>cv</p>", 
    "<p class='blue'>projects</p>"
];
const home_files = ["aboutme"];
const home_files_details = [
    "<p>-rwxr-xr-x l_estival public 40 Jan 17 09:42 <span>aboutme</span></p>",
    "<p>drwxr-xr-x l_estival public 40 Jan 17 09:42 <span class='blue'>cv</span></p>",
    "<p>drwxr-xr-x l_estival public 40 Jan 17 09:42 <span class='blue'>projects</span></p>"
];

const cv_directories = [];
const cv_files = ["education", "experiences", "skills"];
const cv_files_details = [
    "<p>-rwxr-xr-x l_estival public 40 Jan 17 09:42 <span>education</span></p>",
    "<p>-rwxr-xr-x l_estival public 40 Jan 17 09:42 <span>experiences</span></p>",
    "<p>-rwxr-xr-x l_estival public 40 Jan 17 09:42 <span>skills</span></p>"
];

const projects_directories = [];
const projects_files = [];
const projects_files_details = [
    ""
];

const help_result = ["cat [file]", "cd [dir]", "clear", "help", "ls [option]"];

// Files content

const aboutme_content = [
    "<br/>",
    "<p>Bienvenue sur mon site !</p>",
    "<p>Ce que j'aime le plus dans l'informatique c'est créer des choses, comme vous pouvez le voir ici !</p>",
    "<p>J'adore lire des livres, surtout de la science-fiction, fantasy et des histoires dystopiques.</p>",
    "<p>J'écris aussi des histoires, même si la plupart du temps elles restent juste au niveau d'idées.</p>",
    "<p>J'écoute beaucoup de musique, surtout du metal. J'aime bien dessiner aussi.</p>",
    "<p>Je fais assez souvent du vélo.</p>"
];

const education_content = [
    "<br/>",
    "<p>- Diplôme d'ingénieur en informatique, école d'ingénieurs 3iL à Rodez, octobre 2024 à septembre 2027, les 3 années en alternance</p>",
    "<p>En 3ème année, j'ai étudié X mois dans tel pays...</p>",
    "<p>- BUT Informatique, IUT de Blagnac, septembre 2021 à juin 2024, la dernière année en alternance</p>",
    "<p>- Bac STI2D option SIN (mention bien), lycée Louis Rascol à Albi, 2021</p>"
];

const experiences_content = [
    "<br/>",
    "<p>- Alternance chez Infotel Conseil à Blagnac, septembre 2023 à septembre 2027</p>",
    "<p>Mission de fin d'étude : ... (X mois).</p>",
    "<p>Missions diverses autour de z/OS (2èmes et 3èmes années).</p>",
    "<p>Développement, en Python et Perl, d'un outil d'automatisation de tests manuels pour un mainframe z/OS (1ere année).</p>",
    "<br/>",
    "<p>- Stage à IMT Mines Albi, avril à juin 2023</p>",
    "<p>Développement en binôme d'un site web en PHP et d'une base de données MySQL.</p>"
];

const skills_content = [
    "<br/>",
    "<p>Langages : Python</p>",
    "<p>Logiciels : Git, Jira</p>",
    "<p>Méthodes : UML, agiles</p>",
    "<p>Langues : anglais (TOEIC 930 points)</p>",
    "<p>Soft skills : autonomie, organisation, sérieux</p>"
];

/* --- END OF CONFIG  --- */

var body = document.getElementById("body");
var path = null;
createEnv();

/**
 * Create a clean environment with a single prompt.
 */
function createEnv() {
    path = "/";
    body.innerHTML = "";
    addPrompt();
}

/**
 * Add a prompt to the page.
 */
function addPrompt() {
    // If a prompt already exists
    var old_prompt = document.getElementById("prompt");

    if(old_prompt) {
        old_prompt.removeAttribute("id");
        old_prompt.disabled = true;

        var old_label = document.getElementById("prompt-label");
        old_label.removeAttribute("id");
    }

    var content =
    `<label for="prompt" id="prompt-label"><span class='blue'>guest</span>:<span class='green'>${path}</span>$</label>
    <input type="text" name="prompt" id="prompt">
    `;
    body.innerHTML += content;

    var new_prompt = document.getElementById("prompt");
    new_prompt.addEventListener("keydown", processCommand);
    new_prompt.focus();
}

/**
 * Simulate the processing of a command.
 * @param {KeyboardEvent} event 
 */
function processCommand(event) {
    if(event.key === "Enter") {
        var prompt = document.getElementById("prompt");
        var cmd = prompt.value;

        var main_cmd = cmd.split(" ")[0];

        if (main_commands.includes(main_cmd))  {

            // Preserve the command
            var label = document.getElementById("prompt-label");
            label.innerHTML = label.innerHTML + " " + prompt.value;

            if(cmd.startsWith("ls")) {
                lsCommand(cmd);
            }

            if(cmd.startsWith("cd")) {
                cdCommand(cmd);
            }

            if(cmd.startsWith("clear")) {
                clearCommand(cmd);
            }

            if(cmd.startsWith("help")) {
                helpCommand(cmd);
            }

            if(cmd.startsWith("cat")) {
                catCommand(cmd);
            }

            
        } else {
            var result = "<p>" + cmd + ": command not found</p>";
            body.innerHTML += result;
            addPrompt();
        }
    }
}

/**
 * Simulate the cd command.
 * @param {String} cmd cd command with or without options
 */
function cdCommand(cmd) {
    if(!optionsAreCorrects(cmd)) {
        body.innerHTML += "<p>cd: invalid option</p>";
        addPrompt();
    } else {
        if(path === "/") {
            // From home directory

            if(cmd === "cd cv/" || cmd === "cd cv") {
                path = "/cv/";
            }

            if(cmd === "cd projects/" || cmd === "cd projects") {
                path = "/projects/";
            }

            body.innerHTML += "<br/>";
            addPrompt();
        } else {
            // From another directory

            if(cmd === "cd ..") {
                path = "/";
            }

            if(cmd === "cd ../cv" || cmd === "cd ../cv/") {
                path = "/cv/";
            }

            if(cmd === "cd ../projects" || cmd === "cd ../projects/") {
                path = "/projects/";
            }

            body.innerHTML += "<br/>";
            addPrompt();
    } 
    }

    
}

/**
 * Simulate the help command.
 * @param {String} cmd help command with or without options
 */
function helpCommand(cmd) {
    var result = null;

    if(!optionsAreCorrects(cmd)) {
        result = "<p>help: invalid option</p>";
    } else {
        result = "<br/>";
        for (const element of help_result) {
            result = result + "<p>" + element + "</p>";
        }
    }
    
    body.innerHTML += result;
    addPrompt();
}

/**
 * Simulate the clear command.
 * @param {String} cmd clear command with or without options
 */
function clearCommand(cmd) {
    if(!optionsAreCorrects(cmd)) {
        body.innerHTML += "<p>clear: invalid option</p>";
        addPrompt();
    } else {
        body.innerHTML = "";
        addPrompt(); 
    }
}

/**
 * Simulate the ls command.
 * @param {String} cmd ls command with or without options
 */
function lsCommand(cmd) {
    var result = null;

    if(!optionsAreCorrects(cmd)) {
        result = "<p>ls: invalid option</p>";
    } else {
        var home_list = "<br/>";
        var cv_list = "<br/>";
        var projects_list = "<br/>";

        if(cmd === "ls -l") {
            for(const element of home_files_details) {
                home_list += element;
            }

            for(const element of cv_files_details) {
                cv_list += element;
            }

            for(const element of projects_files_details) {
                projects_list += element;
            }
        } else {
            // home directory
            var merged_array = home_files.concat(home_directories);

            for(const element of merged_array) {
                home_list = home_list + "<p>" +  element + "</p>";
            }

            // cv directory
            merged_array = cv_files.concat(cv_directories);

            for(const element of merged_array) {
                cv_list = cv_list + "<p>" + element + "</p>";
            }

            // projects directory
            merged_array = projects_files.concat(projects_directories);

            for(const element of merged_array) {
                projects_list = projects_list + "<p>" + element + "</p>";
            }
        }

        if(path === "/") {
            result = home_list;        
        }

        if(path === "/cv/") {
            result = cv_list;
        }

        if(path === "/projects/") {
            result = projects_list;
        }
    }

    body.innerHTML += result;
    addPrompt();
}

/**
 * Simulate the cat command.
 * @param {String} cmd cat command with or without options 
 */
function catCommand(cmd) {
    var result = null;
    var options = cmd.split(" ")[1];

    if(!optionsAreCorrects(cmd)) {
        result = "<p>cat: invalid option</p>";
    } else {
        result = "<p>cat: No such file</p>";

        if(home_files.includes(options) && path === "/" ){
            if(options === "aboutme") {
                result = "";
                for(const line of aboutme_content) {
                    result += line;
                }
            }
        }

        if(cv_files.includes(options) && path === "/cv/" ){
            if(options === "experiences") {
                result = "";
                for(const line of experiences_content) {
                    result += line;
                }
            }

            if(options === "skills") {
                result = "";
                for(const line of skills_content) {
                    result += line;
                }
            }

            if(options === "education") {
                result = "";
                for(const line of education_content) {
                    result += line;
                }
            }
        }

        if(projects_files.includes(options) && path === "/projects/" ){

        }
    }

    body.innerHTML += result;
    addPrompt();
}

/**
 * Determine if options are corrects for a given command.
 * @param {String} cmd command with options
 * @returns true or false
 */
function optionsAreCorrects(cmd) {
    if(!main_commands.includes(cmd) && !options.includes(cmd)) {
        return false;
    }
    return true;
}
