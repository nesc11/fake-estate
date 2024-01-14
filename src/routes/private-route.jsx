import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../context/user';

export default function PrivateRoute({ children }) {
	const { user } = useContext(UserContext);
	return user ? <Outlet>{children}</Outlet> : <Navigate to='/sign-in' />;
}
