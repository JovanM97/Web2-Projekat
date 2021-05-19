import { Time } from "@angular/common";

enum IncidentType {
    PLANNED,
    UNPLANNED
}

export class BasicInfo {

    private Id: string;
    private IncidentT: IncidentType;
    private Priority: number;
    private Approved: boolean;
    private Status: string;
    private ETA: Time;
    private ATA: Time;
    private IncDate: Date;
    private ETR: Time;
    private AffectedUsers: number;
    private Calls: number;
    private Voltage: number;
    private WorkDate: Date;

  constructor(
    Id: string, 
    IncidentT: IncidentType, 
    Priority: number, 
    Approved: boolean, 
    Status: string, 
    ETA: Time, 
    ATA: Time, 
    IncDate: Date, 
    ETR: Time, 
    AffectedUsers: number, 
    Calls: number, 
    Voltage: number, 
    WorkDate: Date
) {
    this.Id = Id
    this.IncidentT = IncidentT
    this.Priority = Priority
    this.Approved = Approved
    this.Status = Status
    this.ETA = ETA
    this.ATA = ATA
    this.IncDate = IncDate
    this.ETR = ETR
    this.AffectedUsers = AffectedUsers
    this.Calls = Calls
    this.Voltage = Voltage
    this.WorkDate = WorkDate
  }

    

    public getId(): string {
        return this.Id;
    }

    public setId(Id: string): void {
        this.Id = Id;
    }

    public getIncidentT(): IncidentType {
        return this.IncidentT;
    }

    public setIncidentT(IncidentT: IncidentType): void {
        this.IncidentT = IncidentT;
    }

    public getPriority(): number {
        return this.Priority;
    }

    public setPriority(Priority: number): void {
        this.Priority = Priority;
    }

    public isApproved(): boolean {
        return this.Approved;
    }

    public setApproved(Approved: boolean): void {
        this.Approved = Approved;
    }

    public getStatus(): string {
        return this.Status;
    }

    public setStatus(Status: string): void {
        this.Status = Status;
    }

    public getETA(): Time {
        return this.ETA;
    }

    public setETA(ETA: Time): void {
        this.ETA = ETA;
    }

    public getATA(): Time {
        return this.ATA;
    }

    public setATA(ATA: Time): void {
        this.ATA = ATA;
    }

    public getIncDate(): Date {
        return this.IncDate;
    }

    public setIncDate(IncDate: Date): void {
        this.IncDate = IncDate;
    }

    public getETR(): Time {
        return this.ETR;
    }

    public setETR(ETR: Time): void {
        this.ETR = ETR;
    }

    public getAffectedUsers(): number {
        return this.AffectedUsers;
    }

    public setAffectedUsers(AffectedUsers: number): void {
        this.AffectedUsers = AffectedUsers;
    }

    public getCalls(): number {
        return this.Calls;
    }

    public setCalls(Calls: number): void {
        this.Calls = Calls;
    }

    public getVoltage(): number {
        return this.Voltage;
    }

    public setVoltage(Voltage: number): void {
        this.Voltage = Voltage;
    }

    public getWorkDate(): Date {
        return this.WorkDate;
    }

    public setWorkDate(WorkDate: Date): void {
        this.WorkDate = WorkDate;
    }




}