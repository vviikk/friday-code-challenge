import { html } from 'lit-html';

const renderRow = ([label, value]) => html `
  <dt>${label.replace(/([A-Z]+)/g, ' $1').replace(/([A-Z][a-z])/g, ' $1')}</dt>
  <dd>${value}</dd>`;

export default ({ make, model, ...car }) => html `
  <li class="cards__item">
    <div class="card">
      <header class="card__image">
        <img src="https://picsum.photos/500/300/?image=${Math.floor(Math.random() * 100)}">
      </header>
      <div class="card__content">
        <h1>${make} ${model}</h1>
        <dl>
          ${Object.entries(car).map(renderRow)}
        </dl>
        <button class="btn card_btn">Read More</button>
      </div>
    </div>
  </li>`;