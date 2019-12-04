/**Transfer / Scopes and Types
 * 
 *
 * @package Webapplication
 * @module Scopes and Types
 * @author Matthias
 * @version v1.0.0
 * @since 2019-11-21 
 * @license MIT License <https://opensource.org/licenses/MIT>
 * @copyright (c) 2019 Matthias Müller
 */

!(function () {
    'use strict';

    // DECLARATION

    let number = 123;
    let text = 'Irgendein Text';
    let YesNo = true;
    let array = [1, 'two', 3, 6];
    let objekt = {
        para1: 'Objekt',
        para2: 'mit Text',
        para3: 4,
        para4: false
    };


    // FUNCTIONS

    function log(lName, lOutputVariable) {

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
                    console.log(lName + " {" + typeof (lOutputVariables) + '}: ' + lArrayData);
                } else {
                    console.log(lName + " {" + typeof (lOutputVariable) + '}: ' + Object.values(lOutputVariable));
                }
                break;
            default:
                break;
        }
    }

    //CONTROL

    log('zahl', number);
    log('text', text);
    log('jaNein', YesNo);
    log('array', array);
    log('objekt', objekt);

})()