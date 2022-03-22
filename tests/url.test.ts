import { getImage, Solver } from "../util/solver.ts";

Deno.test("Decode image from sunday-webry", async () => {
  const image = await getImage(
    "https://cdn-img.www.sunday-webry.com/public/page/2/3269754496556228746-058619c91efc0f368d6c68bec5d453c3",
  );

  const solver = new Solver(image);

  solver.solve();

  await Deno.writeFile("./output/frieren.jpg", solver.answer());
});

Deno.test("Decode image from shonenjumpplus", async () => {
  const image = await getImage(
    "https://cdn-ak-img.shonenjumpplus.com/public/page/2/3269754496381687092-379912a01bcda616c4edb048edc17835",
  );

  const solver = new Solver(image);

  solver.solve();

  await Deno.writeFile("./output/ms-little-gray.jpg", solver.answer());
});
