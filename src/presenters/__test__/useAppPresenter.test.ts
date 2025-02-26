/** @jest-environment jsdom */

import { renderHook, act } from '@testing-library/react';
import { useSettingsStore } from '@/store/settingsStore';
import { useAppPresenter } from '../app/useModalPresenter';

describe('useAppPresenter', () => {
  // beforeEach(() => {
  //   const { result } = renderHook(() => useAppPresenter());
  //   const { presenter } = result.current;

  //   // // Reset the state
  //   act(() => {
  //     presenter.showModal(false);
  //   });
  // }, 10);

  afterEach(() => {
    useSettingsStore.getState().reset();
  });

  it('should initialize with correct default values', () => {
    const { result } = renderHook(() => useAppPresenter());
    const { presenter } = result.current;

    expect(presenter.modalOpen).toBe(false);
    expect(presenter.showModal).toBeDefined();
  });

  it('should update modal state when showModal is called', async () => {
    const { result } = renderHook(() => useAppPresenter());
    const { presenter } = result.current;

    act(() => {
      presenter.showModal(true);
    });

    // Don't know why we need to render again. Should be handled by act?
    const { result: after } = renderHook(() => useAppPresenter());
    expect(after.current.presenter.modalOpen).toBe(true);
  });
});
