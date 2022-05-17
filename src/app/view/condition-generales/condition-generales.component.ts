import { Component } from '@angular/core';
import { IntroPagedModel } from 'src/app/models';

@Component({
  selector: 'app-condition-generales',
  templateUrl: './condition-generales.component.html',
  styleUrls: ['./condition-generales.component.scss']
})
export class ConditionGeneralesComponent {
  introPageContaint: IntroPagedModel = {
    title: '_Condition_Generales_',
    titleHighlight: '_Condition_Generales_Title_Highlight_',
    text: [
      '_Contac_Intro_1_',
      '_Contac_Intro_2_'
    ],
    src: 'assets/images/illustrations/IMAGE.svg',
    alt: '_Condition_Generales_Graphic_',
    btn: '_Nav_4_',
    link: '/view/contact'
  };

  articles: Array<any> = [
    {
      title: '_Condition_Generales_Article_1_Title_',
      text: [
        {
          marginTop: '0',
          string: [
            {
              contain: '_Condition_Generales_Article_1_Text_1_',
              weight: '400'
            },
            {
              contain: '_Condition_Generales_Article_1_Text_2_',
              weight: '800'
            },
            {
              contain: '_Condition_Generales_Article_1_Text_3_',
              weight: '400'
            },
            {
              contain: '_Condition_Generales_Article_1_Text_4_',
              weight: '400'
            }
          ]
        },
        {
          marginTop: '40px',
          string: [
            {
              contain: '_Condition_Generales_Article_1_Text_5_',
              weight: '400'
            }
          ]
        }
      ]
    },
    {
      title: '_Condition_Generales_Article_2_Title_',
      text: [
        {
          marginTop: '0',
          string: [
            {
              contain: '_Condition_Generales_Article_2_Text_1_',
              weight: '800'
            }
          ]
        },
        {
          marginTop: '0',
          string: [
            {
              contain: '_Condition_Generales_Article_2_Text_2_',
              weight: '400'
            }
          ]
        },
        {
          marginTop: '0',
          string: [
            {
              contain: '_Condition_Generales_Article_2_Text_3_',
              weight: '400'
            }
          ]
        },
        {
          marginTop: '0',
          string: [
            {
              contain: '_Condition_Generales_Article_2_Text_4_',
              weight: '400'
            }
          ]
        },
        {
          marginTop: '40px',
          string: [
            {
              contain: '_Condition_Generales_Article_2_Text_5_',
              weight: '800'
            }
          ]
        },
        {
          marginTop: '0',
          string: [
            {
              contain: '_Condition_Generales_Article_2_Text_6_',
              weight: '400'
            }
          ]
        }
      ]
    },
    {
      title: '_Condition_Generales_Article_3_Title_',
      text: [
        {
          marginTop: '0',
          string: [
            {
              contain: '_Condition_Generales_Article_3_Text_1_',
              weight: '400'
            }
          ]
        },
        {
          marginTop: '40px',
          string: [
            {
              contain: '_Condition_Generales_Article_3_Text_2_',
              weight: '400'
            }
          ]
        }
      ]
    }
  ];
}
