---
id: FREEE
title: Test
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

## TEST <Highlight color="#621d27">[TEST]</Highlight> 

