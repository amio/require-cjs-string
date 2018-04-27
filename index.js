/* eslint-disable no-new-func */
module.exports = function exportFromString (str) {
  const _fn = new Function('module', 'exports', str)
  const _module = { exports: {} }
  _fn(_module, _module.exports)
  return _module.exports
}
