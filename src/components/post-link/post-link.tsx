import { Box, Heading, HStack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Hyper } from "../atoms/Hyper";
import { TagList } from "../atoms/tag-list";

export type PostLinkProps = {
  excerpt: string;
  path: string;
  tags: string[];
  title: string;
  yyyymmdd: string;
};
// PickAndPartialPick<Post, "path" | "title", "tags"> &
//   Pick<MdxFields, "yyyymmdd">;

export const PostLink: React.VFC<PostLinkProps> = ({
  excerpt,
  path,
  tags,
  title,
  yyyymmdd,
}) => (
  <Box as="article" px=".5rem">
    <Wrap spacing=".5rem" direction="row" wrap="wrap">
      {yyyymmdd && (
        <WrapItem>
          <HStack spacing=".5rem" alignItems="baseline">
            <FontAwesomeIcon icon={faCalendarDay} />
            <Text ml=".5rem">{yyyymmdd}</Text>
          </HStack>
        </WrapItem>
      )}
      <WrapItem>
        <TagList tags={tags} />
      </WrapItem>
    </Wrap>
    <Heading my=".5rem">
      <Hyper
        to={`/${path}`}
        css={css`
          font-feature-settings: "palt";
        `}
      >
        {title}
      </Hyper>
    </Heading>
    <Text color="gray.400">{excerpt}</Text>
  </Box>
);
