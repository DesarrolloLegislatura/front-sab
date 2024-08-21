import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App.tsx';
import HomePage from '../pages/home/HomePage.tsx';
import ErrorPage from '../pages/error/ErrorPage.tsx';
import { TypeDocUpd, TypeDocList, TypeDocCreate } from '../pages/typedocument';

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
			{
				path: 'typedocument', //List all docs
				element: <TypeDocList />,
			},
			{
				path: 'update', // update selected doc
				element: <TypeDocUpd />,
			},
			{
				path: 'create', // create a new doc type
				element: <TypeDocCreate />,
			},
		],
	},
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
