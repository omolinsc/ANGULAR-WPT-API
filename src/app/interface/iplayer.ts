export interface IPlayer {

    id?: number;
    name: string;
    nickname: string;
    points: number;
    position: "drive" | "revés";
    birthPlace: string;
    country: string;
    birthDate: string;
    height: number;
    photo: string
}
