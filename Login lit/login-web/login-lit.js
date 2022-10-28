import { LitElement, html, css } from 'lit';

export class LoginLit extends LitElement {
    static styles = [
        css`
            :host {
                display: block;

            }
            .container {
                border: 1px solid #11ce76;
                border-radius: 19px;
                width: 350px;
                height: 400px;
                text-align: center;
            }
            input{
                width: 90%;
                height: 30px;
                margin-top: 8vh;
                border: 1px solid #414141;
                border-top: 0px;
                border-radius: 5px;
            }
            button{
                width: 60%;
                height: 40px;
                background-color: #11ce76;
                color: #414141;
                border: none;
                border-radius: 6px;
                margin-top: 8vh;
            }
            button:hover{
                background-color: #0da35b;
                cursor: pointer;
            }
        `
    ];

    render() {
        return html`
        <div class="container">
            <h2>Login lit element</h2>
            <input id="Email" type="email" placeholder="Escribe tu Email">
            <input id="pass" type="password" placeholder="Contrasena">
            <button @click="${this._login}">Iniciar sesion</button>
        </div>
        `;
    }

    _login = () => {//esto indica que es un metodo privado
        const email = this.shadowRoot.getElementById('Email').value; //tomamos los valores de los inputs
        const pass = this.shadowRoot.getElementById('pass').value;

        if(email !== "" && pass !== ""){//indica si no viene vacia
            //De esta forma nos comunicamos de un componente hijo a un componente padre
            // esto es un evento
            this.dispatchEvent(new CustomEvent('loginis', { //este evento debe tomar un nombre, en este caso es 'loginis'
                detail: {login: true}, //el detail nos permite meter informacion
                bubbles: true, // aqui el decimos que si el componete se propague a los componenets padres o no
                composed: true
            }));
        }
    }
}
customElements.define('login-lit', LoginLit);
