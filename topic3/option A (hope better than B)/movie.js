// Constructs a new Movie
/*
var Movie = function (title, year) {

    var attr =  {
                    title: title || '',
                    year: year || 0,
                    actors: []
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

    observer.make(this); //movies object is a new publisher
    this.addSubscriber(movieObserver.handler); //the publisher adds its subscriber.

    socialMixin.call(this);
}*/


/*
    ******* MODULE *******
    REF: http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate -> JavaScript Patterns
    Build Better Applications with Coding and Design Patterns. / Module Pattern / Revealing Module Pattern / page 100
*/
var Movie = (function () {

    //Private attributes
    var attr, 

    // Private methods
    Constr = function  (title,year) {
        attr = {
                    title: title || '',
                    year: year || 0,
                    actors: []
                };

        observer.make(this); //movies object is a new publisher
        this.addSubscriber(movieObserver.handler); //the publisher adds its subscriber.

        socialMixin.call(this);

    };  
    // end var
    
    Constr.prototype.constructor= Constr;

    Constr.prototype.set = function (attrte, val) {
                if(attrte in attr)
                {
                   attr[attrte] = val;
                }
            };

    Constr.prototype.get = function (attrte) {
                if(attrte in attr)
                {
                   return attr[attrte];
                }
            };

    Constr.prototype.play = function() { 
        console.log('    Playing '+this.get('title')+'...');     
        this.publish({evt:'play', title: this.get('title'), year: this.get('year')});       
    };

    Constr.prototype.stop = function() {
        console.log('    '+this.get('title') + ' stopped.');   
        this.publish({evt:'stop', title: this.get('title'), year: this.get('year')});
    };    

    return  Constr;
}());