class SpriteSheet {

  public width: number;
  public height: number;

  constructor(private image: HTMLImageElement, public rows: number, public cols: number) {
    this.width = image.width / cols;
    this.height = image.height / rows;
  }

  public draw(ctx: CanvasRenderingContext2D, row: number, col: number): void {
    ctx.drawImage(this.image, col * this.width, row * this.height, this.width, this.height, col, row, this.width, this.height);
  }

}
export default SpriteSheet;
