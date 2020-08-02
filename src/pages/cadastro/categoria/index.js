import React from 'react';
import PageDefault from '../../../components/PageDefault/index';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1> Cadastro de Categoria </h1>
            <Link to="/cadastro/categoria">
                Ir para home
            </Link>
            <label>Nome da Categoria</label>
            <input></input>
            <br></br>
            <button>Salvar</button>

        </PageDefault>
    )
}

export default CadastroCategoria;