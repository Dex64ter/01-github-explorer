// O useEffect e useState são ganchos, eles são usados para executar algo com componentes no react
import { useEffect, useState } from "react"; 
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

// imutabilidade - uma variável nunca muda de valor, é adicionado um novo valor a ela

// https://api.github.com/users/Dex64ter/repos

interface Repository {
    name: string;
    description: string;
    html_url: string 

}

export function RepositoryList() {
    // <> usado no hook é uma tipagem do Typescript para verificar o tipo de dado que estará sendo alterado de estado
    const [repositories, setRepositories] = useState<Repository[]>([]); // Usado para trocar o valor de uma variável dentro da aplicação

    // Estrutura do useEffect   -   usado para executar uma função (primeiro parâmetro) sempre
    // que uma variável ou variáveis (segundo parâmetro) forem atualizadas
    // useEffect(() => {
    //
    // },[]) -- caso o segundo parâmetro estiver vazio, o useEffect deverá executar sempre que a página for renderizada

    useEffect(() => {
        fetch('https://api.github.com/users/Dex64ter/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [repositories]);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
                
            </ul>
        </section>
    );
}

    // <RepositoryItem
    //     repository={repositoryName}
    //     description="Form in React"
    //     link="https://github.com/Dex64ter"
    //  posso fazer assim como posso criar um objeto