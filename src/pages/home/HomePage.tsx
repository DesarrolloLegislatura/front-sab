import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<div className='flex flex-col gap-10 items-center justify-center h-screen'>
			<h1 className='text-4xl font-bold'>Home Page</h1>

			<Link
				to='typedocument'
				className='border w-auto p-4 border-red-900'>
				go to Typedocument{' '}
			</Link>
		</div>
	);
};

export default HomePage;
