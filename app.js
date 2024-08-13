
let seconds = parseInt(prompt("Kindly enter a number"));

 seconds = parseInt(seconds);

let hours = Math.floor(seconds / 3600);

seconds %=3600;

let minutes = Math.floor(seconds / 60)

seconds %= 60

alert(hours + "hrs :" + minutes + "mins : " + seconds + "secs")