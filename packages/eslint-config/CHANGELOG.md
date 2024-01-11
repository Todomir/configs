# @todomir/eslint-config

## 10.0.2

### Patch Changes

- 9e3c073: Remove config.js

## 10.0.1

### Patch Changes

- 5b8bc2a: Fix config not imported

## 10.0.0

### Major Changes

- 31ae7ce: - Add `eslint-plugin-unicorn`
  - Add `eslint-plugin-typescript-sort-keys`,
  - Add `eslint-plugin-promise`
  - Add `@babel/plugin-syntax-import-assertions`
  - Revamped all configs

## 9.0.4

### Patch Changes

- fde376b: Update package versions

## 9.0.3

### Patch Changes

- 839d733: Add eslint-config-prettier to regular dependencies

## 9.0.2

### Patch Changes

- cd931b2: Remove eslint-plugin-import in index.js

## 9.0.1

### Patch Changes

- 1ecb477: Remove old eslint-plugin-import code

## 9.0.0

### Major Changes

- ef63cff: Change main Node version to 18
- 3aec73a: # Git Diff Analysis

  ## `packages/eslint-config/package.json`

  ### Breaking Changes

  - Updated versions of various ESLint plugins and configurations. Could introduce incompatibilities.
  - Removal of dependencies like `eslint-plugin-import` may break existing linting setups.

  ### Rationale

  - The updates aim to enhance rule coverage, fix bugs, or address vulnerabilities.

  ### Update Guide

  1. Check your project's dependencies against the removed ESLint plugins and adjust if necessary.
  2. Test your project with the updated package versions for compatibility.

  ### Package Version Updates

  - Multiple updates in `dependencies` and `devDependencies`, like `eslint` from `^8.42.0` to `^8.56.0`, `typescript` from `^5.1.3` to `^5.3.3`.

  ***

  ## `packages/eslint-config/react.js`

  ### Breaking Changes

  - Simplified `extends` and `plugins` arrays in the React ESLint configuration could lead to missing configurations.

  ### Rationale

  - The changes streamline the React ESLint setup, possibly to minimize conflicts between plugins.

  ### Update Guide

  1. Align your React ESLint configuration with the updated settings, particularly if you relied on the removed configurations.

  ***

  ## `packages/eslint-config/rules/import.js` (Deleted)

  ### Breaking Changes

  - Removal of `import.js` rules file for ESLint may cause issues for projects relying on these rules.

  ### Rationale

  - The deletion suggests a consolidation or restructuring of import-related ESLint rules.

  ### Update Guide

  1. If your project used `import.js` rules, assess how to reincorporate or replace these rules.

  ***

  ## `packages/prettier-config/index.js`

  ### Breaking Changes

  - Major changes in Prettier configuration options could impact code formatting across projects.

  ### Rationale

  - Updating the Prettier configuration for new formatting standards or preferences.

  ### Update Guide

  1. Reformat your codebase using the new Prettier configuration for consistency.

  ***

  ## `packages/prettier-config/package.json`

  ### Breaking Changes

  - Update to Prettier version and new plugins may change formatting styles or introduce new rules.

  ### Rationale

  - Keeping Prettier and its plugins current for improved functionality and feature set.

  ### Update Guide

  1. Test the new Prettier configuration in a controlled setting to ensure it meets your formatting standards.

  ### Package Version Updates

  - Update to Prettier `^3.0.0` and addition of new plugins.

  ***

  ## `packages/stylelint-config/package.json`

  ### Breaking Changes

  - Updated `stylelint` and related packages might introduce new or changed linting rules.

  ### Rationale

  - The updates aim for new features, bug fixes, or security improvements.

  ### Update Guide

  1. Test the new stylelint configurations against your stylesheets for compatibility.

  ### Package Version Updates

  - Updates in dependencies, like `stylelint` from `^15.7.0` to `^16.1.0`.

## 8.0.0

### Major Changes

- 0fc2cc5: Update deps

## 7.1.1

### Patch Changes

- 2355755: Add `ignorePatternArgs` to `no-unused-vars`

## 7.1.0

### Minor Changes

- f18a7ca: Update package dependencies

## 7.0.0

### Major Changes

- fe501e8: Add stricter TypeScript rules

  1. The following rules are now marked as ERROR:

  - `@typescript-eslint/no-floating-promises`
  - `@typescript-eslint/no-misused-promises`
  - `@typescript-eslint/await-thenable`
  - `@typescript-eslint/no-for-in-array`
  - `@typescript-eslint/no-unnecessary-type-assertion`
  - `@typescript-eslint/no-unsafe-argument`
  - `@typescript-eslint/no-unsafe-assignment`
  - `@typescript-eslint/no-unsafe-call`
  - `@typescript-eslint/no-unsafe-member-access`
  - `@typescript-eslint/no-unsafe-return`
  - `@typescript-eslint/require-await`
  - `@typescript-eslint/restrict-plus-operands`
  - `@typescript-eslint/restrict-template-expressions`
  - `@typescript-eslint/unbound-method`

  2. The rule `@typescript-eslint/no-unused-vars` now ignores variables that start with "\_"

## 6.0.1

### Patch Changes

- 92ceeca: Add `eslint-plugin-import-helpers` to plugin list

## 6.0.0

### Major Changes

- e9983f2: Auto sort imports

## 5.0.1

### Patch Changes

- 02edf77: Fix import/order rule

## 5.0.0

### Major Changes

- f76ada1: Adjust ESLint configs

  - Add import/order rule. Any imports in the wrong order will error out.
  - Make Typescript rule even more strict. The following rules will error:
    - `@typescript-eslint/consistent-type-assertions`
    - `@typescript-eslint/consistent-type-imports`
    - `@typescript-eslint/no-array-constructor`
    - `@typescript-eslint/no-redeclare`
    - `@typescript-eslint/no-use-before-define`
    - `@typescript-eslint/no-unused-expressions`
    - `@typescript-eslint/no-useless-constructor`

## 4.0.0

### Major Changes

- 075837e: Updated `eslint` to most recent version. Please check migration guide at [ESLint's website](https://eslint.org/docs/latest/user-guide/migrating-to-8.0.0).

## 3.0.0

### Major Changes

- Add `no-constant-condition`, `no-unreachable`, `no-constant-binary-expression` as ERROR; Change `no-invalid-regexp`, `no-label-var`, `no-unsafe-negation`, `no-sequences`, `no-useless-computed-key`, `no-useless-concat`, `no-useless-constructor`, `no-useless-escape` from WARN to ERROR.

## 2.0.1

### Patch Changes

- c1a70f8: Add package description

## 2.0.0

### Major Changes

- Update packages
