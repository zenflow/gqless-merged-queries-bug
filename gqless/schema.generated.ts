/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { ScalarsEnumsHash } from "gqless";

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
}

export interface UserOrderBy {
  firstName?: Maybe<OrderBy>;
  lastName?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
}

export enum OrderBy {
  asc = "asc",
  desc = "desc",
}

export interface PostOrderBy {
  title?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  votes?: Maybe<OrderBy>;
}

export const scalarsEnumsHash: ScalarsEnumsHash = {
  Int: true,
  OrderBy: true,
  String: true,
  DateTime: true,
  Boolean: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: "String!" },
    allUsers: {
      __type: "[User!]!",
      __args: { first: "Int", skip: "Int", orderBy: "UserOrderBy" },
    },
    _allUsersMeta: { __type: "_QueryMeta!" },
    User: { __type: "User!", __args: { id: "String!" } },
    allPosts: {
      __type: "[Post!]!",
      __args: { first: "Int", skip: "Int", orderBy: "PostOrderBy" },
    },
    _allPostsMeta: { __type: "_QueryMeta!" },
    Post: { __type: "Post!", __args: { id: "String!" } },
  },
  mutation: {
    __typename: { __type: "String!" },
    createPost: {
      __type: "Post!",
      __args: { title: "String!", url: "String!" },
    },
    votePost: { __type: "Post!", __args: { id: "String!" } },
  },
  subscription: {},
  UserOrderBy: {
    firstName: { __type: "OrderBy" },
    lastName: { __type: "OrderBy" },
    createdAt: { __type: "OrderBy" },
    updatedAt: { __type: "OrderBy" },
  },
  User: {
    __typename: { __type: "String!" },
    id: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    updatedAt: { __type: "DateTime!" },
    firstName: { __type: "String!" },
    lastName: { __type: "String!" },
    email: { __type: "String!" },
  },
  _QueryMeta: { __typename: { __type: "String!" }, count: { __type: "Int!" } },
  PostOrderBy: {
    title: { __type: "OrderBy" },
    createdAt: { __type: "OrderBy" },
    updatedAt: { __type: "OrderBy" },
    votes: { __type: "OrderBy" },
  },
  Post: {
    __typename: { __type: "String!" },
    id: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    updatedAt: { __type: "DateTime!" },
    title: { __type: "String!" },
    url: { __type: "String!" },
    votes: { __type: "Int!" },
  },
} as const;

export interface Query {
  __typename: "Query" | undefined;
  allUsers: (args?: {
    first?: ScalarsEnums["Int"];
    skip?: ScalarsEnums["Int"];
    orderBy?: Maybe<UserOrderBy>;
  }) => Array<User>;
  _allUsersMeta: _QueryMeta;
  User: (args: { id: ScalarsEnums["String"] }) => User;
  allPosts: (args?: {
    first?: ScalarsEnums["Int"];
    skip?: ScalarsEnums["Int"];
    orderBy?: Maybe<PostOrderBy>;
  }) => Array<Post>;
  _allPostsMeta: _QueryMeta;
  Post: (args: { id: ScalarsEnums["String"] }) => Post;
}

export interface Mutation {
  __typename: "Mutation" | undefined;
  createPost: (args: {
    title: ScalarsEnums["String"];
    url: ScalarsEnums["String"];
  }) => Post;
  votePost: (args: { id: ScalarsEnums["String"] }) => Post;
}

export interface Subscription {
  __typename: "Subscription" | undefined;
}

export interface User {
  __typename: "User" | undefined;
  id: ScalarsEnums["String"];
  createdAt: ScalarsEnums["DateTime"];
  updatedAt: ScalarsEnums["DateTime"];
  firstName: ScalarsEnums["String"];
  lastName: ScalarsEnums["String"];
  email: ScalarsEnums["String"];
}

export interface _QueryMeta {
  __typename: "_QueryMeta" | undefined;
  count: ScalarsEnums["Int"];
}

export interface Post {
  __typename: "Post" | undefined;
  id: ScalarsEnums["String"];
  createdAt: ScalarsEnums["DateTime"];
  updatedAt: ScalarsEnums["DateTime"];
  title: ScalarsEnums["String"];
  url: ScalarsEnums["String"];
  votes: ScalarsEnums["Int"];
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  User: User;
  _QueryMeta: _QueryMeta;
  Post: Post;
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
  | "Subscription"
  | "User"
  | "_QueryMeta"
  | "Post";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  OrderBy: OrderBy | undefined;
}
