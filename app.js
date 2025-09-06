//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let arrayFriends = [];
const listFriends =  document.querySelector(".listaAmigos");

function adicionarAmigo(){

    let input = document.querySelector("#amigo");
    let friend = input.value;
    if(friend.length < 3){
        alert("Digite um nome valido");
        return;
    }

    let nameFriend = document.createElement("div");
    nameFriend.className = "amigos";
    nameFriend.textContent = friend;

    listFriends.appendChild(nameFriend);

    arrayFriends.push(friend);
    input.value = "";

}
function sortearAmigo(){
    let result = document.querySelector("#resultado");
    result.textContent = "";

    if(arrayFriends.length === 0){
        alert("Nem um nome para sortea");
        return;
    }

    listFriends.textContent = " ";

    const index = Math.floor(Math.random() * arrayFriends.length);
    console.log(index);
    const selectedFriend = arrayFriends[index];

    let resultFinal = document.createElement("div");
    resultFinal.id = "resultadoFinal"
    resultFinal.textContent = selectedFriend;

    result.appendChild(resultFinal);
}