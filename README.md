# DSM Sys — Site Profissional

Site institucional da **DSM Sys**, empresa de sistemas e automações para pequenas e médias empresas.

🌐 **Domínio:** [dsmsys.com.br](https://dsmsys.com.br)

---

## 📁 Estrutura do Projeto

```
dsmsys/
├── index.html       → Estrutura HTML completa (landing page)
├── style.css        → Design premium (variáveis, componentes, responsivo)
├── script.js        → Animações, menu mobile, FAQ accordion, counters
├── README.md        → Este arquivo
├── LOGO/
│   ├── logo.png         → Logotipo principal (usado no favicon)
│   ├── logo_DSM.psd     → Arquivo editável Photoshop
│   └── cartão de visita.jpg → Cartão de visita físico
└── docs/
    └── passo a passo github pro.txt → Guia de deploy no GitHub Pages
```

---

## 🚀 Como rodar localmente

Basta abrir o `index.html` direto no navegador. Não há dependências de build.

```bash
# Ou com qualquer servidor estático, ex: Live Server (VS Code) ou:
npx serve .
```

---

## 🎨 Design System

| Token          | Valor        |
|----------------|--------------|
| `--primary`    | `#0A1F44`    |
| `--blue`       | `#2563EB`    |
| `--success`    | `#10B981`    |
| Fonte          | Inter (Google Fonts) |

---

## 📞 Contato

- 📱 WhatsApp: [(31) 99918-0068](https://wa.me/5531999180068)
- ✉️ E-mail: dsmempreendimentosdigitais@gmail.com

---

## ✅ Checklist antes do deploy

- [ ] Atualizar `og:image` para URL real da imagem de preview social (`og-image.png`)
- [ ] Criar e adicionar `og-image.png` (1200×630px) na raiz do projeto
- [ ] Configurar domínio no provedor de hospedagem
- [ ] Ativar HTTPS (SSL)
- [ ] Testar em mobile (Chrome DevTools)
- [ ] Validar SEO com [PageSpeed Insights](https://pagespeed.web.dev/)
