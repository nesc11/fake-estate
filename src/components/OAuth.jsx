import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from '@firebase/auth';
import { app } from '../firebase';
import { authWithGoogle } from '../utils/user';
import { UserContext } from '../context/user';

export default function OAuth() {
	const { user, loadUser } = useContext(UserContext);

	const navigate = useNavigate();

	const handleClick = async () => {
		try {
			const provider = new GoogleAuthProvider();
			const auth = getAuth(app);

			const { user: userFromFirebase } = await signInWithPopup(auth, provider);
			console.log(userFromFirebase);
			const userData = {
				username: userFromFirebase.displayName,
				email: userFromFirebase.email,
				photo: userFromFirebase.photoURL,
			};
			console.log(userData);
			const result = await authWithGoogle(userData);
			loadUser(result);
			console.log(user);
			navigate('/profile');
		} catch (error) {
			console.log('Could not sign in with google', error);
		}
	};

	return (
		<button
			onClick={handleClick}
			type='button'
			className='rounded-lg p-3 uppercase bg-red-700 text-white hover:opacity-90'
		>
			Continue with google
		</button>
	);
}
