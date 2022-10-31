import { LitElement, html, css } from 'lit';
import './components/rick-data';

export class RickMortyApi extends LitElement {

  static get properties() {
    return {
      wiki: { type: Array }
    }
  }
  static get styles() {
    return css`
    :host {
        display: block;
      }
      .container{
        text-align: center;
      }
      get-data{
        display: none;
      }
      .card{
        background: #fff;
        border-radius: 2px;
        display: inline-block;
        height: 300px;
        width: 200px;
        margin: 1rem;
        position: relative;
        text-align: center;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),  0px 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
      }
      .card:hover{
        box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.25), 0px 10px 10px rgba(0, 0, 0, 0.24);
      }
      .card img {
        width: 70%;
      }
    `;
  }

  constructor(){
    super();

    this.wiki = [];

    this.addEventListener('ApiData', (e)=>{
      this._dataFormat(e.detail.data);
    });
  }

  render() {
    return html`
      <rick-data url="https://rickandmortyapi.com/api/character" method="GET"></rick-data>
      ${this.dateTemplate}
    `;
  }


  _dataFormat = (data) => {
    let character = [];

    data['results'].forEach((characters) => {
      character.push({
        img: characters.image,
        name: characters.name,
        species: characters.species,
        status: characters.status
      })
    })
    this.wiki = character;
  }

  get dateTemplate(){
    return html`
      ${this.wiki.map(character => html`
        <div class="card">
          <div class="card-contend">
            <h2>${character.name}</h2>
            <img src="${character.img}">
            <p>${character.species} | ${character.status}</p>
          </div>
        </div>
      `)}
    `;
  }
}
