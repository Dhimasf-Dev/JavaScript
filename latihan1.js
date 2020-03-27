//mendapatkan data waktu & meminta hari
var today = new Date()
var day = today.getDay()
var dayList = ['sunday, monday', 'tuesday','wednesday','thrusday','friday','saturday']
console.log(`today is : ${dayList[day]}`)
