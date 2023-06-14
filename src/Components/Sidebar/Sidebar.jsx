import css from "./Sidebar.module.css";
import { ReactComponent as Chevron } from "../../img/chevron-right-2.svg";
import { ReactComponent as Product } from "../../img/d-square.svg";
import { ReactComponent as Key } from "../../img/key-square.svg";
import { ReactComponent as Help } from "../../img/message-question.svg";
import { ReactComponent as Customers } from "../../img/user-square.svg";
import { ReactComponent as Income } from "../../img/wallet-money.svg";
import { ReactComponent as Promote } from "../../img/discount-shape.svg";
import { ReactComponent as Menu } from "../../img/menu.svg";
import Avatar from "../../img/Ellipse.png";
import Logo from "../../img/setting.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const sitebarNavItem = [
  {
    display: "Dashboard",
    icon: <Key className={css.newIcon} alt="Мій SVG" />,
    chevron: <Chevron className={css.newIcon} alt="Мій SVG" />,
    to: "/",
    section: "",
  },
  {
    display: "Product",
    icon: <Product className={css.newIcon} alt="Мій SVG" />,
    chevron: <Chevron className={css.newIcon} alt="Мій SVG" />,
    to: "product",
    section: "",
  },
  {
    display: "Customers",
    icon: <Customers className={css.newIcon} alt="Мій SVG" />,
    chevron: <Chevron className={css.newIcon} alt="Мій SVG" />,
    to: "customer",
    section: "",
  },
  {
    display: "Income",
    icon: <Income className={css.newIcon} alt="Мій SVG" />,
    chevron: <Chevron className={css.newIcon} alt="Мій SVG" />,
    to: "income",
    section: "",
  },
  {
    display: "Promote",
    icon: <Promote className={css.newIcon} alt="Мій SVG" />,
    chevron: <Chevron className={css.newIcon} alt="Мій SVG" />,
    to: "promote",
    section: "",
  },
  {
    display: "Help",
    icon: <Help className={css.newIcon} alt="Мій SVG" />,
    chevron: <Chevron className={css.newIcon} alt="Мій SVG" />,
    to: "help",
    section: "",
  },
];

const name = "Evano";
const job = "Project Manager";

const Sidebar = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div>
      <nav
        className={menuActive ? css.header : `${css.header} ${css.headerOne}`}
        // className={css.header}
        onClick={() => setMenuActive(!menuActive)}
      >
        <Menu />
      </nav>
      <div
        className={
          menuActive ? css.sidebar : `${css.sidebar} ${css.sidebarNone}`
        }
      >
        <div className={css.navLogo}>
          <img style={{width: '32px'}} src={Logo} alt="Мій SVG" />
          <div className={css.logo}>
            Dashboard <span className={css.span}>v.01</span>
          </div>
        </div>
        <div className={css.menu}>
          <div className={css.indicator}></div>

          {sitebarNavItem.map((item, index) => (
            <Link className={css.link} to={item.to} key={index}>
              <div className={css.icon}>{item.icon}</div>
              <div className={css.text}>{item.display}</div>
              <div className={css.chevron}>{item.chevron}</div>
            </Link>
          ))}
        </div>

        <div className={css.user}>
          <img width={"44px"} height={"44px"} src={Avatar} alt="" />
          <div className={css.avatarInfo}>
            <p className={css.avatarName}>{name}</p>
            <p className={css.avatarJob}>{job}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;