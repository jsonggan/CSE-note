import React from 'react';

// redux
import type { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

function NoteContent() {
  const noteContent = useSelector((state: RootState) => state.noteContent);

  const preprocessContent = (content: string) => {
    const parts = content.split('**');
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index}>{part}</strong>;
      } else {
        return part;
      }
    });
  };

  return (
    <div className='pb-padding-heading1'>
      <h1 className="py-padding-heading1 text-5xl font-medium text-primary">
        {noteContent.heading1}
      </h1>
      {noteContent.heading2.map((heading, index) => (
        <div key={heading}>
          <h2
            className={`text-4xl font-medium text-primary ${
              index === 0 ? '' : 'pt-padding-heading2'
            }`}
          >
            {heading}
          </h2>
          <p style={{ whiteSpace: 'pre-wrap' }} className='pt-padding-component-small'>
            {preprocessContent(noteContent.content[heading])}
          </p>
        </div>
      ))}
    </div>
  );
}

export default NoteContent;
