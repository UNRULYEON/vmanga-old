[&larr; Back](../README.md)

### Adding a new alias/folder

All the aliases are defined in one file: `tsconfig.paths.json`. There, you can create a new alias in the `paths` array.

Two formats can be used:

```json
"@aliasA/*": ["./aliasA/*"],

"@aliasB": ["./aliasB"],
```

The difference is that `@aliasA` has no `index.ts` file where everything is re-imported and exported, whereas `@aliasB` does. The import will reference a folder inside of `./aliasA` like so:

```tsx
import MyReactComponent from "@aliasA/myReactComponent"
```

With `@aliasB`, an `index.ts` file is used. This file will export anything that is in the folder. This means that imports will just reference the alias:

```tsx
import { myUtil } from "@aliasB"
```

Only the `components` folder uses no `index.ts` file. The other aliases do.

### Creating a new file to be used as an import

Creating files or components depends on how an alias is made. If you're creating a new component, simply create a folder inside the `components` and create a `index.tsx` file.

For other files, create the file/folder and re-export it in the `index.ts` file.
