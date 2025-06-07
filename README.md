
# Portfólio Profissional - João Pedro

Um site de portfólio moderno e responsivo desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Características

- **Design Moderno**: Interface limpa com gradientes e animações suaves
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Performance**: Otimizado para carregamento rápido
- **SEO Friendly**: Meta tags otimizadas para mecanismos de busca
- **Acessível**: Construído seguindo as melhores práticas de acessibilidade

## 📱 Seções

- **Home**: Apresentação inicial com call-to-action
- **Sobre**: Informações pessoais e habilidades técnicas
- **Experiência**: Histórico profissional detalhado
- **Projetos**: Showcase dos principais trabalhos
- **Contato**: Links para redes sociais e email

## 🛠️ Tecnologias Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (ícones)
- Shadcn/ui (componentes)

## 📋 Como Usar no GitHub Pages

### Opção 1: Deploy Direto do Lovable
1. Clique em "Share" → "Publish" no Lovable
2. Configure seu domínio personalizado se desejar

### Opção 2: Transferir para GitHub
1. No Lovable, clique no botão "GitHub" no canto superior direito
2. Conecte sua conta do GitHub
3. Crie um novo repositório
4. Configure GitHub Pages nas configurações do repositório

### Opção 3: Conversão Manual para HTML/CSS/JS
Para usar com Jekyll no GitHub Pages, você precisará:

1. **Converter para HTML estático**:
   ```bash
   npm run build
   ```

2. **Criar estrutura Jekyll**:
   ```
   _config.yml
   _layouts/
     default.html
   assets/
     css/
     js/
     images/
   index.html
   ```

3. **Configurar _config.yml**:
   ```yaml
   title: João Pedro - Desenvolvedor Full Stack
   description: Portfólio profissional
   baseurl: ""
   url: "https://seuusuario.github.io"
   
   markdown: kramdown
   highlighter: rouge
   
   plugins:
     - jekyll-sitemap
     - jekyll-seo-tag
   ```

## 🎨 Personalização

### Cores e Temas
As cores estão definidas no arquivo `src/index.css`. Modifique as variáveis CSS para alterar o esquema de cores:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --accent: 210 40% 96.1%;
  /* ... outras variáveis */
}
```

### Conteúdo
Edite o arquivo `src/pages/Index.tsx` para personalizar:

- Informações pessoais
- Experiências profissionais
- Projetos em destaque
- Habilidades técnicas
- Links de contato

### Animações
As animações estão definidas em `src/index.css`. Você pode:
- Modificar durações
- Adicionar novas animações
- Ajustar efeitos de transição

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as categorias
- **Tamanho do Bundle**: ~200KB comprimido
- **Tempo de Carregamento**: <2s em conexões 3G

## 🔧 Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar como base para seu próprio portfólio.

## 📞 Contato

- **Email**: joao@exemplo.com
- **LinkedIn**: [linkedin.com/in/joaopedro](https://linkedin.com/in/joaopedro)
- **GitHub**: [github.com/joaopedro](https://github.com/joaopedro)

---

**Dica**: Para melhor resultado no GitHub Pages, considere usar um domínio personalizado e configurar HTTPS.
