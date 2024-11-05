import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimeRange2 = (timestamp: number): string => {
  const now = new Date();
  const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds

  // Calculate the difference in milliseconds
  const diffTime = now.getTime() - date.getTime();
  const diffDays = diffTime / (1000 * 3600 * 24);

  const nowDate = now.getDate();
  const nowMonth = now.getMonth();
  const nowYear = now.getFullYear();

  const dateDate = date.getDate();
  const dateMonth = date.getMonth();
  const dateYear = date.getFullYear();

  if (nowYear === dateYear && nowMonth === dateMonth && nowDate === dateDate) {
    return 'Today';
  } else if (
    nowYear === dateYear &&
    nowMonth === dateMonth &&
    nowDate - dateDate === 1
  ) {
    return 'Yesterday';
  } else if (diffDays <= 7) {
    return 'Previous 7 days';
  } else if (diffDays <= 30) {
    return 'Previous 30 days';
  } else if (nowYear === dateYear) {
    return date.toLocaleString('default', { month: 'long' });
  } else {
    return date.getFullYear().toString();
  }
};

export class Time {
  public static getTimeRange(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const now = new Date();

    // Reset hours to compare just the dates
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
}

export function getTimeRange(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  // console.log(`Date: ${timestamp} :: ${date}`);
  // Reset hours to compare just the dates
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
