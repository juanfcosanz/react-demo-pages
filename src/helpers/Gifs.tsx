import { Data } from '../interfaces/giphy.interface';
const getGifs = async (categoria: string) => {
	const URL = `https://api.giphy.com/v1/gifs/search?api_key=qnMdPXSBFEaeGSiEaDTyv2qnQIX8yqry&q=${categoria}&limit=10`;
	const resp = await fetch(URL);
	const { data } = await resp.json();
	const gifs = data.map((img: Data) => ({
		id: img.id,
		titulo: img.title,
		url: img.images.downsized_medium.url,
	}));
	return gifs;
};

export { getGifs };
