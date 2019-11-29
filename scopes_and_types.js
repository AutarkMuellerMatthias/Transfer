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

    let zahl = 123;
    let text = 'Irgendein Text';
    let jaNein = true;
    let array = [1, 'two', 3, 6];
    let objekt = {
        para1: 'Objekt',
        para2: 'mit Text',
        para3: 4,
        para4: false
    }


    // FUNCTIONS

    function log(lName, lAusgabeVariable) {

        switch (lName) {
            case 'zahl':
            case 'text':
            case 'jaNein':
                console.log(lName + " {" + typeof (lAusgabeVariable) + '}: ' + lAusgabeVariable);
                break;
            case 'array':
                var lArrayAusgabe = '';
                for (var i = 0, len = lAusgabeVariable.length; i < len; i += 1) {
                    lArrayAusgabe = lArrayAusgabe + lAusgabeVariable[i] + ",";
                }
                console.log(lName + " {" + typeof (lAusgabeVariable) + '}: ' + lArrayAusgabe);
                break;
            case 'objekt':
                console.log(lName + " {" + typeof (lAusgabeVariable) + '}: ' + Object.values(lAusgabeVariable));
                break;
            default:
                break;
        }
    }

    //CONTROL

    log('zahl', zahl);
    log('text', text);
    log('jaNein', jaNein);
    log('array', array);
    log('objekt', objekt);

})()