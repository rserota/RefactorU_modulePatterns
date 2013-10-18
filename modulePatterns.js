/** Simple encapsulation */
// var Repeater = {
//     repeatString : function(str, n){
//         output = ''
//         for (var i = 0; i < n; i++){
//             output = output.concat(str)
//         }
//         return output
//     },
//     repeatFunction : function(f, n){
//         for (var i = 0; i < n; i++){
//             f()
//         }
//     }
// }

/** Module Pattern */
// var Repeater = (function(){
//     var count = 0
//     return {
//         repeatMore : function(str){
//             count++
//             var output = ''
//             for (var i = 0; i < count; i++){
//                 output = output.concat(str)
//             }
//             return output
//         },
//         repeatString : function(str, n){
//             var output = ''
//             for (var i = 0; i < n; i++){
//                 output = output.concat(str)
//             }
//             return output
//         },
//         repeatFunction : function(f, n){
//             for (var i = 0; i < n; i++){
//                 f()
//             }
//         }
//     }
// })()



var Repeater = (function(){
    var count = 0

    var repeatMore = function(str){
        count++
        var output = ''
        for (var i = 0; i < count; i++){
            output = output.concat(str)
        }
        return output
    }
    var repeatString = function(str, n){
        var output = ''
        for (var i = 0; i < n; i++){
            output = output.concat(str)
        }
        return output
    }
    var repeatFunction = function(f, n){
        for (var i = 0; i < n; i++){
            f()
        }
    }
    var repeatFunctionTwice = function(f){
        repeatFunction(f, 2)
    }
    return {
        repeatMore : repeatMore,
        repeatString : repeatString,
        repeatFunction : repeatFunction,
        repeatFunctionTwice : repeatFunctionTwice
    } 
})()




























