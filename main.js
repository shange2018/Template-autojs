"ui";

var view = require('template/view.js');
view.show();

var common = require('template/common.js');
common.requestScreenCapture();

log(floaty.checkPermission())
