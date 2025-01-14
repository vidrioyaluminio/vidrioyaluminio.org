// mkDomer ----'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'
// mkDomer /              ##### ##
// mkDomer #/            /#####  /##
// mkDomer ##          //    /  / ###
// mkDomer ##         /     /  /   ###
// mkDomer ##              /  /     ###
// mkDomer ### /### /###    ##  /##        ## ##      ##    /###    ### /### /###       /##    ###  /###
// mkDomer ##/ ###/ /##  / ## / ###       ## ##      ##   / ###  /  ##/ ###/ /##  /   / ###    ###/ #### /
// mkDomer ##  ###/ ###/  ##/   /        ## ##      ##  /   ###/    ##  ###/ ###/   /   ###    ##   ###/
// mkDomer ##   ##   ##   ##   /         ## ##      ## ##    ##     ##   ##   ##   ##    ###   ##
// mkDomer ##   ##   ##   ##  /          ## ##      ## ##    ##     ##   ##   ##   ########    ##
// mkDomer ##   ##   ##   ## ##          #  ##      ## ##    ##     ##   ##   ##   #######     ##
// mkDomer ##   ##   ##   ######            /       /  ##    ##     ##   ##   ##   ##          ##
// mkDomer ##   ##   ##   ##  ###      /###/       /   ##    ##     ##   ##   ##   ####    /   ##
// mkDomer ###  ###  ###  ##   ### /  /   ########/     ######      ###  ###  ###   ######/    ###
// mkDomer ###  ###  ###  ##   ##/  /       ####        ####        ###  ###  ###   #####      ###
// mkDomer            #
// mkDomer             ##

// TODO DIVS ///////////////////////////////////

function div(c,i,inner) { // ! CREAR UNA ETIQUETA DIV (clase, id, inner)
    c?true:c="";i?true:i="";inner?true:inner="";
    let div = document.createElement("div")
    c=""?true:div.setAttribute("class",c)
    i=""?true:div.setAttribute("id",i)
    inner=""?true:div.innerHTML=inner

    return div
}



function mkObj(n,obj_class,obj_id,inner) {  // ! CREAR UN OBJETO DIV (nodo, clase, id, inner)
    n?true:n="";obj_class?true:obj_class="";obj_id?true:obj_id="";inner?true:inner="";

    let obj_temp=div(obj_class,obj_id,inner)
    n.appendChild(obj_temp)

    return obj_temp
}

// TODO IMAGES ///////////////////////////////////

function img(c,i,src) { // ! CREAR UNA ETIQUETA IMG (clase, id, inner)
    c?true:c="";i?true:i="";src?true:src="";

    let img = document.createElement("img")
    c=""?true:img.setAttribute("class",c)
    i==""?true:img.setAttribute("id",i)
    src=""?true:img.setAttribute("src",src)

    return img
}

function mkObjImg(n,img_class,img_id,src_) { // ! CREAR UN OBJETO IMG (nodo, clase, id, recurso imagen)
    n?true:n="";img_class?true:img_class="";img_id?true:img_id="";src_?true:src_="";

    img_class?cont_img_class="cont_"+img_class:cont_img_class="";img_id?cont_img_id="cont_"+img_id:cont_img_id="";


    let obj_temp=div(cont_img_class,cont_img_id)
    n.appendChild(obj_temp)

    img_class?img_class=img_class:img_class=""
    img_id?img_id=img_id:img_id=""

    let img_temp = img(img_class,img_id,src_)
    obj_temp.appendChild(img_temp)

    return obj_temp
}
// gest [ apartado para agregar texto "...parrafos" ]
    // ACTUALIZADO [NO] : IN (BIBLIOTECAPRUBAS.JS)

    // nota --> 
function verImg(nodo,clase,id){ // ! VIZUALIZAR UNA IMAGEN EN UNA PESTAÑA ()
    nodo=nodo||"body";clase=clase||"";id=id||"";

    let temp_img = event.target

    let body = document.body

    nodo.style.position="relative" // ! ASIGNAR PROPIEDAD RELATIVE AL NODO PARA PERMITIR UBICACION ABSOLUTA DE LA IMAGEN

        // ! SI EXISTE LA VENTANA CON LA IMGEN SE ELIMINA PARA VOLVER A CREAR
    let _hipercapa = document.getElementById(id+"_hipercapa")
    let _hipercapa_ = document.querySelector("."+clase+"_hipercapa")
    if (_hipercapa) {_hipercapa.remove()}
    if (_hipercapa_) {_hipercapa_.remove()}

    // ? CREACION DE HIPERCAPA
    let mk_hipercapa_img = mkObj(nodo,clase+"_hipercapa",id+"_hipercapa");mk_hipercapa_img.style.position="absolute";
        let mk_ventana_img = mkObj(mk_hipercapa_img,clase) //document.createElement("div")
            let mk_header_ventana_img = mkObj(mk_ventana_img,clase+"_header",id+"_header")

                    // ? INNER TITULO
                let inner_titulo_ventana = temp_img.getAttribute("src")/*.split("/").pop()*/
            let mk_titulo_hvi = mkObj(mk_header_ventana_img,clase+"titulo_header",id+"_titulo_header",inner_titulo_ventana) /// objeto del eveneto -> atributo directorio -> formato arreglo por directorios -> ultimo elemto

            let mk_btn_cerrar_ventana_img = mkObj(mk_header_ventana_img,"btn_cerrar_"+clase,"btn_cerrar_"+id,"X")
                mk_btn_cerrar_ventana_img.style.cursor="pointer"
    
                mk_btn_cerrar_ventana_img.addEventListener("click",function() {
                    history.replaceState({},document.title,window.location.href.replace(/#.*$/,"")) // ! MODIFICAR LINK DE NAVEGADOR
                    mk_hipercapa_img.remove()
                })

        let mk_cuerpo_ventana_img = mkObj(mk_ventana_img,clase+"_cuerpo_ventana_img")
                
                let atributo_img = temp_img.getAttribute("src")
            let mk_img_hipercap = mkObjImg(mk_cuerpo_ventana_img,"img_"+clase,"img_"+id,atributo_img)
            history.pushState({},"",`#${inner_titulo_ventana}`) // ! MODIFICAR LINK DE NAVEGADOR
}

// TODO  INPUTS ///////////////////////////////////

function input(c,i,p) { // ! CREAR UNA ETIQUETA INPUT (clase, id, placeholder)
    c?true:c="";i?true:i="";p?true:p="";
    
    let input = document.createElement("input")

    c=""?true:input.setAttribute("class",c)
    i=""?true:input.setAttribute("id",i)
    p=""?true:input.setAttribute("placeholder",p)
    return input
}

function textarea(c,i,p) { // ! CREAR UNA ETIQUETA TEXTAREA (clase, id, placeholder)
    c?true:c="";i?true:i="";p?true:p="";

    let textarea = document.createElement("textarea")
    c=""?true:textarea.setAttribute("class",c)
    i=""?true:textarea.setAttribute("id",i)
    p=""?true:textarea.setAttribute("placeholder",p)

    return textarea
}

function mkObjDatalist(n,c,i,...elementos){ // compatibilidad con objetos
    n?n:""
    c?c:""
    i?i:""
    elementos?elementos:""

    // let obj_temp = mkObj(n,"cont_"+c,"cont_"+i)

    let input_datalist = n.querySelector("input")
    input_datalist.setAttribute("list",i)

    let data_list_temp = document.createElement("datalist")
    data_list_temp.setAttribute("class",c)
    data_list_temp.setAttribute("id",i)

    for (let j = 0; j < elementos.length; j++) {
        let option_temp = document.createElement("option")
        option_temp.setAttribute("value",elementos[j])
        data_list_temp.appendChild(option_temp)
    }

    n.appendChild(data_list_temp)
    return data_list_temp
}


// ACTUALIZADO [SI] : DE [VALIDACION A9/controlador/biblioteca.js]
    // MODIFICACIONES [parametros -> fuente, tamaño, color del texto]
function mkObjInput(nodo,c,i,type,t,p,f,s,color){ // ! CREAR UN OBJETO INPUT (clase, id, placeholder, type, titulo_obj, placeholder, fuente, tamaño, color del texto)
    nodo?true:nodo="";c?true:c="";i?true:i="";t?true:t="";p?true:p="";f?true:f="";s?true:s="";color?true:color="";
    c?cont_clase="cont_input_"+c:cont_clase="";i?cont_id="cont_input_"+i:cont_id="";c?cont_titulo_clase="cont_tittle_"+c:cont_titulo_clase="";
    i?cont_titulo_id="cont_tittle_"+i:cont_titulo_id="";c?titulo_clase="tittle_"+c:titulo_clase="";i?titulo_id="tittle_"+i:titulo_id="";
    c?nodo_cont_input_class="nodo_cont_input_"+c:nodo_cont_input_class="";i?nodo_cont_input_id="nodo_cont_input_"+i:nodo_cont_input_id="";
    c?cont_input_clase="cont_in_"+c:cont_input_clase="";i?cont_input_id="cont_in_"+i:cont_input_id="";c?input_clase="in_"+c:input_clase="";
    i?input_id="in_"+i:input_id="";input_placeholder=p;

    let obj_temp = mkObj(nodo,c,i)

    // ? [STYLER]
        
        let cont_temp = mkObj(obj_temp,cont_clase,cont_id)
        // ? [STYLER]

            let cont_titulo = mkObj(cont_temp,cont_titulo_clase,cont_titulo_id)
                let titulo_temp = mkText(cont_titulo,titulo_clase,titulo_id,t)

            let nodo_cont_input = mkObj(cont_temp,nodo_cont_input_class,nodo_cont_input_id)
                let cont_input = mkObj(nodo_cont_input,cont_input_clase,cont_input_id)

                    let input_temp = input(input_clase,input_id,p)
                    // ? [STYLER]

                    input_temp.setAttribute("type",type)
                    cont_input.appendChild(input_temp)

    return obj_temp
}

function mkObjInputPassword(nodo,c,i,t,p,url){// ! CREAR UN OBJETO INPUT (clase, id, placeholder, titulo, placeholder, directorio_img)
    nodo?true:nodo="";c?true:c="";i?true:i="";t?true:t="";p?true:p="";
    c?cont_clase="cont_input_"+c:cont_clase="";i?cont_id="cont_input_"+i:cont_id="";c?cont_titulo_clase="cont_tittle_"+c:cont_titulo_clase="";
    i?cont_titulo_id="cont_tittle_"+i:cont_titulo_id="";c?titulo_clase="tittle_"+c:titulo_clase="";i?titulo_id="tittle_"+i:titulo_id="";
    c?nodo_cont_input_class="nodo_cont_input_"+c:nodo_cont_input_class="";i?nodo_cont_input_id="nodo_cont_input_"+i:nodo_cont_input_id="";
    c?cont_input_clase="cont_in_"+c:cont_input_clase="";i?cont_input_id="cont_in_"+i:cont_input_id="";c?input_clase="in_"+c:input_clase="";
    i?input_id="in_"+i:input_id="";c?img_ver_pass_clase="ver_pass_"+c:img_ver_pass_clase="";i?img_ver_pass_id="ver_pass_"+i:img_ver_pass_id="";
    c?ver_pass_clase="ver_pass_"+c:ver_pass_clase="";i?ver_pass_id="ver_pass_"+i:ver_pass_id="";

    input_placeholder=p

    let obj_temp = div(c,i)
    nodo.appendChild(obj_temp)

        let cont_temp = div(cont_clase,cont_id)
        obj_temp.appendChild(cont_temp)

            let cont_titulo = div(cont_titulo_clase,cont_titulo_id)
            cont_temp.appendChild(cont_titulo)

                let titulo_temp = mkText(cont_titulo,titulo_clase,titulo_id,t)

                //
            let obj_cont_input = div(nodo_cont_input_class,nodo_cont_input_id)
            cont_temp.appendChild(obj_cont_input)
                //

            let cont_input = div(cont_input_clase,cont_input_id)
            obj_cont_input.appendChild(cont_input)

                let input_temp = input(input_clase,input_id,p)
                input_temp.style.padding="6px"
                input_temp.setAttribute("type","password")
                cont_input.appendChild(input_temp)

            let ver_pass = div(ver_pass_clase,ver_pass_id)
            obj_cont_input.appendChild(ver_pass)

                let img_ver_pass = mkObjImg(ver_pass,"img_"+img_ver_pass_clase,"img_"+img_ver_pass_id,url)

                toggleVerContraseña(img_ver_pass)

                function toggleVerContraseña(x) {
                    let obj_temp = document.getElementById(x.getAttribute("id"))

                    obj_temp.addEventListener("mouseup",function () {
                        let style_temp = window.getComputedStyle(obj_temp).backgroundColor
                        console.log(style_temp)
                        if (style_temp==="rgb(255, 255, 255)") {
                            obj_temp.style.background="var(--colorButtonToggle)"
                        } else {
                            obj_temp.style.background="white"
                        }
                    })

                }

                ver_pass.addEventListener("mouseup",function() {
                    if (input_temp.type==="password"){
                        input_temp.type = "text"
                    } else{
                        input_temp.type = "password"
                    }
                })

    return obj_temp
}

function mkObjTextarea(nodo,c,i,t,p){ // ! CREAR UN OBJETO TEXTAREA (clase, id, titulo_obj, placeholder)
    nodo?true:nodo="";c?true:c="";i?true:i="";t?true:t="";p?true:p="";c?cont_clase="cont_textarea_"+c:cont_clase="";
    i?cont_id="cont_textarea_"+i:cont_id="";c?cont_titulo_clase="cont_tittle_"+c:cont_titulo_clase="";
    i?cont_titulo_id="cont_tittle_"+i:cont_titulo_id="";c?titulo_clase="tittle_"+c:titulo_clase="";
    i?titulo_id="tittle_"+i:titulo_id="";c?nodo_cont_textarea_class="nodo_cont_textarea_"+c:nodo_cont_textarea_class="";
    i?nodo_cont_textarea_id="nodo_cont_textarea_"+i:nodo_cont_textarea_id="";c?cont_textarea_clase="cont_in_"+c:cont_textarea_clase="";
    i?cont_textarea_id="cont_in_"+i:cont_textarea_id="";c?textarea_clase="in_"+c:textarea_clase="";i?textarea_id="in_"+i:textarea_id="";

    textarea_placeholder=p

    let obj_temp = div(c,i)
    nodo.appendChild(obj_temp)
        let cont_temp = div(cont_clase,cont_id)
        obj_temp.appendChild(cont_temp)
            let cont_titulo = div(cont_titulo_clase,cont_titulo_id)
            cont_temp.appendChild(cont_titulo)
                let titulo_temp = mkText(cont_titulo,titulo_clase,titulo_id,t)

            let nodo_cont_textarea = div(nodo_cont_textarea_class,nodo_cont_textarea_id)
            cont_temp.appendChild(nodo_cont_textarea)
                let cont_textarea = div(cont_textarea_clase,cont_textarea_id)
                nodo_cont_textarea.appendChild(cont_textarea)
                    let textarea_temp = textarea(textarea_clase,textarea_id,p)
                    cont_textarea.appendChild(textarea_temp)

    return obj_temp
}

// TODO  BUTTON ///////////////////////////////////

function button(c,i,inner) { // ! CREAR UNA ETIQUETA BUTTON (clase, id, inner)
    c?true:c="";i?true:i="";inner?true:inner="";

    let button = document.createElement("button")
    c=""?true:button.setAttribute("class",c)
    i=""?true:button.setAttribute("id",i)
    inner=""?true:button.innerHTML=inner

    return button
}

function mkObjButton(nodo,c,i,inner,event) { // ! CREAR UN OBJ BUTTON (nodo, clase, id, inner)
    nodo?true:nodo="";c?true:c="";i?true:i="";inner?true:inner="";

    let btn_temp = button(c,i,inner)

    c=""?true:cont_btn_class="cont_"+c
    i=""?true:cont_btn_id="cont_"+i

    let obj_temp = div(cont_btn_class,cont_btn_id)



    /// ->
    nodo.appendChild(obj_temp)
        obj_temp.appendChild(btn_temp)

    return obj_temp
}

// TODO DISPLAY ///////////////////////////////////

function flex(f){ // ! DISPLAY FLEX
    f.style.display="flex"
    return f
}

function flexNone(f) { // ! DISPLAY NONE
    f.style.display="none"
    return f
}

// TODO INPUT ///////////////////////////////////

    // ACTUALIZADO DE BIBLIOTECA VALIDACION A9

                    // OPTIMIZACIONES:
                        // optimizaciones: [div() remplazados por mkObj()]

                            // MODIFICACIONES:
                                // modificaciones: [CAMBIAR NOMBRE DE "validarStr()" a "validarInputA9()"]

function validarInputA9(x,texto_aviso) { // ! (elemento_input,texto_aviso)

    let ex = /^[a-zA-Z0-9/s']+$/
    let nodo = x.parentNode
    let c = x.getAttribute("class")
    let i = x.getAttribute("id")

    if (document.getElementById("aviso_formulario_"+i)) {
        document.getElementById("aviso_formulario_"+i).remove()
    }

    if (x.value=="") {
        document.getElementById("aviso_formulario_"+i).remove()
    }

    if (!ex.test(x.value)) {
        let aviso_formulario = div("aviso_formulario_"+c,"aviso_formulario_"+i,texto_aviso)
        nodo.appendChild(aviso_formulario)
        x.style.border="none"
        x.style.borderBottom="solid 1px red"
    } else {
        x.style.border="solid 1px var(--colorBorderAviso)"
    }
}

// Actualizado: [SI] | Acutalizado de: [mkDomer/controlador/bibliotecaPruebas.js]
    // Modificaciones :
        // Modificaciones :
function vistaToggle(element) { // ! VERIFICAR LA VARIABLE DE ESTILO DISPLAY PARA INTERCAMBIAR ENTRE FLEX Y NONE
    console.log(window.getComputedStyle(element).display)
    let obj_temp = window.getComputedStyle(element).display
    if (obj_temp==="flex") {
        obj.style.display="none"
    } else {
        obj.style.display="flex"
    }

}

function checkAndDeleteId(x) {
    if (document.getElementById(x)) {
        document.getElementById(x).remove()
    }
}

// gest // //
// Actualizado: [NO] | Acutalizando en: [Sin subcarpeta de optimizacion]
function confirmarPass(x,y){ // ! AÑADIR DOS INPUTS, VALIDAR SI SON IGUALES Y MODIFICAR EL BORDE DE SUS NODOS
    let nodo_x = x.parentNode
    let nodo_y = y.parentNode


    if (x.value==y.value) { // gest
        checkAndDeleteId("aviso_formulario_contraseña")
        checkAndDeleteId("aviso_formulario_confirmar_contraseña")

        x.style.border="solid 1px #10101088" // GEST MODIFICAR COLOR A UNA VARIABLE CSS PERSONALIZADA PARA FACILITAR SU USO
        y.style.border="solid 1px #10101088" // GEST MODIFICAR COLOR A UNA VARIABLE CSS PERSONALIZADA PARA FACILITAR SU USO
    } else {
        checkAndDeleteId("aviso_formulario_contraseña")
        checkAndDeleteId("aviso_formulario_confirmar_contraseña")

        let aviso_x = div("aviso_formulario","aviso_formulario_contraseña","Las contraseñas no coinciden")
        nodo_x.appendChild(aviso_x)
        let aviso_y = div("aviso_formulario","aviso_formulario_confirmar_contraseña","Las contraseñas no coinciden")
        nodo_y.appendChild(aviso_y)

        x.style.border="none"
        x.style.borderBottom="solid 1px red" // GEST MODIFICAR COLOR A UNA VARIABLE CSS PERSONALIZADA PARA FACILITAR SU USO
        y.style.border="none"
        y.style.borderBottom="solid 1px red" // GEST MODIFICAR COLOR A UNA VARIABLE CSS PERSONALIZADA PARA FACILITAR SU USO
    }
}

// TODO TEXTO ////////////////////////

function mkText(n,c,i,inner) { // ! GENERAR EL CONTENIDO  [<div><p>  </p></div>] 
    n = n || ""
    c = c || ""
    i = i || ""
    inner = inner || ""

    c==""?c_c="":c_c="cont_"+c
    i==""?c_i="":c_i="cont_"+i

    let obj_temp = div(c_c,c_i)
    n.appendChild(obj_temp)

    let p_temp = document.createElement("p")
    p_temp.setAttribute("class",c)
    p_temp.setAttribute("id",i)
    p_temp.innerHTML=inner
    obj_temp.appendChild(p_temp)

    return obj_temp

}

function mkTextList(n,c,i,...inner) { // ! GENERAR EL CONTENIDO  [<div><p>  </p></div>] 
    n = n || ""
    c = c || ""
    i = i || ""
    inner = inner || ""

    c==""?c_c="":c_c="cont_"+c
    i==""?c_i="":c_i="cont_"+i

    let obj_temp = div(c_c,c_i)
    n.appendChild(obj_temp)

    let p_temp = document.createElement("p")
    p_temp.setAttribute("class",c)
    p_temp.setAttribute("id",i)
    for (let j = 0; j < inner.length; j++) {
        let element = inner[j];
        // ! console.log(element)
        let sub_text = mkText(obj_temp,"sub_text_"+c,"sub_text_"+i+"_"+j,element)
        // ! console.log(sub_text)
            
    }
    // p_temp.innerHTML=inner
    // obj_temp.appendChild(p_temp)

    return obj_temp

}

function placerMenu(btn,menu) {
    // console.log(btn)
    // console.log(menu)
    menu.style.display="none"
    let timer;
    btn.addEventListener("mouseenter", function(x) {
        menu.style.display = "flex"; // Mostrar el elemento "menu" con estilo flex
        clearTimeout(timer); // Limpiar el temporizador existente
        // Añadir un evento "mouseup" al documento
        document.addEventListener("mouseup", function(n) {
            if (!menu.contains(n.target)) {
                menu.style.display = "none"; // Ocultar "menu" si el clic no está dentro de él
            }
        });
    });

    menu.addEventListener("mouseenter", function(x) {
        menu.style.display = "flex"; // Mostrar el elemento "menu" con estilo flex
        clearTimeout(timer); // Limpiar el temporizador existente
        // Añadir un evento "mouseup" al documento
        document.addEventListener("mouseup", function(n) {
            if (!menu.contains(n.target)) {
                menu.style.display = "none"; // Ocultar "menu" si el clic no está dentro de él
            }
        });
    });

    // Añadir un evento "click" al elemento "btn"
    btn.addEventListener("click", function(x) {
        menu.style.display = "flex"; // Mostrar el elemento "menu" con estilo flex
        clearTimeout(timer); // Limpiar el temporizador existente
        // Añadir un evento "mouseup" al documento
        document.addEventListener("mouseup", function(n) {
            if (!menu.contains(n.target)) {
                menu.style.display = "none"; // Ocultar "menu" si el clic no está dentro de él
            }
        });
    });

    // Añadir un evento "mouseleave" al elemento "btn"
    btn.addEventListener("mouseleave", function(x) {
        // Establecer un temporizador para ocultar "menu" después de 1100 ms (1.1 segundos)
        timer = setTimeout(function() {
            menu.style.display = "none"; // Ocultar el elemento "menu"
        }, 1100);
    });

    menu.addEventListener("mouseleave", function(x) {
        // Establecer un temporizador para ocultar "menu" después de 1100 ms (1.1 segundos)
        timer = setTimeout(function() {
            menu.style.display = "none"; // Ocultar el elemento "menu"
        }, 1100);
    });
}

function insertSpan(elemento, textoCoincidente, color) {
    // Obtener el contenido del elemento <p>
    var contenido = elemento.innerHTML;
    
    // Crear una expresión regular para buscar el texto coincidente de manera global e insensible a mayúsculas/minúsculas
    var regex = new RegExp(textoCoincidente, 'gi');
    
    // Reemplazar el texto coincidente con el span resaltado
    var nuevoContenido = contenido.replace(regex, function(match) {
        return '<span class="resaltado" style="color: ' + color + ';font-weight: bold;">' + match + '</span>';
    });
    
    // Establecer el nuevo contenido en el elemento <p>
    elemento.innerHTML = nuevoContenido;
}

function mkCarrusel(nodo,clase,id,...url_imagenes) {
    nodo = nodo || "";
    clase = clase || "";
    id = id || "";

    let carrusel = mkObj(nodo,clase,id)
    carrusel.style.flexDirection="column"
    carrusel.style.position="relative"

        let contenedor_imagenes = mkObj(carrusel,"contenedor_imagenes_"+clase,"contenedor_imagenes_"+id)
            url_imagenes.forEach(url => {
                let formato = url.split(".")[1]
                console.log(formato)
                if (formato==="png"||formato==="svg") {
                    let img = mkObjImg(contenedor_imagenes,"img_carrusel_"+clase,"img_carrusel_"+id,url)
                    console.log(img)
                }
                if (formato==="mp4") {
                    let video = mkObjVideoLoop(contenedor_imagenes,"img_carrusel_"+clase,"img_carrusel_"+id,url)
                    
                }
            });

        let contenedor_controles = mkObj(carrusel,"contenedor_controles_"+clase,"contenedor_controles_"+id)
        contenedor_controles.style.position="absolute"

            let btn_control_carrusel_anterior = mkObjButton(contenedor_controles,"btn_control_carrusel_"+clase,"btn_control_carrusel_anterior_"+id,"<")
            let btn_control_carrusel_siguiente = mkObjButton(contenedor_controles,"btn_control_carrusel_"+clase,"btn_control_carrusel_siguiente_"+id,">")
            btn_control_carrusel_siguiente.style.justifyContent="end"

            btn_control_carrusel_anterior.addEventListener('click', () => cambiarImagen(-1));
            btn_control_carrusel_siguiente.addEventListener('click', () => cambiarImagen(1));

    let imagenActual = 1;
    let numero_imagenes = url_imagenes.length

    function cambiarImagen(direccion) {
        imagenActual += direccion;

        // Ajustar la imagen actual si se llega al límite
        if (imagenActual > numero_imagenes) {
            imagenActual = 1;
        } else if (imagenActual < 1) {
            imagenActual = numero_imagenes;
        }

        // Calcular la posición de la transformación
        let posicionTransform = -100 * (imagenActual - 1);
        contenedor_imagenes.style.transform = `translateX(${posicionTransform}%)`;
    }
}

function displayScroll(parentContainer) {
    var elements = Array.from(parentContainer.children);
    console.log(elements);

    elements.forEach(element => {
        element.style.transition = "opacity 1.7s";
        element.style.opacity = "0"; // Establecer la opacidad inicial en 0
    });

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    function checkVisibility() {
        elements.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.style.opacity = "1"; // Cambiar la opacidad a 1 si está en la vista
            } else {
                element.style.opacity = "0"; // Cambiar la opacidad a 0 si está fuera de la vista
            }
        });
    }

    // Agregar evento de desplazamiento al contenedor
    parentContainer.addEventListener('scroll', checkVisibility);

    // Llamar a la función inicialmente para verificar elementos visibles al cargar la página
    checkVisibility();
}