
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model employees
 * 
 */
export type employees = $Result.DefaultSelection<Prisma.$employeesPayload>
/**
 * Model organizations
 * 
 */
export type organizations = $Result.DefaultSelection<Prisma.$organizationsPayload>
/**
 * Model phones
 * 
 */
export type phones = $Result.DefaultSelection<Prisma.$phonesPayload>
/**
 * Model subcategories
 * 
 */
export type subcategories = $Result.DefaultSelection<Prisma.$subcategoriesPayload>
/**
 * Model shifts
 * 
 */
export type shifts = $Result.DefaultSelection<Prisma.$shiftsPayload>
/**
 * Model duty_officers
 * 
 */
export type duty_officers = $Result.DefaultSelection<Prisma.$duty_officersPayload>

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.employees`: Exposes CRUD operations for the **employees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employees.findMany()
    * ```
    */
  get employees(): Prisma.employeesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizations`: Exposes CRUD operations for the **organizations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organizations.findMany()
    * ```
    */
  get organizations(): Prisma.organizationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.phones`: Exposes CRUD operations for the **phones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phones
    * const phones = await prisma.phones.findMany()
    * ```
    */
  get phones(): Prisma.phonesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subcategories`: Exposes CRUD operations for the **subcategories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subcategories
    * const subcategories = await prisma.subcategories.findMany()
    * ```
    */
  get subcategories(): Prisma.subcategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shifts`: Exposes CRUD operations for the **shifts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shifts
    * const shifts = await prisma.shifts.findMany()
    * ```
    */
  get shifts(): Prisma.shiftsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.duty_officers`: Exposes CRUD operations for the **duty_officers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Duty_officers
    * const duty_officers = await prisma.duty_officers.findMany()
    * ```
    */
  get duty_officers(): Prisma.duty_officersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    categories: 'categories',
    employees: 'employees',
    organizations: 'organizations',
    phones: 'phones',
    subcategories: 'subcategories',
    shifts: 'shifts',
    duty_officers: 'duty_officers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categories" | "employees" | "organizations" | "phones" | "subcategories" | "shifts" | "duty_officers"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      employees: {
        payload: Prisma.$employeesPayload<ExtArgs>
        fields: Prisma.employeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.employeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.employeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          findFirst: {
            args: Prisma.employeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.employeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          findMany: {
            args: Prisma.employeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>[]
          }
          create: {
            args: Prisma.employeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          createMany: {
            args: Prisma.employeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.employeesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>[]
          }
          delete: {
            args: Prisma.employeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          update: {
            args: Prisma.employeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          deleteMany: {
            args: Prisma.employeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.employeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.employeesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>[]
          }
          upsert: {
            args: Prisma.employeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          aggregate: {
            args: Prisma.EmployeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployees>
          }
          groupBy: {
            args: Prisma.employeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.employeesCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeesCountAggregateOutputType> | number
          }
        }
      }
      organizations: {
        payload: Prisma.$organizationsPayload<ExtArgs>
        fields: Prisma.organizationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organizationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organizationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>
          }
          findFirst: {
            args: Prisma.organizationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organizationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>
          }
          findMany: {
            args: Prisma.organizationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>[]
          }
          create: {
            args: Prisma.organizationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>
          }
          createMany: {
            args: Prisma.organizationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.organizationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>[]
          }
          delete: {
            args: Prisma.organizationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>
          }
          update: {
            args: Prisma.organizationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>
          }
          deleteMany: {
            args: Prisma.organizationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.organizationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.organizationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>[]
          }
          upsert: {
            args: Prisma.organizationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>
          }
          aggregate: {
            args: Prisma.OrganizationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizations>
          }
          groupBy: {
            args: Prisma.organizationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.organizationsCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationsCountAggregateOutputType> | number
          }
        }
      }
      phones: {
        payload: Prisma.$phonesPayload<ExtArgs>
        fields: Prisma.phonesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.phonesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.phonesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload>
          }
          findFirst: {
            args: Prisma.phonesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.phonesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload>
          }
          findMany: {
            args: Prisma.phonesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload>[]
          }
          create: {
            args: Prisma.phonesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload>
          }
          createMany: {
            args: Prisma.phonesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.phonesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload>[]
          }
          delete: {
            args: Prisma.phonesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload>
          }
          update: {
            args: Prisma.phonesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload>
          }
          deleteMany: {
            args: Prisma.phonesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.phonesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.phonesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload>[]
          }
          upsert: {
            args: Prisma.phonesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload>
          }
          aggregate: {
            args: Prisma.PhonesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhones>
          }
          groupBy: {
            args: Prisma.phonesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhonesGroupByOutputType>[]
          }
          count: {
            args: Prisma.phonesCountArgs<ExtArgs>
            result: $Utils.Optional<PhonesCountAggregateOutputType> | number
          }
        }
      }
      subcategories: {
        payload: Prisma.$subcategoriesPayload<ExtArgs>
        fields: Prisma.subcategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subcategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subcategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload>
          }
          findFirst: {
            args: Prisma.subcategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subcategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload>
          }
          findMany: {
            args: Prisma.subcategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload>[]
          }
          create: {
            args: Prisma.subcategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload>
          }
          createMany: {
            args: Prisma.subcategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subcategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload>[]
          }
          delete: {
            args: Prisma.subcategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload>
          }
          update: {
            args: Prisma.subcategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload>
          }
          deleteMany: {
            args: Prisma.subcategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subcategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subcategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload>[]
          }
          upsert: {
            args: Prisma.subcategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload>
          }
          aggregate: {
            args: Prisma.SubcategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubcategories>
          }
          groupBy: {
            args: Prisma.subcategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubcategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.subcategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<SubcategoriesCountAggregateOutputType> | number
          }
        }
      }
      shifts: {
        payload: Prisma.$shiftsPayload<ExtArgs>
        fields: Prisma.shiftsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.shiftsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shiftsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.shiftsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shiftsPayload>
          }
          findFirst: {
            args: Prisma.shiftsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shiftsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.shiftsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shiftsPayload>
          }
          findMany: {
            args: Prisma.shiftsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shiftsPayload>[]
          }
          create: {
            args: Prisma.shiftsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shiftsPayload>
          }
          createMany: {
            args: Prisma.shiftsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.shiftsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shiftsPayload>[]
          }
          delete: {
            args: Prisma.shiftsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shiftsPayload>
          }
          update: {
            args: Prisma.shiftsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shiftsPayload>
          }
          deleteMany: {
            args: Prisma.shiftsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.shiftsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.shiftsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shiftsPayload>[]
          }
          upsert: {
            args: Prisma.shiftsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shiftsPayload>
          }
          aggregate: {
            args: Prisma.ShiftsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShifts>
          }
          groupBy: {
            args: Prisma.shiftsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftsGroupByOutputType>[]
          }
          count: {
            args: Prisma.shiftsCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftsCountAggregateOutputType> | number
          }
        }
      }
      duty_officers: {
        payload: Prisma.$duty_officersPayload<ExtArgs>
        fields: Prisma.duty_officersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.duty_officersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duty_officersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.duty_officersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duty_officersPayload>
          }
          findFirst: {
            args: Prisma.duty_officersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duty_officersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.duty_officersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duty_officersPayload>
          }
          findMany: {
            args: Prisma.duty_officersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duty_officersPayload>[]
          }
          create: {
            args: Prisma.duty_officersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duty_officersPayload>
          }
          createMany: {
            args: Prisma.duty_officersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.duty_officersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duty_officersPayload>[]
          }
          delete: {
            args: Prisma.duty_officersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duty_officersPayload>
          }
          update: {
            args: Prisma.duty_officersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duty_officersPayload>
          }
          deleteMany: {
            args: Prisma.duty_officersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.duty_officersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.duty_officersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duty_officersPayload>[]
          }
          upsert: {
            args: Prisma.duty_officersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duty_officersPayload>
          }
          aggregate: {
            args: Prisma.Duty_officersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDuty_officers>
          }
          groupBy: {
            args: Prisma.duty_officersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Duty_officersGroupByOutputType>[]
          }
          count: {
            args: Prisma.duty_officersCountArgs<ExtArgs>
            result: $Utils.Optional<Duty_officersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    categories?: categoriesOmit
    employees?: employeesOmit
    organizations?: organizationsOmit
    phones?: phonesOmit
    subcategories?: subcategoriesOmit
    shifts?: shiftsOmit
    duty_officers?: duty_officersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    subcategories: number
    organizations: number
    duty_officers: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | CategoriesCountOutputTypeCountSubcategoriesArgs
    organizations?: boolean | CategoriesCountOutputTypeCountOrganizationsArgs
    duty_officers?: boolean | CategoriesCountOutputTypeCountDuty_officersArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountSubcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subcategoriesWhereInput
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountOrganizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationsWhereInput
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountDuty_officersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: duty_officersWhereInput
  }


  /**
   * Count Type EmployeesCountOutputType
   */

  export type EmployeesCountOutputType = {
    phones: number
    shifts: number
  }

  export type EmployeesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phones?: boolean | EmployeesCountOutputTypeCountPhonesArgs
    shifts?: boolean | EmployeesCountOutputTypeCountShiftsArgs
  }

  // Custom InputTypes
  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeesCountOutputType
     */
    select?: EmployeesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeCountPhonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: phonesWhereInput
  }

  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeCountShiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shiftsWhereInput
  }


  /**
   * Count Type OrganizationsCountOutputType
   */

  export type OrganizationsCountOutputType = {
    employees: number
    shifts: number
    duty_officers: number
  }

  export type OrganizationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | OrganizationsCountOutputTypeCountEmployeesArgs
    shifts?: boolean | OrganizationsCountOutputTypeCountShiftsArgs
    duty_officers?: boolean | OrganizationsCountOutputTypeCountDuty_officersArgs
  }

  // Custom InputTypes
  /**
   * OrganizationsCountOutputType without action
   */
  export type OrganizationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationsCountOutputType
     */
    select?: OrganizationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationsCountOutputType without action
   */
  export type OrganizationsCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeesWhereInput
  }

  /**
   * OrganizationsCountOutputType without action
   */
  export type OrganizationsCountOutputTypeCountShiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shiftsWhereInput
  }

  /**
   * OrganizationsCountOutputType without action
   */
  export type OrganizationsCountOutputTypeCountDuty_officersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: duty_officersWhereInput
  }


  /**
   * Count Type SubcategoriesCountOutputType
   */

  export type SubcategoriesCountOutputType = {
    organizations: number
    duty_officers: number
  }

  export type SubcategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizations?: boolean | SubcategoriesCountOutputTypeCountOrganizationsArgs
    duty_officers?: boolean | SubcategoriesCountOutputTypeCountDuty_officersArgs
  }

  // Custom InputTypes
  /**
   * SubcategoriesCountOutputType without action
   */
  export type SubcategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoriesCountOutputType
     */
    select?: SubcategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubcategoriesCountOutputType without action
   */
  export type SubcategoriesCountOutputTypeCountOrganizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationsWhereInput
  }

  /**
   * SubcategoriesCountOutputType without action
   */
  export type SubcategoriesCountOutputTypeCountDuty_officersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: duty_officersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subcategories?: boolean | categories$subcategoriesArgs<ExtArgs>
    organizations?: boolean | categories$organizationsArgs<ExtArgs>
    duty_officers?: boolean | categories$duty_officersArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | categories$subcategoriesArgs<ExtArgs>
    organizations?: boolean | categories$organizationsArgs<ExtArgs>
    duty_officers?: boolean | categories$duty_officersArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      subcategories: Prisma.$subcategoriesPayload<ExtArgs>[]
      organizations: Prisma.$organizationsPayload<ExtArgs>[]
      duty_officers: Prisma.$duty_officersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
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
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

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
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subcategories<T extends categories$subcategoriesArgs<ExtArgs> = {}>(args?: Subset<T, categories$subcategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organizations<T extends categories$organizationsArgs<ExtArgs> = {}>(args?: Subset<T, categories$organizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    duty_officers<T extends categories$duty_officersArgs<ExtArgs> = {}>(args?: Subset<T, categories$duty_officersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$duty_officersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly name: FieldRef<"categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.subcategories
   */
  export type categories$subcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    where?: subcategoriesWhereInput
    orderBy?: subcategoriesOrderByWithRelationInput | subcategoriesOrderByWithRelationInput[]
    cursor?: subcategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubcategoriesScalarFieldEnum | SubcategoriesScalarFieldEnum[]
  }

  /**
   * categories.organizations
   */
  export type categories$organizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    where?: organizationsWhereInput
    orderBy?: organizationsOrderByWithRelationInput | organizationsOrderByWithRelationInput[]
    cursor?: organizationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationsScalarFieldEnum | OrganizationsScalarFieldEnum[]
  }

  /**
   * categories.duty_officers
   */
  export type categories$duty_officersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duty_officers
     */
    select?: duty_officersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duty_officers
     */
    omit?: duty_officersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duty_officersInclude<ExtArgs> | null
    where?: duty_officersWhereInput
    orderBy?: duty_officersOrderByWithRelationInput | duty_officersOrderByWithRelationInput[]
    cursor?: duty_officersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Duty_officersScalarFieldEnum | Duty_officersScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model employees
   */

  export type AggregateEmployees = {
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  export type EmployeesAvgAggregateOutputType = {
    id: number | null
    organization_id: number | null
  }

  export type EmployeesSumAggregateOutputType = {
    id: number | null
    organization_id: number | null
  }

  export type EmployeesMinAggregateOutputType = {
    id: number | null
    full_name: string | null
    position: string | null
    organization_id: number | null
  }

  export type EmployeesMaxAggregateOutputType = {
    id: number | null
    full_name: string | null
    position: string | null
    organization_id: number | null
  }

  export type EmployeesCountAggregateOutputType = {
    id: number
    full_name: number
    position: number
    organization_id: number
    _all: number
  }


  export type EmployeesAvgAggregateInputType = {
    id?: true
    organization_id?: true
  }

  export type EmployeesSumAggregateInputType = {
    id?: true
    organization_id?: true
  }

  export type EmployeesMinAggregateInputType = {
    id?: true
    full_name?: true
    position?: true
    organization_id?: true
  }

  export type EmployeesMaxAggregateInputType = {
    id?: true
    full_name?: true
    position?: true
    organization_id?: true
  }

  export type EmployeesCountAggregateInputType = {
    id?: true
    full_name?: true
    position?: true
    organization_id?: true
    _all?: true
  }

  export type EmployeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to aggregate.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned employees
    **/
    _count?: true | EmployeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeesMaxAggregateInputType
  }

  export type GetEmployeesAggregateType<T extends EmployeesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployees[P]>
      : GetScalarType<T[P], AggregateEmployees[P]>
  }




  export type employeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeesWhereInput
    orderBy?: employeesOrderByWithAggregationInput | employeesOrderByWithAggregationInput[]
    by: EmployeesScalarFieldEnum[] | EmployeesScalarFieldEnum
    having?: employeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeesCountAggregateInputType | true
    _avg?: EmployeesAvgAggregateInputType
    _sum?: EmployeesSumAggregateInputType
    _min?: EmployeesMinAggregateInputType
    _max?: EmployeesMaxAggregateInputType
  }

  export type EmployeesGroupByOutputType = {
    id: number
    full_name: string
    position: string
    organization_id: number
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  type GetEmployeesGroupByPayload<T extends employeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
        }
      >
    >


  export type employeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    position?: boolean
    organization_id?: boolean
    organization?: boolean | organizationsDefaultArgs<ExtArgs>
    phones?: boolean | employees$phonesArgs<ExtArgs>
    shifts?: boolean | employees$shiftsArgs<ExtArgs>
    _count?: boolean | EmployeesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type employeesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    position?: boolean
    organization_id?: boolean
    organization?: boolean | organizationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type employeesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    position?: boolean
    organization_id?: boolean
    organization?: boolean | organizationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type employeesSelectScalar = {
    id?: boolean
    full_name?: boolean
    position?: boolean
    organization_id?: boolean
  }

  export type employeesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "position" | "organization_id", ExtArgs["result"]["employees"]>
  export type employeesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationsDefaultArgs<ExtArgs>
    phones?: boolean | employees$phonesArgs<ExtArgs>
    shifts?: boolean | employees$shiftsArgs<ExtArgs>
    _count?: boolean | EmployeesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type employeesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationsDefaultArgs<ExtArgs>
  }
  export type employeesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationsDefaultArgs<ExtArgs>
  }

  export type $employeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "employees"
    objects: {
      organization: Prisma.$organizationsPayload<ExtArgs>
      phones: Prisma.$phonesPayload<ExtArgs>[]
      shifts: Prisma.$shiftsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      full_name: string
      position: string
      organization_id: number
    }, ExtArgs["result"]["employees"]>
    composites: {}
  }

  type employeesGetPayload<S extends boolean | null | undefined | employeesDefaultArgs> = $Result.GetResult<Prisma.$employeesPayload, S>

  type employeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<employeesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeesCountAggregateInputType | true
    }

  export interface employeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employees'], meta: { name: 'employees' } }
    /**
     * Find zero or one Employees that matches the filter.
     * @param {employeesFindUniqueArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends employeesFindUniqueArgs>(args: SelectSubset<T, employeesFindUniqueArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employees that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {employeesFindUniqueOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends employeesFindUniqueOrThrowArgs>(args: SelectSubset<T, employeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindFirstArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends employeesFindFirstArgs>(args?: SelectSubset<T, employeesFindFirstArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindFirstOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends employeesFindFirstOrThrowArgs>(args?: SelectSubset<T, employeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employees.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employees.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeesWithIdOnly = await prisma.employees.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends employeesFindManyArgs>(args?: SelectSubset<T, employeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employees.
     * @param {employeesCreateArgs} args - Arguments to create a Employees.
     * @example
     * // Create one Employees
     * const Employees = await prisma.employees.create({
     *   data: {
     *     // ... data to create a Employees
     *   }
     * })
     * 
     */
    create<T extends employeesCreateArgs>(args: SelectSubset<T, employeesCreateArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {employeesCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends employeesCreateManyArgs>(args?: SelectSubset<T, employeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {employeesCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeesWithIdOnly = await prisma.employees.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends employeesCreateManyAndReturnArgs>(args?: SelectSubset<T, employeesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employees.
     * @param {employeesDeleteArgs} args - Arguments to delete one Employees.
     * @example
     * // Delete one Employees
     * const Employees = await prisma.employees.delete({
     *   where: {
     *     // ... filter to delete one Employees
     *   }
     * })
     * 
     */
    delete<T extends employeesDeleteArgs>(args: SelectSubset<T, employeesDeleteArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employees.
     * @param {employeesUpdateArgs} args - Arguments to update one Employees.
     * @example
     * // Update one Employees
     * const employees = await prisma.employees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends employeesUpdateArgs>(args: SelectSubset<T, employeesUpdateArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {employeesDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends employeesDeleteManyArgs>(args?: SelectSubset<T, employeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends employeesUpdateManyArgs>(args: SelectSubset<T, employeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {employeesUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeesWithIdOnly = await prisma.employees.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends employeesUpdateManyAndReturnArgs>(args: SelectSubset<T, employeesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employees.
     * @param {employeesUpsertArgs} args - Arguments to update or create a Employees.
     * @example
     * // Update or create a Employees
     * const employees = await prisma.employees.upsert({
     *   create: {
     *     // ... data to create a Employees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employees we want to update
     *   }
     * })
     */
    upsert<T extends employeesUpsertArgs>(args: SelectSubset<T, employeesUpsertArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employees.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends employeesCountArgs>(
      args?: Subset<T, employeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeesAggregateArgs>(args: Subset<T, EmployeesAggregateArgs>): Prisma.PrismaPromise<GetEmployeesAggregateType<T>>

    /**
     * Group by Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesGroupByArgs} args - Group by arguments.
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
      T extends employeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeesGroupByArgs['orderBy'] }
        : { orderBy?: employeesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, employeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the employees model
   */
  readonly fields: employeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends organizationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, organizationsDefaultArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    phones<T extends employees$phonesArgs<ExtArgs> = {}>(args?: Subset<T, employees$phonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shifts<T extends employees$shiftsArgs<ExtArgs> = {}>(args?: Subset<T, employees$shiftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shiftsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the employees model
   */
  interface employeesFieldRefs {
    readonly id: FieldRef<"employees", 'Int'>
    readonly full_name: FieldRef<"employees", 'String'>
    readonly position: FieldRef<"employees", 'String'>
    readonly organization_id: FieldRef<"employees", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * employees findUnique
   */
  export type employeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees findUniqueOrThrow
   */
  export type employeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees findFirst
   */
  export type employeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees findFirstOrThrow
   */
  export type employeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees findMany
   */
  export type employeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees create
   */
  export type employeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * The data needed to create a employees.
     */
    data: XOR<employeesCreateInput, employeesUncheckedCreateInput>
  }

  /**
   * employees createMany
   */
  export type employeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeesCreateManyInput | employeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * employees createManyAndReturn
   */
  export type employeesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * The data used to create many employees.
     */
    data: employeesCreateManyInput | employeesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * employees update
   */
  export type employeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * The data needed to update a employees.
     */
    data: XOR<employeesUpdateInput, employeesUncheckedUpdateInput>
    /**
     * Choose, which employees to update.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees updateMany
   */
  export type employeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeesUpdateManyMutationInput, employeesUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeesWhereInput
    /**
     * Limit how many employees to update.
     */
    limit?: number
  }

  /**
   * employees updateManyAndReturn
   */
  export type employeesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * The data used to update employees.
     */
    data: XOR<employeesUpdateManyMutationInput, employeesUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeesWhereInput
    /**
     * Limit how many employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * employees upsert
   */
  export type employeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * The filter to search for the employees to update in case it exists.
     */
    where: employeesWhereUniqueInput
    /**
     * In case the employees found by the `where` argument doesn't exist, create a new employees with this data.
     */
    create: XOR<employeesCreateInput, employeesUncheckedCreateInput>
    /**
     * In case the employees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeesUpdateInput, employeesUncheckedUpdateInput>
  }

  /**
   * employees delete
   */
  export type employeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter which employees to delete.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees deleteMany
   */
  export type employeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeesWhereInput
    /**
     * Limit how many employees to delete.
     */
    limit?: number
  }

  /**
   * employees.phones
   */
  export type employees$phonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    where?: phonesWhereInput
    orderBy?: phonesOrderByWithRelationInput | phonesOrderByWithRelationInput[]
    cursor?: phonesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhonesScalarFieldEnum | PhonesScalarFieldEnum[]
  }

  /**
   * employees.shifts
   */
  export type employees$shiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shifts
     */
    select?: shiftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shifts
     */
    omit?: shiftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shiftsInclude<ExtArgs> | null
    where?: shiftsWhereInput
    orderBy?: shiftsOrderByWithRelationInput | shiftsOrderByWithRelationInput[]
    cursor?: shiftsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftsScalarFieldEnum | ShiftsScalarFieldEnum[]
  }

  /**
   * employees without action
   */
  export type employeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
  }


  /**
   * Model organizations
   */

  export type AggregateOrganizations = {
    _count: OrganizationsCountAggregateOutputType | null
    _avg: OrganizationsAvgAggregateOutputType | null
    _sum: OrganizationsSumAggregateOutputType | null
    _min: OrganizationsMinAggregateOutputType | null
    _max: OrganizationsMaxAggregateOutputType | null
  }

  export type OrganizationsAvgAggregateOutputType = {
    id: number | null
    subcategory_id: number | null
    category_id: number | null
  }

  export type OrganizationsSumAggregateOutputType = {
    id: number | null
    subcategory_id: number | null
    category_id: number | null
  }

  export type OrganizationsMinAggregateOutputType = {
    id: number | null
    name: string | null
    subcategory_id: number | null
    category_id: number | null
  }

  export type OrganizationsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    subcategory_id: number | null
    category_id: number | null
  }

  export type OrganizationsCountAggregateOutputType = {
    id: number
    name: number
    subcategory_id: number
    category_id: number
    _all: number
  }


  export type OrganizationsAvgAggregateInputType = {
    id?: true
    subcategory_id?: true
    category_id?: true
  }

  export type OrganizationsSumAggregateInputType = {
    id?: true
    subcategory_id?: true
    category_id?: true
  }

  export type OrganizationsMinAggregateInputType = {
    id?: true
    name?: true
    subcategory_id?: true
    category_id?: true
  }

  export type OrganizationsMaxAggregateInputType = {
    id?: true
    name?: true
    subcategory_id?: true
    category_id?: true
  }

  export type OrganizationsCountAggregateInputType = {
    id?: true
    name?: true
    subcategory_id?: true
    category_id?: true
    _all?: true
  }

  export type OrganizationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to aggregate.
     */
    where?: organizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationsOrderByWithRelationInput | organizationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organizations
    **/
    _count?: true | OrganizationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationsMaxAggregateInputType
  }

  export type GetOrganizationsAggregateType<T extends OrganizationsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizations[P]>
      : GetScalarType<T[P], AggregateOrganizations[P]>
  }




  export type organizationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationsWhereInput
    orderBy?: organizationsOrderByWithAggregationInput | organizationsOrderByWithAggregationInput[]
    by: OrganizationsScalarFieldEnum[] | OrganizationsScalarFieldEnum
    having?: organizationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationsCountAggregateInputType | true
    _avg?: OrganizationsAvgAggregateInputType
    _sum?: OrganizationsSumAggregateInputType
    _min?: OrganizationsMinAggregateInputType
    _max?: OrganizationsMaxAggregateInputType
  }

  export type OrganizationsGroupByOutputType = {
    id: number
    name: string
    subcategory_id: number | null
    category_id: number
    _count: OrganizationsCountAggregateOutputType | null
    _avg: OrganizationsAvgAggregateOutputType | null
    _sum: OrganizationsSumAggregateOutputType | null
    _min: OrganizationsMinAggregateOutputType | null
    _max: OrganizationsMaxAggregateOutputType | null
  }

  type GetOrganizationsGroupByPayload<T extends organizationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationsGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationsGroupByOutputType[P]>
        }
      >
    >


  export type organizationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subcategory_id?: boolean
    category_id?: boolean
    subcategory?: boolean | organizations$subcategoryArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    employees?: boolean | organizations$employeesArgs<ExtArgs>
    shifts?: boolean | organizations$shiftsArgs<ExtArgs>
    duty_officers?: boolean | organizations$duty_officersArgs<ExtArgs>
    _count?: boolean | OrganizationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizations"]>

  export type organizationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subcategory_id?: boolean
    category_id?: boolean
    subcategory?: boolean | organizations$subcategoryArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizations"]>

  export type organizationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subcategory_id?: boolean
    category_id?: boolean
    subcategory?: boolean | organizations$subcategoryArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizations"]>

  export type organizationsSelectScalar = {
    id?: boolean
    name?: boolean
    subcategory_id?: boolean
    category_id?: boolean
  }

  export type organizationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "subcategory_id" | "category_id", ExtArgs["result"]["organizations"]>
  export type organizationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategory?: boolean | organizations$subcategoryArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    employees?: boolean | organizations$employeesArgs<ExtArgs>
    shifts?: boolean | organizations$shiftsArgs<ExtArgs>
    duty_officers?: boolean | organizations$duty_officersArgs<ExtArgs>
    _count?: boolean | OrganizationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type organizationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategory?: boolean | organizations$subcategoryArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }
  export type organizationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategory?: boolean | organizations$subcategoryArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }

  export type $organizationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organizations"
    objects: {
      subcategory: Prisma.$subcategoriesPayload<ExtArgs> | null
      category: Prisma.$categoriesPayload<ExtArgs>
      employees: Prisma.$employeesPayload<ExtArgs>[]
      shifts: Prisma.$shiftsPayload<ExtArgs>[]
      duty_officers: Prisma.$duty_officersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      subcategory_id: number | null
      category_id: number
    }, ExtArgs["result"]["organizations"]>
    composites: {}
  }

  type organizationsGetPayload<S extends boolean | null | undefined | organizationsDefaultArgs> = $Result.GetResult<Prisma.$organizationsPayload, S>

  type organizationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<organizationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationsCountAggregateInputType | true
    }

  export interface organizationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organizations'], meta: { name: 'organizations' } }
    /**
     * Find zero or one Organizations that matches the filter.
     * @param {organizationsFindUniqueArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends organizationsFindUniqueArgs>(args: SelectSubset<T, organizationsFindUniqueArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organizations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {organizationsFindUniqueOrThrowArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends organizationsFindUniqueOrThrowArgs>(args: SelectSubset<T, organizationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsFindFirstArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends organizationsFindFirstArgs>(args?: SelectSubset<T, organizationsFindFirstArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organizations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsFindFirstOrThrowArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends organizationsFindFirstOrThrowArgs>(args?: SelectSubset<T, organizationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organizations.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organizations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationsWithIdOnly = await prisma.organizations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends organizationsFindManyArgs>(args?: SelectSubset<T, organizationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organizations.
     * @param {organizationsCreateArgs} args - Arguments to create a Organizations.
     * @example
     * // Create one Organizations
     * const Organizations = await prisma.organizations.create({
     *   data: {
     *     // ... data to create a Organizations
     *   }
     * })
     * 
     */
    create<T extends organizationsCreateArgs>(args: SelectSubset<T, organizationsCreateArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {organizationsCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organizations = await prisma.organizations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends organizationsCreateManyArgs>(args?: SelectSubset<T, organizationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {organizationsCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organizations = await prisma.organizations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationsWithIdOnly = await prisma.organizations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends organizationsCreateManyAndReturnArgs>(args?: SelectSubset<T, organizationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organizations.
     * @param {organizationsDeleteArgs} args - Arguments to delete one Organizations.
     * @example
     * // Delete one Organizations
     * const Organizations = await prisma.organizations.delete({
     *   where: {
     *     // ... filter to delete one Organizations
     *   }
     * })
     * 
     */
    delete<T extends organizationsDeleteArgs>(args: SelectSubset<T, organizationsDeleteArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organizations.
     * @param {organizationsUpdateArgs} args - Arguments to update one Organizations.
     * @example
     * // Update one Organizations
     * const organizations = await prisma.organizations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends organizationsUpdateArgs>(args: SelectSubset<T, organizationsUpdateArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {organizationsDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organizations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends organizationsDeleteManyArgs>(args?: SelectSubset<T, organizationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organizations = await prisma.organizations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends organizationsUpdateManyArgs>(args: SelectSubset<T, organizationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {organizationsUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organizations = await prisma.organizations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationsWithIdOnly = await prisma.organizations.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends organizationsUpdateManyAndReturnArgs>(args: SelectSubset<T, organizationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organizations.
     * @param {organizationsUpsertArgs} args - Arguments to update or create a Organizations.
     * @example
     * // Update or create a Organizations
     * const organizations = await prisma.organizations.upsert({
     *   create: {
     *     // ... data to create a Organizations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organizations we want to update
     *   }
     * })
     */
    upsert<T extends organizationsUpsertArgs>(args: SelectSubset<T, organizationsUpsertArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organizations.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends organizationsCountArgs>(
      args?: Subset<T, organizationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationsAggregateArgs>(args: Subset<T, OrganizationsAggregateArgs>): Prisma.PrismaPromise<GetOrganizationsAggregateType<T>>

    /**
     * Group by Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsGroupByArgs} args - Group by arguments.
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
      T extends organizationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationsGroupByArgs['orderBy'] }
        : { orderBy?: organizationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, organizationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organizations model
   */
  readonly fields: organizationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organizations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subcategory<T extends organizations$subcategoryArgs<ExtArgs> = {}>(args?: Subset<T, organizations$subcategoryArgs<ExtArgs>>): Prisma__subcategoriesClient<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employees<T extends organizations$employeesArgs<ExtArgs> = {}>(args?: Subset<T, organizations$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shifts<T extends organizations$shiftsArgs<ExtArgs> = {}>(args?: Subset<T, organizations$shiftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shiftsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    duty_officers<T extends organizations$duty_officersArgs<ExtArgs> = {}>(args?: Subset<T, organizations$duty_officersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$duty_officersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the organizations model
   */
  interface organizationsFieldRefs {
    readonly id: FieldRef<"organizations", 'Int'>
    readonly name: FieldRef<"organizations", 'String'>
    readonly subcategory_id: FieldRef<"organizations", 'Int'>
    readonly category_id: FieldRef<"organizations", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * organizations findUnique
   */
  export type organizationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where: organizationsWhereUniqueInput
  }

  /**
   * organizations findUniqueOrThrow
   */
  export type organizationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where: organizationsWhereUniqueInput
  }

  /**
   * organizations findFirst
   */
  export type organizationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationsOrderByWithRelationInput | organizationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationsScalarFieldEnum | OrganizationsScalarFieldEnum[]
  }

  /**
   * organizations findFirstOrThrow
   */
  export type organizationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationsOrderByWithRelationInput | organizationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationsScalarFieldEnum | OrganizationsScalarFieldEnum[]
  }

  /**
   * organizations findMany
   */
  export type organizationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationsOrderByWithRelationInput | organizationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organizations.
     */
    cursor?: organizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    distinct?: OrganizationsScalarFieldEnum | OrganizationsScalarFieldEnum[]
  }

  /**
   * organizations create
   */
  export type organizationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    /**
     * The data needed to create a organizations.
     */
    data: XOR<organizationsCreateInput, organizationsUncheckedCreateInput>
  }

  /**
   * organizations createMany
   */
  export type organizationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationsCreateManyInput | organizationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organizations createManyAndReturn
   */
  export type organizationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * The data used to create many organizations.
     */
    data: organizationsCreateManyInput | organizationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * organizations update
   */
  export type organizationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    /**
     * The data needed to update a organizations.
     */
    data: XOR<organizationsUpdateInput, organizationsUncheckedUpdateInput>
    /**
     * Choose, which organizations to update.
     */
    where: organizationsWhereUniqueInput
  }

  /**
   * organizations updateMany
   */
  export type organizationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationsUpdateManyMutationInput, organizationsUncheckedUpdateManyInput>
    /**
     * Filter which organizations to update
     */
    where?: organizationsWhereInput
    /**
     * Limit how many organizations to update.
     */
    limit?: number
  }

  /**
   * organizations updateManyAndReturn
   */
  export type organizationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationsUpdateManyMutationInput, organizationsUncheckedUpdateManyInput>
    /**
     * Filter which organizations to update
     */
    where?: organizationsWhereInput
    /**
     * Limit how many organizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * organizations upsert
   */
  export type organizationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    /**
     * The filter to search for the organizations to update in case it exists.
     */
    where: organizationsWhereUniqueInput
    /**
     * In case the organizations found by the `where` argument doesn't exist, create a new organizations with this data.
     */
    create: XOR<organizationsCreateInput, organizationsUncheckedCreateInput>
    /**
     * In case the organizations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationsUpdateInput, organizationsUncheckedUpdateInput>
  }

  /**
   * organizations delete
   */
  export type organizationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    /**
     * Filter which organizations to delete.
     */
    where: organizationsWhereUniqueInput
  }

  /**
   * organizations deleteMany
   */
  export type organizationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationsWhereInput
    /**
     * Limit how many organizations to delete.
     */
    limit?: number
  }

  /**
   * organizations.subcategory
   */
  export type organizations$subcategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    where?: subcategoriesWhereInput
  }

  /**
   * organizations.employees
   */
  export type organizations$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    where?: employeesWhereInput
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    cursor?: employeesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * organizations.shifts
   */
  export type organizations$shiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shifts
     */
    select?: shiftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shifts
     */
    omit?: shiftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shiftsInclude<ExtArgs> | null
    where?: shiftsWhereInput
    orderBy?: shiftsOrderByWithRelationInput | shiftsOrderByWithRelationInput[]
    cursor?: shiftsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftsScalarFieldEnum | ShiftsScalarFieldEnum[]
  }

  /**
   * organizations.duty_officers
   */
  export type organizations$duty_officersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duty_officers
     */
    select?: duty_officersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duty_officers
     */
    omit?: duty_officersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duty_officersInclude<ExtArgs> | null
    where?: duty_officersWhereInput
    orderBy?: duty_officersOrderByWithRelationInput | duty_officersOrderByWithRelationInput[]
    cursor?: duty_officersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Duty_officersScalarFieldEnum | Duty_officersScalarFieldEnum[]
  }

  /**
   * organizations without action
   */
  export type organizationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
  }


  /**
   * Model phones
   */

  export type AggregatePhones = {
    _count: PhonesCountAggregateOutputType | null
    _avg: PhonesAvgAggregateOutputType | null
    _sum: PhonesSumAggregateOutputType | null
    _min: PhonesMinAggregateOutputType | null
    _max: PhonesMaxAggregateOutputType | null
  }

  export type PhonesAvgAggregateOutputType = {
    id: number | null
    employee_id: number | null
  }

  export type PhonesSumAggregateOutputType = {
    id: number | null
    employee_id: number | null
  }

  export type PhonesMinAggregateOutputType = {
    id: number | null
    employee_id: number | null
    phone_number: string | null
  }

  export type PhonesMaxAggregateOutputType = {
    id: number | null
    employee_id: number | null
    phone_number: string | null
  }

  export type PhonesCountAggregateOutputType = {
    id: number
    employee_id: number
    phone_number: number
    _all: number
  }


  export type PhonesAvgAggregateInputType = {
    id?: true
    employee_id?: true
  }

  export type PhonesSumAggregateInputType = {
    id?: true
    employee_id?: true
  }

  export type PhonesMinAggregateInputType = {
    id?: true
    employee_id?: true
    phone_number?: true
  }

  export type PhonesMaxAggregateInputType = {
    id?: true
    employee_id?: true
    phone_number?: true
  }

  export type PhonesCountAggregateInputType = {
    id?: true
    employee_id?: true
    phone_number?: true
    _all?: true
  }

  export type PhonesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which phones to aggregate.
     */
    where?: phonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phones to fetch.
     */
    orderBy?: phonesOrderByWithRelationInput | phonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: phonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned phones
    **/
    _count?: true | PhonesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhonesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhonesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhonesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhonesMaxAggregateInputType
  }

  export type GetPhonesAggregateType<T extends PhonesAggregateArgs> = {
        [P in keyof T & keyof AggregatePhones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhones[P]>
      : GetScalarType<T[P], AggregatePhones[P]>
  }




  export type phonesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: phonesWhereInput
    orderBy?: phonesOrderByWithAggregationInput | phonesOrderByWithAggregationInput[]
    by: PhonesScalarFieldEnum[] | PhonesScalarFieldEnum
    having?: phonesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhonesCountAggregateInputType | true
    _avg?: PhonesAvgAggregateInputType
    _sum?: PhonesSumAggregateInputType
    _min?: PhonesMinAggregateInputType
    _max?: PhonesMaxAggregateInputType
  }

  export type PhonesGroupByOutputType = {
    id: number
    employee_id: number
    phone_number: string
    _count: PhonesCountAggregateOutputType | null
    _avg: PhonesAvgAggregateOutputType | null
    _sum: PhonesSumAggregateOutputType | null
    _min: PhonesMinAggregateOutputType | null
    _max: PhonesMaxAggregateOutputType | null
  }

  type GetPhonesGroupByPayload<T extends phonesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhonesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhonesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhonesGroupByOutputType[P]>
            : GetScalarType<T[P], PhonesGroupByOutputType[P]>
        }
      >
    >


  export type phonesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employee_id?: boolean
    phone_number?: boolean
    employee?: boolean | employeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phones"]>

  export type phonesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employee_id?: boolean
    phone_number?: boolean
    employee?: boolean | employeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phones"]>

  export type phonesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employee_id?: boolean
    phone_number?: boolean
    employee?: boolean | employeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phones"]>

  export type phonesSelectScalar = {
    id?: boolean
    employee_id?: boolean
    phone_number?: boolean
  }

  export type phonesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employee_id" | "phone_number", ExtArgs["result"]["phones"]>
  export type phonesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeesDefaultArgs<ExtArgs>
  }
  export type phonesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeesDefaultArgs<ExtArgs>
  }
  export type phonesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeesDefaultArgs<ExtArgs>
  }

  export type $phonesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "phones"
    objects: {
      employee: Prisma.$employeesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employee_id: number
      phone_number: string
    }, ExtArgs["result"]["phones"]>
    composites: {}
  }

  type phonesGetPayload<S extends boolean | null | undefined | phonesDefaultArgs> = $Result.GetResult<Prisma.$phonesPayload, S>

  type phonesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<phonesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhonesCountAggregateInputType | true
    }

  export interface phonesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['phones'], meta: { name: 'phones' } }
    /**
     * Find zero or one Phones that matches the filter.
     * @param {phonesFindUniqueArgs} args - Arguments to find a Phones
     * @example
     * // Get one Phones
     * const phones = await prisma.phones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends phonesFindUniqueArgs>(args: SelectSubset<T, phonesFindUniqueArgs<ExtArgs>>): Prisma__phonesClient<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Phones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {phonesFindUniqueOrThrowArgs} args - Arguments to find a Phones
     * @example
     * // Get one Phones
     * const phones = await prisma.phones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends phonesFindUniqueOrThrowArgs>(args: SelectSubset<T, phonesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__phonesClient<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phonesFindFirstArgs} args - Arguments to find a Phones
     * @example
     * // Get one Phones
     * const phones = await prisma.phones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends phonesFindFirstArgs>(args?: SelectSubset<T, phonesFindFirstArgs<ExtArgs>>): Prisma__phonesClient<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phonesFindFirstOrThrowArgs} args - Arguments to find a Phones
     * @example
     * // Get one Phones
     * const phones = await prisma.phones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends phonesFindFirstOrThrowArgs>(args?: SelectSubset<T, phonesFindFirstOrThrowArgs<ExtArgs>>): Prisma__phonesClient<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Phones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phonesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Phones
     * const phones = await prisma.phones.findMany()
     * 
     * // Get first 10 Phones
     * const phones = await prisma.phones.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phonesWithIdOnly = await prisma.phones.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends phonesFindManyArgs>(args?: SelectSubset<T, phonesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Phones.
     * @param {phonesCreateArgs} args - Arguments to create a Phones.
     * @example
     * // Create one Phones
     * const Phones = await prisma.phones.create({
     *   data: {
     *     // ... data to create a Phones
     *   }
     * })
     * 
     */
    create<T extends phonesCreateArgs>(args: SelectSubset<T, phonesCreateArgs<ExtArgs>>): Prisma__phonesClient<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Phones.
     * @param {phonesCreateManyArgs} args - Arguments to create many Phones.
     * @example
     * // Create many Phones
     * const phones = await prisma.phones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends phonesCreateManyArgs>(args?: SelectSubset<T, phonesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Phones and returns the data saved in the database.
     * @param {phonesCreateManyAndReturnArgs} args - Arguments to create many Phones.
     * @example
     * // Create many Phones
     * const phones = await prisma.phones.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Phones and only return the `id`
     * const phonesWithIdOnly = await prisma.phones.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends phonesCreateManyAndReturnArgs>(args?: SelectSubset<T, phonesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Phones.
     * @param {phonesDeleteArgs} args - Arguments to delete one Phones.
     * @example
     * // Delete one Phones
     * const Phones = await prisma.phones.delete({
     *   where: {
     *     // ... filter to delete one Phones
     *   }
     * })
     * 
     */
    delete<T extends phonesDeleteArgs>(args: SelectSubset<T, phonesDeleteArgs<ExtArgs>>): Prisma__phonesClient<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Phones.
     * @param {phonesUpdateArgs} args - Arguments to update one Phones.
     * @example
     * // Update one Phones
     * const phones = await prisma.phones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends phonesUpdateArgs>(args: SelectSubset<T, phonesUpdateArgs<ExtArgs>>): Prisma__phonesClient<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Phones.
     * @param {phonesDeleteManyArgs} args - Arguments to filter Phones to delete.
     * @example
     * // Delete a few Phones
     * const { count } = await prisma.phones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends phonesDeleteManyArgs>(args?: SelectSubset<T, phonesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phonesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Phones
     * const phones = await prisma.phones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends phonesUpdateManyArgs>(args: SelectSubset<T, phonesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phones and returns the data updated in the database.
     * @param {phonesUpdateManyAndReturnArgs} args - Arguments to update many Phones.
     * @example
     * // Update many Phones
     * const phones = await prisma.phones.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Phones and only return the `id`
     * const phonesWithIdOnly = await prisma.phones.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends phonesUpdateManyAndReturnArgs>(args: SelectSubset<T, phonesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Phones.
     * @param {phonesUpsertArgs} args - Arguments to update or create a Phones.
     * @example
     * // Update or create a Phones
     * const phones = await prisma.phones.upsert({
     *   create: {
     *     // ... data to create a Phones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Phones we want to update
     *   }
     * })
     */
    upsert<T extends phonesUpsertArgs>(args: SelectSubset<T, phonesUpsertArgs<ExtArgs>>): Prisma__phonesClient<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Phones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phonesCountArgs} args - Arguments to filter Phones to count.
     * @example
     * // Count the number of Phones
     * const count = await prisma.phones.count({
     *   where: {
     *     // ... the filter for the Phones we want to count
     *   }
     * })
    **/
    count<T extends phonesCountArgs>(
      args?: Subset<T, phonesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhonesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Phones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhonesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhonesAggregateArgs>(args: Subset<T, PhonesAggregateArgs>): Prisma.PrismaPromise<GetPhonesAggregateType<T>>

    /**
     * Group by Phones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phonesGroupByArgs} args - Group by arguments.
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
      T extends phonesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: phonesGroupByArgs['orderBy'] }
        : { orderBy?: phonesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, phonesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhonesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the phones model
   */
  readonly fields: phonesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for phones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__phonesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends employeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, employeesDefaultArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the phones model
   */
  interface phonesFieldRefs {
    readonly id: FieldRef<"phones", 'Int'>
    readonly employee_id: FieldRef<"phones", 'Int'>
    readonly phone_number: FieldRef<"phones", 'String'>
  }
    

  // Custom InputTypes
  /**
   * phones findUnique
   */
  export type phonesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    /**
     * Filter, which phones to fetch.
     */
    where: phonesWhereUniqueInput
  }

  /**
   * phones findUniqueOrThrow
   */
  export type phonesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    /**
     * Filter, which phones to fetch.
     */
    where: phonesWhereUniqueInput
  }

  /**
   * phones findFirst
   */
  export type phonesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    /**
     * Filter, which phones to fetch.
     */
    where?: phonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phones to fetch.
     */
    orderBy?: phonesOrderByWithRelationInput | phonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for phones.
     */
    cursor?: phonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of phones.
     */
    distinct?: PhonesScalarFieldEnum | PhonesScalarFieldEnum[]
  }

  /**
   * phones findFirstOrThrow
   */
  export type phonesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    /**
     * Filter, which phones to fetch.
     */
    where?: phonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phones to fetch.
     */
    orderBy?: phonesOrderByWithRelationInput | phonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for phones.
     */
    cursor?: phonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of phones.
     */
    distinct?: PhonesScalarFieldEnum | PhonesScalarFieldEnum[]
  }

  /**
   * phones findMany
   */
  export type phonesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    /**
     * Filter, which phones to fetch.
     */
    where?: phonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phones to fetch.
     */
    orderBy?: phonesOrderByWithRelationInput | phonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing phones.
     */
    cursor?: phonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phones.
     */
    skip?: number
    distinct?: PhonesScalarFieldEnum | PhonesScalarFieldEnum[]
  }

  /**
   * phones create
   */
  export type phonesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    /**
     * The data needed to create a phones.
     */
    data: XOR<phonesCreateInput, phonesUncheckedCreateInput>
  }

  /**
   * phones createMany
   */
  export type phonesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many phones.
     */
    data: phonesCreateManyInput | phonesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * phones createManyAndReturn
   */
  export type phonesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * The data used to create many phones.
     */
    data: phonesCreateManyInput | phonesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * phones update
   */
  export type phonesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    /**
     * The data needed to update a phones.
     */
    data: XOR<phonesUpdateInput, phonesUncheckedUpdateInput>
    /**
     * Choose, which phones to update.
     */
    where: phonesWhereUniqueInput
  }

  /**
   * phones updateMany
   */
  export type phonesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update phones.
     */
    data: XOR<phonesUpdateManyMutationInput, phonesUncheckedUpdateManyInput>
    /**
     * Filter which phones to update
     */
    where?: phonesWhereInput
    /**
     * Limit how many phones to update.
     */
    limit?: number
  }

  /**
   * phones updateManyAndReturn
   */
  export type phonesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * The data used to update phones.
     */
    data: XOR<phonesUpdateManyMutationInput, phonesUncheckedUpdateManyInput>
    /**
     * Filter which phones to update
     */
    where?: phonesWhereInput
    /**
     * Limit how many phones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * phones upsert
   */
  export type phonesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    /**
     * The filter to search for the phones to update in case it exists.
     */
    where: phonesWhereUniqueInput
    /**
     * In case the phones found by the `where` argument doesn't exist, create a new phones with this data.
     */
    create: XOR<phonesCreateInput, phonesUncheckedCreateInput>
    /**
     * In case the phones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<phonesUpdateInput, phonesUncheckedUpdateInput>
  }

  /**
   * phones delete
   */
  export type phonesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    /**
     * Filter which phones to delete.
     */
    where: phonesWhereUniqueInput
  }

  /**
   * phones deleteMany
   */
  export type phonesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which phones to delete
     */
    where?: phonesWhereInput
    /**
     * Limit how many phones to delete.
     */
    limit?: number
  }

  /**
   * phones without action
   */
  export type phonesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
  }


  /**
   * Model subcategories
   */

  export type AggregateSubcategories = {
    _count: SubcategoriesCountAggregateOutputType | null
    _avg: SubcategoriesAvgAggregateOutputType | null
    _sum: SubcategoriesSumAggregateOutputType | null
    _min: SubcategoriesMinAggregateOutputType | null
    _max: SubcategoriesMaxAggregateOutputType | null
  }

  export type SubcategoriesAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
  }

  export type SubcategoriesSumAggregateOutputType = {
    id: number | null
    category_id: number | null
  }

  export type SubcategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    category_id: number | null
  }

  export type SubcategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    category_id: number | null
  }

  export type SubcategoriesCountAggregateOutputType = {
    id: number
    name: number
    category_id: number
    _all: number
  }


  export type SubcategoriesAvgAggregateInputType = {
    id?: true
    category_id?: true
  }

  export type SubcategoriesSumAggregateInputType = {
    id?: true
    category_id?: true
  }

  export type SubcategoriesMinAggregateInputType = {
    id?: true
    name?: true
    category_id?: true
  }

  export type SubcategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    category_id?: true
  }

  export type SubcategoriesCountAggregateInputType = {
    id?: true
    name?: true
    category_id?: true
    _all?: true
  }

  export type SubcategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subcategories to aggregate.
     */
    where?: subcategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcategories to fetch.
     */
    orderBy?: subcategoriesOrderByWithRelationInput | subcategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subcategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subcategories
    **/
    _count?: true | SubcategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubcategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubcategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubcategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubcategoriesMaxAggregateInputType
  }

  export type GetSubcategoriesAggregateType<T extends SubcategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateSubcategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubcategories[P]>
      : GetScalarType<T[P], AggregateSubcategories[P]>
  }




  export type subcategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subcategoriesWhereInput
    orderBy?: subcategoriesOrderByWithAggregationInput | subcategoriesOrderByWithAggregationInput[]
    by: SubcategoriesScalarFieldEnum[] | SubcategoriesScalarFieldEnum
    having?: subcategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubcategoriesCountAggregateInputType | true
    _avg?: SubcategoriesAvgAggregateInputType
    _sum?: SubcategoriesSumAggregateInputType
    _min?: SubcategoriesMinAggregateInputType
    _max?: SubcategoriesMaxAggregateInputType
  }

  export type SubcategoriesGroupByOutputType = {
    id: number
    name: string
    category_id: number
    _count: SubcategoriesCountAggregateOutputType | null
    _avg: SubcategoriesAvgAggregateOutputType | null
    _sum: SubcategoriesSumAggregateOutputType | null
    _min: SubcategoriesMinAggregateOutputType | null
    _max: SubcategoriesMaxAggregateOutputType | null
  }

  type GetSubcategoriesGroupByPayload<T extends subcategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubcategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubcategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubcategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], SubcategoriesGroupByOutputType[P]>
        }
      >
    >


  export type subcategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category_id?: boolean
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    organizations?: boolean | subcategories$organizationsArgs<ExtArgs>
    duty_officers?: boolean | subcategories$duty_officersArgs<ExtArgs>
    _count?: boolean | SubcategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategories"]>

  export type subcategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category_id?: boolean
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategories"]>

  export type subcategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category_id?: boolean
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategories"]>

  export type subcategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    category_id?: boolean
  }

  export type subcategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category_id", ExtArgs["result"]["subcategories"]>
  export type subcategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    organizations?: boolean | subcategories$organizationsArgs<ExtArgs>
    duty_officers?: boolean | subcategories$duty_officersArgs<ExtArgs>
    _count?: boolean | SubcategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type subcategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }
  export type subcategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }

  export type $subcategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subcategories"
    objects: {
      category: Prisma.$categoriesPayload<ExtArgs>
      organizations: Prisma.$organizationsPayload<ExtArgs>[]
      duty_officers: Prisma.$duty_officersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      category_id: number
    }, ExtArgs["result"]["subcategories"]>
    composites: {}
  }

  type subcategoriesGetPayload<S extends boolean | null | undefined | subcategoriesDefaultArgs> = $Result.GetResult<Prisma.$subcategoriesPayload, S>

  type subcategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subcategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubcategoriesCountAggregateInputType | true
    }

  export interface subcategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subcategories'], meta: { name: 'subcategories' } }
    /**
     * Find zero or one Subcategories that matches the filter.
     * @param {subcategoriesFindUniqueArgs} args - Arguments to find a Subcategories
     * @example
     * // Get one Subcategories
     * const subcategories = await prisma.subcategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subcategoriesFindUniqueArgs>(args: SelectSubset<T, subcategoriesFindUniqueArgs<ExtArgs>>): Prisma__subcategoriesClient<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subcategories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subcategoriesFindUniqueOrThrowArgs} args - Arguments to find a Subcategories
     * @example
     * // Get one Subcategories
     * const subcategories = await prisma.subcategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subcategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, subcategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subcategoriesClient<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriesFindFirstArgs} args - Arguments to find a Subcategories
     * @example
     * // Get one Subcategories
     * const subcategories = await prisma.subcategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subcategoriesFindFirstArgs>(args?: SelectSubset<T, subcategoriesFindFirstArgs<ExtArgs>>): Prisma__subcategoriesClient<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriesFindFirstOrThrowArgs} args - Arguments to find a Subcategories
     * @example
     * // Get one Subcategories
     * const subcategories = await prisma.subcategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subcategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, subcategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__subcategoriesClient<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subcategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subcategories
     * const subcategories = await prisma.subcategories.findMany()
     * 
     * // Get first 10 Subcategories
     * const subcategories = await prisma.subcategories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subcategoriesWithIdOnly = await prisma.subcategories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subcategoriesFindManyArgs>(args?: SelectSubset<T, subcategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subcategories.
     * @param {subcategoriesCreateArgs} args - Arguments to create a Subcategories.
     * @example
     * // Create one Subcategories
     * const Subcategories = await prisma.subcategories.create({
     *   data: {
     *     // ... data to create a Subcategories
     *   }
     * })
     * 
     */
    create<T extends subcategoriesCreateArgs>(args: SelectSubset<T, subcategoriesCreateArgs<ExtArgs>>): Prisma__subcategoriesClient<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subcategories.
     * @param {subcategoriesCreateManyArgs} args - Arguments to create many Subcategories.
     * @example
     * // Create many Subcategories
     * const subcategories = await prisma.subcategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subcategoriesCreateManyArgs>(args?: SelectSubset<T, subcategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subcategories and returns the data saved in the database.
     * @param {subcategoriesCreateManyAndReturnArgs} args - Arguments to create many Subcategories.
     * @example
     * // Create many Subcategories
     * const subcategories = await prisma.subcategories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subcategories and only return the `id`
     * const subcategoriesWithIdOnly = await prisma.subcategories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subcategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, subcategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subcategories.
     * @param {subcategoriesDeleteArgs} args - Arguments to delete one Subcategories.
     * @example
     * // Delete one Subcategories
     * const Subcategories = await prisma.subcategories.delete({
     *   where: {
     *     // ... filter to delete one Subcategories
     *   }
     * })
     * 
     */
    delete<T extends subcategoriesDeleteArgs>(args: SelectSubset<T, subcategoriesDeleteArgs<ExtArgs>>): Prisma__subcategoriesClient<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subcategories.
     * @param {subcategoriesUpdateArgs} args - Arguments to update one Subcategories.
     * @example
     * // Update one Subcategories
     * const subcategories = await prisma.subcategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subcategoriesUpdateArgs>(args: SelectSubset<T, subcategoriesUpdateArgs<ExtArgs>>): Prisma__subcategoriesClient<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subcategories.
     * @param {subcategoriesDeleteManyArgs} args - Arguments to filter Subcategories to delete.
     * @example
     * // Delete a few Subcategories
     * const { count } = await prisma.subcategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subcategoriesDeleteManyArgs>(args?: SelectSubset<T, subcategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subcategories
     * const subcategories = await prisma.subcategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subcategoriesUpdateManyArgs>(args: SelectSubset<T, subcategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subcategories and returns the data updated in the database.
     * @param {subcategoriesUpdateManyAndReturnArgs} args - Arguments to update many Subcategories.
     * @example
     * // Update many Subcategories
     * const subcategories = await prisma.subcategories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subcategories and only return the `id`
     * const subcategoriesWithIdOnly = await prisma.subcategories.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends subcategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, subcategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subcategories.
     * @param {subcategoriesUpsertArgs} args - Arguments to update or create a Subcategories.
     * @example
     * // Update or create a Subcategories
     * const subcategories = await prisma.subcategories.upsert({
     *   create: {
     *     // ... data to create a Subcategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subcategories we want to update
     *   }
     * })
     */
    upsert<T extends subcategoriesUpsertArgs>(args: SelectSubset<T, subcategoriesUpsertArgs<ExtArgs>>): Prisma__subcategoriesClient<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriesCountArgs} args - Arguments to filter Subcategories to count.
     * @example
     * // Count the number of Subcategories
     * const count = await prisma.subcategories.count({
     *   where: {
     *     // ... the filter for the Subcategories we want to count
     *   }
     * })
    **/
    count<T extends subcategoriesCountArgs>(
      args?: Subset<T, subcategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubcategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubcategoriesAggregateArgs>(args: Subset<T, SubcategoriesAggregateArgs>): Prisma.PrismaPromise<GetSubcategoriesAggregateType<T>>

    /**
     * Group by Subcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriesGroupByArgs} args - Group by arguments.
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
      T extends subcategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subcategoriesGroupByArgs['orderBy'] }
        : { orderBy?: subcategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, subcategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubcategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subcategories model
   */
  readonly fields: subcategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subcategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subcategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organizations<T extends subcategories$organizationsArgs<ExtArgs> = {}>(args?: Subset<T, subcategories$organizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    duty_officers<T extends subcategories$duty_officersArgs<ExtArgs> = {}>(args?: Subset<T, subcategories$duty_officersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$duty_officersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the subcategories model
   */
  interface subcategoriesFieldRefs {
    readonly id: FieldRef<"subcategories", 'Int'>
    readonly name: FieldRef<"subcategories", 'String'>
    readonly category_id: FieldRef<"subcategories", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * subcategories findUnique
   */
  export type subcategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    /**
     * Filter, which subcategories to fetch.
     */
    where: subcategoriesWhereUniqueInput
  }

  /**
   * subcategories findUniqueOrThrow
   */
  export type subcategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    /**
     * Filter, which subcategories to fetch.
     */
    where: subcategoriesWhereUniqueInput
  }

  /**
   * subcategories findFirst
   */
  export type subcategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    /**
     * Filter, which subcategories to fetch.
     */
    where?: subcategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcategories to fetch.
     */
    orderBy?: subcategoriesOrderByWithRelationInput | subcategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subcategories.
     */
    cursor?: subcategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subcategories.
     */
    distinct?: SubcategoriesScalarFieldEnum | SubcategoriesScalarFieldEnum[]
  }

  /**
   * subcategories findFirstOrThrow
   */
  export type subcategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    /**
     * Filter, which subcategories to fetch.
     */
    where?: subcategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcategories to fetch.
     */
    orderBy?: subcategoriesOrderByWithRelationInput | subcategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subcategories.
     */
    cursor?: subcategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subcategories.
     */
    distinct?: SubcategoriesScalarFieldEnum | SubcategoriesScalarFieldEnum[]
  }

  /**
   * subcategories findMany
   */
  export type subcategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    /**
     * Filter, which subcategories to fetch.
     */
    where?: subcategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcategories to fetch.
     */
    orderBy?: subcategoriesOrderByWithRelationInput | subcategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subcategories.
     */
    cursor?: subcategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcategories.
     */
    skip?: number
    distinct?: SubcategoriesScalarFieldEnum | SubcategoriesScalarFieldEnum[]
  }

  /**
   * subcategories create
   */
  export type subcategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a subcategories.
     */
    data: XOR<subcategoriesCreateInput, subcategoriesUncheckedCreateInput>
  }

  /**
   * subcategories createMany
   */
  export type subcategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subcategories.
     */
    data: subcategoriesCreateManyInput | subcategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subcategories createManyAndReturn
   */
  export type subcategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many subcategories.
     */
    data: subcategoriesCreateManyInput | subcategoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * subcategories update
   */
  export type subcategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a subcategories.
     */
    data: XOR<subcategoriesUpdateInput, subcategoriesUncheckedUpdateInput>
    /**
     * Choose, which subcategories to update.
     */
    where: subcategoriesWhereUniqueInput
  }

  /**
   * subcategories updateMany
   */
  export type subcategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subcategories.
     */
    data: XOR<subcategoriesUpdateManyMutationInput, subcategoriesUncheckedUpdateManyInput>
    /**
     * Filter which subcategories to update
     */
    where?: subcategoriesWhereInput
    /**
     * Limit how many subcategories to update.
     */
    limit?: number
  }

  /**
   * subcategories updateManyAndReturn
   */
  export type subcategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * The data used to update subcategories.
     */
    data: XOR<subcategoriesUpdateManyMutationInput, subcategoriesUncheckedUpdateManyInput>
    /**
     * Filter which subcategories to update
     */
    where?: subcategoriesWhereInput
    /**
     * Limit how many subcategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * subcategories upsert
   */
  export type subcategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the subcategories to update in case it exists.
     */
    where: subcategoriesWhereUniqueInput
    /**
     * In case the subcategories found by the `where` argument doesn't exist, create a new subcategories with this data.
     */
    create: XOR<subcategoriesCreateInput, subcategoriesUncheckedCreateInput>
    /**
     * In case the subcategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subcategoriesUpdateInput, subcategoriesUncheckedUpdateInput>
  }

  /**
   * subcategories delete
   */
  export type subcategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    /**
     * Filter which subcategories to delete.
     */
    where: subcategoriesWhereUniqueInput
  }

  /**
   * subcategories deleteMany
   */
  export type subcategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subcategories to delete
     */
    where?: subcategoriesWhereInput
    /**
     * Limit how many subcategories to delete.
     */
    limit?: number
  }

  /**
   * subcategories.organizations
   */
  export type subcategories$organizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    where?: organizationsWhereInput
    orderBy?: organizationsOrderByWithRelationInput | organizationsOrderByWithRelationInput[]
    cursor?: organizationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationsScalarFieldEnum | OrganizationsScalarFieldEnum[]
  }

  /**
   * subcategories.duty_officers
   */
  export type subcategories$duty_officersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duty_officers
     */
    select?: duty_officersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duty_officers
     */
    omit?: duty_officersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duty_officersInclude<ExtArgs> | null
    where?: duty_officersWhereInput
    orderBy?: duty_officersOrderByWithRelationInput | duty_officersOrderByWithRelationInput[]
    cursor?: duty_officersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Duty_officersScalarFieldEnum | Duty_officersScalarFieldEnum[]
  }

  /**
   * subcategories without action
   */
  export type subcategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
  }


  /**
   * Model shifts
   */

  export type AggregateShifts = {
    _count: ShiftsCountAggregateOutputType | null
    _avg: ShiftsAvgAggregateOutputType | null
    _sum: ShiftsSumAggregateOutputType | null
    _min: ShiftsMinAggregateOutputType | null
    _max: ShiftsMaxAggregateOutputType | null
  }

  export type ShiftsAvgAggregateOutputType = {
    id: number | null
    employee_id: number | null
    organization_id: number | null
  }

  export type ShiftsSumAggregateOutputType = {
    id: number | null
    employee_id: number | null
    organization_id: number | null
  }

  export type ShiftsMinAggregateOutputType = {
    id: number | null
    employee_id: number | null
    organization_id: number | null
    shift_date: Date | null
    start_time: string | null
    end_time: string | null
  }

  export type ShiftsMaxAggregateOutputType = {
    id: number | null
    employee_id: number | null
    organization_id: number | null
    shift_date: Date | null
    start_time: string | null
    end_time: string | null
  }

  export type ShiftsCountAggregateOutputType = {
    id: number
    employee_id: number
    organization_id: number
    shift_date: number
    start_time: number
    end_time: number
    _all: number
  }


  export type ShiftsAvgAggregateInputType = {
    id?: true
    employee_id?: true
    organization_id?: true
  }

  export type ShiftsSumAggregateInputType = {
    id?: true
    employee_id?: true
    organization_id?: true
  }

  export type ShiftsMinAggregateInputType = {
    id?: true
    employee_id?: true
    organization_id?: true
    shift_date?: true
    start_time?: true
    end_time?: true
  }

  export type ShiftsMaxAggregateInputType = {
    id?: true
    employee_id?: true
    organization_id?: true
    shift_date?: true
    start_time?: true
    end_time?: true
  }

  export type ShiftsCountAggregateInputType = {
    id?: true
    employee_id?: true
    organization_id?: true
    shift_date?: true
    start_time?: true
    end_time?: true
    _all?: true
  }

  export type ShiftsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shifts to aggregate.
     */
    where?: shiftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shifts to fetch.
     */
    orderBy?: shiftsOrderByWithRelationInput | shiftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shiftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shifts
    **/
    _count?: true | ShiftsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShiftsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShiftsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftsMaxAggregateInputType
  }

  export type GetShiftsAggregateType<T extends ShiftsAggregateArgs> = {
        [P in keyof T & keyof AggregateShifts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShifts[P]>
      : GetScalarType<T[P], AggregateShifts[P]>
  }




  export type shiftsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shiftsWhereInput
    orderBy?: shiftsOrderByWithAggregationInput | shiftsOrderByWithAggregationInput[]
    by: ShiftsScalarFieldEnum[] | ShiftsScalarFieldEnum
    having?: shiftsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftsCountAggregateInputType | true
    _avg?: ShiftsAvgAggregateInputType
    _sum?: ShiftsSumAggregateInputType
    _min?: ShiftsMinAggregateInputType
    _max?: ShiftsMaxAggregateInputType
  }

  export type ShiftsGroupByOutputType = {
    id: number
    employee_id: number
    organization_id: number
    shift_date: Date
    start_time: string | null
    end_time: string | null
    _count: ShiftsCountAggregateOutputType | null
    _avg: ShiftsAvgAggregateOutputType | null
    _sum: ShiftsSumAggregateOutputType | null
    _min: ShiftsMinAggregateOutputType | null
    _max: ShiftsMaxAggregateOutputType | null
  }

  type GetShiftsGroupByPayload<T extends shiftsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftsGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftsGroupByOutputType[P]>
        }
      >
    >


  export type shiftsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employee_id?: boolean
    organization_id?: boolean
    shift_date?: boolean
    start_time?: boolean
    end_time?: boolean
    employee?: boolean | employeesDefaultArgs<ExtArgs>
    organization?: boolean | organizationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shifts"]>

  export type shiftsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employee_id?: boolean
    organization_id?: boolean
    shift_date?: boolean
    start_time?: boolean
    end_time?: boolean
    employee?: boolean | employeesDefaultArgs<ExtArgs>
    organization?: boolean | organizationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shifts"]>

  export type shiftsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employee_id?: boolean
    organization_id?: boolean
    shift_date?: boolean
    start_time?: boolean
    end_time?: boolean
    employee?: boolean | employeesDefaultArgs<ExtArgs>
    organization?: boolean | organizationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shifts"]>

  export type shiftsSelectScalar = {
    id?: boolean
    employee_id?: boolean
    organization_id?: boolean
    shift_date?: boolean
    start_time?: boolean
    end_time?: boolean
  }

  export type shiftsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employee_id" | "organization_id" | "shift_date" | "start_time" | "end_time", ExtArgs["result"]["shifts"]>
  export type shiftsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeesDefaultArgs<ExtArgs>
    organization?: boolean | organizationsDefaultArgs<ExtArgs>
  }
  export type shiftsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeesDefaultArgs<ExtArgs>
    organization?: boolean | organizationsDefaultArgs<ExtArgs>
  }
  export type shiftsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeesDefaultArgs<ExtArgs>
    organization?: boolean | organizationsDefaultArgs<ExtArgs>
  }

  export type $shiftsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "shifts"
    objects: {
      employee: Prisma.$employeesPayload<ExtArgs>
      organization: Prisma.$organizationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employee_id: number
      organization_id: number
      shift_date: Date
      start_time: string | null
      end_time: string | null
    }, ExtArgs["result"]["shifts"]>
    composites: {}
  }

  type shiftsGetPayload<S extends boolean | null | undefined | shiftsDefaultArgs> = $Result.GetResult<Prisma.$shiftsPayload, S>

  type shiftsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<shiftsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShiftsCountAggregateInputType | true
    }

  export interface shiftsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['shifts'], meta: { name: 'shifts' } }
    /**
     * Find zero or one Shifts that matches the filter.
     * @param {shiftsFindUniqueArgs} args - Arguments to find a Shifts
     * @example
     * // Get one Shifts
     * const shifts = await prisma.shifts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends shiftsFindUniqueArgs>(args: SelectSubset<T, shiftsFindUniqueArgs<ExtArgs>>): Prisma__shiftsClient<$Result.GetResult<Prisma.$shiftsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shifts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {shiftsFindUniqueOrThrowArgs} args - Arguments to find a Shifts
     * @example
     * // Get one Shifts
     * const shifts = await prisma.shifts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends shiftsFindUniqueOrThrowArgs>(args: SelectSubset<T, shiftsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__shiftsClient<$Result.GetResult<Prisma.$shiftsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shiftsFindFirstArgs} args - Arguments to find a Shifts
     * @example
     * // Get one Shifts
     * const shifts = await prisma.shifts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends shiftsFindFirstArgs>(args?: SelectSubset<T, shiftsFindFirstArgs<ExtArgs>>): Prisma__shiftsClient<$Result.GetResult<Prisma.$shiftsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shifts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shiftsFindFirstOrThrowArgs} args - Arguments to find a Shifts
     * @example
     * // Get one Shifts
     * const shifts = await prisma.shifts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends shiftsFindFirstOrThrowArgs>(args?: SelectSubset<T, shiftsFindFirstOrThrowArgs<ExtArgs>>): Prisma__shiftsClient<$Result.GetResult<Prisma.$shiftsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shiftsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shifts
     * const shifts = await prisma.shifts.findMany()
     * 
     * // Get first 10 Shifts
     * const shifts = await prisma.shifts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftsWithIdOnly = await prisma.shifts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends shiftsFindManyArgs>(args?: SelectSubset<T, shiftsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shiftsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shifts.
     * @param {shiftsCreateArgs} args - Arguments to create a Shifts.
     * @example
     * // Create one Shifts
     * const Shifts = await prisma.shifts.create({
     *   data: {
     *     // ... data to create a Shifts
     *   }
     * })
     * 
     */
    create<T extends shiftsCreateArgs>(args: SelectSubset<T, shiftsCreateArgs<ExtArgs>>): Prisma__shiftsClient<$Result.GetResult<Prisma.$shiftsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shifts.
     * @param {shiftsCreateManyArgs} args - Arguments to create many Shifts.
     * @example
     * // Create many Shifts
     * const shifts = await prisma.shifts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends shiftsCreateManyArgs>(args?: SelectSubset<T, shiftsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shifts and returns the data saved in the database.
     * @param {shiftsCreateManyAndReturnArgs} args - Arguments to create many Shifts.
     * @example
     * // Create many Shifts
     * const shifts = await prisma.shifts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shifts and only return the `id`
     * const shiftsWithIdOnly = await prisma.shifts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends shiftsCreateManyAndReturnArgs>(args?: SelectSubset<T, shiftsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shiftsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shifts.
     * @param {shiftsDeleteArgs} args - Arguments to delete one Shifts.
     * @example
     * // Delete one Shifts
     * const Shifts = await prisma.shifts.delete({
     *   where: {
     *     // ... filter to delete one Shifts
     *   }
     * })
     * 
     */
    delete<T extends shiftsDeleteArgs>(args: SelectSubset<T, shiftsDeleteArgs<ExtArgs>>): Prisma__shiftsClient<$Result.GetResult<Prisma.$shiftsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shifts.
     * @param {shiftsUpdateArgs} args - Arguments to update one Shifts.
     * @example
     * // Update one Shifts
     * const shifts = await prisma.shifts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends shiftsUpdateArgs>(args: SelectSubset<T, shiftsUpdateArgs<ExtArgs>>): Prisma__shiftsClient<$Result.GetResult<Prisma.$shiftsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shifts.
     * @param {shiftsDeleteManyArgs} args - Arguments to filter Shifts to delete.
     * @example
     * // Delete a few Shifts
     * const { count } = await prisma.shifts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends shiftsDeleteManyArgs>(args?: SelectSubset<T, shiftsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shiftsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shifts
     * const shifts = await prisma.shifts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends shiftsUpdateManyArgs>(args: SelectSubset<T, shiftsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shifts and returns the data updated in the database.
     * @param {shiftsUpdateManyAndReturnArgs} args - Arguments to update many Shifts.
     * @example
     * // Update many Shifts
     * const shifts = await prisma.shifts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shifts and only return the `id`
     * const shiftsWithIdOnly = await prisma.shifts.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends shiftsUpdateManyAndReturnArgs>(args: SelectSubset<T, shiftsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shiftsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shifts.
     * @param {shiftsUpsertArgs} args - Arguments to update or create a Shifts.
     * @example
     * // Update or create a Shifts
     * const shifts = await prisma.shifts.upsert({
     *   create: {
     *     // ... data to create a Shifts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shifts we want to update
     *   }
     * })
     */
    upsert<T extends shiftsUpsertArgs>(args: SelectSubset<T, shiftsUpsertArgs<ExtArgs>>): Prisma__shiftsClient<$Result.GetResult<Prisma.$shiftsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shiftsCountArgs} args - Arguments to filter Shifts to count.
     * @example
     * // Count the number of Shifts
     * const count = await prisma.shifts.count({
     *   where: {
     *     // ... the filter for the Shifts we want to count
     *   }
     * })
    **/
    count<T extends shiftsCountArgs>(
      args?: Subset<T, shiftsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShiftsAggregateArgs>(args: Subset<T, ShiftsAggregateArgs>): Prisma.PrismaPromise<GetShiftsAggregateType<T>>

    /**
     * Group by Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shiftsGroupByArgs} args - Group by arguments.
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
      T extends shiftsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shiftsGroupByArgs['orderBy'] }
        : { orderBy?: shiftsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, shiftsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the shifts model
   */
  readonly fields: shiftsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for shifts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shiftsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends employeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, employeesDefaultArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends organizationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, organizationsDefaultArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the shifts model
   */
  interface shiftsFieldRefs {
    readonly id: FieldRef<"shifts", 'Int'>
    readonly employee_id: FieldRef<"shifts", 'Int'>
    readonly organization_id: FieldRef<"shifts", 'Int'>
    readonly shift_date: FieldRef<"shifts", 'DateTime'>
    readonly start_time: FieldRef<"shifts", 'String'>
    readonly end_time: FieldRef<"shifts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * shifts findUnique
   */
  export type shiftsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shifts
     */
    select?: shiftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shifts
     */
    omit?: shiftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shiftsInclude<ExtArgs> | null
    /**
     * Filter, which shifts to fetch.
     */
    where: shiftsWhereUniqueInput
  }

  /**
   * shifts findUniqueOrThrow
   */
  export type shiftsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shifts
     */
    select?: shiftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shifts
     */
    omit?: shiftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shiftsInclude<ExtArgs> | null
    /**
     * Filter, which shifts to fetch.
     */
    where: shiftsWhereUniqueInput
  }

  /**
   * shifts findFirst
   */
  export type shiftsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shifts
     */
    select?: shiftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shifts
     */
    omit?: shiftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shiftsInclude<ExtArgs> | null
    /**
     * Filter, which shifts to fetch.
     */
    where?: shiftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shifts to fetch.
     */
    orderBy?: shiftsOrderByWithRelationInput | shiftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shifts.
     */
    cursor?: shiftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shifts.
     */
    distinct?: ShiftsScalarFieldEnum | ShiftsScalarFieldEnum[]
  }

  /**
   * shifts findFirstOrThrow
   */
  export type shiftsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shifts
     */
    select?: shiftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shifts
     */
    omit?: shiftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shiftsInclude<ExtArgs> | null
    /**
     * Filter, which shifts to fetch.
     */
    where?: shiftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shifts to fetch.
     */
    orderBy?: shiftsOrderByWithRelationInput | shiftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shifts.
     */
    cursor?: shiftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shifts.
     */
    distinct?: ShiftsScalarFieldEnum | ShiftsScalarFieldEnum[]
  }

  /**
   * shifts findMany
   */
  export type shiftsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shifts
     */
    select?: shiftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shifts
     */
    omit?: shiftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shiftsInclude<ExtArgs> | null
    /**
     * Filter, which shifts to fetch.
     */
    where?: shiftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shifts to fetch.
     */
    orderBy?: shiftsOrderByWithRelationInput | shiftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shifts.
     */
    cursor?: shiftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shifts.
     */
    skip?: number
    distinct?: ShiftsScalarFieldEnum | ShiftsScalarFieldEnum[]
  }

  /**
   * shifts create
   */
  export type shiftsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shifts
     */
    select?: shiftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shifts
     */
    omit?: shiftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shiftsInclude<ExtArgs> | null
    /**
     * The data needed to create a shifts.
     */
    data: XOR<shiftsCreateInput, shiftsUncheckedCreateInput>
  }

  /**
   * shifts createMany
   */
  export type shiftsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shifts.
     */
    data: shiftsCreateManyInput | shiftsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * shifts createManyAndReturn
   */
  export type shiftsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shifts
     */
    select?: shiftsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shifts
     */
    omit?: shiftsOmit<ExtArgs> | null
    /**
     * The data used to create many shifts.
     */
    data: shiftsCreateManyInput | shiftsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shiftsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * shifts update
   */
  export type shiftsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shifts
     */
    select?: shiftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shifts
     */
    omit?: shiftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shiftsInclude<ExtArgs> | null
    /**
     * The data needed to update a shifts.
     */
    data: XOR<shiftsUpdateInput, shiftsUncheckedUpdateInput>
    /**
     * Choose, which shifts to update.
     */
    where: shiftsWhereUniqueInput
  }

  /**
   * shifts updateMany
   */
  export type shiftsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shifts.
     */
    data: XOR<shiftsUpdateManyMutationInput, shiftsUncheckedUpdateManyInput>
    /**
     * Filter which shifts to update
     */
    where?: shiftsWhereInput
    /**
     * Limit how many shifts to update.
     */
    limit?: number
  }

  /**
   * shifts updateManyAndReturn
   */
  export type shiftsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shifts
     */
    select?: shiftsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shifts
     */
    omit?: shiftsOmit<ExtArgs> | null
    /**
     * The data used to update shifts.
     */
    data: XOR<shiftsUpdateManyMutationInput, shiftsUncheckedUpdateManyInput>
    /**
     * Filter which shifts to update
     */
    where?: shiftsWhereInput
    /**
     * Limit how many shifts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shiftsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * shifts upsert
   */
  export type shiftsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shifts
     */
    select?: shiftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shifts
     */
    omit?: shiftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shiftsInclude<ExtArgs> | null
    /**
     * The filter to search for the shifts to update in case it exists.
     */
    where: shiftsWhereUniqueInput
    /**
     * In case the shifts found by the `where` argument doesn't exist, create a new shifts with this data.
     */
    create: XOR<shiftsCreateInput, shiftsUncheckedCreateInput>
    /**
     * In case the shifts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shiftsUpdateInput, shiftsUncheckedUpdateInput>
  }

  /**
   * shifts delete
   */
  export type shiftsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shifts
     */
    select?: shiftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shifts
     */
    omit?: shiftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shiftsInclude<ExtArgs> | null
    /**
     * Filter which shifts to delete.
     */
    where: shiftsWhereUniqueInput
  }

  /**
   * shifts deleteMany
   */
  export type shiftsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shifts to delete
     */
    where?: shiftsWhereInput
    /**
     * Limit how many shifts to delete.
     */
    limit?: number
  }

  /**
   * shifts without action
   */
  export type shiftsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shifts
     */
    select?: shiftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shifts
     */
    omit?: shiftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shiftsInclude<ExtArgs> | null
  }


  /**
   * Model duty_officers
   */

  export type AggregateDuty_officers = {
    _count: Duty_officersCountAggregateOutputType | null
    _avg: Duty_officersAvgAggregateOutputType | null
    _sum: Duty_officersSumAggregateOutputType | null
    _min: Duty_officersMinAggregateOutputType | null
    _max: Duty_officersMaxAggregateOutputType | null
  }

  export type Duty_officersAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
    subcategory_id: number | null
    organization_id: number | null
  }

  export type Duty_officersSumAggregateOutputType = {
    id: number | null
    category_id: number | null
    subcategory_id: number | null
    organization_id: number | null
  }

  export type Duty_officersMinAggregateOutputType = {
    id: number | null
    position: string | null
    phones: string | null
    category_id: number | null
    subcategory_id: number | null
    organization_id: number | null
  }

  export type Duty_officersMaxAggregateOutputType = {
    id: number | null
    position: string | null
    phones: string | null
    category_id: number | null
    subcategory_id: number | null
    organization_id: number | null
  }

  export type Duty_officersCountAggregateOutputType = {
    id: number
    position: number
    phones: number
    category_id: number
    subcategory_id: number
    organization_id: number
    _all: number
  }


  export type Duty_officersAvgAggregateInputType = {
    id?: true
    category_id?: true
    subcategory_id?: true
    organization_id?: true
  }

  export type Duty_officersSumAggregateInputType = {
    id?: true
    category_id?: true
    subcategory_id?: true
    organization_id?: true
  }

  export type Duty_officersMinAggregateInputType = {
    id?: true
    position?: true
    phones?: true
    category_id?: true
    subcategory_id?: true
    organization_id?: true
  }

  export type Duty_officersMaxAggregateInputType = {
    id?: true
    position?: true
    phones?: true
    category_id?: true
    subcategory_id?: true
    organization_id?: true
  }

  export type Duty_officersCountAggregateInputType = {
    id?: true
    position?: true
    phones?: true
    category_id?: true
    subcategory_id?: true
    organization_id?: true
    _all?: true
  }

  export type Duty_officersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which duty_officers to aggregate.
     */
    where?: duty_officersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of duty_officers to fetch.
     */
    orderBy?: duty_officersOrderByWithRelationInput | duty_officersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: duty_officersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` duty_officers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` duty_officers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned duty_officers
    **/
    _count?: true | Duty_officersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Duty_officersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Duty_officersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Duty_officersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Duty_officersMaxAggregateInputType
  }

  export type GetDuty_officersAggregateType<T extends Duty_officersAggregateArgs> = {
        [P in keyof T & keyof AggregateDuty_officers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDuty_officers[P]>
      : GetScalarType<T[P], AggregateDuty_officers[P]>
  }




  export type duty_officersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: duty_officersWhereInput
    orderBy?: duty_officersOrderByWithAggregationInput | duty_officersOrderByWithAggregationInput[]
    by: Duty_officersScalarFieldEnum[] | Duty_officersScalarFieldEnum
    having?: duty_officersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Duty_officersCountAggregateInputType | true
    _avg?: Duty_officersAvgAggregateInputType
    _sum?: Duty_officersSumAggregateInputType
    _min?: Duty_officersMinAggregateInputType
    _max?: Duty_officersMaxAggregateInputType
  }

  export type Duty_officersGroupByOutputType = {
    id: number
    position: string
    phones: string
    category_id: number
    subcategory_id: number | null
    organization_id: number
    _count: Duty_officersCountAggregateOutputType | null
    _avg: Duty_officersAvgAggregateOutputType | null
    _sum: Duty_officersSumAggregateOutputType | null
    _min: Duty_officersMinAggregateOutputType | null
    _max: Duty_officersMaxAggregateOutputType | null
  }

  type GetDuty_officersGroupByPayload<T extends duty_officersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Duty_officersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Duty_officersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Duty_officersGroupByOutputType[P]>
            : GetScalarType<T[P], Duty_officersGroupByOutputType[P]>
        }
      >
    >


  export type duty_officersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    phones?: boolean
    category_id?: boolean
    subcategory_id?: boolean
    organization_id?: boolean
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    subcategory?: boolean | duty_officers$subcategoryArgs<ExtArgs>
    organization?: boolean | duty_officers$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["duty_officers"]>

  export type duty_officersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    phones?: boolean
    category_id?: boolean
    subcategory_id?: boolean
    organization_id?: boolean
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    subcategory?: boolean | duty_officers$subcategoryArgs<ExtArgs>
    organization?: boolean | duty_officers$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["duty_officers"]>

  export type duty_officersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    phones?: boolean
    category_id?: boolean
    subcategory_id?: boolean
    organization_id?: boolean
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    subcategory?: boolean | duty_officers$subcategoryArgs<ExtArgs>
    organization?: boolean | duty_officers$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["duty_officers"]>

  export type duty_officersSelectScalar = {
    id?: boolean
    position?: boolean
    phones?: boolean
    category_id?: boolean
    subcategory_id?: boolean
    organization_id?: boolean
  }

  export type duty_officersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "position" | "phones" | "category_id" | "subcategory_id" | "organization_id", ExtArgs["result"]["duty_officers"]>
  export type duty_officersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    subcategory?: boolean | duty_officers$subcategoryArgs<ExtArgs>
    organization?: boolean | duty_officers$organizationArgs<ExtArgs>
  }
  export type duty_officersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    subcategory?: boolean | duty_officers$subcategoryArgs<ExtArgs>
    organization?: boolean | duty_officers$organizationArgs<ExtArgs>
  }
  export type duty_officersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    subcategory?: boolean | duty_officers$subcategoryArgs<ExtArgs>
    organization?: boolean | duty_officers$organizationArgs<ExtArgs>
  }

  export type $duty_officersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "duty_officers"
    objects: {
      category: Prisma.$categoriesPayload<ExtArgs>
      subcategory: Prisma.$subcategoriesPayload<ExtArgs> | null
      organization: Prisma.$organizationsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      position: string
      phones: string
      category_id: number
      subcategory_id: number | null
      organization_id: number
    }, ExtArgs["result"]["duty_officers"]>
    composites: {}
  }

  type duty_officersGetPayload<S extends boolean | null | undefined | duty_officersDefaultArgs> = $Result.GetResult<Prisma.$duty_officersPayload, S>

  type duty_officersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<duty_officersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Duty_officersCountAggregateInputType | true
    }

  export interface duty_officersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['duty_officers'], meta: { name: 'duty_officers' } }
    /**
     * Find zero or one Duty_officers that matches the filter.
     * @param {duty_officersFindUniqueArgs} args - Arguments to find a Duty_officers
     * @example
     * // Get one Duty_officers
     * const duty_officers = await prisma.duty_officers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends duty_officersFindUniqueArgs>(args: SelectSubset<T, duty_officersFindUniqueArgs<ExtArgs>>): Prisma__duty_officersClient<$Result.GetResult<Prisma.$duty_officersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Duty_officers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {duty_officersFindUniqueOrThrowArgs} args - Arguments to find a Duty_officers
     * @example
     * // Get one Duty_officers
     * const duty_officers = await prisma.duty_officers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends duty_officersFindUniqueOrThrowArgs>(args: SelectSubset<T, duty_officersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__duty_officersClient<$Result.GetResult<Prisma.$duty_officersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Duty_officers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duty_officersFindFirstArgs} args - Arguments to find a Duty_officers
     * @example
     * // Get one Duty_officers
     * const duty_officers = await prisma.duty_officers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends duty_officersFindFirstArgs>(args?: SelectSubset<T, duty_officersFindFirstArgs<ExtArgs>>): Prisma__duty_officersClient<$Result.GetResult<Prisma.$duty_officersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Duty_officers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duty_officersFindFirstOrThrowArgs} args - Arguments to find a Duty_officers
     * @example
     * // Get one Duty_officers
     * const duty_officers = await prisma.duty_officers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends duty_officersFindFirstOrThrowArgs>(args?: SelectSubset<T, duty_officersFindFirstOrThrowArgs<ExtArgs>>): Prisma__duty_officersClient<$Result.GetResult<Prisma.$duty_officersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Duty_officers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duty_officersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Duty_officers
     * const duty_officers = await prisma.duty_officers.findMany()
     * 
     * // Get first 10 Duty_officers
     * const duty_officers = await prisma.duty_officers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const duty_officersWithIdOnly = await prisma.duty_officers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends duty_officersFindManyArgs>(args?: SelectSubset<T, duty_officersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$duty_officersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Duty_officers.
     * @param {duty_officersCreateArgs} args - Arguments to create a Duty_officers.
     * @example
     * // Create one Duty_officers
     * const Duty_officers = await prisma.duty_officers.create({
     *   data: {
     *     // ... data to create a Duty_officers
     *   }
     * })
     * 
     */
    create<T extends duty_officersCreateArgs>(args: SelectSubset<T, duty_officersCreateArgs<ExtArgs>>): Prisma__duty_officersClient<$Result.GetResult<Prisma.$duty_officersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Duty_officers.
     * @param {duty_officersCreateManyArgs} args - Arguments to create many Duty_officers.
     * @example
     * // Create many Duty_officers
     * const duty_officers = await prisma.duty_officers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends duty_officersCreateManyArgs>(args?: SelectSubset<T, duty_officersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Duty_officers and returns the data saved in the database.
     * @param {duty_officersCreateManyAndReturnArgs} args - Arguments to create many Duty_officers.
     * @example
     * // Create many Duty_officers
     * const duty_officers = await prisma.duty_officers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Duty_officers and only return the `id`
     * const duty_officersWithIdOnly = await prisma.duty_officers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends duty_officersCreateManyAndReturnArgs>(args?: SelectSubset<T, duty_officersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$duty_officersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Duty_officers.
     * @param {duty_officersDeleteArgs} args - Arguments to delete one Duty_officers.
     * @example
     * // Delete one Duty_officers
     * const Duty_officers = await prisma.duty_officers.delete({
     *   where: {
     *     // ... filter to delete one Duty_officers
     *   }
     * })
     * 
     */
    delete<T extends duty_officersDeleteArgs>(args: SelectSubset<T, duty_officersDeleteArgs<ExtArgs>>): Prisma__duty_officersClient<$Result.GetResult<Prisma.$duty_officersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Duty_officers.
     * @param {duty_officersUpdateArgs} args - Arguments to update one Duty_officers.
     * @example
     * // Update one Duty_officers
     * const duty_officers = await prisma.duty_officers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends duty_officersUpdateArgs>(args: SelectSubset<T, duty_officersUpdateArgs<ExtArgs>>): Prisma__duty_officersClient<$Result.GetResult<Prisma.$duty_officersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Duty_officers.
     * @param {duty_officersDeleteManyArgs} args - Arguments to filter Duty_officers to delete.
     * @example
     * // Delete a few Duty_officers
     * const { count } = await prisma.duty_officers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends duty_officersDeleteManyArgs>(args?: SelectSubset<T, duty_officersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Duty_officers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duty_officersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Duty_officers
     * const duty_officers = await prisma.duty_officers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends duty_officersUpdateManyArgs>(args: SelectSubset<T, duty_officersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Duty_officers and returns the data updated in the database.
     * @param {duty_officersUpdateManyAndReturnArgs} args - Arguments to update many Duty_officers.
     * @example
     * // Update many Duty_officers
     * const duty_officers = await prisma.duty_officers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Duty_officers and only return the `id`
     * const duty_officersWithIdOnly = await prisma.duty_officers.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends duty_officersUpdateManyAndReturnArgs>(args: SelectSubset<T, duty_officersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$duty_officersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Duty_officers.
     * @param {duty_officersUpsertArgs} args - Arguments to update or create a Duty_officers.
     * @example
     * // Update or create a Duty_officers
     * const duty_officers = await prisma.duty_officers.upsert({
     *   create: {
     *     // ... data to create a Duty_officers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Duty_officers we want to update
     *   }
     * })
     */
    upsert<T extends duty_officersUpsertArgs>(args: SelectSubset<T, duty_officersUpsertArgs<ExtArgs>>): Prisma__duty_officersClient<$Result.GetResult<Prisma.$duty_officersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Duty_officers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duty_officersCountArgs} args - Arguments to filter Duty_officers to count.
     * @example
     * // Count the number of Duty_officers
     * const count = await prisma.duty_officers.count({
     *   where: {
     *     // ... the filter for the Duty_officers we want to count
     *   }
     * })
    **/
    count<T extends duty_officersCountArgs>(
      args?: Subset<T, duty_officersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Duty_officersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Duty_officers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Duty_officersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Duty_officersAggregateArgs>(args: Subset<T, Duty_officersAggregateArgs>): Prisma.PrismaPromise<GetDuty_officersAggregateType<T>>

    /**
     * Group by Duty_officers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duty_officersGroupByArgs} args - Group by arguments.
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
      T extends duty_officersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: duty_officersGroupByArgs['orderBy'] }
        : { orderBy?: duty_officersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, duty_officersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDuty_officersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the duty_officers model
   */
  readonly fields: duty_officersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for duty_officers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__duty_officersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subcategory<T extends duty_officers$subcategoryArgs<ExtArgs> = {}>(args?: Subset<T, duty_officers$subcategoryArgs<ExtArgs>>): Prisma__subcategoriesClient<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    organization<T extends duty_officers$organizationArgs<ExtArgs> = {}>(args?: Subset<T, duty_officers$organizationArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the duty_officers model
   */
  interface duty_officersFieldRefs {
    readonly id: FieldRef<"duty_officers", 'Int'>
    readonly position: FieldRef<"duty_officers", 'String'>
    readonly phones: FieldRef<"duty_officers", 'String'>
    readonly category_id: FieldRef<"duty_officers", 'Int'>
    readonly subcategory_id: FieldRef<"duty_officers", 'Int'>
    readonly organization_id: FieldRef<"duty_officers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * duty_officers findUnique
   */
  export type duty_officersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duty_officers
     */
    select?: duty_officersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duty_officers
     */
    omit?: duty_officersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duty_officersInclude<ExtArgs> | null
    /**
     * Filter, which duty_officers to fetch.
     */
    where: duty_officersWhereUniqueInput
  }

  /**
   * duty_officers findUniqueOrThrow
   */
  export type duty_officersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duty_officers
     */
    select?: duty_officersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duty_officers
     */
    omit?: duty_officersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duty_officersInclude<ExtArgs> | null
    /**
     * Filter, which duty_officers to fetch.
     */
    where: duty_officersWhereUniqueInput
  }

  /**
   * duty_officers findFirst
   */
  export type duty_officersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duty_officers
     */
    select?: duty_officersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duty_officers
     */
    omit?: duty_officersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duty_officersInclude<ExtArgs> | null
    /**
     * Filter, which duty_officers to fetch.
     */
    where?: duty_officersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of duty_officers to fetch.
     */
    orderBy?: duty_officersOrderByWithRelationInput | duty_officersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for duty_officers.
     */
    cursor?: duty_officersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` duty_officers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` duty_officers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of duty_officers.
     */
    distinct?: Duty_officersScalarFieldEnum | Duty_officersScalarFieldEnum[]
  }

  /**
   * duty_officers findFirstOrThrow
   */
  export type duty_officersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duty_officers
     */
    select?: duty_officersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duty_officers
     */
    omit?: duty_officersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duty_officersInclude<ExtArgs> | null
    /**
     * Filter, which duty_officers to fetch.
     */
    where?: duty_officersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of duty_officers to fetch.
     */
    orderBy?: duty_officersOrderByWithRelationInput | duty_officersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for duty_officers.
     */
    cursor?: duty_officersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` duty_officers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` duty_officers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of duty_officers.
     */
    distinct?: Duty_officersScalarFieldEnum | Duty_officersScalarFieldEnum[]
  }

  /**
   * duty_officers findMany
   */
  export type duty_officersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duty_officers
     */
    select?: duty_officersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duty_officers
     */
    omit?: duty_officersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duty_officersInclude<ExtArgs> | null
    /**
     * Filter, which duty_officers to fetch.
     */
    where?: duty_officersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of duty_officers to fetch.
     */
    orderBy?: duty_officersOrderByWithRelationInput | duty_officersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing duty_officers.
     */
    cursor?: duty_officersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` duty_officers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` duty_officers.
     */
    skip?: number
    distinct?: Duty_officersScalarFieldEnum | Duty_officersScalarFieldEnum[]
  }

  /**
   * duty_officers create
   */
  export type duty_officersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duty_officers
     */
    select?: duty_officersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duty_officers
     */
    omit?: duty_officersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duty_officersInclude<ExtArgs> | null
    /**
     * The data needed to create a duty_officers.
     */
    data: XOR<duty_officersCreateInput, duty_officersUncheckedCreateInput>
  }

  /**
   * duty_officers createMany
   */
  export type duty_officersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many duty_officers.
     */
    data: duty_officersCreateManyInput | duty_officersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * duty_officers createManyAndReturn
   */
  export type duty_officersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duty_officers
     */
    select?: duty_officersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the duty_officers
     */
    omit?: duty_officersOmit<ExtArgs> | null
    /**
     * The data used to create many duty_officers.
     */
    data: duty_officersCreateManyInput | duty_officersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duty_officersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * duty_officers update
   */
  export type duty_officersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duty_officers
     */
    select?: duty_officersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duty_officers
     */
    omit?: duty_officersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duty_officersInclude<ExtArgs> | null
    /**
     * The data needed to update a duty_officers.
     */
    data: XOR<duty_officersUpdateInput, duty_officersUncheckedUpdateInput>
    /**
     * Choose, which duty_officers to update.
     */
    where: duty_officersWhereUniqueInput
  }

  /**
   * duty_officers updateMany
   */
  export type duty_officersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update duty_officers.
     */
    data: XOR<duty_officersUpdateManyMutationInput, duty_officersUncheckedUpdateManyInput>
    /**
     * Filter which duty_officers to update
     */
    where?: duty_officersWhereInput
    /**
     * Limit how many duty_officers to update.
     */
    limit?: number
  }

  /**
   * duty_officers updateManyAndReturn
   */
  export type duty_officersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duty_officers
     */
    select?: duty_officersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the duty_officers
     */
    omit?: duty_officersOmit<ExtArgs> | null
    /**
     * The data used to update duty_officers.
     */
    data: XOR<duty_officersUpdateManyMutationInput, duty_officersUncheckedUpdateManyInput>
    /**
     * Filter which duty_officers to update
     */
    where?: duty_officersWhereInput
    /**
     * Limit how many duty_officers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duty_officersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * duty_officers upsert
   */
  export type duty_officersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duty_officers
     */
    select?: duty_officersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duty_officers
     */
    omit?: duty_officersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duty_officersInclude<ExtArgs> | null
    /**
     * The filter to search for the duty_officers to update in case it exists.
     */
    where: duty_officersWhereUniqueInput
    /**
     * In case the duty_officers found by the `where` argument doesn't exist, create a new duty_officers with this data.
     */
    create: XOR<duty_officersCreateInput, duty_officersUncheckedCreateInput>
    /**
     * In case the duty_officers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<duty_officersUpdateInput, duty_officersUncheckedUpdateInput>
  }

  /**
   * duty_officers delete
   */
  export type duty_officersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duty_officers
     */
    select?: duty_officersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duty_officers
     */
    omit?: duty_officersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duty_officersInclude<ExtArgs> | null
    /**
     * Filter which duty_officers to delete.
     */
    where: duty_officersWhereUniqueInput
  }

  /**
   * duty_officers deleteMany
   */
  export type duty_officersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which duty_officers to delete
     */
    where?: duty_officersWhereInput
    /**
     * Limit how many duty_officers to delete.
     */
    limit?: number
  }

  /**
   * duty_officers.subcategory
   */
  export type duty_officers$subcategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    where?: subcategoriesWhereInput
  }

  /**
   * duty_officers.organization
   */
  export type duty_officers$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    where?: organizationsWhereInput
  }

  /**
   * duty_officers without action
   */
  export type duty_officersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duty_officers
     */
    select?: duty_officersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duty_officers
     */
    omit?: duty_officersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duty_officersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const EmployeesScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    position: 'position',
    organization_id: 'organization_id'
  };

  export type EmployeesScalarFieldEnum = (typeof EmployeesScalarFieldEnum)[keyof typeof EmployeesScalarFieldEnum]


  export const OrganizationsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    subcategory_id: 'subcategory_id',
    category_id: 'category_id'
  };

  export type OrganizationsScalarFieldEnum = (typeof OrganizationsScalarFieldEnum)[keyof typeof OrganizationsScalarFieldEnum]


  export const PhonesScalarFieldEnum: {
    id: 'id',
    employee_id: 'employee_id',
    phone_number: 'phone_number'
  };

  export type PhonesScalarFieldEnum = (typeof PhonesScalarFieldEnum)[keyof typeof PhonesScalarFieldEnum]


  export const SubcategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category_id: 'category_id'
  };

  export type SubcategoriesScalarFieldEnum = (typeof SubcategoriesScalarFieldEnum)[keyof typeof SubcategoriesScalarFieldEnum]


  export const ShiftsScalarFieldEnum: {
    id: 'id',
    employee_id: 'employee_id',
    organization_id: 'organization_id',
    shift_date: 'shift_date',
    start_time: 'start_time',
    end_time: 'end_time'
  };

  export type ShiftsScalarFieldEnum = (typeof ShiftsScalarFieldEnum)[keyof typeof ShiftsScalarFieldEnum]


  export const Duty_officersScalarFieldEnum: {
    id: 'id',
    position: 'position',
    phones: 'phones',
    category_id: 'category_id',
    subcategory_id: 'subcategory_id',
    organization_id: 'organization_id'
  };

  export type Duty_officersScalarFieldEnum = (typeof Duty_officersScalarFieldEnum)[keyof typeof Duty_officersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    subcategories?: SubcategoriesListRelationFilter
    organizations?: OrganizationsListRelationFilter
    duty_officers?: Duty_officersListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subcategories?: subcategoriesOrderByRelationAggregateInput
    organizations?: organizationsOrderByRelationAggregateInput
    duty_officers?: duty_officersOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    subcategories?: SubcategoriesListRelationFilter
    organizations?: OrganizationsListRelationFilter
    duty_officers?: Duty_officersListRelationFilter
  }, "id" | "name">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    name?: StringWithAggregatesFilter<"categories"> | string
  }

  export type employeesWhereInput = {
    AND?: employeesWhereInput | employeesWhereInput[]
    OR?: employeesWhereInput[]
    NOT?: employeesWhereInput | employeesWhereInput[]
    id?: IntFilter<"employees"> | number
    full_name?: StringFilter<"employees"> | string
    position?: StringFilter<"employees"> | string
    organization_id?: IntFilter<"employees"> | number
    organization?: XOR<OrganizationsScalarRelationFilter, organizationsWhereInput>
    phones?: PhonesListRelationFilter
    shifts?: ShiftsListRelationFilter
  }

  export type employeesOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    position?: SortOrder
    organization_id?: SortOrder
    organization?: organizationsOrderByWithRelationInput
    phones?: phonesOrderByRelationAggregateInput
    shifts?: shiftsOrderByRelationAggregateInput
  }

  export type employeesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    full_name_organization_id?: employeesFull_nameOrganization_idCompoundUniqueInput
    AND?: employeesWhereInput | employeesWhereInput[]
    OR?: employeesWhereInput[]
    NOT?: employeesWhereInput | employeesWhereInput[]
    full_name?: StringFilter<"employees"> | string
    position?: StringFilter<"employees"> | string
    organization_id?: IntFilter<"employees"> | number
    organization?: XOR<OrganizationsScalarRelationFilter, organizationsWhereInput>
    phones?: PhonesListRelationFilter
    shifts?: ShiftsListRelationFilter
  }, "id" | "full_name_organization_id">

  export type employeesOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    position?: SortOrder
    organization_id?: SortOrder
    _count?: employeesCountOrderByAggregateInput
    _avg?: employeesAvgOrderByAggregateInput
    _max?: employeesMaxOrderByAggregateInput
    _min?: employeesMinOrderByAggregateInput
    _sum?: employeesSumOrderByAggregateInput
  }

  export type employeesScalarWhereWithAggregatesInput = {
    AND?: employeesScalarWhereWithAggregatesInput | employeesScalarWhereWithAggregatesInput[]
    OR?: employeesScalarWhereWithAggregatesInput[]
    NOT?: employeesScalarWhereWithAggregatesInput | employeesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"employees"> | number
    full_name?: StringWithAggregatesFilter<"employees"> | string
    position?: StringWithAggregatesFilter<"employees"> | string
    organization_id?: IntWithAggregatesFilter<"employees"> | number
  }

  export type organizationsWhereInput = {
    AND?: organizationsWhereInput | organizationsWhereInput[]
    OR?: organizationsWhereInput[]
    NOT?: organizationsWhereInput | organizationsWhereInput[]
    id?: IntFilter<"organizations"> | number
    name?: StringFilter<"organizations"> | string
    subcategory_id?: IntNullableFilter<"organizations"> | number | null
    category_id?: IntFilter<"organizations"> | number
    subcategory?: XOR<SubcategoriesNullableScalarRelationFilter, subcategoriesWhereInput> | null
    category?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    employees?: EmployeesListRelationFilter
    shifts?: ShiftsListRelationFilter
    duty_officers?: Duty_officersListRelationFilter
  }

  export type organizationsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subcategory_id?: SortOrderInput | SortOrder
    category_id?: SortOrder
    subcategory?: subcategoriesOrderByWithRelationInput
    category?: categoriesOrderByWithRelationInput
    employees?: employeesOrderByRelationAggregateInput
    shifts?: shiftsOrderByRelationAggregateInput
    duty_officers?: duty_officersOrderByRelationAggregateInput
  }

  export type organizationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: organizationsWhereInput | organizationsWhereInput[]
    OR?: organizationsWhereInput[]
    NOT?: organizationsWhereInput | organizationsWhereInput[]
    subcategory_id?: IntNullableFilter<"organizations"> | number | null
    category_id?: IntFilter<"organizations"> | number
    subcategory?: XOR<SubcategoriesNullableScalarRelationFilter, subcategoriesWhereInput> | null
    category?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    employees?: EmployeesListRelationFilter
    shifts?: ShiftsListRelationFilter
    duty_officers?: Duty_officersListRelationFilter
  }, "id" | "name">

  export type organizationsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subcategory_id?: SortOrderInput | SortOrder
    category_id?: SortOrder
    _count?: organizationsCountOrderByAggregateInput
    _avg?: organizationsAvgOrderByAggregateInput
    _max?: organizationsMaxOrderByAggregateInput
    _min?: organizationsMinOrderByAggregateInput
    _sum?: organizationsSumOrderByAggregateInput
  }

  export type organizationsScalarWhereWithAggregatesInput = {
    AND?: organizationsScalarWhereWithAggregatesInput | organizationsScalarWhereWithAggregatesInput[]
    OR?: organizationsScalarWhereWithAggregatesInput[]
    NOT?: organizationsScalarWhereWithAggregatesInput | organizationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"organizations"> | number
    name?: StringWithAggregatesFilter<"organizations"> | string
    subcategory_id?: IntNullableWithAggregatesFilter<"organizations"> | number | null
    category_id?: IntWithAggregatesFilter<"organizations"> | number
  }

  export type phonesWhereInput = {
    AND?: phonesWhereInput | phonesWhereInput[]
    OR?: phonesWhereInput[]
    NOT?: phonesWhereInput | phonesWhereInput[]
    id?: IntFilter<"phones"> | number
    employee_id?: IntFilter<"phones"> | number
    phone_number?: StringFilter<"phones"> | string
    employee?: XOR<EmployeesScalarRelationFilter, employeesWhereInput>
  }

  export type phonesOrderByWithRelationInput = {
    id?: SortOrder
    employee_id?: SortOrder
    phone_number?: SortOrder
    employee?: employeesOrderByWithRelationInput
  }

  export type phonesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    employee_id_phone_number?: phonesEmployee_idPhone_numberCompoundUniqueInput
    AND?: phonesWhereInput | phonesWhereInput[]
    OR?: phonesWhereInput[]
    NOT?: phonesWhereInput | phonesWhereInput[]
    employee_id?: IntFilter<"phones"> | number
    phone_number?: StringFilter<"phones"> | string
    employee?: XOR<EmployeesScalarRelationFilter, employeesWhereInput>
  }, "id" | "employee_id_phone_number">

  export type phonesOrderByWithAggregationInput = {
    id?: SortOrder
    employee_id?: SortOrder
    phone_number?: SortOrder
    _count?: phonesCountOrderByAggregateInput
    _avg?: phonesAvgOrderByAggregateInput
    _max?: phonesMaxOrderByAggregateInput
    _min?: phonesMinOrderByAggregateInput
    _sum?: phonesSumOrderByAggregateInput
  }

  export type phonesScalarWhereWithAggregatesInput = {
    AND?: phonesScalarWhereWithAggregatesInput | phonesScalarWhereWithAggregatesInput[]
    OR?: phonesScalarWhereWithAggregatesInput[]
    NOT?: phonesScalarWhereWithAggregatesInput | phonesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"phones"> | number
    employee_id?: IntWithAggregatesFilter<"phones"> | number
    phone_number?: StringWithAggregatesFilter<"phones"> | string
  }

  export type subcategoriesWhereInput = {
    AND?: subcategoriesWhereInput | subcategoriesWhereInput[]
    OR?: subcategoriesWhereInput[]
    NOT?: subcategoriesWhereInput | subcategoriesWhereInput[]
    id?: IntFilter<"subcategories"> | number
    name?: StringFilter<"subcategories"> | string
    category_id?: IntFilter<"subcategories"> | number
    category?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    organizations?: OrganizationsListRelationFilter
    duty_officers?: Duty_officersListRelationFilter
  }

  export type subcategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    category?: categoriesOrderByWithRelationInput
    organizations?: organizationsOrderByRelationAggregateInput
    duty_officers?: duty_officersOrderByRelationAggregateInput
  }

  export type subcategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_category_id?: subcategoriesNameCategory_idCompoundUniqueInput
    AND?: subcategoriesWhereInput | subcategoriesWhereInput[]
    OR?: subcategoriesWhereInput[]
    NOT?: subcategoriesWhereInput | subcategoriesWhereInput[]
    name?: StringFilter<"subcategories"> | string
    category_id?: IntFilter<"subcategories"> | number
    category?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    organizations?: OrganizationsListRelationFilter
    duty_officers?: Duty_officersListRelationFilter
  }, "id" | "name_category_id">

  export type subcategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    _count?: subcategoriesCountOrderByAggregateInput
    _avg?: subcategoriesAvgOrderByAggregateInput
    _max?: subcategoriesMaxOrderByAggregateInput
    _min?: subcategoriesMinOrderByAggregateInput
    _sum?: subcategoriesSumOrderByAggregateInput
  }

  export type subcategoriesScalarWhereWithAggregatesInput = {
    AND?: subcategoriesScalarWhereWithAggregatesInput | subcategoriesScalarWhereWithAggregatesInput[]
    OR?: subcategoriesScalarWhereWithAggregatesInput[]
    NOT?: subcategoriesScalarWhereWithAggregatesInput | subcategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"subcategories"> | number
    name?: StringWithAggregatesFilter<"subcategories"> | string
    category_id?: IntWithAggregatesFilter<"subcategories"> | number
  }

  export type shiftsWhereInput = {
    AND?: shiftsWhereInput | shiftsWhereInput[]
    OR?: shiftsWhereInput[]
    NOT?: shiftsWhereInput | shiftsWhereInput[]
    id?: IntFilter<"shifts"> | number
    employee_id?: IntFilter<"shifts"> | number
    organization_id?: IntFilter<"shifts"> | number
    shift_date?: DateTimeFilter<"shifts"> | Date | string
    start_time?: StringNullableFilter<"shifts"> | string | null
    end_time?: StringNullableFilter<"shifts"> | string | null
    employee?: XOR<EmployeesScalarRelationFilter, employeesWhereInput>
    organization?: XOR<OrganizationsScalarRelationFilter, organizationsWhereInput>
  }

  export type shiftsOrderByWithRelationInput = {
    id?: SortOrder
    employee_id?: SortOrder
    organization_id?: SortOrder
    shift_date?: SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    employee?: employeesOrderByWithRelationInput
    organization?: organizationsOrderByWithRelationInput
  }

  export type shiftsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: shiftsWhereInput | shiftsWhereInput[]
    OR?: shiftsWhereInput[]
    NOT?: shiftsWhereInput | shiftsWhereInput[]
    employee_id?: IntFilter<"shifts"> | number
    organization_id?: IntFilter<"shifts"> | number
    shift_date?: DateTimeFilter<"shifts"> | Date | string
    start_time?: StringNullableFilter<"shifts"> | string | null
    end_time?: StringNullableFilter<"shifts"> | string | null
    employee?: XOR<EmployeesScalarRelationFilter, employeesWhereInput>
    organization?: XOR<OrganizationsScalarRelationFilter, organizationsWhereInput>
  }, "id">

  export type shiftsOrderByWithAggregationInput = {
    id?: SortOrder
    employee_id?: SortOrder
    organization_id?: SortOrder
    shift_date?: SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    _count?: shiftsCountOrderByAggregateInput
    _avg?: shiftsAvgOrderByAggregateInput
    _max?: shiftsMaxOrderByAggregateInput
    _min?: shiftsMinOrderByAggregateInput
    _sum?: shiftsSumOrderByAggregateInput
  }

  export type shiftsScalarWhereWithAggregatesInput = {
    AND?: shiftsScalarWhereWithAggregatesInput | shiftsScalarWhereWithAggregatesInput[]
    OR?: shiftsScalarWhereWithAggregatesInput[]
    NOT?: shiftsScalarWhereWithAggregatesInput | shiftsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"shifts"> | number
    employee_id?: IntWithAggregatesFilter<"shifts"> | number
    organization_id?: IntWithAggregatesFilter<"shifts"> | number
    shift_date?: DateTimeWithAggregatesFilter<"shifts"> | Date | string
    start_time?: StringNullableWithAggregatesFilter<"shifts"> | string | null
    end_time?: StringNullableWithAggregatesFilter<"shifts"> | string | null
  }

  export type duty_officersWhereInput = {
    AND?: duty_officersWhereInput | duty_officersWhereInput[]
    OR?: duty_officersWhereInput[]
    NOT?: duty_officersWhereInput | duty_officersWhereInput[]
    id?: IntFilter<"duty_officers"> | number
    position?: StringFilter<"duty_officers"> | string
    phones?: StringFilter<"duty_officers"> | string
    category_id?: IntFilter<"duty_officers"> | number
    subcategory_id?: IntNullableFilter<"duty_officers"> | number | null
    organization_id?: IntFilter<"duty_officers"> | number
    category?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    subcategory?: XOR<SubcategoriesNullableScalarRelationFilter, subcategoriesWhereInput> | null
    organization?: XOR<OrganizationsNullableScalarRelationFilter, organizationsWhereInput> | null
  }

  export type duty_officersOrderByWithRelationInput = {
    id?: SortOrder
    position?: SortOrder
    phones?: SortOrder
    category_id?: SortOrder
    subcategory_id?: SortOrderInput | SortOrder
    organization_id?: SortOrder
    category?: categoriesOrderByWithRelationInput
    subcategory?: subcategoriesOrderByWithRelationInput
    organization?: organizationsOrderByWithRelationInput
  }

  export type duty_officersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: duty_officersWhereInput | duty_officersWhereInput[]
    OR?: duty_officersWhereInput[]
    NOT?: duty_officersWhereInput | duty_officersWhereInput[]
    position?: StringFilter<"duty_officers"> | string
    phones?: StringFilter<"duty_officers"> | string
    category_id?: IntFilter<"duty_officers"> | number
    subcategory_id?: IntNullableFilter<"duty_officers"> | number | null
    organization_id?: IntFilter<"duty_officers"> | number
    category?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    subcategory?: XOR<SubcategoriesNullableScalarRelationFilter, subcategoriesWhereInput> | null
    organization?: XOR<OrganizationsNullableScalarRelationFilter, organizationsWhereInput> | null
  }, "id">

  export type duty_officersOrderByWithAggregationInput = {
    id?: SortOrder
    position?: SortOrder
    phones?: SortOrder
    category_id?: SortOrder
    subcategory_id?: SortOrderInput | SortOrder
    organization_id?: SortOrder
    _count?: duty_officersCountOrderByAggregateInput
    _avg?: duty_officersAvgOrderByAggregateInput
    _max?: duty_officersMaxOrderByAggregateInput
    _min?: duty_officersMinOrderByAggregateInput
    _sum?: duty_officersSumOrderByAggregateInput
  }

  export type duty_officersScalarWhereWithAggregatesInput = {
    AND?: duty_officersScalarWhereWithAggregatesInput | duty_officersScalarWhereWithAggregatesInput[]
    OR?: duty_officersScalarWhereWithAggregatesInput[]
    NOT?: duty_officersScalarWhereWithAggregatesInput | duty_officersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"duty_officers"> | number
    position?: StringWithAggregatesFilter<"duty_officers"> | string
    phones?: StringWithAggregatesFilter<"duty_officers"> | string
    category_id?: IntWithAggregatesFilter<"duty_officers"> | number
    subcategory_id?: IntNullableWithAggregatesFilter<"duty_officers"> | number | null
    organization_id?: IntWithAggregatesFilter<"duty_officers"> | number
  }

  export type categoriesCreateInput = {
    name: string
    subcategories?: subcategoriesCreateNestedManyWithoutCategoryInput
    organizations?: organizationsCreateNestedManyWithoutCategoryInput
    duty_officers?: duty_officersCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    name: string
    subcategories?: subcategoriesUncheckedCreateNestedManyWithoutCategoryInput
    organizations?: organizationsUncheckedCreateNestedManyWithoutCategoryInput
    duty_officers?: duty_officersUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    subcategories?: subcategoriesUpdateManyWithoutCategoryNestedInput
    organizations?: organizationsUpdateManyWithoutCategoryNestedInput
    duty_officers?: duty_officersUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subcategories?: subcategoriesUncheckedUpdateManyWithoutCategoryNestedInput
    organizations?: organizationsUncheckedUpdateManyWithoutCategoryNestedInput
    duty_officers?: duty_officersUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: number
    name: string
  }

  export type categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type employeesCreateInput = {
    full_name: string
    position: string
    organization: organizationsCreateNestedOneWithoutEmployeesInput
    phones?: phonesCreateNestedManyWithoutEmployeeInput
    shifts?: shiftsCreateNestedManyWithoutEmployeeInput
  }

  export type employeesUncheckedCreateInput = {
    id?: number
    full_name: string
    position: string
    organization_id: number
    phones?: phonesUncheckedCreateNestedManyWithoutEmployeeInput
    shifts?: shiftsUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type employeesUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    organization?: organizationsUpdateOneRequiredWithoutEmployeesNestedInput
    phones?: phonesUpdateManyWithoutEmployeeNestedInput
    shifts?: shiftsUpdateManyWithoutEmployeeNestedInput
  }

  export type employeesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    organization_id?: IntFieldUpdateOperationsInput | number
    phones?: phonesUncheckedUpdateManyWithoutEmployeeNestedInput
    shifts?: shiftsUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type employeesCreateManyInput = {
    id?: number
    full_name: string
    position: string
    organization_id: number
  }

  export type employeesUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
  }

  export type employeesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    organization_id?: IntFieldUpdateOperationsInput | number
  }

  export type organizationsCreateInput = {
    name: string
    subcategory?: subcategoriesCreateNestedOneWithoutOrganizationsInput
    category: categoriesCreateNestedOneWithoutOrganizationsInput
    employees?: employeesCreateNestedManyWithoutOrganizationInput
    shifts?: shiftsCreateNestedManyWithoutOrganizationInput
    duty_officers?: duty_officersCreateNestedManyWithoutOrganizationInput
  }

  export type organizationsUncheckedCreateInput = {
    id?: number
    name: string
    subcategory_id?: number | null
    category_id: number
    employees?: employeesUncheckedCreateNestedManyWithoutOrganizationInput
    shifts?: shiftsUncheckedCreateNestedManyWithoutOrganizationInput
    duty_officers?: duty_officersUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type organizationsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    subcategory?: subcategoriesUpdateOneWithoutOrganizationsNestedInput
    category?: categoriesUpdateOneRequiredWithoutOrganizationsNestedInput
    employees?: employeesUpdateManyWithoutOrganizationNestedInput
    shifts?: shiftsUpdateManyWithoutOrganizationNestedInput
    duty_officers?: duty_officersUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
    employees?: employeesUncheckedUpdateManyWithoutOrganizationNestedInput
    shifts?: shiftsUncheckedUpdateManyWithoutOrganizationNestedInput
    duty_officers?: duty_officersUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationsCreateManyInput = {
    id?: number
    name: string
    subcategory_id?: number | null
    category_id: number
  }

  export type organizationsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type organizationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type phonesCreateInput = {
    phone_number: string
    employee: employeesCreateNestedOneWithoutPhonesInput
  }

  export type phonesUncheckedCreateInput = {
    id?: number
    employee_id: number
    phone_number: string
  }

  export type phonesUpdateInput = {
    phone_number?: StringFieldUpdateOperationsInput | string
    employee?: employeesUpdateOneRequiredWithoutPhonesNestedInput
  }

  export type phonesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type phonesCreateManyInput = {
    id?: number
    employee_id: number
    phone_number: string
  }

  export type phonesUpdateManyMutationInput = {
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type phonesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type subcategoriesCreateInput = {
    name: string
    category: categoriesCreateNestedOneWithoutSubcategoriesInput
    organizations?: organizationsCreateNestedManyWithoutSubcategoryInput
    duty_officers?: duty_officersCreateNestedManyWithoutSubcategoryInput
  }

  export type subcategoriesUncheckedCreateInput = {
    id?: number
    name: string
    category_id: number
    organizations?: organizationsUncheckedCreateNestedManyWithoutSubcategoryInput
    duty_officers?: duty_officersUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type subcategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: categoriesUpdateOneRequiredWithoutSubcategoriesNestedInput
    organizations?: organizationsUpdateManyWithoutSubcategoryNestedInput
    duty_officers?: duty_officersUpdateManyWithoutSubcategoryNestedInput
  }

  export type subcategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    organizations?: organizationsUncheckedUpdateManyWithoutSubcategoryNestedInput
    duty_officers?: duty_officersUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type subcategoriesCreateManyInput = {
    id?: number
    name: string
    category_id: number
  }

  export type subcategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type subcategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type shiftsCreateInput = {
    shift_date: Date | string
    start_time?: string | null
    end_time?: string | null
    employee: employeesCreateNestedOneWithoutShiftsInput
    organization: organizationsCreateNestedOneWithoutShiftsInput
  }

  export type shiftsUncheckedCreateInput = {
    id?: number
    employee_id: number
    organization_id: number
    shift_date: Date | string
    start_time?: string | null
    end_time?: string | null
  }

  export type shiftsUpdateInput = {
    shift_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: employeesUpdateOneRequiredWithoutShiftsNestedInput
    organization?: organizationsUpdateOneRequiredWithoutShiftsNestedInput
  }

  export type shiftsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    organization_id?: IntFieldUpdateOperationsInput | number
    shift_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shiftsCreateManyInput = {
    id?: number
    employee_id: number
    organization_id: number
    shift_date: Date | string
    start_time?: string | null
    end_time?: string | null
  }

  export type shiftsUpdateManyMutationInput = {
    shift_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shiftsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    organization_id?: IntFieldUpdateOperationsInput | number
    shift_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type duty_officersCreateInput = {
    position: string
    phones: string
    category: categoriesCreateNestedOneWithoutDuty_officersInput
    subcategory?: subcategoriesCreateNestedOneWithoutDuty_officersInput
    organization?: organizationsCreateNestedOneWithoutDuty_officersInput
  }

  export type duty_officersUncheckedCreateInput = {
    id?: number
    position: string
    phones: string
    category_id: number
    subcategory_id?: number | null
    organization_id: number
  }

  export type duty_officersUpdateInput = {
    position?: StringFieldUpdateOperationsInput | string
    phones?: StringFieldUpdateOperationsInput | string
    category?: categoriesUpdateOneRequiredWithoutDuty_officersNestedInput
    subcategory?: subcategoriesUpdateOneWithoutDuty_officersNestedInput
    organization?: organizationsUpdateOneWithoutDuty_officersNestedInput
  }

  export type duty_officersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    phones?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
    organization_id?: IntFieldUpdateOperationsInput | number
  }

  export type duty_officersCreateManyInput = {
    id?: number
    position: string
    phones: string
    category_id: number
    subcategory_id?: number | null
    organization_id: number
  }

  export type duty_officersUpdateManyMutationInput = {
    position?: StringFieldUpdateOperationsInput | string
    phones?: StringFieldUpdateOperationsInput | string
  }

  export type duty_officersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    phones?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
    organization_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SubcategoriesListRelationFilter = {
    every?: subcategoriesWhereInput
    some?: subcategoriesWhereInput
    none?: subcategoriesWhereInput
  }

  export type OrganizationsListRelationFilter = {
    every?: organizationsWhereInput
    some?: organizationsWhereInput
    none?: organizationsWhereInput
  }

  export type Duty_officersListRelationFilter = {
    every?: duty_officersWhereInput
    some?: duty_officersWhereInput
    none?: duty_officersWhereInput
  }

  export type subcategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organizationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type duty_officersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type OrganizationsScalarRelationFilter = {
    is?: organizationsWhereInput
    isNot?: organizationsWhereInput
  }

  export type PhonesListRelationFilter = {
    every?: phonesWhereInput
    some?: phonesWhereInput
    none?: phonesWhereInput
  }

  export type ShiftsListRelationFilter = {
    every?: shiftsWhereInput
    some?: shiftsWhereInput
    none?: shiftsWhereInput
  }

  export type phonesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type shiftsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type employeesFull_nameOrganization_idCompoundUniqueInput = {
    full_name: string
    organization_id: number
  }

  export type employeesCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    position?: SortOrder
    organization_id?: SortOrder
  }

  export type employeesAvgOrderByAggregateInput = {
    id?: SortOrder
    organization_id?: SortOrder
  }

  export type employeesMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    position?: SortOrder
    organization_id?: SortOrder
  }

  export type employeesMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    position?: SortOrder
    organization_id?: SortOrder
  }

  export type employeesSumOrderByAggregateInput = {
    id?: SortOrder
    organization_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SubcategoriesNullableScalarRelationFilter = {
    is?: subcategoriesWhereInput | null
    isNot?: subcategoriesWhereInput | null
  }

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type EmployeesListRelationFilter = {
    every?: employeesWhereInput
    some?: employeesWhereInput
    none?: employeesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type employeesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organizationsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subcategory_id?: SortOrder
    category_id?: SortOrder
  }

  export type organizationsAvgOrderByAggregateInput = {
    id?: SortOrder
    subcategory_id?: SortOrder
    category_id?: SortOrder
  }

  export type organizationsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subcategory_id?: SortOrder
    category_id?: SortOrder
  }

  export type organizationsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subcategory_id?: SortOrder
    category_id?: SortOrder
  }

  export type organizationsSumOrderByAggregateInput = {
    id?: SortOrder
    subcategory_id?: SortOrder
    category_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EmployeesScalarRelationFilter = {
    is?: employeesWhereInput
    isNot?: employeesWhereInput
  }

  export type phonesEmployee_idPhone_numberCompoundUniqueInput = {
    employee_id: number
    phone_number: string
  }

  export type phonesCountOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
    phone_number?: SortOrder
  }

  export type phonesAvgOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
  }

  export type phonesMaxOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
    phone_number?: SortOrder
  }

  export type phonesMinOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
    phone_number?: SortOrder
  }

  export type phonesSumOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
  }

  export type subcategoriesNameCategory_idCompoundUniqueInput = {
    name: string
    category_id: number
  }

  export type subcategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
  }

  export type subcategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
  }

  export type subcategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
  }

  export type subcategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
  }

  export type subcategoriesSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type shiftsCountOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
    organization_id?: SortOrder
    shift_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type shiftsAvgOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
    organization_id?: SortOrder
  }

  export type shiftsMaxOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
    organization_id?: SortOrder
    shift_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type shiftsMinOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
    organization_id?: SortOrder
    shift_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type shiftsSumOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
    organization_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type OrganizationsNullableScalarRelationFilter = {
    is?: organizationsWhereInput | null
    isNot?: organizationsWhereInput | null
  }

  export type duty_officersCountOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    phones?: SortOrder
    category_id?: SortOrder
    subcategory_id?: SortOrder
    organization_id?: SortOrder
  }

  export type duty_officersAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    subcategory_id?: SortOrder
    organization_id?: SortOrder
  }

  export type duty_officersMaxOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    phones?: SortOrder
    category_id?: SortOrder
    subcategory_id?: SortOrder
    organization_id?: SortOrder
  }

  export type duty_officersMinOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    phones?: SortOrder
    category_id?: SortOrder
    subcategory_id?: SortOrder
    organization_id?: SortOrder
  }

  export type duty_officersSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    subcategory_id?: SortOrder
    organization_id?: SortOrder
  }

  export type subcategoriesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<subcategoriesCreateWithoutCategoryInput, subcategoriesUncheckedCreateWithoutCategoryInput> | subcategoriesCreateWithoutCategoryInput[] | subcategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: subcategoriesCreateOrConnectWithoutCategoryInput | subcategoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: subcategoriesCreateManyCategoryInputEnvelope
    connect?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
  }

  export type organizationsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<organizationsCreateWithoutCategoryInput, organizationsUncheckedCreateWithoutCategoryInput> | organizationsCreateWithoutCategoryInput[] | organizationsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: organizationsCreateOrConnectWithoutCategoryInput | organizationsCreateOrConnectWithoutCategoryInput[]
    createMany?: organizationsCreateManyCategoryInputEnvelope
    connect?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
  }

  export type duty_officersCreateNestedManyWithoutCategoryInput = {
    create?: XOR<duty_officersCreateWithoutCategoryInput, duty_officersUncheckedCreateWithoutCategoryInput> | duty_officersCreateWithoutCategoryInput[] | duty_officersUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: duty_officersCreateOrConnectWithoutCategoryInput | duty_officersCreateOrConnectWithoutCategoryInput[]
    createMany?: duty_officersCreateManyCategoryInputEnvelope
    connect?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
  }

  export type subcategoriesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<subcategoriesCreateWithoutCategoryInput, subcategoriesUncheckedCreateWithoutCategoryInput> | subcategoriesCreateWithoutCategoryInput[] | subcategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: subcategoriesCreateOrConnectWithoutCategoryInput | subcategoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: subcategoriesCreateManyCategoryInputEnvelope
    connect?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
  }

  export type organizationsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<organizationsCreateWithoutCategoryInput, organizationsUncheckedCreateWithoutCategoryInput> | organizationsCreateWithoutCategoryInput[] | organizationsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: organizationsCreateOrConnectWithoutCategoryInput | organizationsCreateOrConnectWithoutCategoryInput[]
    createMany?: organizationsCreateManyCategoryInputEnvelope
    connect?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
  }

  export type duty_officersUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<duty_officersCreateWithoutCategoryInput, duty_officersUncheckedCreateWithoutCategoryInput> | duty_officersCreateWithoutCategoryInput[] | duty_officersUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: duty_officersCreateOrConnectWithoutCategoryInput | duty_officersCreateOrConnectWithoutCategoryInput[]
    createMany?: duty_officersCreateManyCategoryInputEnvelope
    connect?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type subcategoriesUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<subcategoriesCreateWithoutCategoryInput, subcategoriesUncheckedCreateWithoutCategoryInput> | subcategoriesCreateWithoutCategoryInput[] | subcategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: subcategoriesCreateOrConnectWithoutCategoryInput | subcategoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: subcategoriesUpsertWithWhereUniqueWithoutCategoryInput | subcategoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: subcategoriesCreateManyCategoryInputEnvelope
    set?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
    disconnect?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
    delete?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
    connect?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
    update?: subcategoriesUpdateWithWhereUniqueWithoutCategoryInput | subcategoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: subcategoriesUpdateManyWithWhereWithoutCategoryInput | subcategoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: subcategoriesScalarWhereInput | subcategoriesScalarWhereInput[]
  }

  export type organizationsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<organizationsCreateWithoutCategoryInput, organizationsUncheckedCreateWithoutCategoryInput> | organizationsCreateWithoutCategoryInput[] | organizationsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: organizationsCreateOrConnectWithoutCategoryInput | organizationsCreateOrConnectWithoutCategoryInput[]
    upsert?: organizationsUpsertWithWhereUniqueWithoutCategoryInput | organizationsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: organizationsCreateManyCategoryInputEnvelope
    set?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
    disconnect?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
    delete?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
    connect?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
    update?: organizationsUpdateWithWhereUniqueWithoutCategoryInput | organizationsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: organizationsUpdateManyWithWhereWithoutCategoryInput | organizationsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: organizationsScalarWhereInput | organizationsScalarWhereInput[]
  }

  export type duty_officersUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<duty_officersCreateWithoutCategoryInput, duty_officersUncheckedCreateWithoutCategoryInput> | duty_officersCreateWithoutCategoryInput[] | duty_officersUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: duty_officersCreateOrConnectWithoutCategoryInput | duty_officersCreateOrConnectWithoutCategoryInput[]
    upsert?: duty_officersUpsertWithWhereUniqueWithoutCategoryInput | duty_officersUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: duty_officersCreateManyCategoryInputEnvelope
    set?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    disconnect?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    delete?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    connect?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    update?: duty_officersUpdateWithWhereUniqueWithoutCategoryInput | duty_officersUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: duty_officersUpdateManyWithWhereWithoutCategoryInput | duty_officersUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: duty_officersScalarWhereInput | duty_officersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type subcategoriesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<subcategoriesCreateWithoutCategoryInput, subcategoriesUncheckedCreateWithoutCategoryInput> | subcategoriesCreateWithoutCategoryInput[] | subcategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: subcategoriesCreateOrConnectWithoutCategoryInput | subcategoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: subcategoriesUpsertWithWhereUniqueWithoutCategoryInput | subcategoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: subcategoriesCreateManyCategoryInputEnvelope
    set?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
    disconnect?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
    delete?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
    connect?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
    update?: subcategoriesUpdateWithWhereUniqueWithoutCategoryInput | subcategoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: subcategoriesUpdateManyWithWhereWithoutCategoryInput | subcategoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: subcategoriesScalarWhereInput | subcategoriesScalarWhereInput[]
  }

  export type organizationsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<organizationsCreateWithoutCategoryInput, organizationsUncheckedCreateWithoutCategoryInput> | organizationsCreateWithoutCategoryInput[] | organizationsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: organizationsCreateOrConnectWithoutCategoryInput | organizationsCreateOrConnectWithoutCategoryInput[]
    upsert?: organizationsUpsertWithWhereUniqueWithoutCategoryInput | organizationsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: organizationsCreateManyCategoryInputEnvelope
    set?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
    disconnect?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
    delete?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
    connect?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
    update?: organizationsUpdateWithWhereUniqueWithoutCategoryInput | organizationsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: organizationsUpdateManyWithWhereWithoutCategoryInput | organizationsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: organizationsScalarWhereInput | organizationsScalarWhereInput[]
  }

  export type duty_officersUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<duty_officersCreateWithoutCategoryInput, duty_officersUncheckedCreateWithoutCategoryInput> | duty_officersCreateWithoutCategoryInput[] | duty_officersUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: duty_officersCreateOrConnectWithoutCategoryInput | duty_officersCreateOrConnectWithoutCategoryInput[]
    upsert?: duty_officersUpsertWithWhereUniqueWithoutCategoryInput | duty_officersUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: duty_officersCreateManyCategoryInputEnvelope
    set?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    disconnect?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    delete?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    connect?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    update?: duty_officersUpdateWithWhereUniqueWithoutCategoryInput | duty_officersUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: duty_officersUpdateManyWithWhereWithoutCategoryInput | duty_officersUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: duty_officersScalarWhereInput | duty_officersScalarWhereInput[]
  }

  export type organizationsCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<organizationsCreateWithoutEmployeesInput, organizationsUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: organizationsCreateOrConnectWithoutEmployeesInput
    connect?: organizationsWhereUniqueInput
  }

  export type phonesCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<phonesCreateWithoutEmployeeInput, phonesUncheckedCreateWithoutEmployeeInput> | phonesCreateWithoutEmployeeInput[] | phonesUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: phonesCreateOrConnectWithoutEmployeeInput | phonesCreateOrConnectWithoutEmployeeInput[]
    createMany?: phonesCreateManyEmployeeInputEnvelope
    connect?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
  }

  export type shiftsCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<shiftsCreateWithoutEmployeeInput, shiftsUncheckedCreateWithoutEmployeeInput> | shiftsCreateWithoutEmployeeInput[] | shiftsUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: shiftsCreateOrConnectWithoutEmployeeInput | shiftsCreateOrConnectWithoutEmployeeInput[]
    createMany?: shiftsCreateManyEmployeeInputEnvelope
    connect?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
  }

  export type phonesUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<phonesCreateWithoutEmployeeInput, phonesUncheckedCreateWithoutEmployeeInput> | phonesCreateWithoutEmployeeInput[] | phonesUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: phonesCreateOrConnectWithoutEmployeeInput | phonesCreateOrConnectWithoutEmployeeInput[]
    createMany?: phonesCreateManyEmployeeInputEnvelope
    connect?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
  }

  export type shiftsUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<shiftsCreateWithoutEmployeeInput, shiftsUncheckedCreateWithoutEmployeeInput> | shiftsCreateWithoutEmployeeInput[] | shiftsUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: shiftsCreateOrConnectWithoutEmployeeInput | shiftsCreateOrConnectWithoutEmployeeInput[]
    createMany?: shiftsCreateManyEmployeeInputEnvelope
    connect?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
  }

  export type organizationsUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<organizationsCreateWithoutEmployeesInput, organizationsUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: organizationsCreateOrConnectWithoutEmployeesInput
    upsert?: organizationsUpsertWithoutEmployeesInput
    connect?: organizationsWhereUniqueInput
    update?: XOR<XOR<organizationsUpdateToOneWithWhereWithoutEmployeesInput, organizationsUpdateWithoutEmployeesInput>, organizationsUncheckedUpdateWithoutEmployeesInput>
  }

  export type phonesUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<phonesCreateWithoutEmployeeInput, phonesUncheckedCreateWithoutEmployeeInput> | phonesCreateWithoutEmployeeInput[] | phonesUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: phonesCreateOrConnectWithoutEmployeeInput | phonesCreateOrConnectWithoutEmployeeInput[]
    upsert?: phonesUpsertWithWhereUniqueWithoutEmployeeInput | phonesUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: phonesCreateManyEmployeeInputEnvelope
    set?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
    disconnect?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
    delete?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
    connect?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
    update?: phonesUpdateWithWhereUniqueWithoutEmployeeInput | phonesUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: phonesUpdateManyWithWhereWithoutEmployeeInput | phonesUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: phonesScalarWhereInput | phonesScalarWhereInput[]
  }

  export type shiftsUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<shiftsCreateWithoutEmployeeInput, shiftsUncheckedCreateWithoutEmployeeInput> | shiftsCreateWithoutEmployeeInput[] | shiftsUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: shiftsCreateOrConnectWithoutEmployeeInput | shiftsCreateOrConnectWithoutEmployeeInput[]
    upsert?: shiftsUpsertWithWhereUniqueWithoutEmployeeInput | shiftsUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: shiftsCreateManyEmployeeInputEnvelope
    set?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
    disconnect?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
    delete?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
    connect?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
    update?: shiftsUpdateWithWhereUniqueWithoutEmployeeInput | shiftsUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: shiftsUpdateManyWithWhereWithoutEmployeeInput | shiftsUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: shiftsScalarWhereInput | shiftsScalarWhereInput[]
  }

  export type phonesUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<phonesCreateWithoutEmployeeInput, phonesUncheckedCreateWithoutEmployeeInput> | phonesCreateWithoutEmployeeInput[] | phonesUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: phonesCreateOrConnectWithoutEmployeeInput | phonesCreateOrConnectWithoutEmployeeInput[]
    upsert?: phonesUpsertWithWhereUniqueWithoutEmployeeInput | phonesUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: phonesCreateManyEmployeeInputEnvelope
    set?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
    disconnect?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
    delete?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
    connect?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
    update?: phonesUpdateWithWhereUniqueWithoutEmployeeInput | phonesUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: phonesUpdateManyWithWhereWithoutEmployeeInput | phonesUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: phonesScalarWhereInput | phonesScalarWhereInput[]
  }

  export type shiftsUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<shiftsCreateWithoutEmployeeInput, shiftsUncheckedCreateWithoutEmployeeInput> | shiftsCreateWithoutEmployeeInput[] | shiftsUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: shiftsCreateOrConnectWithoutEmployeeInput | shiftsCreateOrConnectWithoutEmployeeInput[]
    upsert?: shiftsUpsertWithWhereUniqueWithoutEmployeeInput | shiftsUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: shiftsCreateManyEmployeeInputEnvelope
    set?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
    disconnect?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
    delete?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
    connect?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
    update?: shiftsUpdateWithWhereUniqueWithoutEmployeeInput | shiftsUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: shiftsUpdateManyWithWhereWithoutEmployeeInput | shiftsUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: shiftsScalarWhereInput | shiftsScalarWhereInput[]
  }

  export type subcategoriesCreateNestedOneWithoutOrganizationsInput = {
    create?: XOR<subcategoriesCreateWithoutOrganizationsInput, subcategoriesUncheckedCreateWithoutOrganizationsInput>
    connectOrCreate?: subcategoriesCreateOrConnectWithoutOrganizationsInput
    connect?: subcategoriesWhereUniqueInput
  }

  export type categoriesCreateNestedOneWithoutOrganizationsInput = {
    create?: XOR<categoriesCreateWithoutOrganizationsInput, categoriesUncheckedCreateWithoutOrganizationsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutOrganizationsInput
    connect?: categoriesWhereUniqueInput
  }

  export type employeesCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<employeesCreateWithoutOrganizationInput, employeesUncheckedCreateWithoutOrganizationInput> | employeesCreateWithoutOrganizationInput[] | employeesUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: employeesCreateOrConnectWithoutOrganizationInput | employeesCreateOrConnectWithoutOrganizationInput[]
    createMany?: employeesCreateManyOrganizationInputEnvelope
    connect?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
  }

  export type shiftsCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<shiftsCreateWithoutOrganizationInput, shiftsUncheckedCreateWithoutOrganizationInput> | shiftsCreateWithoutOrganizationInput[] | shiftsUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: shiftsCreateOrConnectWithoutOrganizationInput | shiftsCreateOrConnectWithoutOrganizationInput[]
    createMany?: shiftsCreateManyOrganizationInputEnvelope
    connect?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
  }

  export type duty_officersCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<duty_officersCreateWithoutOrganizationInput, duty_officersUncheckedCreateWithoutOrganizationInput> | duty_officersCreateWithoutOrganizationInput[] | duty_officersUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: duty_officersCreateOrConnectWithoutOrganizationInput | duty_officersCreateOrConnectWithoutOrganizationInput[]
    createMany?: duty_officersCreateManyOrganizationInputEnvelope
    connect?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
  }

  export type employeesUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<employeesCreateWithoutOrganizationInput, employeesUncheckedCreateWithoutOrganizationInput> | employeesCreateWithoutOrganizationInput[] | employeesUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: employeesCreateOrConnectWithoutOrganizationInput | employeesCreateOrConnectWithoutOrganizationInput[]
    createMany?: employeesCreateManyOrganizationInputEnvelope
    connect?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
  }

  export type shiftsUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<shiftsCreateWithoutOrganizationInput, shiftsUncheckedCreateWithoutOrganizationInput> | shiftsCreateWithoutOrganizationInput[] | shiftsUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: shiftsCreateOrConnectWithoutOrganizationInput | shiftsCreateOrConnectWithoutOrganizationInput[]
    createMany?: shiftsCreateManyOrganizationInputEnvelope
    connect?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
  }

  export type duty_officersUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<duty_officersCreateWithoutOrganizationInput, duty_officersUncheckedCreateWithoutOrganizationInput> | duty_officersCreateWithoutOrganizationInput[] | duty_officersUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: duty_officersCreateOrConnectWithoutOrganizationInput | duty_officersCreateOrConnectWithoutOrganizationInput[]
    createMany?: duty_officersCreateManyOrganizationInputEnvelope
    connect?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
  }

  export type subcategoriesUpdateOneWithoutOrganizationsNestedInput = {
    create?: XOR<subcategoriesCreateWithoutOrganizationsInput, subcategoriesUncheckedCreateWithoutOrganizationsInput>
    connectOrCreate?: subcategoriesCreateOrConnectWithoutOrganizationsInput
    upsert?: subcategoriesUpsertWithoutOrganizationsInput
    disconnect?: subcategoriesWhereInput | boolean
    delete?: subcategoriesWhereInput | boolean
    connect?: subcategoriesWhereUniqueInput
    update?: XOR<XOR<subcategoriesUpdateToOneWithWhereWithoutOrganizationsInput, subcategoriesUpdateWithoutOrganizationsInput>, subcategoriesUncheckedUpdateWithoutOrganizationsInput>
  }

  export type categoriesUpdateOneRequiredWithoutOrganizationsNestedInput = {
    create?: XOR<categoriesCreateWithoutOrganizationsInput, categoriesUncheckedCreateWithoutOrganizationsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutOrganizationsInput
    upsert?: categoriesUpsertWithoutOrganizationsInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutOrganizationsInput, categoriesUpdateWithoutOrganizationsInput>, categoriesUncheckedUpdateWithoutOrganizationsInput>
  }

  export type employeesUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<employeesCreateWithoutOrganizationInput, employeesUncheckedCreateWithoutOrganizationInput> | employeesCreateWithoutOrganizationInput[] | employeesUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: employeesCreateOrConnectWithoutOrganizationInput | employeesCreateOrConnectWithoutOrganizationInput[]
    upsert?: employeesUpsertWithWhereUniqueWithoutOrganizationInput | employeesUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: employeesCreateManyOrganizationInputEnvelope
    set?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    disconnect?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    delete?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    connect?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    update?: employeesUpdateWithWhereUniqueWithoutOrganizationInput | employeesUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: employeesUpdateManyWithWhereWithoutOrganizationInput | employeesUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: employeesScalarWhereInput | employeesScalarWhereInput[]
  }

  export type shiftsUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<shiftsCreateWithoutOrganizationInput, shiftsUncheckedCreateWithoutOrganizationInput> | shiftsCreateWithoutOrganizationInput[] | shiftsUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: shiftsCreateOrConnectWithoutOrganizationInput | shiftsCreateOrConnectWithoutOrganizationInput[]
    upsert?: shiftsUpsertWithWhereUniqueWithoutOrganizationInput | shiftsUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: shiftsCreateManyOrganizationInputEnvelope
    set?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
    disconnect?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
    delete?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
    connect?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
    update?: shiftsUpdateWithWhereUniqueWithoutOrganizationInput | shiftsUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: shiftsUpdateManyWithWhereWithoutOrganizationInput | shiftsUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: shiftsScalarWhereInput | shiftsScalarWhereInput[]
  }

  export type duty_officersUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<duty_officersCreateWithoutOrganizationInput, duty_officersUncheckedCreateWithoutOrganizationInput> | duty_officersCreateWithoutOrganizationInput[] | duty_officersUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: duty_officersCreateOrConnectWithoutOrganizationInput | duty_officersCreateOrConnectWithoutOrganizationInput[]
    upsert?: duty_officersUpsertWithWhereUniqueWithoutOrganizationInput | duty_officersUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: duty_officersCreateManyOrganizationInputEnvelope
    set?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    disconnect?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    delete?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    connect?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    update?: duty_officersUpdateWithWhereUniqueWithoutOrganizationInput | duty_officersUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: duty_officersUpdateManyWithWhereWithoutOrganizationInput | duty_officersUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: duty_officersScalarWhereInput | duty_officersScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type employeesUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<employeesCreateWithoutOrganizationInput, employeesUncheckedCreateWithoutOrganizationInput> | employeesCreateWithoutOrganizationInput[] | employeesUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: employeesCreateOrConnectWithoutOrganizationInput | employeesCreateOrConnectWithoutOrganizationInput[]
    upsert?: employeesUpsertWithWhereUniqueWithoutOrganizationInput | employeesUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: employeesCreateManyOrganizationInputEnvelope
    set?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    disconnect?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    delete?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    connect?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    update?: employeesUpdateWithWhereUniqueWithoutOrganizationInput | employeesUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: employeesUpdateManyWithWhereWithoutOrganizationInput | employeesUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: employeesScalarWhereInput | employeesScalarWhereInput[]
  }

  export type shiftsUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<shiftsCreateWithoutOrganizationInput, shiftsUncheckedCreateWithoutOrganizationInput> | shiftsCreateWithoutOrganizationInput[] | shiftsUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: shiftsCreateOrConnectWithoutOrganizationInput | shiftsCreateOrConnectWithoutOrganizationInput[]
    upsert?: shiftsUpsertWithWhereUniqueWithoutOrganizationInput | shiftsUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: shiftsCreateManyOrganizationInputEnvelope
    set?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
    disconnect?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
    delete?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
    connect?: shiftsWhereUniqueInput | shiftsWhereUniqueInput[]
    update?: shiftsUpdateWithWhereUniqueWithoutOrganizationInput | shiftsUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: shiftsUpdateManyWithWhereWithoutOrganizationInput | shiftsUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: shiftsScalarWhereInput | shiftsScalarWhereInput[]
  }

  export type duty_officersUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<duty_officersCreateWithoutOrganizationInput, duty_officersUncheckedCreateWithoutOrganizationInput> | duty_officersCreateWithoutOrganizationInput[] | duty_officersUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: duty_officersCreateOrConnectWithoutOrganizationInput | duty_officersCreateOrConnectWithoutOrganizationInput[]
    upsert?: duty_officersUpsertWithWhereUniqueWithoutOrganizationInput | duty_officersUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: duty_officersCreateManyOrganizationInputEnvelope
    set?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    disconnect?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    delete?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    connect?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    update?: duty_officersUpdateWithWhereUniqueWithoutOrganizationInput | duty_officersUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: duty_officersUpdateManyWithWhereWithoutOrganizationInput | duty_officersUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: duty_officersScalarWhereInput | duty_officersScalarWhereInput[]
  }

  export type employeesCreateNestedOneWithoutPhonesInput = {
    create?: XOR<employeesCreateWithoutPhonesInput, employeesUncheckedCreateWithoutPhonesInput>
    connectOrCreate?: employeesCreateOrConnectWithoutPhonesInput
    connect?: employeesWhereUniqueInput
  }

  export type employeesUpdateOneRequiredWithoutPhonesNestedInput = {
    create?: XOR<employeesCreateWithoutPhonesInput, employeesUncheckedCreateWithoutPhonesInput>
    connectOrCreate?: employeesCreateOrConnectWithoutPhonesInput
    upsert?: employeesUpsertWithoutPhonesInput
    connect?: employeesWhereUniqueInput
    update?: XOR<XOR<employeesUpdateToOneWithWhereWithoutPhonesInput, employeesUpdateWithoutPhonesInput>, employeesUncheckedUpdateWithoutPhonesInput>
  }

  export type categoriesCreateNestedOneWithoutSubcategoriesInput = {
    create?: XOR<categoriesCreateWithoutSubcategoriesInput, categoriesUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutSubcategoriesInput
    connect?: categoriesWhereUniqueInput
  }

  export type organizationsCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<organizationsCreateWithoutSubcategoryInput, organizationsUncheckedCreateWithoutSubcategoryInput> | organizationsCreateWithoutSubcategoryInput[] | organizationsUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: organizationsCreateOrConnectWithoutSubcategoryInput | organizationsCreateOrConnectWithoutSubcategoryInput[]
    createMany?: organizationsCreateManySubcategoryInputEnvelope
    connect?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
  }

  export type duty_officersCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<duty_officersCreateWithoutSubcategoryInput, duty_officersUncheckedCreateWithoutSubcategoryInput> | duty_officersCreateWithoutSubcategoryInput[] | duty_officersUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: duty_officersCreateOrConnectWithoutSubcategoryInput | duty_officersCreateOrConnectWithoutSubcategoryInput[]
    createMany?: duty_officersCreateManySubcategoryInputEnvelope
    connect?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
  }

  export type organizationsUncheckedCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<organizationsCreateWithoutSubcategoryInput, organizationsUncheckedCreateWithoutSubcategoryInput> | organizationsCreateWithoutSubcategoryInput[] | organizationsUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: organizationsCreateOrConnectWithoutSubcategoryInput | organizationsCreateOrConnectWithoutSubcategoryInput[]
    createMany?: organizationsCreateManySubcategoryInputEnvelope
    connect?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
  }

  export type duty_officersUncheckedCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<duty_officersCreateWithoutSubcategoryInput, duty_officersUncheckedCreateWithoutSubcategoryInput> | duty_officersCreateWithoutSubcategoryInput[] | duty_officersUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: duty_officersCreateOrConnectWithoutSubcategoryInput | duty_officersCreateOrConnectWithoutSubcategoryInput[]
    createMany?: duty_officersCreateManySubcategoryInputEnvelope
    connect?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
  }

  export type categoriesUpdateOneRequiredWithoutSubcategoriesNestedInput = {
    create?: XOR<categoriesCreateWithoutSubcategoriesInput, categoriesUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutSubcategoriesInput
    upsert?: categoriesUpsertWithoutSubcategoriesInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutSubcategoriesInput, categoriesUpdateWithoutSubcategoriesInput>, categoriesUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type organizationsUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<organizationsCreateWithoutSubcategoryInput, organizationsUncheckedCreateWithoutSubcategoryInput> | organizationsCreateWithoutSubcategoryInput[] | organizationsUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: organizationsCreateOrConnectWithoutSubcategoryInput | organizationsCreateOrConnectWithoutSubcategoryInput[]
    upsert?: organizationsUpsertWithWhereUniqueWithoutSubcategoryInput | organizationsUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: organizationsCreateManySubcategoryInputEnvelope
    set?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
    disconnect?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
    delete?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
    connect?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
    update?: organizationsUpdateWithWhereUniqueWithoutSubcategoryInput | organizationsUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: organizationsUpdateManyWithWhereWithoutSubcategoryInput | organizationsUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: organizationsScalarWhereInput | organizationsScalarWhereInput[]
  }

  export type duty_officersUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<duty_officersCreateWithoutSubcategoryInput, duty_officersUncheckedCreateWithoutSubcategoryInput> | duty_officersCreateWithoutSubcategoryInput[] | duty_officersUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: duty_officersCreateOrConnectWithoutSubcategoryInput | duty_officersCreateOrConnectWithoutSubcategoryInput[]
    upsert?: duty_officersUpsertWithWhereUniqueWithoutSubcategoryInput | duty_officersUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: duty_officersCreateManySubcategoryInputEnvelope
    set?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    disconnect?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    delete?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    connect?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    update?: duty_officersUpdateWithWhereUniqueWithoutSubcategoryInput | duty_officersUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: duty_officersUpdateManyWithWhereWithoutSubcategoryInput | duty_officersUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: duty_officersScalarWhereInput | duty_officersScalarWhereInput[]
  }

  export type organizationsUncheckedUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<organizationsCreateWithoutSubcategoryInput, organizationsUncheckedCreateWithoutSubcategoryInput> | organizationsCreateWithoutSubcategoryInput[] | organizationsUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: organizationsCreateOrConnectWithoutSubcategoryInput | organizationsCreateOrConnectWithoutSubcategoryInput[]
    upsert?: organizationsUpsertWithWhereUniqueWithoutSubcategoryInput | organizationsUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: organizationsCreateManySubcategoryInputEnvelope
    set?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
    disconnect?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
    delete?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
    connect?: organizationsWhereUniqueInput | organizationsWhereUniqueInput[]
    update?: organizationsUpdateWithWhereUniqueWithoutSubcategoryInput | organizationsUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: organizationsUpdateManyWithWhereWithoutSubcategoryInput | organizationsUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: organizationsScalarWhereInput | organizationsScalarWhereInput[]
  }

  export type duty_officersUncheckedUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<duty_officersCreateWithoutSubcategoryInput, duty_officersUncheckedCreateWithoutSubcategoryInput> | duty_officersCreateWithoutSubcategoryInput[] | duty_officersUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: duty_officersCreateOrConnectWithoutSubcategoryInput | duty_officersCreateOrConnectWithoutSubcategoryInput[]
    upsert?: duty_officersUpsertWithWhereUniqueWithoutSubcategoryInput | duty_officersUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: duty_officersCreateManySubcategoryInputEnvelope
    set?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    disconnect?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    delete?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    connect?: duty_officersWhereUniqueInput | duty_officersWhereUniqueInput[]
    update?: duty_officersUpdateWithWhereUniqueWithoutSubcategoryInput | duty_officersUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: duty_officersUpdateManyWithWhereWithoutSubcategoryInput | duty_officersUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: duty_officersScalarWhereInput | duty_officersScalarWhereInput[]
  }

  export type employeesCreateNestedOneWithoutShiftsInput = {
    create?: XOR<employeesCreateWithoutShiftsInput, employeesUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: employeesCreateOrConnectWithoutShiftsInput
    connect?: employeesWhereUniqueInput
  }

  export type organizationsCreateNestedOneWithoutShiftsInput = {
    create?: XOR<organizationsCreateWithoutShiftsInput, organizationsUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: organizationsCreateOrConnectWithoutShiftsInput
    connect?: organizationsWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type employeesUpdateOneRequiredWithoutShiftsNestedInput = {
    create?: XOR<employeesCreateWithoutShiftsInput, employeesUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: employeesCreateOrConnectWithoutShiftsInput
    upsert?: employeesUpsertWithoutShiftsInput
    connect?: employeesWhereUniqueInput
    update?: XOR<XOR<employeesUpdateToOneWithWhereWithoutShiftsInput, employeesUpdateWithoutShiftsInput>, employeesUncheckedUpdateWithoutShiftsInput>
  }

  export type organizationsUpdateOneRequiredWithoutShiftsNestedInput = {
    create?: XOR<organizationsCreateWithoutShiftsInput, organizationsUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: organizationsCreateOrConnectWithoutShiftsInput
    upsert?: organizationsUpsertWithoutShiftsInput
    connect?: organizationsWhereUniqueInput
    update?: XOR<XOR<organizationsUpdateToOneWithWhereWithoutShiftsInput, organizationsUpdateWithoutShiftsInput>, organizationsUncheckedUpdateWithoutShiftsInput>
  }

  export type categoriesCreateNestedOneWithoutDuty_officersInput = {
    create?: XOR<categoriesCreateWithoutDuty_officersInput, categoriesUncheckedCreateWithoutDuty_officersInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutDuty_officersInput
    connect?: categoriesWhereUniqueInput
  }

  export type subcategoriesCreateNestedOneWithoutDuty_officersInput = {
    create?: XOR<subcategoriesCreateWithoutDuty_officersInput, subcategoriesUncheckedCreateWithoutDuty_officersInput>
    connectOrCreate?: subcategoriesCreateOrConnectWithoutDuty_officersInput
    connect?: subcategoriesWhereUniqueInput
  }

  export type organizationsCreateNestedOneWithoutDuty_officersInput = {
    create?: XOR<organizationsCreateWithoutDuty_officersInput, organizationsUncheckedCreateWithoutDuty_officersInput>
    connectOrCreate?: organizationsCreateOrConnectWithoutDuty_officersInput
    connect?: organizationsWhereUniqueInput
  }

  export type categoriesUpdateOneRequiredWithoutDuty_officersNestedInput = {
    create?: XOR<categoriesCreateWithoutDuty_officersInput, categoriesUncheckedCreateWithoutDuty_officersInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutDuty_officersInput
    upsert?: categoriesUpsertWithoutDuty_officersInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutDuty_officersInput, categoriesUpdateWithoutDuty_officersInput>, categoriesUncheckedUpdateWithoutDuty_officersInput>
  }

  export type subcategoriesUpdateOneWithoutDuty_officersNestedInput = {
    create?: XOR<subcategoriesCreateWithoutDuty_officersInput, subcategoriesUncheckedCreateWithoutDuty_officersInput>
    connectOrCreate?: subcategoriesCreateOrConnectWithoutDuty_officersInput
    upsert?: subcategoriesUpsertWithoutDuty_officersInput
    disconnect?: subcategoriesWhereInput | boolean
    delete?: subcategoriesWhereInput | boolean
    connect?: subcategoriesWhereUniqueInput
    update?: XOR<XOR<subcategoriesUpdateToOneWithWhereWithoutDuty_officersInput, subcategoriesUpdateWithoutDuty_officersInput>, subcategoriesUncheckedUpdateWithoutDuty_officersInput>
  }

  export type organizationsUpdateOneWithoutDuty_officersNestedInput = {
    create?: XOR<organizationsCreateWithoutDuty_officersInput, organizationsUncheckedCreateWithoutDuty_officersInput>
    connectOrCreate?: organizationsCreateOrConnectWithoutDuty_officersInput
    upsert?: organizationsUpsertWithoutDuty_officersInput
    disconnect?: organizationsWhereInput | boolean
    delete?: organizationsWhereInput | boolean
    connect?: organizationsWhereUniqueInput
    update?: XOR<XOR<organizationsUpdateToOneWithWhereWithoutDuty_officersInput, organizationsUpdateWithoutDuty_officersInput>, organizationsUncheckedUpdateWithoutDuty_officersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type subcategoriesCreateWithoutCategoryInput = {
    name: string
    organizations?: organizationsCreateNestedManyWithoutSubcategoryInput
    duty_officers?: duty_officersCreateNestedManyWithoutSubcategoryInput
  }

  export type subcategoriesUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    organizations?: organizationsUncheckedCreateNestedManyWithoutSubcategoryInput
    duty_officers?: duty_officersUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type subcategoriesCreateOrConnectWithoutCategoryInput = {
    where: subcategoriesWhereUniqueInput
    create: XOR<subcategoriesCreateWithoutCategoryInput, subcategoriesUncheckedCreateWithoutCategoryInput>
  }

  export type subcategoriesCreateManyCategoryInputEnvelope = {
    data: subcategoriesCreateManyCategoryInput | subcategoriesCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type organizationsCreateWithoutCategoryInput = {
    name: string
    subcategory?: subcategoriesCreateNestedOneWithoutOrganizationsInput
    employees?: employeesCreateNestedManyWithoutOrganizationInput
    shifts?: shiftsCreateNestedManyWithoutOrganizationInput
    duty_officers?: duty_officersCreateNestedManyWithoutOrganizationInput
  }

  export type organizationsUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    subcategory_id?: number | null
    employees?: employeesUncheckedCreateNestedManyWithoutOrganizationInput
    shifts?: shiftsUncheckedCreateNestedManyWithoutOrganizationInput
    duty_officers?: duty_officersUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type organizationsCreateOrConnectWithoutCategoryInput = {
    where: organizationsWhereUniqueInput
    create: XOR<organizationsCreateWithoutCategoryInput, organizationsUncheckedCreateWithoutCategoryInput>
  }

  export type organizationsCreateManyCategoryInputEnvelope = {
    data: organizationsCreateManyCategoryInput | organizationsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type duty_officersCreateWithoutCategoryInput = {
    position: string
    phones: string
    subcategory?: subcategoriesCreateNestedOneWithoutDuty_officersInput
    organization?: organizationsCreateNestedOneWithoutDuty_officersInput
  }

  export type duty_officersUncheckedCreateWithoutCategoryInput = {
    id?: number
    position: string
    phones: string
    subcategory_id?: number | null
    organization_id: number
  }

  export type duty_officersCreateOrConnectWithoutCategoryInput = {
    where: duty_officersWhereUniqueInput
    create: XOR<duty_officersCreateWithoutCategoryInput, duty_officersUncheckedCreateWithoutCategoryInput>
  }

  export type duty_officersCreateManyCategoryInputEnvelope = {
    data: duty_officersCreateManyCategoryInput | duty_officersCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type subcategoriesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: subcategoriesWhereUniqueInput
    update: XOR<subcategoriesUpdateWithoutCategoryInput, subcategoriesUncheckedUpdateWithoutCategoryInput>
    create: XOR<subcategoriesCreateWithoutCategoryInput, subcategoriesUncheckedCreateWithoutCategoryInput>
  }

  export type subcategoriesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: subcategoriesWhereUniqueInput
    data: XOR<subcategoriesUpdateWithoutCategoryInput, subcategoriesUncheckedUpdateWithoutCategoryInput>
  }

  export type subcategoriesUpdateManyWithWhereWithoutCategoryInput = {
    where: subcategoriesScalarWhereInput
    data: XOR<subcategoriesUpdateManyMutationInput, subcategoriesUncheckedUpdateManyWithoutCategoryInput>
  }

  export type subcategoriesScalarWhereInput = {
    AND?: subcategoriesScalarWhereInput | subcategoriesScalarWhereInput[]
    OR?: subcategoriesScalarWhereInput[]
    NOT?: subcategoriesScalarWhereInput | subcategoriesScalarWhereInput[]
    id?: IntFilter<"subcategories"> | number
    name?: StringFilter<"subcategories"> | string
    category_id?: IntFilter<"subcategories"> | number
  }

  export type organizationsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: organizationsWhereUniqueInput
    update: XOR<organizationsUpdateWithoutCategoryInput, organizationsUncheckedUpdateWithoutCategoryInput>
    create: XOR<organizationsCreateWithoutCategoryInput, organizationsUncheckedCreateWithoutCategoryInput>
  }

  export type organizationsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: organizationsWhereUniqueInput
    data: XOR<organizationsUpdateWithoutCategoryInput, organizationsUncheckedUpdateWithoutCategoryInput>
  }

  export type organizationsUpdateManyWithWhereWithoutCategoryInput = {
    where: organizationsScalarWhereInput
    data: XOR<organizationsUpdateManyMutationInput, organizationsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type organizationsScalarWhereInput = {
    AND?: organizationsScalarWhereInput | organizationsScalarWhereInput[]
    OR?: organizationsScalarWhereInput[]
    NOT?: organizationsScalarWhereInput | organizationsScalarWhereInput[]
    id?: IntFilter<"organizations"> | number
    name?: StringFilter<"organizations"> | string
    subcategory_id?: IntNullableFilter<"organizations"> | number | null
    category_id?: IntFilter<"organizations"> | number
  }

  export type duty_officersUpsertWithWhereUniqueWithoutCategoryInput = {
    where: duty_officersWhereUniqueInput
    update: XOR<duty_officersUpdateWithoutCategoryInput, duty_officersUncheckedUpdateWithoutCategoryInput>
    create: XOR<duty_officersCreateWithoutCategoryInput, duty_officersUncheckedCreateWithoutCategoryInput>
  }

  export type duty_officersUpdateWithWhereUniqueWithoutCategoryInput = {
    where: duty_officersWhereUniqueInput
    data: XOR<duty_officersUpdateWithoutCategoryInput, duty_officersUncheckedUpdateWithoutCategoryInput>
  }

  export type duty_officersUpdateManyWithWhereWithoutCategoryInput = {
    where: duty_officersScalarWhereInput
    data: XOR<duty_officersUpdateManyMutationInput, duty_officersUncheckedUpdateManyWithoutCategoryInput>
  }

  export type duty_officersScalarWhereInput = {
    AND?: duty_officersScalarWhereInput | duty_officersScalarWhereInput[]
    OR?: duty_officersScalarWhereInput[]
    NOT?: duty_officersScalarWhereInput | duty_officersScalarWhereInput[]
    id?: IntFilter<"duty_officers"> | number
    position?: StringFilter<"duty_officers"> | string
    phones?: StringFilter<"duty_officers"> | string
    category_id?: IntFilter<"duty_officers"> | number
    subcategory_id?: IntNullableFilter<"duty_officers"> | number | null
    organization_id?: IntFilter<"duty_officers"> | number
  }

  export type organizationsCreateWithoutEmployeesInput = {
    name: string
    subcategory?: subcategoriesCreateNestedOneWithoutOrganizationsInput
    category: categoriesCreateNestedOneWithoutOrganizationsInput
    shifts?: shiftsCreateNestedManyWithoutOrganizationInput
    duty_officers?: duty_officersCreateNestedManyWithoutOrganizationInput
  }

  export type organizationsUncheckedCreateWithoutEmployeesInput = {
    id?: number
    name: string
    subcategory_id?: number | null
    category_id: number
    shifts?: shiftsUncheckedCreateNestedManyWithoutOrganizationInput
    duty_officers?: duty_officersUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type organizationsCreateOrConnectWithoutEmployeesInput = {
    where: organizationsWhereUniqueInput
    create: XOR<organizationsCreateWithoutEmployeesInput, organizationsUncheckedCreateWithoutEmployeesInput>
  }

  export type phonesCreateWithoutEmployeeInput = {
    phone_number: string
  }

  export type phonesUncheckedCreateWithoutEmployeeInput = {
    id?: number
    phone_number: string
  }

  export type phonesCreateOrConnectWithoutEmployeeInput = {
    where: phonesWhereUniqueInput
    create: XOR<phonesCreateWithoutEmployeeInput, phonesUncheckedCreateWithoutEmployeeInput>
  }

  export type phonesCreateManyEmployeeInputEnvelope = {
    data: phonesCreateManyEmployeeInput | phonesCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type shiftsCreateWithoutEmployeeInput = {
    shift_date: Date | string
    start_time?: string | null
    end_time?: string | null
    organization: organizationsCreateNestedOneWithoutShiftsInput
  }

  export type shiftsUncheckedCreateWithoutEmployeeInput = {
    id?: number
    organization_id: number
    shift_date: Date | string
    start_time?: string | null
    end_time?: string | null
  }

  export type shiftsCreateOrConnectWithoutEmployeeInput = {
    where: shiftsWhereUniqueInput
    create: XOR<shiftsCreateWithoutEmployeeInput, shiftsUncheckedCreateWithoutEmployeeInput>
  }

  export type shiftsCreateManyEmployeeInputEnvelope = {
    data: shiftsCreateManyEmployeeInput | shiftsCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type organizationsUpsertWithoutEmployeesInput = {
    update: XOR<organizationsUpdateWithoutEmployeesInput, organizationsUncheckedUpdateWithoutEmployeesInput>
    create: XOR<organizationsCreateWithoutEmployeesInput, organizationsUncheckedCreateWithoutEmployeesInput>
    where?: organizationsWhereInput
  }

  export type organizationsUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: organizationsWhereInput
    data: XOR<organizationsUpdateWithoutEmployeesInput, organizationsUncheckedUpdateWithoutEmployeesInput>
  }

  export type organizationsUpdateWithoutEmployeesInput = {
    name?: StringFieldUpdateOperationsInput | string
    subcategory?: subcategoriesUpdateOneWithoutOrganizationsNestedInput
    category?: categoriesUpdateOneRequiredWithoutOrganizationsNestedInput
    shifts?: shiftsUpdateManyWithoutOrganizationNestedInput
    duty_officers?: duty_officersUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationsUncheckedUpdateWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
    shifts?: shiftsUncheckedUpdateManyWithoutOrganizationNestedInput
    duty_officers?: duty_officersUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type phonesUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: phonesWhereUniqueInput
    update: XOR<phonesUpdateWithoutEmployeeInput, phonesUncheckedUpdateWithoutEmployeeInput>
    create: XOR<phonesCreateWithoutEmployeeInput, phonesUncheckedCreateWithoutEmployeeInput>
  }

  export type phonesUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: phonesWhereUniqueInput
    data: XOR<phonesUpdateWithoutEmployeeInput, phonesUncheckedUpdateWithoutEmployeeInput>
  }

  export type phonesUpdateManyWithWhereWithoutEmployeeInput = {
    where: phonesScalarWhereInput
    data: XOR<phonesUpdateManyMutationInput, phonesUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type phonesScalarWhereInput = {
    AND?: phonesScalarWhereInput | phonesScalarWhereInput[]
    OR?: phonesScalarWhereInput[]
    NOT?: phonesScalarWhereInput | phonesScalarWhereInput[]
    id?: IntFilter<"phones"> | number
    employee_id?: IntFilter<"phones"> | number
    phone_number?: StringFilter<"phones"> | string
  }

  export type shiftsUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: shiftsWhereUniqueInput
    update: XOR<shiftsUpdateWithoutEmployeeInput, shiftsUncheckedUpdateWithoutEmployeeInput>
    create: XOR<shiftsCreateWithoutEmployeeInput, shiftsUncheckedCreateWithoutEmployeeInput>
  }

  export type shiftsUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: shiftsWhereUniqueInput
    data: XOR<shiftsUpdateWithoutEmployeeInput, shiftsUncheckedUpdateWithoutEmployeeInput>
  }

  export type shiftsUpdateManyWithWhereWithoutEmployeeInput = {
    where: shiftsScalarWhereInput
    data: XOR<shiftsUpdateManyMutationInput, shiftsUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type shiftsScalarWhereInput = {
    AND?: shiftsScalarWhereInput | shiftsScalarWhereInput[]
    OR?: shiftsScalarWhereInput[]
    NOT?: shiftsScalarWhereInput | shiftsScalarWhereInput[]
    id?: IntFilter<"shifts"> | number
    employee_id?: IntFilter<"shifts"> | number
    organization_id?: IntFilter<"shifts"> | number
    shift_date?: DateTimeFilter<"shifts"> | Date | string
    start_time?: StringNullableFilter<"shifts"> | string | null
    end_time?: StringNullableFilter<"shifts"> | string | null
  }

  export type subcategoriesCreateWithoutOrganizationsInput = {
    name: string
    category: categoriesCreateNestedOneWithoutSubcategoriesInput
    duty_officers?: duty_officersCreateNestedManyWithoutSubcategoryInput
  }

  export type subcategoriesUncheckedCreateWithoutOrganizationsInput = {
    id?: number
    name: string
    category_id: number
    duty_officers?: duty_officersUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type subcategoriesCreateOrConnectWithoutOrganizationsInput = {
    where: subcategoriesWhereUniqueInput
    create: XOR<subcategoriesCreateWithoutOrganizationsInput, subcategoriesUncheckedCreateWithoutOrganizationsInput>
  }

  export type categoriesCreateWithoutOrganizationsInput = {
    name: string
    subcategories?: subcategoriesCreateNestedManyWithoutCategoryInput
    duty_officers?: duty_officersCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUncheckedCreateWithoutOrganizationsInput = {
    id?: number
    name: string
    subcategories?: subcategoriesUncheckedCreateNestedManyWithoutCategoryInput
    duty_officers?: duty_officersUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoriesCreateOrConnectWithoutOrganizationsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutOrganizationsInput, categoriesUncheckedCreateWithoutOrganizationsInput>
  }

  export type employeesCreateWithoutOrganizationInput = {
    full_name: string
    position: string
    phones?: phonesCreateNestedManyWithoutEmployeeInput
    shifts?: shiftsCreateNestedManyWithoutEmployeeInput
  }

  export type employeesUncheckedCreateWithoutOrganizationInput = {
    id?: number
    full_name: string
    position: string
    phones?: phonesUncheckedCreateNestedManyWithoutEmployeeInput
    shifts?: shiftsUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type employeesCreateOrConnectWithoutOrganizationInput = {
    where: employeesWhereUniqueInput
    create: XOR<employeesCreateWithoutOrganizationInput, employeesUncheckedCreateWithoutOrganizationInput>
  }

  export type employeesCreateManyOrganizationInputEnvelope = {
    data: employeesCreateManyOrganizationInput | employeesCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type shiftsCreateWithoutOrganizationInput = {
    shift_date: Date | string
    start_time?: string | null
    end_time?: string | null
    employee: employeesCreateNestedOneWithoutShiftsInput
  }

  export type shiftsUncheckedCreateWithoutOrganizationInput = {
    id?: number
    employee_id: number
    shift_date: Date | string
    start_time?: string | null
    end_time?: string | null
  }

  export type shiftsCreateOrConnectWithoutOrganizationInput = {
    where: shiftsWhereUniqueInput
    create: XOR<shiftsCreateWithoutOrganizationInput, shiftsUncheckedCreateWithoutOrganizationInput>
  }

  export type shiftsCreateManyOrganizationInputEnvelope = {
    data: shiftsCreateManyOrganizationInput | shiftsCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type duty_officersCreateWithoutOrganizationInput = {
    position: string
    phones: string
    category: categoriesCreateNestedOneWithoutDuty_officersInput
    subcategory?: subcategoriesCreateNestedOneWithoutDuty_officersInput
  }

  export type duty_officersUncheckedCreateWithoutOrganizationInput = {
    id?: number
    position: string
    phones: string
    category_id: number
    subcategory_id?: number | null
  }

  export type duty_officersCreateOrConnectWithoutOrganizationInput = {
    where: duty_officersWhereUniqueInput
    create: XOR<duty_officersCreateWithoutOrganizationInput, duty_officersUncheckedCreateWithoutOrganizationInput>
  }

  export type duty_officersCreateManyOrganizationInputEnvelope = {
    data: duty_officersCreateManyOrganizationInput | duty_officersCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type subcategoriesUpsertWithoutOrganizationsInput = {
    update: XOR<subcategoriesUpdateWithoutOrganizationsInput, subcategoriesUncheckedUpdateWithoutOrganizationsInput>
    create: XOR<subcategoriesCreateWithoutOrganizationsInput, subcategoriesUncheckedCreateWithoutOrganizationsInput>
    where?: subcategoriesWhereInput
  }

  export type subcategoriesUpdateToOneWithWhereWithoutOrganizationsInput = {
    where?: subcategoriesWhereInput
    data: XOR<subcategoriesUpdateWithoutOrganizationsInput, subcategoriesUncheckedUpdateWithoutOrganizationsInput>
  }

  export type subcategoriesUpdateWithoutOrganizationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: categoriesUpdateOneRequiredWithoutSubcategoriesNestedInput
    duty_officers?: duty_officersUpdateManyWithoutSubcategoryNestedInput
  }

  export type subcategoriesUncheckedUpdateWithoutOrganizationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    duty_officers?: duty_officersUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type categoriesUpsertWithoutOrganizationsInput = {
    update: XOR<categoriesUpdateWithoutOrganizationsInput, categoriesUncheckedUpdateWithoutOrganizationsInput>
    create: XOR<categoriesCreateWithoutOrganizationsInput, categoriesUncheckedCreateWithoutOrganizationsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutOrganizationsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutOrganizationsInput, categoriesUncheckedUpdateWithoutOrganizationsInput>
  }

  export type categoriesUpdateWithoutOrganizationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    subcategories?: subcategoriesUpdateManyWithoutCategoryNestedInput
    duty_officers?: duty_officersUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesUncheckedUpdateWithoutOrganizationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subcategories?: subcategoriesUncheckedUpdateManyWithoutCategoryNestedInput
    duty_officers?: duty_officersUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type employeesUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: employeesWhereUniqueInput
    update: XOR<employeesUpdateWithoutOrganizationInput, employeesUncheckedUpdateWithoutOrganizationInput>
    create: XOR<employeesCreateWithoutOrganizationInput, employeesUncheckedCreateWithoutOrganizationInput>
  }

  export type employeesUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: employeesWhereUniqueInput
    data: XOR<employeesUpdateWithoutOrganizationInput, employeesUncheckedUpdateWithoutOrganizationInput>
  }

  export type employeesUpdateManyWithWhereWithoutOrganizationInput = {
    where: employeesScalarWhereInput
    data: XOR<employeesUpdateManyMutationInput, employeesUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type employeesScalarWhereInput = {
    AND?: employeesScalarWhereInput | employeesScalarWhereInput[]
    OR?: employeesScalarWhereInput[]
    NOT?: employeesScalarWhereInput | employeesScalarWhereInput[]
    id?: IntFilter<"employees"> | number
    full_name?: StringFilter<"employees"> | string
    position?: StringFilter<"employees"> | string
    organization_id?: IntFilter<"employees"> | number
  }

  export type shiftsUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: shiftsWhereUniqueInput
    update: XOR<shiftsUpdateWithoutOrganizationInput, shiftsUncheckedUpdateWithoutOrganizationInput>
    create: XOR<shiftsCreateWithoutOrganizationInput, shiftsUncheckedCreateWithoutOrganizationInput>
  }

  export type shiftsUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: shiftsWhereUniqueInput
    data: XOR<shiftsUpdateWithoutOrganizationInput, shiftsUncheckedUpdateWithoutOrganizationInput>
  }

  export type shiftsUpdateManyWithWhereWithoutOrganizationInput = {
    where: shiftsScalarWhereInput
    data: XOR<shiftsUpdateManyMutationInput, shiftsUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type duty_officersUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: duty_officersWhereUniqueInput
    update: XOR<duty_officersUpdateWithoutOrganizationInput, duty_officersUncheckedUpdateWithoutOrganizationInput>
    create: XOR<duty_officersCreateWithoutOrganizationInput, duty_officersUncheckedCreateWithoutOrganizationInput>
  }

  export type duty_officersUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: duty_officersWhereUniqueInput
    data: XOR<duty_officersUpdateWithoutOrganizationInput, duty_officersUncheckedUpdateWithoutOrganizationInput>
  }

  export type duty_officersUpdateManyWithWhereWithoutOrganizationInput = {
    where: duty_officersScalarWhereInput
    data: XOR<duty_officersUpdateManyMutationInput, duty_officersUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type employeesCreateWithoutPhonesInput = {
    full_name: string
    position: string
    organization: organizationsCreateNestedOneWithoutEmployeesInput
    shifts?: shiftsCreateNestedManyWithoutEmployeeInput
  }

  export type employeesUncheckedCreateWithoutPhonesInput = {
    id?: number
    full_name: string
    position: string
    organization_id: number
    shifts?: shiftsUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type employeesCreateOrConnectWithoutPhonesInput = {
    where: employeesWhereUniqueInput
    create: XOR<employeesCreateWithoutPhonesInput, employeesUncheckedCreateWithoutPhonesInput>
  }

  export type employeesUpsertWithoutPhonesInput = {
    update: XOR<employeesUpdateWithoutPhonesInput, employeesUncheckedUpdateWithoutPhonesInput>
    create: XOR<employeesCreateWithoutPhonesInput, employeesUncheckedCreateWithoutPhonesInput>
    where?: employeesWhereInput
  }

  export type employeesUpdateToOneWithWhereWithoutPhonesInput = {
    where?: employeesWhereInput
    data: XOR<employeesUpdateWithoutPhonesInput, employeesUncheckedUpdateWithoutPhonesInput>
  }

  export type employeesUpdateWithoutPhonesInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    organization?: organizationsUpdateOneRequiredWithoutEmployeesNestedInput
    shifts?: shiftsUpdateManyWithoutEmployeeNestedInput
  }

  export type employeesUncheckedUpdateWithoutPhonesInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    organization_id?: IntFieldUpdateOperationsInput | number
    shifts?: shiftsUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type categoriesCreateWithoutSubcategoriesInput = {
    name: string
    organizations?: organizationsCreateNestedManyWithoutCategoryInput
    duty_officers?: duty_officersCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUncheckedCreateWithoutSubcategoriesInput = {
    id?: number
    name: string
    organizations?: organizationsUncheckedCreateNestedManyWithoutCategoryInput
    duty_officers?: duty_officersUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoriesCreateOrConnectWithoutSubcategoriesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutSubcategoriesInput, categoriesUncheckedCreateWithoutSubcategoriesInput>
  }

  export type organizationsCreateWithoutSubcategoryInput = {
    name: string
    category: categoriesCreateNestedOneWithoutOrganizationsInput
    employees?: employeesCreateNestedManyWithoutOrganizationInput
    shifts?: shiftsCreateNestedManyWithoutOrganizationInput
    duty_officers?: duty_officersCreateNestedManyWithoutOrganizationInput
  }

  export type organizationsUncheckedCreateWithoutSubcategoryInput = {
    id?: number
    name: string
    category_id: number
    employees?: employeesUncheckedCreateNestedManyWithoutOrganizationInput
    shifts?: shiftsUncheckedCreateNestedManyWithoutOrganizationInput
    duty_officers?: duty_officersUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type organizationsCreateOrConnectWithoutSubcategoryInput = {
    where: organizationsWhereUniqueInput
    create: XOR<organizationsCreateWithoutSubcategoryInput, organizationsUncheckedCreateWithoutSubcategoryInput>
  }

  export type organizationsCreateManySubcategoryInputEnvelope = {
    data: organizationsCreateManySubcategoryInput | organizationsCreateManySubcategoryInput[]
    skipDuplicates?: boolean
  }

  export type duty_officersCreateWithoutSubcategoryInput = {
    position: string
    phones: string
    category: categoriesCreateNestedOneWithoutDuty_officersInput
    organization?: organizationsCreateNestedOneWithoutDuty_officersInput
  }

  export type duty_officersUncheckedCreateWithoutSubcategoryInput = {
    id?: number
    position: string
    phones: string
    category_id: number
    organization_id: number
  }

  export type duty_officersCreateOrConnectWithoutSubcategoryInput = {
    where: duty_officersWhereUniqueInput
    create: XOR<duty_officersCreateWithoutSubcategoryInput, duty_officersUncheckedCreateWithoutSubcategoryInput>
  }

  export type duty_officersCreateManySubcategoryInputEnvelope = {
    data: duty_officersCreateManySubcategoryInput | duty_officersCreateManySubcategoryInput[]
    skipDuplicates?: boolean
  }

  export type categoriesUpsertWithoutSubcategoriesInput = {
    update: XOR<categoriesUpdateWithoutSubcategoriesInput, categoriesUncheckedUpdateWithoutSubcategoriesInput>
    create: XOR<categoriesCreateWithoutSubcategoriesInput, categoriesUncheckedCreateWithoutSubcategoriesInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutSubcategoriesInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutSubcategoriesInput, categoriesUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type categoriesUpdateWithoutSubcategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    organizations?: organizationsUpdateManyWithoutCategoryNestedInput
    duty_officers?: duty_officersUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesUncheckedUpdateWithoutSubcategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    organizations?: organizationsUncheckedUpdateManyWithoutCategoryNestedInput
    duty_officers?: duty_officersUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type organizationsUpsertWithWhereUniqueWithoutSubcategoryInput = {
    where: organizationsWhereUniqueInput
    update: XOR<organizationsUpdateWithoutSubcategoryInput, organizationsUncheckedUpdateWithoutSubcategoryInput>
    create: XOR<organizationsCreateWithoutSubcategoryInput, organizationsUncheckedCreateWithoutSubcategoryInput>
  }

  export type organizationsUpdateWithWhereUniqueWithoutSubcategoryInput = {
    where: organizationsWhereUniqueInput
    data: XOR<organizationsUpdateWithoutSubcategoryInput, organizationsUncheckedUpdateWithoutSubcategoryInput>
  }

  export type organizationsUpdateManyWithWhereWithoutSubcategoryInput = {
    where: organizationsScalarWhereInput
    data: XOR<organizationsUpdateManyMutationInput, organizationsUncheckedUpdateManyWithoutSubcategoryInput>
  }

  export type duty_officersUpsertWithWhereUniqueWithoutSubcategoryInput = {
    where: duty_officersWhereUniqueInput
    update: XOR<duty_officersUpdateWithoutSubcategoryInput, duty_officersUncheckedUpdateWithoutSubcategoryInput>
    create: XOR<duty_officersCreateWithoutSubcategoryInput, duty_officersUncheckedCreateWithoutSubcategoryInput>
  }

  export type duty_officersUpdateWithWhereUniqueWithoutSubcategoryInput = {
    where: duty_officersWhereUniqueInput
    data: XOR<duty_officersUpdateWithoutSubcategoryInput, duty_officersUncheckedUpdateWithoutSubcategoryInput>
  }

  export type duty_officersUpdateManyWithWhereWithoutSubcategoryInput = {
    where: duty_officersScalarWhereInput
    data: XOR<duty_officersUpdateManyMutationInput, duty_officersUncheckedUpdateManyWithoutSubcategoryInput>
  }

  export type employeesCreateWithoutShiftsInput = {
    full_name: string
    position: string
    organization: organizationsCreateNestedOneWithoutEmployeesInput
    phones?: phonesCreateNestedManyWithoutEmployeeInput
  }

  export type employeesUncheckedCreateWithoutShiftsInput = {
    id?: number
    full_name: string
    position: string
    organization_id: number
    phones?: phonesUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type employeesCreateOrConnectWithoutShiftsInput = {
    where: employeesWhereUniqueInput
    create: XOR<employeesCreateWithoutShiftsInput, employeesUncheckedCreateWithoutShiftsInput>
  }

  export type organizationsCreateWithoutShiftsInput = {
    name: string
    subcategory?: subcategoriesCreateNestedOneWithoutOrganizationsInput
    category: categoriesCreateNestedOneWithoutOrganizationsInput
    employees?: employeesCreateNestedManyWithoutOrganizationInput
    duty_officers?: duty_officersCreateNestedManyWithoutOrganizationInput
  }

  export type organizationsUncheckedCreateWithoutShiftsInput = {
    id?: number
    name: string
    subcategory_id?: number | null
    category_id: number
    employees?: employeesUncheckedCreateNestedManyWithoutOrganizationInput
    duty_officers?: duty_officersUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type organizationsCreateOrConnectWithoutShiftsInput = {
    where: organizationsWhereUniqueInput
    create: XOR<organizationsCreateWithoutShiftsInput, organizationsUncheckedCreateWithoutShiftsInput>
  }

  export type employeesUpsertWithoutShiftsInput = {
    update: XOR<employeesUpdateWithoutShiftsInput, employeesUncheckedUpdateWithoutShiftsInput>
    create: XOR<employeesCreateWithoutShiftsInput, employeesUncheckedCreateWithoutShiftsInput>
    where?: employeesWhereInput
  }

  export type employeesUpdateToOneWithWhereWithoutShiftsInput = {
    where?: employeesWhereInput
    data: XOR<employeesUpdateWithoutShiftsInput, employeesUncheckedUpdateWithoutShiftsInput>
  }

  export type employeesUpdateWithoutShiftsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    organization?: organizationsUpdateOneRequiredWithoutEmployeesNestedInput
    phones?: phonesUpdateManyWithoutEmployeeNestedInput
  }

  export type employeesUncheckedUpdateWithoutShiftsInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    organization_id?: IntFieldUpdateOperationsInput | number
    phones?: phonesUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type organizationsUpsertWithoutShiftsInput = {
    update: XOR<organizationsUpdateWithoutShiftsInput, organizationsUncheckedUpdateWithoutShiftsInput>
    create: XOR<organizationsCreateWithoutShiftsInput, organizationsUncheckedCreateWithoutShiftsInput>
    where?: organizationsWhereInput
  }

  export type organizationsUpdateToOneWithWhereWithoutShiftsInput = {
    where?: organizationsWhereInput
    data: XOR<organizationsUpdateWithoutShiftsInput, organizationsUncheckedUpdateWithoutShiftsInput>
  }

  export type organizationsUpdateWithoutShiftsInput = {
    name?: StringFieldUpdateOperationsInput | string
    subcategory?: subcategoriesUpdateOneWithoutOrganizationsNestedInput
    category?: categoriesUpdateOneRequiredWithoutOrganizationsNestedInput
    employees?: employeesUpdateManyWithoutOrganizationNestedInput
    duty_officers?: duty_officersUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationsUncheckedUpdateWithoutShiftsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
    employees?: employeesUncheckedUpdateManyWithoutOrganizationNestedInput
    duty_officers?: duty_officersUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type categoriesCreateWithoutDuty_officersInput = {
    name: string
    subcategories?: subcategoriesCreateNestedManyWithoutCategoryInput
    organizations?: organizationsCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUncheckedCreateWithoutDuty_officersInput = {
    id?: number
    name: string
    subcategories?: subcategoriesUncheckedCreateNestedManyWithoutCategoryInput
    organizations?: organizationsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoriesCreateOrConnectWithoutDuty_officersInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutDuty_officersInput, categoriesUncheckedCreateWithoutDuty_officersInput>
  }

  export type subcategoriesCreateWithoutDuty_officersInput = {
    name: string
    category: categoriesCreateNestedOneWithoutSubcategoriesInput
    organizations?: organizationsCreateNestedManyWithoutSubcategoryInput
  }

  export type subcategoriesUncheckedCreateWithoutDuty_officersInput = {
    id?: number
    name: string
    category_id: number
    organizations?: organizationsUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type subcategoriesCreateOrConnectWithoutDuty_officersInput = {
    where: subcategoriesWhereUniqueInput
    create: XOR<subcategoriesCreateWithoutDuty_officersInput, subcategoriesUncheckedCreateWithoutDuty_officersInput>
  }

  export type organizationsCreateWithoutDuty_officersInput = {
    name: string
    subcategory?: subcategoriesCreateNestedOneWithoutOrganizationsInput
    category: categoriesCreateNestedOneWithoutOrganizationsInput
    employees?: employeesCreateNestedManyWithoutOrganizationInput
    shifts?: shiftsCreateNestedManyWithoutOrganizationInput
  }

  export type organizationsUncheckedCreateWithoutDuty_officersInput = {
    id?: number
    name: string
    subcategory_id?: number | null
    category_id: number
    employees?: employeesUncheckedCreateNestedManyWithoutOrganizationInput
    shifts?: shiftsUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type organizationsCreateOrConnectWithoutDuty_officersInput = {
    where: organizationsWhereUniqueInput
    create: XOR<organizationsCreateWithoutDuty_officersInput, organizationsUncheckedCreateWithoutDuty_officersInput>
  }

  export type categoriesUpsertWithoutDuty_officersInput = {
    update: XOR<categoriesUpdateWithoutDuty_officersInput, categoriesUncheckedUpdateWithoutDuty_officersInput>
    create: XOR<categoriesCreateWithoutDuty_officersInput, categoriesUncheckedCreateWithoutDuty_officersInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutDuty_officersInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutDuty_officersInput, categoriesUncheckedUpdateWithoutDuty_officersInput>
  }

  export type categoriesUpdateWithoutDuty_officersInput = {
    name?: StringFieldUpdateOperationsInput | string
    subcategories?: subcategoriesUpdateManyWithoutCategoryNestedInput
    organizations?: organizationsUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesUncheckedUpdateWithoutDuty_officersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subcategories?: subcategoriesUncheckedUpdateManyWithoutCategoryNestedInput
    organizations?: organizationsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type subcategoriesUpsertWithoutDuty_officersInput = {
    update: XOR<subcategoriesUpdateWithoutDuty_officersInput, subcategoriesUncheckedUpdateWithoutDuty_officersInput>
    create: XOR<subcategoriesCreateWithoutDuty_officersInput, subcategoriesUncheckedCreateWithoutDuty_officersInput>
    where?: subcategoriesWhereInput
  }

  export type subcategoriesUpdateToOneWithWhereWithoutDuty_officersInput = {
    where?: subcategoriesWhereInput
    data: XOR<subcategoriesUpdateWithoutDuty_officersInput, subcategoriesUncheckedUpdateWithoutDuty_officersInput>
  }

  export type subcategoriesUpdateWithoutDuty_officersInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: categoriesUpdateOneRequiredWithoutSubcategoriesNestedInput
    organizations?: organizationsUpdateManyWithoutSubcategoryNestedInput
  }

  export type subcategoriesUncheckedUpdateWithoutDuty_officersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    organizations?: organizationsUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type organizationsUpsertWithoutDuty_officersInput = {
    update: XOR<organizationsUpdateWithoutDuty_officersInput, organizationsUncheckedUpdateWithoutDuty_officersInput>
    create: XOR<organizationsCreateWithoutDuty_officersInput, organizationsUncheckedCreateWithoutDuty_officersInput>
    where?: organizationsWhereInput
  }

  export type organizationsUpdateToOneWithWhereWithoutDuty_officersInput = {
    where?: organizationsWhereInput
    data: XOR<organizationsUpdateWithoutDuty_officersInput, organizationsUncheckedUpdateWithoutDuty_officersInput>
  }

  export type organizationsUpdateWithoutDuty_officersInput = {
    name?: StringFieldUpdateOperationsInput | string
    subcategory?: subcategoriesUpdateOneWithoutOrganizationsNestedInput
    category?: categoriesUpdateOneRequiredWithoutOrganizationsNestedInput
    employees?: employeesUpdateManyWithoutOrganizationNestedInput
    shifts?: shiftsUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationsUncheckedUpdateWithoutDuty_officersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
    employees?: employeesUncheckedUpdateManyWithoutOrganizationNestedInput
    shifts?: shiftsUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type subcategoriesCreateManyCategoryInput = {
    id?: number
    name: string
  }

  export type organizationsCreateManyCategoryInput = {
    id?: number
    name: string
    subcategory_id?: number | null
  }

  export type duty_officersCreateManyCategoryInput = {
    id?: number
    position: string
    phones: string
    subcategory_id?: number | null
    organization_id: number
  }

  export type subcategoriesUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    organizations?: organizationsUpdateManyWithoutSubcategoryNestedInput
    duty_officers?: duty_officersUpdateManyWithoutSubcategoryNestedInput
  }

  export type subcategoriesUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    organizations?: organizationsUncheckedUpdateManyWithoutSubcategoryNestedInput
    duty_officers?: duty_officersUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type subcategoriesUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type organizationsUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    subcategory?: subcategoriesUpdateOneWithoutOrganizationsNestedInput
    employees?: employeesUpdateManyWithoutOrganizationNestedInput
    shifts?: shiftsUpdateManyWithoutOrganizationNestedInput
    duty_officers?: duty_officersUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationsUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
    employees?: employeesUncheckedUpdateManyWithoutOrganizationNestedInput
    shifts?: shiftsUncheckedUpdateManyWithoutOrganizationNestedInput
    duty_officers?: duty_officersUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationsUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type duty_officersUpdateWithoutCategoryInput = {
    position?: StringFieldUpdateOperationsInput | string
    phones?: StringFieldUpdateOperationsInput | string
    subcategory?: subcategoriesUpdateOneWithoutDuty_officersNestedInput
    organization?: organizationsUpdateOneWithoutDuty_officersNestedInput
  }

  export type duty_officersUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    phones?: StringFieldUpdateOperationsInput | string
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
    organization_id?: IntFieldUpdateOperationsInput | number
  }

  export type duty_officersUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    phones?: StringFieldUpdateOperationsInput | string
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
    organization_id?: IntFieldUpdateOperationsInput | number
  }

  export type phonesCreateManyEmployeeInput = {
    id?: number
    phone_number: string
  }

  export type shiftsCreateManyEmployeeInput = {
    id?: number
    organization_id: number
    shift_date: Date | string
    start_time?: string | null
    end_time?: string | null
  }

  export type phonesUpdateWithoutEmployeeInput = {
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type phonesUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type phonesUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type shiftsUpdateWithoutEmployeeInput = {
    shift_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: organizationsUpdateOneRequiredWithoutShiftsNestedInput
  }

  export type shiftsUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    organization_id?: IntFieldUpdateOperationsInput | number
    shift_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shiftsUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    organization_id?: IntFieldUpdateOperationsInput | number
    shift_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type employeesCreateManyOrganizationInput = {
    id?: number
    full_name: string
    position: string
  }

  export type shiftsCreateManyOrganizationInput = {
    id?: number
    employee_id: number
    shift_date: Date | string
    start_time?: string | null
    end_time?: string | null
  }

  export type duty_officersCreateManyOrganizationInput = {
    id?: number
    position: string
    phones: string
    category_id: number
    subcategory_id?: number | null
  }

  export type employeesUpdateWithoutOrganizationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    phones?: phonesUpdateManyWithoutEmployeeNestedInput
    shifts?: shiftsUpdateManyWithoutEmployeeNestedInput
  }

  export type employeesUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    phones?: phonesUncheckedUpdateManyWithoutEmployeeNestedInput
    shifts?: shiftsUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type employeesUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
  }

  export type shiftsUpdateWithoutOrganizationInput = {
    shift_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: employeesUpdateOneRequiredWithoutShiftsNestedInput
  }

  export type shiftsUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    shift_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shiftsUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    shift_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type duty_officersUpdateWithoutOrganizationInput = {
    position?: StringFieldUpdateOperationsInput | string
    phones?: StringFieldUpdateOperationsInput | string
    category?: categoriesUpdateOneRequiredWithoutDuty_officersNestedInput
    subcategory?: subcategoriesUpdateOneWithoutDuty_officersNestedInput
  }

  export type duty_officersUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    phones?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type duty_officersUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    phones?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type organizationsCreateManySubcategoryInput = {
    id?: number
    name: string
    category_id: number
  }

  export type duty_officersCreateManySubcategoryInput = {
    id?: number
    position: string
    phones: string
    category_id: number
    organization_id: number
  }

  export type organizationsUpdateWithoutSubcategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: categoriesUpdateOneRequiredWithoutOrganizationsNestedInput
    employees?: employeesUpdateManyWithoutOrganizationNestedInput
    shifts?: shiftsUpdateManyWithoutOrganizationNestedInput
    duty_officers?: duty_officersUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationsUncheckedUpdateWithoutSubcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    employees?: employeesUncheckedUpdateManyWithoutOrganizationNestedInput
    shifts?: shiftsUncheckedUpdateManyWithoutOrganizationNestedInput
    duty_officers?: duty_officersUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationsUncheckedUpdateManyWithoutSubcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type duty_officersUpdateWithoutSubcategoryInput = {
    position?: StringFieldUpdateOperationsInput | string
    phones?: StringFieldUpdateOperationsInput | string
    category?: categoriesUpdateOneRequiredWithoutDuty_officersNestedInput
    organization?: organizationsUpdateOneWithoutDuty_officersNestedInput
  }

  export type duty_officersUncheckedUpdateWithoutSubcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    phones?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    organization_id?: IntFieldUpdateOperationsInput | number
  }

  export type duty_officersUncheckedUpdateManyWithoutSubcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    phones?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    organization_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}