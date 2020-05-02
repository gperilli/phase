function jslooper() {
	document.getElementById("PlyAllIcoOn").style.display = "none";
	SocialMBtns();
	jslsetterseq();
}

function jslsetterseq() {
	
	SmpleIcoClrs = ["#786fa6", "#f8a5c2", "#63cdda", "#ea8685", "#596275"];
	
	for (i = 1; i < 6; i++) {
		document.getElementById("nteslctr".concat(i)).style.fill = SmpleIcoClrs[i-1];
	}
	
	//3seq load blocks
	blnkblokinsrt(5, "3seqcol");
	seqblokinsrt(3, "o3", "3seqcol");
	tmpadjsterinsrt(3, "3seqcol");
	//5seq load blocks
	blnkblokinsrt(3, "5seqcol");
	seqblokinsrt(5, "o5", "5seqcol");
	tmpadjsterinsrt(5, "5seqcol");
	//7seq load blocks
	seqblokinsrt(7, "o7", "7seqcol");
	tmpadjsterinsrt(7, "7seqcol");
	
	SmplNteChngr(0)
	
	//Load in sample icons
	SeqSttr(3);
	SeqSttr(5);
	SeqSttr(7);
	
	
	
}

function blnkblokinsrt(n, col) {
	blnkblok = `
	<!--blnk blok-->
	<div class="border" class="blokcnt" style="opacity: 0; margin-top: 5px;">
		
		<div class="SmplSlctrL">
			<svg height="50" width="15">
			  <polygon points="15,0 15,50 0,25" style="fill:#fff;" />
			  Sorry, your browser does not support inline SVG.
			</svg>
		</div>
		<div class="SmplSlctrR">
			<svg height="50" width="15">
			  <polygon points="0,0 0,50 15,25" style="fill:#fff;" />
			  Sorry, your browser does not support inline SVG.
			</svg>
		</div>
	
		<div class="blok border"></div>
	</div>
	`;
	
	
	for (i = 1; i < n; i++) {
		document.getElementById(col).insertAdjacentHTML("beforeend", blnkblok);
	}
	
}

function seqblokinsrt(n, blksuff, col) {
	
	for (i = n; i > 0; i--) {
		mySiemaXoX = "mySiema".concat(i, blksuff);
		SBlkXoX = "SBlk".concat(i, blksuff);
		siemaXoX = "siema".concat(i, blksuff);
		
		seqblok = `
		<!-- Seq Blok -->
		<div class="border" style="width: 90px; margin-top: 5px;">
			<div class="SmplSlctrOvly">
				<div class="SmplSlctrL" onClick="${mySiemaXoX}.prev()">
					<svg height="50" width="15" >
					  <polygon points="15,0 15,50 0,25" style="fill:#808080;" />
					  Sorry, your browser does not support inline SVG.
					</svg>
				</div>
				<div class="SmplSlctrR" onclick="${mySiemaXoX}.next()">
					<svg height="50" width="15">
					  <polygon points="0,0 0,50 15,25" style="fill:#808080;" />
					  Sorry, your browser does not support inline SVG.
					</svg>
				</div>
			</div>
			
			<div style="width: 50px; height: 50px; position: relative;">
				<div id="${SBlkXoX}" class="${siemaXoX}" style="display: inline-block; width: 100%; position: absolute; top: 0; left: 0; border-top: 1px solid #ddd; border-bottom: 1px solid #ddd;" >
							
				</div>
			</div>
		</div>
		`;
		
		document.getElementById(col).insertAdjacentHTML("beforeend", seqblok);
	}
}

function tmpadjsterinsrt(n, col) {
	
	XSeqBlkTmpoDsp = "".concat(n, "SeqBlkTmpoDsp");
	
	tmpoadjstr = `
	<!--Tempo Adjuster for SeqBlk-->
	<p style="display: inline-block; user-select:none;"><span id="${XSeqBlkTmpoDsp}">200</span><span>bpm</span></p>
	
	<div class="" style="padding-top: 0px; height: 15px; width: 50px;">
		<svg onmousedown="SeqXIncre(${n}, 1, 400)" onmouseup="cleartimer()" ontouchstart="SeqXIncre(${n}, 1, 400)" ontouchend="cleartimer()" height="15" width="50" style="vertical-align: top;">
		  <polygon points="0,15 25,0 50,15" style="fill:#808080;" />
		  Sorry, your browser does not support inline SVG.
		</svg>
	</div>
		
	<div class="" style="margin-top: 10px; height: 15px; width: 50px;">
		<svg onmousedown="SeqXIncre(${n}, -1, 400)" onmouseup="cleartimer()" ontouchstart="SeqXIncre(${n}, -1, 400)" ontouchend="cleartimer()" height="15" width="50" style="vertical-align: top;">
		  <polygon points="0,0 25,15 50,0" style="fill:#808080;" />
		  Sorry, your browser does not support inline SVG.
		</svg>
	</div>
		
	`;
	document.getElementById(col).insertAdjacentHTML("beforeend", tmpoadjstr);
}

function SeqSttr(seqn) {
	//Siema content Loader 123XoX
	//alert(seqn);
	for(j = 1; j < (seqn + 1); j++) {
		XoXSmplTp = "".concat(j, "o", seqn,"SmplTp");			
		SBlkX0X = "SBlk".concat(j, "o", seqn);
		for(i = 1; i < 16; i++) {
			XoXSmplTpX = XoXSmplTp.concat(i);
			SBlkItmTmp = `
				<svg xmlns="http://www.w3.org/2000/svg" class="SmpleDsp" style="width: 100%; position: relative;" viewBox="0 0 67.733323 67.733331" width="100%">
					<path class=${XoXSmplTpX} style="" d=""> </path>
				</svg>
			`;
			document.getElementById(SBlkX0X).insertAdjacentHTML("beforeend", SBlkItmTmp);
		}
	}
	
	
	//Set Siemas 123XoX
	for(SiemaN = 1; SiemaN < (seqn + 1); SiemaN++) {
		//window[mySiemaX] = "mySiema".concat(SiemaN);
		window["mySiema".concat(SiemaN, "o", seqn)] = new Siema({
			selector: ".siema".concat(SiemaN, "o", seqn),
			duration: 200,
			easing: 'ease-out',
			perPage: 1,
			startIndex: 0,
			draggable: true,
			multipleDrag: true,
			threshold: 20,
			loop: true,
			rtl: false,
		});
	}
	
	//SmpleIcoClrs[];
	
	//SVG path data for 123XoX
	for (i = 1; i < (seqn + 1); i++) {
		//Load in Smple Img blocks. Sometimes doubles for Siema duplicates.
		XoXSmplTp = "".concat(i, "o", seqn,"SmplTp");
		Clr = 0;
		for (j = 1; j < 16; j += 3) {
			document.getElementsByClassName(XoXSmplTp.concat(j))[0].setAttribute('d', SmplIco[2]);
			document.getElementsByClassName(XoXSmplTp.concat(j))[0].style.fill = SmpleIcoClrs[Clr];
			
			document.getElementsByClassName(XoXSmplTp.concat(j+1))[0].setAttribute('d', SmplIco[3]);
			document.getElementsByClassName(XoXSmplTp.concat(j+1))[0].style.fill = SmpleIcoClrs[Clr];

			document.getElementsByClassName(XoXSmplTp.concat(j+2))[0].setAttribute('d', SmplIco[4]);
			document.getElementsByClassName(XoXSmplTp.concat(j+2))[0].style.fill = SmpleIcoClrs[Clr];
			Clr = Clr + 1;
		}
		
		document.getElementsByClassName(XoXSmplTp.concat("1"))[1].setAttribute('d', SmplIco[2]);
		document.getElementsByClassName(XoXSmplTp.concat("1"))[1].style.fill = SmpleIcoClrs[0];
		document.getElementsByClassName(XoXSmplTp.concat("15"))[1].setAttribute('d', SmplIco[4]);
		document.getElementsByClassName(XoXSmplTp.concat("15"))[1].style.fill = SmpleIcoClrs[4];
	}
	
}



var S7Tmpo = 100;
var S5Tmpo = 100;
var S3Tmpo = 100;
function SeqXIncre(seqN, drctn, intvl) {
	//console.log(seqN);
	TmpoDsp = "".concat(seqN, "SeqBlkTmpoDsp");
	//console.log(TmpoDsp);
	SXTmpo = document.getElementById(TmpoDsp).innerHTML;
	SeqXIncrLp(SXTmpo, drctn, intvl);
}

function SeqXIncrLp(SXTmpo, drctn, intvl) {
	SXTmpo = parseInt(SXTmpo);
	SXTmpo = SXTmpo + drctn;
	if (intvl <= 50) { intvl = 50 } else { intvl = intvl - 50; }
	document.getElementById(TmpoDsp).innerHTML = SXTmpo;
	timer = setTimeout(function() { SeqXIncrLp(SXTmpo, drctn, intvl);}, intvl);
}

function cleartimer() {
	clearTimeout(timer);
}




var SeqLst = {
		3: {},
		5: {},
		7: {},
	};
var PlyStat = 0;

function PlyAllAud() {
	if (PlyStat == 0) {
		document.getElementById("PlyAllIcoOff").style.display = "none";
		document.getElementById("PlyAllIcoOn").style.display = "block";
		PlyStat = 1;
	} else {
		document.getElementById("PlyAllIcoOff").style.display = "block";
		document.getElementById("PlyAllIcoOn").style.display = "none";
		PlyStat = 0;
	}
	
	
	SeqXgen = [3, 5, 7];
	
	for (j = 0; j < 3; j++) {
		for (i = 1; i < (SeqXgen[j] + 1); i++) {
			SBlkXoX = "SBlk".concat(i, "o", SeqXgen[j]); 
			SeqLst[SeqXgen[j]][i] = SBlkXoX;
		}
	}
	
	SeqsLght(0.5);
	
	//op = 1;
	seqpos = 1;
	TmpoDsp3 = "3SeqBlkTmpoDsp";
	TmpoDsp5 = "5SeqBlkTmpoDsp";
	TmpoDsp7 = "7SeqBlkTmpoDsp";
	flickr3(seqpos);
	flickr5(seqpos);
	flickr7(seqpos);
}

function SeqsLght(hl) {
	//SeqXgen = [3, 5, 7];
	for (j = 0; j < 3; j++) {
		for (i = 1; i < (SeqXgen[j] + 1); i++) {
			SBlkXoX = "SBlk".concat(i, "o", SeqXgen[j]);
			document.getElementById(SBlkXoX).style.opacity = hl;
		}
	}
}


function flickr3(seq3pos) {
	
	//alert(TmpoDsp3);
	var SXBPM = document.getElementById(TmpoDsp3).innerHTML;
	var SXBPMi = parseInt(SXBPM);
	var SXBeatIntvl = 60000 / SXBPMi;
	
	//reset loop
	if (seq3pos == 4) {
		seq3pos = 1;
	}
	
	//in case pos is 0, dehighlight max pos
	if (seq3pos == 1) {
		document.getElementById("SBlk3o3").style.opacity = 0.5;
	} else {
		SBlkXo3 = "SBlk".concat((seq3pos - 1), "o3");
		document.getElementById(SBlkXo3).style.opacity = 0.5;
	} 
	
	//Highlight current
	SBlkXo3 = "SBlk".concat((seq3pos), "o3");
	document.getElementById(SBlkXo3).style.opacity = 1;
	
	seq3pos = seq3pos + 1;
	
	if (PlyStat == 1) {
		setTimeout(function() { flickr3(seq3pos) }, SXBeatIntvl);
	} else {
		seq3pos = 0;
		SeqsLght(1);
	}
}


function flickr5(seq5pos) {
	
	//alert(TmpoDsp3);
	var SXBPM = document.getElementById(TmpoDsp5).innerHTML;
	var SXBPMi = parseInt(SXBPM);
	var SXBeatIntvl = 60000 / SXBPMi;
	
	//reset loop
	if (seq5pos == 6) {
		seq5pos = 1;
	}
	
	//in case pos is 0, dehighlight max pos
	if (seq5pos == 1) {
		document.getElementById("SBlk5o5").style.opacity = 0.5;
	} else {
		SBlkXo5 = "SBlk".concat((seq5pos - 1), "o5");
		document.getElementById(SBlkXo5).style.opacity = 0.5;
	} 
	
	//Highlight current
	SBlkXo5 = "SBlk".concat((seq5pos), "o5");
	document.getElementById(SBlkXo5).style.opacity = 1;
	
	seq5pos = seq5pos + 1;
	
	if (PlyStat == 1) {
		setTimeout(function() { flickr5(seq5pos) }, SXBeatIntvl);
	} else {
		seq5pos = 0;
		SeqsLght(1);
	}
}

function flickr7(seq7pos) {
	
	//alert(TmpoDsp3);
	var SXBPM = document.getElementById(TmpoDsp7).innerHTML;
	var SXBPMi = parseInt(SXBPM);
	var SXBeatIntvl = 60000 / SXBPMi;
	
	//reset loop
	if (seq7pos == 8) {
		seq7pos = 1;
	}
	
	//in case pos is 0, dehighlight max pos
	if (seq7pos == 1) {
		document.getElementById("SBlk7o7").style.opacity = 0.5;
	} else {
		SBlkXo7 = "SBlk".concat((seq7pos - 1), "o7");
		document.getElementById(SBlkXo7).style.opacity = 0.5;
	} 
	
	//Highlight current
	var SBlkXo7 = "SBlk".concat((seq7pos), "o7");
	document.getElementById(SBlkXo7).style.opacity = 1;
	
	seq7pos = seq7pos + 1;
	
	if (PlyStat == 1) {
		setTimeout(function() { flickr7(seq7pos) }, SXBeatIntvl);
	} else {
		seq7pos = 0;
		SeqsLght(1);
	}
}


function SocialMBtns() {
	
	//Facebook Button Icon Loader
	for(var i = 0; i < 2; ++i) {
      var FbBtnIcon = document.getElementsByClassName("FbBtn-logo");
      FbBtnIcon[i].setAttribute('d', 'M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34 c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z');
    }

    //Twitter Button Icon Loader
    for(var i = 0; i < 2; ++i) {
       var TwBtnIcon = document.getElementsByClassName("TwBtn-logo");
       TwBtnIcon[i].setAttribute('d', 'M90.461,40.316c-2.404,1.066-4.99,1.787-7.702,2.109c2.769-1.659,4.894-4.284,5.897-7.417 c-2.591,1.537-5.462,2.652-8.515,3.253c-2.446-2.605-5.931-4.233-9.79-4.233c-7.404,0-13.409,6.005-13.409,13.409 c0,1.051,0.119,2.074,0.349,3.056c-11.144-0.559-21.025-5.897-27.639-14.012c-1.154,1.98-1.816,4.285-1.816,6.742 c0,4.651,2.369,8.757,5.965,11.161c-2.197-0.069-4.266-0.672-6.073-1.679c-0.001,0.057-0.001,0.114-0.001,0.17 c0,6.497,4.624,11.916,10.757,13.147c-1.124,0.308-2.311,0.471-3.532,0.471c-0.866,0-1.705-0.083-2.523-0.239 c1.706,5.326,6.657,9.203,12.526,9.312c-4.59,3.597-10.371,5.74-16.655,5.74c-1.08,0-2.15-0.063-3.197-0.188 c5.931,3.806,12.981,6.025,20.553,6.025c24.664,0,38.152-20.432,38.152-38.153c0-0.581-0.013-1.16-0.039-1.734 C86.391,45.366,88.664,43.005,90.461,40.316L90.461,40.316z');
     }
		
}



function SmplNteChngr(noteclr) {
		
		//Remove opacity 0
		document.getElementById("ImgCvr1").classList.remove("transi");
		document.getElementById("ImgCvr2").classList.remove("transi");
		document.getElementById("ImgCvr3").classList.remove("transi");
		
		//make the change
		SmplClrChnge(noteclr);
		
		//reveal
		setTimeout(function() { revealer(noteclr) }, 0);
		
}

function SmplClrChnge(noteclr) {
	
	//Sample selector
	
	for (var i = 3; i < 6; i++) {
		SmpleTpXDspPth = document.getElementsByClassName("SmplTp".concat(i));
		SmpleTpXDspPth[0].setAttribute('d', SmplIco[i-1]);
		SmpleTpXDspPth[0].style.fill = SmpleIcoClrs[noteclr];
	}
}

function revealer(LXImgCvr) {
	document.getElementById("ImgCvr1").classList.add("transi");
	document.getElementById("ImgCvr2").classList.add("transi");
	document.getElementById("ImgCvr3").classList.add("transi");
}


// Share address for this page's share button popup window
var ShareAdr = 'https://gperilli.github.io/jslooper/';



//burger setting
  AccXStat = [];
  AccXStat['x'] = 0;
function brgrfunc(AccId) {
	
	if (AccXStat[AccId] == 0) {
     	document.getElementById('AccExsWIx').className = "BrgrExpdr expand";
		document.getElementById('BrgrBtn-RectH1').style.display = 'none';
        document.getElementById('BrgrBtn-RectH3').style.display = 'none';
		AccXStat[AccId] = 1;
     } else {
    	document.getElementById('AccExsWIx').className = "BrgrExpdr";
		document.getElementById('BrgrBtn-RectH1').style.display = 'block';
        document.getElementById('BrgrBtn-RectH3').style.display = 'block';
        AccXStat[AccId] = 0;
     }
}



var SmplIco = ["M 29.558863,63.13208 C 17.253236,61.397965 6.5989609,51.362593 4.4854215,39.061687 2.6170007,29.687436 5.7346167,19.548124 12.609772,12.891663 20.260243,4.5276671 33.035005,1.3583201 43.682433,5.29808 c 8.037707,2.7148112 14.582316,9.28021 17.785069,17.077156 3.071163,8.043572 3.02412,17.476646 -1.146154,25.134785 -2.269709,4.584218 -6.237035,8.08354 -10.239347,11.142752 -5.893553,4.181645 -13.47797,5.231051 -20.523138,4.479307 z M 42.175625,57.09024 C 51.451998,54.065337 58.264157,45.056746 58.76258,35.330551 59.805934,22.874817 50.153708,10.399931 37.638404,8.8579159 28.107291,7.3436858 18.062298,11.969413 12.884639,20.080215 6.8787886,28.866241 7.5104999,41.671936 14.78964,49.546546 c 4.219821,5.012519 10.352687,8.485862 16.987836,8.674585 3.499363,0.20407 7.099045,0.22834 10.398149,-1.130891 z", "M 43.505261,60.967822 C 36.646716,58.941141 29.856114,56.574925 22.762002,55.476846 18.211817,54.610954 13.181869,53.625741 10.17391,49.728003 6.4334708,45.210026 5.1225541,38.2759 7.9785228,32.990254 11.247819,27.822285 16.562426,24.485889 20.571792,19.956947 24.769058,15.963823 27.757487,10.602674 32.92449,7.7219429 38.544725,4.7603381 45.953344,6.3542256 50.446282,10.657177 c 4.212801,4.342618 4.252814,10.757472 5.927654,16.241963 1.469688,6.196989 4.153982,12.060167 5.27453,18.339907 0.86359,5.689514 -2.98183,10.999566 -7.479263,14.063413 -3.071979,2.044462 -7.123852,2.307361 -10.663942,1.665362 z M 49.4278,56.190899 c 3.181283,-1.348598 6.162859,-4.014475 7.138341,-7.413045 0.857123,-5.389256 -2.133899,-10.3402 -3.50571,-15.390208 -1.932928,-5.640745 -2.367977,-11.709975 -4.642806,-17.233761 -2.00394,-4.171494 -7.334034,-5.599143 -11.59845,-4.72515 -3.773501,1.223888 -6.101343,4.743234 -8.731705,7.493555 -4.084898,4.772245 -8.675584,9.065418 -13.285015,13.316072 -2.313088,2.129362 -3.880135,5.208986 -3.316406,8.417411 0.242688,4.230163 3.270576,8.329916 7.591208,9.022256 6.560101,1.471314 13.267743,2.413636 19.596476,4.780229 2.8854,0.799566 5.755491,1.981238 8.764576,2.123804 0.672033,-0.07838 1.337024,-0.21309 1.989491,-0.391163 z", "m 29.189185,62.846651 c -3.659627,-0.980403 -4.321188,-5.106434 -5.193362,-8.223968 -0.541527,-3.510098 -4.527925,-3.274764 -7.073873,-2.343831 -2.839945,0.957467 -6.253361,0.468205 -7.9779725,-2.2151 -2.1931895,-2.428669 -1.7806427,-6.237096 0.331805,-8.576015 1.8483345,-2.104386 4.2586125,-5.64295 1.1767065,-7.870876 -2.1687221,-1.964473 -5.3507502,-3.684622 -5.389878,-7.00328 -0.4785578,-3.713198 2.5863107,-7.416248 6.404491,-7.290942 2.583214,-0.37612 6.549115,0.460121 7.422291,-2.857679 0.512933,-3.390611 -0.574372,-7.6693799 2.563985,-10.0759816 2.673647,-2.4744314 7.227851,-2.108338 9.459095,0.7865905 1.799348,2.0239183 4.262846,5.7397071 7.37078,3.6483821 2.622354,-1.6430199 5.013038,-4.5724102 8.442113,-4.0631148 3.868751,0.3965949 6.784625,4.4922718 5.737207,8.2878758 -0.478865,2.49128 -1.725788,6.324516 1.377298,7.617118 3.159115,1.228283 7.436368,1.288834 9.163997,4.711715 1.121579,2.924611 0.733641,6.903471 -2.30515,8.532895 -2.129526,1.776897 -6.526567,2.300097 -6.125355,5.832167 0.668605,3.475306 3.806791,6.734545 2.210861,10.440437 -1.413758,2.969548 -4.983142,5.186242 -8.246748,3.765889 -2.593705,-0.68725 -5.362407,-3.093999 -8.040753,-1.441632 -2.495273,2.7288 -3.185599,7.501634 -7.217421,8.56201 -1.356061,0.446897 -2.781299,0.319944 -4.090117,-0.22266 z m 4.677479,-7.3345 c 1.412473,-3.443836 4.361973,-6.727822 8.356248,-6.729717 3.092384,-0.142784 5.635787,1.928488 8.563681,2.442074 3.255494,-1.134574 -0.7455,-4.926801 -0.946832,-7.162244 -0.361888,-2.645749 -0.569385,-5.72383 1.458449,-7.798844 1.843788,-2.496302 5.214287,-3.070756 7.257359,-5.268493 0.150184,-3.137122 -4.373057,-2.333481 -6.379211,-3.596971 -4.239816,-1.296332 -6.281836,-6.207446 -5.229324,-10.312944 1.052601,-2.093723 0.831122,-7.2487483 -2.550391,-4.500302 -2.483176,2.035403 -5.28485,4.298038 -8.724639,3.855824 -3.852252,0.0049 -6.242971,-3.476804 -8.633464,-5.98052 -3.430145,-2.542499 -2.77355,3.383943 -2.997544,5.358707 -0.103265,3.818675 -2.845955,7.425857 -6.726397,8.007724 -2.289575,1.002448 -5.509912,-0.435619 -7.204048,1.526456 -0.2926576,2.739825 3.736054,3.686096 4.989988,5.906925 2.853413,3.262678 2.225684,8.529543 -0.603771,11.615291 -2.222536,1.486413 -2.750064,5.902912 1.090332,4.563175 3.642884,-1.114523 8.210521,-1.363565 10.981844,1.755536 2.331464,2.332602 2.52899,5.754089 3.733396,8.639353 2.008666,1.421586 2.889228,-0.832992 3.564324,-2.32103 z", "m 37.920898,63.342478 c -3.117593,-1.008153 -2.510561,-5.798342 -5.054306,-6.729373 -1.968454,2.146412 -2.662685,5.975772 -6.102545,6.395528 -3.217147,0.457274 -6.388024,-2.583024 -5.643614,-5.853556 0.173504,-1.705528 1.781841,-6.521606 -1.541188,-4.323386 -2.512041,1.40489 -6.284504,3.101025 -8.543401,0.37943 -2.5266614,-2.501345 -1.2362425,-6.370738 1.230856,-8.366129 1.827116,-1.012755 2.282338,-3.379851 -0.428132,-3.020279 -2.6300683,-0.06865 -6.0392409,-0.485373 -6.9327662,-3.453736 -1.6313164,-3.53489 1.7655206,-6.734552 5.1173492,-7.088193 2.200227,-0.06369 3.645585,-1.848959 1.126143,-3.084231 -2.5826724,-1.572288 -4.950196,-4.732581 -3.1835038,-7.779418 1.6450993,-3.450942 5.9264678,-2.832775 8.7874118,-1.483114 4.059038,1.522335 0.55997,-3.737061 0.508563,-5.544996 -0.967079,-4.1194298 4.780045,-7.5795016 7.892323,-4.6572871 1.665119,0.9815347 4.251306,6.8356311 5.205581,2.4912581 0.350916,-3.3828732 2.464621,-7.6470893 6.576102,-6.6044546 3.966594,0.6139326 4.175757,5.092424 4.450296,8.2297326 1.514537,2.148814 3.679753,-2.520106 5.648348,-3.0060039 3.400428,-2.3181627 8.350676,1.7499559 6.976434,5.5625149 -0.218499,1.843374 -4.321754,6.87968 -0.0063,5.669761 3.0066,-1.065094 7.321712,-1.010276 8.459334,2.661275 1.6932,3.983355 -2.445887,6.393629 -5.318249,8.03247 -1.576757,2.486222 4.013391,2.29397 5.163967,4.05202 3.245242,2.444508 1.348441,8.882664 -2.969783,8.475468 -1.788569,0.200175 -7.21778,-0.624477 -4.53862,2.42405 1.779529,2.211203 4.003022,5.588639 1.580929,8.165613 -1.805542,2.964534 -5.695813,2.295571 -7.996859,0.365666 -1.937458,-2.09494 -4.370755,-1.91116 -3.312734,1.396933 0.357056,2.883102 -0.523377,6.621037 -3.899814,7.125971 -1.092784,0.272995 -2.258668,0.07586 -3.251858,-0.433534 z m 2.04134,-7.093791 c -0.523043,-3.031222 0.793369,-6.571967 3.983777,-7.463622 3.056103,-1.198008 5.635343,1.427218 8.094223,2.806662 -1.581124,-2.509102 -4.293327,-5.34926 -2.8676,-8.547636 1.31701,-3.576575 5.574327,-4.083591 8.850273,-3.586354 -0.203608,-1.088942 -4.573217,-1.412488 -5.439399,-3.485202 -2.510203,-2.815037 -0.897414,-7.197701 2.236523,-8.750092 1.049192,-0.603564 3.750804,-2.140834 0.99723,-1.379929 -2.991423,0.950953 -7.037442,0.575508 -8.502576,-2.62774 -1.475898,-2.888651 0.43082,-5.907385 1.656729,-8.503266 -2.389347,1.922059 -4.967401,5.003117 -8.412242,3.925424 -3.32113,-0.796621 -4.369677,-4.459909 -4.440794,-7.462296 -0.402345,-2.5892467 -0.849015,2.357761 -1.463157,3.108956 -1.030727,3.486634 -5.606356,4.927696 -8.476558,2.782504 -1.518872,-1.118531 -2.644647,-2.65258 -3.856854,-4.076623 1.214256,3.027195 2.68096,6.925613 0.01932,9.613981 -2.232371,2.451985 -5.841864,1.757387 -8.567103,0.673722 -2.104812,-0.247981 2.340748,1.937372 2.691949,2.935782 2.792409,2.70391 1.449251,7.789351 -2.177189,8.972786 -1.430052,0.606459 -2.961074,0.905718 -4.450465,1.326754 3.104575,0.436453 7.08715,0.363303 8.615881,3.660896 1.436561,2.72947 0.0055,5.90763 -2.151063,7.798674 -1.440854,1.314983 -1.061648,1.730379 0.542351,0.597684 2.559886,-1.793919 6.47227,-2.178322 8.544232,0.572585 2.380731,2.25716 1.03522,5.648835 0.823883,8.432571 1.411401,-2.399945 2.751886,-5.333001 5.755827,-6.050541 3.460197,-1.015628 6.389586,2.3022 7.312814,5.321032 1.011554,2.7668 0.799737,1.226285 0.679988,-0.596712 z", "m 31.07376,63.446132 c -3.022971,-1.332962 -2.745768,-5.01236 -2.741802,-7.790399 -1.318818,2.501462 -2.958288,5.850469 -6.278327,5.591219 -3.134121,-0.465254 -5.060878,-4.091021 -3.309498,-6.855376 0.508503,-1.075864 1.841608,-3.823584 -0.280765,-1.82376 -2.101776,2.257225 -6.244923,3.043624 -8.025231,-0.03057 C 8.2405989,49.544945 11.49503,46.608883 13.520208,44.658473 11.663414,44.407115 7.7451285,46.322236 5.8877765,43.705931 3.6718569,41.142039 5.2357796,37.125048 8.4120865,36.322782 8.8320407,35.924109 12.156888,35.483236 11.060622,35.21916 8.4530845,34.723478 4.9191464,34.274207 4.2401653,31.162774 3.3859944,27.822693 6.837506,24.856892 10.050597,25.798145 c 1.538505,0.224701 3.572504,0.192921 1.084201,-0.990432 -2.9213541,-1.302155 -4.6776204,-5.29472 -2.0307948,-7.771014 2.4338088,-2.778606 5.7678078,-0.549148 8.2559108,0.784878 -0.17663,-1.661601 -3.48643,-4.829501 -1.645941,-7.298622 1.549919,-2.9782002 6.035667,-3.2016 7.782423,-0.305856 0.737731,0.855037 2.356269,3.800069 1.845019,0.817361 -0.702459,-2.9326954 0.45236,-6.9697791 4.090282,-6.8617624 3.37303,-0.3105653 4.736591,3.4044591 5.094957,6.1361424 0.108468,1.991648 0.497621,0.181362 0.823902,-0.7773151 0.620121,-2.4625615 2.394637,-5.6202122 5.406023,-4.9334357 3.527451,0.3105661 4.532189,4.3764975 3.446222,7.2313638 -0.831602,3.577691 1.61723,-1.16323 3.077626,-1.660619 2.754006,-2.2404813 7.242863,0.196318 6.915942,3.674077 0.340649,1.914433 -3.369704,4.898536 -2.158788,5.236563 2.559901,-1.665341 6.937203,-2.673977 8.460756,0.856791 1.726607,2.907432 -0.961868,5.818219 -3.562958,6.884512 -1.183752,0.587849 -1.922467,1.056959 -0.115855,0.846956 2.538076,-0.104758 5.920628,0.02794 6.773786,2.983732 1.475672,3.459346 -2.229151,6.263726 -5.422899,6.16006 -4.046325,0.427579 2.855606,1.626794 3.46166,3.401357 2.285213,2.873767 -0.861849,7.826484 -4.478484,6.7863 -1.275671,-0.07497 -5.598932,-2.138022 -3.086878,0.20907 2.497056,1.82631 3.828659,5.686737 0.969355,7.861322 -2.54047,2.300734 -5.76571,0.259486 -7.70984,-1.743079 -1.779615,-1.238953 0.569984,2.556893 0.480457,3.723967 0.700694,3.909705 -5.025928,6.852101 -7.564537,3.562055 -1.158216,-1.368756 -1.765439,-3.078436 -2.543737,-4.669807 -0.277615,2.596286 -0.110403,5.845595 -2.647793,7.366803 -1.234612,0.49682 -2.719827,0.623721 -3.976854,0.136619 z M 35.865671,50.78759 c 1.854417,-1.114781 3.923208,0.434637 5.361163,0.783698 0.135557,-3.102321 3.660227,-5.260598 6.532703,-4.188998 -0.305958,-2.190852 -0.305711,-4.815331 1.949824,-6.013124 1.603582,-0.770422 3.220444,-0.582377 1.41168,-2.359052 -1.514954,-2.435544 0.709407,-4.964989 1.610882,-6.699384 -2.939614,-1.348974 -3.143114,-5.135587 -1.989344,-7.489246 -3.177205,-0.03672 -5.259041,-3.146917 -4.974997,-6.116037 -2.656449,1.020696 -6.160767,-0.21642 -6.916861,-3.213012 -0.784413,-0.955385 -2.802105,2.280044 -4.542215,1.346941 -2.345289,0.24258 -3.788429,-3.842536 -4.75976,-0.22053 -1.463316,2.003128 -4.325107,2.230026 -6.367641,1.03793 0.413889,3.007277 -2.183345,6.151291 -5.320933,5.710822 -0.61059,0.765398 1.416372,3.792195 -0.192811,5.233229 -0.772703,1.82709 -4.207799,2.157723 -1.468511,3.949834 1.469594,2.096477 0.703001,4.88767 -1.052799,6.540297 3.11057,0.348694 5.228926,3.99363 3.910208,6.857946 2.198405,0.0042 5.479014,0.808216 5.974541,3.684331 -0.08034,3.299981 3.572864,-1.222787 5.487327,0.892354 1.555427,-0.07177 2.147562,3.804634 3.213349,1.847263 0.562346,-0.694951 1.320273,-1.225302 2.134195,-1.585262 z"];
	