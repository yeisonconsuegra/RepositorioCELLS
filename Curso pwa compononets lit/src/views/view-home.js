import { LitElement, html, css } from 'lit';
import {PageViewElement} from './page-view-element';

export class ViewHome extends PageViewElement {
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
            <h2>Home</h2>
        </div>
        <p>esto es un home</p>

        `;
    }
}
customElements.define('view-home', ViewHome);
