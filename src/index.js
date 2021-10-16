import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';



const root = document.getElementById('root');


function render() {

	ReactDOM.render(
		<React.StrictMode>
			<ProductsProvider>
				<FilterProvider>
					<App />
				</FilterProvider>
			</ProductsProvider>
		</React.StrictMode>,
		document.getElementById('root')
	);

}

if (module.hot) {
	module.hot.accept('./app/App', function () {
		setTimeout(render);
	});
}

render();


