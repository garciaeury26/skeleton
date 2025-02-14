import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import LightSwitch from '$lib/LightSwitch/LightSwitch.svelte';

describe.skip('LightSwitch.svelte', () => {
	it('Renders', async () => {
		const { getByTestId } = render(LightSwitch);
		expect(getByTestId('menu-wrapper')).toBeTruthy();
	});

	/*
	TODO: additional test cases:
	- default render state
	- click to toggle
	- off = light, on = dark (L<-->D)
	- etc.
	*/
});
