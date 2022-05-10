import { Statistics } from "../pages/statistics";
import { Home } from "../pages/home";
import { Main } from "../pages/main";
import { Login } from "../pages/login";
import { Report } from "../pages/report";
import { Categories } from "../pages/categories";
import { PaymentAccount } from "../pages/payment-account";
import { Registration } from "../pages/registration";
import { Logout } from "../pages/logout";
import { Settings } from "../pages/settings";

export const ROUTES_NAMES = {
  HOME: "/",
  LOGIN: "/signin",
  LOGOUT: "/logout",
  REGISTRATION: "/register",
  MAIN: "/main",
  CATEGORIES: "/categories",
  REPORT: "/report",
  STATISTICS: "/statistics",
  PAYMENT_ACCOUNTS: "/account",
  SETTINGS: "/settings",
};

export const publicPages = [
  ROUTES_NAMES.MAIN,
  ROUTES_NAMES.LOGIN,
  ROUTES_NAMES.REGISTRATION,
];

export const privatePages = [
  ROUTES_NAMES.MAIN,
  ROUTES_NAMES.LOGOUT,
  ROUTES_NAMES.HOME,
  ROUTES_NAMES.CATEGORIES,
  ROUTES_NAMES.REPORT,
  ROUTES_NAMES.PAYMENT_ACCOUNTS,
  ROUTES_NAMES.SETTINGS,
  ROUTES_NAMES.STATISTICS,
];

export const PUBLIC_ROUTES = [
  {
    path: ROUTES_NAMES.MAIN,
    element: Main,
  },
  {
    path: ROUTES_NAMES.LOGIN,
    element: Login,
  },
  {
    path: ROUTES_NAMES.REGISTRATION,
    element: Registration,
  },
];

export const PRIVATE_ROUTES = [
  {
    path: ROUTES_NAMES.STATISTICS,
    element: Statistics,
  },
  {
    path: ROUTES_NAMES.SETTINGS,
    element: Settings,
  },
  {
    path: ROUTES_NAMES.PAYMENT_ACCOUNTS,
    element: PaymentAccount,
  },
  {
    path: ROUTES_NAMES.REPORT,
    element: Report,
  },
  {
    path: ROUTES_NAMES.CATEGORIES,
    element: Categories,
  },
  {
    path: ROUTES_NAMES.HOME,
    element: Home,
  },
  {
    path: ROUTES_NAMES.LOGOUT,
    element: Logout,
  },
  {
    path: ROUTES_NAMES.MAIN,
    element: Main,
  },
];
