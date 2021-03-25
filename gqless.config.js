/**
 * @type {import("@gqless/cli").GqlessConfig}
 */
const config = {
  endpoint: '/api',
  enumsAsStrings: false,
  react: true,
  scalars: { DateTime: 'string' },
  preImport: '',
  introspection: {
    endpoint: 'https://nextjs-graphql-with-prisma-simple.vercel.app/api',
    headers: {},
  },
  destination: './gqless/index.ts',
  subscriptions: false,
};

module.exports = config;
