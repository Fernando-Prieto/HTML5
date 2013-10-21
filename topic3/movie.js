var Movie = function (title, year) {

    var newMovie = new Movies(title, year);

    observer.make(newMovie, movieObserver.handler); //movies object is a new publisher
    newMovie.addSubscriber(movieObserver.handler); //the publisher adds its subscriber.

    socialMixin.call(newMovie);

    return newMovie;

}

// Constructs a new Movie
/*
var Movies = function (title, year) {

    var attr =  {
                    title: title || '',
                     year: year || 0
                };

    this.set = function (attrte, val) {
                if(attrte in attr)
                {
                   attr[attrte] = val;
                }
            };

    this.get = function (attrte) {
                if(attrte in attr)
                {
                   return attr[attrte];
                }
            };

    this.play = function() { 
        console.log('    Playing '+this.get('title')+'...');  
        this.publish({evt:'play', title: this.get('title'), year: this.get('year')});
    };

    this.stop = function() {
        console.log('    '+this.get('title') + ' stopped.');      
        this.publish({evt:'stop', title: this.get('title'), year: this.get('year')});
    };  
}*/


/*
    ******* MODULE *******
    REF: http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate -> JavaScript Patterns
    Build Better Applications with Coding and Design Patterns. / Module Pattern / Revealing Module Pattern / page 99
*/
var Movies = function (title, year) {

    //Private attributes

    var attr =  {
                    title: title || '',
                    year: year || 0,
                    actors: []
                },

    // Private methods

    set = function (attrte, val) {
                if(attrte in attr)
                {
                   attr[attrte] = val;
                }
            },

    get = function (attrte) {
                if(attrte in attr)
                {
                   return attr[attrte];
                }
            },

    play = function() { 
        console.log('    Playing '+this.get('title')+'...');     
        this.publish({evt:'play', title: this.get('title'), year: this.get('year')});       
    },

    stop = function() {
        console.log('    '+this.get('title') + ' stopped.');   
        this.publish({evt:'stop', title: this.get('title'), year: this.get('year')});
    };
    // end var

    // revealing public API
    
    return  {                               
                set: set,
                get: get,
                play: play,
                stop: stop,
            }
}