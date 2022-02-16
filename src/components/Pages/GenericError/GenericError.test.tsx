import { render, screen, waitFor } from '@testing-library/react';
import { GenericError } from './GenericError';

describe('Test GenericError page', () => {
    it('Expect render Bees logo', async () => {
        const { getByTestId } = render(<GenericError />);

        const nodeImg = await waitFor(()=> getByTestId("image-bees"));

        expect(nodeImg).toBeDefined();
    });

    it('Expect render message about generic error', () => {
        render(<GenericError />);
        const errorMessage = screen.getByText('Oops! An unexpected error has occurred. Try again.');

        expect(errorMessage).toBeInTheDocument();
    });
});
