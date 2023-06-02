import { useFetchGits } from '../hooks/useFetchGits';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }: { categoria: string }) => {
	//? aquí react ya renderizo las imagenes por los cambios de estado
	const { imagenes, cargando } = useFetchGits(categoria);

	return (
		<>
			<h3>{categoria}</h3>

			{cargando && <h2>Cargando...</h2>}

			<div className='card-grid'>
				{imagenes.map((imagen: any) => (
					<GifGridItem key={imagen.id} {...imagen}></GifGridItem>
				))}
			</div>
		</>
	);
};
