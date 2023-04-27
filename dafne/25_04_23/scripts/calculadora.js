const suma=() =>{
    let num0=document.getElementById('numero0').value;
    let num1=document.getElementById('numero1').value;
    //console.log(parseFloat(numero0) + parseFloat(numero1));
    document.getElementById('resultado').textContent = 'R:' + (parseFloat(num0) + parseFloat(num1));
}


const resta=() =>{
    let num2=document.getElementById('numero0').value;
    let num3=document.getElementById('numero1').value;
    document.getElementById('resultado').textContent = 'R:' + (parseFloat(num2) - parseFloat(num3));
}


const multi=() =>{
    let num4=document.getElementById('numero0').value;
    let num5=document.getElementById('numero1').value;
    document.getElementById('resultado').textContent = 'R:' + (parseFloat(num4) * parseFloat(num5));
}


const div=() =>{
    let num6=document.getElementById('numero0').value;
    let num7=document.getElementById('numero1').value;
    document.getElementById('resultado').textContent = 'R:' + (parseFloat(num6) / parseFloat(num7));
}


const expo=() =>{
    let num8=document.getElementById('numero0').value;
    let num9=document.getElementById('numero1').value;
    document.getElementById('resultado').textContent = 'R:' +
        Math.pow(parseFloat(num8),parseFloat(num9));
}


const saluda =(value)=> {
    alert(`Hola mundo ${value}`);
    console.log("Entro a la funcion saluda");
}




