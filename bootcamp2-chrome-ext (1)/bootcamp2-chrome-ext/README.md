# DEVCLUB Helper — Extensão Chrome (MV3)

Extensão simples que usa o front-end do projeto DEVCLUB como popup.

## Como testar localmente
1. Abra `chrome://extensions/`
2. Ative **Developer mode**
3. Clique em **Load unpacked** e selecione a pasta `bootcamp2-chrome-ext` (onde está o `manifest.json`)
4. Abra o popup clicando no ícone da extensão

## Estrutura do projeto
```
bootcamp2-chrome-ext/
├─ src/
│  ├─ popup/
│  │  ├─ popup.html
│  │  ├─ popup.js
│  │  └─ popup.css
│  ├─ background/
│  │  └─ service-worker.js
│  └─ assets/
├─ icons/
├─ manifest.json
├─ docs/
└─ README.md
```

## Observações técnicas
- Manifest V3
- Permissões mínimas: `storage`
- Não usar JS inline no HTML (CSP MV3)
- Ícones: 16, 32, 48, 128 px

## Publicação
- Crie um release no GitHub com o .zip da extensão.
- Habilite GitHub Pages (branch `main`, pasta `/docs`) para publicar a landing page.
