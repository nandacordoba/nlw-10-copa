function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.2;
function createCard(date, day, games) {
  delay = delay + 0.2;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
        
      </ul>
    </div>
  `
}


document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createGame("brazil", "2 x 0","serbia")) +
  createCard(
    "28/11",
    "segunda",
    createGame("switzerland", "0 x 1", "brazil") +
      createGame("portugal", "2 x 0", "uruguay")
  ) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))
