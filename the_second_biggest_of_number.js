// Mencari angka terbesar ke-2
nums = [3,1,5,7,2,6]
   
var first = nums[0] 
var second = nums[0] 

// Melakukan looping untuk mencek satupersatu angka
for (var i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
        //Jika TRUE akan fungsinnya
        second = first; // 3 3 3 5 
        first = nums[i] // 3 3 5 7 (6)
    }

    if (nums[i] > second && nums[i] < first) {
        //Jika TRUE akan fungsinnya
        second = nums[i];
    }
}
console.log(second)