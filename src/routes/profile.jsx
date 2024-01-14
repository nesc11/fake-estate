import { useContext } from 'react';
import { UserContext } from '../context/user';

export default function Profile() {
	const { user } = useContext(UserContext);
	console.log(user);
	return (
		<div className='p-3 max-w-lg mx-auto'>
			<h1 className='my-7 text-3xl text-center font-semibold'>Profile</h1>
			<form className='flex flex-col gap-2'>
				<img
					className='rounded-full object-cover cursor-pointer mb-4 w-14 h-14 sm:w-20 sm:h-20 self-center'
					name='avatar'
					alt='User avatar'
					src={user.avatar}
				/>
				<input
					name='username'
					className='border p-3 rounded-lg'
					type='text'
					placeholder='username'
					defaultValue={user.username}
				/>
				<input
					name='email'
					className='border p-3 rounded-lg'
					type='email'
					placeholder='email'
					defaultValue={user.email}
				/>
				<input
					name='password'
					className='border p-3 rounded-lg'
					type='password'
					placeholder='password'
				/>
				<button className='p-3 rounded-lg bg-slate-700 text-white uppercase hover:opacity-95 disabled:opacity-80'>
					Update
				</button>
				<button className='p-3 rounded-lg bg-green-700 text-white uppercase hover:opacity-95 disabled:opacity-80'>
					Create a listing
				</button>
			</form>
			<div className='flex justify-between mt-4'>
				<span className='text-red-600 cursor-pointer'>Delete account</span>
				<span className='text-red-600 cursor-pointer'>Sign out</span>
			</div>
		</div>
	);
}
