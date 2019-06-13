export default async function justFetch (url, options) {
	const response = await fetch(url, options);

	if (!response.ok)
		throw response;

	return response;
}