import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, '..');
const sourceDirectory = join(repositoryRoot, '.github', 'app-content');
const targetDirectory = join(repositoryRoot, 'src', 'assets', 'docs');
const generatedDocsPath = join(repositoryRoot, 'src', 'app', 'content', 'generated-docs.ts');

if (!existsSync(sourceDirectory)) {
	throw new Error(`Docs source directory not found: ${sourceDirectory}`);
}

rmSync(targetDirectory, { recursive: true, force: true });
mkdirSync(targetDirectory, { recursive: true });

const docsEntries = [];

for (const entry of readdirSync(sourceDirectory, { withFileTypes: true })) {
	if (!entry.isFile() || !entry.name.endsWith('.md')) {
		continue;
	}

	cpSync(join(sourceDirectory, entry.name), join(targetDirectory, entry.name), { force: true });
	docsEntries.push(entry.name);
}

const generatedSource = `${docsEntries
	.sort((left, right) => left.localeCompare(right))
	.map((fileName) => {
		const exportName = fileName
			.replace(/\.md$/, '')
			.replace(/-([a-z])/g, (_, character) => character.toUpperCase())
			.replace(/^[a-z]/, (character) => character.toUpperCase())
			.concat('Markdown');
		const fileContent = JSON.stringify(readFileSync(join(sourceDirectory, fileName), 'utf8'));
		return `export const ${exportName} = ${fileContent};`;
	})
	.join('\n')}
`;

writeFileSync(generatedDocsPath, generatedSource, 'utf8');

console.log(`Synced docs from ${sourceDirectory} to ${targetDirectory}`);