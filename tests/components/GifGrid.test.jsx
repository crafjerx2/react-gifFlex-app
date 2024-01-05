import { fireEvent, render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('<GifGrid /> test suite', () => {

  const category = 'Luffy';

  test('Should show "Loading" and "Luffy"', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText(category)).toBeTruthy();
    expect(screen.getByText('Loading....')).toBeTruthy();
  });

  test('Should show the items gif', () => {
    useFetchGifs.mockReturnValue({
      images: [
        {
          id: 'abc',
          title: 'Luffy',
          url: 'http://localhost:500/luffy'
        },
        {
          id: '123',
          title: 'Goku',
          url: 'http://localhost:500/Goku'
        },
      ],
      isLoading: false
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });

  test('Should onDelete have been called once', () => {
    const onDelete = jest.fn();

    useFetchGifs.mockReturnValue({
      images: [
        {
          id: 'abc',
          title: 'Luffy',
          url: 'http://localhost:500/luffy'
        },
        {
          id: '123',
          title: 'Goku',
          url: 'http://localhost:500/Goku'
        },
      ],
      isLoading: false
    });

    render(<GifGrid category={category} onDelete={onDelete} />);

    const deleteButton = screen.getByRole('button');
    fireEvent.click(deleteButton);

    expect(onDelete).toHaveBeenCalledTimes(1);

  });

});