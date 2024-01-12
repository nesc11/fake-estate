import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import About from './routes/about';
import Profile from './routes/profile';
import SignIn from './routes/sign-in';
import SignUp from './routes/sign-up';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'sign-in',
				element: <SignIn />,
			},
			{
				path: 'sign-up',
				element: <SignUp />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'profile',
				element: <Profile />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />,
);
