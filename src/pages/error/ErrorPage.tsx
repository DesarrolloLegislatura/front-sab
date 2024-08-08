const ErrorPage = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen bg-gray-200 text-gray-700'>
			<h1 className='text-2xl mt-8'>Page Not Found</h1>
			<p className='text-lg mb-8'>
				Oops! The page you are looking for does not exist.
			</p>
		</div>
	);
};

export default ErrorPage;
