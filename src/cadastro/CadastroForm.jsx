import { useState } from 'react';
import style from './CadastroForm.module.css'
import Input from './Form/Input';
import Select from './Form/Select';
import SubmitButton from './Form/SubmitButton';


function CadastroForm(handleSubmit, cadastroData) {
    const ocupacoes = [
        {
            "id": 1,
            "name": "Desenvolvedor"
        },
        {
            "id": 2,
            "name": "Estudante"
        },
        {
            "id": 3,
            "name": "Designer"
        },
        {
            "id": 4,
            "name": "Chefe de projetos"
        }
    ]

    const [cadastro, setCadastro] = useState(cadastroData || {})

    const submit = (e) => {
        e.preventDefault()
        // console.log(cadastro)
        handleSubmit(cadastro)
    }

    function handleChange(e) {
        setCadastro({ ...cadastro, [e.target.name]: e.target.value })
    }

    function handleSelect(e) {
        setCadastro({
            ...cadastro, ocupacao: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return (
        <form onSubmit={submit} className={style.form}>
            <Input type="text" text="Seu nome" name="name" placeholder="Insira seu nome" handleOnChange={handleChange} value={cadastro.name ? cadastro.name : ''} />
            <Input type="email" text="Seu email" name="email" placeholder="Insira um email para contato" handleOnChange={handleChange} value={cadastro.email ? cadastro.email : ''} />
            <Input type="url" text="Url para sua foto" name="url_foto" placeholder="Insira um link para sua foto" handleOnChange={handleChange} value={cadastro.url_foto ? cadastro.url_foto : ''} />
            <Input type="number" text="Sua idade" name="idade" handleOnChange={handleChange} value={cadastro.idade ? cadastro.idade : ''} />
            <Select name="ocupacao" text="Selecione uma ocupacão" options={ocupacoes} handleOnChange={handleSelect} value={cadastro.ocupacao ? cadastro.ocupacao.id : ''} />
            <SubmitButton text="Cadastrar" />
        </form>
    )
}

export default CadastroForm;