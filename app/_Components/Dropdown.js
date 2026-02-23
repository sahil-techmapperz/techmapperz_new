import { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';

const Dropdown = ({ DynamicComponent, dynamicProps,title }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to show or hide the dynamic component
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li
        className="relative text-center cursor-pointer"
        onClick={toggleDropdown} // Attach the toggle function to onClick
      >
        <Link href="#" className={`text-lg text-white flex items-center space-x-2 ${isOpen && 'border-b-4 border-red-500'}`}>
            <span>{title}</span>
            <IoIosArrowDown />
        </Link>
      </li>

      {/* Conditionally render the dynamic component passed as a prop */}
      {isOpen && DynamicComponent && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
          <DynamicComponent {...dynamicProps} />
        </div>
      )}
    </>
  );
};

export default Dropdown;
