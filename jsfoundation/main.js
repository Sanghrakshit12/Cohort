function isAnagram(str1, str2) {
    const alpha = new Array(26).fill(0);
  

    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();



    for (let i = 0; i < str1.length; i++) {
        let c = str1[i];
        if (c.charCodeAt() >= 65 && c.charCodeAt() <= 90) {
            alpha[c.charCodeAt()-65]++
        }
    }
 
    for (let i = 0; i < str2.length; i++) {
        let c = str2[i];
        if (c.charCodeAt() >= 65 && c.charCodeAt() <= 90) {
            alpha[c.charCodeAt()-65]++
        }
    }
    for (let i = 0; i < 26; i++) {
        console.log(alpha[i]);
    }



    for (let i = 0; i < 26; i++) {
        if (alpha[i]%2!=0) {
            return false;
        }
    }
    return true;
}

console.log(isAnagram('Debit Card', 'Bad Credit'));