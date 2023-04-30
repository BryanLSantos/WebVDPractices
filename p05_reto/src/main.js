
import Bootloader from "./scenes/Bootloader.js";

const config = {
    title: "Curso Phaser",		    //Nombre del juego (opcional)
    url: "http://google.es",	    //Dirección de la página del juego (opcional)
    version: "0.0.1",		        //Versión alfanumérica (opcional)
    type: Phaser.AUTO,		        //Tipo de renderizado (WEBGL, CANVAS, AUTO)
                                    // AUTO: busca primero WEBGL y si no está disponible eligirá CANVAS
    // width: AUTO,			            //Ancho de pantalla del juego
    // height: AUTO,                    //Alto de pantalla del juego
    zoom: 1.0,	
    width: 3840,
    height: 2160,	
    // scale: {
    //     parent: "contenedor",
    //     width: 1900,
    //     height: 970,
    //     mode: Phaser.Scale.FIT,
    //     autoCenter: Phaser.Scale.CENTER_BOTH
    // },       
    		    //Nombre del id del elemento <div> en el index.html
                                    // se refiere a dónde se pondrá el canvas o lienzo
    pixelArt: true,		            //Diseño con pixeles definidos (no borrosos)
    backgroundColor: "#34495e", 	//Color de fondo del canvas ()
    scene: [Bootloader],    //Aquí irá la lista de scenas del juego
    banner:{
        hidePhaser: true,
        text: "#fff00f",
        background: [
                "#16a085",
                "#2ecc71",
                "#e74c3c", 
                "#000000"]
    }
};

const game = new Phaser.Game(config);