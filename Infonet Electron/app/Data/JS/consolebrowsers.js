function unTested() {
	Swal.fire({
		icon: 'warning',
		title:'Ongoing testing',
		text: 'Testing for this browser hasn\'t finished yet. Continue at your own risk!',
		showConfirmButton: true,
		confirmButtonText: 'Close',
		timer: 5000,
		timerProgressBar: true,
		allowOutsideClick: false,
		allowEscapeKey: false,
		allowEnterKey: false
	})
}
setTimeout(() => {
	// Check for Internet Explorer and redirects to an error page
	if(navigator.appName.indexOf('Internet Explorer')!=-1 || navigator.userAgent.match(/Trident.*rv[ :]*11\./)) {
		clearTimeout(autoload);
		// This user uses Internet Explorer
		Swal.fire({
			icon: 'error',
			title:'Your browser isn\'t supported.',
			text: 'Internet Explorer isn\'t supported by Infonet HyperText.',
			showConfirmButton: false,
			confirmButtonText: 'Close',
			allowOutsideClick: false,
			allowEscapeKey: false,
			allowEnterKey: false
		})
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
		unTested(); 
	}
	// Checks for old Internet Explorer
	else if ((verOffset=nAgt.indexOf('MSIE'))!=-1) {
		browserName = 'Microsoft Internet Explorer';
		// This user uses Internet Explorer
		clearTimeout(autoload);
		Swal.fire({
			icon: 'error',
			title:'Your browser isn\'t supported.',
			text: 'Internet Explorer isn\'t supported by Infonet HyperText.',
			showConfirmButton: false,
			confirmButtonText: 'Close',
			allowOutsideClick: false,
			allowEscapeKey: false,
			allowEnterKey: false
		})
	}
	// Checks for Chrome (can be triggered by newer Edge versions)
	else if ((verOffset=nAgt.indexOf('Chrome'))!=-1) {
		browserName = 'Chrome';
		// This user uses Google Chrome
		// window.location = './Data/Pages/errorPage.html?msg=This browser isn\'t supported';
	}
	// Checks for Safari
	else if ((verOffset=nAgt.indexOf('Safari'))!=-1) {
		browserName = 'Safari';
		// This user uses Safari
		// window.location = './Data/Pages/errorPage.html?msg=This browser isn\'t supported';
	}
	// Checks for Firefox
	else if ((verOffset=nAgt.indexOf('Firefox'))!=-1) {
		browserName = 'Firefox';
		// This user uses Firefox
		// window.location = './Data/Pages/errorPage.html?msg=This browser isn\'t supported';
	}
	// Checks for older Edge versions
	else if ((verOffset=nAgt.indexOf('Edge'))!=-1) {
		browserName = 'Edge';
		// This user uses Edge (experimental line)
		clearTimeout(autoload);
		unTested();
	}
	else {
		Swal.fire({
			icon: 'warning',
			title:'We couldn\'t determine your browser',
			text: 'Chances are that your browser isn\'t supported. Continue at your own risk.',
			showConfirmButton: true,
			timer: 5000,
			confirmButtonText: 'Close',
			allowOutsideClick: false,
			allowEscapeKey: false,
			allowEnterKey: false
		})
	}
}, 1000);