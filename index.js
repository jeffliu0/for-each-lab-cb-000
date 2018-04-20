function iterativeLog(array){
  array.forEach( (element, index, array) =>
  {
    console.log(`${index}: ${element}`)
  }
)

}

function iterate(callback)
{
  list = ['Kim', 'is', 'fat']
  list.forEach(callback)
  return list
}

function doToAray(array, callback){
  array.forEach(callback)
}
