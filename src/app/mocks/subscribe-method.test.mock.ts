import { of } from "rxjs";

const returnMock: any = {
  next: () => {},
  error: () => {},
};

const SUBSCRIBE_RETURN_MOCK = of(returnMock);

export default SUBSCRIBE_RETURN_MOCK;