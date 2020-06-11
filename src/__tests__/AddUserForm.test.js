import React from 'react';
import { render } from '@testing-library/react';
import AddUserForm from '../components/forms/AddUserForm';

test('renders text Add new user', () => {
    const { getByText } = render(<AddUserForm />);
    const linkElement = getByText(/Add new user/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders button add new user', () => {
    const { getByTestId } = render(<AddUserForm/>);
    const button = getByTestId('btn_add_new_user2');
    expect(button).toBeTruthy();
});
