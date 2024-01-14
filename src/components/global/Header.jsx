import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { UserContext } from '../../context/user';

export default function Header() {
	const { user } = useContext(UserContext);
	return (
		<header className='bg-slate-200 shadow-md'>
			<div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
				<Link to='/'>
					<h1 className='font-bold text-sm sm:text-xl'>
						<span className='text-slate-500'>Fake</span>
						<span className='text-slate-700'>Estate</span>
					</h1>
				</Link>

				<form className=' flex items-center rounded-md bg-slate-100 p-2'>
					<input
						className='bg-transparent focus:outline-none w-24 sm:w-64'
						type='text'
						placeholder='search...'
					/>
					<button>
						<FaSearch className='text-slate-500' />
					</button>
				</form>
				<ul className='flex gap-3 items-center'>
					<li>
						<Link
							className='hidden sm:inline text-slate-700 hover:underline'
							to='/'
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className='hidden sm:inline text-slate-700 hover:underline'
							to='about'
						>
							About
						</Link>
					</li>
					<li>
						<Link
							className={user ? '' : 'text-slate-700 hover:underline'}
							to={user ? 'profile' : 'sign-in'}
						>
							{user ? (
								<img
									className='rounded-lg h-8 w-8 object-cover'
									src={user.avatar}
									alt='Profile avatar user'
								/>
							) : (
								'Sign in'
							)}
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
