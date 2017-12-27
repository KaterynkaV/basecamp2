/*function1
function that traverses all nodes of an object tree. Output should be formatted
 */
function bustProps (obj, txt)
{
for (var key in obj)
   {
   if (typeof obj [key] == 'object') bustProps (obj [key], (txt ? ' : ' : '') + key);
   else document.write ((txt ? (txt + ' : ') : '') + key + ' = ' + obj [key] + '<br>');
   }
}

/*function 3
*/
Object.prototype.hash = function(str) {
    var arrayProperties, i, t;
    t = this;

    arrayProperties = str.split(".");
    for(i = 0; i < arrayProperties.length; i++) {
        t = findProperty(t,arrayProperties[i]);
        if (t == undefined) return undefined;
    }
    return t;
}
function findProperty(obj, prop) {
    var arrayPropObj, index;

    arrayPropObj = Object.keys(obj);
    index = arrayPropObj.indexOf(prop);
    if (index !== -1) return obj[prop];
    return undefined;
}


 