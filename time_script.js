now = new Date();
localtime = now.toString();
utctime = now.toGMTString();

document.write("<p>The local time is: " + localtime + "</p>")

document.write("<p>The time in Greenwich is: " + utctime + "</p>")

hrs = now.getHours();
mins = now.getMinutes();
secs = now.getSeconds();
milisecs = now.getMilliseconds();

document.write("<p style='color:purple'>The time is currently: " + hrs + ":" + mins + ":" + secs + "</p>");
document.write("<p>...and " + milisecs + " milliseconds !</p>")
document.write("<p>...and " + milisecs + " milliseconds !</p>")
document.write("<p>Are those two msec numbers the same ?</p>")
