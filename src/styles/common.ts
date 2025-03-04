import { CSSProperties } from 'react';

export const codeButtonStyle: CSSProperties = {
  backgroundColor: '#f0f0f0',
  border: '1px solid #ddd',
  padding: '5px 10px',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '15px',
  fontSize: '14px'
};

export const codeBlockStyle: CSSProperties = {
  backgroundColor: '#f8f8f8', 
  padding: '10px', 
  borderRadius: '4px',
  overflow: 'auto',
  marginTop: '10px',
  border: '1px solid #ddd',
  fontSize: '14px'
};

export const actionButtonStyle: CSSProperties = {
  padding: '8px 15px',
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export const inputStyle: CSSProperties = {
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ddd',
  marginRight: '10px'
};


export const tableStyles = {
  table: {
    width: '100%', 
    borderCollapse: 'collapse' as const
  },
  th: {
    padding: '8px', 
    textAlign: 'left' as const, 
    borderBottom: '1px solid #ddd'
  },
  td: {
    padding: '8px', 
    borderBottom: '1px solid #eee'
  },
  tdRight: {
    padding: '8px', 
    textAlign: 'right' as const, 
    borderBottom: '1px solid #eee'
  },
  thRight: {
    padding: '8px', 
    textAlign: 'right' as const, 
    borderBottom: '1px solid #ddd'
  }
};
