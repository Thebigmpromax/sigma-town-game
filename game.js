const fs = require("fs");
const prompt = require("prompt-sync")();

let playerMoney = "100";
let playerHouse = "Apartment";
let playerSwag = "Poor Gear";

function daily(choice) {
  console.log(`
  A. Start working
  B. Grind
  C. Get Swag`)
  choice = prompt('');
}

console.log(`

░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗  ████████╗░█████╗░
░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝  ╚══██╔══╝██╔══██╗
░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░  ░░░██║░░░██║░░██║
░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░  ░░░██║░░░██║░░██║
░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████╗  ░░░██║░░░╚█████╔╝
░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚══════╝  ░░░╚═╝░░░░╚════╝░

░██████╗██╗░██████╗░███╗░░░███╗░█████╗░  ████████╗░█████╗░░██╗░░░░░░░██╗███╗░░██╗
██╔════╝██║██╔════╝░████╗░████║██╔══██╗  ╚══██╔══╝██╔══██╗░██║░░██╗░░██║████╗░██║
╚█████╗░██║██║░░██╗░██╔████╔██║███████║  ░░░██║░░░██║░░██║░╚██╗████╗██╔╝██╔██╗██║
░╚═══██╗██║██║░░╚██╗██║╚██╔╝██║██╔══██║  ░░░██║░░░██║░░██║░░████╔═████║░██║╚████║
██████╔╝██║╚██████╔╝██║░╚═╝░██║██║░░██║  ░░░██║░░░╚█████╔╝░░╚██╔╝░╚██╔╝░██║░╚███║
╚═════╝░╚═╝░╚═════╝░╚═╝░░░░░╚═╝╚═╝░░╚═╝  ░░░╚═╝░░░░╚════╝░░░░╚═╝░░░╚═╝░░╚═╝░░╚══╝
`)
console.log(`A. New Game
B. Load Game`)
let select = prompt("");
if (select == "A") {
  console.log("Welcome To Sigma Town.")
  playerMoney = "100"
  playerHouse = "Apartment"
  let save = prompt("Type S to save")
  if (save == "S") {
    fs.writeFile ("playerMoney.txt", playerMoney, err => {
      if (err) {
        console.log(err)
        return
      }
    })
    fs.writeFile ("playerHouse.txt", playerHouse, err => {
      if (err) {
        console.log(err)
        return
      }
    })
    fs.writeFile ("playerSwag.txt", playerSwag, err => {
      if (err) {
        console.log(err)
        return
      }
    })
  }
 
} else if (select == "B") {
const loadMoney = fs.readFileSync("playerMoney.txt", "utf8")
playerMoney = loadMoney
console.log('loaded playerMoney.txt')
const loadHouse = fs.readFileSync("playerHouse.txt", "utf8")
playerHouse = loadHouse
console.log('Loaded playerHouse.txt')
const loadSwag = fs.readFileSync("playerSwag.txt", "utf8")
playerSwag = loadSwag
console.log('Loaded playerSwag.txt')
console.log(`I am in my ${playerHouse} and have ${playerMoney} dollars with ${playerSwag}`)

} else {
  console.log("Invalid Selection")
};