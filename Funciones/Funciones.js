   const URL_Servidor = "http://localhost:8080/MiServlet/API";

   //Función que obtendra información de la Base de Datos
   /*Funcion inicializar select*/
   function InicializarSelect() {
       let Lista = ["Opcion Uno", "Opcion Dos", "Opcion Tres", "Opcion Cuatro"];
       let Select;
       let option;
       let i;
       for (i = 0; i < Lista.length; i++) {
           Select = document.getElementById("SeleccionarUno");
           option = document.createElement('option');
           option.value = Lista[i];
           option.text = Lista[i];
           Select.appendChild(option);
       }

   }


   function CambierColorBorde() {
       let NombreOrganizador = document.getElementById('validationCustom03');
       NombreOrganizador.style.borderColor = "red"
   }

   //Funcion que obtendra los parametros del formulario y validara que no vayan vacios
   function ObtieneInformacionCajasTexto() {


       let NombreOrganizador = document.getElementById('validationCustom03');
       let PrimerApellido = document.getElementById('PrimerApellido');
       let SegundoApellido = document.getElementById('Sapellido');
       let Direccion = document.getElementById('Direccion');
       let Correo = document.getElementById('Correo');
       let Mensaje = "";


       if (NombreOrganizador.value === "") {
           Mensaje = Mensaje + "Ingrese el nombre" + "<br>";
           NombreOrganizador.style.borderColor = "red";
       }

       if (PrimerApellido.value === "") {
           Mensaje = Mensaje + "Ingrese el apellido paterno<br>";
       }

       if (SegundoApellido.value === "") {
           Mensaje = Mensaje + "Ingrese el apallido materno<br>";
       }

       if (Direccion.value === "") {
           Mensaje = Mensaje + "Ingrese la dirección<br>";
       }

       if (Correo.value == "") {
           Mensaje = Mensaje + "Ingrese el correo<br>";
       }

       if (Mensaje != "") {
           //document.getElementById('MiMensaje').innerHTML = Mensaje;
           alert(Mensaje);
           Mensaje="";
         //  alert(Mensaje);
       } else {
        let Datoss=registrar();
        console.log(Datoss);
        //alert("Se recibieron los datos siguientes: "+JSON.stringify(Datoss)) ;
           
       }
Mensaje="";
   }


   //Obtenemos los parametros a enviar y los validamos para evitar que se vayan vacios
   const registrar = async() => {

       let Mensaje = "";
       let nombre = document.getElementById('validationCustom03').value;
       let PApellido = document.getElementById('PrimerApellido').value;
       let SApellido = document.getElementById('Sapellido').value;
       let Direccion = document.getElementById('Direccion').value;
       let Correo = document.getElementById('Correo').value;

       const DatosOrganizador = { nombre, PApellido, SApellido, Direccion, Correo };

       //Funcion que validara los parametros que formaran el JSON
       const DatosVerificados = (DatosOrganizador) => {
           if (DatosOrganizador.nombre === "" || DatosOrganizador.PApellido === "" || DatosOrganizador.SApellido === "" || DatosOrganizador.Direccion === "" || DatosOrganizador.Correo === "") {
               Mensaje = "101";
           } else {

               if (Mensaje === "") {
                   Mensaje = "102";
               } else {

                   Mensaje = JSON.stringify(DatosOrganizador).toString();

               }
           }
           //Devolvemos el JSON en mensaje
           return (Mensaje);
       }

       if (DatosVerificados(DatosOrganizador) != "101" && DatosVerificados(DatosOrganizador) != "102") {
           let TipoConsulta = "insert"
           const Respuesta = await TipoConsultaProcesar(TipoConsulta, URL_Servidor, "POST", DatosOrganizador);
       } else {
           return Mensaje;
       }
       //Verificamos los datos a enviar
       return (Mensaje);
   }


   const TipoConsultaProcesar = async(TipoConsulta, URL, mEtodo, Datos) => {

       if (TipoConsulta === "insert") {
           const Respuesta = await fetch(URL, {
               method: mEtodo,
               mode: 'cors',
               body: JSON.stringify(Datos)
           });

           if (!Respuesta.ok) {
               throw new Error(`HTTP error: ${ Respuesta.status }`);
           }

           const resp = await Respuesta.json();
           return resp;

       } else {
           if (TipoConsulta === "update") {

           } else {
               if (TipoConsulta === "delete") {

               }
           }
       }
   }

   //Definición de función para enviar peticion
   const MyFuncion = (URL_Servidor) => {

       console.log(URL_Servidor);
   }