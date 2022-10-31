import { LitElement, html, css } from 'lit';
import './views/view-home';
import './views/view-about';
import './views/view-contact';
import 'dile-tabs/dile-tabs';
import 'dile-pages/dile-pages'

export class PwaLive extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                padding: 15px;
                --dile-tab-background-color: transparent;
                --dile-tab-selected-background-color: transparent;
                --dile-tab-selected-text-color: #102030;
            }
            h1{
                font-weight: 300;
            }
            .page{
                display: none;
            }
            .page[active]{
                display: block;
            }
        `
    ];

    static get properties() {
        return {
            selected: {type: String},
        };
    }

    constructor(){
        super();
        this.selected = 'home'; // la pagina inicial sera Home
    }

    render() {
        return html`
        <h1>My App</h1>
        <dile-tabs selected="${this.selected}" attrForSelected="name" @dile-tabs-selected-changed="${this.selectedChange}">
            <dile-tab name="home">Home</dile-tab>
            <dile-tab name="about">About</dile-tab>
            <dile-tab name="contact">Contact</dile-tab>
        </dile-tabs>
        <dile-pages selected="${this.selected}" attrForSelected="name">
            <view-home name="home" ?active=${this.selected == 'home'}></view-home>
            <view-about name="about" ?active=${this.selected == 'about'}></view-about>
            <view-contact name="contact" ?active=${this.selected == 'contact'}></view-contact>
            <!-- el ?active con el simbolo ? le inicamos a active que es una proiedad booleana-->
        </dile-pages>
        `;
    }

    selectedChange = (e) => {
        this.selected = e.detail;
    }
}
customElements.define('pwa-live', PwaLive);
