export const GifGridItem = ({ titulo, url }: { titulo: string; url: string }) => {
	return (
		<div className='card'>
			<img src={url} alt={titulo} />
			<p>{titulo}</p>
		</div>
	);
};
