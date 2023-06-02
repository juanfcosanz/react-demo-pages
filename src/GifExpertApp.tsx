import { useState } from 'react';
import { AgregarCategoria, GifGrid } from './components';

const GifExpertApp = () => {
	const [categorias, setCategorias] = useState(['One Punch']);

	const onAgregarCategoria = (nuevaCategoria: string) => {
		if (categorias.includes(nuevaCategoria)) return;

		setCategorias([nuevaCategoria, ...categorias]);
	};

	return (
		<>
			{/* titulo */}
			<h1>GifExpert App</h1>

			{/* input */}
			<AgregarCategoria
				// setCategorias={setCategorias}
				onNuevaGategoria={onAgregarCategoria}
			/>

			{/* Listado de Gifs */}

			{categorias.map((categoria) => (
				<GifGrid key={categoria} categoria={categoria} />
			))}

			{/* Gif Item */}
		</>
	);
};

export default GifExpertApp;
