import React, { useState, useEffect, createContext, useContext } from 'react'

interface ToastProps {
  message: string
  type?: 'success' | 'error' | 'info'
  duration?: number
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'info', duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!isVisible) return null

  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  }

  return (
    <div
      className={`fixed bottom-4 right-4 px-4 py-2 rounded-md text-white ${bgColor[type]} shadow-lg`}
      role="alert"
    >
      {message}
    </div>
  )
}

interface ToastContextType {
  showToast: (message: string, type?: 'success' | 'error' | 'info', duration?: number) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<ToastProps | null>(null)

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info', duration = 3000) => {
    setToast({ message, type, duration })
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <Toast {...toast} />}
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}