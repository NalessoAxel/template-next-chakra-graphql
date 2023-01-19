// eslint-disable-next-line import/no-extraneous-dependencies
import { GraphQLClient } from 'graphql-request';

export const initClient = () => new GraphQLClient(process.env.NEXT_PUBLIC_API_URL);

export const isServer = () => typeof window === 'undefined';
