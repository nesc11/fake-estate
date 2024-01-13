import { useContext } from 'react';
import { UserContext } from '../context/user';

export default function Profile() {
	const { user } = useContext(UserContext);
	console.log(user);
	return <div>Profile</div>;
}
