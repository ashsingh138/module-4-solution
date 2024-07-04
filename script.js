// Array of names
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Loop over the names array and print hello or goodbye
for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
        goodbyeSpeaker.speak(names[i]);
    } else {
        helloSpeaker.speak(names[i]);
    }
}
