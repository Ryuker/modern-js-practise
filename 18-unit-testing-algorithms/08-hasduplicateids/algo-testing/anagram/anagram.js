function anagram(str1, str2) {
  const aCharMap = buildCharMap(str1);
  const bCharMap = buildCharMap(str2);

  // We have an anagram if
  // 1. The words are the same length
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  // 2. The words contain the same letters and have the same number of occurences
  for (let char in aCharMap) {
    // check if any other letters appear in the word and have the same occurences value
    if (aCharMap[char] !== bCharMap[char]) {
      return false; 
    }
  }

  // The words are the same length, contain the same letters with the same occurences
  return true;
}

// This returns an object with the count of the occurences of the letters in the string
function buildCharMap(str) {
  const charMap = {};
  
  for(let char of str.toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

module.exports = anagram;