import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('useFetchGifs test suitte', () => {

  const category = 'Luffy';

  test('Should return the initial state', () => {
    const { result } = renderHook(() => useFetchGifs(category) );
    const { images, isLoading } = result.current;
    
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Should return an images aray and isLoading as false', async () => {
    const { result } = renderHook(() => useFetchGifs(category) );

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });

});