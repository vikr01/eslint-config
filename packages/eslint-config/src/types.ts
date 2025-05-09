import type { MergeDeep } from "type-fest";
import type createBrowser from "./configs/createBrowser";
import type createTs from "./configs/createTs";

export type MergeDeepInfinite<T extends unknown[]> = T extends [
  infer A,
  infer B,
  ...infer Rest,
]
  ? MergeDeepInfinite<[MergeDeep<A, B>, ...Rest]>
  : T extends [infer Only]
    ? Only
    : never;

type TypescriptParams =
  | {
      typescript: true;
      tsConfigPath: Parameters<typeof createTs>[0]["tsConfigPath"];
    }
  | {
      typescript: false;
    };

type BrowserParams = {
  browser?: Parameters<typeof createBrowser>[0];
};

type OtherParams = {
  enableIgnores?: false;

  // TODO: support jsConfigPath
  jsConfigPath?: string;

  json?: boolean;
};

export type Params = Readonly<
  MergeDeepInfinite<[TypescriptParams, BrowserParams, OtherParams]>
>;
