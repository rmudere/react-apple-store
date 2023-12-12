import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import {productItems} from "./mock-data/products.js"



export async function getProducts(query) {
    let products = productItems;
    if (!products) products = [];
    if (query) {
        products = matchSorter(products, query, { keys: ["name", "color"] });
    }
    return products;
}

export async function getProduct(id) {
    let contact = productItems.find(contact => contact.id === id);
    return contact ?? null;
}


