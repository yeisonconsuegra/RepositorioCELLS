import { LitElement, html, css } from 'lit';

export class RickData extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
        return {
            url: {type : String},
            method: {type : String}
        }
    }

    firstUpdated(){
        this.getData();
    }

    render() {
        return html``;
    }

    _senData = (data) => {
        this.dispatchEvent(new CustomEvent('ApiData', {
            detail: {data},
            bubbles: true,
            composed: true
        }));
    }

    getData = () => {
        fetch(this.url, {method: this.method}) //le pasamos la url y el methodo
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }else{
                    return Promise.reject(response);   
                }
            }).then((data) => {this._senData(data); }).catch((error) => {console.warn("algo ha fallado", error); })
    }
}
customElements.define('rick-data', RickData);
