import Image from 'next/image'
import '@/styles/Apresentacao.css'
import Logo from '../components/img/logo-agendaai.png'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import logo from '@/components/img/logo-agendaai.png'

export default function Home() {
  return (
    <>
    <Navbar />
        <section className="apresentacao">
            <div className="titulo">
                <h1>Agenda aí</h1>
                <h2>Não espere pelo lanche, faça ele esperar por você!</h2>
            </div>
            <div className="botoes">
                <Link className='btn' href="/auth/signin">
                    Entrar
                </Link>
            </div>
            <div className="img">
                <Image src={logo} alt="logo_agendaai"/>
            </div>
            <div className="vantagens">
                <h3>Vantagens de usar o nosso software:</h3>
                <ul>
                    <li>Praticidade ao agendar a compra do seu lanche</li>
                    <li>Menor tempo gasto ao resgatar o lanche na cantina</li>
                    <li>Garantia de adquirir seu lanche preferencial</li>
                    <li>Facilidade na compra do lanche de seus filhos na(s) escola(s)</li>
                </ul>
            </div>
            <div className="passosSimples">
                <h3>Passos simples para agendar seu lanche:</h3>
                <ol>
                    <li>Selecione a cantina em nossa plataforma.</li>
                    <li>Escolha o lanche desejado e o horário de retirada.</li>
                    <li>Retire seu lanche na cantina no horário agendado.</li>
                </ol>
            </div>
            <div className="botoes">
                <Link className='btn' href="/FormCadastroCantina">
                    Cadastrar Cantina
                </Link>
            </div>
        </section>
    </>
)
}
