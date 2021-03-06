import React from 'react';
import { useFilterContext } from '../context/filter_context';
import { useProductsContext } from '../context/products_context';
import GridView from './GridView';
import ListView from './ListView';

import Loading from './Loading';
import Error from './Error';

const ProductList = () => {
	const { filtered_products: products, grid_view } = useFilterContext();
	const { products_loading: loading, products_error: error } = useProductsContext();

	if (loading) {
		return <Loading />
	}
	if (error) {
		return <Error />
	}

	if (products && products.length < 1) {
		return (
			<h5 style={{ textTransform: 'none' }}>
				Sorry, no products matched your search...
			</h5>
		);
	}

	if (grid_view === false) {
		return <ListView products={products} />;
	}
	return <GridView products={products}>product list</GridView>;
};

export default ProductList;
