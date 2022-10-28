import { LitElement, html, css } from 'lit';
import './login-lit';

export class APpLIt extends LitElement {
    static get styles(){
        return css`
        :host {
                display: block;
                border: 1px solid red;
            }
        login-lit{
            display: flex;
            position: absolute;
            right: 38%;
            top: 10%;
        }
        `;
    }

    static get properties(){
        return { 
            success: { type: Boolean }
        }
    }

    render() {
        return html`
            ${ this.success 
                ? html`<h1>Bienvenido</h1>` 
                : html`<login-lit @loginis="${this._hiddenLogin}"></login-lit>` }
        `;
    }

    _hiddenLogin = () => { //_ indica un metodo privado
        //cambia la propiedad de success a true
        this.success = true;
    }
}

