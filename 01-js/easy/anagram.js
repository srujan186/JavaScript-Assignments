/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function isAnagram(str1, str2) {

  function sortString(str) {
      console.log("Sorting:", str);   // 👈 SEE function running
      return str.toLowerCase().split('').sort().join('');
  }

  if (str1.length !== str2.length) {
      return false;
  }

  return sortString(str1) === sortString(str2);
}

console.log(isAnagram("Fried", "Fired"));
;
//