import { ROUTES_NAMES } from "../../router";
import homeIcon from "../../assets/icons/navbar/home.svg";

export const logo = {
  link: ROUTES_NAMES.HOME,
  icon: homeIcon,
};

export const NavBarLinks = [
  {
    title: "Main",
    link: ROUTES_NAMES.MAIN,
    icon: homeIcon,
  },
  {
    title: "Categories",
    link: ROUTES_NAMES.CATEGORIES,
    icon: homeIcon,
  },
  {
    title: "Report",
    link: ROUTES_NAMES.REPORT,
    icon: homeIcon,
  },
  {
    title: "Statistics",
    link: ROUTES_NAMES.STATISTICS,
    icon: homeIcon,
  },
  {
    title: "Account",
    link: ROUTES_NAMES.PAYMENT_ACCOUNTS,
    icon: homeIcon,
  },
  {
    title: "Settings",
    link: ROUTES_NAMES.SETTINGS,
    icon: homeIcon,
  },
];
