window.onload = function(){
    var boardLayout = document.querySelectorAll("#board > div");
    var status = document.getElementById("status");
    var restart = document.querySelector(".btn");

    var playerX = "X";
    var playerO = "O";
    var currplayer = "X";

    var winCondition = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    for(let i=0; i<=8; i++){
        boardLayout[i].setAttribute("class","square");
        boardLayout[i].innerHTML = "";
    };

    boardLayout.forEach((element) =>{
        element.classList.add("square");
        element.innerHTML = "";


        element.addEventListener("click", function(){
            if ((currplayer == "O") && (element.innerHTML == "")){
                element.innerHTML = playerX;
                element.classList.add("X");
                currplayer = "X";

            }else if ((currplayer == "X") && (element.innerHTML == "")){
                element.innerHTML = playerO;
                element.classList.add("O");
                currplayer = "O";
            }

            winCondition.forEach((index)=> {
                if((boardLayout[index[0]].innerHTML == playerX) 
                && (boardLayout[index[1]].innerHTML == playerX) 
                && (boardLayout[index[2]].innerHTML == playerX)){
                    status.classList.add("you-won");
                    status.innerHTML = ("Congratulations! X is the Winner!");

                }else if((boardLayout[index[0]].innerHTML == playerO) 
                && (boardLayout[index[1]].innerHTML == playerO) 
                && (boardLayout[index[2]].innerHTML == playerO)){
                    status.classList.add("you-won");
                    status.innerHTML = ("Congratulations! O is the Winner!");
                }
            });
    
        });
        
        element.onmouseover = (event) =>{
            element.style.transition = "all .3s ease-in-out"
            element.classList.add("hover");
        }

        element.onmouseout = (event) =>{
            element.classList.remove("hover");
        }
    });

    restart.addEventListener("click", (event) => {
        location.reload();
    })

}