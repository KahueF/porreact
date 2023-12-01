import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario ">
            <form>
                <h2>Preencha os cards para agendar sua visita.</h2>
                <CampoTexto label="Nome do Responsavel" placeholder="Digite seu nome" />
                <CampoTexto label="Nome da instituição" placeholder="Digite o nome da instituição" />
                <CampoTexto label="Contato" placeholder="Digite seu número de telefone" />
                <CampoTexto label="E-mail" placeholder="Digite seu E-mail" />
            </form>
        </section>
    )
}

export default Formulario