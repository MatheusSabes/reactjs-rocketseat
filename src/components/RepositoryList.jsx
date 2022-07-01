import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

const repository = {
  name : 'unform',
  description : 'Forms in React',
  link : 'https://github.com/unform/unform'
}

// https://api.github.com/orgs/rocketseat/repos

export function RepostoryList() {

  const [repositories , setRepositories]  = useState([]);
  
  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  },[]);

  return (
    <section className="repository-list">
      <h1>List de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}