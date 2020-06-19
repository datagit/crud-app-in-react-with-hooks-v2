import React from 'react';
import { render, screen, fireEvent, waitForDomChange, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import SearchResults2 from "../components/SearchResults2";
import UserList from "../components/UserList";


test('UserList: custom hooks for axios', async () => {
    const { getByText, getByLabelText, rerender, debug, container } = render(<UserList />);
    await waitForDomChange(() => {
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
});