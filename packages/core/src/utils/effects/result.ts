export type Fail<T = never> = readonly [T, null];
export type Ok<T = never> = readonly [null, T];

export type Result<T = never, U = never> = Fail<T> | Ok<U>;

export const fail = <const T>(error: T): Fail<T> => [
  error,
  null,
];

export const ok = <const T = undefined>(
  success?: T,
): Ok<T> => [null, success as T];

export const isOk = <TErr, TOk>(
  result: Result<TErr, TOk>,
): result is Ok<TOk> => result[0] === null;

export const isFail = <TErr, TOk>(
  result: Result<TErr, TOk>,
): result is Fail<TErr> => result[0] !== null;
