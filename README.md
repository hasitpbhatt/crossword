# Crossword

Client-side library to add crossword to your websites without any major external dependencies.

## How to use

Import javascript and less file in your html. 

```
<link rel="stylesheet/less" type="text/css" href="crossword.less">
<script src="https://cdn.jsdelivr.net/npm/less"></script>
<script src="crossword.js"></script>
```

Create empty div in HTML

```
<div id="crossword"></div>
```

Pass Crossword JSON as params along with div id in script. 

Sample JSON : https://github.com/hasitpbhatt/crossword/blob/main/sample_gujarati.json

JSON Format : https://www.xwordinfo.com/JSON/

```
<script>
...
params = ... // JSON object in expected format 
create("crossword", params);
</script>
```

## Dependencies
- Less : https://lesscss.org/ 

## Methods
- Create
- Cleanup
- Reset
- Reveal

Demo: https://hasit.in/crossword.html
