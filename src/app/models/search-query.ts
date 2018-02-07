export interface SearchQuery {
    lat: number;
    long: number;
    radius: number;
    radiusType: RadiusType;
}

export enum RadiusType {
    KM,
    MILE,
}