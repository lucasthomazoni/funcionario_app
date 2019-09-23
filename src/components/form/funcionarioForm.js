import React from 'react'
import { Link } from 'react-router-dom'

export default class FuncionarioForm extends React.Component {

  handleOnlyNumber(key, value) {
    if (!/^[0-9]*$/.test(value)) return

    this.props.handleChange(key, value)
  }

  render() {
    const {
      onSubmit,
      handleChange,
      nome,
      sobrenome,
      email,
      nis
    } = this.props

    return (
      <form onSubmit={ () => onSubmit() }>
        <input type="text"
          required
          placeholder="Nome"
          value={ nome }
          onChange={ e => handleChange('nome', e.target.value) } />

        <input type="text"
          required
          placeholder="Sobrenome"
          value={ sobrenome }
          onChange={ e => handleChange('sobrenome', e.target.value) } />

        <input type="email"
          required
          placeholder="E-mail"
          value={ email }
          onChange={ e => handleChange('email', e.target.value) } />

        <input type="text"
          required
          placeholder="NIS(PIS)"
          value={ nis }
          onChange={ e => this.handleOnlyNumber('nis', e.target.value) } />

        <input type="submit" value="Salvar" />
        <Link to="/">
          Voltar
        </Link>
      </form>
    )
  }
}