import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App.tsx';
import HomePage from '../pages/home/HomePage.tsx';
import ErrorPage from '../pages/error/ErrorPage.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true, // This is the default route
				element: <HomePage />,
			},
		],
	},
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
