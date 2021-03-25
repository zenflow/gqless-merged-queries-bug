/**
 * GQLESS: You can safely modify this file and Query Fetcher based on your needs
 */

import { createReactClient } from "@gqless/react";

// @ts-ignore
import { createClient, QueryFetcher } from "gqless";
import {
  GeneratedSchema,
  generatedSchema,
  scalarsEnumsHash,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from "./schema.generated";

let onRequestInfo = (info) => {};
export const setOnRequestInfo = (input) => {
  onRequestInfo = input
};

const endpoint = "https://nextjs-graphql-with-prisma-simple.vercel.app/api";

const queryFetcher: QueryFetcher = async function (query, variables) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: "cors",
  });

  const json = await response.json();
  onRequestInfo({query, variables, errors: json.errors});

  return json;
};

export const client = createClient<
  GeneratedSchema,
  SchemaObjectTypesNames,
  SchemaObjectTypes
>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher,
});

export const {
  query,
  mutation,
  mutate,
  subscription,
  resolved,
  refetch,
} = client;

export const {
  graphql,
  useQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
} = createReactClient<GeneratedSchema>(client, {
  defaults: {
    suspense: true,
    staleWhileRevalidate: false,
  },
});

export * from "./schema.generated";

(global as any).client = client
