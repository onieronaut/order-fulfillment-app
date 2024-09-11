import React from 'react';
import { Header } from '../components/Header';
import { useParams } from 'react-router-dom';
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	Grid2,
	Typography,
} from '@mui/material';
import { ORDERS } from '../data/orders';
import { TextDisplay } from '../components/TextDisplay';

interface ViewOrderPropsType {}

const ViewOrder = ({}: ViewOrderPropsType) => {
	const { id } = useParams();

	const order = ORDERS.find((data) => id === data.id.toString());

	return (
		<>
			<Header name={`Order #${order?.id}`} routes={[]} />
			<Grid2 container spacing={2}>
				<Grid2 size={12}>
					<Card>
						<CardHeader title='Order Information' />
						<CardContent>
							<Grid2 container spacing={2}>
								<Grid2 size={3}>
									<TextDisplay
										value={order?.name}
										variant='outlined'
										label='Name'
										fullWidth
									/>
								</Grid2>
								<Grid2 size={3}>
									<TextDisplay
										value={order?.createdAt}
										variant='outlined'
										label='Date'
										fullWidth
									/>
								</Grid2>
								<Grid2 size={3}>
									<TextDisplay
										value={order?.status}
										variant='outlined'
										label='Status'
										fullWidth
									/>
								</Grid2>
							</Grid2>
						</CardContent>
					</Card>
				</Grid2>
				<Grid2 size={4}>
					<Card>
						<CardHeader title='Items' />
						{order?.items.map((item) => (
							<CardContent>
								<Grid2 container spacing={3}>
									<Grid2>
										<TextDisplay
											value={item.name}
											fullWidth
											size='small'
											label='Name'
											variant='outlined'
										/>
									</Grid2>
									<Grid2>
										<TextDisplay
											value={item.quantity}
											fullWidth
											size='small'
											label='Quantity'
											variant='outlined'
										/>
									</Grid2>
								</Grid2>
							</CardContent>
						))}
					</Card>
				</Grid2>
				<Grid2 size={8}>
					<Card>
						<CardHeader
							title='Packages'
							action={<Button variant='contained'>Create Package</Button>}
						/>
					</Card>
				</Grid2>
			</Grid2>
		</>
	);
};

export default ViewOrder;
