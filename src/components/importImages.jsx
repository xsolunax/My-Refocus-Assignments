const importAll = async () => {
	const images = {};
	const imageFiles = import.meta.glob('./assets/img/*.(png|jpe?g|svg)');

	let key = 1;
	for (const path in imageFiles) {
		images[key] = (await imageFiles[path]()).default;
		key++;
		if (key > 20) break; // Break the loop after reaching key 20
	}

	return images;
};

const images = await importAll();

export default images;
