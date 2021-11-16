# @unique/types

Do not edit by hand, those types are generated automatically, and definitions are located in chain repo

## Using types

Install library:

```bash
yarn add --dev @unique/types
```

Replace polkadot.js types with our chain types:

```json
// in tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@polkadot/api/augment": [
        "@unique/types/src/interfaces/augment-api.ts"
      ],
      "@polkadot/types/augment": [
        "@unique/types/src/interfaces/augment-types.ts"
      ]
    }
  }
}
```
