interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: PropsButton) {
	return (
		<button
			className='flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600'
			{...props}>
			{children}
		</button>
	);
}

export default Button;
