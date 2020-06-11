import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter2 from '../components/Counter2';

test('renders Counter2', () => {
    const { getByText } = render(<Counter2 />);
    const buttonElement = getByText(/Increment2/i);
    expect(buttonElement).toBeInTheDocument();
});

test('check default value in Counter2', () => {
    render(<Counter2 />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement.textContent).toContain('0');
});

test('event click in Counter2', () => {
    const {rerender, getByTestId, getByLabelText, queryByTestId, debug} = render(<Counter2 />);
    const buttonElement = screen.getByRole('button');
    //debug();
    fireEvent.click(buttonElement);
    const headingElement = screen.getByRole('heading');
    expect(headingElement.textContent).toContain("1");
    //debug();
    rerender(<Counter2/>);
    expect(screen.getByRole('heading').textContent).toContain('1');
});
