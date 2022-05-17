export interface SectionTwoDataModel {
    orderInvers: boolean;
    title: string;
    src: string;
    alt: string;
    nb: number;
    nbColor: string;
    text: string;
    li?: Li[];
    text2?: string;
}
export interface Li {
    title: string;
    puce: string;
    text: string;
    color: string;
}
