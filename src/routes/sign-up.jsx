import { Link } from 'react-router-dom';

export default function SignUp() {
	return (
		<div className='p-3 max-w-lg mx-auto'>
			<h1 className='my-7 text-3xl text-center font-semibold'>Sign Up</h1>
			<form className='flex flex-col gap-2'>
				<input
					className='border p-3 rounded-lg'
					type='text'
					placeholder='username'
				/>
				<input
					className='border p-3 rounded-lg'
					type='email'
					placeholder='email'
				/>
				<input className='border p-3 rounded-lg' type='password' />
				<button className='p-3 rounded-lg bg-slate-700 text-white uppercase hover:opacity-95 disabled:opacity-80'>
					Sign Up
				</button>
			</form>
			<div className='flex gap-2 mt-5'>
				<p>Have an account?</p>
				<Link className='text-blue-700' to='/sign-in'>
					Sign in
				</Link>
			</div>
		</div>
	);
}
