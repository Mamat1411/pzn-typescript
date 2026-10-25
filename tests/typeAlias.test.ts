import type { Category, Product } from "../src/typeAlias.js";

describe('Type Alias', () => {
    it('should support Type Alias', function () {
        const category: Category = {
            id: 1,
            name: "PC"
        }

        const pc: Product = {
            id: "1",
            name: "Asus ROG",
            price: 20000000,
            category: category
        }

        console.info(category);
        console.info(pc);
    })
})