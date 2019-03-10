function getFirstSelector(selector){
 const element = document.querySelector(selector);
 return element
}



function nestedTarget(){
  return document.querySelector("#nested").querySelector(".target")
}


function deepestChild(){
 return document.querySelector("#grand-node div div div div")
};


function increaseRankBy(n){
  const li = document.querySelectorAll(".ranked-list"); 
  for (let i=0; i<li.length; i++){
    li[i].innerHTML = (i + 1).toString()
  }
}


