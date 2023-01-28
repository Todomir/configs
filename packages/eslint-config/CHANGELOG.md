# @todomir/eslint-config

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
