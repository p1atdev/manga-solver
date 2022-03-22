import { getImage, Solver } from "../util/solver.ts";

Deno.test("Decode image from local (./assets/0.jpg)", async () => {
  // check file exists
  try {
    await Deno.stat("./assets/0.jpg");
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) {
      console.error("file does not exists");
      return;
    }
  }

  const image = await getImage(
    "./assets/0.jpg",
  );

  const solver = new Solver(image);

  solver.solve();

  await Deno.writeFile("./output/local.jpg", solver.answer());
});
