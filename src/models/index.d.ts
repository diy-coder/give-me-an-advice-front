import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MotivacionalMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ConselhoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DicaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Motivacional {
  readonly id: string;
  readonly nome?: string | null;
  readonly descricao?: string | null;
  readonly usuario?: string | null;
  readonly ativo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Motivacional, MotivacionalMetaData>);
  static copyOf(source: Motivacional, mutator: (draft: MutableModel<Motivacional, MotivacionalMetaData>) => MutableModel<Motivacional, MotivacionalMetaData> | void): Motivacional;
}

export declare class Conselho {
  readonly id: string;
  readonly nome?: string | null;
  readonly descricao?: string | null;
  readonly usuario?: string | null;
  readonly ativo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Conselho, ConselhoMetaData>);
  static copyOf(source: Conselho, mutator: (draft: MutableModel<Conselho, ConselhoMetaData>) => MutableModel<Conselho, ConselhoMetaData> | void): Conselho;
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