import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('<AddCategory /> test suite', () => {

  const inputValue = 'Luffy';

  test('Should be change value in the input', () => {
    render(<AddCategory onAddCategory={() => { }} />);

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('');

    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });

  test('Should call onAddCategory and verify has a vlue', () => {
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);

    fireEvent.submit(form);
    expect(input.value).toBe('');

    expect(onAddCategory).toHaveBeenCalled();
    expect(onAddCategory).toHaveBeenCalledTimes(1);
    expect(onAddCategory).toHaveBeenCalledWith(inputValue);
  });

  test('Should Not call onAddCategory', () => {
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.submit(form);
    expect(input.value).toBe('');

    expect(onAddCategory).not.toHaveBeenCalled();
  });
});