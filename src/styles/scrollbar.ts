import { css } from 'styled-components'

export const hidedScrollBar = css`
  -ms-overflow-style: none;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */

  overflow-y: scroll; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`
