import { ItemType } from './item';

export type OrderType = {
	id: number;
	createdAt: number;
	items: ItemType[];
	status: string;
	name: string;
};
