var DownloadableMovie = function (title, year) {    

	var dolly = Object.create(new Movie(title, year));

	dolly.download = function() {
		console.log('    Downloading: '+ this.get('title') + ' (' + this.get('year') + ')');
	};

	return dolly;
}
