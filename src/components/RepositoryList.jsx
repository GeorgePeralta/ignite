import { RepositoryItem } from "./RepositoryItem";

const repository = {
   name: 'unform',
   description: 'Forms in React',
   link: 'https://github.com/'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>List of repositories</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                
            </ul>
        </section>
    );
}