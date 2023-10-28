document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((element) => {
    element.addEventListener("click", handleClick);
  })
})


function handleClick(event) {

  let square = event.target;
  let position = square.id

  if (handleMove(position)) {

    setTimeout(() => {
      alert(`O jogo acabou - o jogador ${playTime} foi o vencedor`)
      location.reload();
    }, 100)
    // Isso irá recarregar a página atual
    


  }
  updateSquare()
}


function updateSquare() {

  let squares = document.querySelectorAll(".square")

  squares.forEach((element) => {
    let position = element.id
    let symbol = board[position]

    if (symbol != "") {
      element.innerHTML = `<div class=${symbol}></div>`
    }
  });

}