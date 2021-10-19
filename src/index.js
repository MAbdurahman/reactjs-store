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
			<Auth0Provider
				domain={process.env.REACT_APP_AUTH_DOMAIN}
				clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
				redirectUri={window.location.origin}
				cacheLocation='localstorage'
			>
				<ProductsProvider>
					<FilterProvider>
						<CartProvider>
							<App />
						</CartProvider>
					</FilterProvider>
				</ProductsProvider>
			</Auth0Provider>
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
