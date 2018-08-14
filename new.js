const util = require('util')

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

var last = new Object
hey = new Set()
for ( n in data){
    hey.add(data[n].host)

    last[data[n].host] = []
}

hey.forEach(shitty)


function shitty( value1, set) {
    var c =0
    for (var i = 0; i < data.length; i++){

        if (value1 == data[i].host) {
            last[value1][c]={"vg":data[i].vg,"size":data[i].size }
            c++
        }

    }}
console.log(JSON.stringify(last))
    //util.inspect(last)+"]")
