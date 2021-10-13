var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');

convertBtn.addEventListener('click', () => {

    console.log(`URL: ${URLinput.value}`);
    
    if (URLinput.value.includes("://youtu.be") || URLinput.value.includes("://www.youtube.com") || URLinput.value.includes("://youtube.com")){
        yturl(URLinput.value);
    } else {
        alert('WRONG URL!')
    }
});

function yturl(URL) {
    window.location.href = `https://writhingminorcones.krishmikaabhish.repl.co/download?URL=${URL}`;
}
