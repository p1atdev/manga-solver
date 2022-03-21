import { getImage, Solver } from "../util/solver.ts";

Deno.test("Decode image from local (./assets/0.jpg)", async () => {
  const image = await getImage(
    "./assets/0.jpg",
  );

  const solver = new Solver(image);

  solver.solve();

  await Deno.writeFile("./output/local.jpg", solver.buffer());
});
