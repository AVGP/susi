/*global require:true, exports:true, module:true, window:true */

// from: https://github.com/donofkarma/node-ssi-parser/blob/master/lib/node-ssi-parser.js
(function() {
    'use strict';

    var vars = {};

    function ssiParser(filename, source) {
        var // PRIVATE VARS
        fs = require('fs'),
            path = require('path'),
            filePath = path.dirname(filename) + '/',
            parsed = source,

            // PRIVATE FUNCTIONS
            saveVars = function(data) {
                var output;

                output = data.replace(/<!--#set var="(.*?)" value="(.*?)" -->/g, function(match, key, value) {
                    // save vars not in the main list
                    if (!vars[key]) {
                        vars[key] = value;
                    }

                    // return an empty string to remove the match
                    return '';
                });

                return output;
            },
            parseIf = function(data) {

            };

        /**
         * read file
         **/
        // passed in as source

        /**
         * parse SSIs
         **/
        /** vars - save from parent file **/
        parsed = saveVars(parsed);

        /** #include **/
        parsed = parsed.replace(/<!--#include virtual="(.*?)" -->/g, function(match, includePath) {
            var output;

            // save out read file
            output = ssiParser(filePath + includePath, fs.readFileSync(filePath + includePath, 'utf8'));

            // save out the vars
            output = saveVars(output);

            // return the processed include
            return output;
        });

        /** vars - echo **/
        parsed = parsed.replace(/<!--#echo var="(.*?)" -->/g, function(match, key) {
            return vars[key];
        });

        /**
         * return expanded data
         */
        return parsed;
    }

    // export node.js module
    module.exports = exports = ssiParser;
}());