const body = document.body

let contenido_seo = document.getElementById("contenido_seo")
contenido_seo.style.display="none"

let contenedor_principal = mkObj(body,"contenedor_principal","contenedor_principal")
    let header = mkObj(contenedor_principal,"header","header")
        let contenedor_img_header = mkObj(header,"contenedor_img_header","contenedor_img_header")

            let img_header = mkObjImg(contenedor_img_header,"img_header","img_header","./vista/img/mundo_logo.svg")

        let contenedor_rmenu_header = mkObj(header,"contenedor_menu_header","contenedor_menu_header")
            let menu_header = mkObjImg(contenedor_menu_header,"menu_header","menu_header","./vista/img/menu.svg")
            let pestaña_menu_header = mkObj(header,"pestaña_menu_header","pestaña_menu_header")
                let header_opcion_inicio = mkText(pestaña_menu_header,"header_opcion","header_opcion_inicio","Portal de Inicio")
                let header_opcion_login = mkText(pestaña_menu_header,"header_opcion","header_opcion_login","Ingresar")

                let header_opcion_cancelerias = mkText(pestaña_menu_header,"header_opcion","header_opcion_login","¿Qué es una cancelería?")
                let header_opcion_cancelerias_oficina_baño = mkText(pestaña_menu_header,"header_opcion","header_opcion_login","Canceleria para oficinas y baños")
                let header_opcion_curiosidades_vidrio = mkText(pestaña_menu_header,"header_opcion","header_opcion_login","Curiosidades acerca del vidrio")
                let header_opcion_importancia_vidrio = mkText(pestaña_menu_header,"header_opcion","header_opcion_login","Ventajas del Vidrio")
                let header_opcion_servicios = mkText(pestaña_menu_header,"header_opcion","header_opcion_login","Servicios")
                let header_opcion_vidrio = mkText(pestaña_menu_header,"header_opcion","header_opcion_login","¿Qué es el vidrio?")


                let header_opcion_cerrar_sesion = mkText(pestaña_menu_header,"header_opcion","header_opcion_cerrar_sesion","Cerrar Sesión")
                header_opcion_cerrar_sesion.style.display="none"
    placerMenu(menu_header,pestaña_menu_header)

    let cuerpo = mkObj(contenedor_principal,"cuerpo","cuerpo")
    displayScroll(cuerpo)
    document.addEventListener("mouseup",function (btn) {
        if (header_opcion_inicio.contains(btn.target)) {
            contenidoInicio()
        }
        if (header_opcion_login.contains(btn.target)) {
            console.log(header_opcion_login)
            contenidoLogin()
        }

        if (header_opcion_cancelerias.contains(btn.target)) {
            window.location.href = "./pages/cancelerias.html";
        }
        if (header_opcion_cancelerias_oficina_baño.contains(btn.target)) {
            window.location.href = "./pages/canceles_oficina.html";
        }
        if (header_opcion_curiosidades_vidrio.contains(btn.target)) {
            window.location.href = "./pages/curiosidades_vidrio.html";
        }
        if (header_opcion_importancia_vidrio.contains(btn.target)) {
            window.location.href = "./pages/importancia_vidrio_hogar.html";
        }
        if (header_opcion_servicios.contains(btn.target)) {
            window.location.href = "./pages/servicios.html";
        }
        if (header_opcion_vidrio.contains(btn.target)) {
            window.location.href = "./pages/vidrio.html";
        }
    })


contenidoInicio()
function contenidoInicio() {

    cuerpo.innerHTML=""

    if (document.getElementById("footer_principal")) {
        document.getElementById("footer_principal").remove()
    }

    let cuerpo_inicio = mkObj(cuerpo,"cuerpo","cuerpo_inicio")

    let peticion_contenido_inicio = new XMLHttpRequest();
    peticion_contenido_inicio.open("GET","contenido_inicio")




        let texto_contenido = mkTextList(cuerpo_inicio,"texto_contenido","texto_contenido",
            "<h1>Un Mundo de Cancelería</h1>",
            "<h2>Canceleria cerca de Ciudad de México, CDMX.</h2>",
            "<h3>Puertas de cristal</h3>",
            "<h4>Canceles, cabinas y estructuras diseñadas a tus necesidades.</h4>",
            "<h4>Adapta tu espacio con elegantes soluciones que combinan funcionalidad y diseño.</h4>",
            "<h4>Profesionalismo en los detalles: encuentra la cancelería perfecta para complementar tu hogar u oficina.</h4>",
            "<h4>Explora nuestra amplia experiencia en diseño y fabricación.</h4>",
            "<h4>Cristales, vidrios y canceles.</h4>",
        )/*;cuerpo.style.flexDirection="column";*/;
        let array_p_texto_contenido = texto_contenido.querySelectorAll("p")
        // console.log(array_p_texto_contenido)
        array_p_texto_contenido.forEach(element => {
            insertSpan(element,"elegantes soluciones","var(--colorBlueLetra)")
            insertSpan(element,"mejoramiento comunitario","var(--colorBlueLetra)")
            insertSpan(element,"encuentra la cancelería","var(--colorBlueLetra)")
            insertSpan(element,"diseño y fabricación","var(--colorBlueLetra)")
            // console.log(element)
        });
        // // // insertSpan(p_texto_contenido,"")
        let img_canceleria_inicio = mkObjImg(cuerpo_inicio,"img_canceleria_inicio","img_canceleria_inicio","./vista/img/aluminio.svg")
            img_canceleria_inicio.style.position="relative"
            let hipercapa_img_canceleria_inicio = mkObj(img_canceleria_inicio,"hipercapa_","hipercapa_img_canceleria_inicio")
                hipercapa_img_canceleria_inicio.style.position="absolute"
                hipercapa_img_canceleria_inicio.style.zIndex="9"

                let cuerpo_hipercapa = mkObj(hipercapa_img_canceleria_inicio,"cuerpo_hipercapa","cuerpo_hipercapa")
                    let header_hipercapa = mkTextList(cuerpo_hipercapa,"header_hipercapa","header_hipercapa",
                        "Adapta tus espacios.",
                        "Mejora tus fachadas con diseños atractivos."
                    )

        let frame_map = mkObj(cuerpo_inicio,"frame_map","frame_map",'<iframe src="https://www.google.com/maps?q=19.374171491900384,-99.04235056723695&hl=es;z=14&output=embed" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>')

            
        

        let texto_contenido_ = mkTextList(cuerpo_inicio, "texto_contenido", "texto_contenido",
            "<h2>Diseños personalizados</h2>",
            "<h4>Más que cristales, un diseño cómodo y atractivo personalizado a tus necesidades.</h4>",
            "<h5>En nuestro catálogo, encontrarás una amplia variedad de diseños exclusivos para adaptarnos a tu estilo único.</h5>",
            "<h5>Desde elegantes patrones hasta opciones minimalistas, cada pieza de nuestra cancelería está diseñada para impresionar y satisfacer tus gustos más exigentes.</h5>",
            "<h5>Haz de tu espacio un reflejo auténtico de tu personalidad con nuestra cancelería única y personalizada.</h5>",
            "<h5>¿Tienes una idea específica en mente? Trabajaremos estrechamente contigo para convertir tu visión en una realidad tangible.</h5>",
            "<h5>La fusión perfecta entre estética y funcionalidad: nuestros diseños personalizados no solo son hermosos, sino también altamente prácticos y eficientes.</h5>",
            "",
            "",
            "",
            "",
            "",
            "",
        )/*;cuerpo.style.flexDirection="column";*/;
        let array_p_texto_contenido_ = texto_contenido_.querySelectorAll("p")
        // console.log(array_p_texto_contenido)
        array_p_texto_contenido_.forEach(element => {
            insertSpan(element,"un diseño cómodo y atractivo personalizado","var(--colorBlueLetra)")
            insertSpan(element,"encontrarás una amplia variedad","var(--colorBlueLetra)")
            insertSpan(element,"elegantes patrones hasta opciones minimalistas","var(--colorBlueLetra)")
            insertSpan(element,"diseños exclusivos","var(--colorBlueLetra)")
            insertSpan(element,"Haz de tu espacio un reflejo auténtico","var(--colorBlueLetra)")
            insertSpan(element,"Tienes una idea específica en mente?","var(--colorBlueLetra)")
            insertSpan(element,"fusión perfecta entre estética y funcionalidad","var(--colorBlueLetra)")
            console.log(element)
        });
        
        let carrusel_actividades = mkCarrusel(cuerpo_inicio,"carrusel","carrusel",
            "vista/img/canceleria_domos_carrusel.svg",
            "vista/img/canceleria_adaptaciones_carrusel.svg",
            "vista/img/canceleria_bañeras_carrusel.svg",
            "vista/img/canceleria_bañeras2_carrusel.svg",
            "vista/img/canceleria_oficinas_carrusel.svg",
        )

        let contenido_img_canceleria_inicio = mkObj(cuerpo_inicio,"contenido_img_canceleria_inicio")
        contenido_img_canceleria_inicio.style.position="relative"

            let img_office_world = mkObjImg(contenido_img_canceleria_inicio,"img_office_world","img_office_world","./vista/img/cristal_perimetral.svg")
            img_office_world.style.position="absolute"


            let text_ = mkTextList(contenido_img_canceleria_inicio,"text_","text_",
                "Transforma tu espacio con elegancia: la cancelería que refleja tu estilo.",
                "Innovación y diseño en cada detalle, descubre la excelencia de nuestra cancelería.",
                "La seguridad nunca se vio tan bien. Protege tu hogar con nuestra exclusiva cancelería.",
                // "Descubre el equilibrio perfecto entre estética y resistencia en nuestra cancelería de alta calidad.",
                // "Diseño que perdura, calidad que se siente. Así es nuestra cancelería de vanguardia.",
                // "La armonía entre forma y función: descubre nuestra colección única de cancelería premium.",
                // "Más que ventanas y puertas, creamos conexiones con estilo. Vive la experiencia de nuestra cancelería exclusiva.",
                // "Atrévete a destacar con nuestra cancelería personalizada. Tu espacio, tu expresión.",
                "La seguridad nunca pasa desapercibida. Descubre nuestra cancelería que combina estilo y protección a la perfección."
            )
            text_.style.position="absolute"
            text_.style.display="none"

        let array_text_ = text_.querySelectorAll("p")

        array_text_.forEach(element => {
            insertSpan(element,"Transforma tu espacio","var(--colorBlueLetra)")
            insertSpan(element,"excelencia de nuestra cancelería","var(--colorBlueLetra)")
            insertSpan(element,"Abre las puertas","var(--colorBlueLetra)")
            insertSpan(element,"Más que ventanas","var(--colorBlueLetra)")
            
        });

        // img_office_world.style.left="33.33%"

            // let img_canceleria_inicio_ = mkObjImg(contenido_img_canceleria_inicio,"img_canceleria_inicio","img_canceleria_inicio","./vista/img/aluminio.svg")
                
            let img_animacion_cancelería_puerta = mkObjImg(contenido_img_canceleria_inicio, "img_animacion_cancelería_puerta", "img_animacion_cancelería_puerta", "./vista/img/cancel_max_format.svg");
            let img_animacion_cancelería_puerta_ = mkObjImg(contenido_img_canceleria_inicio, "img_animacion_cancelería_puerta", "img_animacion_cancelería_puerta_", "./vista/img/cancel_max_format_.svg");
            
            // Agrega estilos de transición para las imágenes
            img_animacion_cancelería_puerta.style.transition = "transform 0.5s ease";
            img_animacion_cancelería_puerta_.style.transition = "transform 0.5s ease";
            
            contenido_img_canceleria_inicio.addEventListener("mouseenter", function () {
                console.log(contenido_img_canceleria_inicio);
                img_animacion_cancelería_puerta.style.transform = "translateX(-75%)";
                img_animacion_cancelería_puerta_.style.transform = "translateX(75%)";
                text_.style.display = "flex";
            });
            
            contenido_img_canceleria_inicio.addEventListener("mouseleave", function () {
                console.log(contenido_img_canceleria_inicio);
                img_animacion_cancelería_puerta.style.transform = "translateX(0)";
                img_animacion_cancelería_puerta_.style.transform = "translateX(0)";
                text_.style.display = "none";
            });

            let lista_servicios = mkTextList(cuerpo_inicio,"texto_contenido","texto_contenido",
                "</h3>Descubre nuestros servicios</h3>",
                "Nuestro compromiso es ofrecerte soluciones integrales y de alta calidad.",
                "Servicios personalizados para cada necesidad.",
                "Remodelación de espacios residenciales y comerciales",
                "Optimización de ambientes para mayor comodidad y productividad",
                "Trabajamos con un equipo de profesionales dedicados y apasionados por el diseño y la decoración.",
            );

            let array_text_lista_servicios = lista_servicios.querySelectorAll("p")

            array_text_lista_servicios.forEach(element => {
                insertSpan(element,"Descubre nuestros servicios","var(--colorBlueLetra)")
                insertSpan(element,"personalizados","var(--colorBlueLetra)")
                insertSpan(element,"Optimización","var(--colorBlueLetra)")
                insertSpan(element,"comodidad y productividad","var(--colorBlueLetra)")
                insertSpan(element,"profesionales dedicados","var(--colorBlueLetra)")
                
            });

            let contenido_etiquetas_canceleria = mkObj(cuerpo_inicio,"contenido_etiquetas_canceleria","contenido_etiquetas_canceleria")

                let etiqueta_canceleria_baños = etiquetaCanceleria(contenido_etiquetas_canceleria,"etiqueta_canceleria","etiqueta_canceleria_baños","Baños","./vista/img/cancel_baño.svg","Decora tus baños con un estilo minimalista.")

                let etiqueta_canceleria_estructuras = etiquetaCanceleria(contenido_etiquetas_canceleria, "etiqueta_canceleria", "etiqueta_canceleria_estructuras", "Estructuras", "./vista/img/cancelería_terraza.svg", "Añade un diseño atractivo para tus terrazas.");

                let etiqueta_canceleria_oficinas = etiquetaCanceleria(contenido_etiquetas_canceleria, "etiqueta_canceleria", "etiqueta_canceleria_oficinas", "Oficinas", "./vista/img/cancel_oficina.svg", "Renueva tu oficina con disenos modernos.");

                let etiqueta_canceleria_domos = etiquetaCanceleria(contenido_etiquetas_canceleria, "etiqueta_canceleria", "etiqueta_canceleria_domos", "Domos", "./vista/img/cancel_domo.svg", "Domos atractivos sobre habitación, patio y/o jardin.");

                let etiqueta_canceleria_hogar = etiquetaCanceleria(contenido_etiquetas_canceleria, "etiqueta_canceleria", "etiqueta_canceleria_hogar", "Hogar", "./vista/img/cancel_hogar.svg", "Remodela los interiores de tus espacios.");

                let etiqueta_canceleria_puertas = etiquetaCanceleria(contenido_etiquetas_canceleria, "etiqueta_canceleria", "etiqueta_canceleria_puertas", "Puertas", "./vista/img/cancel_puertas.svg", "Crea entradas con un diseño elegante.");

                let etiqueta_canceleria_terrazas_ = etiquetaCanceleria(contenido_etiquetas_canceleria, "etiqueta_canceleria", "etiqueta_canceleria_hogar", "Terrazas", "./vista/img/cancel_terraza.svg", "Asegura tus espacios con diseños a tu estilo.");






                function etiquetaCanceleria(nodo,clase,id,titulo,img_ruta,descripcion) {
                    nodo?true:"";clase?true:"";id?true:"";titulo?true:"";img_ruta?true:"";descripcion?true:"";
                    
                    let obj_temp = mkObj(nodo,"cont_"+""+clase,"cont_"+""+id)
                    obj_temp.style.flexDirection="column"

                        let header_temp = mkObj(obj_temp,"header_"+clase,"header_"+id)
                            let header_temp_titulo = mkText(header_temp,"header_temp_titulo"+clase,"header_temp_titulo"+id,titulo)

                        let cuerpo_temp = mkObj(obj_temp,"cuerpo_"+clase,"cuerpo_"+id)
                            let cuerpo_temp_imagen = mkObjImg(cuerpo_temp,"cuerpo_temp_imagen"+clase,"cuerpo_temp_imagen"+id,img_ruta)

                        let footer_temp = mkObj(obj_temp,"footer_"+clase,"footer_"+id)
                            let footer_temp_descripcion = mkText(footer_temp,"footer_temp_descripcion"+clase,"footer_temp_descripcion"+id,descripcion)

                    obj_temp.addEventListener("mouseup",function () {
                        console.log(obj_temp)
                        let hc = document.querySelectorAll(".hipercapa_")
                        if (hc) {
                            hc.forEach(element => {
                                // console.log(hc)
                                element.remove()
                            });
                        }
                        let hipercapa_temp = mkObj(contenedor_principal,"hipercapa_"+clase,"hipercapa_"+id)
                        hipercapa_temp.style.position="absolute"
                        hipercapa_temp.style.zIndex="255"
                            let ventana_enviar_cotizacion = mkObj(hipercapa_temp,"ventana_enviar_cotizacion","ventana_enviar_cotizacion_"+id)
                                let ventana_enviar_cotizacion_header = mkObj(ventana_enviar_cotizacion,"ventana_enviar_cotizacion_header","ventana_enviar_cotizacion_header"+id)
                                    let ventana_enviar_cotizacion_header_titulo = mkText(ventana_enviar_cotizacion_header,"ventana_enviar_cotizacion_header_titulo","ventana_enviar_cotizacion_header_titulo"+id,"Solicitar Cotización de Cancelería "+titulo)
                                    let ventana_enviar_cotizacion_header_img_cerrar = mkObjImg(ventana_enviar_cotizacion_header,"ventana_enviar_cotizacion_header_cerrar","ventana_enviar_cotizacion_header_img_cerrar"+id,"./vista/img/cerrar_ventana.svg")

                                        ventana_enviar_cotizacion_header_img_cerrar.addEventListener("mouseup",function () {
                                            hipercapa_temp.remove();
                                        })
                                let ventana_enviar_cotizacion_cuerpo = mkObj(ventana_enviar_cotizacion,"ventana_enviar_cotizacion_cuerpo","ventana_enviar_cotizacion_cuerpo"+id)
                                    let ventana_enviar_cotizacion_cuerpo_fila_producto = mkObj(ventana_enviar_cotizacion_cuerpo,"ventana_enviar_cotizacion_cuerpo_fila","ventana_enviar_cotizacion_cuerpo_fila_"+id)
                                        let ventana_enviar_cotizacion_cuerpo_fila_img = mkObjImg(ventana_enviar_cotizacion_cuerpo_fila_producto,"ventana_enviar_cotizacion_cuerpo_fila_img","ventana_enviar_cotizacion_cuerpo_fila_img"+id,img_ruta)
                                        let ventana_enviar_cotizacion_cuerpo_fila_descripcion = mkText(ventana_enviar_cotizacion_cuerpo_fila_producto,"ventana_enviar_cotizacion_cuerpo_fila_descripcion","ventana_enviar_cotizacion_cuerpo_fila_descripcion"+id,titulo+"<br>"+descripcion)
                                            let img_whatsapp = mkObjImg(ventana_enviar_cotizacion_cuerpo_fila_descripcion,"img_contacto","img_whatsapp","./vista/img/whatsapp.svg")

                                                img_whatsapp.addEventListener("mouseup",function () {
                                                    window.open(`https://wa.me/5528215430?text=Hola,%20quiero%20cotizar%20una%20Cancelería%20para%20${titulo}.`, '_blank');
                                                    
                                                })

                                let ventana_enviar_cotizacion_footer = mkObj(ventana_enviar_cotizacion,"ventana_enviar_cotizacion_footer","ventana_enviar_cotizacion_footer"+id)
                                    let ventana_enviar_cotizacion_footer_contactos = mkTextList(ventana_enviar_cotizacion_footer,"ventana_enviar_cotizacion_footer_contactos","ventana_enviar_cotizacion_footer_contactos"+id,
                                        "Teléfono: 5528215430",
                                        "Correo Electrónico: unmundodecanceleria@hotmail.com"
                                    )

                                // Agregar evento para manipular el historial al cerrar la ventana
                                window.addEventListener("popstate", function () {
                                    if (hipercapa_temp) {
                                        hipercapa_temp.remove();
                                    }
                                });

                                // Modificar el historial al abrir la ventana
                                history.pushState({ action: "open" }, null, "cotizacion"); // Puedes personalizar la URL según tu necesidad

                    })

                    return obj_temp
                }

        let footer_principal = mkObj(contenedor_principal,"footer_principal","footer_principal")
        footer_principal.addEventListener("mouseenter",function () {
            footer_principal.style.height="180px"
        })
        footer_principal.addEventListener("mouseleave",function () {
            footer_principal.style.height="43px"
        })

            let img_whatsapp = mkObjImg(footer_principal,"img_contacto","img_whatsapp","./vista/img/whatsapp_.svg")

                // img_whatsapp.addEventListener("mouseup",function () {
                //     window.open(`https://wa.me/5528215430?text=Hola,%20quiero%20cotizar%20un%20producto.`, '_blank');
                // })

            let img_facebook = mkObjImg(footer_principal,"img_contacto","img_facebook","./vista/img/facebook.svg")

            let img_mail = mkObjImg(footer_principal,"img_contacto","img_mail","./vista/img/mail.svg")

            document.addEventListener("mouseup",function (x) {
                if (img_whatsapp.contains(x.target)) {
                    window.open(`https://wa.me/5528215430?text=Hola,%20quiero%20cotizar%20un%20producto.`, '_blank');
                }
                if (img_facebook.contains(x.target)) {
                    window.open(`https://web.facebook.com/unmundodecanceleria`, '_blank');
                }
                if (img_mail.contains(x.target)) {
                    enviarCorreo();
                }
            })

            function enviarCorreo() {
                const destinatario = 'unmundodecanceleria@hotmail.com';
                const asunto = 'Contacto Cristales y Canceleria.';
                const cuerpo = 'Correo';
              
                const mailtoURL = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
              
                window.open(mailtoURL);
              }
              
              


return cuerpo_inicio
}
function contenidoLogin() {
    cuerpo.innerHTML=""

    let cuerpo_login = mkObj(cuerpo,"cuerpo_login","cuerpo_login")

            mostrarLoginUsuarios()

            function mostrarLoginUsuarios() {
                // ! console.log(mostrar_login)
                cuerpo_login.innerHTML=""

                let ventana_login = mkObj(cuerpo_login,"ventana_login","ventana_login")

                    let tittle_ventana_login = mkText(ventana_login,"tittle_ventana_login","tittle_ventana_login","Ingresar")
                    let tittle_ventana_login_sec = mkText(ventana_login,"tittle_ventana_login","tittle_ventana_login_sec","Solicita Informes para crear tu cuenta y disfrutar de los beneficios que tenemos para ti.")

                    let obj_input_login_usuario = mkObjInput(ventana_login,"obj_input_login","obj_input_login_usuario","text","Usuario","Ingresar Usuario ...")
                    let obj_input_login_contraseña = mkObjInputPassword(ventana_login,"obj_input_login","obj_input_login_contraseña","Contraseña","Ingresar Contraseña ...","vista/img/verContraseña.svg")

                    let btn_login = mkObjButton(ventana_login,"btn_login","btn_login","Ingresar")

                    btn_login.addEventListener("click",function() {
                        let usuario = obj_input_login_usuario.querySelector("input").value
                        let contraseña = obj_input_login_contraseña.querySelector("input").value

                        verificarInputVacio(obj_input_login_usuario)
                        verificarInputVacio(obj_input_login_contraseña)

                        let formdata = new FormData()
                        formdata.append("usuario",usuario)
                        formdata.append("contraseña",contraseña)

                    let peticion = new XMLHttpRequest()
                        peticion.open("POST","./modelo/login.php")
                        peticion.send(formdata)
                        peticion.onreadystatechange=function(){
                            if (peticion.readyState===4&&peticion.status===200) {
                                let res = peticion.response
                                console.log(res)
                                if (res=="success") {
                                    cuerpo.innerHTML=""
                                    header_opcion_login.style.display="none"
                                    header_opcion_cerrar_sesion.style.display="flex"

                                    verificarInicioDeSesion()
                                        .then(response=>{
                                            console.log(response)

                                            contenidoInicio()
                                        })
                                }
                            }
                        }



                    })

            }


        function verificarInputVacio(obj_input) {
            if (obj_input.querySelector(".cont_aviso_input")) {
                obj_input.querySelector(".cont_aviso_input").remove()
            }
            let input_temp = obj_input.querySelector("input")

            if (input_temp.value!="") {
                obj_input.style.boxShadow="none"
            } else {
                obj_input.style.boxShadow="0 0 4px var(--colorRed)"
                let aviso = mkText(obj_input,"aviso_input","","Input vacio")
            }
        }

}
function verificarInicioDeSesion() {
    return new Promise((resolve, reject) => {
        let peticion = new XMLHttpRequest();

        peticion.open("GET", "./modelo/user.php");
        peticion.send();

        peticion.onreadystatechange = () => {
            if (peticion.readyState === 4) {
                if (peticion.status === 200) {
                    if (peticion.response === "success") {
                        let res = peticion.response;
                        resolve(res);

                        let contenedor_usuario = mkObj(contenedor_img_header,"contenedor_usuario","contenedor_usuario")
                        // contenedor_usuario.style.background="black"
                            let texto_admin = mkText(contenedor_usuario,"texto_admin","texto_admin","admin")

                    } else {
                        reject("Login failed");
                    }
                } else {
                    reject("Request failed");
                }
            }
        };
    });
}
verificarInicioDeSesion() 
