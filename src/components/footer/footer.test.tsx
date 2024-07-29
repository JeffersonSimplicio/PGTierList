// src/components/footer/__tests__/footer.test.tsx
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  test('renders the footer with the correct text and links', () => {
    render(<Footer />);

    const licenseLink = screen.getByText("GNU General Public License v3.0");
    expect(licenseLink).toBeInTheDocument();
    expect(licenseLink).toHaveAttribute('href', 'https://www.gnu.org/licenses/gpl-3.0.html');
    expect(licenseLink).toHaveAttribute('target', '_blank');
    expect(licenseLink).toHaveAttribute('rel', 'noopener noreferrer');

    const aboutLink = screen.getByText("Sobre");
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/about');

    const contactLink = screen.getByText("Contato");
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');
  });
});
