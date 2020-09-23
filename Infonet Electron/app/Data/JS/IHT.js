// Infonet HyperText Script File
// Credits to Wout P. for making this file possible!

//==========================================================
//=                    Global variables                    =
//==========================================================
var daytimelogo = '../Images/HTLogo/HTLogoDay.png';
var nighttimelogo = '../Images/HTLogo/HTLogoNight.png';
var theme = setInterval(HyperTextTheme, 1000);
var IHTReload = setTimeout(reloadInfonet, 500000);
const kaudio = new Audio('../Sound/15fe810f6cfab609c7fcda61652b9b34.mp3');
let menuEnable = false;
let konamiActivated = false;
let daFrame = null;
let darkModeActivated;
const bottomLeftSrc = 'https://www.youtube.com/';
const bottomRightSrc = 'https://fortnite-api.com/v2/aes';

//==========================================================
//=                    Manage Dark Mode                    =
//==========================================================
if (localStorage.getItem('darkModeActivated') === undefined) {
	darkModeActivated = false;
}
else {
	darkModeActivated = localStorage.getItem('darkModeActivated');
	darkModeActivated = JSON.parse(darkModeActivated);
}

if (darkModeActivated === true) {
	darkMode();
}

//==========================================================
//=           Switch between Light and Dark mode           =
//==========================================================
function darkModeSwitch() {
	if (darkModeActivated === true) {
		document.getElementById('darkmodetoggle').innerHTML = 'Disable Dark Mode'
	}
	else {
		document.getElementById('darkmodetoggle').innerHTML = 'Enable Dark Mode'
	}
}

function toggleDarkMode() {
	if (darkModeActivated === true) {
		lightMode();
	}
	else {
		darkMode();
	}
}

function lightMode() {
	darkModeActivated = false
	localStorage.setItem('darkModeActivated', darkModeActivated);
	// Stop the theme script
	clearInterval(theme);
	// Prep the overlay
	document.getElementById('overlay').style.background = '#E8E8E8';
	document.getElementById('overlay').style.display = 'block';
	setTimeout(() => {
		// Fade in the overlay
		fadeIn(document.getElementById('overlay'), 600);
	}, 10);
	// Reload
	setTimeout(() => {
		location = location;
	}, 610);
}

function darkMode() {
	darkModeActivated = true;
	localStorage.setItem('darkModeActivated', darkModeActivated);
	document.getElementById('darkmodetoggle').innerHTML = 'Disable Dark Mode'
	toggleMenu();
	clearInterval(theme);
	document.body.style.backgroundColor = '#26262b';
	document.body.background = '';
	colorMode('dark');
}

//==========================================================
//=       Functions that need to be called upon load       =
//==========================================================
window.addEventListener('resize', resize); // DISABLE THIS ON WEAKER HARDWARE!!
document.getElementById('InfonetHyperTextLogo').addEventListener('click', toggleMenu);
parseParams();
darkModeSwitch();

//==========================================================
//= Change the page style depending on the mode parameters =
//==========================================================
function parseParams() {
	const params = new URLSearchParams(window.location.search);
	// Triple frames
	var ads = params.get('config');
		if (ads == 'tripleright') {
			daFrame = 'tripleright';
			var parentDiv = document.getElementById('frames');
			var newFrame = document.createElement('iframe');
			newFrame.setAttribute('id', 'bottomrightframe');
			newFrame.setAttribute('class', 'iframe rightframe');
			newFrame.setAttribute('src', bottomRightSrc);
			newFrame.setAttribute('frameborder', '0');
			newFrame.setAttribute('scrolling', 'no');
			newFrame.setAttribute('align', 'right');
			parentDiv.appendChild(newFrame);
		}
		else if (ads == 'tripleleft') {
			daFrame = 'tripleleft';
			var parentDiv = document.getElementById('frames');
			var newFrame = document.createElement('iframe');
			newFrame.setAttribute('id', 'bottomleftframe');
			newFrame.setAttribute('class', 'iframe leftframe');
			newFrame.setAttribute('src', bottomLeftSrc);
			newFrame.setAttribute('frameborder', '0');
			newFrame.setAttribute('scrolling', 'no');
			newFrame.setAttribute('align', 'left');
			parentDiv.appendChild(newFrame);
		}
		else if (ads == 'tetraframe') {
			daFrame = 'tetraframe';
			var parentDiv = document.getElementById('frames');
			var newLeftFrame = document.createElement('iframe');
			var newRightFrame = document.createElement('iframe');
			newLeftFrame.setAttribute('id', 'bottomleftframe');
			newLeftFrame.setAttribute('class', 'iframe leftframe');
			newLeftFrame.setAttribute('src', bottomLeftSrc);
			newLeftFrame.setAttribute('frameborder', '0');
			newLeftFrame.setAttribute('scrolling', 'no');
			newLeftFrame.setAttribute('align', 'left');
			newRightFrame.setAttribute('id', 'bottomrightframe');
			newRightFrame.setAttribute('class', 'iframe rightframe');
			newRightFrame.setAttribute('src', bottomRightSrc);
			newRightFrame.setAttribute('frameborder', '0');
			newRightFrame.setAttribute('scrolling', 'no');
			newRightFrame.setAttribute('align', 'right');
			parentDiv.appendChild(newLeftFrame);
			parentDiv.appendChild(newRightFrame);
		}

	// Mode parameter
	var mode = params.get('mode');
	if (mode == 'default') {
		date_time();
	}
	else if (mode == 'xmos') {
		document.getElementById('Time').innerHTML = 'Cadeautje van de chysostomosleerlingen';
		document.body.style.cssText = '-moz-transform: scaleY(-1); -o-transform: scaleY(-1); -webkit-transform: scaleY(-1); transform: scaleY(-1); filter: FlipV; -ms-filter: "FlipV"';
		document.getElementById('loadingscreen').style.cssText = '-moz-transform: scaleY(-1); -o-transform: scaleY(-1); -webkit-transform: scaleY(-1); transform: scaleY(-1); filter: FlipV; -ms-filter: "FlipV"';
	}
	else if (mode == 'afs1') {
		date_time();
		document.body.style.cssText = '-moz-transform: rotate(-1deg); -o-transform: rotate(-1deg); -webkit-transform: rotate(-1deg); transform: rotate(-1deg)';
		document.getElementById('loadingscreen').style.cssText = '-moz-transform: rotate(1deg); -o-transform: rotate(1deg); -webkit-transform: rotate(1deg); transform: rotate(1deg)';
	}
	else if (mode == 'afs2') {
		clearInterval(theme);
		document.body.style.cssText = '-moz-transform: scaleX(-1) rotate(1deg); -o-transform: scaleX(-1) rotate(1deg); -webkit-transform: scaleX(-1) rotate(1deg); transform: scaleX(-1) rotate(1deg); filter: FlipH; -ms-filter: "FlipH"'
		document.getElementById('loadingscreen').style.cssText = '-moz-transform: scaleX(-1); -o-transform: scaleX(-1); -webkit-transform: scaleX(-1); transform: scaleX(-1); filter: FlipH; -ms-filter: "FlipH"'
		date_time();
		document.body.style.backgroundColor = '#003169';
		document.body.background = '';

		const video = Object.assign(document.createElement('video'), {
			id: 'afstHyperTextTheme',
			video: true,
			autobuffer: true,
			muted: true,
			loop: true,
			autoplay: true,
		});

		const source = Object.assign(document.createElement('source'), {
			id: 'mp4',
			src: '../Video/fools.mp4',
			type: 'video/mp4'
		});

		video.append(source);
		document.body.append(video);

		colorMode('dark');
	}
	else {
		date_time();
	}

	// Framemode parameter
	var framemode = params.get('framemode');
	if (framemode == 'contact') {
		document.getElementById('topleftframe').src = './errorPage.html?msg=This part is unfinished';
	}
	else if (framemode == 'teacher') {
		document.getElementById('topleftframe').src = './errorPage.html?msg=This part is unfinished';
	}
	else {
	}
}

//==========================================================
//=                      Theme script                      =
//==========================================================
// Main Theme Update script
function HyperTextTheme(){
	var d = new Date();
	var n = d.getHours();
	const clock = document.getElementById('Time');
	const sweetmodal = document.getElementById('swal');
	const ihtlogo = document.getElementById('InfonetHyperTextLogo');
	if (n >= 23){
		document.body.background = '../Images/Background/23.png';
	}
	else {
		document.body.background = `../Images/Background/${n}.png`;
	}
	if (n >= 0 && n < 8) {
		colorMode('dark');
	}
	else if (n >= 8 && n < 16) {
		ihtlogo.src = daytimelogo;
		colorMode('light');
	}
	else if (n >= 16) {

		colorMode('dark');
	}
}

function colorMode(theme) {
	htmlTag =  document.getElementsByTagName("HTML")[0];
	if (theme == 'light') {
		if (htmlTag.classList.contains('theme-light')) {
		}
		else if (htmlTag.classList.contains('theme-dark')) {
		htmlTag.classList.add('theme-light');
		htmlTag.classList.remove('theme-dark');
		document.getElementById('InfonetHyperTextLogo').src = daytimelogo;
		document.getElementById('swal').setAttribute('href', '../CSS/Sweetalert2/default.css');
		}
	}
	else if (theme == 'dark') {
		if (htmlTag.classList.contains('theme-dark')) {
		}
		else if (htmlTag.classList.contains('theme-light')) {
		htmlTag.classList.add('theme-dark');
		htmlTag.classList.remove('theme-light');
		document.getElementById('InfonetHyperTextLogo').src = nighttimelogo;
		document.getElementById('swal').setAttribute('href', '../CSS/Sweetalert2/dark.css');
		}
	}
	else {
		console.error(`Invalid argument: ${theme}`)
	}
}
	
//==========================================================
//=                    The Clock script                    =
//==========================================================
function date_time() {
	date = new Date;
	year = date.getFullYear();
	month = date.getMonth();
	months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec');
	d = date.getDate();
	day = date.getDay();
	days = new Array('Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za');
	h = date.getHours();
	if(h<10) {
		h = '0'+h;
	}
	m = date.getMinutes();
	if(m<10) {
		m = '0'+m;
	}
	s = date.getSeconds();
	if(s<10) {
		s = '0'+s;
	}
	result = ' '+days[day]+' '+d+' '+months[month]+' '+year+' - '+h+':'+m+':'+s+' ';
	document.getElementById('Time').innerHTML = result;
	setTimeout('date_time()','500');
	return true;
}

//==========================================================
//=           Automatic iframe height adjustment           =
//==========================================================
function resize() {
	var heights = window.innerHeight;
	var headerheight = document.getElementById('Header').clientHeight;
	var frameheights = (heights - headerheight - 12);
	if (daFrame == 'tripleright') {
		document.getElementById('topleftframe').style.height = frameheights + 'px';
		var doubleframeheights = frameheights / 2 - 6;
		document.getElementById('toprightframe').style.height = doubleframeheights + 'px';
		document.getElementById('bottomrightframe').style.height = doubleframeheights + 'px';
	}
	else if (daFrame == 'tripleleft') {
		document.getElementById('toprightframe').style.height = frameheights + 'px';
		var doubleframeheights = frameheights / 2 - 6;
		document.getElementById('topleftframe').style.height = doubleframeheights + 'px';
		document.getElementById('bottomleftframe').style.height = doubleframeheights + 'px';
	}
	else if (daFrame == 'tetraframe') {
		var doubleframeheights = frameheights / 2 - 6;
		document.getElementById('topleftframe').style.height = doubleframeheights + 'px';
		document.getElementById('bottomleftframe').style.height = doubleframeheights + 'px';
		document.getElementById('toprightframe').style.height = doubleframeheights + 'px';
		document.getElementById('bottomrightframe').style.height = doubleframeheights + 'px';
	}
	else {
		document.getElementById('topleftframe').style.height = frameheights + 'px';
		document.getElementById('toprightframe').style.height = frameheights + 'px';
	}
}

//==========================================================
//=           Hinder opening the developer tools           =
//==========================================================
document.onkeydown = function (event)
{
	// ALT and F12
	event = (event || window.event);
	if (event.keyCode == 123 || event.keyCode == 18)
	{
		return false;
	}
}
document.onkeydown = function(e) {
	// F1
	if(event.keyCode == 112) {
		return false;
	}
	// F2
	if(event.keyCode == 113) {
		return false;
	}
	// F3
	if(event.keyCode == 114) {
		return false;
	}
	// F4
	if(event.keyCode == 115) {
		return false;
	}
	// F6
	if(event.keyCode == 117) {
		return false;
	}
	// F7
	if(event.keyCode == 118) {
		return false;
	}
	// F8
	if(event.keyCode == 119) {
		return false;
	}
	// F9
	if(event.keyCode == 120) {
		return false;
	}
	// F10
	if(event.keyCode == 121) {
		return false;
	}
	// F12
	if(event.keyCode == 123) {
		return false;
	}
	// CTRL + SHIFT + I
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
		return false;
	}
	// CTRL + SHIFT + C
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
		return false;
	}
	// CTRL + SHIFT + K
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'K'.charCodeAt(0)) {
		return false;
	}
	// CTRL + SHIFT + Z
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'Z'.charCodeAt(0)) {
		return false;
	}
	// CTRL + SHIFT + E
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'E'.charCodeAt(0)) {
		return false;
	}
	// CTRL + SHIFT + J
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
		return false;
	}
	// CTRL + SHIFT + J
	if(e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
		return false;
	}
	// CTRL + U
	if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
		return false;
	}
}

//==========================================================
//=                Fade in and out using JS                =
//==========================================================
function fadeIn( el, speed ) {
	var seconds = speed/1000;
	el.style.transition = 'opacity '+seconds+'s ease';
	el.style.opacity = 1;
}
function fadeOut( el, speed ) {
	var seconds = speed/1000;
	el.style.transition = 'opacity '+seconds+'s ease';
	el.style.opacity = 0;
}

//==========================================================
//=         Smoothly show off the new iframe width         =
//==========================================================

// Note: This is no longer being used
/*function newWidth() {
	let root = document.documentElement;
	root.style.setProperty('--leftwidth', '65%');
}*/

//==========================================================
//=                      Menu manager                      =
//==========================================================
// Open the menu on right click
window.addEventListener('contextmenu', function (e) {
	toggleMenu();
	e.preventDefault();
}, false);
// Open the menu when pressed space
document.body.onkeyup = function(e){
	if(e.keyCode == 32){
		toggleMenu();
	}
}
function toggleMenu() {
	if (menuEnable === true) {
		// Open menu
		document.getElementById('PageContentDiv').classList.toggle('toggled');
		document.getElementById('nav').classList.toggle('toggled');
		document.getElementById('menu').classList.toggle('toggled');
	}
}

//==========================================================
//=               Menu options and functions               =
//==========================================================
document.getElementById('menuopt1').addEventListener('click', event => {
	toggleMenu();
})
document.getElementById('menuopt2').addEventListener('click', event => {
	toggleMenu();
	reloadInfonet();
})
document.getElementById('menuopt3').addEventListener('click', event => {
	toggleDarkMode();
})
document.getElementById('menuopt4').addEventListener('click', event => {
	startGuide();
})
document.getElementById('menuopt5').addEventListener('click', event => {
	toggleMenu();
	versionModal();
})
document.getElementById('menuopt6').addEventListener('click', event => {
	toggleMenu();
	window.open('https://github.com/MaxTechnics/Infonet-HyperText/issues', '_blank');
}) 
document.getElementById('menuopt7').addEventListener('click', event => {
	toggleMenu();
	okBye();
})

//==========================================================
//=                   Go back to Console                   =
//==========================================================
function okBye() {
	// Enable overlay
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.background = '#E8E8E8';
	setTimeout(() => {
		// Fade in the overlay
		fadeIn(document.getElementById('overlay'), 600);
		// Start next stage
		setTimeout(() => {
			console.log('K BYEEE');
			window.location.href = '../../index.html';
		}, 600);
	}, 10);
}

//==========================================================
//=             About Infonet HyperText dialog             =
//==========================================================
function versionModal() {
	var versionTextString = 'Version: '+ currentVersion; 
	Swal.fire({
		title: 'About Infonet HyperText',
		text: versionTextString,
		icon: 'info',
		showClass: {
			popup: 'fadein'
		},
		showCancelButton: false,
		showConfirmButton: true,
		confirmButtonColor: '#28a745',
		confirmButtonText: 'Close'
	})
}

//==========================================================
//=   Prompt to switch to guide when the logo is clicked   =
//==========================================================
function startGuide() {
	Swal.fire({
		title: 'Interactive guide',
		text: 'Would you like to enter the Interactive Guide?',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#3085d6',
		confirmButtonText: 'Yes',
		cancelButtonText: 'No',
		reverseButtons: true
	}).then((result) => {
		if (result.value) {
			guideActivate();
		}
	})
}
function guideActivate() {
	// Log the activation
	console.log('Interactive Guide Activation started.');
	// Enable overlay
	document.getElementById('overlay').style.display = 'block';
	// Change overlay color
	document.getElementById('overlay').style.background = '#0e0e0f';
	setTimeout(() => {
		// Fade in the overlay
		fadeIn(document.getElementById('overlay'), 600);
		setTimeout(() => {
			// Redirect to the Interactive Guide
			window.location.href = '../Guide/index.html';
		}, 600);
	}, 10);
}

//==========================================================
//=  Keyboard monitoring for the input of the Konami code  =
//==========================================================

// Secret
class Deferred {
	constructor () {
		this.promise = new Promise((resolve, reject) => {
			this.resolve = resolve
			this.reject = reject
		})
	}
}

function* iterateEvents (type) {
	let nextEvent = new Deferred()
	const onEvent = event => {
		nextEvent.resolve(event)
		nextEvent = new Deferred()
	}
	document.addEventListener(type, onEvent)
	try {
		while (true) {
			yield nextEvent.promise
		}
	} finally {
		document.removeEventListener(type, onEvent)
	}
}

class Buffer {
	static from (array) {
		const buffer = new Buffer(array.length)
		return buffer.push(...array)
	}

	constructor (length) {
		this.length = length
		this.data = Array(length).fill(undefined)
	}

	push (...values) {
		this.data.push(...values)
		this.data = this.data.slice(-this.length)
		return this
	}

	values () {
		return this.data.slice().values()
	}

	equals (buffer) {
		return this.data.every((value, index) => value === buffer.data[index])
	}
}

async function matchKeyboardSequence (sequence, timeoutTime, callback) {
	let pressed
	const clearPressed = () => pressed = new Buffer(sequence.length)
	clearPressed()  
	let timeoutId
	const resetTimeout = () => {
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => {
			clearPressed()
			resetTimeout()
		}, timeoutTime)
	}
	resetTimeout()

	for (let eventPromise of iterateEvents('keydown')) {
		const event = await eventPromise;
		resetTimeout()
		if (pressed.push(event.keyCode).equals(sequence)) {
			clearPressed()
			callback()
		}
	}
}

// Check this string
const kernel = Buffer.from([38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13])
matchKeyboardSequence(kernel, 1000, () => kettle())

//==========================================================
//=               The Konami code is entered               =
//==========================================================
// The array of available songs
const bgmArray = ['Graviton Flux - Singularity', 
'Renard - Send It To The Moon',
'Big Giant Circles - Go For Distance',
'Otis McDonald - Richard\'s Stuff',
'Initial D - Deja Vu',
'Daniwell - Nyanyanyanyanyanyanya!',
'Rick Astley - Never Gonna Give You Up',
'Approaching Nirvana & Big Giant Circles - Reboot',
'Yeah Yeah Yeahs - Heads Will Roll',
'Bag Raiders - Shooting Stars',
'Queen - Don\'t stop me now',
'Illenium - Crawl Outta Love',
'Sub Urban - Cradles',
'Joakim Karud - Good Old Days',
'Nightcore - Rockefeller Street',
'a-ha - Take On Me',
'Andrew Applepie - I\'m so',
'Darude - Sandstorm',
'Harold Faltermeyer - Axel F',
'Noisestorm - Crab Rave',
'Nea - Some Say',
'Owl City - Fireflies',
'Gigi D\'Agostino - L\'Amour Toujours',
'Lemaitre - Axel F',
'Smash Mouth - All Star',
'Naz3nt - Coconut Mall',
'Eiffel 65 - Blue',
'Video Game Remixes - Wii Shop Channel',
'ODESZA - Loyal',
'MagnusTheMagnus - Keep On Lovin\'',
'MagnusTheMagnus - Area',
'The Dirty Tees - More Cowbell',
'United States Marine Band - Regimental Pride March',
'Initial D - Running in The 90s',
'Vicetone & Tony Igy - Astronomia',
'Yamboo - Kalinka',
'Wagner - Ride of the Valkries',
'Astrophysics - Bad Guy Synthwave Remix',
'Astrophysics - Astronomia Synthwave Remix',
'Fortnite - Travis Scott Event',
'Loituma - Ievan Polkka',
'The Living Tombstone - We are number one',
'Edward Maya - Stereo Love',
'Engelwood - Crystal Dolphin',
'Pixel Terror - Millennia',
'burbank - sorry i like you',
'RŮDE - Angel\'s Cry',
'Three Chain Links - Die Historic',
'Jou Beats - Brasil',
'Harry Bluestone - Housewives Choice'];

var lastTwoItems = [];


function kettle() {
	if (konamiActivated === true) {
		// Stop any possibly existing playback
		document.getElementById('LoadedAudio').pause();
		// Choose random BG song
		// We don't want to play the same item twice. So we remove the 2 last played tracks from the array
		const selectableChoons = bgmArray.filter(opt => !lastTwoItems.includes(opt));
		// Pick something random out of the playable array
		const bgm = selectableChoons[Math.floor(Math.random() * selectableChoons.length)];
		// Log that
		console.log({lastTwoItems, selectableChoons, bgm});
		// Add this track to the array and remove the oldest item
		if (lastTwoItems.length === 2) {
		  lastTwoItems.shift();
		}
		lastTwoItems.push(bgm);
		// Set the selected track as the source
		var bgmsrc = '../Sound/kettle/'+bgm+'.mp3';
		// Set the source to the random selected song
		document.getElementById('LoadedAudio').src = bgmsrc;
		// Load/Buffer said song
		document.getElementById('LoadedAudio').load();
		console.log(bgm);
		// Then play it
		document.getElementById('LoadedAudio').play();
		setTimeout(() => {
			showKonamiTitle(bgm);
		}, 500);
	}
	else if (konamiActivated === false) {
		kaudio.play();
		Swal.fire({
			icon: 'success',
			title: 'OwO',
			text: 'You entered the secret code ^_^',
			showConfirmButton: true,
			confirmButtonColor: '#28a745',
			confirmButtonText: 'Show me the secrit!',
			timer: 10000,
			timerProgressBar: true,
			allowEnterKey: false,
			allowEscapeKey: false,
			allowOutsideClick: false,
			toast: false,
			onOpen: (toast) => {
				toast.addEventListener('mouseenter', Swal.stopTimer)
				toast.addEventListener('mouseleave', Swal.resumeTimer)
			}
		}).then((result) => {
			if (result.value) {
				// Initial playback started
				konamiActivated = true;
				// Log the activation
				console.log('Kettle Mode activated');
				// Reset refresh delay
				clearTimeout(IHTReload);
				// Enable overlay
				document.getElementById('overlay').style.display = 'block';
				setTimeout(() => {
					// Fade in the overlay
					fadeIn(document.getElementById('overlay'), 600);
					setTimeout(() => {
						// Kill any existing audio process
						document.getElementById('LoadedAudio').pause();
						// Set volume to 35%
						document.getElementById('LoadedAudio').volume = 0.35;
						// Stop theme script
						clearInterval(theme);
						// Remove background
						document.body.background = '';
						// Switch to dark mode
						colorMode('dark');
						// Choose random BG song
						// We don't want to play the same item twice. So we remove the 2 last played tracks from the array
						const selectableChoons = bgmArray.filter(opt => !lastTwoItems.includes(opt));
						// Pick something random out of the playable array
						const bgm = selectableChoons[Math.floor(Math.random() * selectableChoons.length)];
						// Log that
						console.log({lastTwoItems, selectableChoons, bgm});
						// Add this track to the array and remove the oldest item
						if (lastTwoItems.length === 2) {
						  lastTwoItems.shift();
						}
						lastTwoItems.push(bgm);
						// Set the selected track as the source
						var bgmsrc = '../Sound/kettle/'+bgm+'.mp3';
						// Set the source to the random selected song
						document.getElementById('LoadedAudio').src = bgmsrc;
						// Load/Buffer said song
						document.getElementById('LoadedAudio').load();
						console.log(bgm);
						// Make all iframes more transparent
						document.getElementById('topleftframe').style.opacity = '0.20';
						document.getElementById('toprightframe').style.opacity = '0.20';
						if (document.getElementById('bottomrightframe') !== null) {
							document.getElementById('bottomrightframe').style.opacity = '0.20';
						}
						if (document.getElementById('bottomleftframe') !== null) {
							document.getElementById('bottomleftframe').style.opacity = '0.20';
						}
						// Create new background with WarpSpeed
						new WarpSpeed('kettlebg', {'speed':0.4,'speedAdjFactor':0,'density':1,'shape':'square','warpEffect':false,'depthFade':true,'starSize':4,'backgroundColor':'hsl(263,45%,7%)','starColor':'#FFFFFF'});
						// Add a menu option
						// Get the nav element
						var navNode = document.getElementById('nav').children;
						// Get the ul within the nav
						var navChild = navNode[0];
						// Create a li
						var liNode = document.createElement('li');
						// Create an a
						var aNode = document.createElement('a');
						// Set it's id
						aNode.setAttribute('id', 'menuopt8');
						// Create a span
						var spanNode = document.createElement('span');
						// Create text
						var textNode = document.createTextNode('Change Song');
						// Put the text in the span
						spanNode.appendChild(textNode);
						// Put the span in the a
						aNode.appendChild(spanNode);
						// Put the a in the li
						liNode.appendChild(aNode);
						// Put the li in the ul
						navChild.appendChild(liNode);
						// Add an eventlistener to make the new option do something
						document.getElementById('menuopt8').addEventListener('click', event => {
							toggleMenu();
							kettle();
						})
						setTimeout(() => {
							// Play it
							document.getElementById('LoadedAudio').play();
							// Fade out the overlay
							fadeOut(document.getElementById('overlay'), 1000);
							setTimeout(() => {
								// Disable overlay
								document.getElementById('overlay').style.display = 'none';
							}, 1010);
						}, 1500);
						setTimeout(() => {
							showKonamiTitle(bgm);
						}, 2000);
					}, 610); 
				}, 20);
			}
		})
	}
}
function showKonamiTitle(bgm) {
	// Display toast with playing message
	var bgmmsg = 'Playing: '+ bgm;
	Swal.fire({
		showClass: {
			popup: 'fadein'
		},
		hideClass: {
			popup: 'fadeout'
		},
		toast: true,
		position: 'top-end',
		icon: 'info',
		title: bgmmsg,
		showConfirmButton: false,
		timer: 5000,
		timerProgressBar: true,
		onOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer)
			toast.addEventListener('mouseleave', Swal.resumeTimer)
		}
	})
}

//==========================================================
//=             Random tip or fun fact on load             =
//==========================================================
function displayTip(){
	// Select random tip
	var tipArray = ['We have a Discord server',
	'Infonet HyperText automatically refreshes',
	'Check the status at infonet.statuspage.io',
	'Try entering the Konami code',
	'You can be a betatester if you want to',
	'Infonet HyperText can be referred to as IHT',
	'Suggestions can be sent to our Discord server',
	'IHT is now available on GitHub',
	'Have another tip? Send it over!',
	'There is an interactive guide',
	'Betatesters get credited',
	'Infonet HyperText is Open Source',
	'Infonet adjusts itself to your screen',
	'Have a question? Send it to Infonet Team!',
	'Feature releases are common!',
	'We do not collect or store user data',
	'This site does not use cookies :]',
	'Access the menu by right-clicking or pressing space'];
	var tip = tipArray[Math.floor(Math.random() * tipArray.length)];
	// Display toast
	Swal.fire({
		showClass: {
			popup: 'fadein'
		},
		hideClass: {
			popup: 'fadeout'
		},
		toast: true,
		position: 'top-end',
		icon: 'info',
		title: tip,
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
	})
}

//==========================================================
//=              The Infonet HyperText Loader              =
//==========================================================
function loadInfonet() {
	console.log('Started Infonet HyperText.');
	resize();
	setTimeout(displayTip, 600);
	setTimeout(() => {
		fadeOut(document.getElementById('loadingscreen'), 750);
		document.getElementById('LoadedAudio').play();
		// Prevent dragging the logo
		document.getElementById('InfonetHyperTextLogo').setAttribute('draggable', false);
		document.getElementById('LoadingAudio').style.display = 'none';
		setTimeout(() => {
				document.getElementById('LoadingAudio').remove();
				document.getElementById('loadingscreen').remove();
		}, 5000);
		setTimeout(() => {
				menuEnable = true;
		}, 750);
		console.log('Infonet HyperText Loaded Successfully');
	}, 500);
}

//==========================================================
//=             The Infonet HyperText Reloader             =
//==========================================================
function reloadInfonet() {
	console.log('Reloading');
	clearInterval(theme);
	if (darkModeActivated !== true) {
	document.getElementById('overlay').style.background = '#E8E8E8';
	}
	document.getElementById('overlay').style.display = 'block';
	setTimeout(() => {
		fadeIn(document.getElementById('overlay'), 600);
		setTimeout(() => {
			location = location;
		}, 650);
	}, 10);
}