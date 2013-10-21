var Actor = function (firstName , lastName) {

    //Private attributes

    var attr =  {
                    firstName: firstName || '',
                    lastName: lastName || ''
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

     toString = function () {
        return this.get('firstName')+' '+this.get('lastName');
    };
    // end var

    // revealing public API
    
    return  {                               
                set: set,
                get: get,
                toString: toString
            }
}