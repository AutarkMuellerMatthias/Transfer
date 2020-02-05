/**Transfer / App
 * 
 *
 * @package Webapplication
 * @module App
 * @author Matthias
 * @version v1.0.0
 * @since 2020-02-04 
 * @license MIT License <https://opensource.org/licenses/MIT>
 * @copyright (c) 2020 Matthias Müller
 */

!(function () {
    'use strict';

    // DECLARATION

    let list = document.createElement('ul');
    document.body.appendChild(list);
    list.setAttribute('class', 'navigation');

    let nav = document.createElement('nav');
    document.body.appendChild(nav)
    let ul = document.createElement('ul');
    nav.appendChild(ul)

    let data = [{
            text: "Home",
            link: "index.html"
        },
        {
            text: "Work",
            link: "work.html"
        },
        {
            text: "Contact",
            link: "contact.html"
        },
        {
            text: "Imprint",
            link: "imprint.html"
        }
    ]



    //FUNCTIONS
    function main() {

        // publish module and a function        
        window.onload = function () {
            for (let i = 0; i < data.length; i += 1) {
                tools.addNavigation(data[i].text, data[i].link, list);
            }
        }
    }
    main();
})()