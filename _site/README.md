Portfólio Profissional – Cristiano Vieira Silva

Site de portfólio moderno e responsivo construído com Jekyll e hospedado no GitHub Pages.
Foco em Automação Industrial, IO-Link, Redes Industriais (Profinet/Profibus), CLPs Siemens, WinCC/AVEVA, OPC UA, Node-RED e SQL Server.

🚀 Destaques

Design limpo e responsivo (mobile-first)

Rápido e leve (HTML/CSS/JS estático)

SEO pronto (jekyll-seo-tag + metadados)

Acessível (semântica HTML e contraste)

Fácil de manter (conteúdo em Markdown/Liquid)

📱 Seções do Site

Home: Apresentação com call-to-action

Sobre: Perfil, competências e tecnologias

Experiência: Linha do tempo na SINOBRAS

Formação: Graduação + cursos Siemens, etc.

Projetos: Integrações OPC UA + Node-RED, IO-Link, WinCC/AVEVA

Contato: Email, LinkedIn, GitHub e telefone

🧰 Tecnologias do Projeto

Jekyll (GitHub Pages)

Liquid (templates)

HTML5/CSS3/JS (estático)

jekyll-seo-tag e jekyll-sitemap

Se quiser migrar depois para React/TypeScript/Tailwind, dá para aproveitar o conteúdo e manter o deploy no GitHub Pages.

📦 Estrutura recomendada
.
├── _config.yml
├── _layouts/
│   └── default.html
├── _includes/
│   └── head.html
├── assets/
│   ├── css/ (styles.css)
│   ├── js/  (script.js)
│   └── images/
└── index.html

_config.yml (exemplo pronto)
title: "Cristiano Vieira Silva — Técnico de Automação Industrial"
description: "Portfólio com foco em IO-Link, Profinet/Profibus, CLPs Siemens, WinCC/AVEVA, OPC UA, Node-RED e SQL Server."
baseurl: "" # deixe vazio para username.github.io
url: "https://SEU_USUARIO.github.io" # troque SEU_USUARIO

# SEO + sitemap
plugins:
  - jekyll-seo-tag
  - jekyll-sitemap

# Dados pessoais
author:
  name: "Cristiano Vieira Silva"
  email: "cv.lacerdaa@gmail.com"
  phone: "+55 94 98166-7301"
  location: "Marabá, Pará — Brasil"
  linkedin: "https://www.linkedin.com/in/cristiano-silva-830047188/"
  github: "https://github.com/CristianoSilva5730" 

_includes/head.html (metadados úteis)
{% seo %}
<link rel="icon" href="{{ '/favicon.ico' | relative_url }}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ '/assets/css/styles.css' | relative_url }}">
<script defer src="{{ '/assets/js/script.js' | relative_url }}"></script>

_layouts/default.html (layout base)
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  {% include head.html %}
</head>
<body>
  <nav class="navbar">
    <div class="nav-container">
      <h1 class="nav-title"><a href="{{ '/' | relative_url }}">Cristiano Silva</a></h1>
      <div class="nav-menu">
        <a href="{{ '#home' | relative_url }}" class="nav-link">Início</a>
        <a href="{{ '#about' | relative_url }}" class="nav-link">Sobre</a>
        <a href="{{ '#experience' | relative_url }}" class="nav-link">Experiência</a>
        <a href="{{ '#education' | relative_url }}" class="nav-link">Formação</a>
        <a href="{{ '#projects' | relative_url }}" class="nav-link">Projetos</a>
        <a href="{{ '#contact' | relative_url }}" class="nav-link">Contato</a>
      </div>
      <button class="hamburger" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </nav>

  <main>
    {{ content }}
  </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; {{ 'now' | date: '%Y' }} Cristiano Silva. Todos os direitos reservados.</p>
    </div>
  </footer>
</body>
</html>
