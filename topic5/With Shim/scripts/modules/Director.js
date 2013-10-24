define(function() {
    
    //Private attributes
    var attr, 

    // Private methods
    Constr = function (name) {
        attr = {
                    name: name || '',
                    quotes: null
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

    Constr.prototype.speak = function() {

        var allQuotes = this.get('quotes');
        var quote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
        var selectedQuote = this.get('name') + ' says: '+quote;

        console.log('    '+selectedQuote);

        return selectedQuote;
    };

    return  Constr;
});


