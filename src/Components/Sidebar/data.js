import dashbord from "../Images/sidebar/dashbord.svg";
import pesan from "../Images/sidebar/pesan.svg";
import statis from "../Images/sidebar/statis.svg";
import dolar from "../Images/sidebar/dolar.svg";
import product from "../Images/sidebar/product.svg";
import customer from "../Images/sidebar/customer.svg";
import transaksi from "../Images/sidebar/transaksi.svg";
import setting from "../Images/sidebar/set.svg";
import logout from "../Images/sidebar/logout.svg";

export const data = [
  {
    title: "Dashboard",
    img: dashbord,
    link: "/",
  },
  {
    title: "Statistic",
    img: statis,
    link: "/statistic",
  },
  {
    title: "Payment",
    img: dolar,
    link: "/payment",
  },
  {
    title: "Transaction",
    img: transaksi,
    link: "/transaction",
  },
  {
    title: "Products",
    img: product,
    link: "/products",
  },
  {
    title: "Customer",
    img: customer,
    link: "/customer",
  },
  {
    title: "Messages",
    img: pesan,
    link: "/messages",
  },
];

export const menuout = [
  {
    title: "Settings",
    img: setting,
    link: "/settings",
  },
  {
    title: "Logout",
    img: logout,
    link: "/logout",
  },
];
