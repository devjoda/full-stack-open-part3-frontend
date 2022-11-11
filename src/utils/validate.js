const arrayDoesNotContainObjectWithProperty = (
  array,
  property,
  compareString,
  errorMessage
) => {
  return new Promise((resolve, reject) => {
    const isDuplicate = array.some(
      o => o[`${property}`].toLowerCase() === compareString.toLowerCase()
    )
    if (isDuplicate) {
      reject(errorMessage)
    } else {
      resolve(true)
    }
  })
}

export {arrayDoesNotContainObjectWithProperty}
