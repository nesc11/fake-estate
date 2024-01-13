import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user';
import { signinUser } from '../utils/user';
import OAuth from '../components/OAuth';

export default function SignIn() {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const { user, loadUser } = useContext(UserContext);
	console.log('sign in');
	console.log(user);

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
			const result = await signinUser(formData);
			if (result.success === false) {
				setError(result.message);
			} else {
				// setIsLoading(false);
				// setError(null);
				loadUser(result);
				navigate('/profile');
			}
		} catch (error) {
			setError(error.message);
		}

		setIsLoading(false);
	};
	return (
		<div className='p-3 max-w-lg mx-auto'>
			<h1 className='my-7 text-3xl text-center font-semibold'>Sign In</h1>
			<form onSubmit={handleSubmit} className='flex flex-col gap-2'>
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
				<button className='p-3 rounded-lg bg-slate-700 text-white uppercase hover:opacity-95 disabled:opacity-80'>
					{isLoading ? 'Loading...' : 'Sign in'}
				</button>
				<OAuth />
			</form>
			<div className='flex gap-2 mt-5'>
				<p>Dont have an account yet?</p>
				<Link className='text-blue-700' to='/sign-up'>
					Sign up
				</Link>
			</div>
			{error && <p className='text-red-500'>{error}</p>}
		</div>
	);
}
