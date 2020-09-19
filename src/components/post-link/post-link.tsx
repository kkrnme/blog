import React from "react";
import { Link } from "gatsby";
import { TagList } from "../atoms/tag-list";
import { PostDate } from "./post-date";
import { invisibleAnchor } from "../styles/styles";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faTag, faTags } from "@fortawesome/free-solid-svg-icons";

export type PostLinkProps = {
  path: string;
  title: string;
  tags: string[];
  yyyymmdd: string;
  excerpt: string;
};
// PickAndPartialPick<Post, "path" | "title", "tags"> &
//   Pick<MdxFields, "yyyymmdd">;

export const PostLink: React.FCX<PostLinkProps> = ({
  path,
  title,
  className,
  tags,
  yyyymmdd,
  excerpt,
}) => (
  <Link to={`/${path}`} className="no-underline contents">
    <article
      className={
        className +
        " p-4 bg-gray-100 hover:bg-gray-200 border-t border-gray-200"
      }
    >
      <div className="flex items-baseline gap-2 flex-wrap">
        <h3 className="text-3xl  font-bold leading-tight">{title}</h3>
        <div className="contents text-gray-800">
          {yyyymmdd && <PostDate path={yyyymmdd} />}
          <div className="flex flex-wrap items-baseline gap-1">
            <FontAwesomeIcon className="my-auto " icon={faTags} />
            {tags.map(tag => (
              <div key={tag}>{tag}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-gray-600">{excerpt}</div>
    </article>
  </Link>
);
