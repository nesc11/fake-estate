const signupUser = async (userData) => {
	const res = await fetch('http://localhost:3000/api/auth/sign-up', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(userData),
	});
	const data = await res.json();
	return data;
};

const signinUser = async (userData) => {
	const res = await fetch('http://localhost:3000/api/auth/sign-in', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(userData),
	});
	const data = await res.json();
	return data;
};

const authWithGoogle = async (userData) => {
	const res = await fetch('http://localhost:3000/api/auth/google', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(userData),
	});
	const data = await res.json();
	return data;
};

export { signinUser, signupUser, authWithGoogle };
