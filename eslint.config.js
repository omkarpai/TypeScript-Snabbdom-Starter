import eslint from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default tseslint.config(
    [globalIgnores(['dist', 'node_modules'])],
    eslintConfigPrettier,
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    stylistic.configs.recommended,
    {
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: [
                        'eslint.config.js',
                        'prettier.config.js',
                        'vite.config.js',
                    ],
                },
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            '@stylistic/arrow-parens': ['error', 'always'],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/no-extra-semi': ['error'],
            '@stylistic/indent': ['error', 4],
            '@stylistic/brace-style': ['error', '1tbs'],
            '@typescript-eslint/explicit-function-return-type': ['error'],
            'arrow-body-style': ['error', 'always'],
            'no-console': ['error'],
            'curly': ['error'],
        },
    },
);
