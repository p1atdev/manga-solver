import { getImage, Solver } from "../util/solver.ts";

// put your own image
const image = await getImage(
  "./assets/example.jpg",
);

const solver = new Solver(image);

solver.solve();

await Deno.writeFile("./output/example.jpg", solver.buffer());
