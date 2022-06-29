import React from "react";
import "./footer.scss";
import logo from "../../assets/logo_svg/logo.svg";
import { useTranslation } from "react-i18next";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer_container height_md">
      <div className="container">
        <div className="content_">
          <img src={logo} className={"logo_"} alt="Error!!!!" />
          <ul className="ul_">
            <li>
              <a href="#" className="link_">
                {t("footer_page.footer_links.1")}
              </a>
            </li>
            <li>
              <a href="#" className="link_">
                {t("footer_page.footer_links.2")}
              </a>
            </li>
            <li>
              <a href="#" className="link_">
                {t("footer_page.footer_links.3")}
              </a>
            </li>
          </ul>
          <p className="body_">{t("footer_page.body")}</p>
          <div className="messenger_">
            <div className="border_">
              <FacebookIcon className="icon_" />
            </div>
            <div className="border_">
              <TwitterIcon className="icon_" />
            </div>
            <div className="border_">
              <InstagramIcon className="icon_" />
            </div>
            <div className="border_">
              <LinkedInIcon className="icon_" />
            </div>
            <div className="border_">
              <TelegramIcon className="icon_" />
            </div>
          </div>
        </div>
      </div>
      <hr className="hr_" />
      <div className="div_link">
        <a href="#" className="footer_link">
          Copyright 2022 Planet Roc. All rights reserved.
        </a>
      </div>
    </div>
  );
}

export default Footer;
