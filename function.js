var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');

convertBtn.addEventListener('click', () => {

    console.log(`URL: ${URLinput.value}`);
    
    if (URLinput.value.includes("://youtu.be") || URLinput.value.includes("://www.youtube.com") || URLinput.value.includes("://youtube.com")){
        yturl(URLinput.value);
    } else if (URLinput.value.includes("://www.instagram") || URLinput.value.includes("://www.instagram.com")) {
        igvid(URLinput.value);
    } else {
        alert("error");
    }
});

function yturl(URL) {
    window.location.href = `https://writhingminorcones.krishmikaabhish.repl.co/download?URL=${URL}`;
}

function igvid(URL) {
    /* window.location.href = `https://writhingminorcones.krishmikaabhish.repl.co/igvid?URL=${URL}`; */
    alert ("insta video downloader on working!!")
}
