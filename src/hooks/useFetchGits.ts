import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/Gifs';

export const useFetchGits = (categoria: string) => {
	//? cuando el componente se inicializa están nulas la imagenes
	const [imagenes, setImagenes] = useState([]);
	const [cargando, setCargando] = useState(true);

	const getImgs = async () => {
		const imgs = await getGifs(categoria);
		//? aquí se manda la redenderización del componente y se cargan las imagenes
		setImagenes(imgs);
		setCargando(false);
		//! con react 18 solo se manda una renderizacion
	};

	useEffect(() => {
		getImgs();
	}, []);
	return {
		imagenes,
		cargando,
	};
};
