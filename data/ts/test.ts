
const myRequest = new Request("../words2.txt");
let array: string[] = [];
/*
fetch(myRequest)
    .then((response) => response.json())
    .then((data) => {
    
    console.log("when is fetch called\n" + data.words);
    array = data.words;
    })
    .then(function(){createList()});
*/
fetch(myRequest)
    .then((res) => res.text())
    .then((data) => array = data.trim().split("\n"))
    .then(()=> createList() );
//var list = document.getElementById("#words_list");
//console.log("list: " + list);
//entry.append(document.createTextNode("gwen"));
function createList(){
    
    console.log("the array: " + array);     
    console.log("is this being called");
    var list = $("#words_list");
    for (const word of array){
        console.log("word: " + word);
         $("#words_list").append($("<li>").text(word));

    }
}

/*
    function getWords(obj){
    for (const word of obj.words){
    array.push(word);
    }
};
*/

/*
 * get list element
 * create an li element to append to
 * append text to list element
 * append li element to list
*/
console.log("test");
 "use strict";
console.log("test2");
   $("#click").on("click",function () {
       console.log("clicked2");
       alert("Glorp was clicked.");
  });
$("#Tennyson").on("click",function () {
    console.log("clicked");
    createList();
    // alert(array);
});

