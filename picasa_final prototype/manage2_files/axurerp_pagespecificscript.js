
var PageName = 'manage2';
var PageId = 'pbfb70cc9e4674829ab53ec52bc155e1f'
var PageUrl = 'manage2.html'
document.title = 'manage2';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $EvenNumTrack = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&EvenNumTrack=' + encodeURIComponent($EvenNumTrack) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[EvenNumTrack\]\]/g, $EvenNumTrack);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

}

eval(GetDynamicPanelScript('u3', 1));

var u16 = document.getElementById('u16');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u2 = document.getElementById('u2');

if (bIE) u2.attachEvent("onmouseover", MouseOveru2);
else u2.addEventListener("mouseover", MouseOveru2, true);
function MouseOveru2(e)
{
if (!IsTrueMouseOver('u2',e)) return;
if (true) {

	SetPanelVisibilityu3("");

}

}

var u19 = document.getElementById('u19');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u12 = document.getElementById('u12');

var u5 = document.getElementById('u5');

var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{

if (true) {

	NewWindow("manage_3.html" + GetQuerystring(), "", "directories=0, height=330, location=0, menubar=0, resizable=1, scrollbars=0, status=1, toolbar=0, width=445", true, 445, 330);

	SetPanelVisibilityu3("hidden");

}

}

var u10 = document.getElementById('u10');

var u0 = document.getElementById('u0');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u3 = document.getElementById('u3');

var u14 = document.getElementById('u14');

var u6 = document.getElementById('u6');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u4 = document.getElementById('u4');

if (window.OnLoad) OnLoad();
