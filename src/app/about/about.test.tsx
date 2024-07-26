import { render, screen } from '@testing-library/react';
import About from './page';
import { vi } from 'vitest';

vi.mock('next/image', () => ({ 
  __esModule: true,
  default: (props: any) => <img {...props} />
}));

vi.mock('next/link', () => ({ 
  __esModule: true,
  default: ({ children }: any) => <a>{children}</a>
}));

describe('About Component', () => {
  test('renders the title, paragraphs, and link correctly', () => {
    render(<About />);

    expect(screen.getByText(/Sobre Nós/i)).toBeInTheDocument();

    expect(screen.getByText(/Bem-vindo ao Pokémon Go Tier List!/i)).toBeInTheDocument();
    expect(screen.getByText(/Seja você um jogador novato ou experiente/i)).toBeInTheDocument();
    expect(screen.getByText(/Este é um projeto de código aberto/i)).toBeInTheDocument();

    const linkElement = screen.getByText(/repositório no GitHub/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.tagName).toBe('SPAN');
  });

  test('renders the image with correct properties', () => {
    render(<About />);

    const image = screen.getByAltText(/Foto de Jefferson da Silva Simplício/i) as HTMLImageElement;
    expect(image).toHaveAttribute('src', 'https://media.licdn.com/dms/image/C4E03AQHSlCjSdDOAlA/profile-displayphoto-shrink_800_800/0/1663096509637?e=1727308800&v=beta&t=eprJ_ewgUTX1AkJjzIKgamx4fUKjeW_cMi7eiE_oaZE');
    expect(image).toHaveAttribute('width', '400');
    expect(image).toHaveAttribute('height', '240');
  });
});
