import { Link, useNavigate } from 'react-router-dom';
import { signupUser } from '../utils/user';
import { useState } from 'react';
import OAuth from '../components/OAuth';

export default function SignUp() {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	isLoading && console.log('is Loading');
	error && console.log('Error');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		const formData = Object.fromEntries(
			new window.FormData(e.target).entries(),
		);
		console.log(formData);
		try {
			const result = await signupUser(formData);
			if (result.success === false) {
				setError(result.message);
			} else {
				// setIsLoading(false);
				// setError(null);
				navigate('/sign-in');
			}
		} catch (error) {
			setError(error.message);
		}

		setIsLoading(false);
	};

	console.log('sign up');
	return (
		<div className='p-3 max-w-lg mx-auto'>
			<h1 className='my-7 text-3xl text-center font-semibold'>Sign Up</h1>
			<form onSubmit={handleSubmit} className='flex flex-col gap-2'>
				<input
					name='username'
					className='border p-3 rounded-lg'
					type='text'
					placeholder='username'
				/>
				<input
					name='email'
					className='border p-3 rounded-lg'
					type='email'
					placeholder='email'
				/>
				<input
					name='password'
					className='border p-3 rounded-lg'
					type='password'
					placeholder='password'
				/>
				<button
					disabled={isLoading ? true : false}
					className='p-3 rounded-lg bg-slate-700 text-white uppercase hover:opacity-95 disabled:opacity-80'
				>
					{isLoading ? 'Loading...' : 'Sign up'}
				</button>
				<OAuth />
			</form>
			<div className='flex gap-2 mt-5'>
				<p>Have an account?</p>
				<Link className='text-blue-700' to='/sign-in'>
					Sign in
				</Link>
			</div>
			{error && <p className='text-red-500'>{error}</p>}
		</div>
	);
}
