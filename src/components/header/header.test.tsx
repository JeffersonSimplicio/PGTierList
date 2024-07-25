import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './header';

describe('Header Component', () => {
  test('renders the header with the correct title and links', () => {
    render(<Header />);

    const titleElement = screen.getByText("Pokemon Go Tier List");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.closest('a')).toHaveAttribute('href', '/');

    const aboutLink = screen.getByText("Sobre");
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/about');

    const contactLink = screen.getByText("Contato");
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  test('toggles the menu when the hamburger button is clicked', () => {
    render(<Header />);

    const mobileMenu = screen.queryByTestId('mobile-menu');
    expect(mobileMenu).not.toBeInTheDocument();

    const hamburgerButton = screen.getByRole('button');
    fireEvent.click(hamburgerButton);

    const mobileMenuAfterClick = screen.getByTestId('mobile-menu');
    expect(mobileMenuAfterClick).toBeInTheDocument();

    fireEvent.click(hamburgerButton);

    const mobileMenuAfterSecondClick = screen.queryByTestId('mobile-menu');
    expect(mobileMenuAfterSecondClick).not.toBeInTheDocument();
  });
});
