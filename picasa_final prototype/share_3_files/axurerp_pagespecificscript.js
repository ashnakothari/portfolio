
var PageName = 'share 3';
var PageId = 'pbe3f0ec1272b4ffeb7150b3faa173af0'
var PageUrl = 'share_3.html'
document.title = 'share 3';

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

eval(GetDynamicPanelScript('u15', 1));

var u16 = document.getElementById('u16');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u15 = document.getElementById('u15');

var u2 = document.getElementById('u2');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{

if (true) {

	self.location.href="share_4.html" + GetQuerystring();

}

}

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{

if (true) {

	parent.window.close();

}

}

var u10 = document.getElementById('u10');

if (bIE) u10.attachEvent("onmouseover", MouseOveru10);
else u10.addEventListener("mouseover", MouseOveru10, true);
function MouseOveru10(e)
{
if (!IsTrueMouseOver('u10',e)) return;
if (true) {

	SetPanelVisibilityu15("");

}

}

if (bIE) u10.attachEvent("onmouseout", MouseOutu10);
else u10.addEventListener("mouseout", MouseOutu10, true);
function MouseOutu10(e)
{
if (!IsTrueMouseOut('u10',e)) return;
if (true) {

	SetPanelVisibilityu15("hidden");

}

}

var u0 = document.getElementById('u0');

var u17 = document.getElementById('u17');

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{

if (true) {

	NewWindow("edit_group_popup.html" + GetQuerystring(), "", "directories=0, height=555, location=0, menubar=0, resizable=1, scrollbars=0, status=0, toolbar=0, width=495", true, 495, 555);

}

}

var u6 = document.getElementById('u6');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{

if (true) {

	parent.window.close();

}

}

if (window.OnLoad) OnLoad();
