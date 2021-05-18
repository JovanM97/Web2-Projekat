enum UserType {
    CREW_MEMBER,
    DISPATCHER,
    ATH_WORKER
}

export class User {

    private userName: string;
    private email: string;
    private password: string;
    private name: string;
    private lastName: string;
    private address: string;
    private birthday: Date;
    private userT: UserType;
    
    constructor($userName: string, $email: string, $password: string, $name: string, $lastName: string, $address: string, $birthday: Date, $userT: UserType) {
        this.userName = $userName;
        this.email = $email;
        this.password = $password;
        this.name = $name;
        this.lastName = $lastName;
        this.address = $address;
        this.birthday = $birthday;
        this.userT = $userT;
    }
    
    public getUserName(): string {
        return this.userName;
    }

    public setUserName(userName: string): void {
        this.userName = userName;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getBirthday(): Date {
        return this.birthday;
    }

    public setBirthday(birthday: Date): void {
        this.birthday = birthday;
    }

    public getUserT(): UserType {
        return this.userT;
    }

    public setUserT(userT: UserType): void {
        this.userT = userT;
    }

    
    
    
    


    
  }
  