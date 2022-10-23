---
'@todomir/eslint-config': major
---

Adjust ESLint configs

- Add import/order rule. Any imports in the wrong order will error out.
- Make Typescript rule even more strict. The following rules will error:
    - `@typescript-eslint/consistent-type-assertions`
    - `@typescript-eslint/consistent-type-imports`
    - `@typescript-eslint/no-array-constructor`
    - `@typescript-eslint/no-redeclare`
    - `@typescript-eslint/no-use-before-define`
    - `@typescript-eslint/no-unused-expressions`
    - `@typescript-eslint/no-useless-constructor`
