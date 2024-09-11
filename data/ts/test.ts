const myRequest = new Request("../words.json");
const array: string[] = [];
fetch(myRequest)
  .then((response) => response.json())
  .then((data) => {
    for (const word of data.words){
    array.push(word);
    };
  });


console.log("test");
 "use strict";
console.log("test2");
   $("#click").on("click",function () {
       console.log("clicked2");
       alert("Glorp was clicked.");
  });
$("#Tennyson").on("click",function () {
    console.log("clicked");
    alert(array);
});

