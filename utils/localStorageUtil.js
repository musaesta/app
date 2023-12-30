class LocalStorageUtils {
	constructor() {
		this.keyname = 'products';
	}

	getProducts() {
		const productsLocalStorage = localStorage.getItem(this.keyname);
		if (productsLocalStorage !== null) {
			return JSON.parse(productsLocalStorage);
		}
		return [];
	}

	putProducts(id) {
		let products = this.getProducts();
		let pushProducts = false;
		const index = products.indexOf(id);
		if (index === -1) {
			products.push(id);
			pushProducts = true;
		} else {
			products.splice(index, 1);
		}

		localStorage.setItem(this.keyname, JSON.stringify(products));

		return { pushProducts, products };
	}
}

const localStorageUtils = new LocalStorageUtils();
