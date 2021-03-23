// @ts-nocheck
import * as extensions from "../extensions";
import { lazyGetters } from "@gqless/utils";
import {
  ObjectNode,
  FieldNode,
  ArrayNode,
  Arguments,
  ArgumentsField,
  ScalarNode,
  InputNode,
  InputNodeField,
  EnumNode
} from "gqless";

export const schema = {
  get Query() {
    return new ObjectNode(
      {
        get allUsers() {
          return new FieldNode(
            new ArrayNode(schema.User, false),
            new Arguments({
              get first() {
                return new ArgumentsField(schema.Int, true);
              },
              get skip() {
                return new ArgumentsField(schema.Int, true);
              },
              get orderBy() {
                return new ArgumentsField(schema.UserOrderBy, true);
              }
            }),
            false
          );
        },
        get _allUsersMeta() {
          return new FieldNode(schema._QueryMeta, undefined, false);
        },
        get User() {
          return new FieldNode(
            schema.User,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.String, false);
                }
              },
              true
            ),
            false
          );
        },
        get allPosts() {
          return new FieldNode(
            new ArrayNode(schema.Post, false),
            new Arguments({
              get first() {
                return new ArgumentsField(schema.Int, true);
              },
              get skip() {
                return new ArgumentsField(schema.Int, true);
              },
              get orderBy() {
                return new ArgumentsField(schema.PostOrderBy, true);
              }
            }),
            false
          );
        },
        get _allPostsMeta() {
          return new FieldNode(schema._QueryMeta, undefined, false);
        },
        get Post() {
          return new FieldNode(
            schema.Post,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.String, false);
                }
              },
              true
            ),
            false
          );
        }
      },
      { name: "Query", extension: ((extensions as any) || {}).Query }
    );
  },
  get Int() {
    return new ScalarNode({
      name: "Int",
      extension: ((extensions as any) || {}).Int
    });
  },
  get UserOrderBy() {
    return new InputNode(
      {
        get firstName() {
          return new InputNodeField(schema.OrderBy, true);
        },
        get lastName() {
          return new InputNodeField(schema.OrderBy, true);
        },
        get createdAt() {
          return new InputNodeField(schema.OrderBy, true);
        },
        get updatedAt() {
          return new InputNodeField(schema.OrderBy, true);
        }
      },
      { name: "UserOrderBy" }
    );
  },
  get OrderBy() {
    return new EnumNode({ name: "OrderBy" });
  },
  get User() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.String, undefined, false);
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false);
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false);
        },
        get firstName() {
          return new FieldNode(schema.String, undefined, false);
        },
        get lastName() {
          return new FieldNode(schema.String, undefined, false);
        },
        get email() {
          return new FieldNode(schema.String, undefined, false);
        }
      },
      { name: "User", extension: ((extensions as any) || {}).User }
    );
  },
  get String() {
    return new ScalarNode({
      name: "String",
      extension: ((extensions as any) || {}).String
    });
  },
  get DateTime() {
    return new ScalarNode({
      name: "DateTime",
      extension: ((extensions as any) || {}).DateTime
    });
  },
  get _QueryMeta() {
    return new ObjectNode(
      {
        get count() {
          return new FieldNode(schema.Int, undefined, false);
        }
      },
      { name: "_QueryMeta", extension: ((extensions as any) || {})._QueryMeta }
    );
  },
  get PostOrderBy() {
    return new InputNode(
      {
        get title() {
          return new InputNodeField(schema.OrderBy, true);
        },
        get createdAt() {
          return new InputNodeField(schema.OrderBy, true);
        },
        get updatedAt() {
          return new InputNodeField(schema.OrderBy, true);
        },
        get votes() {
          return new InputNodeField(schema.OrderBy, true);
        }
      },
      { name: "PostOrderBy" }
    );
  },
  get Post() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.String, undefined, false);
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false);
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false);
        },
        get title() {
          return new FieldNode(schema.String, undefined, false);
        },
        get url() {
          return new FieldNode(schema.String, undefined, false);
        },
        get votes() {
          return new FieldNode(schema.Int, undefined, false);
        }
      },
      { name: "Post", extension: ((extensions as any) || {}).Post }
    );
  },
  get Mutation() {
    return new ObjectNode(
      {
        get createPost() {
          return new FieldNode(
            schema.Post,
            new Arguments(
              {
                get title() {
                  return new ArgumentsField(schema.String, false);
                },
                get url() {
                  return new ArgumentsField(schema.String, false);
                }
              },
              true
            ),
            false
          );
        },
        get votePost() {
          return new FieldNode(
            schema.Post,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.String, false);
                }
              },
              true
            ),
            false
          );
        }
      },
      { name: "Mutation", extension: ((extensions as any) || {}).Mutation }
    );
  },
  get __Schema() {
    return new ObjectNode(
      {
        get types() {
          return new FieldNode(
            new ArrayNode(schema.__Type, false),
            undefined,
            false
          );
        },
        get queryType() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get mutationType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get subscriptionType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get directives() {
          return new FieldNode(
            new ArrayNode(schema.__Directive, false),
            undefined,
            false
          );
        }
      },
      { name: "__Schema", extension: ((extensions as any) || {}).__Schema }
    );
  },
  get __Type() {
    return new ObjectNode(
      {
        get kind() {
          return new FieldNode(schema.__TypeKind, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(schema.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(schema.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, true),
            undefined,
            true
          );
        },
        get ofType() {
          return new FieldNode(schema.__Type, undefined, true);
        }
      },
      { name: "__Type", extension: ((extensions as any) || {}).__Type }
    );
  },
  get __TypeKind() {
    return new EnumNode({ name: "__TypeKind" });
  },
  get Boolean() {
    return new ScalarNode({
      name: "Boolean",
      extension: ((extensions as any) || {}).Boolean
    });
  },
  get __Field() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "__Field", extension: ((extensions as any) || {}).__Field }
    );
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get defaultValue() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "__InputValue",
        extension: ((extensions as any) || {}).__InputValue
      }
    );
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "__EnumValue",
        extension: ((extensions as any) || {}).__EnumValue
      }
    );
  },
  get __Directive() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(schema.__DirectiveLocation, false),
            undefined,
            false
          );
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        }
      },
      {
        name: "__Directive",
        extension: ((extensions as any) || {}).__Directive
      }
    );
  },
  get __DirectiveLocation() {
    return new EnumNode({ name: "__DirectiveLocation" });
  }
};

lazyGetters(schema);
