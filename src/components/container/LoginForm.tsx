import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../utils/validators';
import { login } from '../../api/auth';
import { useAuthStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

interface LoginFormInputs {
	username: string;
	password: string;
}

const Login: React.FC = () => {
	const navigate = useNavigate();
	const { setToken } = useAuthStore();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (data: LoginFormInputs) => {
		try {
			const response = await login(data.username, data.password);
			setToken(response.token);
			navigate('/dashboard');
		} catch (error) {
			console.error('Error en el login:', error);
		}
	};

	return (
		<div className='flex items-center justify-center h-screen bg-gray-100'>
			<div className='w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow'>
				<h2 className='text-2xl font-bold text-center'>Iniciar Sesión</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label className='block mb-2 text-sm font-medium text-gray-700'>
							Correo Electrónico
						</label>
						<input
							type='username'
							className='w-full p-2 border border-gray-300 rounded-md'
							{...register('username')}
						/>
						{errors.username && (
							<p className='mt-1 text-sm text-red-600'>
								{errors.username.message}
							</p>
						)}
					</div>
					<div>
						<label className='block mb-2 text-sm font-medium text-gray-700'>
							Contraseña
						</label>
						<input
							type='password'
							className='w-full p-2 border border-gray-300 rounded-md'
							{...register('password')}
						/>
						{errors.password && (
							<p className='mt-1 text-sm text-red-600'>
								{errors.password.message}
							</p>
						)}
					</div>
					<button
						type='submit'
						className='w-full p-2 mt-4 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700'>
						Iniciar Sesión
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
