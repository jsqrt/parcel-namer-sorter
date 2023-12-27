const path = require('path');
const { Namer } = require('@parcel/plugin');

module.exports = new Namer({
	name({ bundle }) {
		if (bundle.type === 'html') return null;

		const filePath = bundle.getMainEntry().filePath;
		const pathArr = filePath.split(path.sep);

		const hash =
			bundle.type === 'js' || process.env.NODE_ENV === 'development' ? bundle.hashReference : undefined;

		const dir = pathArr.slice(pathArr.indexOf('src') + 1);
		const fileNameArr = dir[dir.length - 1].split('.');

		if (hash) {
			fileNameArr.splice(-1, 1, hash, bundle.type);
		} else {
			fileNameArr.splice(-1, 1, bundle.type);
		}

		dir.splice(-1, 1, fileNameArr.join('.'));

		return dir.join('/');
	},
});
