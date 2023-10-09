export const parseKey = (key: string) => {
  const [address, keyName, pubkey, keyType] = key
    .split(/\n/g)
    .map((line) =>
      line.slice(line.indexOf(":") + 1).trim(),
    );

  if (!address || !keyName || !pubkey || !keyType) {
    throw new Error("Could not parse key output");
  }

  const parsedPubkey = JSON.parse(pubkey.slice(1, -1)) as {
    "@type": string;
    key: string;
  };
  return {
    name: keyName,
    address,
    pubkey: parsedPubkey,
    type: keyType,
  };
};
