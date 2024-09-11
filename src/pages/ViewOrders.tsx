import React from 'react';
import { Header } from '../components/Header';
import {
	Button,
	Grid2,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { OrderType } from '../types/order';
import { useNavigate } from 'react-router-dom';
import { ORDERS } from '../data/orders';

interface ViewOrdersPropsType {}

const ViewOrders = ({}: ViewOrdersPropsType) => {
	const navigate = useNavigate();

	const columnHelper = createColumnHelper<OrderType>();

	const columns = [
		columnHelper.display({
			id: 'actions',
			cell: (props) => (
				<Button
					size='small'
					variant='contained'
					color='primary'
					onClick={() => navigate(`/orders/${props.row.original.id}`)}>
					Fulfill
				</Button>
			),
		}),
		columnHelper.accessor('id', {
			header: () => <span>ID</span>,
		}),
		columnHelper.accessor('name', {
			header: () => <span>Name</span>,
		}),
		columnHelper.accessor('status', {
			header: () => <span>Status</span>,
		}),
		columnHelper.accessor('items', {
			header: () => <span>Items</span>,
			cell: (info) => info.getValue().length,
		}),
	];

	const table = useReactTable({
		columns,
		data: ORDERS,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<>
			<Grid2 container spacing={3}>
				<Grid2>
					<Header name='Orders' routes={[]} />
				</Grid2>
				<Grid2 size={12}>
					<Table>
						<TableHead>
							{table.getHeaderGroups().map((headerGroup) => (
								<TableRow key={headerGroup.id}>
									{headerGroup.headers.map((header) => (
										<TableCell key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
												  )}
										</TableCell>
									))}
								</TableRow>
							))}
						</TableHead>
						<TableBody>
							{table.getRowModel().rows.map((row) => (
								<TableRow key={row.id}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Grid2>
			</Grid2>
		</>
	);
};

export default ViewOrders;
