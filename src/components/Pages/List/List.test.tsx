import { render, screen, waitFor } from '@testing-library/react';
import { List } from './List';


describe('Test List', () => {
    test('Expect List has label Go back', () => {
        render(<List />);
        const errorMessage = screen.getByText("Go back");

        expect(errorMessage).toBeInTheDocument();
    });

    test('Expect List has button Go back', async () => {
        const { getByTestId } = render(<List />);

        const btnNode = await waitFor(() => getByTestId("button-go-back"))

        expect(btnNode).toBeDefined();
    });
});
