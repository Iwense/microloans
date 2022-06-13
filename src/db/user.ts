import { ICompanies } from "./db";


class UserFormInfo {
    name:string = ''
    sername:string = ''
    amount:number = 0
    days:number = 5
    company:ICompanies = {} as ICompanies;

    setMoney(amount:number, days:number) {
        this.amount = amount;
        this.days = days;
    }
}

export const User = new UserFormInfo();