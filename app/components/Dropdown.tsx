import { useState, useRef, useEffect } from 'react';

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps {
  image?:string;
  title?:string;
  label?: string;
  items: DropdownItem[];
  type:string;
  onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({title, label, items, onSelect,type }) => {

  const [val, setval] = useState({type});
  const [isOpen, setIsOpen] = useState(false);
 
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: DropdownItem) => {
    setSelectedValue(item.value);
    setIsOpen(false);
    onSelect(item.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative flex flex-row gap-5 text-left text-[#6ca22d]" ref={dropdownRef}>
        
      <div>
        <div>{title}</div>
        <button
          type="button"
          className="inline-flex justify-center w-full  px-4 py-2 bg-white text-sm font-medium  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {selectedValue ? items.find((item) => item.value === selectedValue)?.label : label}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={`${
          isOpen ? 'absolute' : 'hidden'
        } mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none max-h-40 overflow-y-scroll`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1" role="none">

          <input type='string' className='mx-2 my-1.5 border-green-600 rounded-smtext-sm ' placeholder='enter your choice'/>
          {items.map((item) => (
            <button
              key={item.value}
              onClick={() => handleItemClick(item)}
              className=" block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
              tabIndex={-1}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;