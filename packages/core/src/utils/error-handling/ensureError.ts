export function ensureError<T>(
  value: T,
): T extends Error ? T : Error {
  if (value instanceof Error) return value as never;

  let stringified =
    "[Unable to stringify the thrown value]";
  try {
    stringified = JSON.stringify(value);
  } catch {}

  const error = new Error(
    `This value was thrown as is, not through an Error: ${stringified}`,
  );
  return error as never;
}
