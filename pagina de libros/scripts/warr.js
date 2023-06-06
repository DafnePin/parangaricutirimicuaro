function ok(){
    let title = document.getElementById("title");
    let year = document.getElementById("year");
    let author = document.getElementById("author");
    let me = true;

    if(title.value==""){
        document.getElementById("errTitle").textContent="Titulo debe tener un dato valido";
        me=false;
    }
    if(year.value==""){
        document.getElementById("errYear").textContent="Año debe tener un dato valido";
        me=false;
    }
    if(author.value==""){
        document.getElementById("errAuthor").textContent="Autor debe tener un dato valido";
        me=false;
    }
    me ? forma.submit():false;
}

function correct(){
    document.getElementsById("errTitle").textContent="";
    document.getElementsById("errYear").textContent="";
    document.getElementsById("errAuthor").textContent="";
}

function send(){
    InputEvent.value
}