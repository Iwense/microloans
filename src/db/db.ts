interface ICompanies {
    id: number, 
    name: string,
    amount: number, 
    ageFrom?: number, 
    ageTo?: number, 
    limitDays: number, 
    percent: number,
    url?: string,
    logo?:string,
}

type TMinMaxAge = Record<'maxAge'|'minAge', number>;

interface IDB {
    data: ICompanies[],
    limitsDays: number,
    maxMinAge: TMinMaxAge,
    maxAmount: number,
}

const COMPANIES: Array<ICompanies> = [
    {id: 1, name: 'One Click Money', amount: 30_000, ageFrom: 18, ageTo: 80, limitDays: 60, percent: 1},
    {id: 2, name: 'Webbankir', amount: 15_000, ageFrom: 20, ageTo: 90, limitDays: 31, percent: 0},
    {id: 3, name: 'Viva Деньги', amount: 80_000, ageFrom: 21, ageTo: 65, limitDays: 365, percent: 0},
    {id: 4, name: 'Турбозайм', amount: 50_000, ageFrom: 21, ageTo: 65, limitDays: 168, percent: 1},
    {id: 5, name: 'MoneyMan', amount: 80_000, ageFrom: 20, ageTo: 75, limitDays: 126, percent: 0},
    {id: 6, name: 'До Зарплаты', amount: 100_000, ageFrom: 20, ageTo: 60, limitDays: 365, percent: 0},
    {id: 7, name: 'EКапуста', amount: 30_000, ageFrom: 18, ageTo: 70, limitDays: 21, percent: 0},
    {id: 8, name: 'Lime', amount: 70_000, ageFrom: 23, ageTo: 65, limitDays: 168, percent: 0},
]

const MaxAmount = (comp: Array<ICompanies>): number => {
    return comp.reduce<number>((acc, company) => {
        acc = acc < company.amount ? company.amount : acc;
        return acc
    }, 0);
}

const LimitsDays = (comp: Array<ICompanies>): number => {
    return comp.reduce<number>((acc, company) => {
        acc = acc < company.limitDays ? company.limitDays : acc;
        return acc
    }, 0);
}

const MaxMinAge= (comp: Array<ICompanies>):TMinMaxAge  => {
    return comp.reduce<TMinMaxAge>((acc, company) => {
        acc.maxAge = company.ageTo && acc.maxAge < company.ageTo ? company.ageTo : acc.maxAge;
        acc.minAge = company.ageFrom && acc.minAge > company.ageFrom ? company.ageFrom : acc.minAge;
        return acc
    }, {maxAge: 50, minAge:20});
}

export const DB: IDB = {
    data: COMPANIES,
    limitsDays: LimitsDays(COMPANIES),
    maxMinAge: MaxMinAge(COMPANIES),
    maxAmount: MaxAmount(COMPANIES),
}

console.log(DB)

console.log(MaxMinAge(COMPANIES))

