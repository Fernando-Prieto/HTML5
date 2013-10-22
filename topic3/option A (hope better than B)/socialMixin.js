var socialMixin = function () {

	this.share = function(friendName) {
        console.log('    Sharing '+this.get('title')+' with '+friendName);
    };

    this.like = function() {
        console.log('    Liked: '+this.get('title'));
    }
}