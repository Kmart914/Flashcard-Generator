var BasicCard = require("./card");
var ClozeCard = require("./cloze");

var nba = new BasicCard("Who won the NBA championship last year?","Golden State Warriors");

console.log(nba.front);

console.log(nba.back);

var nfl = new ClozeCard("Who won the super bowl last year?", "New England Patriots");

console.log(nfl.fullText);
console.log(nfl.cloze);
