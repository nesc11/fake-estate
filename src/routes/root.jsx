import { Outlet } from 'react-router-dom';
import Header from '../components/global/Header';

export default function Root() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
