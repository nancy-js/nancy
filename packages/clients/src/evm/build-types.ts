import { JSONSchema4 } from "json-schema";
import openrpc from "./openrpc.json";
import { compile } from "json-schema-to-typescript";

const methodToJsonSchema = ({
  params,
  result,
  name,
  description,
  summary,
  errors,
}: (typeof openrpc)["methods"][number]): JSONSchema4 => {
  const out: JSONSchema4 = {
    type: "object",
    title: name,
    description:
      description ?? summary,

    properties: {
      params: {
        type: "array",

        minItems:
          params.reduce(
            (acc, param) =>
              acc +
              ("required" in
                param &&
              param.required
                ? 1
                : 0),
            0,
          ),
        items: params.map(
          ({
            schema,
            name,
          }) => ({
            title: name,
            ...schema,
          }),
        ),
      },
      result:
        result.schema as JSONSchema4,
    },
    required: [
      "params",
      "result",
    ],
  };
  if (errors) {
    out.properties!.errors = {
      type: "object",
      anyOf: errors.map(
        ({
          code,
          message,
        }) => ({
          type: "object",
          properties: {
            code: {
              type: "number",
              enum: [code],
            },
            message: {
              type: "string",
              enum: [message],
            },
          },
          required: [
            "code",
            "message",
          ],
        }),
      ),
    };

    out.required = [
      ...(out.required as string[]),
      "errors",
    ];
  }
  return out;
};

const schemaFromMethods: JSONSchema4 =
  {
    title: "Example Schema",
    type: "object",
    properties:
      Object.fromEntries(
        openrpc.methods.map(
          (method) => {
            method.params;
            return [
              method.name,
              methodToJsonSchema(
                method,
              ),
            ];
          },
        ),
      ),

    required:
      openrpc.methods.map(
        (method) =>
          method.name,
      ),
    components:
      openrpc.components,
  };

const recursivelyRemoveKeys =
  (
    obj: unknown,
    keys: string[],
  ): unknown => {
    if (
      typeof obj !== "object"
    ) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(
        (item: unknown) =>
          recursivelyRemoveKeys(
            item,
            keys,
          ) as unknown[],
      );
    }
    const newObj: any = {};
    for (const key in obj) {
      if (
        keys.includes(key)
      ) {
        continue;
      }

      newObj[key] =
        recursivelyRemoveKeys(
          (
            obj as Record<
              string,
              unknown
            >
          )[key],
          keys,
        );
    }

    return newObj;
  };
const schema =
  recursivelyRemoveKeys(
    schemaFromMethods,
    ["title"],
  ) as JSONSchema4;

const types = await compile(
  schema,

  "EvmJSONRPCMethods",
  {
    additionalProperties:
      false,
    format: true,
    unreachableDefinitions:
      false,
  },
);

await Bun.write(
  "./evm/evm-types.ts",
  types,
);
