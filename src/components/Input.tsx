import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, id, error, className, onChange, value, ...props }, ref) => {
		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			if (onChange) {
				onChange(e);
			}
		};

		return (
			<div className="space-y-2">
				<label htmlFor={id} className="block text-sm font-medium text-gray-700">
					{label}
				</label>
				<input
					ref={ref}
					id={id}
					value={value}
					onChange={handleChange}
					className={`w-full border-2 border-black bg-gray-100 px-6 py-3 focus:border-black focus:outline-none focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:opacity-50 ${error ? 'border-red-500' : ''} ${className || ''} `}
					{...props}
				/>
				{error && <p className="mt-1 text-sm text-red-500">{error}</p>}
			</div>
		);
	}
);

Input.displayName = 'Input';
