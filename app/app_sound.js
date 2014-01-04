// copyright Dr.Peter

/*
function getPhoneGapPath() {
    var path = window.location.pathname;
    path = path.substr( path, path.length - 10 );
    return 'file://' + path;
};
*/
var app = new Object();




app.mp3folder = app.soundFolder + "mp3/";
app.soundfolder = app.soundFolder + "sounds/";
app.pianofolder = app.soundFolder + "piano/";
app.sound_for_click = app.soundFolder + "sounds/click5";
app.sound_var1 = null;

app.soundArray = function (url) {
	// create sound
	var snd = app.mp3folder + url + ".mp3";
	var sound = new Howl({
	  urls: [snd],
	  volume: 1
	}).play();
}
app.soundPlay = function (url) {
	//if(isChrome && isDesktop) { return }
	// create sound
	var snd = app.soundfolder + url + ".mp3";
	var sound = new Howl({
	  urls: [snd],
	  volume: 1
	}).play();
}
app.pianoKey = function (url,sustain) {
	var snd = app.pianofolder + url + ".mp3";
	if(sustain) {
		// sustain		
		var sound = new Howl({
		  urls: [snd],
		  volume: 1
		}).play();
	} else {
		var sound = new Howl({
		  urls: [snd],
		  volume: 1
		}).play().fadeOut(0,500);	
	}
}
app.soundPress = function (url,was) {
	if (was) {
		var snd = app.soundfolder + url + ".mp3";
		app.sound_var1 = new Howl({
		  urls: [snd],
		  volume: 1
		}).play();
	} else {		
		app.sound_var1.fadeOut(0,200);
	}
}
app.soundClick = function () {
	var snd = app.sound_for_click + ".mp3";
	var sound = new Howl({
	  urls: [snd],
	  volume: 1
	}).play();
}
app.soundTest = function (sun) {
	var snd = sun?sun:"sounds/click1.mp3";
	var sound = new Howl({
	  urls: [snd],
	  volume: 1
	}).play();
}
