export interface IId{
    id : string;
}

export interface ICollector<T extends IId> {
    add(item : T) : T;
    getById(id:string):T;
    remove(item:T):T;
    removeById(id : string):T;
    contains(item:T):boolean;
    getIndex(item:T):number;
    containsById(id:string):boolean;
    getIndexById(id:string):number;

    items : T[];
}

export class Collector<T extends IId> implements ICollector<T>{
    private _items : T[];

    constructor() {
        this._items = [];
    }

    add( item : T ) : T {
        if( this.containsById(item.id) ) {
            throw new Error(`Already have item with id "${item.id}"`)
        }

        if( this.contains(item) ) {
            throw new Error(`Already added`);
        }

        this._items.push(item);

        return item;
    }

    getById(id : string ) : T {
        return this._items[this.getIndexById(id)];
    }

    remove( item : T ) : T{
        let iof = this.getIndex(item);
        return this._items.splice(iof, 1)[0];
    }

    removeById(id : string ) : T {
        let iof = this.getIndexById(id);
        return this._items.splice(iof, 1)[0];
    }

    contains( item : T ) :boolean {
        return this.getIndex(item) > -1;
    }

    containsById(id : string ) : boolean{
        return this.getIndexById(id) > -1;
    }

    getIndexById(id : string ): number {
        for(let i = 0; i< this._items.length; i++){
            if( this._items[i].id == id ) return i;
        }
        return -1;
    }

    getIndex( item : T ) : number {
        return this._items.indexOf(item);
    }

    get items():T[]{
        return this._items.concat();
    }
}

export class ReadOnlyCollectorWrapper<T extends IId> implements ICollector<T> {
    constructor(private source : ICollector<T>){ }

    add(item: T): T {
        throw new Error("Read only");
    }

    getById(id: string): T {
        return this.source.getById(id);
    }

    remove(item: T): T {
        throw new Error("Read only");
    }

    removeById(id: string): T {
        throw new Error("Read only");
    }

    contains(item: T): boolean {
        return this.source.contains(item);
    }

    getIndex(item: T): number {
        return this.source.getIndex(item);
    }

    containsById(id: string): boolean {
        return this.source.containsById(id);
    }

    getIndexById(id: string): number {
        return this.source.getIndexById(id);
    }

    get items() : T[]{
        return this.source.items;
    }
}