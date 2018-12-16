// https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript/22429679#22429679

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = ~~((hash << 5) - hash + str.charCodeAt(i));
  }
  return hash;
}

export default hashCode;
