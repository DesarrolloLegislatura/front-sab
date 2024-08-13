import z from 'zod';

export const loginSchema = z.object({
	username: z.string().min(3, 'Debe tener al menos 3 caracteres'),
	password: z.string().min(6, 'Debe tener al menos 6 caracteres'),
});
