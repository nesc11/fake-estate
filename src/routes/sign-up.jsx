import {
	Link,
	Form,
	redirect,
	useNavigation,
	useActionData,
} from 'react-router-dom';
import { createUser } from '../data/users';

export async function action({ request }) {
	const formData = await request.formData();
	const userData = Object.fromEntries(formData);
	const data = await createUser(userData);
	if (data.success !== false) {
		return redirect('/sign-in');
	}
	return data;
}

export default function SignUp() {
	console.log('sign up');
	const navigation = useNavigation();
	const errors = useActionData();
	return (
		<div className='p-3 max-w-lg mx-auto'>
			<h1 className='my-7 text-3xl text-center font-semibold'>Sign Up</h1>
			<Form method='post' className='flex flex-col gap-2'>
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
					disabled={navigation.state === 'submitting' ? true : false}
					className='p-3 rounded-lg bg-slate-700 text-white uppercase hover:opacity-95 disabled:opacity-80'
				>
					{navigation.state === 'submitting'
						? 'Saving...'
						: navigation.state === 'loading'
							? 'Saved!'
							: 'Sign up'}
				</button>
			</Form>
			<div className='flex gap-2 mt-5'>
				<p>Have an account?</p>
				<Link className='text-blue-700' to='/sign-in'>
					Sign in
				</Link>
			</div>
			{errors && <p className='text-red-500'>{errors.message}</p>}
		</div>
	);
}
