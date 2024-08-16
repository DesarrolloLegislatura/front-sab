interface PropsTitleH2 extends React.HTMLAttributes<HTMLHeadingElement> {}
export function TitleH2({ children, ...props }: PropsTitleH2) {
	return (
		<h2
			className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'
			{...props}>
			{children}
		</h2>
	);
}
