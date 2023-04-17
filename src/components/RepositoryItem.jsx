export function RepositoryItem(props) { // props é um parâmetro que recebe todas as propriedades passadas pelo parent desse componente na aplicação
    return (
        <li>
            <strong>{props.repository.name}</strong> {/* Utiliza-se '??' como expressão condicional de "se caso não exista a da esquerda use a da direita" */}
            <p>
                {props.repository.description}
            </p>

            <a href={props.repository.html_url}>
                Acessar repositório
            </a>
        </li>
    );
}