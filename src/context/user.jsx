import { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const UserContext = createContext();

const UserProvider = ({ children }) => {
	const { setItem, getItem } = useLocalStorage('user');
	const [user, setUser] = useState(() => getItem('user'));

	const loadUser = (user) => {
		setItem(user);
		setUser(user);
	};

	return (
		<UserContext.Provider value={{ user, loadUser }}>
			{children}
		</UserContext.Provider>
	);
};

export { UserContext, UserProvider };
