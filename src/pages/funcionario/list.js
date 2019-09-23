import React from 'react'
import service from '../../services/funcionarioService'
import ListItem from '../../components/listItem';
import { Link } from 'react-router-dom'

export default class List extends React.Component {

  state = {
    funcionarios: []
  }

  deleteItem(id) {
    service.remove(id).then(() => this.loadFuncionarios())
  }

  componentDidMount() {
    this.loadFuncionarios()
  }

  loadFuncionarios() {
    service.getList().then(res => {
      this.setState({ funcionarios: res.data})
    })
  }

  render() {
    const { funcionarios } = this.state
    return (
      <div>
        <h1>Funcionários</h1>
        <ul>
          {
            funcionarios.map((funcionario, index) => (
              <ListItem
                deleteItem={ id => this.deleteItem(id) }
                { ...funcionario }
                key={ index }/>
            ))
          }
        </ul>

        <Link to="/new">
          Cadastrar
        </Link>
      </div>
    )
  }
}