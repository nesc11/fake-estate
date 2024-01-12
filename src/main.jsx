import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import About from './routes/about';
import Profile from './routes/profile';
import SignIn from './routes/sign-in';
import SignUp from './routes/sign-up';
import { action as signupAction } from './routes/sign-up';
import { action as signinAction } from './routes/sign-in';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'sign-in',
				element: <SignIn />,
				action: signinAction,
			},
			{
				path: 'sign-up',
				element: <SignUp />,
				action: signupAction,
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
