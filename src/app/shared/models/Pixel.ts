export class Pixel {
  private _value: number;
  private _neigbours: Pixel[];

  get value(): number {
    return this._value;
  }
  set value(value: number) {
      this._value = value;
  }
}
