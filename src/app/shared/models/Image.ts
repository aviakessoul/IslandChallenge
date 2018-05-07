import { Pixel } from './Pixel';

export class Image {
    private pixels: Pixel[][];

    constructor(n: number, m: number) {
      this.pixels = [];

        for (let i: 0; i < n; i++) {
            this.pixels[i] = [];
            for (let j = 0; j < m; j++) {
                this.pixels[i][j] = new Pixel();
            }
        }
    }
}
