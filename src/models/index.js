// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Motivacional, Conselho, Dica } = initSchema(schema);

export {
  Motivacional,
  Conselho,
  Dica
};