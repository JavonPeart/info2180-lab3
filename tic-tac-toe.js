window.onload = function(){
    var boardLayout = document.getElementById("board");

    for(let i=0; i<boardLayout.children.length; i++){
        boardLayout.children[i].setAttribute("class", "square");
    }

}