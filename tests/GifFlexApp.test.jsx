import { fireEvent, render, screen } from "@testing-library/react";
import { GifFlexApp } from "../src/GifFlexApp";

describe('<GifFlexApp /> test suite', () => {

  test('Should add a new category', () => {
    render(<GifFlexApp />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { newCategory: 'Luffy' });
  });

});