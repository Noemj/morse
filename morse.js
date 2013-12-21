var tree = [' ', 'ET', 'IANM', 'SURWDKGO', 'HVFÜLÄPJBXCYZQÖ ']
var morsecode = "";

function morse(signal) {
  if (signal === PAUSE) {
    return decode(morsecode);
  }
  morsecode += (signal === DIT) ? '0' : '1';
}

function decode(str){
  morsecode = "";
  if (!str || str.length > 5){
    return;
  }
  return tree[str.length].charAt(parseInt(str,2));
}
