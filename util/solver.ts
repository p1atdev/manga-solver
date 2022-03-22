import {
  createCanvas,
  EmulatedCanvas2D,
  EmulatedCanvas2DContext,
  Image,
  loadImage,
} from "../deps.ts";

export class Solver {
  canvas: EmulatedCanvas2D;
  ctx: EmulatedCanvas2DContext;

  // these are magic numbers
  DIVIDE_NUM = 4;
  MULTIPLE = 8;

  width: number;
  height: number;
  cell_width: number;
  cell_height: number;

  image: Image;

  constructor(image: Image, width?: number, height?: number) {
    this.image = image;

    this.width = width ?? image.width();
    this.height = height ?? image.height();
    this.cell_width =
      Math.floor(this.width / (this.DIVIDE_NUM * this.MULTIPLE)) *
      this.MULTIPLE;
    this.cell_height =
      Math.floor(this.height / (this.DIVIDE_NUM * this.MULTIPLE)) *
      this.MULTIPLE;

    this.canvas = createCanvas(this.width, this.height);
    this.ctx = this.canvas.getContext("2d");
  }

  solve() {
    // first draw original image to draw right edge and bottom edge
    this.ctx.drawImage(this.image, 0, 0);

    for (let i = 0; i < this.DIVIDE_NUM; i++) {
      for (let j = 0; j <= i; j++) {
        // swap
        this.ctx.drawImage(
          this.image,
          i * this.cell_width,
          j * this.cell_height,
          this.cell_width,
          this.cell_height,
          j * this.cell_width,
          i * this.cell_height,
          this.cell_width,
          this.cell_height,
        );

        // if on a diagonal
        if (i === j) continue;

        // else swap
        this.ctx.drawImage(
          this.image,
          j * this.cell_width,
          i * this.cell_height,
          this.cell_width,
          this.cell_height,
          i * this.cell_width,
          j * this.cell_height,
          this.cell_width,
          this.cell_height,
        );
      }
    }
  }

  buffer() {
    return this.canvas.toBuffer();
  }

  // same as buffer()
  answer() {
    return this.canvas.toBuffer();
  }
}

export const getImage = async (path: string): Promise<Image> => {
  const image = await loadImage(path);
  return image;
};
