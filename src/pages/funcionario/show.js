import React from 'react'
import FuncionarioForm from '../../components/form/funcionarioForm'
import service from '../../services/funcionarioService'

export default class Show extends React.Component {

  state = {
    nome: '',
    sobrenome: '',
    email: '',
    nis: ''
  }

  componentWillMount() {
    const { id } = this.props.match.params
    service.find(id).then(data => {
      this.setState({ ...data })
    })
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    })
  }

  onSubmit() {
    service.update(this.state).then(() => {
      this.props.history.push('/')
    })
  }

  render() {
    return (
      <FuncionarioForm
        onSubmit={ () => this.onSubmit()}
        handleChange={ (key, value) => this.handleChange(key, value) }
        { ...this.state } />
    )
  }
}