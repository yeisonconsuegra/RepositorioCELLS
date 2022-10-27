
// web componente
// importamos litElement, html de la libreria de lit
import { LitElement, html, css } from 'lit';
import { WiredButton } from 'wired-elements/lib/wired-button.js';
import { WiredCard } from 'wired-elements/lib/wired-card.js';
import { WiredInput } from 'wired-elements/lib/wired-input.js';
import { WiredSlider } from 'wired-elements/lib/wired-slider.js';

export class EitCounter extends LitElement{ // aqui extendemos litElement
    static styles = [
        // el :host es la etiqueta eit-counter que esta en el html, como si fuera un contenedor
        css`
        :host {
            display: inline-block;
            background-color: aqua;

        }
        h2{
            color: red;
        }
        wired-button{
            background-color: #ccf;
        }
        wired-button.disminuir{
            background-color: #fcc;
        }
        input{
            width: 30px;
        }
        `
    ];

    static properties = {
        counter: { type: Number, reflect: true},
        quantity: {type: Number, }, 
        //propiedad counter de tipo number, el reflect actualiza el numero del inspeccionador cuando este es modificado
    }

    constructor(){
        super();
        this.counter = 29; //inicializamos la propiedad, se debe hacer en un constructor
        this.quantity = 10;
    }

    render(){
        return html`
        <wired-card elevation="4">
            <h2>Contador</h2>
            <p>${this.counter}</p>
            <p>
                <wired-input id="quantity" type="number" .value="${this.quantity}"></wired-input>
            </p>
            <p>
                <wired-slider @change=${this.doChangeQuantity} value="10" min="1" max="20"></wired-slider>
            </p>
            <wired-button @click=${this.increment}>aumentar</wired-button>
            <wired-button @click=${this.decrement} class="disminuir">disminuir</wired-button>
        </wired-card>
        `;
    }
    // colocamos get para que nos tome los valores
    // get quantity(){
    //     //shadowRoot accede a todo lo que esta dentro del componente, en inspeccionar, y encuentra al elemento que vamos a manejar "input"
    //     return this.shadowRoot.getElementById('quantity').value;
    // }

    doChangeQuantity = (e) => {
        this.quantity = e.detail.value;
        console.log(this.quantity);
    }

    increment = () => {  //creamos un metodo y lo invocamos ahi arriba en el boton
        this.counter += parseInt(this.quantity); //convertimos el numero string en nuero int
    }

    decrement = () =>{  //creamos un metodo y lo invocamos ahi arriba en el boton
        this.counter -= parseInt(this.quantity);
    }


}
// debe tener un guion por lo menos y se usa para etiquetas html
customElements.define('eit-counter', EitCounter);