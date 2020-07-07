import { useState } from "react";
import React from "react";
import * as LocalStorage from "../libs/local-storage";
import { Global, css } from "@emotion/core";
import { prismStyles } from "../components/layout/prism-styles";
import { createContainer } from "unstated-next";
import { generateVariables } from "./variables";
import { hsl } from "../libs/styleFn/color";
import { ElementOf } from "ts-essentials";

const lightnessList = [0, 10, 25, 50, 75, 90, 100] as const;

type tmp = (arg: number[]) => { [index in ElementOf<typeof arg>]: string };
const palettes = {
  mono: Object.fromEntries(lightnessList.map(n => [n, hsl(0, 0, n)])) as {
    [index in typeof lightnessList extends readonly (infer R)[]
      ? R
      : never]: string;
  },
};

const tuple = ["Banagher" | "Audrey" | ""];

const defaultTheme: typeof themes["dark"] = {
  background: palettes.mono[10],
  primary: "#8094ff",
  secondary: "#fd468a",
  foreground: "#d0d0d0",
  strong: "#f0f0f0",
  border: "#404040",
  postLink: {
    background: "#222",
  },
};

const themes: {
  [index in ThemeName]: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    strong: string;
    border: string;
    postLink: {
      background: string;
    };
  };
} = {
  dark: defaultTheme,
  light: {
    ...defaultTheme,
    primary: "#00a0a8",
    secondary: "#f77253",
    background: "#f0f0f0",
    foreground: "#333",
    strong: "#202020",
    border: "#ddd",
    postLink: { background: "#f0f0f0" },
  },
};

export type ThemeName = "dark" | "light";

const useTheme = () => {
  const local = LocalStorage.get("theme");
  const initialTheme =
    local !== null && ["dark", "light"].includes(local) ? local : "dark";
  LocalStorage.set("theme")(initialTheme);
  const [themeName, setName] = useState<keyof typeof themes>(
    initialTheme as "dark" | "light"
  );

  const toggleTheme = () => {
    setName(name => {
      const newName = name === "dark" ? "light" : "dark";
      LocalStorage.set("theme")(newName);
      return newName;
    });
  };

  return {
    variables: generateVariables(themes[themeName]),
    themeName,
    toggleTheme,
  };
};

export const ThemeContainer = createContainer(useTheme);

const ThemeStoreInner: React.FC = () => {
  const { variables } = ThemeContainer.useContainer();
  return (
    <Global
      styles={css`
        * {
          transition: 200ms background-color ease;
        }
        html {
          background-color: #000;
          scrollbar-color: var(--background);
          overflow-y: scroll;
          ${variables}
        }
        body {
        }
        a {
          color: var(--primary);
          text-decoration: underline var(--primary);
          text-decoration-thickness: 1px;
          &:hover {
            text-decoration-thickness: 2px;
          }
        }
        ${prismStyles}
      `}
    />
  );
};
export const ThemeStore: React.FC = ({ children }) => {
  return (
    <ThemeContainer.Provider>
      <ThemeStoreInner />
      {children}
    </ThemeContainer.Provider>
  );
};
