import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('GifItem test suite', () => {
  const title = 'One piece gif';
  const url = 'https://media4.giphy.com/media/4OV1bLOIWwIXRxpXlN/giphy.gif?cid=acacc881vaklavil45f31ohfkaui8zwofj1lxi7nsfnuv0y3&ep=v1_gifs_search&rid=giphy.gif&ct=g';

  test('should match the snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test('The image should has the correct url and alt', () => {
    render(<GifItem title={title} url={url} />);

    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('The p should has the correct title', () => {
    render(<GifItem title={title} url={url} />);

    //expect(screen.getByText(title)).toBeTruthy();
    expect(screen.getByTestId('test-title').innerHTML).toBe(title);
  });

});