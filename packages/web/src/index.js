/* eslint-disable no-use-before-define */
// @ts-check
/* globals document */
import { html, render } from 'lit-html';
import getMakes from './services/makes';
import getModels from './services/models';
import getVehicle from './services/vehicles';
import dropdown from './components/dropdown';
import car from './components/vehicle';

const draw = async (template, where) => render(await template(), document.getElementById(where));

let selectedMake = null;
let selectedModel = null;
let isShowAll = false;

const availableMakes = ['BMW', 'FORD'];
const availableModels = ['Fiesta', 'C-Max', '3er'];

/**
 * @param {{ target: { value: any; }; }} event
 */
const onSelectMake = (event) => {
  selectedMake = event.target.value;
  draw(renderModelsDropdown, 'models');
};

/**
 * @param {{ target: { value: any; }; }} event
 */
const onSelectModel = (event) => {
  selectedModel = event.target.value;
  draw(renderCar, 'vehicles');
};

/**
 * @param {{ target: { checked: boolean; }; }} event
 */
const onSelectShowAll = (event) => { isShowAll = event.target.checked; };

const renderMakesDropdown = async () => {
  let makes = await getMakes();
  if (!isShowAll) {
    makes = makes.filter((make) => availableMakes.includes(make));
  }
  return html`${dropdown(makes, 'Makes', onSelectMake, 'Choose a make')}`;
};

const renderModelsDropdown = async () => {
  let models = await getModels(selectedMake);
  if (!isShowAll) {
    models = models.filter((model) => availableModels.includes(model));
  }
  return html`${dropdown(models, 'Models', onSelectModel, 'Choose a model')}`;
};

const renderCar = async () => {
  const carInfo = await getVehicle(selectedMake, selectedModel);
  return carInfo.map(car);
};

// Define a template
const base = async () => html`
  <div class="grid">
    <aside class="sidebar-left">
      <form>
        <div id="makes"></div>
        <div id="models"></div>
      </form>
    </aside>
    <main>
      <ul class="cards" id="vehicles"></ul>
    </main>
  </div>
`;

// Render the template to the document
draw(base, 'main');
draw(renderMakesDropdown, 'makes');
