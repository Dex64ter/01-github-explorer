import { useEffect, useState } from "react"; // O useEffect e useState são ganchos, eles são usados para executar algo com componentes no react
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

// https://api.github.com/users/Dex64ter/repos

const repositoryName = 'unform';

const repository = {
    name: "Unform",
    description: "Form in React",
    link: "https://github.com/Dex64ter",

}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]); // Usado para trocar o valor de uma variável dentro da aplicação

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