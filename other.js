var newList = [];
var originalList = [
    {"host":"ah57sdcla02188","vg":"OS","size":"2.5"},
    {"host":"ah57sdcla02188","vg":"local","size":"6.5"},
    {"host":"ah57sdcla02189","vg":"OS","size":"1.5"},
    {"host":"ah57sdcla02189","vg":"local","size":"2.5"},
    {"host":"ah57sdcla02189","vg":"bob","size":"2.5"},
    {"host":"ah57sdcla02190","vg":"OS","size":"3.5"},
    {"host":"ah57sdcla02190","vg":"local","size":"3.5"},
    {"host":"ah57sdcla02190","vg":"bob","size":"8.5"}
];

originalList.forEach((item, index, items) => {
    console.log('---------------------------');
    console.log(item.host);
    var keys = Object.keys(item);
    var updateIndex;
    var newItem = newList.find((newListItem, positionIndex, arr) => {
        if (newListItem.host === item.host) {
            console.log('found existing', positionIndex);
            updateIndex = positionIndex;
            return newListItem;
        }
    }) || item;
    console.log('item:', item);
    if (updateIndex) {

        keys.forEach((key, index, all) => {
            if (key != 'host') {

                console.log('newList[updateIndex][key]' + newList[updateIndex][key], '\n - new item: ' + newList[updateIndex][newItem[key]], '\n - old item: ' + item[key]);

                if (newList[updateIndex][key] && typeof(newList[updateIndex][key].push) == 'function') {
                    newList[updateIndex][key].push(item[key]);
                } else {
                    newList[updateIndex][key] = newList[updateIndex][key] ? [ newList[updateIndex][key], item[key] ] : [ item[key] ];
                }
            }
        });

    } else {
        newList.push(newItem);
    }
});
