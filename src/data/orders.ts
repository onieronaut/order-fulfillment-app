import { OrderType } from '../types/order';

export const ORDERS: OrderType[] = [
	{
		id: 1,
		createdAt: 1234,
		name: 'john',
		items: [
			{ name: 'Banana', id: 1, quantity: 5, status: 'x' },
			{ name: 'Apples', id: 2, quantity: 3, status: 'x' },
		],
		status: 'pending',
	},
	{
		id: 2,
		createdAt: 1234,
		name: 'james',
		items: [
			{ name: 'Banana', id: 1, quantity: 5, status: 'x' },
			{ name: 'Apples', id: 2, quantity: 3, status: 'x' },
		],
		status: 'pending',
	},
];
