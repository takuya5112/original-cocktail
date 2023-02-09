import { css } from "@emotion/react";
import emotionReset from 'emotion-reset';

export const global = css`
  ${emotionReset} 
  body {
    width: 100%;
    height: 100%;
    line-height: 1.4;
    background: pink;
  }
  a {
    list-style: none;
    text-decoration: none;
    cursor: pointer;
  }
`

export const mainColor = "blue";