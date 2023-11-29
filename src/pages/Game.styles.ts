import { grid } from "../../styled-system/patterns";

export const container = grid({
  width: 'full',
  maxWidth: '1280px',
  gridGap: 4,
  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
  justifyItems: 'center'
})