// There’s a game, “takeaway”, that is played by two players, using a number of stones.
// The first player goes first. She can take 2, 3, or 5 stones from the pool. 
//The second player goes next; she can also remove 2, 3, or 5 stones. 
//The first player then goes, and so on.
// If a player is unable to move (there are fewer than 2 stones), they lose.
//Imagine that both players have “perfect play” — that is, they always make the best possible move


//simple math solution
// const canWin = num =>{
//   return console.log(num % 7 > 1)
// }

//recursion means you have some sort of exit condition and until that is met you continue to call you recursion function 
//this solution is O(n) bcs it will try every possible solution before spitting out the answer 
//recursion solution
const canWin = num =>{
  if (n< 2){
    return false
  }

  return canWin(n-2) ===false || canWin(n-3) ===false || canWin(n-5) ===false
}

//for canWin 10 
//is 10 < 2 ? its not so it moves on
//is 8 < 2 ?
//is 6> 2 ?
//all the way to 0

canWin(1)
// false

canWin(2)
// true

canWin(3)
// true

canWin(4)
// true

canWin(5)
// true

canWin(6)
// true

canWin(7)
// false

canWin(8)
// false

canWin(9)
// true

canWin(10)
// true

