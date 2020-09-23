b = new WarpSpeed("canvas", {"speed":1,"speedAdjFactor":0.03,"density":0.7,"shape":"square","warpEffect":true,"warpEffectLength":5,"depthFade":true,"starSize":3,"backgroundColor":"hsl(263,45%,7%)","starColor":"#FFFFFF"})
b.TARGET_SPEED=1


  /////////////////////////
 // BG activity manager //
/////////////////////////
setTimeout(boxFadein, 1000);
function boxFadein() {
	document.getElementById('img_category_label').style.display = 'block';
}
function startRedirect(mode) {
	removeFadeOut(document.getElementById('img_category_label'), 700);
	removeFadeOut(document.getElementById('reportButton'), 700);
	removeFadeOut(document.getElementById('canvas'), 700);
	console.log(mode)
	setTimeout(() => {
		window.location.href = mode;
	}, 1200);
}


// Fadeout
function removeFadeOut( el, speed ) {
	var seconds = speed/1000;
	el.style.transition = 'opacity '+seconds+'s ease';
  
	el.style.opacity = 0;
	setTimeout(function() {
		el.parentNode.removeChild(el);
	}, speed);
  }


function guideMode() {
	document.body.style.backgroundColor = '#0e0e0f';
	startRedirect('./Data/Guide/index.html');
}

function notDone() {
Swal.fire({
	icon: 'info',
	title:'Mode unfinished',
	text: 'This mode isn\'t done yet. Please select another one.',
	showConfirmButton: false,
	confirmButtonText: 'Close',
	timer: 5000,
	timerProgressBar: true,
	allowOutsideClick: false,
	allowEscapeKey: false,
	allowEnterKey: false
   })
}
  ////////////////////////////////////////
 // Reload when back button is clicked //
////////////////////////////////////////
window.addEventListener( 'pageshow', function ( event ) {
	var historyTraversal = event.persisted || 
						   ( typeof window.performance != 'undefined' && 
								window.performance.navigation.type === 2 );
	if ( historyTraversal ) {
	  // Handle page restore.
	  window.location.reload();
	}
  });
  
  ///////////////////////////////////////////////////////
 // Automatically go to default mode after 20 seconds //
///////////////////////////////////////////////////////

//setTimeout(startRedirect('Data/Pages/Infonet%20HyperText.html'), 20000);
var autoload = setTimeout(() => {
	autoLoad();
}, 30000);

function autoLoad() {
const loadparams = new URLSearchParams(window.location.search);
var bool = loadparams.get('teacher');
if (bool == 'true') {
	startRedirect('./Data/Pages/main.html?framemode=teacher');
}
else {
	startRedirect('./Data/Pages/main.html');
}

}

   /////////////////////////////////////////////////////
  // Switching between frame modes by pushing states //
 //	and generating a link before redirecting	 //
/////////////////////////////////////////////////////
setTimeout(defineMode, 400);
function defineMode(){
	const params = new URLSearchParams(window.location.search)
	var teachermode = params.get('teacher');
	if (teachermode == 'true') {
		enableTeacher();
	}
	else {
	}

}

// Set the console destination to Teacher mode
function enableTeacher() {
	// Predefining the elements to make it easier to use
var opt1 = document.getElementById('opt_1'); // Default
var opt2 = document.getElementById('opt_2'); // XMOS
var opt3 = document.getElementById('opt_3'); // April Fools Stage 1
var opt4 = document.getElementById('opt_4'); // April Fools Stage 2
var opt5 = document.getElementById('opt_5'); // Interactive Guide
var opt6 = document.getElementById('opt_6'); // Toggle Teacher mode
var titl = document.getElementById('dropdowntitle'); // Drop down title
	window.history.pushState('', '', '?teacher=true');
	opt1.setAttribute('onclick', 'startRedirect(\'./Data/Pages/main.html?framemode=teacher\');');
	opt2.setAttribute('onclick', 'startRedirect(\'./Data/Pages/main.html?mode=xmos&framemode=teacher\');');
	opt3.setAttribute('onclick', 'startRedirect(\'./Data/Pages/main.html?mode=afs1&framemode=teacher\');');
	opt4.setAttribute('onclick', 'startRedirect(\'./Data/Pages/main.html?mode=afs2&framemode=teacher\');');
	opt6.setAttribute('onclick', 'disableTeacher();');
	opt6.innerHTML = 'Disable Teacher Mode';
	titl.innerHTML = 'Teacher Mode Active';
	setTimeout(() => {
		document.getElementById('selectedspan').innerHTML = '';
		document.getElementById('dropdowntitle').removeAttribute('style');
	}, 10);

}

// Set the console destination to normal
function disableTeacher() {
var opt1 = document.getElementById('opt_1'); // Default
var opt2 = document.getElementById('opt_2'); // XMOS
var opt3 = document.getElementById('opt_3'); // April Fools Stage 1
var opt4 = document.getElementById('opt_4'); // April Fools Stage 2
var opt5 = document.getElementById('opt_5'); // Interactive Guide
var opt6 = document.getElementById('opt_6'); // Toggle Teacher mode
var titl = document.getElementById('dropdowntitle'); // Drop down title
	window.history.pushState('', '', '?teacher=false');
	opt1.setAttribute('onclick', 'startRedirect(\'./Data/Pages/main.html\');');
	opt2.setAttribute('onclick', 'startRedirect(\'./Data/Pages/main.html?mode=xmos\');');
	opt3.setAttribute('onclick', 'startRedirect(\'./Data/Pages/main.html?mode=afs1\');');
	opt4.setAttribute('onclick', 'startRedirect(\'./Data/Pages/main.html?mode=afs2\');');
	opt6.setAttribute('onclick', 'enableTeacher();');
	opt6.innerHTML = 'Enable Teacher Mode';
	titl.innerHTML = 'HyperText Mode';
	setTimeout(() => {
		document.getElementById('selectedspan').innerHTML = '';
		document.getElementById('dropdowntitle').removeAttribute('style');
	}, 10);
}

  ///////////////////////////////////////
 // EventListeners for some functions //
///////////////////////////////////////
setTimeout(enableReporting, 400);
function enableReporting() {
document.getElementById('reportButton').addEventListener('click', event => {
		startRedirect('https://github.com/MaxTechnics/Infonet-HyperText/issues');
	})
}
setTimeout(controlAutoload, 400);
function controlAutoload() {
document.body.addEventListener('click', stopAutoload);
}

function stopAutoload() {
	clearTimeout(autoload);
	console.log('timeouts cleared!');
	document.body.removeEventListener('click', stopAutoload);
}

//==========================================================
//=		     Hinder opening the developer tools    	       =
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
	// F11
	if(event.keyCode == 122) {
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

   ////////////////////////////////////
  // prerequisite utility functions //
 // the real stuff starts below	   //
////////////////////////////////////
var util = {
	f: {
		addStyle: function (elem, prop, val, vendors) {
			var i, ii, property, value
			if (!util.f.isElem(elem)) {
				elem = document.getElementById(elem)
			}
			if (!util.f.isArray(prop)) {
				prop = [prop]
				val = [val]
			}
			for (i = 0; i < prop.length; i += 1) {
				var thisProp = String(prop[i]),
					thisVal = String(val[i])
				if (typeof vendors !== 'undefined') {
					if (!util.f.isArray(vendors)) {
						vendors.toLowerCase() == 'all' ? vendors = ['webkit', 'moz', 'ms', 'o'] : vendors = [vendors]
					}
					for (ii = 0; ii < vendors.length; ii += 1) {
						elem.style[vendors[i] + thisProp] = thisVal
					}
				}
				thisProp = thisProp.charAt(0).toLowerCase() + thisProp.slice(1)
				elem.style[thisProp] = thisVal
			}
		},
		cssLoaded: function (event) {
			var child = util.f.getTrg(event)
			child.setAttribute('media', 'all')
		},
		events: {
			cancel: function (event) {
				util.f.events.prevent(event)
				util.f.events.stop(event)
			},
			prevent: function (event) {
				event = event || window.event
				event.preventDefault()
			},
			stop: function (event) {
				event = event || window.event
				event.stopPropagation()
			}
		},
		getSize: function (elem, prop) {
			return parseInt(elem.getBoundingClientRect()[prop], 10)
		},
		getTrg: function (event) {
			event = event || window.event
			if (event.srcElement) {
				return event.srcElement
			} else {
				return event.target
			}
		},
		isElem: function (elem) {
			return (util.f.isNode(elem) && elem.nodeType == 1)
		},
		isArray: function(v) {
			return (v.constructor === Array)
		},
		isNode: function(elem) {
			return (typeof Node === 'object' ? elem instanceof Node : elem && typeof elem === 'object' && typeof elem.nodeType === 'number' && typeof elem.nodeName==='string' && elem.nodeType !== 3)
		},
		isObj: function (v) {
			return (typeof v == 'object')
		},
		replaceAt: function(str, index, char) {
			return str.substr(0, index) + char + str.substr(index + char.length);
		}
	}
},
   //////////////////////////////////////
  // ok that's all the utilities	  //
 // onto the select box / form stuff //
//////////////////////////////////////
form = {
f: {
	init: {
		register: function () {
			var child, children = document.getElementsByClassName('field'), i
			for (i = 0; i < children.length; i += 1) {
				child = children[i]
				util.f.addStyle(child, 'Opacity', 1)
			}
			children = document.getElementsByClassName('psuedo_select')
			for (i = 0; i < children.length; i += 1) {
				child = children[i]
				child.addEventListener('click', form.f.select.toggle)
			}
		},
		unregister: function () {
			//just here as a formallity
			//call this to stop all ongoing timeouts are ready the page for some sort of json re-route
		}
	},
	select: {
		blur: function (field) {
			field.classList.remove('focused')
			var child, children = field.childNodes, i, ii, nested_child, nested_children
			for (i = 0; i < children.length; i += 1) {
				child = children[i]
				if (util.f.isElem(child)) {
					if (child.classList.contains('deselect')) {
						child.parentNode.removeChild(child)
					} else if (child.tagName == 'SPAN') {
						if (!field.dataset.value) {
							util.f.addStyle(child, ['FontSize', 'Top'], ['16px', '32px'])
						}
					} else if (child.classList.contains('psuedo_select')) {
						nested_children = child.childNodes
						for (ii = 0; ii < nested_children.length; ii += 1) {
							nested_child = nested_children[ii]
							if (util.f.isElem(nested_child)) {
								if (nested_child.tagName == 'SPAN') {
									if (!field.dataset.value) {
										util.f.addStyle(nested_child, ['Opacity', 'Transform'], [0, 'translateY(24px)'])
									}
								} else if (nested_child.tagName == 'UL') {
										util.f.addStyle(nested_child, ['Height', 'Opacity'], [0, 0])
								}
							}
						}
					}
				}
			}
		},
		focus: function (field) {
			field.classList.add('focused')
			var bool = false, child, children = field.childNodes, i, ii, iii, nested_child, nested_children, nested_nested_child, nested_nested_children, size = 0
			for (i = 0; i < children.length; i += 1) {
				child = children[i]
				util.f.isElem(child) && child.classList.contains('deselect') ? bool = true : null
			}
			if (!bool) {
				child = document.createElement('div')
				child.className = 'deselect'
				child.addEventListener('click', form.f.select.toggle)
				field.insertBefore(child, children[0])
			}
			for (i = 0; i < children.length; i += 1) {
				child = children[i]
				if (util.f.isElem(child) && child.classList.contains('psuedo_select')) {
					nested_children = child.childNodes
					for (ii = 0; ii < nested_children.length; ii += 1) {
						nested_child = nested_children[ii]
						if (util.f.isElem(nested_child) && nested_child.tagName == 'UL') {
							size = 0
							nested_nested_children = nested_child.childNodes
							for (iii = 0; iii < nested_nested_children.length; iii += 1) {
								nested_nested_child = nested_nested_children[iii]
								if (util.f.isElem(nested_nested_child) && nested_nested_child.tagName == 'LI') {
									size += util.f.getSize(nested_nested_child, 'height')
									console.log('size: ' + size)
								}
							}
							util.f.addStyle(nested_child, ['Height', 'Opacity'], [size + 'px', 1])
						}
					}
				}
			}
		},
		selection: function (child, parent) {
			var children = parent.childNodes, i, ii, nested_child, nested_children, time = 0, value
			if (util.f.isElem(child) && util.f.isElem(parent)) {
				parent.dataset.value = child.dataset.value
				value = child.innerHTML
			}
			for (i = 0; i < children.length; i += 1) {
				child = children[i]
				if (util.f.isElem(child)) {
					if (child.classList.contains('psuedo_select')) {
						nested_children = child.childNodes
						for (ii = 0; ii < nested_children.length; ii += 1) {
							nested_child = nested_children[ii]
							if (util.f.isElem(nested_child) && nested_child.classList.contains('selected')) {
								if (nested_child.innerHTML)  {
									time = 1E2
									util.f.addStyle(nested_child, ['Opacity', 'Transform'], [0, 'translateY(24px)'], 'all')
								}
								setTimeout(function (c, v) {
									c.innerHTML = v
									util.f.addStyle(c, ['Opacity', 'Transform', 'TransitionDuration'], [1, 'translateY(0px)', '.1s'], 'all')
								}, time, nested_child, value)
							}
						}
					} else if (child.tagName == 'SPAN') {
						util.f.addStyle(child, ['FontSize', 'Top'], ['12px', '8px'])
				   }
			   }
			}
		},
		toggle: function (event) {
			util.f.events.stop(event)
			var child = util.f.getTrg(event), children, i, parent
			switch (true) {
				case (child.classList.contains('psuedo_select')):
				case (child.classList.contains('deselect')):
					parent = child.parentNode
					break
				case (child.classList.contains('options')):
					parent = child.parentNode.parentNode
					break
				case (child.classList.contains('option')):
					parent = child.parentNode.parentNode.parentNode
					form.f.select.selection(child, parent)
					break
			}
			parent.classList.contains('focused') ? form.f.select.blur(parent) : form.f.select.focus(parent)
		}
	}
}}
window.onload = form.f.init.register