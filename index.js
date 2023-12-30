function render() {
	const productsStore = localStorageUtils.getProducts();
	headerPage.render(productsStore.length);
	productsPage.render();
}

spinner.render();

let CATALOG = [];

fetch('server/catalog.json')
	.then(res => res.json())
	.then(body => {
		CATALOG = body;
		setTimeout(() => {
			render();
			spinner.handleClear();
		}, 1000);
	})
	.catch(() => {
		spinner.handleClear();
		errorPage.render();
	});
