import React, { useState } from 'react';
import { Bold, Italic, List, Link, Image } from 'lucide-react';
import Button from '../ui/Button';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({ 
  value, 
  onChange,
  placeholder = 'اكتب هنا...'
}: RichTextEditorProps) {
  const [selectedText, setSelectedText] = useState('');

  const handleCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  const handleSelect = () => {
    const selection = window.getSelection();
    if (selection) {
      setSelectedText(selection.toString());
    }
  };

  const handleLink = () => {
    const url = prompt('أدخل الرابط:', 'https://');
    if (url) {
      handleCommand('createLink', url);
    }
  };

  const handleImage = () => {
    const url = prompt('أدخل رابط الصورة:', 'https://');
    if (url) {
      handleCommand('insertImage', url);
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-50 border-b p-2 flex gap-2">
        <Button
          type="button"
          variant="secondary"
          icon={<Bold className="w-4 h-4" />}
          onClick={() => handleCommand('bold')}
        />
        <Button
          type="button"
          variant="secondary"
          icon={<Italic className="w-4 h-4" />}
          onClick={() => handleCommand('italic')}
        />
        <Button
          type="button"
          variant="secondary"
          icon={<List className="w-4 h-4" />}
          onClick={() => handleCommand('insertUnorderedList')}
        />
        <Button
          type="button"
          variant="secondary"
          icon={<Link className="w-4 h-4" />}
          onClick={handleLink}
        />
        <Button
          type="button"
          variant="secondary"
          icon={<Image className="w-4 h-4" />}
          onClick={handleImage}
        />
      </div>
      <div
        className="p-4 min-h-[200px] focus:outline-none"
        contentEditable
        onInput={(e) => onChange(e.currentTarget.innerHTML)}
        onSelect={handleSelect}
        dangerouslySetInnerHTML={{ __html: value }}
        placeholder={placeholder}
      />
    </div>
  );
}