define(function() {
    
    //Private attributes
    var attr, 

    // Private methods
    Constr = function  (title,year) {
        attr = {
                    title: title || '',
                    year: year || 0,
                    actors: [],
                    director : null
                };
    };  
    // end var
    
    Constr.prototype.constructor = Constr;

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
       // this.publish({evt:'play', title: this.get('title'), year: this.get('year')});       
    };

    Constr.prototype.stop = function() {
        console.log('    '+this.get('title') + ' stopped.');   
      //  this.publish({evt:'stop', title: this.get('title'), year: this.get('year')});
    };    

    return  Constr;
});