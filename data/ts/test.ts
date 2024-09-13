
const myRequest = new Request("../words.tsv");
let allWords: string[][] = [];
const lists: number[] = [5,7,5];
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
    .then((data) => { 
        const rows = data.trim().split("\n"); 
        const columns = rows.map(row => row.split("\t"));
        console.log(columns);
        allWords = columns;
    })
    .then(()=> {
        
        listMaker(lists);
        for(const arr of allWords){
            
            //createList(arr);
        }
    }
    );
//var list = document.getElementById("#words_list");
//console.log("list: " + list);
//entry.append(document.createTextNode("gwen"));

function listMaker(array: number[]){
    var listContainer = $("#words_ct");
    for(const arr in array){
        var list =$(`<ol class=wordList id=test${arr}>`);
        console.log(arr)
        listContainer.append(list); 
        const size = array[arr];
        let i = 0;
        while(i < size){
            list.append($("<li>").text(allWords[0][Math.floor(Math.random() * allWords[0].length)]));
            i++;
        }
        
        console.log(listContainer);
    }
};






function createList(array: string[]){
    
    console.log("the array: " + array);     
    var list = $("#words_list");
    for (const word of array){
        //console.log("word: " + word);
        list.append($("<li>").text(word));

    }
};


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
    // alert(array);
    listMaker(lists);
});

