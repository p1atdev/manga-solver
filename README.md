# manga-solver

manga-solver can decrypt images used in web manga services such as Shonen Jump
Plus and Sunday Webry.

[![vr scripts](https://badges.velociraptor.run/flat.svg)](https://velociraptor.run)
[![codecov](https://codecov.io/gh/p1atdev/manga-solver/branch/main/graph/badge.svg?token=50R5UBEDIZ)](https://codecov.io/gh/p1atdev/manga-solver)

## How to use

### Load a local image

```ts
// ./main.ts

import { getImage, Solver } from "https://deno.land/x/manga-solver/mod.ts";

// put your own image
const image = await getImage(
  "./assets/example.jpg",
);

const solver = new Solver(image);

solver.solve();

// get the result
await Deno.writeFile("./output/example.jpg", solver.buffer());
```

and

```bash
deno run --allow-read ./main.ts
```

### Load a remote image

```ts
// ./main.ts

import { getImage, Solver } from "https://deno.land/x/manga-solver/mod.ts";

// image url
const image = await getImage(
  "https://cdn-ak-img.shonenjumpplus.com/public/page/2/3269754496381687092-379912a01bcda616c4edb048edc17835",
);

const solver = new Solver(image);

solver.solve();

// get the result
await Deno.writeFile("./output/ms-little-gray.jpg", solver.buffer());
```

and

```bash
deno run --allow-net --allow-read ./main.ts
```
