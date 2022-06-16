# @unique-nft/opal-testnet-types

Unique network api types for opal testnet

Do not edit by hand, those types are generated automatically, and definitions are located in chain repo

## Using types

Install library:

```bash
yarn add --dev @unique-nft/opal-testnet-types
```

Replace polkadot.js types with our chain types adding corresponding path override to the tsconfig `compilerOptions.paths` section:

```json
// in tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@polkadot/types/lookup": ["node_modules/@unique-nft/opal-testnet-types/types-lookup"]
    }
  }
}
```

Since polkadot v7 api augmentations not loaded by default, in every file, where you need to access `api.tx`, `api.query`, `api.rpc`, etc; you should explicitly import corresponding augmentation before any other `polkadot.js` related import:
```
import '@unique-nft/opal-testnet-types/augment-api';
```
