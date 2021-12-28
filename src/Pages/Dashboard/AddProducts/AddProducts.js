import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAxios from '../../../hooks/useAxios';
const AddProducts = () => {
	const { register, handleSubmit, reset } = useForm();
	const { client } = useAxios();
	const { enqueueSnackbar } = useSnackbar();
	const onSubmit = (data) => {
		client.post('/addproducts', data).then((response) => {
			if (response.data.insertedId) {
				enqueueSnackbar('ordered successfully');
				reset();
			}
		});
	};
	return (
		<div>
			<h1 className='text-3xl uppercase text-white mb-5'>
				Add New Products
			</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='bg-gray-100 flex flex-col'>
					<div className='flex justify-center text-center p-3'>
						<input
							type='text'
							name='name'
							id='name'
							placeholder='Product Name'
							{...register('name', { required: true })}
							className='border border-3 border-white rounded-md p-3 text-white mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-80 block shadow-sm sm:text-sm '
							style={{ background: '#202020' }}
						/>
					</div>
					<div className='flex justify-center text-center p-3'>
						<input
							type='text'
							name='img'
							id='img'
							placeholder='Product Image Link'
							{...register('img', { required: true })}
							className='border border-3 border-white rounded-md p-3 text-white mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-80 block shadow-sm sm:text-sm '
							style={{ background: '#202020' }}
						/>
					</div>
					<div className='flex justify-center text-center p-3'>
						<input
							type='text'
							name='Description'
							id='Description'
							rows={5}
							placeholder='Product Description'
							{...register('Description', { required: true })}
							className='border border-3 border-white rounded-md p-3 text-white mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-80 block shadow-sm sm:text-sm '
							style={{ background: '#202020' }}
						/>
					</div>
					<div className='flex justify-center text-center p-3'>
						<input
							type='text'
							name='Price'
							id='Price'
							placeholder='Product Price'
							{...register('price', { required: true })}
							className='border border-3 border-white rounded-md p-3 text-white mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-80 block shadow-sm sm:text-sm '
							style={{ background: '#202020' }}
						/>
					</div>
					<div className='flex justify-center text-center p-3'>
						<input
							type='number'
							name='rate'
							id='Rate'
							placeholder='Product Rating'
							{...register('rate', { required: true })}
							className='border border-3 border-white rounded-md p-3 text-white mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-80 block shadow-sm sm:text-sm '
							style={{ background: '#202020' }}
						/>
					</div>
					<div className='flex justify-center text-center p-3'>
						<Button
							type='submit'
							variant='contained'
							color='secondary'
							sx={{ mt: 1 }}
						>
							Add Products
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddProducts;
