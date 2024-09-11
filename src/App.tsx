import {
	Container,
	createTheme,
	CssBaseline,
	ThemeProvider,
} from '@mui/material';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css';
import ViewOrders from './pages/ViewOrders';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ViewOrder from './pages/ViewOrder';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <ViewOrders />,
	},
	{
		path: '/orders/:id',
		element: <ViewOrder />,
	},
]);

function App() {
	return (
		<HelmetProvider>
			<Helmet defaultTitle='Order Fulfillment App' />
			<ThemeProvider theme={darkTheme}>
				<Container maxWidth={false}>
					<CssBaseline />
					<RouterProvider router={router} />
				</Container>
			</ThemeProvider>
		</HelmetProvider>
	);
}

export default App;
