# Gemfile
source "https://rubygems.org"

# Meta-pacote oficial do GitHub Pages (traz Jekyll + plugins suportados/versions fixas)
gem "github-pages", group: :jekyll_plugins

# Desenvolvimento local (Ruby 3+ precisa do webrick para jekyll serve)
gem "webrick", "~> 1.8"

# Opcional: feed e SEO (já vêm suportados pelo github-pages)
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag"
end

# Apenas no Windows (não tenta instalar no Linux do Actions)
gem "wdm", "~> 0.1.0", platforms: [:mingw, :mswin, :x64_mingw]
