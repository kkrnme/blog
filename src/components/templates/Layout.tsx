import React from "react"
import { Sidebar } from "../organisms/Sidebar"
import { Helmet } from "react-helmet"
import { Main } from "./Main"
import "sanitize.css"
import { css, Global } from "@emotion/core"
import { scheme } from "../../styles/colorScheme"
import s from "../../images/dark.svg"

export type LayoutProps = {
  title: string
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <div
    id="Layout"
    css={css`
      font-size: 20px;
      min-height: 100vh;
      background-image: url(${s});
      background-attachment: fixed;
      background-size: cover;
    `}
  >
    <Global
      styles={css`
        html {
          background-color: ${scheme.background};
          color: ${scheme.text};
        }
        body {
        }
        a {
          color: ${scheme.primaryAccent};
        }
      `}
    />
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Sidebar />
    <Main title={title}>{children}</Main>
  </div>
)
