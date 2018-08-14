const data = [
{"host":"ah57sdcla02188","vg":"OS","size":"2.5"},
{"host":"ah57sdcla02188","vg":"local","size":"6.5"},
{"host":"ah57sdcla02189","vg":"OS","size":"1.5"},
{"host":"ah57sdcla02189","vg":"local","size":"2.5"},
{"host":"ah57sdcla02189","vg":"bob","size":"2.5"},
{"host":"ah57sdcla02190","vg":"OS","size":"3.5"},
{"host":"ah57sdcla02190","vg":"local","size":"3.5"},
{"host":"ah57sdcla02190","vg":"bob","size":"8.5"}
] 

const result = data.reduce(function(r, e) {
  return Object.keys(e).forEach(function(k) {
    if(!r[k]) r[k] = [].concat(e[k])
    else r[k] = r[k].concat(e[k])
  }), r
}, {})

var final = result.vg.concat(result.size)
console.log(result)
console.log(final)

function mergeJson(target) {
    for (var argi = 1; argi < arguments.length; argi++) {
        var source = arguments[argi];
        for (var key in source) {
            if (!(key in target)) {
                target[key] = [];
            }
            for (var i = 0; i < source[key].length; i++) {
                target[key].push(source[key][i]);
            }
        }
    }
    return target;
}
hey = new Set()
for ( n in data){
        hey.add(data[n].host)
}
var last
for (v in hey){
    var i = 0;
    for (y in data){
        console.log(data)
        console.log(y)
        if data[y].host == hey[v]{
                last[hey[v]].push({data[y].vg})
        }
}
console.log(last)
console.log(mergeJson(result))

console.log(hey)

    console.log()
