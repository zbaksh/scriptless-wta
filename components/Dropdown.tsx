import React, { useState } from 'react';

interface DropdownProps {
  options: string[];
  placeholder?: string;
  onSelect: (selected: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder = 'Select...', onSelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block', minWidth: 200 }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          textAlign: 'left',
          backgroundColor: '#fff',
          cursor: 'pointer',
        }}
      >
        {selected || placeholder}
        <span style={{ float: 'right' }}>▼</span>
      </button>

      {isOpen && (
        <ul
          style={{
            position: 'absolute',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            width: '100%',
            border: '1px solid #ccc',
            borderTop: 'none',
            backgroundColor: '#fff',
            zIndex: 1000,
          }}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              style={{
                padding: '8px',
                cursor: 'pointer',
                borderBottom: index < options.length - 1 ? '1px solid #eee' : 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
