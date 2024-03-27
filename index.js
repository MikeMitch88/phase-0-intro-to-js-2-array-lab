// Write your solution here!
const cats = [`Milo`, `Otis`,`Garfield`];
function destructivelyAppendCat(){
    cats.push("Ralph");
}
function destructivelyPrependCat(){
cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(){
const Newcats = [...cats,"Broom"];
return Newcats;
}
function prependCat(){
    const Newcats = ["Arnold",...cats];
    return Newcats;
}function removeLastCat(){
    return cats.slice(0,2);
}
function removeFirstCat(){
    return cats.slice(1,3);
}
