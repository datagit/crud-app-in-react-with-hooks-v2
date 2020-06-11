import React from 'react';
import { render } from '@testing-library/react';
import Examples from '../components/Examples';

test('renders text [React]', () => {
    const { getByText } = render(<Examples />);
    const linkElement = getByText(/React/i);
    expect(linkElement).toBeInTheDocument();
});
