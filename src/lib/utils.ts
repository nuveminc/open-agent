import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 *
 * @param timestamp - Unix timestamp in milliseconds
 * @returns
 */
export function getTimeRange(timestamp: number): string {
  const date = new Date(timestamp);
  const now = new Date(Date.now());

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const targetDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  const diffTime = today.getTime() - targetDate.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  // Same year but future date
  if (diffDays < 0) {
    return date.toLocaleString('default', { month: 'long' });
  }

  // Today
  if (diffDays < 1) {
    return 'Today';
  }

  // Yesterday
  if (diffDays < 2) {
    return 'Yesterday';
  }

  // Previous 7 days
  if (diffDays <= 7) {
    return 'Previous 7 days';
  }

  // Previous 30 days
  if (diffDays <= 30) {
    return 'Previous 30 days';
  }

  // Same year, more than 30 days ago
  if (diffDays < 60) {
    return date.toLocaleString('default', { month: 'long' });
  }

  // Different year
  if (date.getFullYear() !== now.getFullYear()) {
    return date.getFullYear().toString();
  }

  return 'undefined';
}
