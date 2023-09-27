import React, { useState } from 'react';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { motion } from 'framer-motion';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  placeHolder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeHolder }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    handleSearch();
  };

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      className="flex border-2 border-primary rounded-xl justify-center items-center gap-2"
    >
      <PiMagnifyingGlass className="text-primary ml-2" size={25} />
      <input
        className="p-2 outline-none border-none bg-transparent lg:w-[400px]"
        placeholder={placeHolder}
        type="text"
        onChange={handleInputChange}
      />
    </motion.div>
  );
};

export default SearchBar;
