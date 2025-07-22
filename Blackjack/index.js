import superagent from  "superagent";

const GET_SHUFFLED_CARDS_URL = 
  "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"

let response = await superagent.get(GET_SHUFFLED_CARDS_URL);

const deck_id = response.body["deck_id"];

const GET_DRAW_CARD_URL = 
  `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`
  
response = await superagent.get(GET_DRAW_CARD_URL);  

console.log(response.body);