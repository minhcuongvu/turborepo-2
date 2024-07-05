import type { PlopTypes } from '@turbo/gen';

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator('react-component', {
    description: 'Adds a new react component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.module.css',
        templateFile: 'templates/styleComponent.hbs',
      },
      {
        type: 'append',
        path: 'src/index.tsx',
        template: `export * from './components/{{kebabCase name}}/{{kebabCase name}}';`,
      },
      // {
      //   type: 'append',
      //   path: 'package.json',
      //   pattern: /"exports": {(?<insertion>)/g,
      //   template: '    "./{{kebabCase name}}": "./src/components/{{kebabCase name}}.tsx",',
      // },
    ],
  });
}
