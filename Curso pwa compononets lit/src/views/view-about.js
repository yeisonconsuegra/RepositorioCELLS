import { LitElement, html, css } from 'lit';
import {PageViewElement} from './page-view-element';

export class ViewAbout extends PageViewElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <div>
            <h2>About</h2>
        </div>
        <p>Esto es un about</p>

        `;
    }
}
customElements.define('view-about', ViewAbout);
