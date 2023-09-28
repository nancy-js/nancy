export type CommonErrors =
  | "FailedToFetch"
  | "FailedToParse"
  | "NotFound"
  | "EmptyResponse";
export const makeError = <
  T extends
    | CommonErrors
    | (string & {}),
>(
  name: T,
  message: string,
  options?: ErrorOptions,
) => {
  const error = new Error(
    message,
    options,
  );
  error.name = name;
  return error as Error & {
    name: T;
  };
};
