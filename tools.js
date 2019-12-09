/**Transfer / Tools
 * 
 *
 * @package Webapplication
 * @module Tools
 * @author Matthias
 * @version v1.0.0
 * @since 2019-12-04 
 * @license MIT License <https://opensource.org/licenses/MIT>
 * @copyright (c) 2019 Matthias Müller
 */

!(function () {
    'use strict';

    // DECLARATION

    //FUNCTIONS

    /**
     * @param {string} lName 
     * @param {*} lOutputVariable 
     */
    function _log(lName, lOutputVariable) {

        var lDataType = typeof (lOutputVariable);

        switch (lDataType) {
            case 'number':
            case 'string':
            case 'boolean':
                console.log(lName + " {" + typeof (lOutputVariable) + '}: ' + lOutputVariable);
                break;
            case 'object':
                if (Array.isArray(lOutputVariable)) {
                    var lArrayData = '';
                    for (var i = 0, len = lOutputVariable.length; i < len; i += 1) {
                        lArrayData = lArrayData + lOutputVariable[i] + ",";
                    }
                    console.log(lName + " {array}: " + lArrayData);
                } else {
                    console.log(lName + " {" + typeof (lOutputVariable) + '}: ' + Object.values(lOutputVariable));
                }
                break;
            default:
                break;
        }
    }


    /**
     * @param {*} lInputVariable 
     */
    function _getType(lInputVariable) {

        var lType;
        //Prüfung ob Array
        if (Array.isArray(lInputVariable)) {
            lType = 'array';
        }
        //Restliche Datentypen
        else {
            lType = typeof (lInputVariable);
        }
        //console.log(lType);
        return lType;
    }

    //CONTROLS
    function main() {

        // publish module and a function
        window.tools = {} || window.tools;
        window.tools.log = _log;
        window.tools.getType = _getType;

    }

    main();
})()