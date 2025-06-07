
import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    'Automação Industrial', 'Node-RED', 'SIMATIC PCS7', 'SIMATIC WinCC', 'CLP/PLC', 
    'Profinet', 'Profibus', 'Intercat', 'Instrumentação', 'Sistemas Pneumáticos', 
    'Sistemas Hidráulicos', 'CFC', 'SFC', 'LAD', 'Análise de Falhas', 'RCA',
    'OPC UA', 'Programação C++', 'C#', 'Lua', 'HTML', 'Eletrotécnica', 'Mecatrônica'
  ];

  const projects = [
    {
      title: 'Sistema de Automação Industrial',
      description: 'Implementação de sistemas de automação utilizando CLP sensors, sistemas pneumáticos e hidráulicos, inversores e drivers.',
      tech: ['SIMATIC PCS7', 'CLP', 'Profinet', 'WinCC'],
      link: '#',
      github: '#'
    },
    {
      title: 'Integração de Dispositivos IoT',
      description: 'Programação e integração utilizando linguagem CFC, LAD, SFC e softwares de supervisão, WinCC, INTOUCH para integrar dispositivos.',
      tech: ['Node-RED', 'OPC UA', 'IoT', 'INTOUCH'],
      link: '#',
      github: '#'
    },
    {
      title: 'Sistema de Controle de Processos',
      description: 'Desenvolvimento de lógicas de controle para comunicação via IO-Link, otimizando a eficiência e precisão dos sistemas de automação.',
      tech: ['IO-Link', 'SIMATIC', 'Automação', 'C++'],
      link: '#',
      github: '#'
    }
  ];

  const experiences = [
    {
      title: 'Técnico de Automação',
      company: 'SINOBRAS SIDERÚRGICA NORTE BRASIL S.A',
      period: '10/2022 - Atual',
      location: 'Marabá, Pará',
      description: 'Responsável por projetar, implementar e manter sistemas de automação industrial e controle de processo. Automação e controle de processos, desenvolvimento e implementação de soluções de automação utilizando CLP sensors, sistemas pneumáticos e hidráulicos, inversores e drivers.'
    },
    {
      title: 'Eletricista de Manutenção Eletroeletrônica',
      company: 'SINOBRAS SIDERÚRGICA NORTE BRASIL S.A',
      period: '08/2019 - 10/2022',
      location: 'Marabá, Pará',
      description: 'Execução de manutenções preventivas e corretivas em sistemas, garantindo a eficiência e continuidade das operações. Realização de relatórios detalhados e implementação de melhorias contínuas nos equipamentos.'
    },
    {
      title: 'Estagiário em Mecatrônica',
      company: 'SINOBRAS SIDERÚRGICA NORTE BRASIL S.A',
      period: '10/2018 - 08/2019',
      location: 'Marabá, Pará',
      description: 'Atuação com apoio em projetos de automação e integração de sistemas mecânicos, elétricos e de controle. Apoio técnico na execução de manutenções preventivas e corretivas em sistemas e equipamentos mecatrônicos.'
    }
  ];

  const education = [
    {
      title: 'Bacharelado em Engenharia de Controle e Automação',
      institution: 'UNIFATECIE',
      period: '11/2022 - 11/2027',
      status: 'Cursando',
      description: 'Análise e controle de sistemas dinâmicos, Projeto e implementação de sistemas de automação, Programação e integração de sistemas industriais.'
    },
    {
      title: 'SIMATIC PCS 7',
      institution: 'Siemens',
      period: '01/2024',
      status: 'Concluído',
      description: 'Curso intensivo sobre Sistema de automação SIMATIC PCS 7. Arquitetura avançada do sistema PCS 7, Configuração e integração de hardware e software.'
    },
    {
      title: 'SIMATIC WinCC Unified',
      institution: 'Siemens',
      period: '01/2023',
      status: 'Concluído',
      description: 'Configuração e operação do SIMATIC WinCC Unified. Desenvolvimento de interfaces homem-máquina intuitivas com Unified Comfort Panels.'
    },
    {
      title: 'Automação Industrial',
      institution: 'PRIMER CURSOS',
      period: '01/2020',
      status: 'Concluído',
      description: 'Conceitos básicos e avançados de automação industrial. Controladores Lógicos Programáveis (CLP) e suas aplicações.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Cristiano Silva</h1>
            <div className="hidden md:flex space-x-6">
              {['home', 'about', 'experience', 'education', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' ? 'Início' : 
                   section === 'about' ? 'Sobre' :
                   section === 'experience' ? 'Experiência' :
                   section === 'education' ? 'Formação' :
                   section === 'projects' ? 'Projetos' : 'Contato'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent p-1">
                <img 
                  src="/lovable-uploads/470be718-fd4c-49e1-8002-07db7d5929eb.png"
                  alt="Cristiano Silva"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in-up">
              Cristiano Silva
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Técnico de Automação | Especialista em Sistemas Industriais
            </p>
            <div className="flex justify-center space-x-4 mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Button size="lg" onClick={() => scrollToSection('projects')}>
                Ver Projetos
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
                Entrar em Contato
              </Button>
            </div>
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 mx-auto text-muted-foreground cursor-pointer" onClick={() => scrollToSection('about')} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Sobre Mim</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Técnico de automação com sólida experiência em sistemas industriais, especializado 
                  em automação e controle de processos. Atualmente cursando Engenharia de Controle 
                  e Automação, com foco em desenvolvimento e implementação de soluções inovadoras.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Experiência comprovada em projetos de automação utilizando tecnologias SIMATIC, 
                  sistemas de controle industrial e integração de dispositivos. Comprometido com 
                  a eficiência operacional e melhoria contínua dos processos industriais.
                </p>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-5 h-5" />
                    <span>Marabá, Pará - Brasil</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5" />
                    <span>(94) 981667301</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5" />
                    <span>cv.lacerdaa@gmail.com</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Principais Competências</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Idiomas</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Português</span>
                      <span className="text-muted-foreground">Nativo</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Inglês</span>
                      <span className="text-muted-foreground">Básico</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Experiência Profissional</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {exp.company}
                        </CardDescription>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Formação e Certificações</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{edu.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {edu.institution}
                        </CardDescription>
                        <Badge variant={edu.status === 'Cursando' ? 'default' : 'secondary'} className="mt-2">
                          {edu.status}
                        </Badge>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Projetos em Destaque</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span>{project.title}</span>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button size="sm" variant="ghost" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Vamos Trabalhar Juntos?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Estou sempre aberto a novas oportunidades e projetos desafiadores na área de automação industrial.
              Entre em contato e vamos conversar!
            </p>
            <div className="flex justify-center space-x-6">
              <Button size="lg" asChild>
                <a href="mailto:cv.lacerdaa@gmail.com" className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/cristiano-silva-830047188" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+5594981667301" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Telefone</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Cristiano Silva. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
