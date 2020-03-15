class BoardCell {
  private reVal: number;
  private imVal: number | null;
  private visible: boolean;

  public static from(obj: {
    reVal: number;
    imVal: number | null;
    visible: boolean;
  }) {
    return new BoardCell(obj.reVal, obj.visible, obj.imVal);
  }

  public constructor(
    value: number,
    visible: boolean = true,
    imVal?: number | null,
  ) {
    this.reVal = value;
    this.imVal = imVal ? imVal : null;
    this.visible = visible;
  }

  public isVisible = () => {
    return this.visible;
  };

  public isCorrect = () => {
    return this.visible
      ? true
      : this.imVal === null
      ? true
      : this.imVal === this.reVal;
  };

  public setVisability = (val: boolean) => {
    this.visible = val;
  };

  public setImValue = (imValue: number | null) => {
    return (this.imVal = imValue);
  };

  private setReValue = (value: number) => {
    this.reVal = value;
  };

  public getReValue = () => {
    return this.reVal;
  };

  public getImValue = () => {
    return this.imVal;
  };
}

export default BoardCell;
