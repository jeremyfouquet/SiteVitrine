import { Component } from '@angular/core';
import { IntroPagedModel, VerticalCardModel, VerticalCardStyle } from 'src/app/models';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  introPageContaint: IntroPagedModel = {
    title: '_Home_Title_',
    titleHighlight: '_Home_Title_Highlight_',
    text: ['_Home_Intro_'],
    src: 'assets/images/illustrations/IMAGE.svg',
    alt: '_Home_Graphic_'
  };
  cardOneStyle: VerticalCardStyle  = {
      fontSize: '18px',
      lineHeight: '26.9px',
      imgWidth: '210px',
      imgHeight: '232px',
      cardWidth: '300px',
      cardHeight: 'min-content',
      hMargin: '2rem 0',
      boxShadow: false
  };
  public cardOne: Array<VerticalCardModel> = [
    {
      'src' : 'assets/images/illustrations/IMAGE_2.svg',
      'alt': '_Home_Title_Section_One_Icon_One_',
      'hTitle': 'h3',
      'title': '_Home_Title_Section_One_Subtitle_One_',
      'text': '_Home_Title_Section_One_Text_One_',
      'style': this.cardOneStyle
    },
    {
      'src' : 'assets/images/illustrations/IMAGE_2.svg',
      'alt': '_Home_Title_Section_One_Icon_One_',
      'hTitle': 'h3',
      'title': '_Home_Title_Section_One_Subtitle_One_',
      'text': '_Home_Title_Section_One_Text_Two_',
      'style': this.cardOneStyle
    },
    {
      'src' : 'assets/images/illustrations/IMAGE_2.svg',
      'alt': '_Home_Title_Section_One_Icon_One_',
      'hTitle': 'h3',
      'title': '_Home_Title_Section_One_Subtitle_One_',
      'text': '_Home_Title_Section_One_Text_Three_',
      'style': this.cardOneStyle
    }
  ];
  cardTwoStyle: VerticalCardStyle  = {
    fontSize: '18px',
    lineHeight: '26.9px',
    imgWidth: '57.6px',
    imgHeight: '60px',
    cardWidth: '360px',
    cardHeight: '230px',
    background: 'white',
    borderRadius: '30px',
    hMargin: '1rem 0',
    pMargin: '0 2rem',
    boxShadow: true
  };
  public cardTwo: Array<VerticalCardModel> = [
    {
      'src' : 'assets/images/illustrations/IMAGE_2.svg',
      'alt': '_Home_Title_Section_Two_Icon_One_',
      'hTitle': 'h3',
      'title': '_Home_Title_Section_Two_Subtitle_One_',
      'text': '_Home_Title_Section_Two_Text_One_',
      'style': this.cardTwoStyle
    },
    {
      'src' : 'assets/images/illustrations/IMAGE_2.svg',
      'alt': '_Home_Title_Section_Two_Icon_Two_',
      'hTitle': 'h3',
      'title': '_Home_Title_Section_Two_Subtitle_Two_',
      'text': '_Home_Title_Section_Two_Text_Two_',
      'style': this.cardTwoStyle
    },
    {
      'src' : 'assets/images/illustrations/IMAGE_2.svg',
      'alt': '_Home_Title_Section_Two_Icon_Three_',
      'hTitle': 'h3',
      'title': '_Home_Title_Section_Two_Subtitle_Three_',
      'text': '_Home_Title_Section_Two_Text_Three_',
      'style': this.cardTwoStyle
    },
    {
      'src' : 'assets/images/illustrations/IMAGE_2.svg',
      'alt': '_Home_Title_Section_Two_Icon_Four_',
      'hTitle': 'h3',
      'title': '_Home_Title_Section_Two_Subtitle_Four_',
      'text': '_Home_Title_Section_Two_Text_Four_',
      'style': this.cardTwoStyle
    },
    {
      'src' : 'assets/images/illustrations/IMAGE_2.svg',
      'alt': '_Home_Title_Section_Two_Icon_Five_',
      'hTitle': 'h3',
      'title': '_Home_Title_Section_Two_Subtitle_Five_',
      'text': '_Home_Title_Section_Two_Text_Five_',
      'style': this.cardTwoStyle
    }
  ];

  cardThreeStyle: VerticalCardStyle  = {
    fontSize: '18px',
    lineHeight: '26.9px',
    cardWidth: '560px',
    cardHeight: '355px',
    background: '#F3F9FE',
    borderRadius: '30px',
    hMargin: '0',
    pMargin: '3rem',
    boxShadow: true
  };
  public cardThree: Array<VerticalCardModel> = [
    {
      'title': '_Home_Title_Section_Three_Subtitle_One_',
      'hTitle': 'h3',
      'text': '_Home_Title_Section_Three_Text_One_',
      'textBtn': '_Button_',
      'link': '#',
      'style': this.cardThreeStyle
    },
    {
      'title': '_Home_Title_Section_Three_Subtitle_Two_',
      'hTitle': 'h3',
      'text': '_Home_Title_Section_Three_Text_Two_',
      'textBtn': '_Button_',
      'link': '#',
      'style': this.cardThreeStyle
    }
  ];
}
