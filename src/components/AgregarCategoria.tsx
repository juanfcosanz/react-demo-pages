import { useState } from 'react';

export const AgregarCategoria = ({ onNuevaGategoria }: { onNuevaGategoria: (arg: string) => void }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (inputValue.trim().length <= 1) return;

		// setCategorias((categorias) => [inputValue, ...categorias]);
		onNuevaGategoria(inputValue.trim());
		setInputValue('');
	};

	return (
		<form onSubmit={onSubmit}>
			<input type='text' id='categoria' placeholder='Buscar gifs' value={inputValue} onChange={onInputChange} />
		</form>
	);
};
