import { html } from 'lit-html';

export default (options, label, onSelect, placeholder) => html`
  ${options.length ? html`<div class="control">
    <label class="control__label">${label}</label>
    <select class="select control__field" @change=${onSelect}>
      <option value="" disabled selected hidden>${placeholder}</option>
      ${options.map((option) => html`<option value=${option}>${option}</option>`)}
    </select>
  </div>` : html`No ${label} found`}`;
