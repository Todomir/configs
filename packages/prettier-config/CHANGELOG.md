# @todomir/prettier-config

## 5.0.0

### Major Changes

- 3df124b: Add plugins and import sort rules

### Patch Changes

- 95ce31d: Remove wrongly installed package

## 4.0.0

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

## 3.0.0

### Major Changes

- 0fc2cc5: Update deps

## 2.1.0

### Minor Changes

- f18a7ca: Update package dependencies

## 2.0.0

### Major Changes

- Update packages
