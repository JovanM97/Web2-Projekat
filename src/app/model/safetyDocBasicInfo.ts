import { Time } from "@angular/common";

enum IncidentType {
    PLANNED,
    UNPLANNED
}

export class SafetyDocBasicInfo{

    private IncidentT: IncidentType;
    private Id: string;
    private Status: string;
    private Creator: string;
    private Crew: string;
    private Details: string;
    private Notes: string;
    private Phone: string;
    private DateCreated: Date;

  constructor(
    IncidentT: IncidentType, 
    Id: string, 
    Status: string, 
    Creator: string, 
    Crew: string, 
    Details: string, 
    Notes: string, 
    Phone: string, 
    DateCreated: Date, 
) {
    this.IncidentT = IncidentT
    this.Id = Id
    this.Status = Status
    this.Creator = Creator
    this.Crew = Crew
    this.Details = Details
    this.Notes = Notes
    this.Phone = Phone
    this.DateCreated = DateCreated
  }

    public getIncidentT(): IncidentType {
        return this.IncidentT;
    }

    public setIncidentT(IncidentT: IncidentType): void {
        this.IncidentT = IncidentT;
    }

    public getId(): string {
        return this.Id;
    }

    public setId(Id: string): void {
        this.Id = Id;
    }

    public getStatus(): string {
        return this.Status;
    }

    public setStatus(Status: string): void {
        this.Status = Status;
    }

    public getCreator(): string {
        return this.Creator;
    }

    public setCreator(Creator: string): void {
        this.Creator = Creator;
    }

    public getCrew(): string {
        return this.Crew;
    }

    public setCrew(Crew: string): void {
        this.Crew = Crew;
    }

    public getDetails(): string {
        return this.Details;
    }

    public setDetails(Details: string): void {
        this.Details = Details;
    }

    public getNotes(): string {
        return this.Notes;
    }

    public setNotes(Notes: string): void {
        this.Notes = Notes;
    }

    public getPhone(): string {
        return this.Phone;
    }

    public setPhone(Phone: string): void {
        this.Phone = Phone;
    }

    public getDateCreated(): Date {
        return this.DateCreated;
    }

    public setDateCreated(DateCreated: Date): void {
        this.DateCreated = DateCreated;
    }

    //private SafetyDocType: DocType;
}

