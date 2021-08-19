//Obtener youtubeID de URL
function youtubeId(url) {
    let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    let match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
}

//Cargar logica de plugin según los datos proporcionados
function loadPlugin(plugin) {
    const ploptions = {
        youtubevideo: () => {
            let myvalue = youtubeId(plugin.value);
            document.querySelector('.field--name-field-json-valores').innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${myvalue}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        },
        youtubeimg: () => {
            let myvalue = youtubeId(plugin.value);
            document.querySelector('.field--name-field-json-valores').innerHTML = `<img src="https://img.youtube.com/vi/${myvalue}/hqdefault.jpg">`;
        }
    };

    return ploptions[plugin.plugin];
}

window.addEventListener('load', e => {

    //Cargamos JSON con datos del plugin desde el HTML
    let myfield = document.querySelector('.field--name-field-json-valores .field__item').innerHTML;
    myfield = JSON.parse(myfield);

    //Cargamos Plugin segun los valores
    let actualPlugin = loadPlugin(myfield);
    actualPlugin();

});
