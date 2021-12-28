import { IconButton } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import useAuth from '../../../hooks/useAuth';
const ManageOrders = () => {
	const { client, admin } = useAxios();
	const { user } = useAuth();
	const { enqueueSnackbar } = useSnackbar();
	const [manageOrders, setManageOrders] = useState([]);
	const [status, setStatus] = useState(false);
	useEffect(() => {
		client.get('/allorders').then((response) => {
			setManageOrders(response.data);
		});
	}, [user.email, status]);
	const handleDeleteOrder = (id) => {
		const proceed = window.confirm(
			'are you sure, you want to cancel your order?'
		);
		if (proceed) {
			client.delete(`order/${id}`).then((response) => {
				if (response.data.deletedCount > 0) {
					enqueueSnackbar('order cancelled successfully');
					const remaining = manageOrders.filter(
						(order) => order._id !== id
					);
					setManageOrders(remaining);
				}
			});
		}
	};
	//update status to shipping
	const handleStatusUpdate = (id) => {
		admin.put(`allorders/${id}`).then((response) => {
			if (response.data.modifiedCount > 0) {
				enqueueSnackbar('status updated');
				setStatus(true);
			}
		});
	};
	return (
		<div className='overflow-hidden'>
			<h1 className='text-white text-left'>User Order Info</h1>
			<div className='flex flex-col'>
				<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
						<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
							<table className='min-w-full divide-y divide-white'>
								<thead className='bg-gray-300'>
									<tr>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
										>
											Name
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
										>
											Date
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
										>
											Address/Phone
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
										>
											Order_ID
										</th>

										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
										>
											Status
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
										>
											Action
										</th>
									</tr>
								</thead>
								<tbody className='bg-gray-300 divide-y divide-white'>
									{manageOrders.map((person) => (
										<tr key={person?._id}>
											<td className='py-4 whitespace-nowrap'>
												<div className='flex items-center'>
													<div className='ml-4'>
														<div className='text-left text-sm font-medium text-white'>
															{person.name}
														</div>
														<div className='text-left text-sm text-white'>
															{person.email}
														</div>
													</div>
												</div>
											</td>
											<td className='py-4 whitespace-nowrap'>
												<div className=' text-left text-sm text-white'>
													{person.date}
												</div>
											</td>
											<td className='py-4 whitespace-nowrap'>
												<div className='flex items-center'>
													<div className='ml-4'>
														<div className='text-left text-sm font-medium text-white'>
															+{person.phone}
														</div>
														<div className='text-left text-sm text-white'>
															{person.address}
														</div>
													</div>
												</div>
											</td>
											<td className='py-4 whitespace-nowrap'>
												<div className='flex items-center'>
													<div className='ml-4'>
														<div className='text-left text-sm font-medium text-white'>
															{person._id}
														</div>
													</div>
												</div>
											</td>
											<td className='px-5 text-left py-4 whitespace-nowrap'>
												<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-white'>
													{person.status}
												</span>
											</td>
											<td className='px-5 text-left py-4 whitespace-nowrap'>
												<IconButton
													onClick={() =>
														handleStatusUpdate(
															person._id
														)
													}
													sx={{ p: 0 }}
												>
													<CheckBoxIcon
														sx={{ color: 'green' }}
													/>
												</IconButton>
												<IconButton
													onClick={() =>
														handleDeleteOrder(
															person._id
														)
													}
													sx={{ p: 0 }}
												>
													<DeleteIcon
														sx={{ color: 'red' }}
													/>
												</IconButton>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<h1 className='text-white text-right'>
				<span>
					shipping: <CheckBoxIcon sx={{ color: 'green' }} />
				</span>
				<span>
					Delete Order: <DeleteIcon sx={{ color: 'red' }} />
				</span>
			</h1>
		</div>
	);
};

export default ManageOrders;
