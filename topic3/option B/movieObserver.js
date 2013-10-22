/*  Title: Observer
    Description: is a publish/subscribe pattern which allows a number of observer objects to see an event
    Reference: https://github.com/shichuan/javascript-patterns/blob/master/design-patterns/observer.html
*/

var observer = {

    addSubscriber:function (callback) {
            this.subscribers[this.subscribers.length] = callback;
    },

    removeSubscriber:function (callback) {
            for (var i = 0; i < this.subscribers.length; i++) {
                    if (this.subscribers[i] === callback) {
                            delete(this.subscribers[i]);
                    }
            }
    },

    publish:function (what) {
            for (var i = 0; i < this.subscribers.length; i++) {
                    if (typeof this.subscribers[i] === 'function') {
                            this.subscribers[i](what);
                    }
            }
    },
    make:function (o) { // turns an object into a publisher just copying its methods
            for (var i in this) {
                    o[i] = this[i];
                    o.subscribers = [];
            }
    }
};

var movieObserver = {
    handler: function(args) {
                if (args.evt == 'play') {
                    console.log('    OBSERVER: Playing '+args.title+' ('+args.year+')');
                }
                else {
                    if (args.evt == 'stop') {
                        console.log('    OBSERVER: ' + args.title + ' stopped.');
                    }
                }
            }
};