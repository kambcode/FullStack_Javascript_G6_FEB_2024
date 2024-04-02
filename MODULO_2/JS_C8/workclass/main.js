// document.write("Escribe en la pagina");
const parrafo = document.getElementById("text-1");
const participantList = document.getElementById("list-1")

// const changeText = () => {
// }

function changeText () {
    parrafo.innerHTML = "Este parrafo se cambió por medio de JS";   
}

const addToList = () => {
    const name = "Camilo " + "montoya";
    participantList.innerHTML = participantList.innerHTML + "<li>" +name+"</li>";
    // escrito de otra forma
    // participantList.innerHTML += "<li>" +name+"</li>";
}