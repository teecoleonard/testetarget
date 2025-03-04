import React, { useState } from 'react';
import { codeButtonStyle, codeBlockStyle } from '../../styles/common';

interface CodeViewerProps {
  sourceCode: string;
}

const CodeViewer: React.FC<CodeViewerProps> = ({ sourceCode }) => {
  const [showCode, setShowCode] = useState(false);
  
  return (
    <div>
      <button 
        onClick={() => setShowCode(!showCode)}
        style={codeButtonStyle}
      >
        {showCode ? 'Ocultar Código' : 'Ver Código Fonte'}
      </button>
      
      {showCode && (
        <pre style={codeBlockStyle}>
          {sourceCode}
        </pre>
      )}
    </div>
  );
};

export default CodeViewer;
