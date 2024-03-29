import type { Meta, StoryObj } from '@storybook/react';
import { Color } from '@wbk--reactjs-playground--typescript/react-cmp-lib';
import '@wbk--reactjs-playground--typescript/lsg-styles-generic/lib/components/atoms/utilities.css';
import { text, select } from '@storybook/addon-knobs';

const meta = {
    title: 'Atoms/Color',
    component: Color,
    parameters: {
        hexCode: '#000000',
        width: 'sm',
        height: 'sm',
    },
} satisfies Meta<typeof Color>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        hexCode: text('HexCode', 'pink'),
        width: 'sm',
        height: 'sm',
    },
};

export const WithKnobs: Story = {
    args: {
        hexCode: text('HexCode', 'pink'),
        width: select('Width', ['xs', 'sm', 'md', 'lg', 'xl'], 'sm'),
        height: select('Height', ['xs', 'sm', 'md', 'lg', 'xl'], 'sm'),
    },
};
