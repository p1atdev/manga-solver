import { getImage, Solver } from "../util/solver.ts";

const image = await getImage(
  "https://cdn-img.www.sunday-webry.com/public/page/2/3269754496556228746-058619c91efc0f368d6c68bec5d453c3",
);

const solver = new Solver(image);

solver.solve();

await Deno.writeFile("./output/frieren.jpg", solver.buffer());
