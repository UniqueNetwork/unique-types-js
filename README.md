# @unique-nft/types

Unique network api types

Do not edit by hand, those types are generated automatically, and definitions are located in chain repo

## Using types

Install library:

```bash
yarn add --dev @unique-nft/types
```

Replace polkadot.js types with our chain types:

```json
// in tsconfig.json
{
  "compilerOptions": {
    "@polkadot/types/lookup": [
      "@unique-nft/types/types-lookup.ts"
    ],
  }
}
```

Since polkadot v7 api augmentations not loaded by default, in every file, where you need to access `api.tx`, `api.query`, `api.rpc`, etc; you should explicitly import corresponding augmentation before any other `polkadot.js` related import:
```
import '@unique-nft/types/augment-api-consts.ts';
import '@unique-nft/types/augment-api-errors.ts';
import '@unique-nft/types/augment-api-events.ts';
import '@unique-nft/types/augment-api-query.ts';
import '@unique-nft/types/augment-api-rpc.ts';
import '@unique-nft/types/augment-api-tx.ts';
```
