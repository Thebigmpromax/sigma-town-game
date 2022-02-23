const fs = require("fs");
const prompt = require("prompt-sync")();

let playerMoney = "100";
let playerHouse = "Apartment";
let playerSwag = "Poor Gear";
let playerMale = "Beta Male";
let inChoice = false;

function daily(choice) {
  inChoice = true;
  console.log(`
  A. Start working
  B. Grind
  C. Get Swag`)
  choice = prompt('')
  if(choice == "A") {
    playerMoney + 100;
    console.log("you get money.")
  } else if(choice == "B" && playerMale == "Beta Male") {
    playerMale = "Alpha Male"
    console.log("You are an Alpha Male Now.")
  } else if(choice == "B" && playerMale == "Alpha Male") {
  playerMale = "Sigma Male"
  console.log("You are a Sigma Male");
  } else if(choice == "C" ) {
    playerMoney -100;
    playerSwag == "Gucci"
    console.log("You got dat DRIP")
  } else if(choice == "C" && playerSwag == "Gucci") {
    console.log("U already got dat DRIP.")
  }
  inChoice = false;
} 

console.log(`

░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗  ████████╗░█████╗░
░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝  ╚══██╔══╝██╔══██╗
░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░  ░░░██║░░░██║░░██║
░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░  ░░░██║░░░██║░░██║
░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████╗  ░░░██║░░░╚█████╔╝
░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚══════╝  ░░░╚═╝░░░░╚════╝░

░██████╗██╗░██████╗░███╗░░░███╗░█████╗░  ████████╗░█████╗░░██╗░░░░░░░██╗███╗░░██╗
██╔════╝██║██╔════╝░████╗░████║██╔══██╗  ╚══██╔══╝██╔══██╗░██║░░██╗░░██║████╗░██║
╚█████╗░██║██║░░██╗░██╔████╔██║███████║  ░░░██║░░░██║░░██║░╚██╗████╗██╔╝██╔██╗██║
░╚═══██╗██║██║░░╚██╗██║╚██╔╝██║██╔══██║  ░░░██║░░░██║░░██║░░████╔═████║░██║╚████║
██████╔╝██║╚██████╔╝██║░╚═╝░██║██║░░██║  ░░░██║░░░╚█████╔╝░░╚██╔╝░╚██╔╝░██║░╚███║
╚═════╝░╚═╝░╚═════╝░╚═╝░░░░░╚═╝╚═╝░░╚═╝  ░░░╚═╝░░░░╚════╝░░░░╚═╝░░░╚═╝░░╚═╝░░╚══╝
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
    fs.writeFile ("playerMale.txt", playerMale, err => {
      if (err) {
        console.log(err)
        return
      }
    })
  }

  do {
    daily()
  } while (playerMale != "Sigma Male" && inChoice == false)

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
const loadMale = fs.readFileSync("playerMale.txt", "utf8")
playerMale = loadMale
console.log('Loaded playerMale.txt')
console.log(`I am a ${playerMale} in my ${playerHouse} and have ${playerMoney} dollars with ${playerSwag}`)
daily();

do {
  daily
} while (playerMale != "Sigma Male" && inChoice == false)

}

else {
  console.log("Invalid Selection")
};

if(playerMale == "Sigma Male" && playerMoney < 1000 && playerHouse == "Apartment" && playerSwag == "Poor Gear") {
  console.log("You became a Sigma Male, but ur still uncool")
} else if(playerMoney >= 1000 && playerHouse == "Mansion" && playerSwag == "Gucci" && playerMale == "Sigma Male") {
  console.log("You became a Sigma Male and ur The Best. A Ligma Male.")
} else {
  console.log("Ur a sigma and ur decent.")
}