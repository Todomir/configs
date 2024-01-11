# @todomir/prettier-config

Uma [configuração compartilhável](https://prettier.io/docs/en/configuration.html#sharing-configurations)
para projetos utilizando **[Prettier](https://prettier.io)**.

## Instalação

```bash
npm install --save-dev @todomir/prettier-config
```

_Essa configuração é apenas um template. Ela não instala o Prettier, ESLint ou quaisquer pacotes relacionados._

## Uso

Referencie no `package.json` usando a propriedade `prettier`:

```json
{
  "name": "meu-projeto",
  "prettier": "@todomir/prettier-config",
  "devDependencies": {
    "@todomir/prettier-config": "latest"
  }
}
```

Se não quiser utilizar no `package.json`, você pode usar de qualquer configuração abaixo para exportar uma string:

```jsonc
// `.prettierrc.json`
"@todomir/prettier-config"
```

```javascript
// `prettier.config.js` or `.prettierrc.js`
module.exports = "@todomir/prettier-config";
```
