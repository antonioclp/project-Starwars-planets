import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

afterEach(() => jest.clearAllMocks());

describe('Testa a aplicação', () => {
  it('Testa os componentes renderizam os campos corretos', () => {
    render(<App />);
   
    const nameFilter = screen.getByTestId(/name-filter/i);
    const columnFilter = screen.getByTestId(/column-filter/i);
    const comparisonFilter = screen.getByTestId(/comparison-filter/i);
    const valueFilter = screen.getByTestId(/value-filter/i);
   
    expect(nameFilter).toBeInTheDocument();
    expect(columnFilter).toBeInTheDocument();
    expect(comparisonFilter).toBeInTheDocument();
    expect(valueFilter).toBeInTheDocument();
  });

  it('Verifica se a chamada à API é realizada', async () => {
    render(<App />);
    
    await waitFor(() => {
      const nameFilter = screen.getByTestId(/name-filter/i);
    })

    const nameFilter = screen.getByTestId(/name-filter/i);
    const columnFilter = screen.getByTestId(/column-filter/i);
    const btnFilter = screen.getByRole('button', { name: /filtrar/i });

    expect(nameFilter).toBeInTheDocument;
    expect(columnFilter).toBeInTheDocument;
    expect(btnFilter).toBeInTheDocument;

    userEvent.type(nameFilter, 'oo');
    expect(await screen.getByTestId('planet-name', { name: /tatooine/i })).toBeInTheDocument();
  });

  it('Verifica se os filtros são renderizados e agem de forma correta', async () => {
    render(<App />);

    await waitFor(() => {
    const columnFilter = screen.getByTestId(/column-filter/i);
    })

    const columnFilter = screen.getByTestId(/column-filter/i);
    const comparisonFilter = screen.getByTestId(/comparison-filter/i);
    const valueFilter = screen.getByTestId(/value-filter/i);
    const btnFilter = screen.getByRole('button', { name: /filtrar/i });

    userEvent.selectOptions(columnFilter, ['orbital_period']);
    userEvent.selectOptions(comparisonFilter, ['igual a']);
    userEvent.type(valueFilter, "364");

    userEvent.click(btnFilter);
    expect(await screen.getByTestId('planet-name', { name: /alderaan/i })).toBeInTheDocument();

    userEvent.selectOptions(columnFilter, ['population']);
    userEvent.selectOptions(comparisonFilter, ['maior que']);
    userEvent.type(valueFilter, "1000000");

    userEvent.click(btnFilter);
    expect(await screen.getByTestId('planet-name', { name: /alderaan/i })).toBeInTheDocument();
  });
});
