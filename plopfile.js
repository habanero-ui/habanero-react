module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'this is a skeleton plopfile',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/component.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{pascalCase name}}/__stories__/{{pascalCase name}}.stories.js',
        templateFile: 'plop-templates/stories.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{pascalCase name}}/__stories__/{{pascalCase name}}Default.story.js',
        templateFile: 'plop-templates/story.hbs',
      },
    ],
  })
}
