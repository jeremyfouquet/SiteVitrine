import { Component } from '@angular/core';
import { IntroPagedModel, VerticalCardModel, VerticalCardStyle } from 'src/app/models';

@Component({
  selector: 'menu-two',
  templateUrl: './menu-two.component.html',
  styleUrls: ['./menu-two.component.scss']
})
export class MenuTwoComponent {
  introPageContaint: IntroPagedModel = {
    title: '_Menu_Two_Title_',
    titleHighlight: '_Menu_Two_Title_Highlight_',
    text: ['_Menu_Two_Intro_'],
    src: 'assets/images/illustrations/IMAGE.svg',
    alt: '_Menu_Two_Graphic_',
    link: '#',
    btn: '_Button_'
  };
  cardOneStyle: VerticalCardStyle  = {
    fontSize: '18px',
    lineHeight: '26.9px',
    imgWidth: '420px',
    imgHeight: '420px',
    cardWidth: '100%',
    cardHeight: 'min-content',
    hMargin: '0 0 4rem 0',
    pMargin: '2rem 2rem 1rem 2rem',
    p2Margin: '0 2rem',
    boxShadow: false
  };
  public cardOne: Array<VerticalCardModel> = [
    {
      'src' : 'assets/images/illustrations/IMAGE_2.svg',
      'alt': '_Menu_Two_Section_One_Icone_One_',
      'hTitle': 'h2',
      'title': '_Menu_Two_Section_One_Title_Card_One_',
      'text': '_Menu_Two_Section_One_Card_One_Text_One_',
      'text2': '_Menu_Two_Section_One_Card_One_Text_Two_',
      'style': this.cardOneStyle
    },
    {
      'src' : 'assets/images/illustrations/IMAGE_2.svg',
      'alt': '_Menu_Two_Section_One_Icone_Two_',
      'hTitle': 'h2',
      'title': '_Menu_Two_Section_One_Title_Card_Two_',
      'text': '_Menu_Two_Section_One_Card_Two_Text_One_',
      'text2': '_Menu_Two_Section_One_Card_Two_Text_Two_',
      'style': this.cardOneStyle
    }
  ];

  public DataOne: any = {
    orderInvers: false,
    title: '_Menu_Two_Section_Three_Data_One_Title_',
    nb: 1,
    nbColor: 'blue-app-color',
    src: 'assets/images/illustrations/IMAGE.svg',
    alt: '_Menu_Two_Section_Three_Data_One_Icon_',
    text: '_Menu_Two_Section_Three_Data_One_Text_',
    li: [
      {
        puce: 'url(assets/images/draws/list-puce-yellow.svg)',
        title: '_Menu_Two_Section_Three_Data_One_List_One_Title_',
        text: '_Menu_Two_Section_Three_Data_One_List_One_Text_',
        color: 'yellow-color'
      },
      {
        puce: 'url(assets/images/draws/list-puce-middle-blue.svg)',
        title: '_Menu_Two_Section_Three_Data_One_List_Two_Title_',
        text: '_Menu_Two_Section_Three_Data_One_List_Two_Text_',
        color: 'medium-blue'
      },
      {
        puce: 'url(assets/images/draws/list-puce-blue-app.svg)',
        title: '_Menu_Two_Section_Three_Data_One_List_Three_Title_',
        text: '_Menu_Two_Section_Three_Data_One_List_Three_Text_',
        color: 'blue-app-color'
      }
    ]
  };

  public DataTwo: any = {
    orderInvers: true,
    title: '_Menu_Two_Section_Three_Data_Two_Title_',
    nb: 2,
    nbColor: 'yellow-color',
    src: 'assets/images/illustrations/IMAGE.svg',
    alt: '_Menu_Two_Section_Three_Data_Two_Icon_',
    text: '_Menu_Two_Section_Three_Data_Two_Text_One_',
    text2: '_Menu_Two_Section_Three_Data_Two_Text_Two_'
  };

  public DataThree: any = {
    orderInvers: false,
    title: '_Menu_Two_Section_Three_Data_Three_Title_',
    nb: 3,
    nbColor: 'light-bue',
    src: 'assets/images/illustrations/IMAGE.svg',
    alt: '_Menu_Two_Section_Three_Data_Three_Icon_',
    text: '_Menu_Two_Section_Three_Data_Three_Text_One_',
    text2: '_Menu_Two_Section_Three_Data_Three_Text_Two_'
  };

  cardTwoStyle: VerticalCardStyle  = {
    fontSize: '18px',
    lineHeight: '26.9px',
    cardWidth: '560px',
    cardHeight: '470px',
    background: '#F3F9FE',
    borderRadius: '30px',
    hMargin: '0',
    pMargin: '3rem',
    boxShadow: true,
    justifyContent: ['between', '50px']
  };
  public cardTwo: Array<VerticalCardModel> = [
    {
      'title': '_Menu_Two_Section_Four_Card_One_Title_',
      'hTitle': 'h3',
      'text': '_Menu_Two_Section_Four_Card_One_Text_',
      'textBtn': '_Button_',
      'link': '#',
      'style': this.cardTwoStyle
    },
    {
      'title': '_Menu_Two_Section_Four_Card_Two_Title_',
      'hTitle': 'h3',
      'text': '_Menu_Two_Section_Four_Card_Two_Text_',
      'textBtn': '_Button_',
      'link': '#',
      'style': this.cardTwoStyle
    }
  ];

  public cardThree: Array<any> = [
    {
      src: 'assets/images/illustrations/IMAGE_2.svg',
      alt: '_Menu_Two_Section_Five_Doc_One_'
    },
    {
      src: 'assets/images/illustrations/IMAGE_2.svg',
      alt: '_Menu_Two_Section_Five_Doc_Two_'
    },
    {
      src: 'assets/images/illustrations/IMAGE_2.svg',
      alt: '_Menu_Two_Section_Five_Doc_Three_'
    },
    {
      src: 'assets/images/illustrations/IMAGE_2.svg',
      alt: '_Menu_Two_Section_Five_Doc_Four_'
    },
    {
      src: 'assets/images/illustrations/IMAGE_2.svg',
      alt: '_Menu_Two_Section_Five_Doc_Five_'
    },
    {
      src: 'assets/images/illustrations/IMAGE_2.svg',
      alt: '_Menu_Two_Section_Five_Doc_Six_'
    }
  ];

  sectionSixContaint: IntroPagedModel = {
    title: '_Menu_Two_Section_Six_Title_',
    text: ['_Menu_Two_Section_Six_Text_'],
    src: 'assets/images/illustrations/IMAGE.svg',
    alt: '_Button_',
    btn: '_Button_',
    link: '#',
    orderInvers: true,
    section: true
  };

  cardSevenStyle: VerticalCardStyle  = {
    fontSize: '18px',
    lineHeight: '26.9px',
    cardWidth: '560px',
    cardHeight: '355px',
    background: '#F3F9FE',
    borderRadius: '30px',
    hMargin: '0',
    pMargin: '2rem 0 0 0',
    p2Margin: '1rem 0 2rem 0',
    boxShadow: true
  };
  public cardSeven: Array<VerticalCardModel> = [
    {
      'title': '_Menu_Two_Section_Seven_Data_One_Title_',
      'hTitle': 'h3',
      'text': '_Menu_Two_Section_Seven_Data_One_Text_One_',
      'text2': '_Menu_Two_Section_Seven_Data_One_Text_Two_',
      'style': this.cardSevenStyle,
      'imgTop': 'assets/images/illustrations/IMAGE.svg',
      'marginTop': '7rem auto 0 auto',
    },
    {
      'title': '_Menu_Two_Section_Seven_Data_Two_Title_',
      'hTitle': 'h3',
      'text': '_Menu_Two_Section_Seven_Data_Two_Text_One_',
      'text2': '_Menu_Two_Section_Seven_Data_Two_Text_Two_',
      'textBtn': '_Button_',
      'style': this.cardSevenStyle,
      'imgTop': 'assets/images/illustrations/IMAGE.svg',
      'marginTop': '7rem auto 0 auto',
      'link': '#'
    }
  ];

}
