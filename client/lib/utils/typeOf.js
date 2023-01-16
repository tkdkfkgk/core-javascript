export function isNumericString(data){
  data = Number(data);
  return !isNaN(data)
}

// 정확한 문자값 반환
function typeOf(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}

export const isObject = data => typeOf(data) === 'object'
export const isString = data => typeOf(data) === 'string'
export const isArray = data => typeOf(data) === 'array'
export const isNumber = data => typeOf(data) === 'number' && !isNaN(data); // NaN으로 나오면 typeOf에서 number로 나와서 NaN만 따로 뽑아내려고
export const isBigInt = data => typeOf(data) === 'bigint' && !isNaN(data);
export const isBoolean = data => typeOf(data) === 'boolean';
export const isFunction = data => typeOf(data) === 'function';
export const isUndefined = data => typeOf(data) === 'undefined';
export const isNull = data => typeOf(data) === 'null';
export const isSymbol = data => typeOf(data) === 'symbol';
export const isElement = node => node.nodeType === document.ELEMENT_NODE