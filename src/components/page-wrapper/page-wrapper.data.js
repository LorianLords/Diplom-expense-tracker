import { ROUTES_NAMES } from "../../shared/router/routing.data";
import homeIcon from "../../assets/icons/navbar/home.svg";
import layers from "../../assets/icons/navbar/layers.svg";
import report from "../../assets/icons/navbar/report.svg";
import chart from "../../assets/icons/navbar/chart.svg";
import calendar from "../../assets/icons/navbar/calendar.svg";
import settings from "../../assets/icons/navbar/settings.svg";
import logoIcon from "../../assets/icons/navbar/logo.svg";

export const logo = {
  link: ROUTES_NAMES.HOME,
  icon: logoIcon,
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
    icon: layers,
  },
  {
    title: "Report",
    link: ROUTES_NAMES.REPORT,
    icon: report,
  },
  {
    title: "Statistics",
    link: ROUTES_NAMES.STATISTICS,
    icon: chart,
  },
  {
    title: "Account",
    link: ROUTES_NAMES.PAYMENT_ACCOUNTS,
    icon: calendar,
  },
  {
    title: "Settings",
    link: ROUTES_NAMES.SETTINGS,
    icon: settings,
  },
];
