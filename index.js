function iterativeLog(array){
  array.forEach( (element, index, array) => {console.log(`${index}:${element}`) })
}

log = ["Kim", "Than", "Is", "Fat"]

iterativeLog(log)
