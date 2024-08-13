import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App.tsx';
import { LoginPage } from '../pages/login/LoginPage.tsx';
import ErrorPage from '../pages/error/ErrorPage.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true, // This is the default route
				element: <LoginPage />,
			},
			{
				path: '/dashboard',
				element: <h1>Dashboard</h1>,
			},
		],
	},
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
