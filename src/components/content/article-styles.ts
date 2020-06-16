import { css } from "@emotion/core";
import { styleValues } from "../../styles/styleValues";

export const ArticleStyles = css`
  letter-spacing: 0.09em;
  font-feature-settings: "palt";
  h1 {
    border-bottom: 1px solid ${styleValues.global.border};
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  h2 {
    border-bottom: 1px solid ${styleValues.global.border};
    font-weight: medium;
    font-size: 1.2rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    padding-top: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  hr {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    border: 1px solid ${styleValues.global.border};
  }
  pre {
    overflow-x: scroll;
  }
`;