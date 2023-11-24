import Image from 'next/image'
import '@/styles/Apresentacao.css'
import Logo from '/public/logo-agendaai.png'
import ImgDesktop from '/public/ImgDesktop.png'
import Mobile1 from '/public/Mobile1.png'
import Mobile2 from '/public/Mobile2.png'
import Mobile3 from '/public/Mobile3.png'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import logo from '/public/logo-agendaai.png'
import Container from '@/components/layout/Container'
// https://github.com/ifpi-picos/agenda-ai-front-end

export default function Apresentacao() {
    return (
        <>
            <Navbar />
            <Container>
                <section className="layoutApresentacao">
                    <section className="apresentacao">
                        <div className="titulo">
                            <h1>Agenda aí</h1>
                            <h2>Não espere pelo lanche, faça ele esperar por você!</h2>
                        </div>
                        <div className="botoes">
                            <Link className='btn' id='cadastro' href="/auth/signup">
                                Cadastro
                            </Link>
                            <Link className='btn' id='login' href="/auth/signin">
                                Login
                            </Link>
                        </div>

                        <div className='conteudoDestaque'>
                            <div className='text'>
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
                            </div>

                            <section className="amostragem">
                                <Image className="imgDesktop" src={ImgDesktop} alt="imagem desktop" />
                                <div className="telas-mobile">
                                    <Image className="mobile" src={Mobile1} alt="imagem mobile1" />
                                    <Image className="mobile" src={Mobile2} alt="imagem mobile2" />
                                    <Image className="mobile" src={Mobile3} alt="imagem mobile3" />
                                </div>
                            </section>
                        </div>
                        <div className="botoes">
                            <Link className='btn' href="/cadastroLanchonete">
                                Cadastrar Cantina
                            </Link>
                        </div>
                    </section>
                </section>
            </Container>
        </>
    )
}
