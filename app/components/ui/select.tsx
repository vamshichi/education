import React, { useState, useRef, useEffect } from 'react'

interface SelectProps {
  children: React.ReactNode
  onValueChange?: (value: string) => void
}

export const Select: React.FC<SelectProps> = ({ children, onValueChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string>('')
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={selectRef}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            isOpen,
            setIsOpen,
            selectedValue,
            setSelectedValue,
            onValueChange,
          })
        }
        return child
      })}
    </div>
  )
}

interface SelectTriggerProps {
  children: React.ReactNode
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
  selectedValue?: string
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({
  children,
  isOpen,
  setIsOpen,
  selectedValue,
}) => {
  return (
    <button
      className={`w-full px-3 py-2 text-left border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
        isOpen ? 'ring-1 ring-blue-500 border-blue-500' : ''
      }`}
      onClick={() => setIsOpen && setIsOpen(!isOpen)}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
    >
      {selectedValue || children}
    </button>
  )
}

interface SelectContentProps {
  children: React.ReactNode
  isOpen?: boolean
}

export const SelectContent: React.FC<SelectContentProps> = ({ children, isOpen }) => {
  if (!isOpen) return null

  return (
    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
      <ul className="py-1" role="listbox">
        {children}
      </ul>
    </div>
  )
}

interface SelectItemProps {
  value: string
  children: React.ReactNode
  setSelectedValue?: (value: string) => void
  setIsOpen?: (isOpen: boolean) => void
  onValueChange?: (value: string) => void
}

export const SelectItem: React.FC<SelectItemProps> = ({
  value,
  children,
  setSelectedValue,
  setIsOpen,
  onValueChange,
}) => {
  const handleClick = () => {
    setSelectedValue && setSelectedValue(value)
    setIsOpen && setIsOpen(false)
    onValueChange && onValueChange(value)
  }

  return (
    <li
      className="px-3 py-2 cursor-pointer hover:bg-gray-100"
      onClick={handleClick}
      role="option"
    >
      {children}
    </li>
  )
}

export const SelectValue: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
  return <span className="text-gray-500">{placeholder}</span>
}