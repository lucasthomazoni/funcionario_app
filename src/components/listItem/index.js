import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
  <li>
    <Link to={`/edit/${props.id}`}>
      { `${props.nome} ${ props.sobrenome }` }
    </Link>
    <button onClick={ () => props.deleteItem(props.id) }>
      Exluir Funcionário
    </button>
  </li>
)
