const buttons = document.querySelectorAll(".btn1");
buttons.forEach(function (_0x9f6c3c) {
  _0x9f6c3c.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 0x64);
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const _0x151bc6 = document.getElementById("updateAge");
  const _0x30e00c = document.getElementById("updateBirthcode");
  _0x30e00c.addEventListener("input", _0x120e3d);
  function _0x120e3d() {
    const _0x1ad755 = _0x30e00c.value;
    if (_0x1ad755.length === 0x8) {
      const _0x364d94 = parseInt(_0x1ad755.slice(0x0, 0x4));
      const _0xe9ee89 = parseInt(_0x1ad755.slice(0x4, 0x6)) - 0x1;
      const _0x1c164d = parseInt(_0x1ad755.slice(0x6, 0x8));
      const _0xc9eede = new Date(_0x364d94, _0xe9ee89, _0x1c164d);
      const _0x2de3e2 = new Date().getFullYear();
      const _0x248ffe = _0x2de3e2 - _0xc9eede.getFullYear() - (_0xc9eede.getMonth() > new Date().getMonth() || _0xc9eede.getMonth() === new Date().getMonth() && _0xc9eede.getDate() > new Date().getDate() ? 0x1 : 0x0);
      _0x151bc6.textContent = _0x248ffe;
    } else {
      _0x151bc6.textContent = "Ingen ålder";
    }
  }
  _0x120e3d();
});

function startCountdown() {
  let _0x23cb1b = 0x78;
  const _0x494190 = document.getElementById("countdownTimer");
  const _0x1360c1 = document.getElementById("countdownSpan");
  _0x494190.innerHTML = _0x23cb1b;
  const _0x4ee1d4 = setInterval(function () {
    _0x23cb1b--;
    _0x494190.innerText = _0x23cb1b;
    _0x494190.appendChild(_0x1360c1.cloneNode(true));
    if (_0x23cb1b === 0x0) {
      _0x23cb1b = 0x78;
      _0x494190.innerText = _0x23cb1b;
      _0x494190.appendChild(_0x1360c1.cloneNode(true));
    }
  }, 0x3e8);
  return _0x4ee1d4;
}

startCountdown();

function updateCurrentTime() {
  const _0x3e4067 = document.getElementById("currentTime");
  const _0x307d39 = new Date();
  const _0x49a8ea = _0x307d39.getHours();
  const _0x5daf18 = _0x307d39.getMinutes();
  const _0x62d2df = _0x307d39.getSeconds();
  const _0x44a3e6 = (_0x49a8ea < 0xa ? '0' + _0x49a8ea : _0x49a8ea) + ':' + (_0x5daf18 < 0xa ? '0' + _0x5daf18 : _0x5daf18) + ':' + (_0x62d2df < 0xa ? '0' + _0x62d2df : _0x62d2df);
  _0x3e4067.textContent = _0x44a3e6;
}
function padZero(_0x303484) {
  return _0x303484 < 0xa ? '0' + _0x303484 : _0x303484;
}

setInterval(updateCurrentTime, 0x3e8);
updateCurrentTime();

var currentDate = new Date();
var monthsOfYear = ["Jan", "Feb", 'Mar', "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var dayOfMonth = currentDate.getDate();
var month = monthsOfYear[currentDate.getMonth()];
var formattedDate = dayOfMonth + " " + month;

document.getElementById("currentDate").innerText = formattedDate;

var touchArea = document.getElementById('panelContent');
var personalText = document.getElementById("personalText");
var startY;

touchArea.addEventListener('touchstart', function (_0x1dce99) {
  startY = _0x1dce99.touches[0x0].clientY;
});

touchArea.addEventListener('touchend', function (_0x20b6e9) {
  var _0x3ba36d = _0x20b6e9.changedTouches[0x0].clientY;
  var _0x2dcc5d = _0x3ba36d - startY;
  if (Math.abs(_0x2dcc5d) > 0xa) {
    if (_0x2dcc5d > 0x0) {
      touchArea.style.transform = "translateY(20px)";
      personalText.style.transition = "opacity 0.5s";
      personalText.style.opacity = '0';
      setTimeout(function () {
        touchArea.style.transform = "translateY(0)";
        personalText.style.opacity = '1';
      }, 0x12c);
    } else if (_0x2dcc5d < 0x0) {
      touchArea.style.transform = "translateY(-20px)";
      personalText.style.transition = "opacity 0.5s";
      personalText.style.opacity = '0';
      setTimeout(function () {
        touchArea.style.transform = "translateY(0)";
        personalText.style.opacity = '1';
      }, 0x12c);
    }
  }
});
window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0x0, 0x1);
  }, 0x64);
};