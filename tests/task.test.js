const {calculateDiscount, filterProducts, sortInventory} = require('../task.js');

//Test for calculateDiscount function
describe ("calculateDiscount function", () => {
    test("should display new cost with the discount applied.", () => {
        expect(calculateDiscount(100, 0.50)).toBe(50);
    })

    test("should keep the same initial value with a 0% discount.", () => {
        expect(calculateDiscount(100, 0)).toBe(100);
    })

    test("should return 'null' if the discount rate is less than 0", () => {
        expect(calculateDiscount(100, -.5)).toEqual(null);
    })
})

describe ("filterProducts function", () => {
    test("should filter products with the key word 'samsung'", () => {
        expect(filterProducts(['samsung tv', 'iphone', 'samsung galaxy'], (element) => element.includes('samsung'))).toEqual(['samsung tv', 'samsung galaxy']);
    })

    test("should filter products with the key word 'samsung; regardless of case", () => {
        expect(filterProducts(['samsung tv', 'iphone', 'Samsung galaxy'], (element) => element.includes('samsung'))).toEqual(['samsung tv', 'samsung galaxy']);
    })

    test("should return '[]' when the input is not an array", () => {
        expect(filterProducts('samsung galaxy', (element) => element.includes('samsung'))).toEqual([]);
    })
})

describe ("sortInventory function", () => {
    test("should sort products alphebetically with the key word 'samsung'", () => {
        expect(sortInventory(['samsung tv', 'iphone', 'samsung galaxy'], 'samsung')).toEqual(['samsung galaxy', 'samsung tv']);
    })

    test("should sort products with the key word 'samsung; regardless of case", () => {
        expect(sortInventory(['samsung tv', 'iphone', 'Samsung galaxy'], 'samsung')).toEqual(['samsung galaxy', 'samsung tv']);
    })

    test("should return '[]' when the input is not an array", () => {
        expect(sortInventory('samsung galaxy', 'samsung')).toEqual([]);
    })
})