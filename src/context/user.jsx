import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const loadUser = (user) => {
		setUser(user);
	};

	return (
		<UserContext.Provider value={{ user, loadUser }}>
			{children}
		</UserContext.Provider>
	);
};

export { UserContext, UserProvider };
