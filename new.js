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
var finalo = new Array
var last = new Object
hey = new Set()
for ( n in data){
    hey.add(data[n].host)
    last[data[n].host] = []
finalo[data[n].host] = []
    //console.log(finalo[n].host)
}

hey.forEach(shitty)

d = 0
function shitty( value1) {
    var c =0
    var e = 0
    d = 0
console.log(e)
    for (var i = 0; i < data.length; i++){
        //console.log(d) 
        if (value1 == data[i].host) {
            last[value1][c]={"vg":data[i].vg,"size":data[i].size }
            finalo[value1][c]={"host":value1,"vg":data[i].vg,"size":data[i].size }
            console.log(finalo[value1][c])
            c++
        }


    }

    //console.log(d)
    d++
}
//console.log(JSON.stringify(last))
//console.log(JSON.stringify(finalo))
//util.inspect(last)+"]")
//
//console.log(finalo[0].part[0].vg)

var cs = ", "
process.stdout.write("host,vg,size,vg,size,vg,size,vg,size")
console.log("")   
for (i in finalo){

    for (n in finalo[i]){
        var c = 0;
        process.stdout.write(finalo[i][n]["host"]+cs)
        process.stdout.write(finalo[i][n]["vg"].vg+cs+finalo[i][n]["size"].size+cs )
        c++
    }
    console.log("")
}
//console.log(finalo)
//console.log(finalo[0]["part"])
//console.log(last)
