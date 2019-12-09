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


    //CONTROL

    tools.log('zahl', number);
    tools.log('text', text);
    tools.log('jaNein', YesNo);
    tools.log('array', array);
    tools.log('objekt', objekt);
    tools.getType(text); // Test

})()