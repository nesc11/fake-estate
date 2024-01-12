import { Outlet } from 'react-router-dom';
import Header from '../components/global/Header';

export default function Root() {
	console.log('root');
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	);
}
