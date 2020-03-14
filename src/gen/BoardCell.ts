class BoardCell {
  private reVal: number;
  private imVal: number | null;
  private visible: boolean;

  public constructor(value: number, visible: boolean = true) {
    this.reVal = value;
    this.imVal = null;
    this.visible = visible;
  }

  public isVisible() {
    return this.visible;
  }

  public isCorrect() {
    return this.visible
      ? true
      : this.imVal === null
      ? true
      : this.imVal === this.reVal;
  }

  public setVisability(val: boolean) {
    this.visible = val;
  }

  public setImValue(imValue: number) {
    return (this.imVal = imValue);
  }

  public getReValue() {
    return this.reVal;
  }

  public getImValue() {
    return this.imVal;
  }
}

export default BoardCell;
