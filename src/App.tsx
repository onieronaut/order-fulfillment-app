import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
	Button,
	Container,
	createTheme,
	CssBaseline,
	ThemeProvider,
} from '@mui/material';
import Orders from './pages/Orders';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
	return (
		<HelmetProvider>
			<Helmet defaultTitle='Order Fulfillment App' />
			<ThemeProvider theme={darkTheme}>
				<Container maxWidth={false}>
					<CssBaseline />
					<Orders />
				</Container>
			</ThemeProvider>
		</HelmetProvider>
	);
}

export default App;
