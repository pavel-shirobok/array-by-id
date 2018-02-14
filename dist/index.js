"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collector = /** @class */ (function () {
    function Collector() {
        this._items = [];
    }
    Collector.prototype.add = function (item) {
        if (this.containsById(item.id)) {
            throw new Error("Already have item with id \"" + item.id + "\"");
        }
        if (this.contains(item)) {
            throw new Error("Already added");
        }
        this._items.push(item);
        return item;
    };
    Collector.prototype.getById = function (id) {
        return this._items[this.getIndexById(id)];
    };
    Collector.prototype.remove = function (item) {
        var iof = this.getIndex(item);
        return this._items.splice(iof, 1)[0];
    };
    Collector.prototype.removeById = function (id) {
        var iof = this.getIndexById(id);
        return this._items.splice(iof, 1)[0];
    };
    Collector.prototype.contains = function (item) {
        return this.getIndex(item) > -1;
    };
    Collector.prototype.containsById = function (id) {
        return this.getIndexById(id) > -1;
    };
    Collector.prototype.getIndexById = function (id) {
        for (var i = 0; i < this._items.length; i++) {
            if (this._items[i].id == id)
                return i;
        }
        return -1;
    };
    Collector.prototype.getIndex = function (item) {
        return this._items.indexOf(item);
    };
    Object.defineProperty(Collector.prototype, "items", {
        get: function () {
            return this._items.concat();
        },
        enumerable: true,
        configurable: true
    });
    return Collector;
}());
exports.Collector = Collector;
var ReadOnlyCollectorWrapper = /** @class */ (function () {
    function ReadOnlyCollectorWrapper(source) {
        this.source = source;
    }
    ReadOnlyCollectorWrapper.prototype.add = function (item) {
        throw new Error("Read only");
    };
    ReadOnlyCollectorWrapper.prototype.getById = function (id) {
        return this.source.getById(id);
    };
    ReadOnlyCollectorWrapper.prototype.remove = function (item) {
        throw new Error("Read only");
    };
    ReadOnlyCollectorWrapper.prototype.removeById = function (id) {
        throw new Error("Read only");
    };
    ReadOnlyCollectorWrapper.prototype.contains = function (item) {
        return this.source.contains(item);
    };
    ReadOnlyCollectorWrapper.prototype.getIndex = function (item) {
        return this.source.getIndex(item);
    };
    ReadOnlyCollectorWrapper.prototype.containsById = function (id) {
        return this.source.containsById(id);
    };
    ReadOnlyCollectorWrapper.prototype.getIndexById = function (id) {
        return this.source.getIndexById(id);
    };
    Object.defineProperty(ReadOnlyCollectorWrapper.prototype, "items", {
        get: function () {
            return this.source.items;
        },
        enumerable: true,
        configurable: true
    });
    return ReadOnlyCollectorWrapper;
}());
exports.ReadOnlyCollectorWrapper = ReadOnlyCollectorWrapper;
//# sourceMappingURL=index.js.map