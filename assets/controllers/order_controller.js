import { Controller } from '@hotwired/stimulus';
import * as Turbo from "@hotwired/turbo"
/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
export default class extends Controller {
    static targets = [ "custumerInput" ]
    connect() {
        console.log(this.custumerInputTarget)
        document.addEventListener('keydown', (event) => {
            this.custumerInputTarget.focus()
            });
        document.addEventListener('click', (event) => {
            this.custumerInputTarget.focus()
        }) 
        // this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }

    submit_form(event){
        console.log(event)
        // let res = fetch('/submit').then();
    }
}
