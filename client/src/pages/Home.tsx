import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Calendar, 
  Database, 
  LineChart, 
  Cloud, 
  Code2, 
  Activity, 
  ArrowRight, 
  CheckCircle2,
  MessageCircle,
  Cpu,
  Edit,
  AppWindowMacIcon
} from "lucide-react";



export default function Home() {
  const services = [
    
  {
      icon: Edit,
      title: "Site Institucional, Landing Pages e E-commerce",
      description: "Desenvolvemos sites modernos, responsivos e otimizados para SEO, com foco em conversão e experiência do usuário."
    },
    {
      icon: AppWindowMacIcon,
      title: "Aplicativos Mobile (Android e iOS) e Web Apps",
      description: "Criamos aplicativos nativos e híbridos para Android e iOS, com design intuitivo e funcionalidades personalizadas para o seu negócio."
    },
    {
      icon: Activity,
      title: "Gestão de Campanhas de Tráfego Pago",
      description: "Temos um conjunto de soluções que gera mais clientes, mais faturamento e mais resultados. Trackeamento, análise de dados e relatórios completos para identificar quais campanhas, anúncios e canais geram mais resultados."
    },
  {
      icon: Cpu,
      title: "Automação",
      description: "Integre qualquer sistema, aplicativos e dados, eliminando silos e automatizando fluxos de trabalho. Conecte CRMs, Google Calendar,ERPs, plataformas de e-commerce, ferramentas de marketing e muito mais para criar processos eficientes e personalizados."
    },
    {
      icon: Bot,
      title: "I.A. – Inteligência Artificial para Negócios",
      description: "Tenha sua própria Base de Conhecimento e transforme dados de conversas e canais digitais em insights estratégicos para impulsionar o crescimento do seu negócio. Tenha sua Base de Conhecimento, MCPs, chatbots, assistentes virtuais e automações inteligentes para atendimento, vendas, marketing e processos internos."
    }

  ];

  /*
    ,

    { 
      icon: Calendar,
      title: "Atendimento Omnichannel",
      description: "Centralize as mensagens do WhatsApp, Messenger, Instagram, site, Telegram e outros canais em um único lugar, com métricas, estratégias e CRM integrados."
    },
    {
      icon: Database,
      title: "CRM – Gestão de Relacionamento com o Cliente",
      description: "Aumente a eficiência dos processos, fortaleça a fidelização de clientes e acompanhe o funil e os resultados comerciais."
    },
    {
      icon: LineChart,
      title: "Agendamento Inteligente",
      description: "Automatize agendamentos, tarefas e processos com lembretes e execuções programadas."
    },
    {
      icon: Cloud,
      title: "Análise de Dados – Tráfego Pago",
      description: "Identifique quais campanhas, anúncios e canais geram mais resultados."
    },
    {
      icon: Code2,
      title: "Envio de E-mails",
      description: "Dispare e-mails para múltiplos contatos simultaneamente, com rapidez e controle."
    },
    {
      icon: Activity,
      title: "Base de Conhecimento com IA",
      description: "Transforme dados de conversas e canais digitais em insights estratégicos para impulsionar o crescimento do seu negócio."
    },{
      icon: Activity,
      title: "Consultoria Estratégica",
      description: "Analisamos dados, canais e processos para definir estratégias de automação, atendimento e crescimento orientadas a resultados."
      
    }
  */

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              <span className="text-sm font-medium text-white/80">Inovação em Automação e IA</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Soluções que <br />
              <span className="text-gradient">Pensam, Conectam</span> <br />
              e Executam.
            </h1>

             <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Tenha e acompanhe sua Gestão de Tráfego em tempo real com Dashboards ( painéis de controle ).
              
            </p>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            
              Automatize suas rotinas com soluções criadas especialmente para o seu negócio. Aumente a eficiência e reduza custos hoje mesmo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollLink to="contact" smooth={true} duration={500} offset={-100}>
                <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1">
                  Fale Conosco
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </ScrollLink>
              
              <ScrollLink to="services" smooth={true} duration={500} offset={-100}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm">
                  Nossas Soluções
                </Button>
              </ScrollLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10 aspect-square lg:aspect-[4/3]">
               {/* tech data dashboard visualization abstract */}
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Dashboard Analytics Automation" 
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-card p-6 rounded-2xl border border-white/10 shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Eficiência</div>
                  <div className="text-xl font-bold text-white">+ 145%</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background/50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Nossas Soluções</h2>
            <p className="text-muted-foreground text-lg">
              Oferecemos um ecossistema completo de ferramentas para modernizar sua empresa, 
              desde automação básica até inteligência artificial avançada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                {...service} 
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Value Props / Benefits */}
      <section id="benefits" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left scale-110" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                 {/* server room cloud technology */}
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                  alt="Cloud Technology Infrastructure" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Por que escolher a <span className="text-primary">Conex Tecnologia</span>?
              </h2>
              
              <div className="space-y-6">
                {[
                  "Infraestrutura de alta performance e disponibilidade",
                  "Equipe especializada em soluções corporativas",
                  "Integrações oficiais (WhatsApp API, CRMs)",
                  "Conformidade total com LGPD",
                  "Suporte técnico ágil e humanizado"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-lg text-white/80">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <ScrollLink to="contact" smooth={true} duration={500} offset={-100}>
                  <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12 font-semibold">
                    Começar Agora
                  </Button>
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Vamos Conversar?</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Descubra como podemos transformar o seu negócio através da tecnologia.
                Preencha o formulário ou entre em contato direto.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">WhatsApp</h4>
                    <p className="text-muted-foreground mb-3">Fale diretamente com nossa equipe comercial.</p>
                    <a 
                      href="https://api.whatsapp.com/send?phone=555199359535" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary font-medium hover:underline inline-flex items-center gap-2"
                    >
                      Iniciar conversa <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <h4 className="font-bold text-white mb-4">Dados da Empresa</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>CONEX TECNOLOGIA</strong></p>
                    <p>CNPJ: 15.176.703/0001-42</p>
                    <p>Rua Juvêncio Soares, 1592</p>
                    <p>Cachoeira do Sul - RS, 96.501-516</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full opacity-30" />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 ">
            <div className="w-30 h-30 flex items-center justify-center gap-2 font-bold text-xl">
   
              <img  src="/logo.png" alt="Conex Tecnologia do Brasil" width="60px" height="60px" />
              <span className="text-white">CONEX </span>
              <span className="text-green-500"> TECNOLOGIA</span>
              
            </div>
            
            <div className="text-muted-foreground text-sm text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Conex Tecnologia. Todos os direitos reservados.</p>
              <div className="flex gap-4 justify-center md:justify-end mt-2">
                <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Termos</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
