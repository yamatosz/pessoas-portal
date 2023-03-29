import style from './CadastroForm.module.css'
import Input from './Form/Input';
import Select from './Form/Select';
import SubmitButton from './Form/SubmitButton';


function CadastroForm() {
    return (
        <form className={style.form}>
            <Input type="text" text="Seu nome" name="name" placeholder="Insira seu nome" />
            <Input type="email" text="Seu email" name="email" placeholder="Insira um email para contato" />
            <Input type="url" text="Url para sua foto" name="url_foto" placeholder="Insira um link para sua foto" />
            <Input type="number" text="Sua idade" name="idade" />
            <Select name="ocupacao" text="Selecione uma ocupacão" />
            <SubmitButton text="Cadastrar" />
        </form>
    )
}

export default CadastroForm;