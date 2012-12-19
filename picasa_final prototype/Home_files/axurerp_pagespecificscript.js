
var PageName = 'Home';
var PageId = 'p9d5f8b2a895d44958c61a67dd7e4e849'
var PageUrl = 'Home.html'
document.title = 'Home';

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

eval(GetDynamicPanelScript('u21', 1));

eval(GetDynamicPanelScript('u19', 1));

eval(GetDynamicPanelScript('u17', 1));

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{

if (true) {

	self.location.href="manage1.html" + GetQuerystring();

}

}

var u2 = document.getElementById('u2');

u2.style.cursor = 'pointer';
if (bIE) u2.attachEvent("onclick", Clicku2);
else u2.addEventListener("click", Clicku2, true);
function Clicku2(e)
{

if (true) {

	NewWindow("Upload_1.html" + GetQuerystring(), "", "directories=0, height=590, location=0, menubar=0, resizable=1, scrollbars=0, status=1, toolbar=0, width=760", true, 760, 590);

}

}

if (bIE) u2.attachEvent("onmouseover", MouseOveru2);
else u2.addEventListener("mouseover", MouseOveru2, true);
function MouseOveru2(e)
{
if (!IsTrueMouseOver('u2',e)) return;
if (true) {

	SetPanelVisibilityu17("");

}

}

if (bIE) u2.attachEvent("onmouseout", MouseOutu2);
else u2.addEventListener("mouseout", MouseOutu2, true);
function MouseOutu2(e)
{
if (!IsTrueMouseOut('u2',e)) return;
if (true) {

	SetPanelVisibilityu17("hidden");

}

}

var u19 = document.getElementById('u19');

var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

	self.location.href="share_1.html" + GetQuerystring();

}

}

var u22 = document.getElementById('u22');

var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{

if (true) {

	self.location.href="share_1.html" + GetQuerystring();

}

}
gv_vAlignTable['u12'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{

if (true) {

	NewWindow("Upload_1.html" + GetQuerystring(), "", "directories=0, height=590, location=0, menubar=0, resizable=1, scrollbars=0, status=0, toolbar=0, width=760", true, 760, 590);

}

}

var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{

if (true) {

	NewWindow("Upload_1.html" + GetQuerystring(), "", "directories=0, height=590, location=0, menubar=0, resizable=1, scrollbars=0, status=1, toolbar=0, width=760", true, 760, 590);

}

}
gv_vAlignTable['u10'] = 'top';
var u0 = document.getElementById('u0');

var u26 = document.getElementById('u26');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u21 = document.getElementById('u21');

var u17 = document.getElementById('u17');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u23 = document.getElementById('u23');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{

if (true) {

	self.location.href="manage1.html" + GetQuerystring();

}

}

if (bIE) u6.attachEvent("onmouseover", MouseOveru6);
else u6.addEventListener("mouseover", MouseOveru6, true);
function MouseOveru6(e)
{
if (!IsTrueMouseOver('u6',e)) return;
if (true) {

	SetPanelVisibilityu19("");

}

}

if (bIE) u6.attachEvent("onmouseout", MouseOutu6);
else u6.addEventListener("mouseout", MouseOutu6, true);
function MouseOutu6(e)
{
if (!IsTrueMouseOut('u6',e)) return;
if (true) {

	SetPanelVisibilityu19("hidden");

}

}

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u20 = document.getElementById('u20');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{

if (true) {

	self.location.href="manage1.html" + GetQuerystring();

}

}
gv_vAlignTable['u11'] = 'top';
var u18 = document.getElementById('u18');

var u24 = document.getElementById('u24');

var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{

if (true) {

	self.location.href="share_1.html" + GetQuerystring();

}

}

if (bIE) u4.attachEvent("onmouseover", MouseOveru4);
else u4.addEventListener("mouseover", MouseOveru4, true);
function MouseOveru4(e)
{
if (!IsTrueMouseOver('u4',e)) return;
if (true) {

	SetPanelVisibilityu21("");

}

}

if (bIE) u4.attachEvent("onmouseout", MouseOutu4);
else u4.addEventListener("mouseout", MouseOutu4, true);
function MouseOutu4(e)
{
if (!IsTrueMouseOut('u4',e)) return;
if (true) {

	SetPanelVisibilityu21("hidden");

}

}

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
if (window.OnLoad) OnLoad();
