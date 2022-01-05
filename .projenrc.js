const { typescript } = require('projen');
const project = new typescript.TypeScriptAppProject({
    defaultReleaseBranch: 'main',
    name: 'sample-projen-project',
    eslintOptions: {
        prettier: true,
    },
    deps: [
        '@therify-inc/ddd-utils',
        '@therify-inc/types',
        'zod',
        'dynamoose',
        'aws-lambda',
    ] /* Runtime dependencies of this module. */,
    tsconfig: {
        compilerOptions: {
            baseUrl: './src',
            paths: {
                '@shared/*': ['shared/*'],
            },
        },
    },
    // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
    devDeps: [
        '@types/aws-lambda',
        'husky',
        '@commitlint/config-conventional',
        '@commitlint/cli',
    ] /* Build dependencies for this module. */,
    // packageName: undefined,  /* The "name" in package.json. */
    // release: undefined,      /* Add release management to this project. */
});
project.synth();
