function youtubeId(url) {
    let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    let match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
}

//https://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg

window.addEventListener('load', e=>{
    let myvalue = document.querySelector('.field--name-field-json-valores .field__item').innerHTML;

    myvalue = youtubeId(myvalue);

    document.querySelector('.field--name-field-json-valores').innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${myvalue}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

});
