// Code your solution here
function findMatching(arr, search) {
  return (arr.filter((element) =>
    element.toLowerCase() === search.toLowerCase()
  ))
}

function fuzzyMatch(arr, search) {
  // console.log(arr, search)
  // return (arr.filter((element) => element[0] === search[0])) // does not take into account if second letter doesn't match
  // console.log(arr.filter((element) => console.log(element.find(search))))
  // if (element.find(search)) {
  //   return element
  // } // keeping these attempts
  return arr.filter(el => el.indexOf(search) === 0)
}

function matchName(drivers, string) {
  return drivers.filter(el => {
    return "ARR", el.name.toLowerCase() === string.toLowerCase()
  })
}


