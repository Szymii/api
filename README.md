To install dependencies:

```bash
bun install
```

Scripts:

```bash
    "dev": "bun --watch index.ts",
    "test": "bun --watch test",
    "format": "bun biome format ./app --write",
    "lint": "bun biome check --apply-unsafe ./app" # Fire some error at the and but works
```

`bun install --production` is currently bugged, so you have to comment `"prepare": "husky install"`. Do not worry about biome errors on package json. Bun allows comments but biome not :/

https://github.com/oven-sh/bun/issues/7969

This project was created using `bun init` in bun v1.0.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
