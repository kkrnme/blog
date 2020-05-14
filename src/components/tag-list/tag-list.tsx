import React from "react";
import { css } from "@emotion/core";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type TagListProps = {
  tags: readonly string[];
};

export const TagList: React.FC<TagListProps> = ({ tags }) => (
  <div css={css``}>
    <span>
      <FontAwesomeIcon icon={faTags} />
    </span>
    <ul
      css={css`
        display: inline-flex;
        padding: 0;
        list-style: none;
      `}
    >
      {tags?.map(tag => (
        <li
          css={css`
            font-size: 1em;
            margin-left: 0.3rem;
          `}
        >
          <a
            css={css`
              text-decoration: none;
            `}
            href={`/tags/${tag}/`}
          >
            {tag}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default TagList;
