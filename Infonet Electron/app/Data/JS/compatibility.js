// Check for Internet Explorer and redirects to an error page
if(navigator.appName.indexOf('Internet Explorer')!=-1 || navigator.userAgent.match(/Trident.*rv[ :]*11\./)) {
	// This user uses Internet Explorer
	window.location = 'errorPage.html?msg=This browser isn\'t supported';
}

// Check for unsupported browsers
var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
var fullVersion  = ''+parseFloat(navigator.appVersion);
var majorVersion = parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;
// Checks for Opera
if ((verOffset=nAgt.indexOf('Opera'))!=-1) {
	browserName = 'Opera';
	// This user uses Opera
	window.location = 'errorPage.html?msg=This browser isn\'t supported';
}
// Checks for old Internet Explorer
else if ((verOffset=nAgt.indexOf('MSIE'))!=-1) {
	browserName = 'Microsoft Internet Explorer';
	// This user uses Internet Explorer
	window.location = 'errorPage.html?msg=This browser isn\'t supported';
}
// Checks for Chrome (can be triggered by newer Edge versions)
else if ((verOffset=nAgt.indexOf('Chrome'))!=-1) {
	browserName = 'Chrome';
	// This user uses Google Chrome
	// window.location = 'errorPage.html?msg=This browser isn\'t supported';
}
// Checks for Safari
else if ((verOffset=nAgt.indexOf('Safari'))!=-1) {
	browserName = 'Safari';
	// This user uses Safari
	// window.location = 'errorPage.html?msg=This browser isn\'t supported';
}
// Checks for Firefox
else if ((verOffset=nAgt.indexOf('Firefox'))!=-1) {
	browserName = 'Firefox';
	// This user uses Firefox
	// window.location = 'errorPage.html?msg=This browser isn\'t supported';
}
// Checks for older Edge versions
else if ((verOffset=nAgt.indexOf('Edge'))!=-1) {
	browserName = 'Edge';
	// This user uses Edge (experimental line)
	// window.location = 'errorPage.html?msg=This browser isn\'t supported';
}
else {
	// Not Edge, do nothing
}
