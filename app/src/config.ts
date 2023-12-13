import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // go to paywall slide
        {
          extends: 'form',
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_knife.tgs'),
            size: 250,
          },
          form: [
            {
              id: 'statistic',
              placeholder: 'Статистика бота',
              type: 'checkbox',
            }, {
              id: 'referral',
              placeholder: 'Рефералы',
              type: 'checkbox',
            },
               {
              id: 'checkbox_from_form',
              placeholder: 'Информация',
              type: 'checkbox',
            },
          ],
          shape: 'square',
          pagination: 'count',
          textAlign: 'center',
          title: "<p>\n" +
              "  <h1 style=\"background-color:SlateBlue;\">Имя фамилия</h1>\n" +
              "</p>",
          description: "",
          button: {
            content: 'Вывести',
            to: '/paywall',
          },
        },
      ],
    },

    // paywall
    {
      extends: 'paywall',
      path: '/paywall',
      media: {
        type: 'sticker',
        src: import('./assets/stickers/duck_money.tgs'),
        size: 150,
      },
      shape: 'square',
      title: 'Your beautiful Paywall',
      list: [
        'Adjustable product cards',
        '<b>👛 Wallet Pay</b> and <b>Telegram Payments</b> ready. Add custom methods easily',
        'Subscriptions or One-time payments',
      ],
      products: [
        {
          id: '1_month_subscription',
          title: 'ecoPays',
          description: '',
          discount: '',
          price: '',
        },
        {
          id: '1_year_subscription',
          title: 'Neteller',
          description: '',
          price: '',
        },
        {
          id: 'lifetime_access',
          title: 'Visa',
          description: '',
          price: '',
        },
                  {
          id: '1_month_subscription',
          title: 'MasterCard',
          description: '',
          discount: '',
          price: '',
        },
        {
          id: '1_year_subscription',
          title: 'PayPal',
          description: '',
          price: '',
        },
      ],
      mainButtonText: 'Buy for {price}',
      popup: {
        // popup for payment methods choice
        type: 'web',
      },
      links: [
        {
          text: 'Privacy policy',
          href: 'https://google.com',
        },
        {
          text: 'Terms of use',
          href: 'https://google.com',
        },
      ],
    },
  ],
});
