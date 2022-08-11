var tipoUsuario;
var tiempoPrestamo;
var tipoLibro;
var fechaDevolucion;
var bandera;

function tiempoDevolucion(){
    let date = new Date();
    let fechaActual = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    let fechaPrestamo = fechaActual;
    alert("La fecha en que hizo el prestamo fue el " + fechaPrestamo);
}

function devolver(fecha,dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
}

do {
    alert("Bienvenido al sistema de biblioteca");

    tipoUsuario=prompt("Digite su tipo de usuario: ");
    if(tipoUsuario=="Estudiante" || tipoUsuario=="estudiante" || tipoUsuario=="ESTUDIANTE"){
        tipoLibro=prompt("Digite el tipo de libro que desea: ");
            if(tipoLibro == "Ciencias Basicas y Tecnologia" || tipoLibro == "ciencias básicas y tecnología" || tipoLibro == "ciencias basicas y tecnologia" ){
                tiempoPrestamo = 3;
                alert("El tiempo maximo para prestar un libro es de 3 dias");
                tiempoDevolucion();
                var d = new Date();
                alert("Tiene que devolver el libro el dia " + devolver(d, 3));
            }
            else{
                if(tipoLibro == "Tesis" || tipoLibro == "TESIS" || tipoLibro == "tesis" ){
                    tiempoPrestamo = 15;
                    alert("El tiempo maximo para prestar un libro es de 15 dias");
                    tiempoDevolucion();
                    var d = new Date();
                alert("Tiene que devolver el libro el dia " + devolver(d, 15));
                }else{
                    if(tipoLibro == "Obras Literarias" || tipoLibro == "obras Literarias" || tipoLibro == "obras literarias" ){
                        tiempoPrestamo = 7;
                        tiempoDevolucion();
                        var d = new Date();
                alert("Tiene que devolver el libro el dia " + devolver(d, 7));
                    }else{
                        if(tipoLibro == "Otros" || tipoLibro == "OTROS" || tipoLibro == "otros" ){
                            tiempoPrestamo = 2;
                            tiempoDevolucion();
                            var d = new Date();
                            alert("Tiene que devolver el libro el dia " + devolver(d, 2));
                        }else{
                            alert("Opcion no valida");
                        }
                    }
                }
            }
    }else{
        if(tipoUsuario=="Docente" || tipoUsuario=="docente" || tipoUsuario=="DOCENTE"){
            tipoLibro=prompt("Digite el tipo de libro que desea: ");
                if(tipoLibro == "Ciencias Basicas y Tecnologia" || tipoLibro == "ciencias básicas y tecnología" || tipoLibro == "ciencias basicas y tecnologia" ){
                    tiempoPrestamo = 6;
                    alert("El tiempo maximo para prestar un libro es de 6 dias");
                    tiempoDevolucion();
                    var d = new Date();
                    alert("Tiene que devolver el libro el dia " + devolver(d, 6));
                }
                else{
                    if(tipoLibro == "Tesis" || tipoLibro == "TESIS" || tipoLibro == "tesis" ){
                        tiempoPrestamo = 30;
                        alert("El tiempo maximo para prestar un libro es de 30 dias");
                        tiempoDevolucion();
                        var d = new Date();
                        alert("Tiene que devolver el libro el dia" + devolver(d, 30));
                    }else{
                        if(tipoLibro == "Obras Literarias" || tipoLibro == "obras Literarias" || tipoLibro == "obras literarias" ){
                            tiempoPrestamo = 14;
                            alert("El tiempo maximo para prestar un libro es de 14 dias");
                            tiempoDevolucion();
                            var d = new Date();
                            alert("Tiene que devolver el libro el dia" + devolver(d, 14));
                        }else{
                            if(tipoLibro == "Otros" || tipoLibro == "OTROS" || tipoLibro == "otros" ){
                                tiempoPrestamo = 4;
                                alert("El tiempo maximo para prestar un libro es de 4 dias");
                                tiempoDevolucion();
                                var d = new Date();
                            alert("Tiene que devolver el libro el dia" + devolver(d, 4));
                            }else{
                                alert("Opcion no valida");
                            }
                        }
                    }
                }
        }else{
            if(tipoUsuario=="Otro" || tipoUsuario=="otro" || tipoUsuario=="OTRO"){
                tipoLibro=prompt("Digite el tipo de libro que desea: ");
                    if(tipoLibro == "Ciencias Basicas y Tecnologia" || tipoLibro == "ciencias básicas y tecnología" || tipoLibro == "ciencias basicas y tecnologia" ){
                        tiempoPrestamo = 1;
                        alert("Tiene que entregar el libro hoy mismo");
                        tiempoDevolucion();
                    }
                    else{
                        if(tipoLibro == "Tesis" || tipoLibro == "TESIS" || tipoLibro == "tesis" ){
                            tiempoPrestamo = 1;
                            alert("Tiene que entregar el libro hoy mismo");
                            tiempoDevolucion();
                        }else{
                            if(tipoLibro == "Obras Literarias" || tipoLibro == "obras Literarias" || tipoLibro == "obras literarias" ){
                                tiempoPrestamo = 1;
                                alert("Tiene que entregar el libro hoy mismo");
                                tiempoDevolucion();
                            }else{
                                if(tipoLibro == "Otros" || tipoLibro == "OTROS" || tipoLibro == "otros" ){
                                    tiempoPrestamo = 1;
                                    alert("Tiene que entregar el libro hoy mismo");
                                    tiempoDevolucion();
                                }else{
                                    alert("Opcion no valida");
                                }
                            }
                        }
                    }
            }else{
                alert("Opcion no valida");
            }
        }
    }

    var respuesta = prompt("Desea continuar? S/N");
    if(respuesta == "S" || respuesta == "s"){
        bandera = true;
    }else{
        bandera = false;
    }
} while (bandera == true);






