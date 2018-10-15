import ISprite from './ISprite';

class SpriteSheet {

  private width: number;
  private height: number;
  private sprites: ISprite[];

  constructor(private image: HTMLImageElement, private rows: number, private cols: number) {
    this.width = image.width / cols;
    this.height = image.height / rows;
    this.sprites = this.createSprites(rows, cols);
  }

  public draw(ctx: CanvasRenderingContext2D, sprite: ISprite): void {
    ctx.drawImage(this.image, sprite.x * this.width, sprite.y * this.height, this.width, this.height, 0, 0, ctx.canvas.width, ctx.canvas.height);
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

  public getSprites(): ISprite[] {
    return this.sprites;
  }

  public getSprite(sprite: number): ISprite {
    return this.sprites[sprite];
  }

  private createSprites(rows: number, cols: number): ISprite[] {
    const sprites = [];

    for (let i = 0; i < rows; i++) {
      for(let j = 0; j < cols; j++) {
        sprites.push({x: j, y: i});
      }
    }
    return sprites;
  }

}
export default SpriteSheet;
