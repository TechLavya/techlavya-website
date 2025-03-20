'use client'

import React, { useState, useRef, useEffect } from 'react';
import { PartyPopper, ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface Event {
  id: string;
  name: string;
  section: string;
}

const events: Event[] = [
  { id: '1', name: 'Techlavya', section: 'techlavya' },
  { id: '2', name: 'Esports', section: 'esports' },
];

export const EventDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-500 ease-out group hover:bg-stone-500/20 text-gray-300 hover:text-white"
      >
        <PartyPopper size={19} />
        <span className='text-base font-medium font-kodeMono'>Events</span>
        <ChevronDown size={14} className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-48 rounded-xl bg-stone-800/90 backdrop-blur-lg shadow-lg ring-1 ring-black ring-opacity-5 p-2 z-50">
          <div className="space-y-1">
            {events.map(event => (
              <Link
                key={event.id}
                href={`#${event.section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(event.section);
                }}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-stone-700/50 transition-colors duration-200"
              >
                <PartyPopper size={16} className="text-purple-400" />
                <div className=" text-base font-medium font-kodeMono">{event.name}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDropdown;