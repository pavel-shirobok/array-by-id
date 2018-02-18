import {ArrayById} from "../src";

describe("ArrayById", ()=>{
    let coll : ArrayById<{id:string}>;
    beforeEach(()=>{
        coll = new ArrayById();
    });
    
    it("should add item", ()=>{
        coll.add({id:"a"});
        expect(coll.containsById("a"));
    });
    
    it("should be protected from duplicated items", ()=>{
        let item =  coll.add({id : "a"});
        
        
        let add = ()=>coll.add({id : "a"});
        let add2 = ()=>coll.add(item);
        
        expect(add).toThrow();
        expect(add2).toThrow();
    });
    
    it("should check contains", ()=>{
        let item = coll.add({id: "a"});
        
        expect(coll.containsById(item.id)).toBeTruthy();
        expect(coll.contains(item)).toBeTruthy();
    });
    
    it("should unsubscribe item", ()=>{
        let item = coll.add({id:"a"});
        let item2  = coll.add({id : "b"});
        coll.remove(item);
        coll.remove(item2);
        
        expect(coll.contains(item)).toBeFalsy();
        expect(coll.contains(item2)).toBeFalsy();
    });
});