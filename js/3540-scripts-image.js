function openImageInput() {
  document.getElementById("imageInput").click();
}
document.getElementById("imageInput").addEventListener("change", function () {
  var _0x4b6d23 = this.files[0];
  if (_0x4b6d23) {
    var _0x32b266 = new FileReader();
    _0x32b266.onload = function (_0x56bead) {
      document.getElementById("previewImage").src = _0x56bead.target.result;
    };
    _0x32b266.readAsDataURL(_0x4b6d23);
  }
});
window.onload = function () {
  var _0x2b99a3 = localStorage.getItem("uploadedImage");
  if (_0x2b99a3) {
    document.getElementById("previewImage").src = _0x2b99a3;
  }
};
document.getElementById("imageInput").addEventListener("change", function (_0x17695f) {
  var _0x2667ea = _0x17695f.target.files[0];
  if (_0x2667ea) {
    var _0x1fb445 = new FileReader();
    _0x1fb445.onload = function (_0x1c18ac) {
      var _0x55e73d = _0x1c18ac.target.result;
      document.getElementById("previewImage").src = _0x55e73d;
      localStorage.setItem("uploadedImage", _0x55e73d);
    };
    _0x1fb445.readAsDataURL(_0x2667ea);
  }
});