class CustomError extends Error {
  obj: Object;

  constructor(message: string, obj: any) {
    super(message);
    this.obj = obj;
  }
}

export default CustomError;
