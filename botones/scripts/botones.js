const text=()=>{
    /*document.getElementById('cambia').style.display = "none";*/
    document.getElementById('cambia').textContent = "HOLA MUNDO!"; /*Cambia el texto ya prefeijado anteriormente */
}

const changeColor=(color)=>{ /*Cambia el nombre del boton*/
    main1= document.getElementById('main2').style.backgroundColor = color; 
    document.getElementById('boton-fondo').textContent = "Mucho Mejor"; /*Cambia el contenido en texto del id que hayas puesto */
}
  
const fondo=() => {
    changeColor('blue');
} 

const mensaje = () => {
    window.alert('¡Haz hecho clic!'); /*Muestra una ventana de alerta */
}

const picabu = () => {
    if(document.getElementById('boton-picabu').textContent == 'Ocultar'){
        document.getElementById('boton-picabu').textContent = "Mostrar";
        document.getElementById('info').style.display = "none";
    }else/*(document.getElementById('boton-picabu').textContent == 'Mostrar')*/{
        document.getElementById('boton-picabu').textContent = "Ocultar";
        document.getElementById('info').style.display = "block";
    }
    
}