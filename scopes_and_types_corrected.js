/** Transfer / Scopes and Types
 *
 * @package Webapplication
 * @module scopes_and_types
 * @author Matthias
 * @version v1.0.0
 * @since 2019-11-21 
 * @license MIT License <https://opensource.org/licenses/MIT>
 * @copyright (c) 2019 Matthias Müller
 */

!(function () {
    'use strict';

    // DECLARATION
    let
        number = 123,
        text = 'Irgendein Text',
        yesNo = true,
        array = [1, 'two', 3, 6],
        object = {
            para1: 'Objekt',
            para2: 'mit Text',
            para3: 4,
            para4: false
        };


    // FUNCTIONS
    /**
     * 
     * @param {string} lName 
     * @param {*} lOutputVariable 
     */
    function log(lName, lOutputVariable) {
        let type = typeof lOutputVariable;

        switch (type) {
            case 'number':
            case 'string':
            case 'boolean':
                console.log(lName + " {" + typeof (lOutputVariable) + '}: ' + lOutputVariable);
                break;
            case 'object':
                if (Array.isArray(lOutputVariable)) {
                    var lArrayOutput = '';
                    for (var i = 0, len = lOutputVariable.length; i < len; i += 1) {
                        lArrayOutput = lArrayOutput + lOutputVariable[i] + ",";
                    }
                    console.log(lName + " {" + typeof (lOutputVariables) + '}: ' + lArrayOutput);
                } else {
                    console.log(lName + " {" + typeof (lOutputVariable) + '}: ' + Object.values(lOutputVariable));
                }
                break;
        }
    }

    //CONTROL
    log('zahl', number);
    log('text', text);
    log('jaNein', yesNo);
    log('array', array);
    log('objekt', object);
})()