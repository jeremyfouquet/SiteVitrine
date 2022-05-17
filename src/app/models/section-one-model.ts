export interface SectionOneDataModel {
    orderInvers: boolean;
    title: string;
    src: string;
    alt: string;
    listGrp: ListGrp[];
    subtitle?: string;
    background?: string;
}
export interface ListGrp {
    listTitle: string;
    listColor: string;
    puce: string;
    li: string[];
    span?: string[];
}
