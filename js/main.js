//Get the deck
let deckId = "";

fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    deckId = data.deck_id;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      // let val1 = Number(cardValue(data.cards[0].value));
      // let val2 = Number(cardValue(data.cards[1].value));
      document.querySelector("#player1-card1").src = data.cards[0].image;
      document.querySelector("#player1-card2").src = data.cards[2].image;
      document.querySelector("#player2-Card1").src = data.cards[1].image;
      document.querySelector("#player2-Card2").src = data.cards[3].image;
      document.querySelector(".hit-me").addEventListener("click", bjHit);

      function bjHit() {
        const image = document.createElement("img");
        image.src = data.cards[4].image;
        console.log(image.src);
        document.querySelector(".player2-cards-hit-me").appendChild(image);
      }
    })

    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function cardValue(val) {
  if (val === "ACE") {
    return 11;
  } else if (val === "KING") {
    return 10;
  } else if (val === "QUEEN") {
    return 10;
  } else if (val === "JACK") {
    return 10;
  } else {
    return val;
  }
}
