//==========================================================
//=            Infonet HyperText Update Backend            =
//=              Written by: Maxim Coppieters              =
//==========================================================

const currentVersion = 50
var latestVersion = 0
setTimeout(() => {
	if (latestVersion == currentVersion) {
		console.log('Up to date');
	}
	else if (latestVersion > currentVersion) {
		console.warn('Update available');
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
			title: 'A new version is available',
			showConfirmButton: false,
			timer: 10000,
			timerProgressBar: true,
		})
	}
	else if (latestVersion == 0) {
		console.error('Update server offline');
		Swal.fire({
			showClass: {
			  popup: 'fadein'
			},
			hideClass: {
			  popup: 'fadeout'
			},
			toast: true,
			position: 'top-end',
			icon: 'error',
			title: 'Could not reach the update server',
			showConfirmButton: false,
			timer: 10000,
			timerProgressBar: true,
		})
	}
	else if (latestVersion > 0 && latestVersion < currentVersion) {
		console.warn('Development build');
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
			title: 'This is a development build',
			showConfirmButton: false,
			timer: 10000,
			timerProgressBar: true,
		})
	}
	
}, 10000);