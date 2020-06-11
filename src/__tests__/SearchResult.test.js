import React from 'react';
import { render, screen, fireEvent, waitForDomChange, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import SearchResults from '../components/SearchResults';

test('SearchResults: action search data from api', async () => {
    const { getByText, getByLabelText, rerender, debug, container } = render(<SearchResults />);
    const input = container.querySelector('[name="query"]');
    fireEvent.change(input, {target: {value: 'google'}});
    await waitForDomChange(() => {
        expect(screen.getByRole('list')).toBeInTheDocument()
    });
    //debug();
});