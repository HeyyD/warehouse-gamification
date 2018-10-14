class SpriteSheet {

  private width: number;
  private height: number;

  constructor(private image: HTMLImageElement, private rows: number, private cols: number) {
    this.width = image.width / cols;
    this.height = image.height / rows;
  }

  public draw(ctx: CanvasRenderingContext2D, row: number, col: number): void {
    // ctx.drawImage(this.image, col * this.width, row * this.height, this.width, this.height, col, row, this.width, this.height);
    ctx.drawImage(this.image, col * this.width, row * this.height, this.width, this.height, 0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public getColumns(): number {
    return this.cols;
  }

  public getRows(): number {
    return this.rows;
  }

}
export default SpriteSheet;
