import { getImage, Solver } from "../util/solver.ts";

Deno.test("Decode image from local (./assets/0.jpg)", async () => {
  // check file exists
  const file = await Deno.stat("./assets/0.jpg");
  if (!file.isFile) {
    return;
  }

  const image = await getImage(
    "./assets/0.jpg",
  );

  const solver = new Solver(image);

  solver.solve();

  await Deno.writeFile("./output/local.jpg", solver.buffer());
});
