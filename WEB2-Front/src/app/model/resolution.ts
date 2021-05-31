enum Cause{
    WEATHER,
    HUMAN_FACTOR,
    OUTAGE
}

enum SubCause{
    LIGHTNING,
    STORM,
    WIND,
    HAIL,
    FLOOD,
    FIRE,
    TRAFIC_ACCIDENT,
    HUMAN_ERROR,
    FAULTY_EQUIPMENT
}

enum ConstrType {
    UNDERGROUND,
    ABOVEGROUND
}

enum Material {
    METAL,
    PLASTIC,
    RUBBER,
    CONCRETE
}

export class IncResolution {

    private cause: Cause;
    private subCause: SubCause;
    private constrType: ConstrType;
    private material: Material;

  constructor(
    cause: Cause, 
    subCause: SubCause, 
    constrType: ConstrType, 
    material: Material
) {
    this.cause = cause
    this.subCause = subCause
    this.constrType = constrType
    this.material = material
  }

    public getCause(): Cause {
        return this.cause;
    }

    public setCause(cause: Cause): void {
        this.cause = cause;
    }

    public getSubCause(): SubCause {
        return this.subCause;
    }

    public setSubCause(subCause: SubCause): void {
        this.subCause = subCause;
    }

    public getConstrType(): ConstrType {
        return this.constrType;
    }

    public setConstrType(constrType: ConstrType): void {
        this.constrType = constrType;
    }

    public getMaterial(): Material {
        return this.material;
    }

    public setMaterial(material: Material): void {
        this.material = material;
    }


}