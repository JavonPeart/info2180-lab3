window.onload = function(){
    var boardLayout = document.querySelectorAll("#board > div");

    var playerX = "X";
    var playerO = "O";
    var currplayer = "X";

    for(let i=0; i<=8; i++){
        boardLayout[i].setAttribute("class","square");
        boardLayout[i].innerHTML = "";
    }

    boardLayout.forEach((element) =>{
        element.classList.add("square");
        element.innerHTML = "";

        element.addEventListener("click", function(){
            if ((currplayer == "O") && (element.innerHTML == "")){
                element.innerHTML = playerX;
                element.classList.add("X");
                currplayer = "X";

            }else if ((currplayer == "X") && (element.innerHTML =="")){
                element.innerHTML = playerO;
                element.classList.add("O");
                currplayer = "O";
            }
        });
    });



}