# json-differ

A local JSON diff tool. Upload two JSON files, compare them structurally — not line by line.

## Features

- Two-pane file upload (click or drag-and-drop)
- Structural diff via [jsondiffpatch](https://github.com/benjamine/jsondiffpatch) — additions in green, deletions in red, modifications shown as both
- jq-style path filters: `+` to include only a path, `−` to exclude a path
- `.#` wildcard to match all array entries (e.g. `.items.#.name`)
- Toggle unchanged context, filtered to the active path

## Usage

```bash
yarn install
yarn dev        # http://localhost:6700
yarn build
yarn preview
```

## Filter syntax

Both filter inputs accept a simple dot-notation path subset:

| Expression | Meaning |
|---|---|
| `.foo` | match the `foo` key at the root |
| `.foo.bar` | match a nested path |
| `.items.#` | match all entries of the `items` array |
| `.items.#.name` | match the `name` field inside every array entry |

The `+` filter keeps only matching paths. The `−` filter removes them. Both can be combined.

## Stack

- [Astro](https://astro.build) — static site, no SSR needed
- [Alpine.js](https://alpinejs.dev) — reactivity
- [jsondiffpatch](https://github.com/benjamine/jsondiffpatch) — structural diff engine
