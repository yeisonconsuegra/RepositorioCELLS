import { LitElement, html, css } from 'lit';
import {PageViewElement} from './page-view-element';

export class ViewContact extends PageViewElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <h1>Contact</h1>
        <div>
            <p>hola contactos</p>
        </div>
        `;
    }
}
customElements.define('view-contact', ViewContact);
