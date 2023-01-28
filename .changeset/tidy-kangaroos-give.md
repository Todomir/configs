---
'@todomir/eslint-config': major
---

Add stricter TypeScript rules

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

2. The rule `@typescript-eslint/no-unused-vars` now ignores variables that start with "_"
