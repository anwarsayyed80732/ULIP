/**
 * A function used for converting the first letter of every word in a sentence to uppercase.
 * 
 * @param {String} sentence The sentence for which capitalization is to be performed
 * 
 * @returns A string which is a capitalized version of the input string
 *  */  
export const capitalize = (sentence) => {
  if (!sentence || sentence.length === 0) {
    return ""
  }
  const words = sentence.split(" ");

  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
};