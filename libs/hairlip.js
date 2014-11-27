// Hairlip is
// a very tiny version of mustache that only does variable replacement
// and nothing else.
// src: https://gist.github.com/Breton/6027591
// Hairlip is 
// a very tiny version of mustache that only does variable replacement
// and nothing else.
module.exports = function hairlip(o, s) {
    return s.replace(/{{([^{}]*)}}/g,
        function (a, b) {                       
            return {string:true,number:true}[typeof o[b]] ? o[b] : "";
        }
    );
};