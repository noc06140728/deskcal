var nav = document.getElementById('nav');
var mainbody = document.getElementById('mainbody');
var gridcontainer = document.getElementById('gridcontainer');
var onegoogbar = document.getElementById('onegoogbar');
var applogo = document.getElementsByClassName('applogo')[0];
var mainlogo = document.getElementById('mainlogo');

var NAV_STYLE_DISPLAY = nav.style.display;
var MAINBODY_STYLE_MARGIN_LEFT = mainbody.style.marginLeft;
var GRIDCONTAINER_STYLE_MARGIN_RIGHT = gridcontainer.style.marginRight;
var ONEGOOGBAR_STYLE_DISPLAY = onegoogbar.style.display;

function hideBars() {
    nav.style.display = 'none';
    mainbody.style.marginLeft = '5px';
    gridcontainer.style.marginRight = '5px';
    onegoogbar.style.display = 'none';
}

function showBars() {
    nav.style.display = NAV_STYLE_DISPLAY;
    mainbody.style.marginLeft = MAINBODY_STYLE_MARGIN_LEFT;
    gridcontainer.style.marginRight = GRIDCONTAINER_STYLE_MARGIN_RIGHT;
    onegoogbar.style.display = ONEGOOGBAR_STYLE_DISPLAY;
}

var hide_button = document.createElement('div');
hide_button.className = 'navbuttonouter goog-inline-block';
hide_button.title = 'サイドバーを隠す';
hide_button.style.display = 'inline-block';
hide_button.innerHTML = '<div class="navbutton navBack goog-inline-block"></div>';
hide_button.addEventListener('click', function() {
    hideBars();
    hide_button.style.display = 'none';
    show_button.style.display = 'inline-block';
});

var show_button = document.createElement('div');
show_button.className = 'navbuttonouter goog-inline-block';
show_button.title = 'サイドバーを表示する';
show_button.style.display = 'none';
show_button.innerHTML = '<div class="navbutton navForward goog-inline-block"></div>';
show_button.addEventListener('click', function() {
    showBars();
    show_button.style.display = 'none';
    hide_button.style.display = 'inline-block';
});

var showhide_button = document.createElement('span');
showhide_button.style.marginRight = '4px';
showhide_button.appendChild(hide_button);
showhide_button.appendChild(show_button);
mainlogo.parentElement.insertBefore(showhide_button, mainlogo);


var bubble = document.querySelector('div.bubble');
var prong = bubble.children[1].children[2];

function adjustBubble(mutationRecords) {
  if (bubble.style.visibility == 'visible') {
    var left = bubble.offsetLeft;
    if (left < 0) {
      bubble.style.left = '0px';
      prong.style.left = prong.offsetLeft + left + 'px';
    }
  }
}

var mo = new MutationObserver(adjustBubble);
mo.observe(bubble, {attributes: true});

