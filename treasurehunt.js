// Function for Treasurehunt
//
// alert("Hey I'm here")

var treasureLocation = Math.floor(Math.random() * 8)
console.log(treasureLocation)
//alert (`${treasureLocation}`)

var bombLocation = Math.floor(Math.random() * 8)
console.log(bombLocation)
//alert (`${bombLocation}`)

if (treasureLocation === bombLocation){
  bombLocation = Math.floor(Math.random() * 8)
}

console.log(treasureLocation, bombLocation)

// if treasureLocation = id then "you win"
// else if bombLocation = id then "you lose"
// else if treasureLocation != id and bombLocation != id, "keep digging"

// function treasure(id) {
//     if(treasureLocation === id) {
//       alert ("Bingo")
//     } else if (bombLocation === id) {
//       alert ("You lose")
//     } else if (treasureLocation !== id && bombLocation !== id) {
//       alert ("Keep Digging")
//     }
//   }

  function treasure (id) {
    if(treasureLocation === id) {
    return document.getElementByID(id).innerHTML = ':rainbow:'
      alert ("You won")
    } else if (bombLocation === id){
    return document.getElementByID(id).innerHTML = '&#x2620'
      alert ("Sorry You Loose")
    } else if (treasureLocation !== id && bombLocation !== id) {
      alert ("Keep Trying")
    }
    // } else if (id = 1 && treasureLocation = 1) {
    //   alert ("Bingo")
    // } else if (id = 2 && treasureLocation === 2) {
    //   alert ("Bingo")
    // } else if (id && treasureLocation === 3) {
    //   alert ("Bingo")
    // } else if (id && treasureLocation === 4) {
    //   alert ("Bingo")
    // } else if (id && treasureLocation === 5) {
    //   alert ("Bingo")
    // } else if (id && treasureLocation === 6) {
    //   alert ("Bingo")
    // } else if (id && treasureLocation === 7) {
    //   alert ("Bingo")
    // } else if (id && treasureLocation === 8) {
    //   alert ("8")
    // }

}
