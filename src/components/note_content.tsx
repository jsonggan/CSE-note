import React from 'react';

// redux
import type { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

function NoteContent() {
  const noteContent = useSelector((state: RootState) => state.noteContent);

  // bold content
  const boldContent = (content: string) => {
    const parts = content.split('**');
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index}>{part}</strong>;
      } else {
        return part;
      }
    });
  }

  // input image
  const imageContent = (content: string) => {
    const parts = content.split(/\[\[(.*?)\]\]/);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <img key= {part} src={part} alt="image fail to read"/>;
      } else {
        return part;
      }
    });
  }

  const preprocessContent = (content: string) => {
    const boldParts = boldContent(content); // Apply bold formatting
    const processedParts = boldParts.flatMap((part) => {
      if (typeof part === 'string') {
        // If part is a string, check for image content
        const imageParts = imageContent(part);
        return imageParts;
      } else {
        // If part is already a React element, return it as is
        return part;
      }
    });
    return processedParts;
  };

  return (
    <div className='pb-padding-heading1'>
      <h1 className="py-padding-heading1 text-5xl font-helvaticaneue text-primary" style={{ fontWeight: 'bold' }}>
        {noteContent.heading1}
      </h1>
      {noteContent.heading2.map((heading, index) => (
        <div key={heading}>
          <h2
            className={`text-4xl font-helvaticaneue text-primary ${ index === 0 ? '' : 'pt-padding-heading2' }`} style={{ fontWeight: 'medium' }}>
            {heading}
          </h2>
          <div style={{ whiteSpace: 'pre-wrap', fontWeight: 'normal'} } className=' text-[17px] pt-padding-component-small font-sfpro'>
            {preprocessContent(noteContent.content[heading])}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteContent;
