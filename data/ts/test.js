import words from "../../words.json"

"use strict";
console.log("test");
"use strict";
console.log("test2");
$("#click").click(function () {
    console.log("clicked2");
    alert("Glorp was clicked.");
});
$("#Tennyson").click(function () {
    console.log(words);
    alert("Gwen was clicked.");
});
