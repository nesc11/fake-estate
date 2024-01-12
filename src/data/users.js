export const createUser = async (userData) => {
	const res = await fetch('http://localhost:3000/api/auth/sign-up', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(userData),
	});
	const data = await res.json();
	return data;
};
