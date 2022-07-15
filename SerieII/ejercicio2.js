function changeMoney(money) {
  let coins = [1, 2, 5, 10, 20, 50]
  let arrayback = [0, 0, 0, 0, 0, 0]

  while (money > 0) {
    for (let i = coins.length - 1; i > -1; i--) {
      if (coins[i] <= money) {
        money -= coins[i]
        arrayback.splice(i, 1, arrayback[i]+1)
        break
      }
    }
  }
  return arrayback
}

console.log(changeMoney(51))
console.log(changeMoney(3))
console.log(changeMoney(5))
console.log(changeMoney(16))
console.log(changeMoney(100))