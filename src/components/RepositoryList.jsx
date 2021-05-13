import { useState, useEffect} from 'react';

import RepositoryItem from "./RepositoryItem";

import '../styles/repositories.scss';

//https://api.github.com/orgs/reocketseat/repos

const repository = {
  name: 'unform',
  descripiton: 'FOrm in React',
  link: 'https://github.com/unform/unform'
}

export default function RepositoryList(){

  const [repositories, setRepositories] = useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/users/rafaelomodei/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
       {repositories.map(repository => {
         return <RepositoryItem key={repository.name} repository={repository} />
       })}
      </ul>
    </section>
  );
}