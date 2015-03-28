define([
  'misc/Utils',
  'render/Shader',
  'render/Rtt'
], function (Utils, Shader, Rtt) {

  'use strict';

  var Contour = function (gl) {
    Rtt.call(this, gl);
  };

  Contour.prototype = {
    getShaderType: function () {
      return Shader.mode.CONTOUR;
    },
    getType: function (gl) {
      return gl.UNSIGNED_BYTE;
    }
  };

  Utils.makeProxy(Rtt, Contour);

  return Contour;
});