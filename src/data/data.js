import { iconsImgs } from "../utils/images";

// export const navigationLinks = [
//     { id: 1, title: 'Home', image: iconsImgs.home },
//     { id: 2, title: 'Budget', image: iconsImgs.budget },
//     { id: 3, title: 'Transactions', image: iconsImgs.plane },
//     { id: 4, title: 'Subscriptions', image: iconsImgs.wallet },
//     { id: 5, title: 'Loans', image: iconsImgs.bills },
//     { id: 6, title: 'Reports', image: iconsImgs.report },
//     { id: 7, title: 'Savings', image: iconsImgs.wallet },
//     { id: 8, title: 'Financial Advice', image: iconsImgs.wealth },
//     { id: 9, title: 'Account', image: iconsImgs.user },
//     { id: 10, title: 'Settings', image: iconsImgs.gears }
// ];

export const navigationLinks = [
  {
    path: "/",
    image: iconsImgs.home,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
    },
  },
  {
    path: "/Budget",
    image: iconsImgs.budget,
    state: "budget",
    sidebarProps: {
      displayText: "Budget",
    },
  },
  {
    path: "/Chatbot",
    image: iconsImgs.plane,
    state: "chatbot",
    sidebarProps: {
      displayText: "Chatbot",
    },
  },
];
