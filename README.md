[![Build status](https://ci.appveyor.com/api/projects/status/knf91k7tp7457ltt?svg=true)](https://ci.appveyor.com/project/ramshteks/array-by-id) 
# Revolution in working with the arrays

Simple wrapper for working with array of object with the id field

### Install
`npm i array-by-id`

### Example (./examples/simple.ts)
 ```
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
 ```