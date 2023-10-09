export const readStd = async (
  stdio: ReadableStream<Uint8Array>,
) => {
  const output = await new Response(stdio).text();
  return output;
};
