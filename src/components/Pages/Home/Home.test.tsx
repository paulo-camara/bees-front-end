import { render, screen } from '@testing-library/react';
import { Home } from "./Home";

describe('Test Home page', () => {
    test('Expect render message about rules to use the system', () => {
        render(<Home />);
        const messageFullName = screen.getByText('Please, enter your full name bellow');
        const messageOnlyAlphabeticalChar = screen.getByText('only alphabetical characters are accepted');
        const messageOnlyOlderThan = screen.getByText('Are you older than 18 years old?');

        expect(messageFullName).toBeInTheDocument();
        expect(messageOnlyAlphabeticalChar).toBeInTheDocument();
        expect(messageOnlyOlderThan).toBeInTheDocument();
    });
});
