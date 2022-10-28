import { LitElement, html, css } from 'lit';

export class DwMessage extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            div{
                background-color: blue;
            }
        `
    ];

    render() {
        return html`
        <h2>hola papu</h2>
        <p>esto es un parrafo</p>
        `;
    }
}
customElements.define('dw-message', DwMessage);
