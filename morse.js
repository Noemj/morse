var tree = [' ', 'ET', 'IANM', 'SURWDKGO', 'HVFÜLÄPJBXCYZQÖ ', '54Ŝ3É  2 È+  ÀĴ16=/   Ĥ 7 ĜÑ8 90']
var morsecode = "";

function morse(signal) {
  if (signal === PAUSE) {
    return decode(morsecode);
  }
  morsecode = morsecode.concat((signal === DIT) ? "." : "-");
}

function decode(str){
morsecode = "";
return "".concat(tree[str.length].charAt(toint(str)));
}

function toint(str){ 
  return parseInt(str.replace(/\./g,"0").replace(/\-/g,"1"), 2);
}