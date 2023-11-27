/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
	static override styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

	_name = 'World';
	_count = 0;

	// Getter and setter for 'name'
	get name() {
		return this._name;
	}

	@property()
	set name(newName) {
		this._name = newName;
	}

	// Getter and setter for 'count'
	get count() {
		return this._count;
	}

	@property({ type: Number })
	set count(newCount) {
		this._count = newCount;
	}

	override render() {
		return html`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
	}

	private _onClick() {
		this.count++;
		this.dispatchEvent(new CustomEvent('count-changed'));
	}

	/**
	 * Formats a greeting
	 * @param name The name to say "Hello" to
	 */
	sayHello(name: string): string {
		return `Hello, ${name}`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'my-element': MyElement;
	}
}