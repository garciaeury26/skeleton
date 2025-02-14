import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import GradientHeading from '$lib/GradientHeading/GradientHeading.svelte';

// NOTE: handling destructuring types:
// https://daily-dev-tips.com/posts/object-destructuring-in-typescript/
describe('GradientHeading.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId }: { getByTestId: any } = render(GradientHeading, {
			props: { tag: 'h1' }
		});
		expect(getByTestId('gradient-heading')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId }: { getByTestId: any } = render(GradientHeading, {
			props: {
				tag: 'h1',
				direction: 'bg-gradient-to-r',
				from: 'from-primary-500',
				to: 'to-accent-500',
			}
		});
		const elem: HTMLElement = getByTestId('gradient-heading');
		expect(elem).toBeTruthy();
		expect(elem.tagName).eq('H1');
		expect(elem.querySelector('span')?.className).includes('bg-gradient-to-r');
		expect(elem.querySelector('span')?.className).includes('from-primary-500');
		expect(elem.querySelector('span')?.className).includes('to-accent-500');
	});
});
