import type { Meta, StoryObj } from '@storybook/web-components';

import './my-element';
import { MyElement } from './my-element';
import { html } from 'lit';

const meta = {
  title: 'my-element',
  render: (args: MyElement) => html`<my-element></my-element>`,
}

export default meta;
type Story = StoryObj;

export const LoggedIn: Story = {
	args: {}
};