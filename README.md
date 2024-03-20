# parcer-namer-sorter

Parcel plugin for file-reconstructing and remove hash in build directory.
Hashes will stay in dist for optimization reasons.

Created for vanilla HTML/CSS bundles.
You can see usage example in [this template](https://github.com/glivera-team/glivera-parcel-template).

Important! Don`t forget hit the star https://github.com/jsqrt/parcel-namer-sorter

## Usage

Your sources must be in `src` directory.
Declare plugin in your `.parcelrc`:

```
"namers": [
  "parcel-namer-sorter",
  "..."
]
```

## Authors

- [@jsqrt](https://github.com/jsqrt)
- [@Glivera-team](https://github.com/glivera-team)
