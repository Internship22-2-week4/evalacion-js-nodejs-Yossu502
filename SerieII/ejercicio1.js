
function changeName(indexList, name) {
  if (indexList.length === 0) {
    newList.push(name)
  }else{
    for (let index = 0; index < indexList.length; index++) {
      if (index === 0) {
        newList.push(name)
      }else{
        let newName = `${name}(${index})`
        newList.push(newName)
      }
    }
  }

}

let nameList = ['photo', 'postcard', 'photo', 'photo', 'video']
let index = []
let newList = []

while (nameList.length > 0) {
  let nameVerify = nameList.shift()
  let position = nameList.indexOf(nameVerify)
  if (position != -1) {
    while (position != -1){
      nameList.splice(position, 1)
      index.push(position)
      position = nameList.indexOf(nameVerify)
    }
    changeName(index, nameVerify)
  }else{
    newList.push(nameVerify)
  }
}
console.log(newList);




