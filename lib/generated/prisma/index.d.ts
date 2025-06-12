/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model categories
 *
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>;
/**
 * Model game_products
 *
 */
export type game_products = $Result.DefaultSelection<Prisma.$game_productsPayload>;
/**
 * Model inventory
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type inventory = $Result.DefaultSelection<Prisma.$inventoryPayload>;
/**
 * Model order_details
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type order_details = $Result.DefaultSelection<Prisma.$order_detailsPayload>;
/**
 * Model orders
 *
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>;
/**
 * Model products
 *
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>;
/**
 * Model shipping_status
 *
 */
export type shipping_status = $Result.DefaultSelection<Prisma.$shipping_statusPayload>;
/**
 * Model subscription_plans
 *
 */
export type subscription_plans = $Result.DefaultSelection<Prisma.$subscription_plansPayload>;
/**
 * Model users
 *
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent) => void
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<_T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<_T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
   * ```
   */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game_products`: Exposes CRUD operations for the **game_products** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Game_products
   * const game_products = await prisma.game_products.findMany()
   * ```
   */
  get game_products(): Prisma.game_productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **inventory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Inventories
   * const inventories = await prisma.inventory.findMany()
   * ```
   */
  get inventory(): Prisma.inventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_details`: Exposes CRUD operations for the **order_details** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Order_details
   * const order_details = await prisma.order_details.findMany()
   * ```
   */
  get order_details(): Prisma.order_detailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Orders
   * const orders = await prisma.orders.findMany()
   * ```
   */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Products
   * const products = await prisma.products.findMany()
   * ```
   */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipping_status`: Exposes CRUD operations for the **shipping_status** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Shipping_statuses
   * const shipping_statuses = await prisma.shipping_status.findMany()
   * ```
   */
  get shipping_status(): Prisma.shipping_statusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription_plans`: Exposes CRUD operations for the **subscription_plans** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Subscription_plans
   * const subscription_plans = await prisma.subscription_plans.findMany()
   * ```
   */
  get subscription_plans(): Prisma.subscription_plansDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T> = T extends Array<any>
    ? False
    : T extends Date
      ? False
      : T extends Uint8Array
        ? False
        : T extends bigint
          ? False
          : T extends object
            ? True
            : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1, A2> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<"OR", K>, Extends<"AND", K>>, Extends<"NOT", K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    categories: "categories";
    game_products: "game_products";
    inventory: "inventory";
    order_details: "order_details";
    orders: "orders";
    products: "products";
    shipping_status: "shipping_status";
    subscription_plans: "subscription_plans";
    users: "users";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | "categories"
        | "game_products"
        | "inventory"
        | "order_details"
        | "orders"
        | "products"
        | "shipping_status"
        | "subscription_plans"
        | "users";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>;
        fields: Prisma.categoriesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>;
          };
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>;
          };
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[];
          };
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>;
          };
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[];
          };
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>;
          };
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>;
          };
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[];
          };
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>;
          };
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCategories>;
          };
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CategoriesGroupByOutputType>[];
          };
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>;
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number;
          };
        };
      };
      game_products: {
        payload: Prisma.$game_productsPayload<ExtArgs>;
        fields: Prisma.game_productsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.game_productsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_productsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.game_productsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_productsPayload>;
          };
          findFirst: {
            args: Prisma.game_productsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_productsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.game_productsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_productsPayload>;
          };
          findMany: {
            args: Prisma.game_productsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_productsPayload>[];
          };
          create: {
            args: Prisma.game_productsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_productsPayload>;
          };
          createMany: {
            args: Prisma.game_productsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.game_productsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_productsPayload>[];
          };
          delete: {
            args: Prisma.game_productsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_productsPayload>;
          };
          update: {
            args: Prisma.game_productsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_productsPayload>;
          };
          deleteMany: {
            args: Prisma.game_productsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.game_productsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.game_productsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_productsPayload>[];
          };
          upsert: {
            args: Prisma.game_productsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_productsPayload>;
          };
          aggregate: {
            args: Prisma.Game_productsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGame_products>;
          };
          groupBy: {
            args: Prisma.game_productsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Game_productsGroupByOutputType>[];
          };
          count: {
            args: Prisma.game_productsCountArgs<ExtArgs>;
            result: $Utils.Optional<Game_productsCountAggregateOutputType> | number;
          };
        };
      };
      inventory: {
        payload: Prisma.$inventoryPayload<ExtArgs>;
        fields: Prisma.inventoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.inventoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.inventoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          findFirst: {
            args: Prisma.inventoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.inventoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          findMany: {
            args: Prisma.inventoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[];
          };
          create: {
            args: Prisma.inventoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          createMany: {
            args: Prisma.inventoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.inventoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[];
          };
          delete: {
            args: Prisma.inventoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          update: {
            args: Prisma.inventoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          deleteMany: {
            args: Prisma.inventoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.inventoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.inventoryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[];
          };
          upsert: {
            args: Prisma.inventoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInventory>;
          };
          groupBy: {
            args: Prisma.inventoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InventoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.inventoryCountArgs<ExtArgs>;
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number;
          };
        };
      };
      order_details: {
        payload: Prisma.$order_detailsPayload<ExtArgs>;
        fields: Prisma.order_detailsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.order_detailsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.order_detailsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>;
          };
          findFirst: {
            args: Prisma.order_detailsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.order_detailsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>;
          };
          findMany: {
            args: Prisma.order_detailsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>[];
          };
          create: {
            args: Prisma.order_detailsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>;
          };
          createMany: {
            args: Prisma.order_detailsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.order_detailsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>[];
          };
          delete: {
            args: Prisma.order_detailsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>;
          };
          update: {
            args: Prisma.order_detailsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>;
          };
          deleteMany: {
            args: Prisma.order_detailsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.order_detailsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.order_detailsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>[];
          };
          upsert: {
            args: Prisma.order_detailsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>;
          };
          aggregate: {
            args: Prisma.Order_detailsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrder_details>;
          };
          groupBy: {
            args: Prisma.order_detailsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Order_detailsGroupByOutputType>[];
          };
          count: {
            args: Prisma.order_detailsCountArgs<ExtArgs>;
            result: $Utils.Optional<Order_detailsCountAggregateOutputType> | number;
          };
        };
      };
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>;
        fields: Prisma.ordersFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>;
          };
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>;
          };
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[];
          };
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>;
          };
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[];
          };
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>;
          };
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>;
          };
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[];
          };
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>;
          };
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrders>;
          };
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrdersGroupByOutputType>[];
          };
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>;
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number;
          };
        };
      };
      products: {
        payload: Prisma.$productsPayload<ExtArgs>;
        fields: Prisma.productsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload>;
          };
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload>;
          };
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[];
          };
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload>;
          };
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[];
          };
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload>;
          };
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload>;
          };
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[];
          };
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productsPayload>;
          };
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProducts>;
          };
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProductsGroupByOutputType>[];
          };
          count: {
            args: Prisma.productsCountArgs<ExtArgs>;
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number;
          };
        };
      };
      shipping_status: {
        payload: Prisma.$shipping_statusPayload<ExtArgs>;
        fields: Prisma.shipping_statusFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.shipping_statusFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$shipping_statusPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.shipping_statusFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$shipping_statusPayload>;
          };
          findFirst: {
            args: Prisma.shipping_statusFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$shipping_statusPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.shipping_statusFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$shipping_statusPayload>;
          };
          findMany: {
            args: Prisma.shipping_statusFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$shipping_statusPayload>[];
          };
          create: {
            args: Prisma.shipping_statusCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$shipping_statusPayload>;
          };
          createMany: {
            args: Prisma.shipping_statusCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.shipping_statusCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$shipping_statusPayload>[];
          };
          delete: {
            args: Prisma.shipping_statusDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$shipping_statusPayload>;
          };
          update: {
            args: Prisma.shipping_statusUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$shipping_statusPayload>;
          };
          deleteMany: {
            args: Prisma.shipping_statusDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.shipping_statusUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.shipping_statusUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$shipping_statusPayload>[];
          };
          upsert: {
            args: Prisma.shipping_statusUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$shipping_statusPayload>;
          };
          aggregate: {
            args: Prisma.Shipping_statusAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateShipping_status>;
          };
          groupBy: {
            args: Prisma.shipping_statusGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Shipping_statusGroupByOutputType>[];
          };
          count: {
            args: Prisma.shipping_statusCountArgs<ExtArgs>;
            result: $Utils.Optional<Shipping_statusCountAggregateOutputType> | number;
          };
        };
      };
      subscription_plans: {
        payload: Prisma.$subscription_plansPayload<ExtArgs>;
        fields: Prisma.subscription_plansFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.subscription_plansFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscription_plansPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.subscription_plansFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscription_plansPayload>;
          };
          findFirst: {
            args: Prisma.subscription_plansFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscription_plansPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.subscription_plansFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscription_plansPayload>;
          };
          findMany: {
            args: Prisma.subscription_plansFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscription_plansPayload>[];
          };
          create: {
            args: Prisma.subscription_plansCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscription_plansPayload>;
          };
          createMany: {
            args: Prisma.subscription_plansCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.subscription_plansCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscription_plansPayload>[];
          };
          delete: {
            args: Prisma.subscription_plansDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscription_plansPayload>;
          };
          update: {
            args: Prisma.subscription_plansUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscription_plansPayload>;
          };
          deleteMany: {
            args: Prisma.subscription_plansDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.subscription_plansUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.subscription_plansUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscription_plansPayload>[];
          };
          upsert: {
            args: Prisma.subscription_plansUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscription_plansPayload>;
          };
          aggregate: {
            args: Prisma.Subscription_plansAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSubscription_plans>;
          };
          groupBy: {
            args: Prisma.subscription_plansGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Subscription_plansGroupByOutputType>[];
          };
          count: {
            args: Prisma.subscription_plansCountArgs<ExtArgs>;
            result: $Utils.Optional<Subscription_plansCountAggregateOutputType> | number;
          };
        };
      };
      users: {
        payload: Prisma.$usersPayload<ExtArgs>;
        fields: Prisma.usersFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>;
          };
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>;
          };
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[];
          };
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>;
          };
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[];
          };
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>;
          };
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>;
          };
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[];
          };
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>;
          };
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUsers>;
          };
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UsersGroupByOutputType>[];
          };
          count: {
            args: Prisma.usersCountArgs<ExtArgs>;
            result: $Utils.Optional<UsersCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    categories?: categoriesOmit;
    game_products?: game_productsOmit;
    inventory?: inventoryOmit;
    order_details?: order_detailsOmit;
    orders?: ordersOmit;
    products?: productsOmit;
    shipping_status?: shipping_statusOmit;
    subscription_plans?: subscription_plansOmit;
    users?: usersOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T["emit"] extends "event"
      ? T["level"]
      : never
    : never;
  export type GetEvents<T> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    other_categories: number;
    products: number;
  };

  export type CategoriesCountOutputTypeSelect<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other_categories?: boolean | CategoriesCountOutputTypeCountOther_categoriesArgs;
    products?: boolean | CategoriesCountOutputTypeCountProductsArgs;
  };

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the CategoriesCountOutputType
       */
      select?: CategoriesCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountOther_categoriesArgs<
    _ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: categoriesWhereInput;
  };

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<
    _ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: productsWhereInput;
  };

  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_details: number;
  };

  export type OrdersCountOutputTypeSelect<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_details?: boolean | OrdersCountOutputTypeCountOrder_detailsArgs;
  };

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_detailsArgs<
    _ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: order_detailsWhereInput;
  };

  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    inventory: number;
    shipping_status: number;
  };

  export type ProductsCountOutputTypeSelect<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | ProductsCountOutputTypeCountInventoryArgs;
    shipping_status?: boolean | ProductsCountOutputTypeCountShipping_statusArgs;
  };

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountInventoryArgs<
    _ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: inventoryWhereInput;
  };

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountShipping_statusArgs<
    _ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: shipping_statusWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null;
    _avg: CategoriesAvgAggregateOutputType | null;
    _sum: CategoriesSumAggregateOutputType | null;
    _min: CategoriesMinAggregateOutputType | null;
    _max: CategoriesMaxAggregateOutputType | null;
  };

  export type CategoriesAvgAggregateOutputType = {
    category_id: number | null;
    parent_category_id: number | null;
  };

  export type CategoriesSumAggregateOutputType = {
    category_id: number | null;
    parent_category_id: number | null;
  };

  export type CategoriesMinAggregateOutputType = {
    category_id: number | null;
    name: string | null;
    description: string | null;
    parent_category_id: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CategoriesMaxAggregateOutputType = {
    category_id: number | null;
    name: string | null;
    description: string | null;
    parent_category_id: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CategoriesCountAggregateOutputType = {
    category_id: number;
    name: number;
    description: number;
    parent_category_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CategoriesAvgAggregateInputType = {
    category_id?: true;
    parent_category_id?: true;
  };

  export type CategoriesSumAggregateInputType = {
    category_id?: true;
    parent_category_id?: true;
  };

  export type CategoriesMinAggregateInputType = {
    category_id?: true;
    name?: true;
    description?: true;
    parent_category_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CategoriesMaxAggregateInputType = {
    category_id?: true;
    name?: true;
    description?: true;
    parent_category_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CategoriesCountAggregateInputType = {
    category_id?: true;
    name?: true;
    description?: true;
    parent_category_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CategoriesAggregateArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned categories
     **/
    _count?: true | CategoriesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CategoriesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CategoriesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CategoriesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CategoriesMaxAggregateInputType;
  };

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
    [P in keyof T & keyof AggregateCategories]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>;
  };

  export type categoriesGroupByArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput;
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[];
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum;
    having?: categoriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoriesCountAggregateInputType | true;
    _avg?: CategoriesAvgAggregateInputType;
    _sum?: CategoriesSumAggregateInputType;
    _min?: CategoriesMinAggregateInputType;
    _max?: CategoriesMaxAggregateInputType;
  };

  export type CategoriesGroupByOutputType = {
    category_id: number;
    name: string;
    description: string | null;
    parent_category_id: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: CategoriesCountAggregateOutputType | null;
    _avg: CategoriesAvgAggregateOutputType | null;
    _sum: CategoriesSumAggregateOutputType | null;
    _min: CategoriesMinAggregateOutputType | null;
    _max: CategoriesMaxAggregateOutputType | null;
  };

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof CategoriesGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
          : GetScalarType<T[P], CategoriesGroupByOutputType[P]>;
      }
    >
  >;

  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        category_id?: boolean;
        name?: boolean;
        description?: boolean;
        parent_category_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        categories?: boolean | categories$categoriesArgs<ExtArgs>;
        other_categories?: boolean | categories$other_categoriesArgs<ExtArgs>;
        products?: boolean | categories$productsArgs<ExtArgs>;
        _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs["result"]["categories"]
    >;

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        category_id?: boolean;
        name?: boolean;
        description?: boolean;
        parent_category_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        categories?: boolean | categories$categoriesArgs<ExtArgs>;
      },
      ExtArgs["result"]["categories"]
    >;

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        category_id?: boolean;
        name?: boolean;
        description?: boolean;
        parent_category_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        categories?: boolean | categories$categoriesArgs<ExtArgs>;
      },
      ExtArgs["result"]["categories"]
    >;

  export type categoriesSelectScalar = {
    category_id?: boolean;
    name?: boolean;
    description?: boolean;
    parent_category_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
    "category_id" | "name" | "description" | "parent_category_id" | "created_at" | "updated_at",
    ExtArgs["result"]["categories"]
  >;
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categories$categoriesArgs<ExtArgs>;
    other_categories?: boolean | categories$other_categoriesArgs<ExtArgs>;
    products?: boolean | categories$productsArgs<ExtArgs>;
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      categories?: boolean | categories$categoriesArgs<ExtArgs>;
    };
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      categories?: boolean | categories$categoriesArgs<ExtArgs>;
    };

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories";
    objects: {
      categories: Prisma.$categoriesPayload<ExtArgs> | null;
      other_categories: Prisma.$categoriesPayload<ExtArgs>[];
      products: Prisma.$productsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        category_id: number;
        name: string;
        description: string | null;
        parent_category_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
      },
      ExtArgs["result"]["categories"]
    >;
    composites: {};
  };

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<
    Prisma.$categoriesPayload,
    S
  >;

  type categoriesCountArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    categoriesFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: CategoriesCountAggregateInputType | true;
  };

  export interface categoriesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["categories"];
      meta: { name: "categories" };
    };
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(
      args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>
    ): Prisma__categoriesClient<
      $Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(
      args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__categoriesClient<
      $Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(
      args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>
    ): Prisma__categoriesClient<
      $Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__categoriesClient<
      $Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     *
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     *
     * // Only select the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.findMany({ select: { category_id: true } })
     *
     */
    findMany<T extends categoriesFindManyArgs>(
      args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     *
     */
    create<T extends categoriesCreateArgs>(
      args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>
    ): Prisma__categoriesClient<
      $Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends categoriesCreateManyArgs>(
      args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Categories and only return the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.createManyAndReturn({
     *   select: { category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(
      args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>
    >;

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     *
     */
    delete<T extends categoriesDeleteArgs>(
      args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>
    ): Prisma__categoriesClient<
      $Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends categoriesUpdateArgs>(
      args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>
    ): Prisma__categoriesClient<
      $Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends categoriesDeleteManyArgs>(
      args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends categoriesUpdateManyArgs>(
      args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Categories and only return the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.updateManyAndReturn({
     *   select: { category_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(
      args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>
    >;

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(
      args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>
    ): Prisma__categoriesClient<
      $Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
     **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CategoriesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CategoriesAggregateArgs>(
      args: Subset<T, CategoriesAggregateArgs>
    ): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>;

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs["orderBy"] }
        : { orderBy?: categoriesGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the categories model
     */
    readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    categories<T extends categories$categoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, categories$categoriesArgs<ExtArgs>>
    ): Prisma__categoriesClient<
      $Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    other_categories<T extends categories$other_categoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, categories$other_categoriesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null
    >;
    products<T extends categories$productsArgs<ExtArgs> = {}>(
      args?: Subset<T, categories$productsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly category_id: FieldRef<"categories", "Int">;
    readonly name: FieldRef<"categories", "String">;
    readonly description: FieldRef<"categories", "String">;
    readonly parent_category_id: FieldRef<"categories", "Int">;
    readonly created_at: FieldRef<"categories", "DateTime">;
    readonly updated_at: FieldRef<"categories", "DateTime">;
  }

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput;
  };

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput;
  };

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[];
  };

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[];
  };

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` categories.
     */
    skip?: number;
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[];
  };

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>;
  };

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>;
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput;
  };

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>;
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput;
    /**
     * Limit how many categories to update.
     */
    limit?: number;
  };

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>;
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput;
    /**
     * Limit how many categories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput;
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>;
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>;
  };

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput;
  };

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput;
    /**
     * Limit how many categories to delete.
     */
    limit?: number;
  };

  /**
   * categories.categories
   */
  export type categories$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    where?: categoriesWhereInput;
  };

  /**
   * categories.other_categories
   */
  export type categories$other_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    where?: categoriesWhereInput;
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[];
    cursor?: categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[];
  };

  /**
   * categories.products
   */
  export type categories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    where?: productsWhereInput;
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[];
    cursor?: productsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[];
  };

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
  };

  /**
   * Model game_products
   */

  export type AggregateGame_products = {
    _count: Game_productsCountAggregateOutputType | null;
    _avg: Game_productsAvgAggregateOutputType | null;
    _sum: Game_productsSumAggregateOutputType | null;
    _min: Game_productsMinAggregateOutputType | null;
    _max: Game_productsMaxAggregateOutputType | null;
  };

  export type Game_productsAvgAggregateOutputType = {
    product_id: number | null;
    category_id: number | null;
    price: Decimal | null;
    include_plan_id: number | null;
  };

  export type Game_productsSumAggregateOutputType = {
    product_id: number | null;
    category_id: number | null;
    price: Decimal | null;
    include_plan_id: number | null;
  };

  export type Game_productsMinAggregateOutputType = {
    product_id: number | null;
    category_id: number | null;
    name: string | null;
    description: string | null;
    price: Decimal | null;
    release_date: Date | null;
    developer: string | null;
    publisher: string | null;
    cross_platform_play: boolean | null;
    tech_description_raw: string | null;
    include_plan_id: number | null;
  };

  export type Game_productsMaxAggregateOutputType = {
    product_id: number | null;
    category_id: number | null;
    name: string | null;
    description: string | null;
    price: Decimal | null;
    release_date: Date | null;
    developer: string | null;
    publisher: string | null;
    cross_platform_play: boolean | null;
    tech_description_raw: string | null;
    include_plan_id: number | null;
  };

  export type Game_productsCountAggregateOutputType = {
    product_id: number;
    category_id: number;
    name: number;
    description: number;
    price: number;
    release_date: number;
    developer: number;
    publisher: number;
    platforms: number;
    features: number;
    genre: number;
    included_addons: number;
    cross_platform_play: number;
    related_games: number;
    additional_contents: number;
    tech_description: number;
    tech_description_raw: number;
    product_images: number;
    gallery_images: number;
    include_plan_id: number;
    _all: number;
  };

  export type Game_productsAvgAggregateInputType = {
    product_id?: true;
    category_id?: true;
    price?: true;
    include_plan_id?: true;
  };

  export type Game_productsSumAggregateInputType = {
    product_id?: true;
    category_id?: true;
    price?: true;
    include_plan_id?: true;
  };

  export type Game_productsMinAggregateInputType = {
    product_id?: true;
    category_id?: true;
    name?: true;
    description?: true;
    price?: true;
    release_date?: true;
    developer?: true;
    publisher?: true;
    cross_platform_play?: true;
    tech_description_raw?: true;
    include_plan_id?: true;
  };

  export type Game_productsMaxAggregateInputType = {
    product_id?: true;
    category_id?: true;
    name?: true;
    description?: true;
    price?: true;
    release_date?: true;
    developer?: true;
    publisher?: true;
    cross_platform_play?: true;
    tech_description_raw?: true;
    include_plan_id?: true;
  };

  export type Game_productsCountAggregateInputType = {
    product_id?: true;
    category_id?: true;
    name?: true;
    description?: true;
    price?: true;
    release_date?: true;
    developer?: true;
    publisher?: true;
    platforms?: true;
    features?: true;
    genre?: true;
    included_addons?: true;
    cross_platform_play?: true;
    related_games?: true;
    additional_contents?: true;
    tech_description?: true;
    tech_description_raw?: true;
    product_images?: true;
    gallery_images?: true;
    include_plan_id?: true;
    _all?: true;
  };

  export type Game_productsAggregateArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which game_products to aggregate.
     */
    where?: game_productsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of game_products to fetch.
     */
    orderBy?: game_productsOrderByWithRelationInput | game_productsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: game_productsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` game_products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` game_products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned game_products
     **/
    _count?: true | Game_productsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Game_productsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Game_productsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Game_productsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Game_productsMaxAggregateInputType;
  };

  export type GetGame_productsAggregateType<T extends Game_productsAggregateArgs> = {
    [P in keyof T & keyof AggregateGame_products]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame_products[P]>
      : GetScalarType<T[P], AggregateGame_products[P]>;
  };

  export type game_productsGroupByArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: game_productsWhereInput;
    orderBy?: game_productsOrderByWithAggregationInput | game_productsOrderByWithAggregationInput[];
    by: Game_productsScalarFieldEnum[] | Game_productsScalarFieldEnum;
    having?: game_productsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Game_productsCountAggregateInputType | true;
    _avg?: Game_productsAvgAggregateInputType;
    _sum?: Game_productsSumAggregateInputType;
    _min?: Game_productsMinAggregateInputType;
    _max?: Game_productsMaxAggregateInputType;
  };

  export type Game_productsGroupByOutputType = {
    product_id: number;
    category_id: number;
    name: string;
    description: string;
    price: Decimal;
    release_date: Date | null;
    developer: string | null;
    publisher: string | null;
    platforms: string[];
    features: string[];
    genre: string[];
    included_addons: string[];
    cross_platform_play: boolean;
    related_games: JsonValue | null;
    additional_contents: JsonValue | null;
    tech_description: JsonValue;
    tech_description_raw: string;
    product_images: JsonValue | null;
    gallery_images: string[];
    include_plan_id: number | null;
    _count: Game_productsCountAggregateOutputType | null;
    _avg: Game_productsAvgAggregateOutputType | null;
    _sum: Game_productsSumAggregateOutputType | null;
    _min: Game_productsMinAggregateOutputType | null;
    _max: Game_productsMaxAggregateOutputType | null;
  };

  type GetGame_productsGroupByPayload<T extends game_productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Game_productsGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof Game_productsGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Game_productsGroupByOutputType[P]>
          : GetScalarType<T[P], Game_productsGroupByOutputType[P]>;
      }
    >
  >;

  export type game_productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        product_id?: boolean;
        category_id?: boolean;
        name?: boolean;
        description?: boolean;
        price?: boolean;
        release_date?: boolean;
        developer?: boolean;
        publisher?: boolean;
        platforms?: boolean;
        features?: boolean;
        genre?: boolean;
        included_addons?: boolean;
        cross_platform_play?: boolean;
        related_games?: boolean;
        additional_contents?: boolean;
        tech_description?: boolean;
        tech_description_raw?: boolean;
        product_images?: boolean;
        gallery_images?: boolean;
        include_plan_id?: boolean;
      },
      ExtArgs["result"]["game_products"]
    >;

  export type game_productsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      product_id?: boolean;
      category_id?: boolean;
      name?: boolean;
      description?: boolean;
      price?: boolean;
      release_date?: boolean;
      developer?: boolean;
      publisher?: boolean;
      platforms?: boolean;
      features?: boolean;
      genre?: boolean;
      included_addons?: boolean;
      cross_platform_play?: boolean;
      related_games?: boolean;
      additional_contents?: boolean;
      tech_description?: boolean;
      tech_description_raw?: boolean;
      product_images?: boolean;
      gallery_images?: boolean;
      include_plan_id?: boolean;
    },
    ExtArgs["result"]["game_products"]
  >;

  export type game_productsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      product_id?: boolean;
      category_id?: boolean;
      name?: boolean;
      description?: boolean;
      price?: boolean;
      release_date?: boolean;
      developer?: boolean;
      publisher?: boolean;
      platforms?: boolean;
      features?: boolean;
      genre?: boolean;
      included_addons?: boolean;
      cross_platform_play?: boolean;
      related_games?: boolean;
      additional_contents?: boolean;
      tech_description?: boolean;
      tech_description_raw?: boolean;
      product_images?: boolean;
      gallery_images?: boolean;
      include_plan_id?: boolean;
    },
    ExtArgs["result"]["game_products"]
  >;

  export type game_productsSelectScalar = {
    product_id?: boolean;
    category_id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    release_date?: boolean;
    developer?: boolean;
    publisher?: boolean;
    platforms?: boolean;
    features?: boolean;
    genre?: boolean;
    included_addons?: boolean;
    cross_platform_play?: boolean;
    related_games?: boolean;
    additional_contents?: boolean;
    tech_description?: boolean;
    tech_description_raw?: boolean;
    product_images?: boolean;
    gallery_images?: boolean;
    include_plan_id?: boolean;
  };

  export type game_productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | "product_id"
      | "category_id"
      | "name"
      | "description"
      | "price"
      | "release_date"
      | "developer"
      | "publisher"
      | "platforms"
      | "features"
      | "genre"
      | "included_addons"
      | "cross_platform_play"
      | "related_games"
      | "additional_contents"
      | "tech_description"
      | "tech_description_raw"
      | "product_images"
      | "gallery_images"
      | "include_plan_id",
      ExtArgs["result"]["game_products"]
    >;

  export type $game_productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "game_products";
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        product_id: number;
        category_id: number;
        name: string;
        description: string;
        price: Prisma.Decimal;
        release_date: Date | null;
        developer: string | null;
        publisher: string | null;
        platforms: string[];
        features: string[];
        genre: string[];
        included_addons: string[];
        cross_platform_play: boolean;
        related_games: Prisma.JsonValue | null;
        additional_contents: Prisma.JsonValue | null;
        tech_description: Prisma.JsonValue;
        tech_description_raw: string;
        product_images: Prisma.JsonValue | null;
        gallery_images: string[];
        include_plan_id: number | null;
      },
      ExtArgs["result"]["game_products"]
    >;
    composites: {};
  };

  type game_productsGetPayload<S extends boolean | null | undefined | game_productsDefaultArgs> = $Result.GetResult<
    Prisma.$game_productsPayload,
    S
  >;

  type game_productsCountArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    game_productsFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: Game_productsCountAggregateInputType | true;
  };

  export interface game_productsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["game_products"];
      meta: { name: "game_products" };
    };
    /**
     * Find zero or one Game_products that matches the filter.
     * @param {game_productsFindUniqueArgs} args - Arguments to find a Game_products
     * @example
     * // Get one Game_products
     * const game_products = await prisma.game_products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends game_productsFindUniqueArgs>(
      args: SelectSubset<T, game_productsFindUniqueArgs<ExtArgs>>
    ): Prisma__game_productsClient<
      $Result.GetResult<Prisma.$game_productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Game_products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {game_productsFindUniqueOrThrowArgs} args - Arguments to find a Game_products
     * @example
     * // Get one Game_products
     * const game_products = await prisma.game_products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends game_productsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, game_productsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__game_productsClient<
      $Result.GetResult<Prisma.$game_productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Game_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_productsFindFirstArgs} args - Arguments to find a Game_products
     * @example
     * // Get one Game_products
     * const game_products = await prisma.game_products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends game_productsFindFirstArgs>(
      args?: SelectSubset<T, game_productsFindFirstArgs<ExtArgs>>
    ): Prisma__game_productsClient<
      $Result.GetResult<Prisma.$game_productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Game_products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_productsFindFirstOrThrowArgs} args - Arguments to find a Game_products
     * @example
     * // Get one Game_products
     * const game_products = await prisma.game_products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends game_productsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, game_productsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__game_productsClient<
      $Result.GetResult<Prisma.$game_productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Game_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Game_products
     * const game_products = await prisma.game_products.findMany()
     *
     * // Get first 10 Game_products
     * const game_products = await prisma.game_products.findMany({ take: 10 })
     *
     * // Only select the `product_id`
     * const game_productsWithProduct_idOnly = await prisma.game_products.findMany({ select: { product_id: true } })
     *
     */
    findMany<T extends game_productsFindManyArgs>(
      args?: SelectSubset<T, game_productsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;

    /**
     * Create a Game_products.
     * @param {game_productsCreateArgs} args - Arguments to create a Game_products.
     * @example
     * // Create one Game_products
     * const Game_products = await prisma.game_products.create({
     *   data: {
     *     // ... data to create a Game_products
     *   }
     * })
     *
     */
    create<T extends game_productsCreateArgs>(
      args: SelectSubset<T, game_productsCreateArgs<ExtArgs>>
    ): Prisma__game_productsClient<
      $Result.GetResult<Prisma.$game_productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Game_products.
     * @param {game_productsCreateManyArgs} args - Arguments to create many Game_products.
     * @example
     * // Create many Game_products
     * const game_products = await prisma.game_products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends game_productsCreateManyArgs>(
      args?: SelectSubset<T, game_productsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Game_products and returns the data saved in the database.
     * @param {game_productsCreateManyAndReturnArgs} args - Arguments to create many Game_products.
     * @example
     * // Create many Game_products
     * const game_products = await prisma.game_products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Game_products and only return the `product_id`
     * const game_productsWithProduct_idOnly = await prisma.game_products.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends game_productsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, game_productsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$game_productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>
    >;

    /**
     * Delete a Game_products.
     * @param {game_productsDeleteArgs} args - Arguments to delete one Game_products.
     * @example
     * // Delete one Game_products
     * const Game_products = await prisma.game_products.delete({
     *   where: {
     *     // ... filter to delete one Game_products
     *   }
     * })
     *
     */
    delete<T extends game_productsDeleteArgs>(
      args: SelectSubset<T, game_productsDeleteArgs<ExtArgs>>
    ): Prisma__game_productsClient<
      $Result.GetResult<Prisma.$game_productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Game_products.
     * @param {game_productsUpdateArgs} args - Arguments to update one Game_products.
     * @example
     * // Update one Game_products
     * const game_products = await prisma.game_products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends game_productsUpdateArgs>(
      args: SelectSubset<T, game_productsUpdateArgs<ExtArgs>>
    ): Prisma__game_productsClient<
      $Result.GetResult<Prisma.$game_productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Game_products.
     * @param {game_productsDeleteManyArgs} args - Arguments to filter Game_products to delete.
     * @example
     * // Delete a few Game_products
     * const { count } = await prisma.game_products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends game_productsDeleteManyArgs>(
      args?: SelectSubset<T, game_productsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Game_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Game_products
     * const game_products = await prisma.game_products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends game_productsUpdateManyArgs>(
      args: SelectSubset<T, game_productsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Game_products and returns the data updated in the database.
     * @param {game_productsUpdateManyAndReturnArgs} args - Arguments to update many Game_products.
     * @example
     * // Update many Game_products
     * const game_products = await prisma.game_products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Game_products and only return the `product_id`
     * const game_productsWithProduct_idOnly = await prisma.game_products.updateManyAndReturn({
     *   select: { product_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends game_productsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, game_productsUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$game_productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>
    >;

    /**
     * Create or update one Game_products.
     * @param {game_productsUpsertArgs} args - Arguments to update or create a Game_products.
     * @example
     * // Update or create a Game_products
     * const game_products = await prisma.game_products.upsert({
     *   create: {
     *     // ... data to create a Game_products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game_products we want to update
     *   }
     * })
     */
    upsert<T extends game_productsUpsertArgs>(
      args: SelectSubset<T, game_productsUpsertArgs<ExtArgs>>
    ): Prisma__game_productsClient<
      $Result.GetResult<Prisma.$game_productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Game_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_productsCountArgs} args - Arguments to filter Game_products to count.
     * @example
     * // Count the number of Game_products
     * const count = await prisma.game_products.count({
     *   where: {
     *     // ... the filter for the Game_products we want to count
     *   }
     * })
     **/
    count<T extends game_productsCountArgs>(
      args?: Subset<T, game_productsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], Game_productsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Game_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_productsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Game_productsAggregateArgs>(
      args: Subset<T, Game_productsAggregateArgs>
    ): Prisma.PrismaPromise<GetGame_productsAggregateType<T>>;

    /**
     * Group by Game_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends game_productsGroupByArgs,
      HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: game_productsGroupByArgs["orderBy"] }
        : { orderBy?: game_productsGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, game_productsGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetGame_productsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the game_products model
     */
    readonly fields: game_productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for game_products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__game_productsClient<
    T,
    _Null = never,
    _ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    _GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the game_products model
   */
  interface game_productsFieldRefs {
    readonly product_id: FieldRef<"game_products", "Int">;
    readonly category_id: FieldRef<"game_products", "Int">;
    readonly name: FieldRef<"game_products", "String">;
    readonly description: FieldRef<"game_products", "String">;
    readonly price: FieldRef<"game_products", "Decimal">;
    readonly release_date: FieldRef<"game_products", "DateTime">;
    readonly developer: FieldRef<"game_products", "String">;
    readonly publisher: FieldRef<"game_products", "String">;
    readonly platforms: FieldRef<"game_products", "String[]">;
    readonly features: FieldRef<"game_products", "String[]">;
    readonly genre: FieldRef<"game_products", "String[]">;
    readonly included_addons: FieldRef<"game_products", "String[]">;
    readonly cross_platform_play: FieldRef<"game_products", "Boolean">;
    readonly related_games: FieldRef<"game_products", "Json">;
    readonly additional_contents: FieldRef<"game_products", "Json">;
    readonly tech_description: FieldRef<"game_products", "Json">;
    readonly tech_description_raw: FieldRef<"game_products", "String">;
    readonly product_images: FieldRef<"game_products", "Json">;
    readonly gallery_images: FieldRef<"game_products", "String[]">;
    readonly include_plan_id: FieldRef<"game_products", "Int">;
  }

  // Custom InputTypes
  /**
   * game_products findUnique
   */
  export type game_productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_products
     */
    select?: game_productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the game_products
     */
    omit?: game_productsOmit<ExtArgs> | null;
    /**
     * Filter, which game_products to fetch.
     */
    where: game_productsWhereUniqueInput;
  };

  /**
   * game_products findUniqueOrThrow
   */
  export type game_productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_products
     */
    select?: game_productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the game_products
     */
    omit?: game_productsOmit<ExtArgs> | null;
    /**
     * Filter, which game_products to fetch.
     */
    where: game_productsWhereUniqueInput;
  };

  /**
   * game_products findFirst
   */
  export type game_productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_products
     */
    select?: game_productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the game_products
     */
    omit?: game_productsOmit<ExtArgs> | null;
    /**
     * Filter, which game_products to fetch.
     */
    where?: game_productsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of game_products to fetch.
     */
    orderBy?: game_productsOrderByWithRelationInput | game_productsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for game_products.
     */
    cursor?: game_productsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` game_products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` game_products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of game_products.
     */
    distinct?: Game_productsScalarFieldEnum | Game_productsScalarFieldEnum[];
  };

  /**
   * game_products findFirstOrThrow
   */
  export type game_productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_products
     */
    select?: game_productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the game_products
     */
    omit?: game_productsOmit<ExtArgs> | null;
    /**
     * Filter, which game_products to fetch.
     */
    where?: game_productsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of game_products to fetch.
     */
    orderBy?: game_productsOrderByWithRelationInput | game_productsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for game_products.
     */
    cursor?: game_productsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` game_products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` game_products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of game_products.
     */
    distinct?: Game_productsScalarFieldEnum | Game_productsScalarFieldEnum[];
  };

  /**
   * game_products findMany
   */
  export type game_productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_products
     */
    select?: game_productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the game_products
     */
    omit?: game_productsOmit<ExtArgs> | null;
    /**
     * Filter, which game_products to fetch.
     */
    where?: game_productsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of game_products to fetch.
     */
    orderBy?: game_productsOrderByWithRelationInput | game_productsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing game_products.
     */
    cursor?: game_productsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` game_products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` game_products.
     */
    skip?: number;
    distinct?: Game_productsScalarFieldEnum | Game_productsScalarFieldEnum[];
  };

  /**
   * game_products create
   */
  export type game_productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_products
     */
    select?: game_productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the game_products
     */
    omit?: game_productsOmit<ExtArgs> | null;
    /**
     * The data needed to create a game_products.
     */
    data: XOR<game_productsCreateInput, game_productsUncheckedCreateInput>;
  };

  /**
   * game_products createMany
   */
  export type game_productsCreateManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many game_products.
     */
    data: game_productsCreateManyInput | game_productsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * game_products createManyAndReturn
   */
  export type game_productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the game_products
       */
      select?: game_productsSelectCreateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the game_products
       */
      omit?: game_productsOmit<ExtArgs> | null;
      /**
       * The data used to create many game_products.
       */
      data: game_productsCreateManyInput | game_productsCreateManyInput[];
      skipDuplicates?: boolean;
    };

  /**
   * game_products update
   */
  export type game_productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_products
     */
    select?: game_productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the game_products
     */
    omit?: game_productsOmit<ExtArgs> | null;
    /**
     * The data needed to update a game_products.
     */
    data: XOR<game_productsUpdateInput, game_productsUncheckedUpdateInput>;
    /**
     * Choose, which game_products to update.
     */
    where: game_productsWhereUniqueInput;
  };

  /**
   * game_products updateMany
   */
  export type game_productsUpdateManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update game_products.
     */
    data: XOR<game_productsUpdateManyMutationInput, game_productsUncheckedUpdateManyInput>;
    /**
     * Filter which game_products to update
     */
    where?: game_productsWhereInput;
    /**
     * Limit how many game_products to update.
     */
    limit?: number;
  };

  /**
   * game_products updateManyAndReturn
   */
  export type game_productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the game_products
       */
      select?: game_productsSelectUpdateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the game_products
       */
      omit?: game_productsOmit<ExtArgs> | null;
      /**
       * The data used to update game_products.
       */
      data: XOR<game_productsUpdateManyMutationInput, game_productsUncheckedUpdateManyInput>;
      /**
       * Filter which game_products to update
       */
      where?: game_productsWhereInput;
      /**
       * Limit how many game_products to update.
       */
      limit?: number;
    };

  /**
   * game_products upsert
   */
  export type game_productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_products
     */
    select?: game_productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the game_products
     */
    omit?: game_productsOmit<ExtArgs> | null;
    /**
     * The filter to search for the game_products to update in case it exists.
     */
    where: game_productsWhereUniqueInput;
    /**
     * In case the game_products found by the `where` argument doesn't exist, create a new game_products with this data.
     */
    create: XOR<game_productsCreateInput, game_productsUncheckedCreateInput>;
    /**
     * In case the game_products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<game_productsUpdateInput, game_productsUncheckedUpdateInput>;
  };

  /**
   * game_products delete
   */
  export type game_productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_products
     */
    select?: game_productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the game_products
     */
    omit?: game_productsOmit<ExtArgs> | null;
    /**
     * Filter which game_products to delete.
     */
    where: game_productsWhereUniqueInput;
  };

  /**
   * game_products deleteMany
   */
  export type game_productsDeleteManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which game_products to delete
     */
    where?: game_productsWhereInput;
    /**
     * Limit how many game_products to delete.
     */
    limit?: number;
  };

  /**
   * game_products without action
   */
  export type game_productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_products
     */
    select?: game_productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the game_products
     */
    omit?: game_productsOmit<ExtArgs> | null;
  };

  /**
   * Model inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
  };

  export type InventoryAvgAggregateOutputType = {
    inventory_id: number | null;
    product_id: number | null;
    stock_quantity: number | null;
  };

  export type InventorySumAggregateOutputType = {
    inventory_id: number | null;
    product_id: number | null;
    stock_quantity: number | null;
  };

  export type InventoryMinAggregateOutputType = {
    inventory_id: number | null;
    product_id: number | null;
    stock_quantity: number | null;
    stock_status: string | null;
    warehouse_location: string | null;
    last_updated: Date | null;
  };

  export type InventoryMaxAggregateOutputType = {
    inventory_id: number | null;
    product_id: number | null;
    stock_quantity: number | null;
    stock_status: string | null;
    warehouse_location: string | null;
    last_updated: Date | null;
  };

  export type InventoryCountAggregateOutputType = {
    inventory_id: number;
    product_id: number;
    stock_quantity: number;
    stock_status: number;
    warehouse_location: number;
    last_updated: number;
    _all: number;
  };

  export type InventoryAvgAggregateInputType = {
    inventory_id?: true;
    product_id?: true;
    stock_quantity?: true;
  };

  export type InventorySumAggregateInputType = {
    inventory_id?: true;
    product_id?: true;
    stock_quantity?: true;
  };

  export type InventoryMinAggregateInputType = {
    inventory_id?: true;
    product_id?: true;
    stock_quantity?: true;
    stock_status?: true;
    warehouse_location?: true;
    last_updated?: true;
  };

  export type InventoryMaxAggregateInputType = {
    inventory_id?: true;
    product_id?: true;
    stock_quantity?: true;
    stock_status?: true;
    warehouse_location?: true;
    last_updated?: true;
  };

  export type InventoryCountAggregateInputType = {
    inventory_id?: true;
    product_id?: true;
    stock_quantity?: true;
    stock_status?: true;
    warehouse_location?: true;
    last_updated?: true;
    _all?: true;
  };

  export type InventoryAggregateArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory to aggregate.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned inventories
     **/
    _count?: true | InventoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: InventoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: InventorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InventoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InventoryMaxAggregateInputType;
  };

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
    [P in keyof T & keyof AggregateInventory]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>;
  };

  export type inventoryGroupByArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput;
    orderBy?: inventoryOrderByWithAggregationInput | inventoryOrderByWithAggregationInput[];
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum;
    having?: inventoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InventoryCountAggregateInputType | true;
    _avg?: InventoryAvgAggregateInputType;
    _sum?: InventorySumAggregateInputType;
    _min?: InventoryMinAggregateInputType;
    _max?: InventoryMaxAggregateInputType;
  };

  export type InventoryGroupByOutputType = {
    inventory_id: number;
    product_id: number | null;
    stock_quantity: number;
    stock_status: string | null;
    warehouse_location: string | null;
    last_updated: Date | null;
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
  };

  type GetInventoryGroupByPayload<T extends inventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof InventoryGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
          : GetScalarType<T[P], InventoryGroupByOutputType[P]>;
      }
    >
  >;

  export type inventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        inventory_id?: boolean;
        product_id?: boolean;
        stock_quantity?: boolean;
        stock_status?: boolean;
        warehouse_location?: boolean;
        last_updated?: boolean;
        products?: boolean | inventory$productsArgs<ExtArgs>;
      },
      ExtArgs["result"]["inventory"]
    >;

  export type inventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        inventory_id?: boolean;
        product_id?: boolean;
        stock_quantity?: boolean;
        stock_status?: boolean;
        warehouse_location?: boolean;
        last_updated?: boolean;
        products?: boolean | inventory$productsArgs<ExtArgs>;
      },
      ExtArgs["result"]["inventory"]
    >;

  export type inventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        inventory_id?: boolean;
        product_id?: boolean;
        stock_quantity?: boolean;
        stock_status?: boolean;
        warehouse_location?: boolean;
        last_updated?: boolean;
        products?: boolean | inventory$productsArgs<ExtArgs>;
      },
      ExtArgs["result"]["inventory"]
    >;

  export type inventorySelectScalar = {
    inventory_id?: boolean;
    product_id?: boolean;
    stock_quantity?: boolean;
    stock_status?: boolean;
    warehouse_location?: boolean;
    last_updated?: boolean;
  };

  export type inventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
    "inventory_id" | "product_id" | "stock_quantity" | "stock_status" | "warehouse_location" | "last_updated",
    ExtArgs["result"]["inventory"]
  >;
  export type inventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | inventory$productsArgs<ExtArgs>;
  };
  export type inventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      products?: boolean | inventory$productsArgs<ExtArgs>;
    };
  export type inventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      products?: boolean | inventory$productsArgs<ExtArgs>;
    };

  export type $inventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventory";
    objects: {
      products: Prisma.$productsPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        inventory_id: number;
        product_id: number | null;
        stock_quantity: number;
        stock_status: string | null;
        warehouse_location: string | null;
        last_updated: Date | null;
      },
      ExtArgs["result"]["inventory"]
    >;
    composites: {};
  };

  type inventoryGetPayload<S extends boolean | null | undefined | inventoryDefaultArgs> = $Result.GetResult<
    Prisma.$inventoryPayload,
    S
  >;

  type inventoryCountArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    inventoryFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: InventoryCountAggregateInputType | true;
  };

  export interface inventoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["inventory"];
      meta: { name: "inventory" };
    };
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {inventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventoryFindUniqueArgs>(
      args: SelectSubset<T, inventoryFindUniqueArgs<ExtArgs>>
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, inventoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventoryFindFirstArgs>(
      args?: SelectSubset<T, inventoryFindFirstArgs<ExtArgs>>
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, inventoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     *
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     *
     * // Only select the `inventory_id`
     * const inventoryWithInventory_idOnly = await prisma.inventory.findMany({ select: { inventory_id: true } })
     *
     */
    findMany<T extends inventoryFindManyArgs>(
      args?: SelectSubset<T, inventoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;

    /**
     * Create a Inventory.
     * @param {inventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     *
     */
    create<T extends inventoryCreateArgs>(
      args: SelectSubset<T, inventoryCreateArgs<ExtArgs>>
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Inventories.
     * @param {inventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends inventoryCreateManyArgs>(
      args?: SelectSubset<T, inventoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {inventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Inventories and only return the `inventory_id`
     * const inventoryWithInventory_idOnly = await prisma.inventory.createManyAndReturn({
     *   select: { inventory_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends inventoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, inventoryCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>
    >;

    /**
     * Delete a Inventory.
     * @param {inventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     *
     */
    delete<T extends inventoryDeleteArgs>(
      args: SelectSubset<T, inventoryDeleteArgs<ExtArgs>>
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Inventory.
     * @param {inventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends inventoryUpdateArgs>(
      args: SelectSubset<T, inventoryUpdateArgs<ExtArgs>>
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Inventories.
     * @param {inventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends inventoryDeleteManyArgs>(
      args?: SelectSubset<T, inventoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends inventoryUpdateManyArgs>(
      args: SelectSubset<T, inventoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {inventoryUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Inventories and only return the `inventory_id`
     * const inventoryWithInventory_idOnly = await prisma.inventory.updateManyAndReturn({
     *   select: { inventory_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends inventoryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, inventoryUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>
    >;

    /**
     * Create or update one Inventory.
     * @param {inventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends inventoryUpsertArgs>(
      args: SelectSubset<T, inventoryUpsertArgs<ExtArgs>>
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
     **/
    count<T extends inventoryCountArgs>(
      args?: Subset<T, inventoryCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], InventoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends InventoryAggregateArgs>(
      args: Subset<T, InventoryAggregateArgs>
    ): Prisma.PrismaPromise<GetInventoryAggregateType<T>>;

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends inventoryGroupByArgs,
      HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventoryGroupByArgs["orderBy"] }
        : { orderBy?: inventoryGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, inventoryGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the inventory model
     */
    readonly fields: inventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventoryClient<
    T,
    _Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    products<T extends inventory$productsArgs<ExtArgs> = {}>(
      args?: Subset<T, inventory$productsArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the inventory model
   */
  interface inventoryFieldRefs {
    readonly inventory_id: FieldRef<"inventory", "Int">;
    readonly product_id: FieldRef<"inventory", "Int">;
    readonly stock_quantity: FieldRef<"inventory", "Int">;
    readonly stock_status: FieldRef<"inventory", "String">;
    readonly warehouse_location: FieldRef<"inventory", "String">;
    readonly last_updated: FieldRef<"inventory", "DateTime">;
  }

  // Custom InputTypes
  /**
   * inventory findUnique
   */
  export type inventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory findUniqueOrThrow
   */
  export type inventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory findFirst
   */
  export type inventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * inventory findFirstOrThrow
   */
  export type inventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * inventory findMany
   */
  export type inventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing inventories.
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * inventory create
   */
  export type inventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a inventory.
     */
    data: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>;
  };

  /**
   * inventory createMany
   */
  export type inventoryCreateManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * inventory createManyAndReturn
   */
  export type inventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null;
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * inventory update
   */
  export type inventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a inventory.
     */
    data: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>;
    /**
     * Choose, which inventory to update.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory updateMany
   */
  export type inventoryUpdateManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>;
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput;
    /**
     * Limit how many inventories to update.
     */
    limit?: number;
  };

  /**
   * inventory updateManyAndReturn
   */
  export type inventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null;
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>;
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput;
    /**
     * Limit how many inventories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * inventory upsert
   */
  export type inventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the inventory to update in case it exists.
     */
    where: inventoryWhereUniqueInput;
    /**
     * In case the inventory found by the `where` argument doesn't exist, create a new inventory with this data.
     */
    create: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>;
    /**
     * In case the inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>;
  };

  /**
   * inventory delete
   */
  export type inventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter which inventory to delete.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory deleteMany
   */
  export type inventoryDeleteManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventories to delete
     */
    where?: inventoryWhereInput;
    /**
     * Limit how many inventories to delete.
     */
    limit?: number;
  };

  /**
   * inventory.products
   */
  export type inventory$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    where?: productsWhereInput;
  };

  /**
   * inventory without action
   */
  export type inventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null;
  };

  /**
   * Model order_details
   */

  export type AggregateOrder_details = {
    _count: Order_detailsCountAggregateOutputType | null;
    _avg: Order_detailsAvgAggregateOutputType | null;
    _sum: Order_detailsSumAggregateOutputType | null;
    _min: Order_detailsMinAggregateOutputType | null;
    _max: Order_detailsMaxAggregateOutputType | null;
  };

  export type Order_detailsAvgAggregateOutputType = {
    order_detail_id: number | null;
    order_id: number | null;
    quantity: number | null;
    price_per_unit: Decimal | null;
    total_amount: Decimal | null;
  };

  export type Order_detailsSumAggregateOutputType = {
    order_detail_id: number | null;
    order_id: number | null;
    quantity: number | null;
    price_per_unit: Decimal | null;
    total_amount: Decimal | null;
  };

  export type Order_detailsMinAggregateOutputType = {
    order_detail_id: number | null;
    order_id: number | null;
    product_id: string | null;
    quantity: number | null;
    price_per_unit: Decimal | null;
    total_amount: Decimal | null;
  };

  export type Order_detailsMaxAggregateOutputType = {
    order_detail_id: number | null;
    order_id: number | null;
    product_id: string | null;
    quantity: number | null;
    price_per_unit: Decimal | null;
    total_amount: Decimal | null;
  };

  export type Order_detailsCountAggregateOutputType = {
    order_detail_id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    price_per_unit: number;
    total_amount: number;
    _all: number;
  };

  export type Order_detailsAvgAggregateInputType = {
    order_detail_id?: true;
    order_id?: true;
    quantity?: true;
    price_per_unit?: true;
    total_amount?: true;
  };

  export type Order_detailsSumAggregateInputType = {
    order_detail_id?: true;
    order_id?: true;
    quantity?: true;
    price_per_unit?: true;
    total_amount?: true;
  };

  export type Order_detailsMinAggregateInputType = {
    order_detail_id?: true;
    order_id?: true;
    product_id?: true;
    quantity?: true;
    price_per_unit?: true;
    total_amount?: true;
  };

  export type Order_detailsMaxAggregateInputType = {
    order_detail_id?: true;
    order_id?: true;
    product_id?: true;
    quantity?: true;
    price_per_unit?: true;
    total_amount?: true;
  };

  export type Order_detailsCountAggregateInputType = {
    order_detail_id?: true;
    order_id?: true;
    product_id?: true;
    quantity?: true;
    price_per_unit?: true;
    total_amount?: true;
    _all?: true;
  };

  export type Order_detailsAggregateArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_details to aggregate.
     */
    where?: order_detailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: order_detailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` order_details.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned order_details
     **/
    _count?: true | Order_detailsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Order_detailsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Order_detailsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Order_detailsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Order_detailsMaxAggregateInputType;
  };

  export type GetOrder_detailsAggregateType<T extends Order_detailsAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder_details]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_details[P]>
      : GetScalarType<T[P], AggregateOrder_details[P]>;
  };

  export type order_detailsGroupByArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_detailsWhereInput;
    orderBy?: order_detailsOrderByWithAggregationInput | order_detailsOrderByWithAggregationInput[];
    by: Order_detailsScalarFieldEnum[] | Order_detailsScalarFieldEnum;
    having?: order_detailsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Order_detailsCountAggregateInputType | true;
    _avg?: Order_detailsAvgAggregateInputType;
    _sum?: Order_detailsSumAggregateInputType;
    _min?: Order_detailsMinAggregateInputType;
    _max?: Order_detailsMaxAggregateInputType;
  };

  export type Order_detailsGroupByOutputType = {
    order_detail_id: number;
    order_id: number | null;
    product_id: string;
    quantity: number;
    price_per_unit: Decimal;
    total_amount: Decimal;
    _count: Order_detailsCountAggregateOutputType | null;
    _avg: Order_detailsAvgAggregateOutputType | null;
    _sum: Order_detailsSumAggregateOutputType | null;
    _min: Order_detailsMinAggregateOutputType | null;
    _max: Order_detailsMaxAggregateOutputType | null;
  };

  type GetOrder_detailsGroupByPayload<T extends order_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_detailsGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof Order_detailsGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Order_detailsGroupByOutputType[P]>
          : GetScalarType<T[P], Order_detailsGroupByOutputType[P]>;
      }
    >
  >;

  export type order_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        order_detail_id?: boolean;
        order_id?: boolean;
        product_id?: boolean;
        quantity?: boolean;
        price_per_unit?: boolean;
        total_amount?: boolean;
        orders?: boolean | order_details$ordersArgs<ExtArgs>;
      },
      ExtArgs["result"]["order_details"]
    >;

  export type order_detailsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      order_detail_id?: boolean;
      order_id?: boolean;
      product_id?: boolean;
      quantity?: boolean;
      price_per_unit?: boolean;
      total_amount?: boolean;
      orders?: boolean | order_details$ordersArgs<ExtArgs>;
    },
    ExtArgs["result"]["order_details"]
  >;

  export type order_detailsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      order_detail_id?: boolean;
      order_id?: boolean;
      product_id?: boolean;
      quantity?: boolean;
      price_per_unit?: boolean;
      total_amount?: boolean;
      orders?: boolean | order_details$ordersArgs<ExtArgs>;
    },
    ExtArgs["result"]["order_details"]
  >;

  export type order_detailsSelectScalar = {
    order_detail_id?: boolean;
    order_id?: boolean;
    product_id?: boolean;
    quantity?: boolean;
    price_per_unit?: boolean;
    total_amount?: boolean;
  };

  export type order_detailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      "order_detail_id" | "order_id" | "product_id" | "quantity" | "price_per_unit" | "total_amount",
      ExtArgs["result"]["order_details"]
    >;
  export type order_detailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | order_details$ordersArgs<ExtArgs>;
  };
  export type order_detailsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    orders?: boolean | order_details$ordersArgs<ExtArgs>;
  };
  export type order_detailsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    orders?: boolean | order_details$ordersArgs<ExtArgs>;
  };

  export type $order_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_details";
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        order_detail_id: number;
        order_id: number | null;
        product_id: string;
        quantity: number;
        price_per_unit: Prisma.Decimal;
        total_amount: Prisma.Decimal;
      },
      ExtArgs["result"]["order_details"]
    >;
    composites: {};
  };

  type order_detailsGetPayload<S extends boolean | null | undefined | order_detailsDefaultArgs> = $Result.GetResult<
    Prisma.$order_detailsPayload,
    S
  >;

  type order_detailsCountArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    order_detailsFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: Order_detailsCountAggregateInputType | true;
  };

  export interface order_detailsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["order_details"];
      meta: { name: "order_details" };
    };
    /**
     * Find zero or one Order_details that matches the filter.
     * @param {order_detailsFindUniqueArgs} args - Arguments to find a Order_details
     * @example
     * // Get one Order_details
     * const order_details = await prisma.order_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_detailsFindUniqueArgs>(
      args: SelectSubset<T, order_detailsFindUniqueArgs<ExtArgs>>
    ): Prisma__order_detailsClient<
      $Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Order_details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_detailsFindUniqueOrThrowArgs} args - Arguments to find a Order_details
     * @example
     * // Get one Order_details
     * const order_details = await prisma.order_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_detailsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, order_detailsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__order_detailsClient<
      $Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Order_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsFindFirstArgs} args - Arguments to find a Order_details
     * @example
     * // Get one Order_details
     * const order_details = await prisma.order_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_detailsFindFirstArgs>(
      args?: SelectSubset<T, order_detailsFindFirstArgs<ExtArgs>>
    ): Prisma__order_detailsClient<
      $Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Order_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsFindFirstOrThrowArgs} args - Arguments to find a Order_details
     * @example
     * // Get one Order_details
     * const order_details = await prisma.order_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_detailsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, order_detailsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__order_detailsClient<
      $Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Order_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_details
     * const order_details = await prisma.order_details.findMany()
     *
     * // Get first 10 Order_details
     * const order_details = await prisma.order_details.findMany({ take: 10 })
     *
     * // Only select the `order_detail_id`
     * const order_detailsWithOrder_detail_idOnly = await prisma.order_details.findMany({ select: { order_detail_id: true } })
     *
     */
    findMany<T extends order_detailsFindManyArgs>(
      args?: SelectSubset<T, order_detailsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;

    /**
     * Create a Order_details.
     * @param {order_detailsCreateArgs} args - Arguments to create a Order_details.
     * @example
     * // Create one Order_details
     * const Order_details = await prisma.order_details.create({
     *   data: {
     *     // ... data to create a Order_details
     *   }
     * })
     *
     */
    create<T extends order_detailsCreateArgs>(
      args: SelectSubset<T, order_detailsCreateArgs<ExtArgs>>
    ): Prisma__order_detailsClient<
      $Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Order_details.
     * @param {order_detailsCreateManyArgs} args - Arguments to create many Order_details.
     * @example
     * // Create many Order_details
     * const order_details = await prisma.order_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends order_detailsCreateManyArgs>(
      args?: SelectSubset<T, order_detailsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Order_details and returns the data saved in the database.
     * @param {order_detailsCreateManyAndReturnArgs} args - Arguments to create many Order_details.
     * @example
     * // Create many Order_details
     * const order_details = await prisma.order_details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Order_details and only return the `order_detail_id`
     * const order_detailsWithOrder_detail_idOnly = await prisma.order_details.createManyAndReturn({
     *   select: { order_detail_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends order_detailsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, order_detailsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>
    >;

    /**
     * Delete a Order_details.
     * @param {order_detailsDeleteArgs} args - Arguments to delete one Order_details.
     * @example
     * // Delete one Order_details
     * const Order_details = await prisma.order_details.delete({
     *   where: {
     *     // ... filter to delete one Order_details
     *   }
     * })
     *
     */
    delete<T extends order_detailsDeleteArgs>(
      args: SelectSubset<T, order_detailsDeleteArgs<ExtArgs>>
    ): Prisma__order_detailsClient<
      $Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Order_details.
     * @param {order_detailsUpdateArgs} args - Arguments to update one Order_details.
     * @example
     * // Update one Order_details
     * const order_details = await prisma.order_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends order_detailsUpdateArgs>(
      args: SelectSubset<T, order_detailsUpdateArgs<ExtArgs>>
    ): Prisma__order_detailsClient<
      $Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Order_details.
     * @param {order_detailsDeleteManyArgs} args - Arguments to filter Order_details to delete.
     * @example
     * // Delete a few Order_details
     * const { count } = await prisma.order_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends order_detailsDeleteManyArgs>(
      args?: SelectSubset<T, order_detailsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_details
     * const order_details = await prisma.order_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends order_detailsUpdateManyArgs>(
      args: SelectSubset<T, order_detailsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Order_details and returns the data updated in the database.
     * @param {order_detailsUpdateManyAndReturnArgs} args - Arguments to update many Order_details.
     * @example
     * // Update many Order_details
     * const order_details = await prisma.order_details.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Order_details and only return the `order_detail_id`
     * const order_detailsWithOrder_detail_idOnly = await prisma.order_details.updateManyAndReturn({
     *   select: { order_detail_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends order_detailsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, order_detailsUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>
    >;

    /**
     * Create or update one Order_details.
     * @param {order_detailsUpsertArgs} args - Arguments to update or create a Order_details.
     * @example
     * // Update or create a Order_details
     * const order_details = await prisma.order_details.upsert({
     *   create: {
     *     // ... data to create a Order_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_details we want to update
     *   }
     * })
     */
    upsert<T extends order_detailsUpsertArgs>(
      args: SelectSubset<T, order_detailsUpsertArgs<ExtArgs>>
    ): Prisma__order_detailsClient<
      $Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsCountArgs} args - Arguments to filter Order_details to count.
     * @example
     * // Count the number of Order_details
     * const count = await prisma.order_details.count({
     *   where: {
     *     // ... the filter for the Order_details we want to count
     *   }
     * })
     **/
    count<T extends order_detailsCountArgs>(
      args?: Subset<T, order_detailsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], Order_detailsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Order_detailsAggregateArgs>(
      args: Subset<T, Order_detailsAggregateArgs>
    ): Prisma.PrismaPromise<GetOrder_detailsAggregateType<T>>;

    /**
     * Group by Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends order_detailsGroupByArgs,
      HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_detailsGroupByArgs["orderBy"] }
        : { orderBy?: order_detailsGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, order_detailsGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetOrder_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the order_details model
     */
    readonly fields: order_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_detailsClient<
    T,
    _Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends order_details$ordersArgs<ExtArgs> = {}>(
      args?: Subset<T, order_details$ordersArgs<ExtArgs>>
    ): Prisma__ordersClient<
      $Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the order_details model
   */
  interface order_detailsFieldRefs {
    readonly order_detail_id: FieldRef<"order_details", "Int">;
    readonly order_id: FieldRef<"order_details", "Int">;
    readonly product_id: FieldRef<"order_details", "String">;
    readonly quantity: FieldRef<"order_details", "Int">;
    readonly price_per_unit: FieldRef<"order_details", "Decimal">;
    readonly total_amount: FieldRef<"order_details", "Decimal">;
  }

  // Custom InputTypes
  /**
   * order_details findUnique
   */
  export type order_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null;
    /**
     * Filter, which order_details to fetch.
     */
    where: order_detailsWhereUniqueInput;
  };

  /**
   * order_details findUniqueOrThrow
   */
  export type order_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null;
    /**
     * Filter, which order_details to fetch.
     */
    where: order_detailsWhereUniqueInput;
  };

  /**
   * order_details findFirst
   */
  export type order_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null;
    /**
     * Filter, which order_details to fetch.
     */
    where?: order_detailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for order_details.
     */
    cursor?: order_detailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` order_details.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of order_details.
     */
    distinct?: Order_detailsScalarFieldEnum | Order_detailsScalarFieldEnum[];
  };

  /**
   * order_details findFirstOrThrow
   */
  export type order_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null;
    /**
     * Filter, which order_details to fetch.
     */
    where?: order_detailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for order_details.
     */
    cursor?: order_detailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` order_details.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of order_details.
     */
    distinct?: Order_detailsScalarFieldEnum | Order_detailsScalarFieldEnum[];
  };

  /**
   * order_details findMany
   */
  export type order_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null;
    /**
     * Filter, which order_details to fetch.
     */
    where?: order_detailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing order_details.
     */
    cursor?: order_detailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` order_details.
     */
    skip?: number;
    distinct?: Order_detailsScalarFieldEnum | Order_detailsScalarFieldEnum[];
  };

  /**
   * order_details create
   */
  export type order_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null;
    /**
     * The data needed to create a order_details.
     */
    data: XOR<order_detailsCreateInput, order_detailsUncheckedCreateInput>;
  };

  /**
   * order_details createMany
   */
  export type order_detailsCreateManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_details.
     */
    data: order_detailsCreateManyInput | order_detailsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * order_details createManyAndReturn
   */
  export type order_detailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the order_details
       */
      select?: order_detailsSelectCreateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the order_details
       */
      omit?: order_detailsOmit<ExtArgs> | null;
      /**
       * The data used to create many order_details.
       */
      data: order_detailsCreateManyInput | order_detailsCreateManyInput[];
      skipDuplicates?: boolean;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: order_detailsIncludeCreateManyAndReturn<ExtArgs> | null;
    };

  /**
   * order_details update
   */
  export type order_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null;
    /**
     * The data needed to update a order_details.
     */
    data: XOR<order_detailsUpdateInput, order_detailsUncheckedUpdateInput>;
    /**
     * Choose, which order_details to update.
     */
    where: order_detailsWhereUniqueInput;
  };

  /**
   * order_details updateMany
   */
  export type order_detailsUpdateManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_details.
     */
    data: XOR<order_detailsUpdateManyMutationInput, order_detailsUncheckedUpdateManyInput>;
    /**
     * Filter which order_details to update
     */
    where?: order_detailsWhereInput;
    /**
     * Limit how many order_details to update.
     */
    limit?: number;
  };

  /**
   * order_details updateManyAndReturn
   */
  export type order_detailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the order_details
       */
      select?: order_detailsSelectUpdateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the order_details
       */
      omit?: order_detailsOmit<ExtArgs> | null;
      /**
       * The data used to update order_details.
       */
      data: XOR<order_detailsUpdateManyMutationInput, order_detailsUncheckedUpdateManyInput>;
      /**
       * Filter which order_details to update
       */
      where?: order_detailsWhereInput;
      /**
       * Limit how many order_details to update.
       */
      limit?: number;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: order_detailsIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

  /**
   * order_details upsert
   */
  export type order_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null;
    /**
     * The filter to search for the order_details to update in case it exists.
     */
    where: order_detailsWhereUniqueInput;
    /**
     * In case the order_details found by the `where` argument doesn't exist, create a new order_details with this data.
     */
    create: XOR<order_detailsCreateInput, order_detailsUncheckedCreateInput>;
    /**
     * In case the order_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_detailsUpdateInput, order_detailsUncheckedUpdateInput>;
  };

  /**
   * order_details delete
   */
  export type order_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null;
    /**
     * Filter which order_details to delete.
     */
    where: order_detailsWhereUniqueInput;
  };

  /**
   * order_details deleteMany
   */
  export type order_detailsDeleteManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_details to delete
     */
    where?: order_detailsWhereInput;
    /**
     * Limit how many order_details to delete.
     */
    limit?: number;
  };

  /**
   * order_details.orders
   */
  export type order_details$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null;
    where?: ordersWhereInput;
  };

  /**
   * order_details without action
   */
  export type order_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null;
  };

  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null;
    _avg: OrdersAvgAggregateOutputType | null;
    _sum: OrdersSumAggregateOutputType | null;
    _min: OrdersMinAggregateOutputType | null;
    _max: OrdersMaxAggregateOutputType | null;
  };

  export type OrdersAvgAggregateOutputType = {
    order_id: number | null;
    total_amount: Decimal | null;
  };

  export type OrdersSumAggregateOutputType = {
    order_id: number | null;
    total_amount: Decimal | null;
  };

  export type OrdersMinAggregateOutputType = {
    order_id: number | null;
    customer_id: string | null;
    order_date: Date | null;
    total_amount: Decimal | null;
  };

  export type OrdersMaxAggregateOutputType = {
    order_id: number | null;
    customer_id: string | null;
    order_date: Date | null;
    total_amount: Decimal | null;
  };

  export type OrdersCountAggregateOutputType = {
    order_id: number;
    customer_id: number;
    order_date: number;
    total_amount: number;
    _all: number;
  };

  export type OrdersAvgAggregateInputType = {
    order_id?: true;
    total_amount?: true;
  };

  export type OrdersSumAggregateInputType = {
    order_id?: true;
    total_amount?: true;
  };

  export type OrdersMinAggregateInputType = {
    order_id?: true;
    customer_id?: true;
    order_date?: true;
    total_amount?: true;
  };

  export type OrdersMaxAggregateInputType = {
    order_id?: true;
    customer_id?: true;
    order_date?: true;
    total_amount?: true;
  };

  export type OrdersCountAggregateInputType = {
    order_id?: true;
    customer_id?: true;
    order_date?: true;
    total_amount?: true;
    _all?: true;
  };

  export type OrdersAggregateArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned orders
     **/
    _count?: true | OrdersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OrdersAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OrdersSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrdersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrdersMaxAggregateInputType;
  };

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
    [P in keyof T & keyof AggregateOrders]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>;
  };

  export type ordersGroupByArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput;
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[];
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum;
    having?: ordersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrdersCountAggregateInputType | true;
    _avg?: OrdersAvgAggregateInputType;
    _sum?: OrdersSumAggregateInputType;
    _min?: OrdersMinAggregateInputType;
    _max?: OrdersMaxAggregateInputType;
  };

  export type OrdersGroupByOutputType = {
    order_id: number;
    customer_id: string;
    order_date: Date;
    total_amount: Decimal | null;
    _count: OrdersCountAggregateOutputType | null;
    _avg: OrdersAvgAggregateOutputType | null;
    _sum: OrdersSumAggregateOutputType | null;
    _min: OrdersMinAggregateOutputType | null;
    _max: OrdersMaxAggregateOutputType | null;
  };

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof OrdersGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
          : GetScalarType<T[P], OrdersGroupByOutputType[P]>;
      }
    >
  >;

  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      order_id?: boolean;
      customer_id?: boolean;
      order_date?: boolean;
      total_amount?: boolean;
      order_details?: boolean | orders$order_detailsArgs<ExtArgs>;
      _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["orders"]
  >;

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        order_id?: boolean;
        customer_id?: boolean;
        order_date?: boolean;
        total_amount?: boolean;
      },
      ExtArgs["result"]["orders"]
    >;

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        order_id?: boolean;
        customer_id?: boolean;
        order_date?: boolean;
        total_amount?: boolean;
      },
      ExtArgs["result"]["orders"]
    >;

  export type ordersSelectScalar = {
    order_id?: boolean;
    customer_id?: boolean;
    order_date?: boolean;
    total_amount?: boolean;
  };

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
    "order_id" | "customer_id" | "order_date" | "total_amount",
    ExtArgs["result"]["orders"]
  >;
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_details?: boolean | orders$order_detailsArgs<ExtArgs>;
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ordersIncludeCreateManyAndReturn<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {};
  export type ordersIncludeUpdateManyAndReturn<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {};

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders";
    objects: {
      order_details: Prisma.$order_detailsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        order_id: number;
        customer_id: string;
        order_date: Date;
        total_amount: Prisma.Decimal | null;
      },
      ExtArgs["result"]["orders"]
    >;
    composites: {};
  };

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<
    Prisma.$ordersPayload,
    S
  >;

  type ordersCountArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ordersFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: OrdersCountAggregateInputType | true;
  };

  export interface ordersDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["orders"];
      meta: { name: "orders" };
    };
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(
      args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>
    ): Prisma__ordersClient<
      $Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ordersClient<
      $Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(
      args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>
    ): Prisma__ordersClient<
      $Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ordersClient<
      $Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     *
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     *
     * // Only select the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.findMany({ select: { order_id: true } })
     *
     */
    findMany<T extends ordersFindManyArgs>(
      args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     *
     */
    create<T extends ordersCreateArgs>(
      args: SelectSubset<T, ordersCreateArgs<ExtArgs>>
    ): Prisma__ordersClient<
      $Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ordersCreateManyArgs>(
      args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Orders and only return the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.createManyAndReturn({
     *   select: { order_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>
    >;

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     *
     */
    delete<T extends ordersDeleteArgs>(
      args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>
    ): Prisma__ordersClient<
      $Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ordersUpdateArgs>(
      args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>
    ): Prisma__ordersClient<
      $Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ordersDeleteManyArgs>(
      args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ordersUpdateManyArgs>(
      args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Orders and only return the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.updateManyAndReturn({
     *   select: { order_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>
    >;

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(
      args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>
    ): Prisma__ordersClient<
      $Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
     **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], OrdersCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrdersAggregateArgs>(
      args: Subset<T, OrdersAggregateArgs>
    ): Prisma.PrismaPromise<GetOrdersAggregateType<T>>;

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs["orderBy"] }
        : { orderBy?: ordersGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the orders model
     */
    readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order_details<T extends orders$order_detailsArgs<ExtArgs> = {}>(
      args?: Subset<T, orders$order_detailsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly order_id: FieldRef<"orders", "Int">;
    readonly customer_id: FieldRef<"orders", "String">;
    readonly order_date: FieldRef<"orders", "DateTime">;
    readonly total_amount: FieldRef<"orders", "Decimal">;
  }

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null;
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput;
  };

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null;
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput;
  };

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null;
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[];
  };

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null;
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[];
  };

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null;
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` orders.
     */
    skip?: number;
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[];
  };

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null;
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>;
  };

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null;
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null;
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>;
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput;
  };

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>;
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput;
    /**
     * Limit how many orders to update.
     */
    limit?: number;
  };

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null;
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>;
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput;
    /**
     * Limit how many orders to update.
     */
    limit?: number;
  };

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null;
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput;
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>;
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>;
  };

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null;
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput;
  };

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput;
    /**
     * Limit how many orders to delete.
     */
    limit?: number;
  };

  /**
   * orders.order_details
   */
  export type orders$order_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null;
    where?: order_detailsWhereInput;
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[];
    cursor?: order_detailsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Order_detailsScalarFieldEnum | Order_detailsScalarFieldEnum[];
  };

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null;
  };

  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null;
    _avg: ProductsAvgAggregateOutputType | null;
    _sum: ProductsSumAggregateOutputType | null;
    _min: ProductsMinAggregateOutputType | null;
    _max: ProductsMaxAggregateOutputType | null;
  };

  export type ProductsAvgAggregateOutputType = {
    product_id: number | null;
    category_id: number | null;
    price: Decimal | null;
    weight: Decimal | null;
  };

  export type ProductsSumAggregateOutputType = {
    product_id: number | null;
    category_id: number | null;
    price: Decimal | null;
    weight: Decimal | null;
  };

  export type ProductsMinAggregateOutputType = {
    product_id: number | null;
    category_id: number | null;
    name: string | null;
    description: string | null;
    price: Decimal | null;
    sku: string | null;
    weight: Decimal | null;
    dimensions: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tech_description_raw: string | null;
    model_number: string | null;
  };

  export type ProductsMaxAggregateOutputType = {
    product_id: number | null;
    category_id: number | null;
    name: string | null;
    description: string | null;
    price: Decimal | null;
    sku: string | null;
    weight: Decimal | null;
    dimensions: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tech_description_raw: string | null;
    model_number: string | null;
  };

  export type ProductsCountAggregateOutputType = {
    product_id: number;
    category_id: number;
    name: number;
    description: number;
    price: number;
    sku: number;
    weight: number;
    dimensions: number;
    created_at: number;
    updated_at: number;
    tech_description: number;
    product_images: number;
    tech_description_raw: number;
    model_number: number;
    _all: number;
  };

  export type ProductsAvgAggregateInputType = {
    product_id?: true;
    category_id?: true;
    price?: true;
    weight?: true;
  };

  export type ProductsSumAggregateInputType = {
    product_id?: true;
    category_id?: true;
    price?: true;
    weight?: true;
  };

  export type ProductsMinAggregateInputType = {
    product_id?: true;
    category_id?: true;
    name?: true;
    description?: true;
    price?: true;
    sku?: true;
    weight?: true;
    dimensions?: true;
    created_at?: true;
    updated_at?: true;
    tech_description_raw?: true;
    model_number?: true;
  };

  export type ProductsMaxAggregateInputType = {
    product_id?: true;
    category_id?: true;
    name?: true;
    description?: true;
    price?: true;
    sku?: true;
    weight?: true;
    dimensions?: true;
    created_at?: true;
    updated_at?: true;
    tech_description_raw?: true;
    model_number?: true;
  };

  export type ProductsCountAggregateInputType = {
    product_id?: true;
    category_id?: true;
    name?: true;
    description?: true;
    price?: true;
    sku?: true;
    weight?: true;
    dimensions?: true;
    created_at?: true;
    updated_at?: true;
    tech_description?: true;
    product_images?: true;
    tech_description_raw?: true;
    model_number?: true;
    _all?: true;
  };

  export type ProductsAggregateArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned products
     **/
    _count?: true | ProductsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProductsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProductsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProductsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProductsMaxAggregateInputType;
  };

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
    [P in keyof T & keyof AggregateProducts]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>;
  };

  export type productsGroupByArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput;
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[];
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum;
    having?: productsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductsCountAggregateInputType | true;
    _avg?: ProductsAvgAggregateInputType;
    _sum?: ProductsSumAggregateInputType;
    _min?: ProductsMinAggregateInputType;
    _max?: ProductsMaxAggregateInputType;
  };

  export type ProductsGroupByOutputType = {
    product_id: number;
    category_id: number | null;
    name: string;
    description: string | null;
    price: Decimal;
    sku: string;
    weight: Decimal | null;
    dimensions: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tech_description: JsonValue | null;
    product_images: JsonValue | null;
    tech_description_raw: string | null;
    model_number: string | null;
    _count: ProductsCountAggregateOutputType | null;
    _avg: ProductsAvgAggregateOutputType | null;
    _sum: ProductsSumAggregateOutputType | null;
    _min: ProductsMinAggregateOutputType | null;
    _max: ProductsMaxAggregateOutputType | null;
  };

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof ProductsGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
          : GetScalarType<T[P], ProductsGroupByOutputType[P]>;
      }
    >
  >;

  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        product_id?: boolean;
        category_id?: boolean;
        name?: boolean;
        description?: boolean;
        price?: boolean;
        sku?: boolean;
        weight?: boolean;
        dimensions?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        tech_description?: boolean;
        product_images?: boolean;
        tech_description_raw?: boolean;
        model_number?: boolean;
        inventory?: boolean | products$inventoryArgs<ExtArgs>;
        categories?: boolean | products$categoriesArgs<ExtArgs>;
        shipping_status?: boolean | products$shipping_statusArgs<ExtArgs>;
        _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs["result"]["products"]
    >;

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        product_id?: boolean;
        category_id?: boolean;
        name?: boolean;
        description?: boolean;
        price?: boolean;
        sku?: boolean;
        weight?: boolean;
        dimensions?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        tech_description?: boolean;
        product_images?: boolean;
        tech_description_raw?: boolean;
        model_number?: boolean;
        categories?: boolean | products$categoriesArgs<ExtArgs>;
      },
      ExtArgs["result"]["products"]
    >;

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        product_id?: boolean;
        category_id?: boolean;
        name?: boolean;
        description?: boolean;
        price?: boolean;
        sku?: boolean;
        weight?: boolean;
        dimensions?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        tech_description?: boolean;
        product_images?: boolean;
        tech_description_raw?: boolean;
        model_number?: boolean;
        categories?: boolean | products$categoriesArgs<ExtArgs>;
      },
      ExtArgs["result"]["products"]
    >;

  export type productsSelectScalar = {
    product_id?: boolean;
    category_id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    sku?: boolean;
    weight?: boolean;
    dimensions?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tech_description?: boolean;
    product_images?: boolean;
    tech_description_raw?: boolean;
    model_number?: boolean;
  };

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
    | "product_id"
    | "category_id"
    | "name"
    | "description"
    | "price"
    | "sku"
    | "weight"
    | "dimensions"
    | "created_at"
    | "updated_at"
    | "tech_description"
    | "product_images"
    | "tech_description_raw"
    | "model_number",
    ExtArgs["result"]["products"]
  >;
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | products$inventoryArgs<ExtArgs>;
    categories?: boolean | products$categoriesArgs<ExtArgs>;
    shipping_status?: boolean | products$shipping_statusArgs<ExtArgs>;
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | products$categoriesArgs<ExtArgs>;
  };
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | products$categoriesArgs<ExtArgs>;
  };

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products";
    objects: {
      inventory: Prisma.$inventoryPayload<ExtArgs>[];
      categories: Prisma.$categoriesPayload<ExtArgs> | null;
      shipping_status: Prisma.$shipping_statusPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        product_id: number;
        category_id: number | null;
        name: string;
        description: string | null;
        price: Prisma.Decimal;
        sku: string;
        weight: Prisma.Decimal | null;
        dimensions: string | null;
        created_at: Date | null;
        updated_at: Date | null;
        tech_description: Prisma.JsonValue | null;
        product_images: Prisma.JsonValue | null;
        tech_description_raw: string | null;
        model_number: string | null;
      },
      ExtArgs["result"]["products"]
    >;
    composites: {};
  };

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<
    Prisma.$productsPayload,
    S
  >;

  type productsCountArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    productsFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: ProductsCountAggregateInputType | true;
  };

  export interface productsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["products"];
      meta: { name: "products" };
    };
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(
      args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(
      args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     *
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     *
     * // Only select the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.findMany({ select: { product_id: true } })
     *
     */
    findMany<T extends productsFindManyArgs>(
      args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     *
     */
    create<T extends productsCreateArgs>(
      args: SelectSubset<T, productsCreateArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends productsCreateManyArgs>(
      args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Products and only return the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>
    >;

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     *
     */
    delete<T extends productsDeleteArgs>(
      args: SelectSubset<T, productsDeleteArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends productsUpdateArgs>(
      args: SelectSubset<T, productsUpdateArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends productsDeleteManyArgs>(
      args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends productsUpdateManyArgs>(
      args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Products and only return the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.updateManyAndReturn({
     *   select: { product_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>
    >;

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(
      args: SelectSubset<T, productsUpsertArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
     **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ProductsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProductsAggregateArgs>(
      args: Subset<T, ProductsAggregateArgs>
    ): Prisma.PrismaPromise<GetProductsAggregateType<T>>;

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs["orderBy"] }
        : { orderBy?: productsGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the products model
     */
    readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    inventory<T extends products$inventoryArgs<ExtArgs> = {}>(
      args?: Subset<T, products$inventoryArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null
    >;
    categories<T extends products$categoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, products$categoriesArgs<ExtArgs>>
    ): Prisma__categoriesClient<
      $Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    shipping_status<T extends products$shipping_statusArgs<ExtArgs> = {}>(
      args?: Subset<T, products$shipping_statusArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$shipping_statusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly product_id: FieldRef<"products", "Int">;
    readonly category_id: FieldRef<"products", "Int">;
    readonly name: FieldRef<"products", "String">;
    readonly description: FieldRef<"products", "String">;
    readonly price: FieldRef<"products", "Decimal">;
    readonly sku: FieldRef<"products", "String">;
    readonly weight: FieldRef<"products", "Decimal">;
    readonly dimensions: FieldRef<"products", "String">;
    readonly created_at: FieldRef<"products", "DateTime">;
    readonly updated_at: FieldRef<"products", "DateTime">;
    readonly tech_description: FieldRef<"products", "Json">;
    readonly product_images: FieldRef<"products", "Json">;
    readonly tech_description_raw: FieldRef<"products", "String">;
    readonly model_number: FieldRef<"products", "String">;
  }

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput;
  };

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput;
  };

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[];
  };

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[];
  };

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number;
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[];
  };

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>;
  };

  /**
   * products createMany
   */
  export type productsCreateManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>;
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput;
  };

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>;
    /**
     * Filter which products to update
     */
    where?: productsWhereInput;
    /**
     * Limit how many products to update.
     */
    limit?: number;
  };

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>;
    /**
     * Filter which products to update
     */
    where?: productsWhereInput;
    /**
     * Limit how many products to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput;
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>;
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>;
  };

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput;
  };

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput;
    /**
     * Limit how many products to delete.
     */
    limit?: number;
  };

  /**
   * products.inventory
   */
  export type products$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null;
    where?: inventoryWhereInput;
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    cursor?: inventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * products.categories
   */
  export type products$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    where?: categoriesWhereInput;
  };

  /**
   * products.shipping_status
   */
  export type products$shipping_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping_status
     */
    select?: shipping_statusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the shipping_status
     */
    omit?: shipping_statusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipping_statusInclude<ExtArgs> | null;
    where?: shipping_statusWhereInput;
    orderBy?: shipping_statusOrderByWithRelationInput | shipping_statusOrderByWithRelationInput[];
    cursor?: shipping_statusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Shipping_statusScalarFieldEnum | Shipping_statusScalarFieldEnum[];
  };

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null;
  };

  /**
   * Model shipping_status
   */

  export type AggregateShipping_status = {
    _count: Shipping_statusCountAggregateOutputType | null;
    _avg: Shipping_statusAvgAggregateOutputType | null;
    _sum: Shipping_statusSumAggregateOutputType | null;
    _min: Shipping_statusMinAggregateOutputType | null;
    _max: Shipping_statusMaxAggregateOutputType | null;
  };

  export type Shipping_statusAvgAggregateOutputType = {
    order_id: number | null;
    user_id: number | null;
    product_id: number | null;
  };

  export type Shipping_statusSumAggregateOutputType = {
    order_id: number | null;
    user_id: number | null;
    product_id: number | null;
  };

  export type Shipping_statusMinAggregateOutputType = {
    order_id: number | null;
    user_id: number | null;
    product_id: number | null;
    order_date: Date | null;
    shipping_status: string | null;
    shipping_date: Date | null;
    delivery_date: Date | null;
  };

  export type Shipping_statusMaxAggregateOutputType = {
    order_id: number | null;
    user_id: number | null;
    product_id: number | null;
    order_date: Date | null;
    shipping_status: string | null;
    shipping_date: Date | null;
    delivery_date: Date | null;
  };

  export type Shipping_statusCountAggregateOutputType = {
    order_id: number;
    user_id: number;
    product_id: number;
    order_date: number;
    shipping_status: number;
    shipping_date: number;
    delivery_date: number;
    _all: number;
  };

  export type Shipping_statusAvgAggregateInputType = {
    order_id?: true;
    user_id?: true;
    product_id?: true;
  };

  export type Shipping_statusSumAggregateInputType = {
    order_id?: true;
    user_id?: true;
    product_id?: true;
  };

  export type Shipping_statusMinAggregateInputType = {
    order_id?: true;
    user_id?: true;
    product_id?: true;
    order_date?: true;
    shipping_status?: true;
    shipping_date?: true;
    delivery_date?: true;
  };

  export type Shipping_statusMaxAggregateInputType = {
    order_id?: true;
    user_id?: true;
    product_id?: true;
    order_date?: true;
    shipping_status?: true;
    shipping_date?: true;
    delivery_date?: true;
  };

  export type Shipping_statusCountAggregateInputType = {
    order_id?: true;
    user_id?: true;
    product_id?: true;
    order_date?: true;
    shipping_status?: true;
    shipping_date?: true;
    delivery_date?: true;
    _all?: true;
  };

  export type Shipping_statusAggregateArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shipping_status to aggregate.
     */
    where?: shipping_statusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of shipping_statuses to fetch.
     */
    orderBy?: shipping_statusOrderByWithRelationInput | shipping_statusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: shipping_statusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` shipping_statuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` shipping_statuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned shipping_statuses
     **/
    _count?: true | Shipping_statusCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Shipping_statusAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Shipping_statusSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Shipping_statusMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Shipping_statusMaxAggregateInputType;
  };

  export type GetShipping_statusAggregateType<T extends Shipping_statusAggregateArgs> = {
    [P in keyof T & keyof AggregateShipping_status]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipping_status[P]>
      : GetScalarType<T[P], AggregateShipping_status[P]>;
  };

  export type shipping_statusGroupByArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shipping_statusWhereInput;
    orderBy?: shipping_statusOrderByWithAggregationInput | shipping_statusOrderByWithAggregationInput[];
    by: Shipping_statusScalarFieldEnum[] | Shipping_statusScalarFieldEnum;
    having?: shipping_statusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Shipping_statusCountAggregateInputType | true;
    _avg?: Shipping_statusAvgAggregateInputType;
    _sum?: Shipping_statusSumAggregateInputType;
    _min?: Shipping_statusMinAggregateInputType;
    _max?: Shipping_statusMaxAggregateInputType;
  };

  export type Shipping_statusGroupByOutputType = {
    order_id: number;
    user_id: number;
    product_id: number;
    order_date: Date | null;
    shipping_status: string | null;
    shipping_date: Date | null;
    delivery_date: Date | null;
    _count: Shipping_statusCountAggregateOutputType | null;
    _avg: Shipping_statusAvgAggregateOutputType | null;
    _sum: Shipping_statusSumAggregateOutputType | null;
    _min: Shipping_statusMinAggregateOutputType | null;
    _max: Shipping_statusMaxAggregateOutputType | null;
  };

  type GetShipping_statusGroupByPayload<T extends shipping_statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Shipping_statusGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof Shipping_statusGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Shipping_statusGroupByOutputType[P]>
          : GetScalarType<T[P], Shipping_statusGroupByOutputType[P]>;
      }
    >
  >;

  export type shipping_statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        order_id?: boolean;
        user_id?: boolean;
        product_id?: boolean;
        order_date?: boolean;
        shipping_status?: boolean;
        shipping_date?: boolean;
        delivery_date?: boolean;
        products?: boolean | productsDefaultArgs<ExtArgs>;
      },
      ExtArgs["result"]["shipping_status"]
    >;

  export type shipping_statusSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      order_id?: boolean;
      user_id?: boolean;
      product_id?: boolean;
      order_date?: boolean;
      shipping_status?: boolean;
      shipping_date?: boolean;
      delivery_date?: boolean;
      products?: boolean | productsDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["shipping_status"]
  >;

  export type shipping_statusSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      order_id?: boolean;
      user_id?: boolean;
      product_id?: boolean;
      order_date?: boolean;
      shipping_status?: boolean;
      shipping_date?: boolean;
      delivery_date?: boolean;
      products?: boolean | productsDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["shipping_status"]
  >;

  export type shipping_statusSelectScalar = {
    order_id?: boolean;
    user_id?: boolean;
    product_id?: boolean;
    order_date?: boolean;
    shipping_status?: boolean;
    shipping_date?: boolean;
    delivery_date?: boolean;
  };

  export type shipping_statusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      "order_id" | "user_id" | "product_id" | "order_date" | "shipping_status" | "shipping_date" | "delivery_date",
      ExtArgs["result"]["shipping_status"]
    >;
  export type shipping_statusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>;
  };
  export type shipping_statusIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    products?: boolean | productsDefaultArgs<ExtArgs>;
  };
  export type shipping_statusIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    products?: boolean | productsDefaultArgs<ExtArgs>;
  };

  export type $shipping_statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "shipping_status";
    objects: {
      products: Prisma.$productsPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        order_id: number;
        user_id: number;
        product_id: number;
        order_date: Date | null;
        shipping_status: string | null;
        shipping_date: Date | null;
        delivery_date: Date | null;
      },
      ExtArgs["result"]["shipping_status"]
    >;
    composites: {};
  };

  type shipping_statusGetPayload<S extends boolean | null | undefined | shipping_statusDefaultArgs> = $Result.GetResult<
    Prisma.$shipping_statusPayload,
    S
  >;

  type shipping_statusCountArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    shipping_statusFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: Shipping_statusCountAggregateInputType | true;
  };

  export interface shipping_statusDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["shipping_status"];
      meta: { name: "shipping_status" };
    };
    /**
     * Find zero or one Shipping_status that matches the filter.
     * @param {shipping_statusFindUniqueArgs} args - Arguments to find a Shipping_status
     * @example
     * // Get one Shipping_status
     * const shipping_status = await prisma.shipping_status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends shipping_statusFindUniqueArgs>(
      args: SelectSubset<T, shipping_statusFindUniqueArgs<ExtArgs>>
    ): Prisma__shipping_statusClient<
      $Result.GetResult<Prisma.$shipping_statusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Shipping_status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {shipping_statusFindUniqueOrThrowArgs} args - Arguments to find a Shipping_status
     * @example
     * // Get one Shipping_status
     * const shipping_status = await prisma.shipping_status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends shipping_statusFindUniqueOrThrowArgs>(
      args: SelectSubset<T, shipping_statusFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__shipping_statusClient<
      $Result.GetResult<Prisma.$shipping_statusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Shipping_status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipping_statusFindFirstArgs} args - Arguments to find a Shipping_status
     * @example
     * // Get one Shipping_status
     * const shipping_status = await prisma.shipping_status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends shipping_statusFindFirstArgs>(
      args?: SelectSubset<T, shipping_statusFindFirstArgs<ExtArgs>>
    ): Prisma__shipping_statusClient<
      $Result.GetResult<Prisma.$shipping_statusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Shipping_status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipping_statusFindFirstOrThrowArgs} args - Arguments to find a Shipping_status
     * @example
     * // Get one Shipping_status
     * const shipping_status = await prisma.shipping_status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends shipping_statusFindFirstOrThrowArgs>(
      args?: SelectSubset<T, shipping_statusFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__shipping_statusClient<
      $Result.GetResult<Prisma.$shipping_statusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Shipping_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipping_statusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shipping_statuses
     * const shipping_statuses = await prisma.shipping_status.findMany()
     *
     * // Get first 10 Shipping_statuses
     * const shipping_statuses = await prisma.shipping_status.findMany({ take: 10 })
     *
     * // Only select the `order_id`
     * const shipping_statusWithOrder_idOnly = await prisma.shipping_status.findMany({ select: { order_id: true } })
     *
     */
    findMany<T extends shipping_statusFindManyArgs>(
      args?: SelectSubset<T, shipping_statusFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$shipping_statusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>
    >;

    /**
     * Create a Shipping_status.
     * @param {shipping_statusCreateArgs} args - Arguments to create a Shipping_status.
     * @example
     * // Create one Shipping_status
     * const Shipping_status = await prisma.shipping_status.create({
     *   data: {
     *     // ... data to create a Shipping_status
     *   }
     * })
     *
     */
    create<T extends shipping_statusCreateArgs>(
      args: SelectSubset<T, shipping_statusCreateArgs<ExtArgs>>
    ): Prisma__shipping_statusClient<
      $Result.GetResult<Prisma.$shipping_statusPayload<ExtArgs>, T, "create", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Shipping_statuses.
     * @param {shipping_statusCreateManyArgs} args - Arguments to create many Shipping_statuses.
     * @example
     * // Create many Shipping_statuses
     * const shipping_status = await prisma.shipping_status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends shipping_statusCreateManyArgs>(
      args?: SelectSubset<T, shipping_statusCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Shipping_statuses and returns the data saved in the database.
     * @param {shipping_statusCreateManyAndReturnArgs} args - Arguments to create many Shipping_statuses.
     * @example
     * // Create many Shipping_statuses
     * const shipping_status = await prisma.shipping_status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Shipping_statuses and only return the `order_id`
     * const shipping_statusWithOrder_idOnly = await prisma.shipping_status.createManyAndReturn({
     *   select: { order_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends shipping_statusCreateManyAndReturnArgs>(
      args?: SelectSubset<T, shipping_statusCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$shipping_statusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>
    >;

    /**
     * Delete a Shipping_status.
     * @param {shipping_statusDeleteArgs} args - Arguments to delete one Shipping_status.
     * @example
     * // Delete one Shipping_status
     * const Shipping_status = await prisma.shipping_status.delete({
     *   where: {
     *     // ... filter to delete one Shipping_status
     *   }
     * })
     *
     */
    delete<T extends shipping_statusDeleteArgs>(
      args: SelectSubset<T, shipping_statusDeleteArgs<ExtArgs>>
    ): Prisma__shipping_statusClient<
      $Result.GetResult<Prisma.$shipping_statusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Shipping_status.
     * @param {shipping_statusUpdateArgs} args - Arguments to update one Shipping_status.
     * @example
     * // Update one Shipping_status
     * const shipping_status = await prisma.shipping_status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends shipping_statusUpdateArgs>(
      args: SelectSubset<T, shipping_statusUpdateArgs<ExtArgs>>
    ): Prisma__shipping_statusClient<
      $Result.GetResult<Prisma.$shipping_statusPayload<ExtArgs>, T, "update", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Shipping_statuses.
     * @param {shipping_statusDeleteManyArgs} args - Arguments to filter Shipping_statuses to delete.
     * @example
     * // Delete a few Shipping_statuses
     * const { count } = await prisma.shipping_status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends shipping_statusDeleteManyArgs>(
      args?: SelectSubset<T, shipping_statusDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Shipping_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipping_statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shipping_statuses
     * const shipping_status = await prisma.shipping_status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends shipping_statusUpdateManyArgs>(
      args: SelectSubset<T, shipping_statusUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Shipping_statuses and returns the data updated in the database.
     * @param {shipping_statusUpdateManyAndReturnArgs} args - Arguments to update many Shipping_statuses.
     * @example
     * // Update many Shipping_statuses
     * const shipping_status = await prisma.shipping_status.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Shipping_statuses and only return the `order_id`
     * const shipping_statusWithOrder_idOnly = await prisma.shipping_status.updateManyAndReturn({
     *   select: { order_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends shipping_statusUpdateManyAndReturnArgs>(
      args: SelectSubset<T, shipping_statusUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$shipping_statusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>
    >;

    /**
     * Create or update one Shipping_status.
     * @param {shipping_statusUpsertArgs} args - Arguments to update or create a Shipping_status.
     * @example
     * // Update or create a Shipping_status
     * const shipping_status = await prisma.shipping_status.upsert({
     *   create: {
     *     // ... data to create a Shipping_status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipping_status we want to update
     *   }
     * })
     */
    upsert<T extends shipping_statusUpsertArgs>(
      args: SelectSubset<T, shipping_statusUpsertArgs<ExtArgs>>
    ): Prisma__shipping_statusClient<
      $Result.GetResult<Prisma.$shipping_statusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Shipping_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipping_statusCountArgs} args - Arguments to filter Shipping_statuses to count.
     * @example
     * // Count the number of Shipping_statuses
     * const count = await prisma.shipping_status.count({
     *   where: {
     *     // ... the filter for the Shipping_statuses we want to count
     *   }
     * })
     **/
    count<T extends shipping_statusCountArgs>(
      args?: Subset<T, shipping_statusCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], Shipping_statusCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Shipping_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shipping_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Shipping_statusAggregateArgs>(
      args: Subset<T, Shipping_statusAggregateArgs>
    ): Prisma.PrismaPromise<GetShipping_statusAggregateType<T>>;

    /**
     * Group by Shipping_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipping_statusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends shipping_statusGroupByArgs,
      HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shipping_statusGroupByArgs["orderBy"] }
        : { orderBy?: shipping_statusGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, shipping_statusGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetShipping_statusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the shipping_status model
     */
    readonly fields: shipping_statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for shipping_status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shipping_statusClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    products<T extends productsDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, productsDefaultArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the shipping_status model
   */
  interface shipping_statusFieldRefs {
    readonly order_id: FieldRef<"shipping_status", "Int">;
    readonly user_id: FieldRef<"shipping_status", "Int">;
    readonly product_id: FieldRef<"shipping_status", "Int">;
    readonly order_date: FieldRef<"shipping_status", "DateTime">;
    readonly shipping_status: FieldRef<"shipping_status", "String">;
    readonly shipping_date: FieldRef<"shipping_status", "DateTime">;
    readonly delivery_date: FieldRef<"shipping_status", "DateTime">;
  }

  // Custom InputTypes
  /**
   * shipping_status findUnique
   */
  export type shipping_statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping_status
     */
    select?: shipping_statusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the shipping_status
     */
    omit?: shipping_statusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipping_statusInclude<ExtArgs> | null;
    /**
     * Filter, which shipping_status to fetch.
     */
    where: shipping_statusWhereUniqueInput;
  };

  /**
   * shipping_status findUniqueOrThrow
   */
  export type shipping_statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the shipping_status
       */
      select?: shipping_statusSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the shipping_status
       */
      omit?: shipping_statusOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: shipping_statusInclude<ExtArgs> | null;
      /**
       * Filter, which shipping_status to fetch.
       */
      where: shipping_statusWhereUniqueInput;
    };

  /**
   * shipping_status findFirst
   */
  export type shipping_statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping_status
     */
    select?: shipping_statusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the shipping_status
     */
    omit?: shipping_statusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipping_statusInclude<ExtArgs> | null;
    /**
     * Filter, which shipping_status to fetch.
     */
    where?: shipping_statusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of shipping_statuses to fetch.
     */
    orderBy?: shipping_statusOrderByWithRelationInput | shipping_statusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for shipping_statuses.
     */
    cursor?: shipping_statusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` shipping_statuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` shipping_statuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of shipping_statuses.
     */
    distinct?: Shipping_statusScalarFieldEnum | Shipping_statusScalarFieldEnum[];
  };

  /**
   * shipping_status findFirstOrThrow
   */
  export type shipping_statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the shipping_status
       */
      select?: shipping_statusSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the shipping_status
       */
      omit?: shipping_statusOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: shipping_statusInclude<ExtArgs> | null;
      /**
       * Filter, which shipping_status to fetch.
       */
      where?: shipping_statusWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of shipping_statuses to fetch.
       */
      orderBy?: shipping_statusOrderByWithRelationInput | shipping_statusOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for shipping_statuses.
       */
      cursor?: shipping_statusWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` shipping_statuses from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` shipping_statuses.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of shipping_statuses.
       */
      distinct?: Shipping_statusScalarFieldEnum | Shipping_statusScalarFieldEnum[];
    };

  /**
   * shipping_status findMany
   */
  export type shipping_statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping_status
     */
    select?: shipping_statusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the shipping_status
     */
    omit?: shipping_statusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipping_statusInclude<ExtArgs> | null;
    /**
     * Filter, which shipping_statuses to fetch.
     */
    where?: shipping_statusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of shipping_statuses to fetch.
     */
    orderBy?: shipping_statusOrderByWithRelationInput | shipping_statusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing shipping_statuses.
     */
    cursor?: shipping_statusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` shipping_statuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` shipping_statuses.
     */
    skip?: number;
    distinct?: Shipping_statusScalarFieldEnum | Shipping_statusScalarFieldEnum[];
  };

  /**
   * shipping_status create
   */
  export type shipping_statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping_status
     */
    select?: shipping_statusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the shipping_status
     */
    omit?: shipping_statusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipping_statusInclude<ExtArgs> | null;
    /**
     * The data needed to create a shipping_status.
     */
    data: XOR<shipping_statusCreateInput, shipping_statusUncheckedCreateInput>;
  };

  /**
   * shipping_status createMany
   */
  export type shipping_statusCreateManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shipping_statuses.
     */
    data: shipping_statusCreateManyInput | shipping_statusCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * shipping_status createManyAndReturn
   */
  export type shipping_statusCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the shipping_status
     */
    select?: shipping_statusSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the shipping_status
     */
    omit?: shipping_statusOmit<ExtArgs> | null;
    /**
     * The data used to create many shipping_statuses.
     */
    data: shipping_statusCreateManyInput | shipping_statusCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipping_statusIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * shipping_status update
   */
  export type shipping_statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping_status
     */
    select?: shipping_statusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the shipping_status
     */
    omit?: shipping_statusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipping_statusInclude<ExtArgs> | null;
    /**
     * The data needed to update a shipping_status.
     */
    data: XOR<shipping_statusUpdateInput, shipping_statusUncheckedUpdateInput>;
    /**
     * Choose, which shipping_status to update.
     */
    where: shipping_statusWhereUniqueInput;
  };

  /**
   * shipping_status updateMany
   */
  export type shipping_statusUpdateManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shipping_statuses.
     */
    data: XOR<shipping_statusUpdateManyMutationInput, shipping_statusUncheckedUpdateManyInput>;
    /**
     * Filter which shipping_statuses to update
     */
    where?: shipping_statusWhereInput;
    /**
     * Limit how many shipping_statuses to update.
     */
    limit?: number;
  };

  /**
   * shipping_status updateManyAndReturn
   */
  export type shipping_statusUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the shipping_status
     */
    select?: shipping_statusSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the shipping_status
     */
    omit?: shipping_statusOmit<ExtArgs> | null;
    /**
     * The data used to update shipping_statuses.
     */
    data: XOR<shipping_statusUpdateManyMutationInput, shipping_statusUncheckedUpdateManyInput>;
    /**
     * Filter which shipping_statuses to update
     */
    where?: shipping_statusWhereInput;
    /**
     * Limit how many shipping_statuses to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipping_statusIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * shipping_status upsert
   */
  export type shipping_statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping_status
     */
    select?: shipping_statusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the shipping_status
     */
    omit?: shipping_statusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipping_statusInclude<ExtArgs> | null;
    /**
     * The filter to search for the shipping_status to update in case it exists.
     */
    where: shipping_statusWhereUniqueInput;
    /**
     * In case the shipping_status found by the `where` argument doesn't exist, create a new shipping_status with this data.
     */
    create: XOR<shipping_statusCreateInput, shipping_statusUncheckedCreateInput>;
    /**
     * In case the shipping_status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shipping_statusUpdateInput, shipping_statusUncheckedUpdateInput>;
  };

  /**
   * shipping_status delete
   */
  export type shipping_statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping_status
     */
    select?: shipping_statusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the shipping_status
     */
    omit?: shipping_statusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipping_statusInclude<ExtArgs> | null;
    /**
     * Filter which shipping_status to delete.
     */
    where: shipping_statusWhereUniqueInput;
  };

  /**
   * shipping_status deleteMany
   */
  export type shipping_statusDeleteManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shipping_statuses to delete
     */
    where?: shipping_statusWhereInput;
    /**
     * Limit how many shipping_statuses to delete.
     */
    limit?: number;
  };

  /**
   * shipping_status without action
   */
  export type shipping_statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipping_status
     */
    select?: shipping_statusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the shipping_status
     */
    omit?: shipping_statusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipping_statusInclude<ExtArgs> | null;
  };

  /**
   * Model subscription_plans
   */

  export type AggregateSubscription_plans = {
    _count: Subscription_plansCountAggregateOutputType | null;
    _avg: Subscription_plansAvgAggregateOutputType | null;
    _sum: Subscription_plansSumAggregateOutputType | null;
    _min: Subscription_plansMinAggregateOutputType | null;
    _max: Subscription_plansMaxAggregateOutputType | null;
  };

  export type Subscription_plansAvgAggregateOutputType = {
    plan_id: number | null;
    price: Decimal | null;
  };

  export type Subscription_plansSumAggregateOutputType = {
    plan_id: number | null;
    price: Decimal | null;
  };

  export type Subscription_plansMinAggregateOutputType = {
    plan_id: number | null;
    plan_name: string | null;
    price: Decimal | null;
  };

  export type Subscription_plansMaxAggregateOutputType = {
    plan_id: number | null;
    plan_name: string | null;
    price: Decimal | null;
  };

  export type Subscription_plansCountAggregateOutputType = {
    plan_id: number;
    plan_name: number;
    price: number;
    _all: number;
  };

  export type Subscription_plansAvgAggregateInputType = {
    plan_id?: true;
    price?: true;
  };

  export type Subscription_plansSumAggregateInputType = {
    plan_id?: true;
    price?: true;
  };

  export type Subscription_plansMinAggregateInputType = {
    plan_id?: true;
    plan_name?: true;
    price?: true;
  };

  export type Subscription_plansMaxAggregateInputType = {
    plan_id?: true;
    plan_name?: true;
    price?: true;
  };

  export type Subscription_plansCountAggregateInputType = {
    plan_id?: true;
    plan_name?: true;
    price?: true;
    _all?: true;
  };

  export type Subscription_plansAggregateArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscription_plans to aggregate.
     */
    where?: subscription_plansWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscription_plans to fetch.
     */
    orderBy?: subscription_plansOrderByWithRelationInput | subscription_plansOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: subscription_plansWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscription_plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscription_plans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned subscription_plans
     **/
    _count?: true | Subscription_plansCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Subscription_plansAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Subscription_plansSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Subscription_plansMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Subscription_plansMaxAggregateInputType;
  };

  export type GetSubscription_plansAggregateType<T extends Subscription_plansAggregateArgs> = {
    [P in keyof T & keyof AggregateSubscription_plans]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription_plans[P]>
      : GetScalarType<T[P], AggregateSubscription_plans[P]>;
  };

  export type subscription_plansGroupByArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subscription_plansWhereInput;
    orderBy?: subscription_plansOrderByWithAggregationInput | subscription_plansOrderByWithAggregationInput[];
    by: Subscription_plansScalarFieldEnum[] | Subscription_plansScalarFieldEnum;
    having?: subscription_plansScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Subscription_plansCountAggregateInputType | true;
    _avg?: Subscription_plansAvgAggregateInputType;
    _sum?: Subscription_plansSumAggregateInputType;
    _min?: Subscription_plansMinAggregateInputType;
    _max?: Subscription_plansMaxAggregateInputType;
  };

  export type Subscription_plansGroupByOutputType = {
    plan_id: number;
    plan_name: string;
    price: Decimal;
    _count: Subscription_plansCountAggregateOutputType | null;
    _avg: Subscription_plansAvgAggregateOutputType | null;
    _sum: Subscription_plansSumAggregateOutputType | null;
    _min: Subscription_plansMinAggregateOutputType | null;
    _max: Subscription_plansMaxAggregateOutputType | null;
  };

  type GetSubscription_plansGroupByPayload<T extends subscription_plansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Subscription_plansGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof Subscription_plansGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Subscription_plansGroupByOutputType[P]>
          : GetScalarType<T[P], Subscription_plansGroupByOutputType[P]>;
      }
    >
  >;

  export type subscription_plansSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        plan_id?: boolean;
        plan_name?: boolean;
        price?: boolean;
      },
      ExtArgs["result"]["subscription_plans"]
    >;

  export type subscription_plansSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      plan_id?: boolean;
      plan_name?: boolean;
      price?: boolean;
    },
    ExtArgs["result"]["subscription_plans"]
  >;

  export type subscription_plansSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      plan_id?: boolean;
      plan_name?: boolean;
      price?: boolean;
    },
    ExtArgs["result"]["subscription_plans"]
  >;

  export type subscription_plansSelectScalar = {
    plan_id?: boolean;
    plan_name?: boolean;
    price?: boolean;
  };

  export type subscription_plansOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<"plan_id" | "plan_name" | "price", ExtArgs["result"]["subscription_plans"]>;

  export type $subscription_plansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subscription_plans";
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        plan_id: number;
        plan_name: string;
        price: Prisma.Decimal;
      },
      ExtArgs["result"]["subscription_plans"]
    >;
    composites: {};
  };

  type subscription_plansGetPayload<S extends boolean | null | undefined | subscription_plansDefaultArgs> =
    $Result.GetResult<Prisma.$subscription_plansPayload, S>;

  type subscription_plansCountArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    subscription_plansFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: Subscription_plansCountAggregateInputType | true;
  };

  export interface subscription_plansDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["subscription_plans"];
      meta: { name: "subscription_plans" };
    };
    /**
     * Find zero or one Subscription_plans that matches the filter.
     * @param {subscription_plansFindUniqueArgs} args - Arguments to find a Subscription_plans
     * @example
     * // Get one Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subscription_plansFindUniqueArgs>(
      args: SelectSubset<T, subscription_plansFindUniqueArgs<ExtArgs>>
    ): Prisma__subscription_plansClient<
      $Result.GetResult<Prisma.$subscription_plansPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Subscription_plans that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subscription_plansFindUniqueOrThrowArgs} args - Arguments to find a Subscription_plans
     * @example
     * // Get one Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subscription_plansFindUniqueOrThrowArgs>(
      args: SelectSubset<T, subscription_plansFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__subscription_plansClient<
      $Result.GetResult<Prisma.$subscription_plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Subscription_plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscription_plansFindFirstArgs} args - Arguments to find a Subscription_plans
     * @example
     * // Get one Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subscription_plansFindFirstArgs>(
      args?: SelectSubset<T, subscription_plansFindFirstArgs<ExtArgs>>
    ): Prisma__subscription_plansClient<
      $Result.GetResult<Prisma.$subscription_plansPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Subscription_plans that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscription_plansFindFirstOrThrowArgs} args - Arguments to find a Subscription_plans
     * @example
     * // Get one Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subscription_plansFindFirstOrThrowArgs>(
      args?: SelectSubset<T, subscription_plansFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__subscription_plansClient<
      $Result.GetResult<Prisma.$subscription_plansPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Subscription_plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscription_plansFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.findMany()
     *
     * // Get first 10 Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.findMany({ take: 10 })
     *
     * // Only select the `plan_id`
     * const subscription_plansWithPlan_idOnly = await prisma.subscription_plans.findMany({ select: { plan_id: true } })
     *
     */
    findMany<T extends subscription_plansFindManyArgs>(
      args?: SelectSubset<T, subscription_plansFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$subscription_plansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>
    >;

    /**
     * Create a Subscription_plans.
     * @param {subscription_plansCreateArgs} args - Arguments to create a Subscription_plans.
     * @example
     * // Create one Subscription_plans
     * const Subscription_plans = await prisma.subscription_plans.create({
     *   data: {
     *     // ... data to create a Subscription_plans
     *   }
     * })
     *
     */
    create<T extends subscription_plansCreateArgs>(
      args: SelectSubset<T, subscription_plansCreateArgs<ExtArgs>>
    ): Prisma__subscription_plansClient<
      $Result.GetResult<Prisma.$subscription_plansPayload<ExtArgs>, T, "create", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Subscription_plans.
     * @param {subscription_plansCreateManyArgs} args - Arguments to create many Subscription_plans.
     * @example
     * // Create many Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends subscription_plansCreateManyArgs>(
      args?: SelectSubset<T, subscription_plansCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Subscription_plans and returns the data saved in the database.
     * @param {subscription_plansCreateManyAndReturnArgs} args - Arguments to create many Subscription_plans.
     * @example
     * // Create many Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Subscription_plans and only return the `plan_id`
     * const subscription_plansWithPlan_idOnly = await prisma.subscription_plans.createManyAndReturn({
     *   select: { plan_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends subscription_plansCreateManyAndReturnArgs>(
      args?: SelectSubset<T, subscription_plansCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$subscription_plansPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>
    >;

    /**
     * Delete a Subscription_plans.
     * @param {subscription_plansDeleteArgs} args - Arguments to delete one Subscription_plans.
     * @example
     * // Delete one Subscription_plans
     * const Subscription_plans = await prisma.subscription_plans.delete({
     *   where: {
     *     // ... filter to delete one Subscription_plans
     *   }
     * })
     *
     */
    delete<T extends subscription_plansDeleteArgs>(
      args: SelectSubset<T, subscription_plansDeleteArgs<ExtArgs>>
    ): Prisma__subscription_plansClient<
      $Result.GetResult<Prisma.$subscription_plansPayload<ExtArgs>, T, "delete", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Subscription_plans.
     * @param {subscription_plansUpdateArgs} args - Arguments to update one Subscription_plans.
     * @example
     * // Update one Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends subscription_plansUpdateArgs>(
      args: SelectSubset<T, subscription_plansUpdateArgs<ExtArgs>>
    ): Prisma__subscription_plansClient<
      $Result.GetResult<Prisma.$subscription_plansPayload<ExtArgs>, T, "update", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Subscription_plans.
     * @param {subscription_plansDeleteManyArgs} args - Arguments to filter Subscription_plans to delete.
     * @example
     * // Delete a few Subscription_plans
     * const { count } = await prisma.subscription_plans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends subscription_plansDeleteManyArgs>(
      args?: SelectSubset<T, subscription_plansDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subscription_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscription_plansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends subscription_plansUpdateManyArgs>(
      args: SelectSubset<T, subscription_plansUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subscription_plans and returns the data updated in the database.
     * @param {subscription_plansUpdateManyAndReturnArgs} args - Arguments to update many Subscription_plans.
     * @example
     * // Update many Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Subscription_plans and only return the `plan_id`
     * const subscription_plansWithPlan_idOnly = await prisma.subscription_plans.updateManyAndReturn({
     *   select: { plan_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends subscription_plansUpdateManyAndReturnArgs>(
      args: SelectSubset<T, subscription_plansUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$subscription_plansPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>
    >;

    /**
     * Create or update one Subscription_plans.
     * @param {subscription_plansUpsertArgs} args - Arguments to update or create a Subscription_plans.
     * @example
     * // Update or create a Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.upsert({
     *   create: {
     *     // ... data to create a Subscription_plans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription_plans we want to update
     *   }
     * })
     */
    upsert<T extends subscription_plansUpsertArgs>(
      args: SelectSubset<T, subscription_plansUpsertArgs<ExtArgs>>
    ): Prisma__subscription_plansClient<
      $Result.GetResult<Prisma.$subscription_plansPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Subscription_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscription_plansCountArgs} args - Arguments to filter Subscription_plans to count.
     * @example
     * // Count the number of Subscription_plans
     * const count = await prisma.subscription_plans.count({
     *   where: {
     *     // ... the filter for the Subscription_plans we want to count
     *   }
     * })
     **/
    count<T extends subscription_plansCountArgs>(
      args?: Subset<T, subscription_plansCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], Subscription_plansCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Subscription_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Subscription_plansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Subscription_plansAggregateArgs>(
      args: Subset<T, Subscription_plansAggregateArgs>
    ): Prisma.PrismaPromise<GetSubscription_plansAggregateType<T>>;

    /**
     * Group by Subscription_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscription_plansGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends subscription_plansGroupByArgs,
      HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subscription_plansGroupByArgs["orderBy"] }
        : { orderBy?: subscription_plansGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, subscription_plansGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetSubscription_plansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the subscription_plans model
     */
    readonly fields: subscription_plansFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subscription_plans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subscription_plansClient<
    T,
    _Null = never,
    _ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    _GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the subscription_plans model
   */
  interface subscription_plansFieldRefs {
    readonly plan_id: FieldRef<"subscription_plans", "Int">;
    readonly plan_name: FieldRef<"subscription_plans", "String">;
    readonly price: FieldRef<"subscription_plans", "Decimal">;
  }

  // Custom InputTypes
  /**
   * subscription_plans findUnique
   */
  export type subscription_plansFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plans
     */
    select?: subscription_plansSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subscription_plans
     */
    omit?: subscription_plansOmit<ExtArgs> | null;
    /**
     * Filter, which subscription_plans to fetch.
     */
    where: subscription_plansWhereUniqueInput;
  };

  /**
   * subscription_plans findUniqueOrThrow
   */
  export type subscription_plansFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the subscription_plans
     */
    select?: subscription_plansSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subscription_plans
     */
    omit?: subscription_plansOmit<ExtArgs> | null;
    /**
     * Filter, which subscription_plans to fetch.
     */
    where: subscription_plansWhereUniqueInput;
  };

  /**
   * subscription_plans findFirst
   */
  export type subscription_plansFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plans
     */
    select?: subscription_plansSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subscription_plans
     */
    omit?: subscription_plansOmit<ExtArgs> | null;
    /**
     * Filter, which subscription_plans to fetch.
     */
    where?: subscription_plansWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscription_plans to fetch.
     */
    orderBy?: subscription_plansOrderByWithRelationInput | subscription_plansOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for subscription_plans.
     */
    cursor?: subscription_plansWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscription_plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscription_plans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of subscription_plans.
     */
    distinct?: Subscription_plansScalarFieldEnum | Subscription_plansScalarFieldEnum[];
  };

  /**
   * subscription_plans findFirstOrThrow
   */
  export type subscription_plansFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the subscription_plans
     */
    select?: subscription_plansSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subscription_plans
     */
    omit?: subscription_plansOmit<ExtArgs> | null;
    /**
     * Filter, which subscription_plans to fetch.
     */
    where?: subscription_plansWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscription_plans to fetch.
     */
    orderBy?: subscription_plansOrderByWithRelationInput | subscription_plansOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for subscription_plans.
     */
    cursor?: subscription_plansWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscription_plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscription_plans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of subscription_plans.
     */
    distinct?: Subscription_plansScalarFieldEnum | Subscription_plansScalarFieldEnum[];
  };

  /**
   * subscription_plans findMany
   */
  export type subscription_plansFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plans
     */
    select?: subscription_plansSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subscription_plans
     */
    omit?: subscription_plansOmit<ExtArgs> | null;
    /**
     * Filter, which subscription_plans to fetch.
     */
    where?: subscription_plansWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscription_plans to fetch.
     */
    orderBy?: subscription_plansOrderByWithRelationInput | subscription_plansOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing subscription_plans.
     */
    cursor?: subscription_plansWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscription_plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscription_plans.
     */
    skip?: number;
    distinct?: Subscription_plansScalarFieldEnum | Subscription_plansScalarFieldEnum[];
  };

  /**
   * subscription_plans create
   */
  export type subscription_plansCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plans
     */
    select?: subscription_plansSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subscription_plans
     */
    omit?: subscription_plansOmit<ExtArgs> | null;
    /**
     * The data needed to create a subscription_plans.
     */
    data: XOR<subscription_plansCreateInput, subscription_plansUncheckedCreateInput>;
  };

  /**
   * subscription_plans createMany
   */
  export type subscription_plansCreateManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subscription_plans.
     */
    data: subscription_plansCreateManyInput | subscription_plansCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * subscription_plans createManyAndReturn
   */
  export type subscription_plansCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the subscription_plans
     */
    select?: subscription_plansSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the subscription_plans
     */
    omit?: subscription_plansOmit<ExtArgs> | null;
    /**
     * The data used to create many subscription_plans.
     */
    data: subscription_plansCreateManyInput | subscription_plansCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * subscription_plans update
   */
  export type subscription_plansUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plans
     */
    select?: subscription_plansSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subscription_plans
     */
    omit?: subscription_plansOmit<ExtArgs> | null;
    /**
     * The data needed to update a subscription_plans.
     */
    data: XOR<subscription_plansUpdateInput, subscription_plansUncheckedUpdateInput>;
    /**
     * Choose, which subscription_plans to update.
     */
    where: subscription_plansWhereUniqueInput;
  };

  /**
   * subscription_plans updateMany
   */
  export type subscription_plansUpdateManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subscription_plans.
     */
    data: XOR<subscription_plansUpdateManyMutationInput, subscription_plansUncheckedUpdateManyInput>;
    /**
     * Filter which subscription_plans to update
     */
    where?: subscription_plansWhereInput;
    /**
     * Limit how many subscription_plans to update.
     */
    limit?: number;
  };

  /**
   * subscription_plans updateManyAndReturn
   */
  export type subscription_plansUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the subscription_plans
     */
    select?: subscription_plansSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the subscription_plans
     */
    omit?: subscription_plansOmit<ExtArgs> | null;
    /**
     * The data used to update subscription_plans.
     */
    data: XOR<subscription_plansUpdateManyMutationInput, subscription_plansUncheckedUpdateManyInput>;
    /**
     * Filter which subscription_plans to update
     */
    where?: subscription_plansWhereInput;
    /**
     * Limit how many subscription_plans to update.
     */
    limit?: number;
  };

  /**
   * subscription_plans upsert
   */
  export type subscription_plansUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plans
     */
    select?: subscription_plansSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subscription_plans
     */
    omit?: subscription_plansOmit<ExtArgs> | null;
    /**
     * The filter to search for the subscription_plans to update in case it exists.
     */
    where: subscription_plansWhereUniqueInput;
    /**
     * In case the subscription_plans found by the `where` argument doesn't exist, create a new subscription_plans with this data.
     */
    create: XOR<subscription_plansCreateInput, subscription_plansUncheckedCreateInput>;
    /**
     * In case the subscription_plans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subscription_plansUpdateInput, subscription_plansUncheckedUpdateInput>;
  };

  /**
   * subscription_plans delete
   */
  export type subscription_plansDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plans
     */
    select?: subscription_plansSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subscription_plans
     */
    omit?: subscription_plansOmit<ExtArgs> | null;
    /**
     * Filter which subscription_plans to delete.
     */
    where: subscription_plansWhereUniqueInput;
  };

  /**
   * subscription_plans deleteMany
   */
  export type subscription_plansDeleteManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscription_plans to delete
     */
    where?: subscription_plansWhereInput;
    /**
     * Limit how many subscription_plans to delete.
     */
    limit?: number;
  };

  /**
   * subscription_plans without action
   */
  export type subscription_plansDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription_plans
     */
    select?: subscription_plansSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subscription_plans
     */
    omit?: subscription_plansOmit<ExtArgs> | null;
  };

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
  };

  export type UsersAvgAggregateOutputType = {
    user_id: number | null;
    age: number | null;
    subscription_plan_id: number | null;
  };

  export type UsersSumAggregateOutputType = {
    user_id: number | null;
    age: number | null;
    subscription_plan_id: number | null;
  };

  export type UsersMinAggregateOutputType = {
    user_id: number | null;
    username: string | null;
    age: number | null;
    sex: string | null;
    job: string | null;
    birthday: string | null;
    family_structure: string | null;
    current_address: string | null;
    phone: string | null;
    email: string | null;
    mail_acceptance: string | null;
    dm_acceptance: string | null;
    customer_status: string | null;
    subscription_plan_id: number | null;
    subscription_status: string | null;
  };

  export type UsersMaxAggregateOutputType = {
    user_id: number | null;
    username: string | null;
    age: number | null;
    sex: string | null;
    job: string | null;
    birthday: string | null;
    family_structure: string | null;
    current_address: string | null;
    phone: string | null;
    email: string | null;
    mail_acceptance: string | null;
    dm_acceptance: string | null;
    customer_status: string | null;
    subscription_plan_id: number | null;
    subscription_status: string | null;
  };

  export type UsersCountAggregateOutputType = {
    user_id: number;
    username: number;
    age: number;
    sex: number;
    job: number;
    birthday: number;
    family_structure: number;
    current_address: number;
    phone: number;
    email: number;
    mail_acceptance: number;
    dm_acceptance: number;
    customer_status: number;
    subscription_plan_id: number;
    subscription_status: number;
    _all: number;
  };

  export type UsersAvgAggregateInputType = {
    user_id?: true;
    age?: true;
    subscription_plan_id?: true;
  };

  export type UsersSumAggregateInputType = {
    user_id?: true;
    age?: true;
    subscription_plan_id?: true;
  };

  export type UsersMinAggregateInputType = {
    user_id?: true;
    username?: true;
    age?: true;
    sex?: true;
    job?: true;
    birthday?: true;
    family_structure?: true;
    current_address?: true;
    phone?: true;
    email?: true;
    mail_acceptance?: true;
    dm_acceptance?: true;
    customer_status?: true;
    subscription_plan_id?: true;
    subscription_status?: true;
  };

  export type UsersMaxAggregateInputType = {
    user_id?: true;
    username?: true;
    age?: true;
    sex?: true;
    job?: true;
    birthday?: true;
    family_structure?: true;
    current_address?: true;
    phone?: true;
    email?: true;
    mail_acceptance?: true;
    dm_acceptance?: true;
    customer_status?: true;
    subscription_plan_id?: true;
    subscription_status?: true;
  };

  export type UsersCountAggregateInputType = {
    user_id?: true;
    username?: true;
    age?: true;
    sex?: true;
    job?: true;
    birthday?: true;
    family_structure?: true;
    current_address?: true;
    phone?: true;
    email?: true;
    mail_acceptance?: true;
    dm_acceptance?: true;
    customer_status?: true;
    subscription_plan_id?: true;
    subscription_status?: true;
    _all?: true;
  };

  export type UsersAggregateArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UsersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UsersAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UsersSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UsersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UsersMaxAggregateInputType;
  };

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>;
  };

  export type usersGroupByArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput;
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[];
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum;
    having?: usersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
  };

  export type UsersGroupByOutputType = {
    user_id: number;
    username: string;
    age: number | null;
    sex: string | null;
    job: string | null;
    birthday: string | null;
    family_structure: string | null;
    current_address: string | null;
    phone: string | null;
    email: string | null;
    mail_acceptance: string | null;
    dm_acceptance: string | null;
    customer_status: string | null;
    subscription_plan_id: number | null;
    subscription_status: string | null;
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
  };

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UsersGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
          : GetScalarType<T[P], UsersGroupByOutputType[P]>;
      }
    >
  >;

  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      user_id?: boolean;
      username?: boolean;
      age?: boolean;
      sex?: boolean;
      job?: boolean;
      birthday?: boolean;
      family_structure?: boolean;
      current_address?: boolean;
      phone?: boolean;
      email?: boolean;
      mail_acceptance?: boolean;
      dm_acceptance?: boolean;
      customer_status?: boolean;
      subscription_plan_id?: boolean;
      subscription_status?: boolean;
    },
    ExtArgs["result"]["users"]
  >;

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        user_id?: boolean;
        username?: boolean;
        age?: boolean;
        sex?: boolean;
        job?: boolean;
        birthday?: boolean;
        family_structure?: boolean;
        current_address?: boolean;
        phone?: boolean;
        email?: boolean;
        mail_acceptance?: boolean;
        dm_acceptance?: boolean;
        customer_status?: boolean;
        subscription_plan_id?: boolean;
        subscription_status?: boolean;
      },
      ExtArgs["result"]["users"]
    >;

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        user_id?: boolean;
        username?: boolean;
        age?: boolean;
        sex?: boolean;
        job?: boolean;
        birthday?: boolean;
        family_structure?: boolean;
        current_address?: boolean;
        phone?: boolean;
        email?: boolean;
        mail_acceptance?: boolean;
        dm_acceptance?: boolean;
        customer_status?: boolean;
        subscription_plan_id?: boolean;
        subscription_status?: boolean;
      },
      ExtArgs["result"]["users"]
    >;

  export type usersSelectScalar = {
    user_id?: boolean;
    username?: boolean;
    age?: boolean;
    sex?: boolean;
    job?: boolean;
    birthday?: boolean;
    family_structure?: boolean;
    current_address?: boolean;
    phone?: boolean;
    email?: boolean;
    mail_acceptance?: boolean;
    dm_acceptance?: boolean;
    customer_status?: boolean;
    subscription_plan_id?: boolean;
    subscription_status?: boolean;
  };

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
    | "user_id"
    | "username"
    | "age"
    | "sex"
    | "job"
    | "birthday"
    | "family_structure"
    | "current_address"
    | "phone"
    | "email"
    | "mail_acceptance"
    | "dm_acceptance"
    | "customer_status"
    | "subscription_plan_id"
    | "subscription_status",
    ExtArgs["result"]["users"]
  >;

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users";
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        user_id: number;
        username: string;
        age: number | null;
        sex: string | null;
        job: string | null;
        birthday: string | null;
        family_structure: string | null;
        current_address: string | null;
        phone: string | null;
        email: string | null;
        mail_acceptance: string | null;
        dm_acceptance: string | null;
        customer_status: string | null;
        subscription_plan_id: number | null;
        subscription_status: string | null;
      },
      ExtArgs["result"]["users"]
    >;
    composites: {};
  };

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<
    Prisma.$usersPayload,
    S
  >;

  type usersCountArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    usersFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: UsersCountAggregateInputType | true;
  };

  export interface usersDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["users"];
      meta: { name: "users" };
    };
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<
      $Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(
      args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<
      $Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<
      $Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<
      $Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     *
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     *
     */
    findMany<T extends usersFindManyArgs>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     *
     */
    create<T extends usersCreateArgs>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<
      $Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends usersCreateManyArgs>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(
      args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>
    >;

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     *
     */
    delete<T extends usersDeleteArgs>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<
      $Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends usersUpdateArgs>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<
      $Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends usersDeleteManyArgs>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends usersUpdateManyArgs>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(
      args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>
    >;

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<
      $Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UsersCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UsersAggregateArgs>(
      args: Subset<T, UsersAggregateArgs>
    ): Prisma.PrismaPromise<GetUsersAggregateType<T>>;

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs["orderBy"] }
        : { orderBy?: usersGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the users model
     */
    readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<
    T,
    _Null = never,
    _ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    _GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", "Int">;
    readonly username: FieldRef<"users", "String">;
    readonly age: FieldRef<"users", "Int">;
    readonly sex: FieldRef<"users", "String">;
    readonly job: FieldRef<"users", "String">;
    readonly birthday: FieldRef<"users", "String">;
    readonly family_structure: FieldRef<"users", "String">;
    readonly current_address: FieldRef<"users", "String">;
    readonly phone: FieldRef<"users", "String">;
    readonly email: FieldRef<"users", "String">;
    readonly mail_acceptance: FieldRef<"users", "String">;
    readonly dm_acceptance: FieldRef<"users", "String">;
    readonly customer_status: FieldRef<"users", "String">;
    readonly subscription_plan_id: FieldRef<"users", "Int">;
    readonly subscription_status: FieldRef<"users", "String">;
  }

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput;
  };

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput;
  };

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>;
  };

  /**
   * users createMany
   */
  export type usersCreateManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>;
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput;
  };

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: usersWhereInput;
    /**
     * Limit how many users to update.
     */
    limit?: number;
  };

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: usersWhereInput;
    /**
     * Limit how many users to update.
     */
    limit?: number;
  };

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput;
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>;
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>;
  };

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput;
  };

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<_ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput;
    /**
     * Limit how many users to delete.
     */
    limit?: number;
  };

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CategoriesScalarFieldEnum: {
    category_id: "category_id";
    name: "name";
    description: "description";
    parent_category_id: "parent_category_id";
    created_at: "created_at";
    updated_at: "updated_at";
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum];

  export const Game_productsScalarFieldEnum: {
    product_id: "product_id";
    category_id: "category_id";
    name: "name";
    description: "description";
    price: "price";
    release_date: "release_date";
    developer: "developer";
    publisher: "publisher";
    platforms: "platforms";
    features: "features";
    genre: "genre";
    included_addons: "included_addons";
    cross_platform_play: "cross_platform_play";
    related_games: "related_games";
    additional_contents: "additional_contents";
    tech_description: "tech_description";
    tech_description_raw: "tech_description_raw";
    product_images: "product_images";
    gallery_images: "gallery_images";
    include_plan_id: "include_plan_id";
  };

  export type Game_productsScalarFieldEnum =
    (typeof Game_productsScalarFieldEnum)[keyof typeof Game_productsScalarFieldEnum];

  export const InventoryScalarFieldEnum: {
    inventory_id: "inventory_id";
    product_id: "product_id";
    stock_quantity: "stock_quantity";
    stock_status: "stock_status";
    warehouse_location: "warehouse_location";
    last_updated: "last_updated";
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum];

  export const Order_detailsScalarFieldEnum: {
    order_detail_id: "order_detail_id";
    order_id: "order_id";
    product_id: "product_id";
    quantity: "quantity";
    price_per_unit: "price_per_unit";
    total_amount: "total_amount";
  };

  export type Order_detailsScalarFieldEnum =
    (typeof Order_detailsScalarFieldEnum)[keyof typeof Order_detailsScalarFieldEnum];

  export const OrdersScalarFieldEnum: {
    order_id: "order_id";
    customer_id: "customer_id";
    order_date: "order_date";
    total_amount: "total_amount";
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum];

  export const ProductsScalarFieldEnum: {
    product_id: "product_id";
    category_id: "category_id";
    name: "name";
    description: "description";
    price: "price";
    sku: "sku";
    weight: "weight";
    dimensions: "dimensions";
    created_at: "created_at";
    updated_at: "updated_at";
    tech_description: "tech_description";
    product_images: "product_images";
    tech_description_raw: "tech_description_raw";
    model_number: "model_number";
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum];

  export const Shipping_statusScalarFieldEnum: {
    order_id: "order_id";
    user_id: "user_id";
    product_id: "product_id";
    order_date: "order_date";
    shipping_status: "shipping_status";
    shipping_date: "shipping_date";
    delivery_date: "delivery_date";
  };

  export type Shipping_statusScalarFieldEnum =
    (typeof Shipping_statusScalarFieldEnum)[keyof typeof Shipping_statusScalarFieldEnum];

  export const Subscription_plansScalarFieldEnum: {
    plan_id: "plan_id";
    plan_name: "plan_name";
    price: "price";
  };

  export type Subscription_plansScalarFieldEnum =
    (typeof Subscription_plansScalarFieldEnum)[keyof typeof Subscription_plansScalarFieldEnum];

  export const UsersScalarFieldEnum: {
    user_id: "user_id";
    username: "username";
    age: "age";
    sex: "sex";
    job: "job";
    birthday: "birthday";
    family_structure: "family_structure";
    current_address: "current_address";
    phone: "phone";
    email: "email";
    mail_acceptance: "mail_acceptance";
    dm_acceptance: "dm_acceptance";
    customer_status: "customer_status";
    subscription_plan_id: "subscription_plan_id";
    subscription_status: "subscription_status";
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];

  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull;
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Int">;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Int[]">;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "String">;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "String[]">;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "DateTime">;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "DateTime[]">;

  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Decimal">;

  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Decimal[]">;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Boolean">;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Json">;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "QueryMode">;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Float">;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Float[]">;

  /**
   * Deep Input Types
   */

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[];
    OR?: categoriesWhereInput[];
    NOT?: categoriesWhereInput | categoriesWhereInput[];
    category_id?: IntFilter<"categories"> | number;
    name?: StringFilter<"categories"> | string;
    description?: StringNullableFilter<"categories"> | string | null;
    parent_category_id?: IntNullableFilter<"categories"> | number | null;
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null;
    updated_at?: DateTimeNullableFilter<"categories"> | Date | string | null;
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null;
    other_categories?: CategoriesListRelationFilter;
    products?: ProductsListRelationFilter;
  };

  export type categoriesOrderByWithRelationInput = {
    category_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    parent_category_id?: SortOrderInput | SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    categories?: categoriesOrderByWithRelationInput;
    other_categories?: categoriesOrderByRelationAggregateInput;
    products?: productsOrderByRelationAggregateInput;
  };

  export type categoriesWhereUniqueInput = Prisma.AtLeast<
    {
      category_id?: number;
      name?: string;
      AND?: categoriesWhereInput | categoriesWhereInput[];
      OR?: categoriesWhereInput[];
      NOT?: categoriesWhereInput | categoriesWhereInput[];
      description?: StringNullableFilter<"categories"> | string | null;
      parent_category_id?: IntNullableFilter<"categories"> | number | null;
      created_at?: DateTimeNullableFilter<"categories"> | Date | string | null;
      updated_at?: DateTimeNullableFilter<"categories"> | Date | string | null;
      categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null;
      other_categories?: CategoriesListRelationFilter;
      products?: ProductsListRelationFilter;
    },
    "category_id" | "name"
  >;

  export type categoriesOrderByWithAggregationInput = {
    category_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    parent_category_id?: SortOrderInput | SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    _count?: categoriesCountOrderByAggregateInput;
    _avg?: categoriesAvgOrderByAggregateInput;
    _max?: categoriesMaxOrderByAggregateInput;
    _min?: categoriesMinOrderByAggregateInput;
    _sum?: categoriesSumOrderByAggregateInput;
  };

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[];
    OR?: categoriesScalarWhereWithAggregatesInput[];
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[];
    category_id?: IntWithAggregatesFilter<"categories"> | number;
    name?: StringWithAggregatesFilter<"categories"> | string;
    description?: StringNullableWithAggregatesFilter<"categories"> | string | null;
    parent_category_id?: IntNullableWithAggregatesFilter<"categories"> | number | null;
    created_at?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null;
    updated_at?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null;
  };

  export type game_productsWhereInput = {
    AND?: game_productsWhereInput | game_productsWhereInput[];
    OR?: game_productsWhereInput[];
    NOT?: game_productsWhereInput | game_productsWhereInput[];
    product_id?: IntFilter<"game_products"> | number;
    category_id?: IntFilter<"game_products"> | number;
    name?: StringFilter<"game_products"> | string;
    description?: StringFilter<"game_products"> | string;
    price?: DecimalFilter<"game_products"> | Decimal | DecimalJsLike | number | string;
    release_date?: DateTimeNullableFilter<"game_products"> | Date | string | null;
    developer?: StringNullableFilter<"game_products"> | string | null;
    publisher?: StringNullableFilter<"game_products"> | string | null;
    platforms?: StringNullableListFilter<"game_products">;
    features?: StringNullableListFilter<"game_products">;
    genre?: StringNullableListFilter<"game_products">;
    included_addons?: StringNullableListFilter<"game_products">;
    cross_platform_play?: BoolFilter<"game_products"> | boolean;
    related_games?: JsonNullableFilter<"game_products">;
    additional_contents?: JsonNullableFilter<"game_products">;
    tech_description?: JsonFilter<"game_products">;
    tech_description_raw?: StringFilter<"game_products"> | string;
    product_images?: JsonNullableFilter<"game_products">;
    gallery_images?: StringNullableListFilter<"game_products">;
    include_plan_id?: IntNullableFilter<"game_products"> | number | null;
  };

  export type game_productsOrderByWithRelationInput = {
    product_id?: SortOrder;
    category_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    release_date?: SortOrderInput | SortOrder;
    developer?: SortOrderInput | SortOrder;
    publisher?: SortOrderInput | SortOrder;
    platforms?: SortOrder;
    features?: SortOrder;
    genre?: SortOrder;
    included_addons?: SortOrder;
    cross_platform_play?: SortOrder;
    related_games?: SortOrderInput | SortOrder;
    additional_contents?: SortOrderInput | SortOrder;
    tech_description?: SortOrder;
    tech_description_raw?: SortOrder;
    product_images?: SortOrderInput | SortOrder;
    gallery_images?: SortOrder;
    include_plan_id?: SortOrderInput | SortOrder;
  };

  export type game_productsWhereUniqueInput = Prisma.AtLeast<
    {
      product_id?: number;
      AND?: game_productsWhereInput | game_productsWhereInput[];
      OR?: game_productsWhereInput[];
      NOT?: game_productsWhereInput | game_productsWhereInput[];
      category_id?: IntFilter<"game_products"> | number;
      name?: StringFilter<"game_products"> | string;
      description?: StringFilter<"game_products"> | string;
      price?: DecimalFilter<"game_products"> | Decimal | DecimalJsLike | number | string;
      release_date?: DateTimeNullableFilter<"game_products"> | Date | string | null;
      developer?: StringNullableFilter<"game_products"> | string | null;
      publisher?: StringNullableFilter<"game_products"> | string | null;
      platforms?: StringNullableListFilter<"game_products">;
      features?: StringNullableListFilter<"game_products">;
      genre?: StringNullableListFilter<"game_products">;
      included_addons?: StringNullableListFilter<"game_products">;
      cross_platform_play?: BoolFilter<"game_products"> | boolean;
      related_games?: JsonNullableFilter<"game_products">;
      additional_contents?: JsonNullableFilter<"game_products">;
      tech_description?: JsonFilter<"game_products">;
      tech_description_raw?: StringFilter<"game_products"> | string;
      product_images?: JsonNullableFilter<"game_products">;
      gallery_images?: StringNullableListFilter<"game_products">;
      include_plan_id?: IntNullableFilter<"game_products"> | number | null;
    },
    "product_id"
  >;

  export type game_productsOrderByWithAggregationInput = {
    product_id?: SortOrder;
    category_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    release_date?: SortOrderInput | SortOrder;
    developer?: SortOrderInput | SortOrder;
    publisher?: SortOrderInput | SortOrder;
    platforms?: SortOrder;
    features?: SortOrder;
    genre?: SortOrder;
    included_addons?: SortOrder;
    cross_platform_play?: SortOrder;
    related_games?: SortOrderInput | SortOrder;
    additional_contents?: SortOrderInput | SortOrder;
    tech_description?: SortOrder;
    tech_description_raw?: SortOrder;
    product_images?: SortOrderInput | SortOrder;
    gallery_images?: SortOrder;
    include_plan_id?: SortOrderInput | SortOrder;
    _count?: game_productsCountOrderByAggregateInput;
    _avg?: game_productsAvgOrderByAggregateInput;
    _max?: game_productsMaxOrderByAggregateInput;
    _min?: game_productsMinOrderByAggregateInput;
    _sum?: game_productsSumOrderByAggregateInput;
  };

  export type game_productsScalarWhereWithAggregatesInput = {
    AND?: game_productsScalarWhereWithAggregatesInput | game_productsScalarWhereWithAggregatesInput[];
    OR?: game_productsScalarWhereWithAggregatesInput[];
    NOT?: game_productsScalarWhereWithAggregatesInput | game_productsScalarWhereWithAggregatesInput[];
    product_id?: IntWithAggregatesFilter<"game_products"> | number;
    category_id?: IntWithAggregatesFilter<"game_products"> | number;
    name?: StringWithAggregatesFilter<"game_products"> | string;
    description?: StringWithAggregatesFilter<"game_products"> | string;
    price?: DecimalWithAggregatesFilter<"game_products"> | Decimal | DecimalJsLike | number | string;
    release_date?: DateTimeNullableWithAggregatesFilter<"game_products"> | Date | string | null;
    developer?: StringNullableWithAggregatesFilter<"game_products"> | string | null;
    publisher?: StringNullableWithAggregatesFilter<"game_products"> | string | null;
    platforms?: StringNullableListFilter<"game_products">;
    features?: StringNullableListFilter<"game_products">;
    genre?: StringNullableListFilter<"game_products">;
    included_addons?: StringNullableListFilter<"game_products">;
    cross_platform_play?: BoolWithAggregatesFilter<"game_products"> | boolean;
    related_games?: JsonNullableWithAggregatesFilter<"game_products">;
    additional_contents?: JsonNullableWithAggregatesFilter<"game_products">;
    tech_description?: JsonWithAggregatesFilter<"game_products">;
    tech_description_raw?: StringWithAggregatesFilter<"game_products"> | string;
    product_images?: JsonNullableWithAggregatesFilter<"game_products">;
    gallery_images?: StringNullableListFilter<"game_products">;
    include_plan_id?: IntNullableWithAggregatesFilter<"game_products"> | number | null;
  };

  export type inventoryWhereInput = {
    AND?: inventoryWhereInput | inventoryWhereInput[];
    OR?: inventoryWhereInput[];
    NOT?: inventoryWhereInput | inventoryWhereInput[];
    inventory_id?: IntFilter<"inventory"> | number;
    product_id?: IntNullableFilter<"inventory"> | number | null;
    stock_quantity?: IntFilter<"inventory"> | number;
    stock_status?: StringNullableFilter<"inventory"> | string | null;
    warehouse_location?: StringNullableFilter<"inventory"> | string | null;
    last_updated?: DateTimeNullableFilter<"inventory"> | Date | string | null;
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null;
  };

  export type inventoryOrderByWithRelationInput = {
    inventory_id?: SortOrder;
    product_id?: SortOrderInput | SortOrder;
    stock_quantity?: SortOrder;
    stock_status?: SortOrderInput | SortOrder;
    warehouse_location?: SortOrderInput | SortOrder;
    last_updated?: SortOrderInput | SortOrder;
    products?: productsOrderByWithRelationInput;
  };

  export type inventoryWhereUniqueInput = Prisma.AtLeast<
    {
      inventory_id?: number;
      AND?: inventoryWhereInput | inventoryWhereInput[];
      OR?: inventoryWhereInput[];
      NOT?: inventoryWhereInput | inventoryWhereInput[];
      product_id?: IntNullableFilter<"inventory"> | number | null;
      stock_quantity?: IntFilter<"inventory"> | number;
      stock_status?: StringNullableFilter<"inventory"> | string | null;
      warehouse_location?: StringNullableFilter<"inventory"> | string | null;
      last_updated?: DateTimeNullableFilter<"inventory"> | Date | string | null;
      products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null;
    },
    "inventory_id"
  >;

  export type inventoryOrderByWithAggregationInput = {
    inventory_id?: SortOrder;
    product_id?: SortOrderInput | SortOrder;
    stock_quantity?: SortOrder;
    stock_status?: SortOrderInput | SortOrder;
    warehouse_location?: SortOrderInput | SortOrder;
    last_updated?: SortOrderInput | SortOrder;
    _count?: inventoryCountOrderByAggregateInput;
    _avg?: inventoryAvgOrderByAggregateInput;
    _max?: inventoryMaxOrderByAggregateInput;
    _min?: inventoryMinOrderByAggregateInput;
    _sum?: inventorySumOrderByAggregateInput;
  };

  export type inventoryScalarWhereWithAggregatesInput = {
    AND?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[];
    OR?: inventoryScalarWhereWithAggregatesInput[];
    NOT?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[];
    inventory_id?: IntWithAggregatesFilter<"inventory"> | number;
    product_id?: IntNullableWithAggregatesFilter<"inventory"> | number | null;
    stock_quantity?: IntWithAggregatesFilter<"inventory"> | number;
    stock_status?: StringNullableWithAggregatesFilter<"inventory"> | string | null;
    warehouse_location?: StringNullableWithAggregatesFilter<"inventory"> | string | null;
    last_updated?: DateTimeNullableWithAggregatesFilter<"inventory"> | Date | string | null;
  };

  export type order_detailsWhereInput = {
    AND?: order_detailsWhereInput | order_detailsWhereInput[];
    OR?: order_detailsWhereInput[];
    NOT?: order_detailsWhereInput | order_detailsWhereInput[];
    order_detail_id?: IntFilter<"order_details"> | number;
    order_id?: IntNullableFilter<"order_details"> | number | null;
    product_id?: StringFilter<"order_details"> | string;
    quantity?: IntFilter<"order_details"> | number;
    price_per_unit?: DecimalFilter<"order_details"> | Decimal | DecimalJsLike | number | string;
    total_amount?: DecimalFilter<"order_details"> | Decimal | DecimalJsLike | number | string;
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null;
  };

  export type order_detailsOrderByWithRelationInput = {
    order_detail_id?: SortOrder;
    order_id?: SortOrderInput | SortOrder;
    product_id?: SortOrder;
    quantity?: SortOrder;
    price_per_unit?: SortOrder;
    total_amount?: SortOrder;
    orders?: ordersOrderByWithRelationInput;
  };

  export type order_detailsWhereUniqueInput = Prisma.AtLeast<
    {
      order_detail_id?: number;
      AND?: order_detailsWhereInput | order_detailsWhereInput[];
      OR?: order_detailsWhereInput[];
      NOT?: order_detailsWhereInput | order_detailsWhereInput[];
      order_id?: IntNullableFilter<"order_details"> | number | null;
      product_id?: StringFilter<"order_details"> | string;
      quantity?: IntFilter<"order_details"> | number;
      price_per_unit?: DecimalFilter<"order_details"> | Decimal | DecimalJsLike | number | string;
      total_amount?: DecimalFilter<"order_details"> | Decimal | DecimalJsLike | number | string;
      orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null;
    },
    "order_detail_id"
  >;

  export type order_detailsOrderByWithAggregationInput = {
    order_detail_id?: SortOrder;
    order_id?: SortOrderInput | SortOrder;
    product_id?: SortOrder;
    quantity?: SortOrder;
    price_per_unit?: SortOrder;
    total_amount?: SortOrder;
    _count?: order_detailsCountOrderByAggregateInput;
    _avg?: order_detailsAvgOrderByAggregateInput;
    _max?: order_detailsMaxOrderByAggregateInput;
    _min?: order_detailsMinOrderByAggregateInput;
    _sum?: order_detailsSumOrderByAggregateInput;
  };

  export type order_detailsScalarWhereWithAggregatesInput = {
    AND?: order_detailsScalarWhereWithAggregatesInput | order_detailsScalarWhereWithAggregatesInput[];
    OR?: order_detailsScalarWhereWithAggregatesInput[];
    NOT?: order_detailsScalarWhereWithAggregatesInput | order_detailsScalarWhereWithAggregatesInput[];
    order_detail_id?: IntWithAggregatesFilter<"order_details"> | number;
    order_id?: IntNullableWithAggregatesFilter<"order_details"> | number | null;
    product_id?: StringWithAggregatesFilter<"order_details"> | string;
    quantity?: IntWithAggregatesFilter<"order_details"> | number;
    price_per_unit?: DecimalWithAggregatesFilter<"order_details"> | Decimal | DecimalJsLike | number | string;
    total_amount?: DecimalWithAggregatesFilter<"order_details"> | Decimal | DecimalJsLike | number | string;
  };

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[];
    OR?: ordersWhereInput[];
    NOT?: ordersWhereInput | ordersWhereInput[];
    order_id?: IntFilter<"orders"> | number;
    customer_id?: StringFilter<"orders"> | string;
    order_date?: DateTimeFilter<"orders"> | Date | string;
    total_amount?: DecimalNullableFilter<"orders"> | Decimal | DecimalJsLike | number | string | null;
    order_details?: Order_detailsListRelationFilter;
  };

  export type ordersOrderByWithRelationInput = {
    order_id?: SortOrder;
    customer_id?: SortOrder;
    order_date?: SortOrder;
    total_amount?: SortOrderInput | SortOrder;
    order_details?: order_detailsOrderByRelationAggregateInput;
  };

  export type ordersWhereUniqueInput = Prisma.AtLeast<
    {
      order_id?: number;
      AND?: ordersWhereInput | ordersWhereInput[];
      OR?: ordersWhereInput[];
      NOT?: ordersWhereInput | ordersWhereInput[];
      customer_id?: StringFilter<"orders"> | string;
      order_date?: DateTimeFilter<"orders"> | Date | string;
      total_amount?: DecimalNullableFilter<"orders"> | Decimal | DecimalJsLike | number | string | null;
      order_details?: Order_detailsListRelationFilter;
    },
    "order_id"
  >;

  export type ordersOrderByWithAggregationInput = {
    order_id?: SortOrder;
    customer_id?: SortOrder;
    order_date?: SortOrder;
    total_amount?: SortOrderInput | SortOrder;
    _count?: ordersCountOrderByAggregateInput;
    _avg?: ordersAvgOrderByAggregateInput;
    _max?: ordersMaxOrderByAggregateInput;
    _min?: ordersMinOrderByAggregateInput;
    _sum?: ordersSumOrderByAggregateInput;
  };

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[];
    OR?: ordersScalarWhereWithAggregatesInput[];
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[];
    order_id?: IntWithAggregatesFilter<"orders"> | number;
    customer_id?: StringWithAggregatesFilter<"orders"> | string;
    order_date?: DateTimeWithAggregatesFilter<"orders"> | Date | string;
    total_amount?: DecimalNullableWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string | null;
  };

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[];
    OR?: productsWhereInput[];
    NOT?: productsWhereInput | productsWhereInput[];
    product_id?: IntFilter<"products"> | number;
    category_id?: IntNullableFilter<"products"> | number | null;
    name?: StringFilter<"products"> | string;
    description?: StringNullableFilter<"products"> | string | null;
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string;
    sku?: StringFilter<"products"> | string;
    weight?: DecimalNullableFilter<"products"> | Decimal | DecimalJsLike | number | string | null;
    dimensions?: StringNullableFilter<"products"> | string | null;
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null;
    updated_at?: DateTimeNullableFilter<"products"> | Date | string | null;
    tech_description?: JsonNullableFilter<"products">;
    product_images?: JsonNullableFilter<"products">;
    tech_description_raw?: StringNullableFilter<"products"> | string | null;
    model_number?: StringNullableFilter<"products"> | string | null;
    inventory?: InventoryListRelationFilter;
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null;
    shipping_status?: Shipping_statusListRelationFilter;
  };

  export type productsOrderByWithRelationInput = {
    product_id?: SortOrder;
    category_id?: SortOrderInput | SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrder;
    sku?: SortOrder;
    weight?: SortOrderInput | SortOrder;
    dimensions?: SortOrderInput | SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    tech_description?: SortOrderInput | SortOrder;
    product_images?: SortOrderInput | SortOrder;
    tech_description_raw?: SortOrderInput | SortOrder;
    model_number?: SortOrderInput | SortOrder;
    inventory?: inventoryOrderByRelationAggregateInput;
    categories?: categoriesOrderByWithRelationInput;
    shipping_status?: shipping_statusOrderByRelationAggregateInput;
  };

  export type productsWhereUniqueInput = Prisma.AtLeast<
    {
      product_id?: number;
      sku_name?: productsSkuNameCompoundUniqueInput;
      AND?: productsWhereInput | productsWhereInput[];
      OR?: productsWhereInput[];
      NOT?: productsWhereInput | productsWhereInput[];
      category_id?: IntNullableFilter<"products"> | number | null;
      name?: StringFilter<"products"> | string;
      description?: StringNullableFilter<"products"> | string | null;
      price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string;
      sku?: StringFilter<"products"> | string;
      weight?: DecimalNullableFilter<"products"> | Decimal | DecimalJsLike | number | string | null;
      dimensions?: StringNullableFilter<"products"> | string | null;
      created_at?: DateTimeNullableFilter<"products"> | Date | string | null;
      updated_at?: DateTimeNullableFilter<"products"> | Date | string | null;
      tech_description?: JsonNullableFilter<"products">;
      product_images?: JsonNullableFilter<"products">;
      tech_description_raw?: StringNullableFilter<"products"> | string | null;
      model_number?: StringNullableFilter<"products"> | string | null;
      inventory?: InventoryListRelationFilter;
      categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null;
      shipping_status?: Shipping_statusListRelationFilter;
    },
    "product_id" | "sku_name"
  >;

  export type productsOrderByWithAggregationInput = {
    product_id?: SortOrder;
    category_id?: SortOrderInput | SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrder;
    sku?: SortOrder;
    weight?: SortOrderInput | SortOrder;
    dimensions?: SortOrderInput | SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    tech_description?: SortOrderInput | SortOrder;
    product_images?: SortOrderInput | SortOrder;
    tech_description_raw?: SortOrderInput | SortOrder;
    model_number?: SortOrderInput | SortOrder;
    _count?: productsCountOrderByAggregateInput;
    _avg?: productsAvgOrderByAggregateInput;
    _max?: productsMaxOrderByAggregateInput;
    _min?: productsMinOrderByAggregateInput;
    _sum?: productsSumOrderByAggregateInput;
  };

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[];
    OR?: productsScalarWhereWithAggregatesInput[];
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[];
    product_id?: IntWithAggregatesFilter<"products"> | number;
    category_id?: IntNullableWithAggregatesFilter<"products"> | number | null;
    name?: StringWithAggregatesFilter<"products"> | string;
    description?: StringNullableWithAggregatesFilter<"products"> | string | null;
    price?: DecimalWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string;
    sku?: StringWithAggregatesFilter<"products"> | string;
    weight?: DecimalNullableWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string | null;
    dimensions?: StringNullableWithAggregatesFilter<"products"> | string | null;
    created_at?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null;
    updated_at?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null;
    tech_description?: JsonNullableWithAggregatesFilter<"products">;
    product_images?: JsonNullableWithAggregatesFilter<"products">;
    tech_description_raw?: StringNullableWithAggregatesFilter<"products"> | string | null;
    model_number?: StringNullableWithAggregatesFilter<"products"> | string | null;
  };

  export type shipping_statusWhereInput = {
    AND?: shipping_statusWhereInput | shipping_statusWhereInput[];
    OR?: shipping_statusWhereInput[];
    NOT?: shipping_statusWhereInput | shipping_statusWhereInput[];
    order_id?: IntFilter<"shipping_status"> | number;
    user_id?: IntFilter<"shipping_status"> | number;
    product_id?: IntFilter<"shipping_status"> | number;
    order_date?: DateTimeNullableFilter<"shipping_status"> | Date | string | null;
    shipping_status?: StringNullableFilter<"shipping_status"> | string | null;
    shipping_date?: DateTimeNullableFilter<"shipping_status"> | Date | string | null;
    delivery_date?: DateTimeNullableFilter<"shipping_status"> | Date | string | null;
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>;
  };

  export type shipping_statusOrderByWithRelationInput = {
    order_id?: SortOrder;
    user_id?: SortOrder;
    product_id?: SortOrder;
    order_date?: SortOrderInput | SortOrder;
    shipping_status?: SortOrderInput | SortOrder;
    shipping_date?: SortOrderInput | SortOrder;
    delivery_date?: SortOrderInput | SortOrder;
    products?: productsOrderByWithRelationInput;
  };

  export type shipping_statusWhereUniqueInput = Prisma.AtLeast<
    {
      order_id?: number;
      AND?: shipping_statusWhereInput | shipping_statusWhereInput[];
      OR?: shipping_statusWhereInput[];
      NOT?: shipping_statusWhereInput | shipping_statusWhereInput[];
      user_id?: IntFilter<"shipping_status"> | number;
      product_id?: IntFilter<"shipping_status"> | number;
      order_date?: DateTimeNullableFilter<"shipping_status"> | Date | string | null;
      shipping_status?: StringNullableFilter<"shipping_status"> | string | null;
      shipping_date?: DateTimeNullableFilter<"shipping_status"> | Date | string | null;
      delivery_date?: DateTimeNullableFilter<"shipping_status"> | Date | string | null;
      products?: XOR<ProductsScalarRelationFilter, productsWhereInput>;
    },
    "order_id"
  >;

  export type shipping_statusOrderByWithAggregationInput = {
    order_id?: SortOrder;
    user_id?: SortOrder;
    product_id?: SortOrder;
    order_date?: SortOrderInput | SortOrder;
    shipping_status?: SortOrderInput | SortOrder;
    shipping_date?: SortOrderInput | SortOrder;
    delivery_date?: SortOrderInput | SortOrder;
    _count?: shipping_statusCountOrderByAggregateInput;
    _avg?: shipping_statusAvgOrderByAggregateInput;
    _max?: shipping_statusMaxOrderByAggregateInput;
    _min?: shipping_statusMinOrderByAggregateInput;
    _sum?: shipping_statusSumOrderByAggregateInput;
  };

  export type shipping_statusScalarWhereWithAggregatesInput = {
    AND?: shipping_statusScalarWhereWithAggregatesInput | shipping_statusScalarWhereWithAggregatesInput[];
    OR?: shipping_statusScalarWhereWithAggregatesInput[];
    NOT?: shipping_statusScalarWhereWithAggregatesInput | shipping_statusScalarWhereWithAggregatesInput[];
    order_id?: IntWithAggregatesFilter<"shipping_status"> | number;
    user_id?: IntWithAggregatesFilter<"shipping_status"> | number;
    product_id?: IntWithAggregatesFilter<"shipping_status"> | number;
    order_date?: DateTimeNullableWithAggregatesFilter<"shipping_status"> | Date | string | null;
    shipping_status?: StringNullableWithAggregatesFilter<"shipping_status"> | string | null;
    shipping_date?: DateTimeNullableWithAggregatesFilter<"shipping_status"> | Date | string | null;
    delivery_date?: DateTimeNullableWithAggregatesFilter<"shipping_status"> | Date | string | null;
  };

  export type subscription_plansWhereInput = {
    AND?: subscription_plansWhereInput | subscription_plansWhereInput[];
    OR?: subscription_plansWhereInput[];
    NOT?: subscription_plansWhereInput | subscription_plansWhereInput[];
    plan_id?: IntFilter<"subscription_plans"> | number;
    plan_name?: StringFilter<"subscription_plans"> | string;
    price?: DecimalFilter<"subscription_plans"> | Decimal | DecimalJsLike | number | string;
  };

  export type subscription_plansOrderByWithRelationInput = {
    plan_id?: SortOrder;
    plan_name?: SortOrder;
    price?: SortOrder;
  };

  export type subscription_plansWhereUniqueInput = Prisma.AtLeast<
    {
      plan_id?: number;
      AND?: subscription_plansWhereInput | subscription_plansWhereInput[];
      OR?: subscription_plansWhereInput[];
      NOT?: subscription_plansWhereInput | subscription_plansWhereInput[];
      plan_name?: StringFilter<"subscription_plans"> | string;
      price?: DecimalFilter<"subscription_plans"> | Decimal | DecimalJsLike | number | string;
    },
    "plan_id"
  >;

  export type subscription_plansOrderByWithAggregationInput = {
    plan_id?: SortOrder;
    plan_name?: SortOrder;
    price?: SortOrder;
    _count?: subscription_plansCountOrderByAggregateInput;
    _avg?: subscription_plansAvgOrderByAggregateInput;
    _max?: subscription_plansMaxOrderByAggregateInput;
    _min?: subscription_plansMinOrderByAggregateInput;
    _sum?: subscription_plansSumOrderByAggregateInput;
  };

  export type subscription_plansScalarWhereWithAggregatesInput = {
    AND?: subscription_plansScalarWhereWithAggregatesInput | subscription_plansScalarWhereWithAggregatesInput[];
    OR?: subscription_plansScalarWhereWithAggregatesInput[];
    NOT?: subscription_plansScalarWhereWithAggregatesInput | subscription_plansScalarWhereWithAggregatesInput[];
    plan_id?: IntWithAggregatesFilter<"subscription_plans"> | number;
    plan_name?: StringWithAggregatesFilter<"subscription_plans"> | string;
    price?: DecimalWithAggregatesFilter<"subscription_plans"> | Decimal | DecimalJsLike | number | string;
  };

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[];
    OR?: usersWhereInput[];
    NOT?: usersWhereInput | usersWhereInput[];
    user_id?: IntFilter<"users"> | number;
    username?: StringFilter<"users"> | string;
    age?: IntNullableFilter<"users"> | number | null;
    sex?: StringNullableFilter<"users"> | string | null;
    job?: StringNullableFilter<"users"> | string | null;
    birthday?: StringNullableFilter<"users"> | string | null;
    family_structure?: StringNullableFilter<"users"> | string | null;
    current_address?: StringNullableFilter<"users"> | string | null;
    phone?: StringNullableFilter<"users"> | string | null;
    email?: StringNullableFilter<"users"> | string | null;
    mail_acceptance?: StringNullableFilter<"users"> | string | null;
    dm_acceptance?: StringNullableFilter<"users"> | string | null;
    customer_status?: StringNullableFilter<"users"> | string | null;
    subscription_plan_id?: IntNullableFilter<"users"> | number | null;
    subscription_status?: StringNullableFilter<"users"> | string | null;
  };

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder;
    username?: SortOrder;
    age?: SortOrderInput | SortOrder;
    sex?: SortOrderInput | SortOrder;
    job?: SortOrderInput | SortOrder;
    birthday?: SortOrderInput | SortOrder;
    family_structure?: SortOrderInput | SortOrder;
    current_address?: SortOrderInput | SortOrder;
    phone?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    mail_acceptance?: SortOrderInput | SortOrder;
    dm_acceptance?: SortOrderInput | SortOrder;
    customer_status?: SortOrderInput | SortOrder;
    subscription_plan_id?: SortOrderInput | SortOrder;
    subscription_status?: SortOrderInput | SortOrder;
  };

  export type usersWhereUniqueInput = Prisma.AtLeast<
    {
      user_id?: number;
      AND?: usersWhereInput | usersWhereInput[];
      OR?: usersWhereInput[];
      NOT?: usersWhereInput | usersWhereInput[];
      username?: StringFilter<"users"> | string;
      age?: IntNullableFilter<"users"> | number | null;
      sex?: StringNullableFilter<"users"> | string | null;
      job?: StringNullableFilter<"users"> | string | null;
      birthday?: StringNullableFilter<"users"> | string | null;
      family_structure?: StringNullableFilter<"users"> | string | null;
      current_address?: StringNullableFilter<"users"> | string | null;
      phone?: StringNullableFilter<"users"> | string | null;
      email?: StringNullableFilter<"users"> | string | null;
      mail_acceptance?: StringNullableFilter<"users"> | string | null;
      dm_acceptance?: StringNullableFilter<"users"> | string | null;
      customer_status?: StringNullableFilter<"users"> | string | null;
      subscription_plan_id?: IntNullableFilter<"users"> | number | null;
      subscription_status?: StringNullableFilter<"users"> | string | null;
    },
    "user_id"
  >;

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder;
    username?: SortOrder;
    age?: SortOrderInput | SortOrder;
    sex?: SortOrderInput | SortOrder;
    job?: SortOrderInput | SortOrder;
    birthday?: SortOrderInput | SortOrder;
    family_structure?: SortOrderInput | SortOrder;
    current_address?: SortOrderInput | SortOrder;
    phone?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    mail_acceptance?: SortOrderInput | SortOrder;
    dm_acceptance?: SortOrderInput | SortOrder;
    customer_status?: SortOrderInput | SortOrder;
    subscription_plan_id?: SortOrderInput | SortOrder;
    subscription_status?: SortOrderInput | SortOrder;
    _count?: usersCountOrderByAggregateInput;
    _avg?: usersAvgOrderByAggregateInput;
    _max?: usersMaxOrderByAggregateInput;
    _min?: usersMinOrderByAggregateInput;
    _sum?: usersSumOrderByAggregateInput;
  };

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[];
    OR?: usersScalarWhereWithAggregatesInput[];
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[];
    user_id?: IntWithAggregatesFilter<"users"> | number;
    username?: StringWithAggregatesFilter<"users"> | string;
    age?: IntNullableWithAggregatesFilter<"users"> | number | null;
    sex?: StringNullableWithAggregatesFilter<"users"> | string | null;
    job?: StringNullableWithAggregatesFilter<"users"> | string | null;
    birthday?: StringNullableWithAggregatesFilter<"users"> | string | null;
    family_structure?: StringNullableWithAggregatesFilter<"users"> | string | null;
    current_address?: StringNullableWithAggregatesFilter<"users"> | string | null;
    phone?: StringNullableWithAggregatesFilter<"users"> | string | null;
    email?: StringNullableWithAggregatesFilter<"users"> | string | null;
    mail_acceptance?: StringNullableWithAggregatesFilter<"users"> | string | null;
    dm_acceptance?: StringNullableWithAggregatesFilter<"users"> | string | null;
    customer_status?: StringNullableWithAggregatesFilter<"users"> | string | null;
    subscription_plan_id?: IntNullableWithAggregatesFilter<"users"> | number | null;
    subscription_status?: StringNullableWithAggregatesFilter<"users"> | string | null;
  };

  export type categoriesCreateInput = {
    name: string;
    description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput;
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput;
    products?: productsCreateNestedManyWithoutCategoriesInput;
  };

  export type categoriesUncheckedCreateInput = {
    category_id?: number;
    name: string;
    description?: string | null;
    parent_category_id?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput;
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput;
  };

  export type categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput;
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput;
    products?: productsUpdateManyWithoutCategoriesNestedInput;
  };

  export type categoriesUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    parent_category_id?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput;
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput;
  };

  export type categoriesCreateManyInput = {
    category_id?: number;
    name: string;
    description?: string | null;
    parent_category_id?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type categoriesUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    parent_category_id?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type game_productsCreateInput = {
    category_id: number;
    name: string;
    description: string;
    price: Decimal | DecimalJsLike | number | string;
    release_date?: Date | string | null;
    developer?: string | null;
    publisher?: string | null;
    platforms?: game_productsCreateplatformsInput | string[];
    features?: game_productsCreatefeaturesInput | string[];
    genre?: game_productsCreategenreInput | string[];
    included_addons?: game_productsCreateincluded_addonsInput | string[];
    cross_platform_play: boolean;
    related_games?: NullableJsonNullValueInput | InputJsonValue;
    additional_contents?: NullableJsonNullValueInput | InputJsonValue;
    tech_description: JsonNullValueInput | InputJsonValue;
    tech_description_raw: string;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    gallery_images?: game_productsCreategallery_imagesInput | string[];
    include_plan_id?: number | null;
  };

  export type game_productsUncheckedCreateInput = {
    product_id?: number;
    category_id: number;
    name: string;
    description: string;
    price: Decimal | DecimalJsLike | number | string;
    release_date?: Date | string | null;
    developer?: string | null;
    publisher?: string | null;
    platforms?: game_productsCreateplatformsInput | string[];
    features?: game_productsCreatefeaturesInput | string[];
    genre?: game_productsCreategenreInput | string[];
    included_addons?: game_productsCreateincluded_addonsInput | string[];
    cross_platform_play: boolean;
    related_games?: NullableJsonNullValueInput | InputJsonValue;
    additional_contents?: NullableJsonNullValueInput | InputJsonValue;
    tech_description: JsonNullValueInput | InputJsonValue;
    tech_description_raw: string;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    gallery_images?: game_productsCreategallery_imagesInput | string[];
    include_plan_id?: number | null;
  };

  export type game_productsUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    developer?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    platforms?: game_productsUpdateplatformsInput | string[];
    features?: game_productsUpdatefeaturesInput | string[];
    genre?: game_productsUpdategenreInput | string[];
    included_addons?: game_productsUpdateincluded_addonsInput | string[];
    cross_platform_play?: BoolFieldUpdateOperationsInput | boolean;
    related_games?: NullableJsonNullValueInput | InputJsonValue;
    additional_contents?: NullableJsonNullValueInput | InputJsonValue;
    tech_description?: JsonNullValueInput | InputJsonValue;
    tech_description_raw?: StringFieldUpdateOperationsInput | string;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    gallery_images?: game_productsUpdategallery_imagesInput | string[];
    include_plan_id?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type game_productsUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number;
    category_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    developer?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    platforms?: game_productsUpdateplatformsInput | string[];
    features?: game_productsUpdatefeaturesInput | string[];
    genre?: game_productsUpdategenreInput | string[];
    included_addons?: game_productsUpdateincluded_addonsInput | string[];
    cross_platform_play?: BoolFieldUpdateOperationsInput | boolean;
    related_games?: NullableJsonNullValueInput | InputJsonValue;
    additional_contents?: NullableJsonNullValueInput | InputJsonValue;
    tech_description?: JsonNullValueInput | InputJsonValue;
    tech_description_raw?: StringFieldUpdateOperationsInput | string;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    gallery_images?: game_productsUpdategallery_imagesInput | string[];
    include_plan_id?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type game_productsCreateManyInput = {
    product_id?: number;
    category_id: number;
    name: string;
    description: string;
    price: Decimal | DecimalJsLike | number | string;
    release_date?: Date | string | null;
    developer?: string | null;
    publisher?: string | null;
    platforms?: game_productsCreateplatformsInput | string[];
    features?: game_productsCreatefeaturesInput | string[];
    genre?: game_productsCreategenreInput | string[];
    included_addons?: game_productsCreateincluded_addonsInput | string[];
    cross_platform_play: boolean;
    related_games?: NullableJsonNullValueInput | InputJsonValue;
    additional_contents?: NullableJsonNullValueInput | InputJsonValue;
    tech_description: JsonNullValueInput | InputJsonValue;
    tech_description_raw: string;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    gallery_images?: game_productsCreategallery_imagesInput | string[];
    include_plan_id?: number | null;
  };

  export type game_productsUpdateManyMutationInput = {
    category_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    developer?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    platforms?: game_productsUpdateplatformsInput | string[];
    features?: game_productsUpdatefeaturesInput | string[];
    genre?: game_productsUpdategenreInput | string[];
    included_addons?: game_productsUpdateincluded_addonsInput | string[];
    cross_platform_play?: BoolFieldUpdateOperationsInput | boolean;
    related_games?: NullableJsonNullValueInput | InputJsonValue;
    additional_contents?: NullableJsonNullValueInput | InputJsonValue;
    tech_description?: JsonNullValueInput | InputJsonValue;
    tech_description_raw?: StringFieldUpdateOperationsInput | string;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    gallery_images?: game_productsUpdategallery_imagesInput | string[];
    include_plan_id?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type game_productsUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number;
    category_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    developer?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    platforms?: game_productsUpdateplatformsInput | string[];
    features?: game_productsUpdatefeaturesInput | string[];
    genre?: game_productsUpdategenreInput | string[];
    included_addons?: game_productsUpdateincluded_addonsInput | string[];
    cross_platform_play?: BoolFieldUpdateOperationsInput | boolean;
    related_games?: NullableJsonNullValueInput | InputJsonValue;
    additional_contents?: NullableJsonNullValueInput | InputJsonValue;
    tech_description?: JsonNullValueInput | InputJsonValue;
    tech_description_raw?: StringFieldUpdateOperationsInput | string;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    gallery_images?: game_productsUpdategallery_imagesInput | string[];
    include_plan_id?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type inventoryCreateInput = {
    stock_quantity: number;
    stock_status?: string | null;
    warehouse_location?: string | null;
    last_updated?: Date | string | null;
    products?: productsCreateNestedOneWithoutInventoryInput;
  };

  export type inventoryUncheckedCreateInput = {
    inventory_id?: number;
    product_id?: number | null;
    stock_quantity: number;
    stock_status?: string | null;
    warehouse_location?: string | null;
    last_updated?: Date | string | null;
  };

  export type inventoryUpdateInput = {
    stock_quantity?: IntFieldUpdateOperationsInput | number;
    stock_status?: NullableStringFieldUpdateOperationsInput | string | null;
    warehouse_location?: NullableStringFieldUpdateOperationsInput | string | null;
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    products?: productsUpdateOneWithoutInventoryNestedInput;
  };

  export type inventoryUncheckedUpdateInput = {
    inventory_id?: IntFieldUpdateOperationsInput | number;
    product_id?: NullableIntFieldUpdateOperationsInput | number | null;
    stock_quantity?: IntFieldUpdateOperationsInput | number;
    stock_status?: NullableStringFieldUpdateOperationsInput | string | null;
    warehouse_location?: NullableStringFieldUpdateOperationsInput | string | null;
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type inventoryCreateManyInput = {
    inventory_id?: number;
    product_id?: number | null;
    stock_quantity: number;
    stock_status?: string | null;
    warehouse_location?: string | null;
    last_updated?: Date | string | null;
  };

  export type inventoryUpdateManyMutationInput = {
    stock_quantity?: IntFieldUpdateOperationsInput | number;
    stock_status?: NullableStringFieldUpdateOperationsInput | string | null;
    warehouse_location?: NullableStringFieldUpdateOperationsInput | string | null;
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type inventoryUncheckedUpdateManyInput = {
    inventory_id?: IntFieldUpdateOperationsInput | number;
    product_id?: NullableIntFieldUpdateOperationsInput | number | null;
    stock_quantity?: IntFieldUpdateOperationsInput | number;
    stock_status?: NullableStringFieldUpdateOperationsInput | string | null;
    warehouse_location?: NullableStringFieldUpdateOperationsInput | string | null;
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type order_detailsCreateInput = {
    product_id: string;
    quantity: number;
    price_per_unit: Decimal | DecimalJsLike | number | string;
    total_amount: Decimal | DecimalJsLike | number | string;
    orders?: ordersCreateNestedOneWithoutOrder_detailsInput;
  };

  export type order_detailsUncheckedCreateInput = {
    order_detail_id?: number;
    order_id?: number | null;
    product_id: string;
    quantity: number;
    price_per_unit: Decimal | DecimalJsLike | number | string;
    total_amount: Decimal | DecimalJsLike | number | string;
  };

  export type order_detailsUpdateInput = {
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    orders?: ordersUpdateOneWithoutOrder_detailsNestedInput;
  };

  export type order_detailsUncheckedUpdateInput = {
    order_detail_id?: IntFieldUpdateOperationsInput | number;
    order_id?: NullableIntFieldUpdateOperationsInput | number | null;
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
  };

  export type order_detailsCreateManyInput = {
    order_detail_id?: number;
    order_id?: number | null;
    product_id: string;
    quantity: number;
    price_per_unit: Decimal | DecimalJsLike | number | string;
    total_amount: Decimal | DecimalJsLike | number | string;
  };

  export type order_detailsUpdateManyMutationInput = {
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
  };

  export type order_detailsUncheckedUpdateManyInput = {
    order_detail_id?: IntFieldUpdateOperationsInput | number;
    order_id?: NullableIntFieldUpdateOperationsInput | number | null;
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
  };

  export type ordersCreateInput = {
    customer_id: string;
    order_date: Date | string;
    total_amount?: Decimal | DecimalJsLike | number | string | null;
    order_details?: order_detailsCreateNestedManyWithoutOrdersInput;
  };

  export type ordersUncheckedCreateInput = {
    order_id?: number;
    customer_id: string;
    order_date: Date | string;
    total_amount?: Decimal | DecimalJsLike | number | string | null;
    order_details?: order_detailsUncheckedCreateNestedManyWithoutOrdersInput;
  };

  export type ordersUpdateInput = {
    customer_id?: StringFieldUpdateOperationsInput | string;
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null;
    order_details?: order_detailsUpdateManyWithoutOrdersNestedInput;
  };

  export type ordersUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number;
    customer_id?: StringFieldUpdateOperationsInput | string;
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null;
    order_details?: order_detailsUncheckedUpdateManyWithoutOrdersNestedInput;
  };

  export type ordersCreateManyInput = {
    order_id?: number;
    customer_id: string;
    order_date: Date | string;
    total_amount?: Decimal | DecimalJsLike | number | string | null;
  };

  export type ordersUpdateManyMutationInput = {
    customer_id?: StringFieldUpdateOperationsInput | string;
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null;
  };

  export type ordersUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number;
    customer_id?: StringFieldUpdateOperationsInput | string;
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null;
  };

  export type productsCreateInput = {
    name: string;
    description?: string | null;
    price: Decimal | DecimalJsLike | number | string;
    sku: string;
    weight?: Decimal | DecimalJsLike | number | string | null;
    dimensions?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: string | null;
    model_number?: string | null;
    inventory?: inventoryCreateNestedManyWithoutProductsInput;
    categories?: categoriesCreateNestedOneWithoutProductsInput;
    shipping_status?: shipping_statusCreateNestedManyWithoutProductsInput;
  };

  export type productsUncheckedCreateInput = {
    product_id?: number;
    category_id?: number | null;
    name: string;
    description?: string | null;
    price: Decimal | DecimalJsLike | number | string;
    sku: string;
    weight?: Decimal | DecimalJsLike | number | string | null;
    dimensions?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: string | null;
    model_number?: string | null;
    inventory?: inventoryUncheckedCreateNestedManyWithoutProductsInput;
    shipping_status?: shipping_statusUncheckedCreateNestedManyWithoutProductsInput;
  };

  export type productsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    sku?: StringFieldUpdateOperationsInput | string;
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null;
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: NullableStringFieldUpdateOperationsInput | string | null;
    model_number?: NullableStringFieldUpdateOperationsInput | string | null;
    inventory?: inventoryUpdateManyWithoutProductsNestedInput;
    categories?: categoriesUpdateOneWithoutProductsNestedInput;
    shipping_status?: shipping_statusUpdateManyWithoutProductsNestedInput;
  };

  export type productsUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number;
    category_id?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    sku?: StringFieldUpdateOperationsInput | string;
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null;
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: NullableStringFieldUpdateOperationsInput | string | null;
    model_number?: NullableStringFieldUpdateOperationsInput | string | null;
    inventory?: inventoryUncheckedUpdateManyWithoutProductsNestedInput;
    shipping_status?: shipping_statusUncheckedUpdateManyWithoutProductsNestedInput;
  };

  export type productsCreateManyInput = {
    product_id?: number;
    category_id?: number | null;
    name: string;
    description?: string | null;
    price: Decimal | DecimalJsLike | number | string;
    sku: string;
    weight?: Decimal | DecimalJsLike | number | string | null;
    dimensions?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: string | null;
    model_number?: string | null;
  };

  export type productsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    sku?: StringFieldUpdateOperationsInput | string;
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null;
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: NullableStringFieldUpdateOperationsInput | string | null;
    model_number?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type productsUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number;
    category_id?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    sku?: StringFieldUpdateOperationsInput | string;
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null;
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: NullableStringFieldUpdateOperationsInput | string | null;
    model_number?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type shipping_statusCreateInput = {
    user_id: number;
    order_date?: Date | string | null;
    shipping_status?: string | null;
    shipping_date?: Date | string | null;
    delivery_date?: Date | string | null;
    products: productsCreateNestedOneWithoutShipping_statusInput;
  };

  export type shipping_statusUncheckedCreateInput = {
    order_id?: number;
    user_id: number;
    product_id: number;
    order_date?: Date | string | null;
    shipping_status?: string | null;
    shipping_date?: Date | string | null;
    delivery_date?: Date | string | null;
  };

  export type shipping_statusUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number;
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shipping_status?: NullableStringFieldUpdateOperationsInput | string | null;
    shipping_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    products?: productsUpdateOneRequiredWithoutShipping_statusNestedInput;
  };

  export type shipping_statusUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number;
    user_id?: IntFieldUpdateOperationsInput | number;
    product_id?: IntFieldUpdateOperationsInput | number;
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shipping_status?: NullableStringFieldUpdateOperationsInput | string | null;
    shipping_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type shipping_statusCreateManyInput = {
    order_id?: number;
    user_id: number;
    product_id: number;
    order_date?: Date | string | null;
    shipping_status?: string | null;
    shipping_date?: Date | string | null;
    delivery_date?: Date | string | null;
  };

  export type shipping_statusUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number;
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shipping_status?: NullableStringFieldUpdateOperationsInput | string | null;
    shipping_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type shipping_statusUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number;
    user_id?: IntFieldUpdateOperationsInput | number;
    product_id?: IntFieldUpdateOperationsInput | number;
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shipping_status?: NullableStringFieldUpdateOperationsInput | string | null;
    shipping_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type subscription_plansCreateInput = {
    plan_id: number;
    plan_name: string;
    price: Decimal | DecimalJsLike | number | string;
  };

  export type subscription_plansUncheckedCreateInput = {
    plan_id: number;
    plan_name: string;
    price: Decimal | DecimalJsLike | number | string;
  };

  export type subscription_plansUpdateInput = {
    plan_id?: IntFieldUpdateOperationsInput | number;
    plan_name?: StringFieldUpdateOperationsInput | string;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
  };

  export type subscription_plansUncheckedUpdateInput = {
    plan_id?: IntFieldUpdateOperationsInput | number;
    plan_name?: StringFieldUpdateOperationsInput | string;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
  };

  export type subscription_plansCreateManyInput = {
    plan_id: number;
    plan_name: string;
    price: Decimal | DecimalJsLike | number | string;
  };

  export type subscription_plansUpdateManyMutationInput = {
    plan_id?: IntFieldUpdateOperationsInput | number;
    plan_name?: StringFieldUpdateOperationsInput | string;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
  };

  export type subscription_plansUncheckedUpdateManyInput = {
    plan_id?: IntFieldUpdateOperationsInput | number;
    plan_name?: StringFieldUpdateOperationsInput | string;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
  };

  export type usersCreateInput = {
    user_id: number;
    username: string;
    age?: number | null;
    sex?: string | null;
    job?: string | null;
    birthday?: string | null;
    family_structure?: string | null;
    current_address?: string | null;
    phone?: string | null;
    email?: string | null;
    mail_acceptance?: string | null;
    dm_acceptance?: string | null;
    customer_status?: string | null;
    subscription_plan_id?: number | null;
    subscription_status?: string | null;
  };

  export type usersUncheckedCreateInput = {
    user_id: number;
    username: string;
    age?: number | null;
    sex?: string | null;
    job?: string | null;
    birthday?: string | null;
    family_structure?: string | null;
    current_address?: string | null;
    phone?: string | null;
    email?: string | null;
    mail_acceptance?: string | null;
    dm_acceptance?: string | null;
    customer_status?: string | null;
    subscription_plan_id?: number | null;
    subscription_status?: string | null;
  };

  export type usersUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    age?: NullableIntFieldUpdateOperationsInput | number | null;
    sex?: NullableStringFieldUpdateOperationsInput | string | null;
    job?: NullableStringFieldUpdateOperationsInput | string | null;
    birthday?: NullableStringFieldUpdateOperationsInput | string | null;
    family_structure?: NullableStringFieldUpdateOperationsInput | string | null;
    current_address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    mail_acceptance?: NullableStringFieldUpdateOperationsInput | string | null;
    dm_acceptance?: NullableStringFieldUpdateOperationsInput | string | null;
    customer_status?: NullableStringFieldUpdateOperationsInput | string | null;
    subscription_plan_id?: NullableIntFieldUpdateOperationsInput | number | null;
    subscription_status?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    age?: NullableIntFieldUpdateOperationsInput | number | null;
    sex?: NullableStringFieldUpdateOperationsInput | string | null;
    job?: NullableStringFieldUpdateOperationsInput | string | null;
    birthday?: NullableStringFieldUpdateOperationsInput | string | null;
    family_structure?: NullableStringFieldUpdateOperationsInput | string | null;
    current_address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    mail_acceptance?: NullableStringFieldUpdateOperationsInput | string | null;
    dm_acceptance?: NullableStringFieldUpdateOperationsInput | string | null;
    customer_status?: NullableStringFieldUpdateOperationsInput | string | null;
    subscription_plan_id?: NullableIntFieldUpdateOperationsInput | number | null;
    subscription_status?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type usersCreateManyInput = {
    user_id: number;
    username: string;
    age?: number | null;
    sex?: string | null;
    job?: string | null;
    birthday?: string | null;
    family_structure?: string | null;
    current_address?: string | null;
    phone?: string | null;
    email?: string | null;
    mail_acceptance?: string | null;
    dm_acceptance?: string | null;
    customer_status?: string | null;
    subscription_plan_id?: number | null;
    subscription_status?: string | null;
  };

  export type usersUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    age?: NullableIntFieldUpdateOperationsInput | number | null;
    sex?: NullableStringFieldUpdateOperationsInput | string | null;
    job?: NullableStringFieldUpdateOperationsInput | string | null;
    birthday?: NullableStringFieldUpdateOperationsInput | string | null;
    family_structure?: NullableStringFieldUpdateOperationsInput | string | null;
    current_address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    mail_acceptance?: NullableStringFieldUpdateOperationsInput | string | null;
    dm_acceptance?: NullableStringFieldUpdateOperationsInput | string | null;
    customer_status?: NullableStringFieldUpdateOperationsInput | string | null;
    subscription_plan_id?: NullableIntFieldUpdateOperationsInput | number | null;
    subscription_status?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    age?: NullableIntFieldUpdateOperationsInput | number | null;
    sex?: NullableStringFieldUpdateOperationsInput | string | null;
    job?: NullableStringFieldUpdateOperationsInput | string | null;
    birthday?: NullableStringFieldUpdateOperationsInput | string | null;
    family_structure?: NullableStringFieldUpdateOperationsInput | string | null;
    current_address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    mail_acceptance?: NullableStringFieldUpdateOperationsInput | string | null;
    dm_acceptance?: NullableStringFieldUpdateOperationsInput | string | null;
    customer_status?: NullableStringFieldUpdateOperationsInput | string | null;
    subscription_plan_id?: NullableIntFieldUpdateOperationsInput | number | null;
    subscription_status?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type CategoriesNullableScalarRelationFilter = {
    is?: categoriesWhereInput | null;
    isNot?: categoriesWhereInput | null;
  };

  export type CategoriesListRelationFilter = {
    every?: categoriesWhereInput;
    some?: categoriesWhereInput;
    none?: categoriesWhereInput;
  };

  export type ProductsListRelationFilter = {
    every?: productsWhereInput;
    some?: productsWhereInput;
    none?: productsWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type categoriesCountOrderByAggregateInput = {
    category_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    parent_category_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type categoriesAvgOrderByAggregateInput = {
    category_id?: SortOrder;
    parent_category_id?: SortOrder;
  };

  export type categoriesMaxOrderByAggregateInput = {
    category_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    parent_category_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type categoriesMinOrderByAggregateInput = {
    category_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    parent_category_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type categoriesSumOrderByAggregateInput = {
    category_id?: SortOrder;
    parent_category_id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>;
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, "path">
        >,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, "path">>;

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
  };
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, "path">>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, "path">>;

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
  };

  export type game_productsCountOrderByAggregateInput = {
    product_id?: SortOrder;
    category_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    release_date?: SortOrder;
    developer?: SortOrder;
    publisher?: SortOrder;
    platforms?: SortOrder;
    features?: SortOrder;
    genre?: SortOrder;
    included_addons?: SortOrder;
    cross_platform_play?: SortOrder;
    related_games?: SortOrder;
    additional_contents?: SortOrder;
    tech_description?: SortOrder;
    tech_description_raw?: SortOrder;
    product_images?: SortOrder;
    gallery_images?: SortOrder;
    include_plan_id?: SortOrder;
  };

  export type game_productsAvgOrderByAggregateInput = {
    product_id?: SortOrder;
    category_id?: SortOrder;
    price?: SortOrder;
    include_plan_id?: SortOrder;
  };

  export type game_productsMaxOrderByAggregateInput = {
    product_id?: SortOrder;
    category_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    release_date?: SortOrder;
    developer?: SortOrder;
    publisher?: SortOrder;
    cross_platform_play?: SortOrder;
    tech_description_raw?: SortOrder;
    include_plan_id?: SortOrder;
  };

  export type game_productsMinOrderByAggregateInput = {
    product_id?: SortOrder;
    category_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    release_date?: SortOrder;
    developer?: SortOrder;
    publisher?: SortOrder;
    cross_platform_play?: SortOrder;
    tech_description_raw?: SortOrder;
    include_plan_id?: SortOrder;
  };

  export type game_productsSumOrderByAggregateInput = {
    product_id?: SortOrder;
    category_id?: SortOrder;
    price?: SortOrder;
    include_plan_id?: SortOrder;
  };

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>;
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, "path">
        >,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, "path">>;

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedJsonNullableFilter<$PrismaModel>;
    _max?: NestedJsonNullableFilter<$PrismaModel>;
  };
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, "path">
        >,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, "path">>;

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedJsonFilter<$PrismaModel>;
    _max?: NestedJsonFilter<$PrismaModel>;
  };

  export type ProductsNullableScalarRelationFilter = {
    is?: productsWhereInput | null;
    isNot?: productsWhereInput | null;
  };

  export type inventoryCountOrderByAggregateInput = {
    inventory_id?: SortOrder;
    product_id?: SortOrder;
    stock_quantity?: SortOrder;
    stock_status?: SortOrder;
    warehouse_location?: SortOrder;
    last_updated?: SortOrder;
  };

  export type inventoryAvgOrderByAggregateInput = {
    inventory_id?: SortOrder;
    product_id?: SortOrder;
    stock_quantity?: SortOrder;
  };

  export type inventoryMaxOrderByAggregateInput = {
    inventory_id?: SortOrder;
    product_id?: SortOrder;
    stock_quantity?: SortOrder;
    stock_status?: SortOrder;
    warehouse_location?: SortOrder;
    last_updated?: SortOrder;
  };

  export type inventoryMinOrderByAggregateInput = {
    inventory_id?: SortOrder;
    product_id?: SortOrder;
    stock_quantity?: SortOrder;
    stock_status?: SortOrder;
    warehouse_location?: SortOrder;
    last_updated?: SortOrder;
  };

  export type inventorySumOrderByAggregateInput = {
    inventory_id?: SortOrder;
    product_id?: SortOrder;
    stock_quantity?: SortOrder;
  };

  export type OrdersNullableScalarRelationFilter = {
    is?: ordersWhereInput | null;
    isNot?: ordersWhereInput | null;
  };

  export type order_detailsCountOrderByAggregateInput = {
    order_detail_id?: SortOrder;
    order_id?: SortOrder;
    product_id?: SortOrder;
    quantity?: SortOrder;
    price_per_unit?: SortOrder;
    total_amount?: SortOrder;
  };

  export type order_detailsAvgOrderByAggregateInput = {
    order_detail_id?: SortOrder;
    order_id?: SortOrder;
    quantity?: SortOrder;
    price_per_unit?: SortOrder;
    total_amount?: SortOrder;
  };

  export type order_detailsMaxOrderByAggregateInput = {
    order_detail_id?: SortOrder;
    order_id?: SortOrder;
    product_id?: SortOrder;
    quantity?: SortOrder;
    price_per_unit?: SortOrder;
    total_amount?: SortOrder;
  };

  export type order_detailsMinOrderByAggregateInput = {
    order_detail_id?: SortOrder;
    order_id?: SortOrder;
    product_id?: SortOrder;
    quantity?: SortOrder;
    price_per_unit?: SortOrder;
    total_amount?: SortOrder;
  };

  export type order_detailsSumOrderByAggregateInput = {
    order_detail_id?: SortOrder;
    order_id?: SortOrder;
    quantity?: SortOrder;
    price_per_unit?: SortOrder;
    total_amount?: SortOrder;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null;
  };

  export type Order_detailsListRelationFilter = {
    every?: order_detailsWhereInput;
    some?: order_detailsWhereInput;
    none?: order_detailsWhereInput;
  };

  export type order_detailsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ordersCountOrderByAggregateInput = {
    order_id?: SortOrder;
    customer_id?: SortOrder;
    order_date?: SortOrder;
    total_amount?: SortOrder;
  };

  export type ordersAvgOrderByAggregateInput = {
    order_id?: SortOrder;
    total_amount?: SortOrder;
  };

  export type ordersMaxOrderByAggregateInput = {
    order_id?: SortOrder;
    customer_id?: SortOrder;
    order_date?: SortOrder;
    total_amount?: SortOrder;
  };

  export type ordersMinOrderByAggregateInput = {
    order_id?: SortOrder;
    customer_id?: SortOrder;
    order_date?: SortOrder;
    total_amount?: SortOrder;
  };

  export type ordersSumOrderByAggregateInput = {
    order_id?: SortOrder;
    total_amount?: SortOrder;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: NestedDecimalNullableFilter<$PrismaModel>;
    _min?: NestedDecimalNullableFilter<$PrismaModel>;
    _max?: NestedDecimalNullableFilter<$PrismaModel>;
  };

  export type InventoryListRelationFilter = {
    every?: inventoryWhereInput;
    some?: inventoryWhereInput;
    none?: inventoryWhereInput;
  };

  export type Shipping_statusListRelationFilter = {
    every?: shipping_statusWhereInput;
    some?: shipping_statusWhereInput;
    none?: shipping_statusWhereInput;
  };

  export type inventoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type shipping_statusOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type productsSkuNameCompoundUniqueInput = {
    sku: string;
    name: string;
  };

  export type productsCountOrderByAggregateInput = {
    product_id?: SortOrder;
    category_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    sku?: SortOrder;
    weight?: SortOrder;
    dimensions?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tech_description?: SortOrder;
    product_images?: SortOrder;
    tech_description_raw?: SortOrder;
    model_number?: SortOrder;
  };

  export type productsAvgOrderByAggregateInput = {
    product_id?: SortOrder;
    category_id?: SortOrder;
    price?: SortOrder;
    weight?: SortOrder;
  };

  export type productsMaxOrderByAggregateInput = {
    product_id?: SortOrder;
    category_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    sku?: SortOrder;
    weight?: SortOrder;
    dimensions?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tech_description_raw?: SortOrder;
    model_number?: SortOrder;
  };

  export type productsMinOrderByAggregateInput = {
    product_id?: SortOrder;
    category_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    sku?: SortOrder;
    weight?: SortOrder;
    dimensions?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tech_description_raw?: SortOrder;
    model_number?: SortOrder;
  };

  export type productsSumOrderByAggregateInput = {
    product_id?: SortOrder;
    category_id?: SortOrder;
    price?: SortOrder;
    weight?: SortOrder;
  };

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput;
    isNot?: productsWhereInput;
  };

  export type shipping_statusCountOrderByAggregateInput = {
    order_id?: SortOrder;
    user_id?: SortOrder;
    product_id?: SortOrder;
    order_date?: SortOrder;
    shipping_status?: SortOrder;
    shipping_date?: SortOrder;
    delivery_date?: SortOrder;
  };

  export type shipping_statusAvgOrderByAggregateInput = {
    order_id?: SortOrder;
    user_id?: SortOrder;
    product_id?: SortOrder;
  };

  export type shipping_statusMaxOrderByAggregateInput = {
    order_id?: SortOrder;
    user_id?: SortOrder;
    product_id?: SortOrder;
    order_date?: SortOrder;
    shipping_status?: SortOrder;
    shipping_date?: SortOrder;
    delivery_date?: SortOrder;
  };

  export type shipping_statusMinOrderByAggregateInput = {
    order_id?: SortOrder;
    user_id?: SortOrder;
    product_id?: SortOrder;
    order_date?: SortOrder;
    shipping_status?: SortOrder;
    shipping_date?: SortOrder;
    delivery_date?: SortOrder;
  };

  export type shipping_statusSumOrderByAggregateInput = {
    order_id?: SortOrder;
    user_id?: SortOrder;
    product_id?: SortOrder;
  };

  export type subscription_plansCountOrderByAggregateInput = {
    plan_id?: SortOrder;
    plan_name?: SortOrder;
    price?: SortOrder;
  };

  export type subscription_plansAvgOrderByAggregateInput = {
    plan_id?: SortOrder;
    price?: SortOrder;
  };

  export type subscription_plansMaxOrderByAggregateInput = {
    plan_id?: SortOrder;
    plan_name?: SortOrder;
    price?: SortOrder;
  };

  export type subscription_plansMinOrderByAggregateInput = {
    plan_id?: SortOrder;
    plan_name?: SortOrder;
    price?: SortOrder;
  };

  export type subscription_plansSumOrderByAggregateInput = {
    plan_id?: SortOrder;
    price?: SortOrder;
  };

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder;
    username?: SortOrder;
    age?: SortOrder;
    sex?: SortOrder;
    job?: SortOrder;
    birthday?: SortOrder;
    family_structure?: SortOrder;
    current_address?: SortOrder;
    phone?: SortOrder;
    email?: SortOrder;
    mail_acceptance?: SortOrder;
    dm_acceptance?: SortOrder;
    customer_status?: SortOrder;
    subscription_plan_id?: SortOrder;
    subscription_status?: SortOrder;
  };

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder;
    age?: SortOrder;
    subscription_plan_id?: SortOrder;
  };

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder;
    username?: SortOrder;
    age?: SortOrder;
    sex?: SortOrder;
    job?: SortOrder;
    birthday?: SortOrder;
    family_structure?: SortOrder;
    current_address?: SortOrder;
    phone?: SortOrder;
    email?: SortOrder;
    mail_acceptance?: SortOrder;
    dm_acceptance?: SortOrder;
    customer_status?: SortOrder;
    subscription_plan_id?: SortOrder;
    subscription_status?: SortOrder;
  };

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder;
    username?: SortOrder;
    age?: SortOrder;
    sex?: SortOrder;
    job?: SortOrder;
    birthday?: SortOrder;
    family_structure?: SortOrder;
    current_address?: SortOrder;
    phone?: SortOrder;
    email?: SortOrder;
    mail_acceptance?: SortOrder;
    dm_acceptance?: SortOrder;
    customer_status?: SortOrder;
    subscription_plan_id?: SortOrder;
    subscription_status?: SortOrder;
  };

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder;
    age?: SortOrder;
    subscription_plan_id?: SortOrder;
  };

  export type categoriesCreateNestedOneWithoutOther_categoriesInput = {
    create?: XOR<categoriesCreateWithoutOther_categoriesInput, categoriesUncheckedCreateWithoutOther_categoriesInput>;
    connectOrCreate?: categoriesCreateOrConnectWithoutOther_categoriesInput;
    connect?: categoriesWhereUniqueInput;
  };

  export type categoriesCreateNestedManyWithoutCategoriesInput = {
    create?:
      | XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput>
      | categoriesCreateWithoutCategoriesInput[]
      | categoriesUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | categoriesCreateOrConnectWithoutCategoriesInput
      | categoriesCreateOrConnectWithoutCategoriesInput[];
    createMany?: categoriesCreateManyCategoriesInputEnvelope;
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
  };

  export type productsCreateNestedManyWithoutCategoriesInput = {
    create?:
      | XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
      | productsCreateWithoutCategoriesInput[]
      | productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[];
    createMany?: productsCreateManyCategoriesInputEnvelope;
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[];
  };

  export type categoriesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?:
      | XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput>
      | categoriesCreateWithoutCategoriesInput[]
      | categoriesUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | categoriesCreateOrConnectWithoutCategoriesInput
      | categoriesCreateOrConnectWithoutCategoriesInput[];
    createMany?: categoriesCreateManyCategoriesInputEnvelope;
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
  };

  export type productsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?:
      | XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
      | productsCreateWithoutCategoriesInput[]
      | productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[];
    createMany?: productsCreateManyCategoriesInputEnvelope;
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type categoriesUpdateOneWithoutOther_categoriesNestedInput = {
    create?: XOR<categoriesCreateWithoutOther_categoriesInput, categoriesUncheckedCreateWithoutOther_categoriesInput>;
    connectOrCreate?: categoriesCreateOrConnectWithoutOther_categoriesInput;
    upsert?: categoriesUpsertWithoutOther_categoriesInput;
    disconnect?: categoriesWhereInput | boolean;
    delete?: categoriesWhereInput | boolean;
    connect?: categoriesWhereUniqueInput;
    update?: XOR<
      XOR<categoriesUpdateToOneWithWhereWithoutOther_categoriesInput, categoriesUpdateWithoutOther_categoriesInput>,
      categoriesUncheckedUpdateWithoutOther_categoriesInput
    >;
  };

  export type categoriesUpdateManyWithoutCategoriesNestedInput = {
    create?:
      | XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput>
      | categoriesCreateWithoutCategoriesInput[]
      | categoriesUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | categoriesCreateOrConnectWithoutCategoriesInput
      | categoriesCreateOrConnectWithoutCategoriesInput[];
    upsert?:
      | categoriesUpsertWithWhereUniqueWithoutCategoriesInput
      | categoriesUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: categoriesCreateManyCategoriesInputEnvelope;
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    update?:
      | categoriesUpdateWithWhereUniqueWithoutCategoriesInput
      | categoriesUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?:
      | categoriesUpdateManyWithWhereWithoutCategoriesInput
      | categoriesUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[];
  };

  export type productsUpdateManyWithoutCategoriesNestedInput = {
    create?:
      | XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
      | productsCreateWithoutCategoriesInput[]
      | productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[];
    upsert?:
      | productsUpsertWithWhereUniqueWithoutCategoriesInput
      | productsUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: productsCreateManyCategoriesInputEnvelope;
    set?: productsWhereUniqueInput | productsWhereUniqueInput[];
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[];
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[];
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[];
    update?:
      | productsUpdateWithWhereUniqueWithoutCategoriesInput
      | productsUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?:
      | productsUpdateManyWithWhereWithoutCategoriesInput
      | productsUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type categoriesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?:
      | XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput>
      | categoriesCreateWithoutCategoriesInput[]
      | categoriesUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | categoriesCreateOrConnectWithoutCategoriesInput
      | categoriesCreateOrConnectWithoutCategoriesInput[];
    upsert?:
      | categoriesUpsertWithWhereUniqueWithoutCategoriesInput
      | categoriesUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: categoriesCreateManyCategoriesInputEnvelope;
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    update?:
      | categoriesUpdateWithWhereUniqueWithoutCategoriesInput
      | categoriesUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?:
      | categoriesUpdateManyWithWhereWithoutCategoriesInput
      | categoriesUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[];
  };

  export type productsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?:
      | XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
      | productsCreateWithoutCategoriesInput[]
      | productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[];
    upsert?:
      | productsUpsertWithWhereUniqueWithoutCategoriesInput
      | productsUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: productsCreateManyCategoriesInputEnvelope;
    set?: productsWhereUniqueInput | productsWhereUniqueInput[];
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[];
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[];
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[];
    update?:
      | productsUpdateWithWhereUniqueWithoutCategoriesInput
      | productsUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?:
      | productsUpdateManyWithWhereWithoutCategoriesInput
      | productsUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[];
  };

  export type game_productsCreateplatformsInput = {
    set: string[];
  };

  export type game_productsCreatefeaturesInput = {
    set: string[];
  };

  export type game_productsCreategenreInput = {
    set: string[];
  };

  export type game_productsCreateincluded_addonsInput = {
    set: string[];
  };

  export type game_productsCreategallery_imagesInput = {
    set: string[];
  };

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string;
    increment?: Decimal | DecimalJsLike | number | string;
    decrement?: Decimal | DecimalJsLike | number | string;
    multiply?: Decimal | DecimalJsLike | number | string;
    divide?: Decimal | DecimalJsLike | number | string;
  };

  export type game_productsUpdateplatformsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type game_productsUpdatefeaturesInput = {
    set?: string[];
    push?: string | string[];
  };

  export type game_productsUpdategenreInput = {
    set?: string[];
    push?: string | string[];
  };

  export type game_productsUpdateincluded_addonsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type game_productsUpdategallery_imagesInput = {
    set?: string[];
    push?: string | string[];
  };

  export type productsCreateNestedOneWithoutInventoryInput = {
    create?: XOR<productsCreateWithoutInventoryInput, productsUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: productsCreateOrConnectWithoutInventoryInput;
    connect?: productsWhereUniqueInput;
  };

  export type productsUpdateOneWithoutInventoryNestedInput = {
    create?: XOR<productsCreateWithoutInventoryInput, productsUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: productsCreateOrConnectWithoutInventoryInput;
    upsert?: productsUpsertWithoutInventoryInput;
    disconnect?: productsWhereInput | boolean;
    delete?: productsWhereInput | boolean;
    connect?: productsWhereUniqueInput;
    update?: XOR<
      XOR<productsUpdateToOneWithWhereWithoutInventoryInput, productsUpdateWithoutInventoryInput>,
      productsUncheckedUpdateWithoutInventoryInput
    >;
  };

  export type ordersCreateNestedOneWithoutOrder_detailsInput = {
    create?: XOR<ordersCreateWithoutOrder_detailsInput, ordersUncheckedCreateWithoutOrder_detailsInput>;
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_detailsInput;
    connect?: ordersWhereUniqueInput;
  };

  export type ordersUpdateOneWithoutOrder_detailsNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_detailsInput, ordersUncheckedCreateWithoutOrder_detailsInput>;
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_detailsInput;
    upsert?: ordersUpsertWithoutOrder_detailsInput;
    disconnect?: ordersWhereInput | boolean;
    delete?: ordersWhereInput | boolean;
    connect?: ordersWhereUniqueInput;
    update?: XOR<
      XOR<ordersUpdateToOneWithWhereWithoutOrder_detailsInput, ordersUpdateWithoutOrder_detailsInput>,
      ordersUncheckedUpdateWithoutOrder_detailsInput
    >;
  };

  export type order_detailsCreateNestedManyWithoutOrdersInput = {
    create?:
      | XOR<order_detailsCreateWithoutOrdersInput, order_detailsUncheckedCreateWithoutOrdersInput>
      | order_detailsCreateWithoutOrdersInput[]
      | order_detailsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: order_detailsCreateOrConnectWithoutOrdersInput | order_detailsCreateOrConnectWithoutOrdersInput[];
    createMany?: order_detailsCreateManyOrdersInputEnvelope;
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[];
  };

  export type order_detailsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?:
      | XOR<order_detailsCreateWithoutOrdersInput, order_detailsUncheckedCreateWithoutOrdersInput>
      | order_detailsCreateWithoutOrdersInput[]
      | order_detailsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: order_detailsCreateOrConnectWithoutOrdersInput | order_detailsCreateOrConnectWithoutOrdersInput[];
    createMany?: order_detailsCreateManyOrdersInputEnvelope;
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[];
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null;
    increment?: Decimal | DecimalJsLike | number | string;
    decrement?: Decimal | DecimalJsLike | number | string;
    multiply?: Decimal | DecimalJsLike | number | string;
    divide?: Decimal | DecimalJsLike | number | string;
  };

  export type order_detailsUpdateManyWithoutOrdersNestedInput = {
    create?:
      | XOR<order_detailsCreateWithoutOrdersInput, order_detailsUncheckedCreateWithoutOrdersInput>
      | order_detailsCreateWithoutOrdersInput[]
      | order_detailsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: order_detailsCreateOrConnectWithoutOrdersInput | order_detailsCreateOrConnectWithoutOrdersInput[];
    upsert?:
      | order_detailsUpsertWithWhereUniqueWithoutOrdersInput
      | order_detailsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: order_detailsCreateManyOrdersInputEnvelope;
    set?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[];
    disconnect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[];
    delete?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[];
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[];
    update?:
      | order_detailsUpdateWithWhereUniqueWithoutOrdersInput
      | order_detailsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?:
      | order_detailsUpdateManyWithWhereWithoutOrdersInput
      | order_detailsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: order_detailsScalarWhereInput | order_detailsScalarWhereInput[];
  };

  export type order_detailsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?:
      | XOR<order_detailsCreateWithoutOrdersInput, order_detailsUncheckedCreateWithoutOrdersInput>
      | order_detailsCreateWithoutOrdersInput[]
      | order_detailsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: order_detailsCreateOrConnectWithoutOrdersInput | order_detailsCreateOrConnectWithoutOrdersInput[];
    upsert?:
      | order_detailsUpsertWithWhereUniqueWithoutOrdersInput
      | order_detailsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: order_detailsCreateManyOrdersInputEnvelope;
    set?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[];
    disconnect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[];
    delete?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[];
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[];
    update?:
      | order_detailsUpdateWithWhereUniqueWithoutOrdersInput
      | order_detailsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?:
      | order_detailsUpdateManyWithWhereWithoutOrdersInput
      | order_detailsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: order_detailsScalarWhereInput | order_detailsScalarWhereInput[];
  };

  export type inventoryCreateNestedManyWithoutProductsInput = {
    create?:
      | XOR<inventoryCreateWithoutProductsInput, inventoryUncheckedCreateWithoutProductsInput>
      | inventoryCreateWithoutProductsInput[]
      | inventoryUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutProductsInput | inventoryCreateOrConnectWithoutProductsInput[];
    createMany?: inventoryCreateManyProductsInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type categoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput;
    connect?: categoriesWhereUniqueInput;
  };

  export type shipping_statusCreateNestedManyWithoutProductsInput = {
    create?:
      | XOR<shipping_statusCreateWithoutProductsInput, shipping_statusUncheckedCreateWithoutProductsInput>
      | shipping_statusCreateWithoutProductsInput[]
      | shipping_statusUncheckedCreateWithoutProductsInput[];
    connectOrCreate?:
      | shipping_statusCreateOrConnectWithoutProductsInput
      | shipping_statusCreateOrConnectWithoutProductsInput[];
    createMany?: shipping_statusCreateManyProductsInputEnvelope;
    connect?: shipping_statusWhereUniqueInput | shipping_statusWhereUniqueInput[];
  };

  export type inventoryUncheckedCreateNestedManyWithoutProductsInput = {
    create?:
      | XOR<inventoryCreateWithoutProductsInput, inventoryUncheckedCreateWithoutProductsInput>
      | inventoryCreateWithoutProductsInput[]
      | inventoryUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutProductsInput | inventoryCreateOrConnectWithoutProductsInput[];
    createMany?: inventoryCreateManyProductsInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type shipping_statusUncheckedCreateNestedManyWithoutProductsInput = {
    create?:
      | XOR<shipping_statusCreateWithoutProductsInput, shipping_statusUncheckedCreateWithoutProductsInput>
      | shipping_statusCreateWithoutProductsInput[]
      | shipping_statusUncheckedCreateWithoutProductsInput[];
    connectOrCreate?:
      | shipping_statusCreateOrConnectWithoutProductsInput
      | shipping_statusCreateOrConnectWithoutProductsInput[];
    createMany?: shipping_statusCreateManyProductsInputEnvelope;
    connect?: shipping_statusWhereUniqueInput | shipping_statusWhereUniqueInput[];
  };

  export type inventoryUpdateManyWithoutProductsNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutProductsInput, inventoryUncheckedCreateWithoutProductsInput>
      | inventoryCreateWithoutProductsInput[]
      | inventoryUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutProductsInput | inventoryCreateOrConnectWithoutProductsInput[];
    upsert?: inventoryUpsertWithWhereUniqueWithoutProductsInput | inventoryUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: inventoryCreateManyProductsInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?: inventoryUpdateWithWhereUniqueWithoutProductsInput | inventoryUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: inventoryUpdateManyWithWhereWithoutProductsInput | inventoryUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type categoriesUpdateOneWithoutProductsNestedInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput;
    upsert?: categoriesUpsertWithoutProductsInput;
    disconnect?: categoriesWhereInput | boolean;
    delete?: categoriesWhereInput | boolean;
    connect?: categoriesWhereUniqueInput;
    update?: XOR<
      XOR<categoriesUpdateToOneWithWhereWithoutProductsInput, categoriesUpdateWithoutProductsInput>,
      categoriesUncheckedUpdateWithoutProductsInput
    >;
  };

  export type shipping_statusUpdateManyWithoutProductsNestedInput = {
    create?:
      | XOR<shipping_statusCreateWithoutProductsInput, shipping_statusUncheckedCreateWithoutProductsInput>
      | shipping_statusCreateWithoutProductsInput[]
      | shipping_statusUncheckedCreateWithoutProductsInput[];
    connectOrCreate?:
      | shipping_statusCreateOrConnectWithoutProductsInput
      | shipping_statusCreateOrConnectWithoutProductsInput[];
    upsert?:
      | shipping_statusUpsertWithWhereUniqueWithoutProductsInput
      | shipping_statusUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: shipping_statusCreateManyProductsInputEnvelope;
    set?: shipping_statusWhereUniqueInput | shipping_statusWhereUniqueInput[];
    disconnect?: shipping_statusWhereUniqueInput | shipping_statusWhereUniqueInput[];
    delete?: shipping_statusWhereUniqueInput | shipping_statusWhereUniqueInput[];
    connect?: shipping_statusWhereUniqueInput | shipping_statusWhereUniqueInput[];
    update?:
      | shipping_statusUpdateWithWhereUniqueWithoutProductsInput
      | shipping_statusUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?:
      | shipping_statusUpdateManyWithWhereWithoutProductsInput
      | shipping_statusUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: shipping_statusScalarWhereInput | shipping_statusScalarWhereInput[];
  };

  export type inventoryUncheckedUpdateManyWithoutProductsNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutProductsInput, inventoryUncheckedCreateWithoutProductsInput>
      | inventoryCreateWithoutProductsInput[]
      | inventoryUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutProductsInput | inventoryCreateOrConnectWithoutProductsInput[];
    upsert?: inventoryUpsertWithWhereUniqueWithoutProductsInput | inventoryUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: inventoryCreateManyProductsInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?: inventoryUpdateWithWhereUniqueWithoutProductsInput | inventoryUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: inventoryUpdateManyWithWhereWithoutProductsInput | inventoryUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type shipping_statusUncheckedUpdateManyWithoutProductsNestedInput = {
    create?:
      | XOR<shipping_statusCreateWithoutProductsInput, shipping_statusUncheckedCreateWithoutProductsInput>
      | shipping_statusCreateWithoutProductsInput[]
      | shipping_statusUncheckedCreateWithoutProductsInput[];
    connectOrCreate?:
      | shipping_statusCreateOrConnectWithoutProductsInput
      | shipping_statusCreateOrConnectWithoutProductsInput[];
    upsert?:
      | shipping_statusUpsertWithWhereUniqueWithoutProductsInput
      | shipping_statusUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: shipping_statusCreateManyProductsInputEnvelope;
    set?: shipping_statusWhereUniqueInput | shipping_statusWhereUniqueInput[];
    disconnect?: shipping_statusWhereUniqueInput | shipping_statusWhereUniqueInput[];
    delete?: shipping_statusWhereUniqueInput | shipping_statusWhereUniqueInput[];
    connect?: shipping_statusWhereUniqueInput | shipping_statusWhereUniqueInput[];
    update?:
      | shipping_statusUpdateWithWhereUniqueWithoutProductsInput
      | shipping_statusUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?:
      | shipping_statusUpdateManyWithWhereWithoutProductsInput
      | shipping_statusUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: shipping_statusScalarWhereInput | shipping_statusScalarWhereInput[];
  };

  export type productsCreateNestedOneWithoutShipping_statusInput = {
    create?: XOR<productsCreateWithoutShipping_statusInput, productsUncheckedCreateWithoutShipping_statusInput>;
    connectOrCreate?: productsCreateOrConnectWithoutShipping_statusInput;
    connect?: productsWhereUniqueInput;
  };

  export type productsUpdateOneRequiredWithoutShipping_statusNestedInput = {
    create?: XOR<productsCreateWithoutShipping_statusInput, productsUncheckedCreateWithoutShipping_statusInput>;
    connectOrCreate?: productsCreateOrConnectWithoutShipping_statusInput;
    upsert?: productsUpsertWithoutShipping_statusInput;
    connect?: productsWhereUniqueInput;
    update?: XOR<
      XOR<productsUpdateToOneWithWhereWithoutShipping_statusInput, productsUpdateWithoutShipping_statusInput>,
      productsUncheckedUpdateWithoutShipping_statusInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>;
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>;
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, "path">
        >,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, "path">>;

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
  };
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, "path">
        >,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, "path">>;

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: NestedDecimalNullableFilter<$PrismaModel>;
    _min?: NestedDecimalNullableFilter<$PrismaModel>;
    _max?: NestedDecimalNullableFilter<$PrismaModel>;
  };

  export type categoriesCreateWithoutOther_categoriesInput = {
    name: string;
    description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput;
    products?: productsCreateNestedManyWithoutCategoriesInput;
  };

  export type categoriesUncheckedCreateWithoutOther_categoriesInput = {
    category_id?: number;
    name: string;
    description?: string | null;
    parent_category_id?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput;
  };

  export type categoriesCreateOrConnectWithoutOther_categoriesInput = {
    where: categoriesWhereUniqueInput;
    create: XOR<categoriesCreateWithoutOther_categoriesInput, categoriesUncheckedCreateWithoutOther_categoriesInput>;
  };

  export type categoriesCreateWithoutCategoriesInput = {
    name: string;
    description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput;
    products?: productsCreateNestedManyWithoutCategoriesInput;
  };

  export type categoriesUncheckedCreateWithoutCategoriesInput = {
    category_id?: number;
    name: string;
    description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput;
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput;
  };

  export type categoriesCreateOrConnectWithoutCategoriesInput = {
    where: categoriesWhereUniqueInput;
    create: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput>;
  };

  export type categoriesCreateManyCategoriesInputEnvelope = {
    data: categoriesCreateManyCategoriesInput | categoriesCreateManyCategoriesInput[];
    skipDuplicates?: boolean;
  };

  export type productsCreateWithoutCategoriesInput = {
    name: string;
    description?: string | null;
    price: Decimal | DecimalJsLike | number | string;
    sku: string;
    weight?: Decimal | DecimalJsLike | number | string | null;
    dimensions?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: string | null;
    model_number?: string | null;
    inventory?: inventoryCreateNestedManyWithoutProductsInput;
    shipping_status?: shipping_statusCreateNestedManyWithoutProductsInput;
  };

  export type productsUncheckedCreateWithoutCategoriesInput = {
    product_id?: number;
    name: string;
    description?: string | null;
    price: Decimal | DecimalJsLike | number | string;
    sku: string;
    weight?: Decimal | DecimalJsLike | number | string | null;
    dimensions?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: string | null;
    model_number?: string | null;
    inventory?: inventoryUncheckedCreateNestedManyWithoutProductsInput;
    shipping_status?: shipping_statusUncheckedCreateNestedManyWithoutProductsInput;
  };

  export type productsCreateOrConnectWithoutCategoriesInput = {
    where: productsWhereUniqueInput;
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>;
  };

  export type productsCreateManyCategoriesInputEnvelope = {
    data: productsCreateManyCategoriesInput | productsCreateManyCategoriesInput[];
    skipDuplicates?: boolean;
  };

  export type categoriesUpsertWithoutOther_categoriesInput = {
    update: XOR<categoriesUpdateWithoutOther_categoriesInput, categoriesUncheckedUpdateWithoutOther_categoriesInput>;
    create: XOR<categoriesCreateWithoutOther_categoriesInput, categoriesUncheckedCreateWithoutOther_categoriesInput>;
    where?: categoriesWhereInput;
  };

  export type categoriesUpdateToOneWithWhereWithoutOther_categoriesInput = {
    where?: categoriesWhereInput;
    data: XOR<categoriesUpdateWithoutOther_categoriesInput, categoriesUncheckedUpdateWithoutOther_categoriesInput>;
  };

  export type categoriesUpdateWithoutOther_categoriesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput;
    products?: productsUpdateManyWithoutCategoriesNestedInput;
  };

  export type categoriesUncheckedUpdateWithoutOther_categoriesInput = {
    category_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    parent_category_id?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput;
  };

  export type categoriesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: categoriesWhereUniqueInput;
    update: XOR<categoriesUpdateWithoutCategoriesInput, categoriesUncheckedUpdateWithoutCategoriesInput>;
    create: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput>;
  };

  export type categoriesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: categoriesWhereUniqueInput;
    data: XOR<categoriesUpdateWithoutCategoriesInput, categoriesUncheckedUpdateWithoutCategoriesInput>;
  };

  export type categoriesUpdateManyWithWhereWithoutCategoriesInput = {
    where: categoriesScalarWhereInput;
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyWithoutCategoriesInput>;
  };

  export type categoriesScalarWhereInput = {
    AND?: categoriesScalarWhereInput | categoriesScalarWhereInput[];
    OR?: categoriesScalarWhereInput[];
    NOT?: categoriesScalarWhereInput | categoriesScalarWhereInput[];
    category_id?: IntFilter<"categories"> | number;
    name?: StringFilter<"categories"> | string;
    description?: StringNullableFilter<"categories"> | string | null;
    parent_category_id?: IntNullableFilter<"categories"> | number | null;
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null;
    updated_at?: DateTimeNullableFilter<"categories"> | Date | string | null;
  };

  export type productsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput;
    update: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>;
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>;
  };

  export type productsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput;
    data: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>;
  };

  export type productsUpdateManyWithWhereWithoutCategoriesInput = {
    where: productsScalarWhereInput;
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutCategoriesInput>;
  };

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[];
    OR?: productsScalarWhereInput[];
    NOT?: productsScalarWhereInput | productsScalarWhereInput[];
    product_id?: IntFilter<"products"> | number;
    category_id?: IntNullableFilter<"products"> | number | null;
    name?: StringFilter<"products"> | string;
    description?: StringNullableFilter<"products"> | string | null;
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string;
    sku?: StringFilter<"products"> | string;
    weight?: DecimalNullableFilter<"products"> | Decimal | DecimalJsLike | number | string | null;
    dimensions?: StringNullableFilter<"products"> | string | null;
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null;
    updated_at?: DateTimeNullableFilter<"products"> | Date | string | null;
    tech_description?: JsonNullableFilter<"products">;
    product_images?: JsonNullableFilter<"products">;
    tech_description_raw?: StringNullableFilter<"products"> | string | null;
    model_number?: StringNullableFilter<"products"> | string | null;
  };

  export type productsCreateWithoutInventoryInput = {
    name: string;
    description?: string | null;
    price: Decimal | DecimalJsLike | number | string;
    sku: string;
    weight?: Decimal | DecimalJsLike | number | string | null;
    dimensions?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: string | null;
    model_number?: string | null;
    categories?: categoriesCreateNestedOneWithoutProductsInput;
    shipping_status?: shipping_statusCreateNestedManyWithoutProductsInput;
  };

  export type productsUncheckedCreateWithoutInventoryInput = {
    product_id?: number;
    category_id?: number | null;
    name: string;
    description?: string | null;
    price: Decimal | DecimalJsLike | number | string;
    sku: string;
    weight?: Decimal | DecimalJsLike | number | string | null;
    dimensions?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: string | null;
    model_number?: string | null;
    shipping_status?: shipping_statusUncheckedCreateNestedManyWithoutProductsInput;
  };

  export type productsCreateOrConnectWithoutInventoryInput = {
    where: productsWhereUniqueInput;
    create: XOR<productsCreateWithoutInventoryInput, productsUncheckedCreateWithoutInventoryInput>;
  };

  export type productsUpsertWithoutInventoryInput = {
    update: XOR<productsUpdateWithoutInventoryInput, productsUncheckedUpdateWithoutInventoryInput>;
    create: XOR<productsCreateWithoutInventoryInput, productsUncheckedCreateWithoutInventoryInput>;
    where?: productsWhereInput;
  };

  export type productsUpdateToOneWithWhereWithoutInventoryInput = {
    where?: productsWhereInput;
    data: XOR<productsUpdateWithoutInventoryInput, productsUncheckedUpdateWithoutInventoryInput>;
  };

  export type productsUpdateWithoutInventoryInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    sku?: StringFieldUpdateOperationsInput | string;
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null;
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: NullableStringFieldUpdateOperationsInput | string | null;
    model_number?: NullableStringFieldUpdateOperationsInput | string | null;
    categories?: categoriesUpdateOneWithoutProductsNestedInput;
    shipping_status?: shipping_statusUpdateManyWithoutProductsNestedInput;
  };

  export type productsUncheckedUpdateWithoutInventoryInput = {
    product_id?: IntFieldUpdateOperationsInput | number;
    category_id?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    sku?: StringFieldUpdateOperationsInput | string;
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null;
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: NullableStringFieldUpdateOperationsInput | string | null;
    model_number?: NullableStringFieldUpdateOperationsInput | string | null;
    shipping_status?: shipping_statusUncheckedUpdateManyWithoutProductsNestedInput;
  };

  export type ordersCreateWithoutOrder_detailsInput = {
    customer_id: string;
    order_date: Date | string;
    total_amount?: Decimal | DecimalJsLike | number | string | null;
  };

  export type ordersUncheckedCreateWithoutOrder_detailsInput = {
    order_id?: number;
    customer_id: string;
    order_date: Date | string;
    total_amount?: Decimal | DecimalJsLike | number | string | null;
  };

  export type ordersCreateOrConnectWithoutOrder_detailsInput = {
    where: ordersWhereUniqueInput;
    create: XOR<ordersCreateWithoutOrder_detailsInput, ordersUncheckedCreateWithoutOrder_detailsInput>;
  };

  export type ordersUpsertWithoutOrder_detailsInput = {
    update: XOR<ordersUpdateWithoutOrder_detailsInput, ordersUncheckedUpdateWithoutOrder_detailsInput>;
    create: XOR<ordersCreateWithoutOrder_detailsInput, ordersUncheckedCreateWithoutOrder_detailsInput>;
    where?: ordersWhereInput;
  };

  export type ordersUpdateToOneWithWhereWithoutOrder_detailsInput = {
    where?: ordersWhereInput;
    data: XOR<ordersUpdateWithoutOrder_detailsInput, ordersUncheckedUpdateWithoutOrder_detailsInput>;
  };

  export type ordersUpdateWithoutOrder_detailsInput = {
    customer_id?: StringFieldUpdateOperationsInput | string;
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null;
  };

  export type ordersUncheckedUpdateWithoutOrder_detailsInput = {
    order_id?: IntFieldUpdateOperationsInput | number;
    customer_id?: StringFieldUpdateOperationsInput | string;
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null;
  };

  export type order_detailsCreateWithoutOrdersInput = {
    product_id: string;
    quantity: number;
    price_per_unit: Decimal | DecimalJsLike | number | string;
    total_amount: Decimal | DecimalJsLike | number | string;
  };

  export type order_detailsUncheckedCreateWithoutOrdersInput = {
    order_detail_id?: number;
    product_id: string;
    quantity: number;
    price_per_unit: Decimal | DecimalJsLike | number | string;
    total_amount: Decimal | DecimalJsLike | number | string;
  };

  export type order_detailsCreateOrConnectWithoutOrdersInput = {
    where: order_detailsWhereUniqueInput;
    create: XOR<order_detailsCreateWithoutOrdersInput, order_detailsUncheckedCreateWithoutOrdersInput>;
  };

  export type order_detailsCreateManyOrdersInputEnvelope = {
    data: order_detailsCreateManyOrdersInput | order_detailsCreateManyOrdersInput[];
    skipDuplicates?: boolean;
  };

  export type order_detailsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: order_detailsWhereUniqueInput;
    update: XOR<order_detailsUpdateWithoutOrdersInput, order_detailsUncheckedUpdateWithoutOrdersInput>;
    create: XOR<order_detailsCreateWithoutOrdersInput, order_detailsUncheckedCreateWithoutOrdersInput>;
  };

  export type order_detailsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: order_detailsWhereUniqueInput;
    data: XOR<order_detailsUpdateWithoutOrdersInput, order_detailsUncheckedUpdateWithoutOrdersInput>;
  };

  export type order_detailsUpdateManyWithWhereWithoutOrdersInput = {
    where: order_detailsScalarWhereInput;
    data: XOR<order_detailsUpdateManyMutationInput, order_detailsUncheckedUpdateManyWithoutOrdersInput>;
  };

  export type order_detailsScalarWhereInput = {
    AND?: order_detailsScalarWhereInput | order_detailsScalarWhereInput[];
    OR?: order_detailsScalarWhereInput[];
    NOT?: order_detailsScalarWhereInput | order_detailsScalarWhereInput[];
    order_detail_id?: IntFilter<"order_details"> | number;
    order_id?: IntNullableFilter<"order_details"> | number | null;
    product_id?: StringFilter<"order_details"> | string;
    quantity?: IntFilter<"order_details"> | number;
    price_per_unit?: DecimalFilter<"order_details"> | Decimal | DecimalJsLike | number | string;
    total_amount?: DecimalFilter<"order_details"> | Decimal | DecimalJsLike | number | string;
  };

  export type inventoryCreateWithoutProductsInput = {
    stock_quantity: number;
    stock_status?: string | null;
    warehouse_location?: string | null;
    last_updated?: Date | string | null;
  };

  export type inventoryUncheckedCreateWithoutProductsInput = {
    inventory_id?: number;
    stock_quantity: number;
    stock_status?: string | null;
    warehouse_location?: string | null;
    last_updated?: Date | string | null;
  };

  export type inventoryCreateOrConnectWithoutProductsInput = {
    where: inventoryWhereUniqueInput;
    create: XOR<inventoryCreateWithoutProductsInput, inventoryUncheckedCreateWithoutProductsInput>;
  };

  export type inventoryCreateManyProductsInputEnvelope = {
    data: inventoryCreateManyProductsInput | inventoryCreateManyProductsInput[];
    skipDuplicates?: boolean;
  };

  export type categoriesCreateWithoutProductsInput = {
    name: string;
    description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput;
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput;
  };

  export type categoriesUncheckedCreateWithoutProductsInput = {
    category_id?: number;
    name: string;
    description?: string | null;
    parent_category_id?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput;
  };

  export type categoriesCreateOrConnectWithoutProductsInput = {
    where: categoriesWhereUniqueInput;
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>;
  };

  export type shipping_statusCreateWithoutProductsInput = {
    user_id: number;
    order_date?: Date | string | null;
    shipping_status?: string | null;
    shipping_date?: Date | string | null;
    delivery_date?: Date | string | null;
  };

  export type shipping_statusUncheckedCreateWithoutProductsInput = {
    order_id?: number;
    user_id: number;
    order_date?: Date | string | null;
    shipping_status?: string | null;
    shipping_date?: Date | string | null;
    delivery_date?: Date | string | null;
  };

  export type shipping_statusCreateOrConnectWithoutProductsInput = {
    where: shipping_statusWhereUniqueInput;
    create: XOR<shipping_statusCreateWithoutProductsInput, shipping_statusUncheckedCreateWithoutProductsInput>;
  };

  export type shipping_statusCreateManyProductsInputEnvelope = {
    data: shipping_statusCreateManyProductsInput | shipping_statusCreateManyProductsInput[];
    skipDuplicates?: boolean;
  };

  export type inventoryUpsertWithWhereUniqueWithoutProductsInput = {
    where: inventoryWhereUniqueInput;
    update: XOR<inventoryUpdateWithoutProductsInput, inventoryUncheckedUpdateWithoutProductsInput>;
    create: XOR<inventoryCreateWithoutProductsInput, inventoryUncheckedCreateWithoutProductsInput>;
  };

  export type inventoryUpdateWithWhereUniqueWithoutProductsInput = {
    where: inventoryWhereUniqueInput;
    data: XOR<inventoryUpdateWithoutProductsInput, inventoryUncheckedUpdateWithoutProductsInput>;
  };

  export type inventoryUpdateManyWithWhereWithoutProductsInput = {
    where: inventoryScalarWhereInput;
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyWithoutProductsInput>;
  };

  export type inventoryScalarWhereInput = {
    AND?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
    OR?: inventoryScalarWhereInput[];
    NOT?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
    inventory_id?: IntFilter<"inventory"> | number;
    product_id?: IntNullableFilter<"inventory"> | number | null;
    stock_quantity?: IntFilter<"inventory"> | number;
    stock_status?: StringNullableFilter<"inventory"> | string | null;
    warehouse_location?: StringNullableFilter<"inventory"> | string | null;
    last_updated?: DateTimeNullableFilter<"inventory"> | Date | string | null;
  };

  export type categoriesUpsertWithoutProductsInput = {
    update: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>;
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>;
    where?: categoriesWhereInput;
  };

  export type categoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: categoriesWhereInput;
    data: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>;
  };

  export type categoriesUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput;
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput;
  };

  export type categoriesUncheckedUpdateWithoutProductsInput = {
    category_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    parent_category_id?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput;
  };

  export type shipping_statusUpsertWithWhereUniqueWithoutProductsInput = {
    where: shipping_statusWhereUniqueInput;
    update: XOR<shipping_statusUpdateWithoutProductsInput, shipping_statusUncheckedUpdateWithoutProductsInput>;
    create: XOR<shipping_statusCreateWithoutProductsInput, shipping_statusUncheckedCreateWithoutProductsInput>;
  };

  export type shipping_statusUpdateWithWhereUniqueWithoutProductsInput = {
    where: shipping_statusWhereUniqueInput;
    data: XOR<shipping_statusUpdateWithoutProductsInput, shipping_statusUncheckedUpdateWithoutProductsInput>;
  };

  export type shipping_statusUpdateManyWithWhereWithoutProductsInput = {
    where: shipping_statusScalarWhereInput;
    data: XOR<shipping_statusUpdateManyMutationInput, shipping_statusUncheckedUpdateManyWithoutProductsInput>;
  };

  export type shipping_statusScalarWhereInput = {
    AND?: shipping_statusScalarWhereInput | shipping_statusScalarWhereInput[];
    OR?: shipping_statusScalarWhereInput[];
    NOT?: shipping_statusScalarWhereInput | shipping_statusScalarWhereInput[];
    order_id?: IntFilter<"shipping_status"> | number;
    user_id?: IntFilter<"shipping_status"> | number;
    product_id?: IntFilter<"shipping_status"> | number;
    order_date?: DateTimeNullableFilter<"shipping_status"> | Date | string | null;
    shipping_status?: StringNullableFilter<"shipping_status"> | string | null;
    shipping_date?: DateTimeNullableFilter<"shipping_status"> | Date | string | null;
    delivery_date?: DateTimeNullableFilter<"shipping_status"> | Date | string | null;
  };

  export type productsCreateWithoutShipping_statusInput = {
    name: string;
    description?: string | null;
    price: Decimal | DecimalJsLike | number | string;
    sku: string;
    weight?: Decimal | DecimalJsLike | number | string | null;
    dimensions?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: string | null;
    model_number?: string | null;
    inventory?: inventoryCreateNestedManyWithoutProductsInput;
    categories?: categoriesCreateNestedOneWithoutProductsInput;
  };

  export type productsUncheckedCreateWithoutShipping_statusInput = {
    product_id?: number;
    category_id?: number | null;
    name: string;
    description?: string | null;
    price: Decimal | DecimalJsLike | number | string;
    sku: string;
    weight?: Decimal | DecimalJsLike | number | string | null;
    dimensions?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: string | null;
    model_number?: string | null;
    inventory?: inventoryUncheckedCreateNestedManyWithoutProductsInput;
  };

  export type productsCreateOrConnectWithoutShipping_statusInput = {
    where: productsWhereUniqueInput;
    create: XOR<productsCreateWithoutShipping_statusInput, productsUncheckedCreateWithoutShipping_statusInput>;
  };

  export type productsUpsertWithoutShipping_statusInput = {
    update: XOR<productsUpdateWithoutShipping_statusInput, productsUncheckedUpdateWithoutShipping_statusInput>;
    create: XOR<productsCreateWithoutShipping_statusInput, productsUncheckedCreateWithoutShipping_statusInput>;
    where?: productsWhereInput;
  };

  export type productsUpdateToOneWithWhereWithoutShipping_statusInput = {
    where?: productsWhereInput;
    data: XOR<productsUpdateWithoutShipping_statusInput, productsUncheckedUpdateWithoutShipping_statusInput>;
  };

  export type productsUpdateWithoutShipping_statusInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    sku?: StringFieldUpdateOperationsInput | string;
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null;
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: NullableStringFieldUpdateOperationsInput | string | null;
    model_number?: NullableStringFieldUpdateOperationsInput | string | null;
    inventory?: inventoryUpdateManyWithoutProductsNestedInput;
    categories?: categoriesUpdateOneWithoutProductsNestedInput;
  };

  export type productsUncheckedUpdateWithoutShipping_statusInput = {
    product_id?: IntFieldUpdateOperationsInput | number;
    category_id?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    sku?: StringFieldUpdateOperationsInput | string;
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null;
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: NullableStringFieldUpdateOperationsInput | string | null;
    model_number?: NullableStringFieldUpdateOperationsInput | string | null;
    inventory?: inventoryUncheckedUpdateManyWithoutProductsNestedInput;
  };

  export type categoriesCreateManyCategoriesInput = {
    category_id?: number;
    name: string;
    description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type productsCreateManyCategoriesInput = {
    product_id?: number;
    name: string;
    description?: string | null;
    price: Decimal | DecimalJsLike | number | string;
    sku: string;
    weight?: Decimal | DecimalJsLike | number | string | null;
    dimensions?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: string | null;
    model_number?: string | null;
  };

  export type categoriesUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput;
    products?: productsUpdateManyWithoutCategoriesNestedInput;
  };

  export type categoriesUncheckedUpdateWithoutCategoriesInput = {
    category_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput;
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput;
  };

  export type categoriesUncheckedUpdateManyWithoutCategoriesInput = {
    category_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type productsUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    sku?: StringFieldUpdateOperationsInput | string;
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null;
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: NullableStringFieldUpdateOperationsInput | string | null;
    model_number?: NullableStringFieldUpdateOperationsInput | string | null;
    inventory?: inventoryUpdateManyWithoutProductsNestedInput;
    shipping_status?: shipping_statusUpdateManyWithoutProductsNestedInput;
  };

  export type productsUncheckedUpdateWithoutCategoriesInput = {
    product_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    sku?: StringFieldUpdateOperationsInput | string;
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null;
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: NullableStringFieldUpdateOperationsInput | string | null;
    model_number?: NullableStringFieldUpdateOperationsInput | string | null;
    inventory?: inventoryUncheckedUpdateManyWithoutProductsNestedInput;
    shipping_status?: shipping_statusUncheckedUpdateManyWithoutProductsNestedInput;
  };

  export type productsUncheckedUpdateManyWithoutCategoriesInput = {
    product_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    sku?: StringFieldUpdateOperationsInput | string;
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null;
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tech_description?: NullableJsonNullValueInput | InputJsonValue;
    product_images?: NullableJsonNullValueInput | InputJsonValue;
    tech_description_raw?: NullableStringFieldUpdateOperationsInput | string | null;
    model_number?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type order_detailsCreateManyOrdersInput = {
    order_detail_id?: number;
    product_id: string;
    quantity: number;
    price_per_unit: Decimal | DecimalJsLike | number | string;
    total_amount: Decimal | DecimalJsLike | number | string;
  };

  export type order_detailsUpdateWithoutOrdersInput = {
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
  };

  export type order_detailsUncheckedUpdateWithoutOrdersInput = {
    order_detail_id?: IntFieldUpdateOperationsInput | number;
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
  };

  export type order_detailsUncheckedUpdateManyWithoutOrdersInput = {
    order_detail_id?: IntFieldUpdateOperationsInput | number;
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
  };

  export type inventoryCreateManyProductsInput = {
    inventory_id?: number;
    stock_quantity: number;
    stock_status?: string | null;
    warehouse_location?: string | null;
    last_updated?: Date | string | null;
  };

  export type shipping_statusCreateManyProductsInput = {
    order_id?: number;
    user_id: number;
    order_date?: Date | string | null;
    shipping_status?: string | null;
    shipping_date?: Date | string | null;
    delivery_date?: Date | string | null;
  };

  export type inventoryUpdateWithoutProductsInput = {
    stock_quantity?: IntFieldUpdateOperationsInput | number;
    stock_status?: NullableStringFieldUpdateOperationsInput | string | null;
    warehouse_location?: NullableStringFieldUpdateOperationsInput | string | null;
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type inventoryUncheckedUpdateWithoutProductsInput = {
    inventory_id?: IntFieldUpdateOperationsInput | number;
    stock_quantity?: IntFieldUpdateOperationsInput | number;
    stock_status?: NullableStringFieldUpdateOperationsInput | string | null;
    warehouse_location?: NullableStringFieldUpdateOperationsInput | string | null;
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type inventoryUncheckedUpdateManyWithoutProductsInput = {
    inventory_id?: IntFieldUpdateOperationsInput | number;
    stock_quantity?: IntFieldUpdateOperationsInput | number;
    stock_status?: NullableStringFieldUpdateOperationsInput | string | null;
    warehouse_location?: NullableStringFieldUpdateOperationsInput | string | null;
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type shipping_statusUpdateWithoutProductsInput = {
    user_id?: IntFieldUpdateOperationsInput | number;
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shipping_status?: NullableStringFieldUpdateOperationsInput | string | null;
    shipping_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type shipping_statusUncheckedUpdateWithoutProductsInput = {
    order_id?: IntFieldUpdateOperationsInput | number;
    user_id?: IntFieldUpdateOperationsInput | number;
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shipping_status?: NullableStringFieldUpdateOperationsInput | string | null;
    shipping_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type shipping_statusUncheckedUpdateManyWithoutProductsInput = {
    order_id?: IntFieldUpdateOperationsInput | number;
    user_id?: IntFieldUpdateOperationsInput | number;
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shipping_status?: NullableStringFieldUpdateOperationsInput | string | null;
    shipping_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
