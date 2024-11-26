import {svg} from '../assets/svg';

const history = [
  {
    id: 1,
    number: 648752,
    date: 'Feb 25, 2023 at 8:32 PM',
    total: 281.85,
    status: 'Shipping',
    delivery: 15,
    discount: 29.65,
    products: [
      {
        id: 1,
        name: 'Small leather backpack, blue',
        quantity: 1,
        price: 167.5,
      },
      {
        id: 2,
        name: 'Shor summer dress, red, S',
        filling: 'vanilla',
        quantity: 1,
        price: 129.0,
      },
    ],
  },
  {
    id: 2,
    number: 648752,
    date: 'Feb 25, 2023 at 8:32 PM',
    total: 281.85,
    status: 'Delivered',
    delivery: 15,
    discount: 29.65,
    products: [
      {
        id: 1,
        name: 'Small leather backpack, blue',
        quantity: 1,
        price: 167.5,
      },
      {
        id: 2,
        name: 'Shor summer dress, red, S',
        filling: 'vanilla',
        quantity: 1,
        price: 129.0,
      },
    ],
  },
  {
    id: 1,
    number: 648752,
    date: 'Feb 25, 2023 at 8:32 PM',
    total: 281.85,
    status: 'Canceled',
    delivery: 15,
    discount: 29.65,
    products: [
      {
        id: 1,
        name: 'Small leather backpack, blue',
        quantity: 1,
        price: 167.5,
      },
      {
        id: 2,
        name: 'Shor summer dress, red, S',
        filling: 'vanilla',
        quantity: 1,
        price: 129.0,
      },
    ],
  },
];

const notifications = [
  {
    id: 1,
    icon: svg.WarningSvg,
    title: 'Please confirm your email.',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: 'Feb 26, 2023 at 12:36 PM',
  },
  {
    id: 2,
    icon: svg.SuccessSvg,
    title: 'Your support ticket №78912365',
    date: 'Feb 29, 2023 at 12:36 PM',
  },
  {
    id: 3,
    icon: svg.NotificationGiftSvg,
    title: 'Black Friday Sales!',
    image: 'https://george-fx.github.io/kastelli/notification/01.jpg',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: 'Feb 29, 2023 at 12:36 PM',
  },
];

const onboardingData = [
  {
    id: 1,
    title: 'Welcome\nto Kastelli!',
    description: 'Labore sunt culpa excepteur\nculpa occaecat ex nisi mollit.',
    image: 'https://george-fx.github.io/kastelli/onboarding/01.jpg',
  },
  {
    id: 2,
    title: 'Easy Track\nyour Order!',
    description: 'Labore sunt culpa excepteur\nculpa occaecat ex nisi mollit.',
    image: 'https://george-fx.github.io/kastelli/onboarding/02.jpg',
  },
  {
    id: 3,
    title: 'Door to Door\nDelivery!',
    description: 'Labore sunt culpa excepteur\nculpa occaecat ex nisi mollit.',
    image: 'https://george-fx.github.io/kastelli/onboarding/03.jpg',
  },
];

const categories_1 = [
  {id: 1, title: 'men'},
  {id: 2, title: 'women'},
  {id: 3, title: 'kids'},
  {id: 4, title: 'accessories'},
  {id: 5, title: 'shoes'},
  {id: 6, title: 'shbagsoes'},
];

const categories_2 = [
  {
    id: 1,
    title: 'Dresses',
    image: 'https://george-fx.github.io/kastelli/categories/01.jpg',
    quantity: 36,
  },
  {
    id: 2,
    title: 'Pants',
    image: 'https://george-fx.github.io/kastelli/categories/02.jpg',
    quantity: 621,
  },
  {
    id: 3,
    title: 'Accessories',
    image: 'https://george-fx.github.io/kastelli/categories/03.jpg',
    quantity: 150,
  },
  {
    id: 4,
    title: 'Shoes',
    image: 'https://george-fx.github.io/kastelli/categories/04.jpg',
    quantity: 54,
  },
  {
    id: 5,
    title: 'T - shirts',
    image: 'https://george-fx.github.io/kastelli/categories/05.jpg',
    quantity: 112,
  },
  {
    id: 6,
    title: 'Suits',
    image: 'https://george-fx.github.io/kastelli/categories/06.jpg',
    quantity: 98,
  },
];

const categories_3 = [
  {
    id: 1,
    slug: 'mens-shoes',
    title: 'Shoes',
    image:
      'https://images.ctfassets.net/9q8du028z7sn/1psUHiwcGWCzAn3qV7bF3K/0c741031d6e1292e23935fdf9a03f8c1/225x225_FILTERBYCAT_SHOES_M.jpg',
  },
  {
    id: 2,
    slug: 'mens-shirts',
    title: 'Shirts',
    image:
      'https://images.ctfassets.net/9q8du028z7sn/1BCuOXun6aCxs5Vg5EwqnQ/7d68ddd8283a61c4166186a671bc96ea/225x225_FILTERBYCAT_SHIRT_M.jpg',
  },
  {
    id: 3,
    slug: 'mens-watches',
    title: 'Watches',
    image:
      'https://images.ctfassets.net/9q8du028z7sn/6KhpWZwatssLvBjefXgnOQ/382f9be4293f508a0408c61ca4438f03/225x225_FILTERBYCAT_JAM_M.jpg',
  },
  {
    id: 4,
    slug: 'womens-bags',
    title: 'Womens Bags',
    image:
      'https://images.ctfassets.net/9q8du028z7sn/4PpRxQ6NEy8iRHK1irGP1T/d18f15784779499d44add5f842be85b9/225x225_FILTERBYCAT_HANDBAG.jpg',
    quantity: 112,
  },
  {
    id: 5,
    slug: 'womens-shoes',
    title: 'Womens Shoes',
    image:
      'https://images.ctfassets.net/9q8du028z7sn/2jM44dlc4Sy8YzRPh22isG/49685a5e2c1bf67179da3da8afd53ce8/225x225_FILTERBYCAT_HIGHHEELS.jpg',
    quantity: 150,
  },
  {
    id: 6,
    slug: 'womens-dresses',
    title: 'Dress',
    image:
      'https://images.ctfassets.net/9q8du028z7sn/32wyXLPZuimJ90MUOJIsQe/0ced54f5085751f05b1a60e6961034f0/225x225_FILTERBYCAT_DRESS_W.jpg',
    quantity: 54,
  },
];

const addresses = [
  {
    id: '1',
    type: 'Home',
    address: '8000 S Kirkland Ave, Chicago, IL 6065...',
    icon: svg.HomeSvg,
  },
  {
    id: '2',
    type: 'Work',
    address: '8000 S Kirkland Ave, Chicago, IL 6066...',
    icon: svg.BriefcaseSvg,
  },
  {
    id: '3',
    type: 'Other',
    address: '8000 S Kirkland Ave, Chicago, IL 6067...',
    icon: svg.MapPinSvg,
  },
];

const promocodes = [
  {
    id: 1,
    name: '20lamplight',
    discount: '20',
    status: 'active',
    valid_till: 'Expire Dec 31, 2023',
  },
  {
    id: 2,
    name: '25%fridaysale',
    discount: '25',
    status: 'active',
    valid_till: 'Expire Dec 31, 2023',
  },
  {
    id: 3,
    name: '10%rooms23',
    discount: '10',
    status: 'expired',
    valid_till: 'Expire in 3 days',
  },
];

const tabs = [
  {
    name: 'Home',
    icon: svg.HomeTabSvg,
  },
  // {
  //   name: 'Categories',
  //   icon: svg.SearchTabSvg,
  // },
  {
    name: 'Order',
    icon: svg.BasketTabSvg,
  },
  {
    name: 'Wishlist',
    icon: svg.WishlistTabSvg,
  },
  {
    name: 'Profile',
    icon: svg.UserTabSvg,
  },
];

const sortingBy = [
  {id: 1, title: 'Best match'},
  {id: 2, title: 'Price: low to high'},
  {id: 3, title: 'Price: high to low'},
  {id: 4, title: 'Newest'},
  {id: 5, title: 'Customer rating'},
  {id: 6, title: 'Most popular'},
];

const payments = [
  {
    id: 1,
    type: 'Visa',
    number: ' **** 4864',
    icon: 'https://george-fx.github.io/kastelli/payments/01.png',
  },
  {
    id: 2,
    type: 'Mastercard',
    number: ' **** 3597',
    icon: 'https://george-fx.github.io/kastelli/payments/02.png',
  },
  {
    id: 3,
    type: 'Apple Pay',
    icon: 'https://george-fx.github.io/kastelli/payments/03.png',
  },
];

export {
  history,
  onboardingData,
  categories_1,
  categories_2,
  categories_3,
  addresses,
  promocodes,
  notifications,
  tabs,
  sortingBy,
  payments,
};
