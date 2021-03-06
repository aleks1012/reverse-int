module.exports = function reverse (n) {
const a = -n;
if (n > 0) {
  return n.toString().split('').reverse().join('');  
					} else {
  							return a.toString().split('').reverse().join('');
							}
}