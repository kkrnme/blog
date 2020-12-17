import { css } from '@emotion/react';
import tw from "twin.macro";

const listStyle = css`
  ${tw`py-1 px-2 pl-8`}
`;
const headingStyle = css`
  font-feature-settings: "palt";
  font-weight: 600;
  font-family: "Hiragino Sans", "Noto Sans CJK JP", "Yu Gothic", sans-serif;
`;

export const ArticleStyles = css`
  h1 {
    ${headingStyle};
    ${tw`leading-snug mb-3 mt-8 text-3xl border-b border-border`};
    font-feature-settings: "palt";
  }

  h2 {
    ${headingStyle};
    ${tw`leading-snug mb-3 mt-6 text-2xl`};
  }

  h3 {
    ${headingStyle};
    ${tw`text-xl`};
  }

  blockquote {
    ${tw`pl-6 border-l-2 border-border`};
  }

  p {
    ${tw`mb-4`};
  }

  hr {
    ${tw`my-4 border-t`};
  }

  ul {
    ${listStyle}
    ${tw`list-disc`};
  }
  ol {
    ${listStyle}
    ${tw`list-decimal`};
  }

  li:not(:last-child) {
    ${tw`mb-2`}
  }

  strong {
    ${tw`font-bold`};
  }

  a {
    ${tw`underline underline-1 hover:underline-2`}
    transition: text-decoration 100ms ease-in-out;
  }

  hr {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    ${tw`border-t-0 border-b border-border`}
  }

  pre {
    overflow-x: scroll;
  }

  p,
  li {
    line-height: 1.75;
  }

  table {
    > thead {
      ${tw`border-b border-border`}
    }
    > tbody {
      > tr {
        &:nth-of-type(2n) {
          background-color: #fff1;
        }
        > td {
          padding: 0.2rem 1rem;
          &:not(:last-child) {
            ${tw`border-r border-border`}
          }
        }
      }
    }
  }

  iframe {
    max-width: 100%;
  }
`;
