import { ReactNode } from 'react'

export const BlueBadge = ({ children }: { children: ReactNode }) => (
  <span className="bg-blue-100 text-blue-800 text-sm transition-all duration-1000 ease-in-out font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
    {children}
  </span>
)

export const GreyBadge = ({ children }: { children: ReactNode }) => (
  <span className="bg-gray-100 text-gray-800 text-sm transition-all duration-1000 ease-in-out font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
    {children}
  </span>
)

export const RedBadge = ({ children }: { children: ReactNode }) => (
  <span className="bg-red-100 text-red-800 text-sm transition-all duration-1000 ease-in-out font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
    {children}
  </span>
)

export const GreenBadge = ({ children }: { children: ReactNode }) => (
  <span className="bg-green-100 text-green-800 text-sm transition-all duration-1000 ease-in-out font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
    {children}
  </span>
)

export const YellowBadge = ({ children }: { children: ReactNode }) => (
  <span className="bg-yellow-100 text-yellow-800 text-sm transition-all duration-1000 ease-in-out font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
    {children}
  </span>
)

export const IndigoBadge = ({ children }: { children: ReactNode }) => (
  <span className="bg-indigo-100 text-indigo-800 text-sm transition-all duration-1000 ease-in-out font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
    {children}
  </span>
)

export const PurpleBadge = ({ children }: { children: ReactNode }) => (
  <span className="bg-purple-100 text-purple-800 text-sm transition-all duration-1000 ease-in-out font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
    {children}
  </span>
)

export const PinkBadge = ({ children }: { children: ReactNode }) => (
  <span className="bg-pink-100 text-pink-800 text-sm transition-all duration-1000 ease-in-out font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
    {children}
  </span>
)
