export interface VerticalCardModel {
    title: string;
    style: VerticalCardStyle;
    hTitle: string;
    text?: string;
    text2?: string;
    src?: string;
    alt?: string;
    textBtn?: string;
    marginTop?: string;
    strong?: string[];
    imgTop?: string;
    link?: string;
}
export interface VerticalCardStyle {
    cardWidth: string;
    cardHeight: string;
    boxShadow: boolean;
    lineHeight?: string;
    fontSize?: string;
    imgWidth?: string;
    imgHeight?: string;
    background?: string;
    borderRadius?: string;
    hMargin?: string;
    pMargin?: string;
    p2Margin?: string;
    justifyContent?: string[];
}
