    // SearchBar.tsx
    import React, { ChangeEvent } from 'react';

    interface SearchBarProps {
      onSearch: (query: string) => void; // Callback function to handle search query
      placeholder?: string;
    }

    export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = "Search..." }) => {
      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
      };

      return (
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
        />
      );
    };