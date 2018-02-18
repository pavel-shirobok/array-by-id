import {ArrayById, IId} from "../src";

interface Data extends IId{
    data : string;
}
let arrayById = new ArrayById<Data>();

arrayById.add({id : "a", data : "A - data"});
arrayById.add({id : "b", data : "B - data"});

console.log(arrayById.getById("a").data);//A - data
console.log(arrayById.containsById("a"));//true
console.log(arrayById.getById("b").data);//B - data
console.log(arrayById.containsById("b"));//true
console.log(arrayById.containsById("c")); //false

arrayById.removeById("a");
arrayById.removeById("b");