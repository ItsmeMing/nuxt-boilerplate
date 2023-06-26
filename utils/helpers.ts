export const capitalizeFirstLetter = (str: string, splitRegex: RegExp) => {
  const arr = str.split(splitRegex)
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  return arr.join(' ')
}

export const acceptAlphabeticalInputOnly = (event: KeyboardEvent) => {
  if (/^[A-Za-z,]+$/.test(event.key)) return true // Match with regex
  else event.preventDefault() // If not match, don't add to input text
}
