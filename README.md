# JSON Merge stuff
```
tail -r <(node old.js | gsed 's/],"/\n/g' | tr -d [{:\"}] | sed 's/vg//g' | sed 's/size//g' | sed 's/\([0-9a-z]\{14\}\)/\1,/' ; echo host,vg,size,vg,size,vg,size )
```
