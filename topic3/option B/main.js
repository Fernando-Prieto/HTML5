var hangOver = new Movie('The Hangover', 2009);

console.log('*** Movie created: '+hangOver.get('title')+' ('+hangOver.get('year')+') ***');

hangOver.play();
hangOver.stop();

//-------------------------------------------------------------------------------------------------

var topGun = new DownloadableMovie('Top Gun', 1986);

console.log('*** Downloadable movie created: '+topGun.get('title')+' ('+topGun.get('year')+') ***');

topGun.download();
topGun.play();
topGun.stop();

//-------------------------------------------------------------------------------------------------

var ironman2 = new Movie();
ironman2.set('title', 'Iron Man 2');
console.log('*** Movie created: '+ironman2.get('title')+' ***');

ironman2.share('Pepito');
ironman2.like();

//-------------------------------------------------------------------------------------------------

console.log('*** TOP GUN ACTORS ***');

var actorMaverick = new Actor("Tom","Cruise");
var actorGoose = new Actor("Anthony","Edwards");
var actorCharlie = new Actor("Kelly","McGillis");
var actorIceman = new Actor("Val","Kilmer");

topGun.set('actors',[actorMaverick, actorGoose, actorCharlie, actorIceman]);

var actors = topGun.get('actors');
console.log(actors[0]+', '+actors[1]+', '+actors[2]+', '+actors[3]);



