import { Component } from '@angular/core';
import { IntroPagedModel, VerticalCardStyle, VerticalCardModel, SectionOneDataModel } from 'src/app/models';

@Component({
  selector: 'menu-one',
  templateUrl: './menu-one.component.html',
  styleUrls: ['./menu-one.component.scss']
})
export class MenuOneComponent {
  introPageContaint: IntroPagedModel = {
    title: '_Menu_One_Title_',
    titleHighlight: '_Menu_One_Title_Highlight_',
    text: ['_Menu_One_Intro_'],
    src: 'assets/images/illustrations/IMAGE.svg',
    alt: '_Menu_One_Graphic_'
  };
  cardOneStyle: VerticalCardStyle  = {
    imgWidth: '210px',
    imgHeight: '200px',
    cardWidth: '210px',
    cardHeight: 'min-content',
    hMargin: '2rem 0',
    boxShadow: false
};
public cardOne: Array<VerticalCardModel> = [
  {
    'src' : 'assets/images/illustrations/IMAGE_2.svg',
    'alt': '_Menu_One_Section_One_Icon_One_',
    'hTitle': 'h3',
    'title': '_Menu_One_Section_One_Icon_One_Title_',
    'style': this.cardOneStyle
  },
  {
    'src' : 'assets/images/illustrations/IMAGE_2.svg',
    'alt': '_Menu_One_Section_One_Icon_Two_',
    'hTitle': 'h3',
    'title': '_Menu_One_Section_One_Icon_Two_Title_',
    'style': this.cardOneStyle
  },
  {
    'src' : 'assets/images/illustrations/IMAGE_2.svg',
    'alt': '_Menu_One_Section_One_Icon_Three_',
    'hTitle': 'h3',
    'title': '_Menu_One_Section_One_Icon_Three_Title_',
    'style': this.cardOneStyle
  },
  {
    'src' : 'assets/images/illustrations/IMAGE_2.svg',
    'alt': '_Menu_One_Section_One_Icon_Four_',
    'hTitle': 'h3',
    'title': '_Menu_One_Section_One_Icon_Four_Title_',
    'style': this.cardOneStyle
  }
];
public DataOne: SectionOneDataModel = {
  orderInvers: false,
  title: '_Menu_One_Section_Three_Title_',
  src: 'assets/images/illustrations/IMAGE.svg',
  alt: '_Menu_One_Section_One_Icon_One_',
  listGrp: [
    {
      listTitle: '_Menu_One_Section_Three_Data_One_',
      listColor: 'blue-app-color',
      puce: 'url(assets/images/draws/list-puce-blue-app.svg)',
      li: [
        '_Menu_One_Section_Three_Data_One_Item_One_',
        '_Menu_One_Section_Three_Data_One_Item_Two_'
      ]
    },
    {
      listTitle: '_Menu_One_Section_Three_Data_Two_',
      listColor: 'yellow-color',
      puce: 'url(assets/images/draws/list-puce-yellow.svg)',
      li: [
        '_Menu_One_Section_Three_Data_Two_Item_One_',
        '_Menu_One_Section_Three_Data_Two_Item_Two_',
        '_Menu_One_Section_Three_Data_Two_Item_Three_'
      ]
    },
    {
      listTitle: '_Menu_One_Section_Three_Data_Three_',
      listColor: 'medium-blue',
      puce: 'url(assets/images/draws/list-puce-middle-blue.svg)',
      li: [
        '_Menu_One_Section_Three_Data_Three_Item_One_'
      ]
    }
  ]
};
public DataTwo: SectionOneDataModel = {
  orderInvers: true,
  background: '#F3F9FE',
  title: '_Menu_One_Section_Four_Title_',
  subtitle: '_Menu_One_Section_Four_Subtitle_',
  src: 'assets/images/illustrations/IMAGE.svg',
  alt: '_Menu_One_Section_One_Icon_Two_',
  listGrp: [
    {
      listTitle: '_Menu_One_Section_Four_Data_One_',
      listColor: 'medium-blue',
      puce: 'url(assets/images/draws/list-puce-middle-blue.svg)',
      li: [
        '_Menu_One_Section_Four_Data_One_Item_One_',
        '_Menu_One_Section_Four_Data_One_Item_Two_',
        '_Menu_One_Section_Four_Data_One_Item_Three_'
      ]
    },
    {
      listTitle: '_Menu_One_Section_Four_Data_Two_',
      listColor: 'medium-blue',
      puce: 'url(assets/images/draws/list-puce-middle-blue.svg)',
      li: [
        '_Menu_One_Section_Four_Data_Two_Item_One_'
      ]
    }
  ]
};
public DataThree: SectionOneDataModel = {
  orderInvers: false,
  title: '_Menu_One_Section_Five_Title_',
  src: 'assets/images/illustrations/IMAGE.svg',
  alt: '_Menu_One_Section_One_Icon_Three_',
  listGrp: [
    {
      listTitle: '_Menu_One_Section_Five_Title_Data_One_',
      listColor: 'yellow-color',
      puce: 'url(assets/images/draws/list-puce-yellow.svg)',
      li: [
        '_Menu_One_Section_Five_Title_Data_One_Item_One_',
        '_Menu_One_Section_Five_Title_Data_One_Item_Two_',
        '_Menu_One_Section_Five_Title_Data_One_Item_Three_'
      ]
    },
    {
      listTitle: '_Menu_One_Section_Five_Title_Data_Two_',
      listColor: 'yellow-color',
      puce: 'url(assets/images/draws/list-puce-yellow.svg)',
      li: [
        '_Menu_One_Section_Five_Title_Data_Two_Item_One_',
        '_Menu_One_Section_Five_Title_Data_Two_Item_Two_',
        '_Menu_One_Section_Five_Title_Data_Two_Item_Three_'
      ]
    }
  ]
};
}
