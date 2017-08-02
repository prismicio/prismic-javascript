/**
 * A doubly linked list-based Least Recently Used (LRU) cache. Will keep most
 * recently used items while discarding least recently used items when its limit
 * is reached.
 *
 * Licensed under MIT. Copyright (c) 2010 Rasmus Andersson <http://hunch.se/>
 * Typescript-ified by Oleksandr Nikitin <https://tvori.info>
 *
 * Illustration of the design:
 *
 *       entry             entry             entry             entry
 *       ______            ______            ______            ______
 *      | head |.newer => |      |.newer => |      |.newer => | tail |
 *      |  A   |          |  B   |          |  C   |          |  D   |
 *      |______| <= older.|______| <= older.|______| <= older.|______|
 *
 *  removed  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  added
 */
export interface Entry {
    newer?: Entry;
    older?: Entry;
    key: string;
    value: any;
}
export declare class LRUCache {
    limit: number;
    size: number;
    private keymap;
    private head?;
    private tail?;
    constructor(limit: number);
    /**
     * Put <value> into the cache associated with <key>. Returns the entry which was
     * removed to make room for the new entry. Otherwise undefined is returned
     * (i.e. if there was enough room already).
     */
    put(key: string, value: any): Entry | undefined;
    /**
     * Purge the least recently used (oldest) entry from the cache. Returns the
     * removed entry or undefined if the cache was empty.
     *
     * If you need to perform any form of finalization of purged items, this is a
     * good place to do it. Simply override/replace this function:
     *
     *   var c = new LRUCache(123);
     *   c.shift = function() {
     *     var entry = LRUCache.prototype.shift.call(this);
     *     doSomethingWith(entry);
     *     return entry;
     *   }
     */
    shift(): Entry | undefined;
    /**
     * Get and register recent use of <key>. Returns the value associated with <key>
     * or undefined if not in cache.
     */
    get(key: string, returnEntry: boolean): any;
    /**
     * Check if <key> is in the cache without registering recent use. Feasible if
     * you do not want to chage the state of the cache, but only "peek" at it.
     * Returns the entry associated with <key> if found, or undefined if not found.
     */
    find(key: string): Entry;
    /**
     * Update the value of entry with <key>. Returns the old value, or undefined if
     * entry was not in the cache.
     */
    set(key: string, value: any): any;
    /**
     * Remove entry <key> from cache and return its value. Returns undefined if not
     * found.
     */
    remove(key: string): any;
    /** Removes all entries */
    removeAll(): void;
    /**
     * Return an array containing all keys of entries stored in the cache object, in
     * arbitrary order.
     */
    keys(): string[];
    /**
     * Call `fun` for each entry. Starting with the newest entry if `desc` is a true
     * value, otherwise starts with the oldest (head) enrty and moves towards the
     * tail.
     *
     * `fun` is called with 3 arguments in the context `context`:
     *   `fun.call(context, Object key, Object value, LRUCache self)`
     */
    forEach(fun: Function, context: any, desc: boolean): void;
    /** Returns a String representation */
    toString(): string;
}
