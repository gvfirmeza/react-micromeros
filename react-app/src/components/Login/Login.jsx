
import { Botao, DivPrincipal, Input } from '../../pages/style_entra';
import { Titulo, Fundo } from '../../pages/style';

const Login = () => (

    <header className="App-header">
        <center><Titulo>Fazer o Login</Titulo></center>
        <DivPrincipal>
            <label for="email">Digite seu E-mail</label>
            <p><Input type="e-mail" placeholder=' email' name="email" /></p>
            <label for="senha">Digite sua Senha</label>
            <p><Input type="password" placeholder=' senha' name="senha" /></p>
            <Botao type='button'>Logar</Botao>
        </DivPrincipal>
    </header>

)

export default Login;