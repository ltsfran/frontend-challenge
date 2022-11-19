export const capitalizeFirstLetter = (text: string): string => {
  const lowercaseText = text.toLowerCase()
  const words = lowercaseText.split(' ')

  return words.map((word) => {
    return (word[0] ?? '').toUpperCase() + word.substring(1)
  }).join(' ')
}
