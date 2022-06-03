export interface NoticeModel {
    id: number;
    title: string;
    category: string;
    url: string;
}

export interface NoticeReadModel extends NoticeModel{
    date: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
}