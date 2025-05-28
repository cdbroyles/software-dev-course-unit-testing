function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    // TODO: Implement logic
    let discountPrice = price * (1-discountRate);
    return discountPrice;
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    // TODO: Implement filtering logic
    let lowerCaseProducts = [];
    for (let product of products) {
        lowerCaseProducts.push(product.toLowerCase());
    }
    filteredProducts = lowerCaseProducts.filter(callback);
    return filteredProducts;
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    // TODO: Implement sorting logic
    let filteredProducts = filterProducts(inventory, (item) => item.includes(key));
    sortedInventory = filteredProducts.sort();
    return sortedInventory;
}

module.exports = {calculateDiscount, filterProducts, sortInventory};