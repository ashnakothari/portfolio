
var PageName = 'create 2';
var PageId = 'p66d9e69e2f4c48498ee0579065ab2ebb'
var PageUrl = 'create_2.html'
document.title = 'create 2';

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

var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{

if (true) {

    var reload = ParentWindowNeedsReload("create_3.html");
	top.opener.window.location.href = "create_3.html" + GetQuerystring();
    if (reload) {
        top.opener.window.location = "Resources/reload.html#" + encodeURI(top.opener.window.location.href);
    }

	parent.window.close();

}

}

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u2 = document.getElementById('u2');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u12 = document.getElementById('u12');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u8 = document.getElementById('u8');

var u10 = document.getElementById('u10');

var u0 = document.getElementById('u0');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u14 = document.getElementById('u14');

var u6 = document.getElementById('u6');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{

if (true) {

	parent.window.close();

}

}

var u4 = document.getElementById('u4');

if (window.OnLoad) OnLoad();
