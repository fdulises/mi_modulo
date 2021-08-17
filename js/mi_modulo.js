const ploptions = {
    Mensaje: {
        "id": "youtubevideo",
        "description": "Inserte URL de video de youtube para generar video",
        "type": "textarea",
        "required": true
    },
    Interruptor: {
        "id": "youtubeimg",
        "description": "Inserte URL de video de youtube para generar imagen",
        "type": "textarea",
        "required": true
    }
};

function pluginFieldFactory({plugin, value}){
    //Seleccionamos el contenedor del formulario
    let myform = document.querySelector('#node-paso-asistente-edit-form .layout-region-node-main');

    let mymensaje = `
    <div class="js-form-item form-item js-form-type-textarea form-type-textarea">
        <label for="myplugin_field">${plugin.description}</label>
        <div class="form-textarea-wrapper">
        <textarea class="js-text-full text-full form-textarea resize-vertical" id="myplugin_field" rows="5" cols="60" required>${value}</textarea>
        </div>
    </div>
    `;

    let div = document.createElement('div');
    div.id = 'mymensaje_cont';
    div.innerHTML = mymensaje;

    myform.appendChild(div);

    //Detectamos edición de myplugin_field
    document.querySelector('#myplugin_field').addEventListener('change', e => {
        document.querySelector('#edit-field-json-valores-0-value').value = JSON.stringify({ value: e.target.value, plugin: plugin.id  });
    });

    return div;
}

//Cargar datos de plugin
function pluginLoad(nombre){
    return ploptions[nombre] || ploptions.Mensaje;
}

window.addEventListener('load', ()=>{
    let edit_field_plugin = document.querySelector('#edit-field-plugin');
    let edit_field_configuracion = document.querySelector('#edit-field-json-configuracion-0-value');
    let edit_field_valores = document.querySelector('#edit-field-json-valores-0-value');
    
    //Obtenemos las propiedades del plugin seleccionado
    let plugin_selected = pluginLoad(edit_field_plugin.options[edit_field_plugin.options.selectedIndex].text);
    let plugin_values = JSON.parse(edit_field_valores.value);

    //Actualizamos datos por los del nuevo plugin
    edit_field_configuracion.value = JSON.stringify(plugin_selected);

    //Construimos e inyectamos campo personalizado
    pluginFieldFactory({
        plugin: plugin_selected,
        value: plugin_values.value
    });

    //Efectuamos cambio de componente al cambiar valor de select
    edit_field_plugin.addEventListener('change', e => {
        
        //Obtenemos las propiedades del plugin seleccionado
        let plugin_selected = pluginLoad(edit_field_plugin.options[edit_field_plugin.options.selectedIndex].text);
        let plugin_values = JSON.parse(edit_field_valores.value);

        //Actualizamos datos por los del nuevo plugin
        edit_field_configuracion.value = JSON.stringify(plugin_selected);

        //Detectamos edición de myplugin_field
        edit_field_valores.value = JSON.stringify({ value: document.querySelector('#myplugin_field').value, plugin: plugin_selected.id });

        //Destruimos componente anterior
        document.querySelector('#mymensaje_cont').remove();

        //Construimos e inyectamos campo personalizado
        pluginFieldFactory({
            plugin: plugin_selected,
            value: plugin_values.value
        });

    });

});