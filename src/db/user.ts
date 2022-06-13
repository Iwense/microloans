import { ICompanies } from "./db";

export interface IContactInfo {
    name:string,
    sername:string,
    lastname:string,
    phone: string,
    email:string;
}

export interface IPassportInfo {
    seria:string,
    number:string,
    date:Date,
}

class UserFormInfo {
    name:string = ''
    sername:string = ''
    lastname:string = ''
    phone:string = ''
    email: string = ''
    passportSeria: string = ''
    passportNumber: string = ''
    passportDate: Date | null = null;
    amount:number = 0
    days:number = 5
    company:ICompanies | undefined = undefined;

    setContact(contact:IContactInfo){
        const {name, sername, lastname, phone, email} = contact;
        this.name = name;
        this.sername = sername;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;

    }

    setPersonal(pasport:IPassportInfo){
        const {seria, number, date} = pasport;
        this.passportSeria = seria;
        this.passportNumber = number;
        this.passportDate = date;
    }

    setMoney(amount:number, days:number) {
        this.amount = amount;
        this.days = days;
    }

    set setCompany(company: ICompanies | undefined) {
        this.company = company
    }
}

export const User = new UserFormInfo();