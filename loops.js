function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.") 
    }
    else {
      array.push("I am ${i} strange loops")    
    }
  }
  return array
}

function whileLoop(number){
  let countdown=number
  while(countdown > 0){
    console.log(--countdown)
  }
  return "done"
}
function magicMushroom(){
  return Math.random() >= 0.5
}
function doWhileLoop(array){
  do {
    console.log('LSD')
  } while (array.length > 0 && magicMushroom()){
    array.pop()
  }
  return array
}
