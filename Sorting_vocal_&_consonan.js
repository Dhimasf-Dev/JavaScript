// Mengurutkan huruf vokal dan konsonan

var s = 'javascriptloops'
var vowels = 'aiueo'
var consonants = ''
var newvowels = ''

for(var i = 0; i<s.length; i++){
        if(vowels.includes(s[i])){
            newvowels += s[i] + '\n'
        }
        else{
            consonants += s[i] + '\n'
        }
}
console.log(newvowels);
console.log(consonants);
