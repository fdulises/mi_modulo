/*
{
    "id": "message_field",
    "description": "Establezca el texto del mensaje de bienvenida",
    "type": "textarea",
    "min_length": 1,
    "max_length": 10,
    "required": true
}

*/

function pluginFieldFactory({type='textarea', value=''}){
    //Seleccionamos el contenedor del formulario
    let myform = document.querySelector('#node-paso-asistente-edit-form .layout-region-node-main');

    let mymensaje = `
    <div class="js-form-item form-item js-form-type-textarea form-type-textarea">
        <label for="message_field">Mensaje</label>
        <div class="form-textarea-wrapper">
        <textarea class="js-text-full text-full form-textarea resize-vertical" id="message_field" rows="5" cols="60">${value}</textarea>
        </div>
    </div>
    `;

    let div = document.createElement('div');
    div.innerHTML = mymensaje;

    myform.appendChild(div);

    return div;
}

window.addEventListener('load', ()=>{
    let edit_field_plugin = document.querySelector('#edit-field-plugin');
    let edit_field_configuracion = document.querySelector('#edit-field-json-configuracion-0-value');
    let edit_field_valores = document.querySelector('#edit-field-json-valores-0-value');

    //Obtenemos el Plugin Seleccionado por defecto
    let plugin_selected = edit_field_plugin.options[edit_field_plugin.options.selectedIndex].text;
    
    //Obtenemos las propiedades del plugin
    let plugin_properties = JSON.parse(edit_field_configuracion.value);

    //Obtenemos los valores del plugin
    let plugin_values = JSON.parse(edit_field_valores.value);

    JSON.parse(document.querySelector('#edit-field-json-valores-0-value').value)

    edit_field_plugin.addEventListener('change', e => {
        plugin_selected = edit_field_plugin.options[edit_field_plugin.options.selectedIndex].text;
        console.log('Seleccionando: '+plugin_selected);
    });

    //Construimos e inyectamos campo personalizado
    let mymensajediv = pluginFieldFactory({
        type: plugin_properties.type,
        value: plugin_values.value
    });

    //Detectamos edición de message_field
    document.querySelector('#message_field').addEventListener('change', e => {
        edit_field_valores.value = JSON.stringify({ value: e.target.value });
        console.log(edit_field_valores.value);
    });
    
    //alert(edit_field_plugin.options[edit_field_plugin.options.selectedIndex].text);
});