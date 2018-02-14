export interface IId {
    id: string;
}
export interface ICollector<T extends IId> {
    add(item: T): T;
    getById(id: string): T;
    remove(item: T): T;
    removeById(id: string): T;
    contains(item: T): boolean;
    getIndex(item: T): number;
    containsById(id: string): boolean;
    getIndexById(id: string): number;
    items: T[];
}
export declare class Collector<T extends IId> implements ICollector<T> {
    private _items;
    constructor();
    add(item: T): T;
    getById(id: string): T;
    remove(item: T): T;
    removeById(id: string): T;
    contains(item: T): boolean;
    containsById(id: string): boolean;
    getIndexById(id: string): number;
    getIndex(item: T): number;
    readonly items: T[];
}
export declare class ReadOnlyCollectorWrapper<T extends IId> implements ICollector<T> {
    private source;
    constructor(source: ICollector<T>);
    add(item: T): T;
    getById(id: string): T;
    remove(item: T): T;
    removeById(id: string): T;
    contains(item: T): boolean;
    getIndex(item: T): number;
    containsById(id: string): boolean;
    getIndexById(id: string): number;
    readonly items: T[];
}
