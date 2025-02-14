<script lang="ts">
	import { Card, DataTable } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';

	const tableProps: any = {
		headings: ['Prop', 'Type', 'Values', 'Default', 'Description'],
		source: [
			[
				'language',
				'string',
				'html | css | js | ...',
				'plaintext',
				'Sets a language alias: <a href="https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md" target="_blank">Highlight.js</a>'
			],
			[
				'code',
				'string',
				'-',
				'-',
				'Takes a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" target="_blank">Template Literal</a>. Be mindful to escape as needed.'
			],
			['background', 'string', '(class)', 'bg-neutral-900', 'Provide a CSS class to define the background color.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Code Blocks</h1>
		<p>
			Displays pre-formatted source code, with built-in support for <a href="https://highlightjs.org/" target="_blank">Highlight.js</a>.
		</p>
		<CodeBlock language="javascript" code={`import { CodeBlock } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<Card class="space-y-4">
		<CodeBlock language="html" code={`<p>Hello Skeleton<p>`} />
		<CodeBlock language="css" code={`.skeleton { color: #bada55; }`} />
		<CodeBlock language="typescript" code={`const skeleton: string = 'awesome';`} />
	</Card>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<p>
			Please note that Skeleton will install <a href="https://highlightjs.org/" target="_blank">Highlight.js</a> as a dependency for this.
		</p>
		<h4>Add a Theme</h4>
		<p>
			Implement a <a href="https://github.com/highlightjs/highlight.js/tree/main/src/styles" target="_blank">Highlight.js CSS theme</a>. Add the following to your app's root component, before your
			theme and global stylesheet import.
		</p>
		<CodeBlock language="js" code={`import 'highlight.js/styles/github-dark.css';`} />
		<h3>Insert a Codeblock</h3>
		<p>
			Add the following anywhere you wish to display a codeblock. See the <em>properties</em> documentation below.
		</p>
		<CodeBlock code={'<CodeBlock language="html" code={`<div>This is meta</div>`}></CodeBlock>'} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<h2>Accessibility</h2>
		<p>
			Uses <code>pre-wrap</code> by default to support keyboard-only navigation. Be mindful of color contrast ratios when customizing theme and background color.
		</p>
	</section>
</div>
