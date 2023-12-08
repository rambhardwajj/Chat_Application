import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// any time we make conditional classNames this is the function we use 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
} 