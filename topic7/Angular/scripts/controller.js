var movieController = movieApp.controller('moviesController', function moviesController($scope, $location, angularStorage, filterFilter) {
		var movies = $scope.movies = angularStorage.get();

		$scope.newMovie = null;
		$scope.editedMovie = null;

		$scope.$watch('movies', function (newValue, oldValue) { 
			if (newValue !== oldValue) { // This prevents unneeded calls to the local storage
				angularStorage.put(movies);
			}
		}, true);

		$scope.addMovie = function () { 
			var newMovie = $scope.newMovie;
			
			if (!newMovie.title.length || !newMovie.year.length) 
			{ 
				return;
			}

			movies.push({
				title: newMovie.title,
				year: newMovie.year,
				edit: false
			});

			$scope.newMovie = null;
		};

		$scope.removeMovie = function (movie) {
			movies.splice(movies.indexOf(movie), 1);
		};


		$scope.editMovie = function (movie) {
			movie.edit = true;
		};

		$scope.saveChanges = function (movie) {
			movie.title = movie.title.trim();
			movie.year = movie.year.trim();
			movie.edit = false;

			if (!movie.title || !movie.year) {
				$scope.removeMovie(movie);
			}
		};

	});