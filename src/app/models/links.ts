export interface LinkModel {
    id: number;
    title: string;
    url: string;
}

export interface LinkCreate {
    title: string;
    url: string;
}

export interface LinkUpdate extends LinkCreate {
    id: number;
}