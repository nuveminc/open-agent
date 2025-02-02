import { getTimeRange } from './utils';

describe('getTimeRange', () => {
  // Set a fixed date: January 15, 2024, 12:00:00
  const mockDate: Date = new Date(2024, 0, 15, 12, 0, 0, 0);
  // Helper function to create a timestamp
  // This function creates a timestamp for a given date and time
  const getTimestamp = (
    year: number,
    month: number,
    date: number,
    hour: number,
    min: number,
    sec: number,
    ms: number = 0
  ) => {
    return new Date(year, month, date, hour, min, sec, ms).getTime();
  };

  // Mock date to ensure consistent testing
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);
  });

  // Restore the actual Date implementation after tests
  afterEach(() => {
    jest.useRealTimers();
  });

  test('returns "Today" for current day', () => {
    const timestamp = getTimestamp(2024, 0, 15, 13, 0, 0);
    const result = getTimeRange(timestamp);
    expect(result).toBe('Today');
  });

  test('returns "Yesterday" for previous day', () => {
    const timestamp = getTimestamp(2024, 0, 14, 10, 0, 0);
    const result = getTimeRange(timestamp);
    expect(result).toBe('Yesterday');
  });

  test('returns "Previous 7 days" for dates within last week', () => {
    const timestamp = getTimestamp(2024, 0, 10, 10, 0, 0);
    const result = getTimeRange(timestamp);
    expect(result).toBe('Previous 7 days');
  });

  test('returns "Previous 30 days" for dates within last month', () => {
    const timestamp = getTimestamp(2023, 11, 20, 10, 0, 0);
    const result = getTimeRange(timestamp);
    expect(result).toBe('Previous 30 days');
  });

  test('returns month name for dates between 30 and 60 days ago in same year', () => {
    const timestamp = getTimestamp(2023, 10, 30, 10, 0, 0);
    const result = getTimeRange(timestamp);
    expect(result).toBe('November');
  });

  test('returns year for dates more than 60 days ago in same year', () => {
    const timestamp = getTimestamp(2023, 2, 15, 10, 0, 0);
    const result = getTimeRange(timestamp);
    expect(result).toBe('2023');
  });

  test('returns year for dates in different year', () => {
    const timestamp = getTimestamp(2022, 11, 15, 10, 0, 0);
    const result = getTimeRange(timestamp);
    expect(result).toBe('2022');
  });

  test('returns month name for future dates in same year', () => {
    const timestamp = getTimestamp(2024, 11, 15, 10, 0, 0);
    const result = getTimeRange(timestamp);
    expect(result).toBe('December');
  });

  // Add some edge cases
  test('returns "Today" for same day different hours', () => {
    const timestamp = getTimestamp(2024, 0, 15, 23, 59, 59);
    const result = getTimeRange(timestamp);
    expect(result).toBe('Today');
  });

  test('returns "Yesterday" for exactly 24 hours ago', () => {
    const timestamp = getTimestamp(2024, 0, 14, 12, 0, 0);
    const result = getTimeRange(timestamp);
    expect(result).toBe('Yesterday');
  });
});
