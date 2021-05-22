declare let numArray1: number[];
declare type numArray = Array<number>;
declare type strArray = Array<string>;
declare let lastItem: <T>(arr: T[]) => T | undefined;
declare const item1: number | undefined;
declare const item2: string | undefined;
declare const sum: (a: number, b: number, e?: number | undefined) => number;
declare const getEmployee: <X, Y = string>(id: X, code: Y) => string;
declare const addFullNameProp: <T extends {
    firstname: string;
    lastname: string;
}>(obj: T) => T & {
    FullName: string;
};
declare const perOne: {
    firstname: string;
    lastname: string;
    age: number;
} & {
    FullName: string;
};
interface IPerson<T> {
    name: string;
    age: number;
    misc: T;
}
declare let p1: IPerson<string>;
declare let p2: IPerson<string[]>;
