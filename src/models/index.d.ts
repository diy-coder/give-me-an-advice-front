import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DicaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Dica {
  readonly id: string;
  readonly nome?: string | null;
  readonly descricao?: string | null;
  readonly usuario?: string | null;
  readonly ativo?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Dica, DicaMetaData>);
  static copyOf(source: Dica, mutator: (draft: MutableModel<Dica, DicaMetaData>) => MutableModel<Dica, DicaMetaData> | void): Dica;
}