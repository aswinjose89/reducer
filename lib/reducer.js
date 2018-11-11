'use strict';
(function(){
    class Reducer{
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        arrayFilter(){
        }
        isArray(){
            let [arr] = arguments;
            return (typeof arr != 'undefined' && arr.length>0)
        }
    }
    var r = new Reducer(1,2)

    r.isArray([1,2])

})()