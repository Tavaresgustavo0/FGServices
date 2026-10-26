const translations = {
  en: {
    navServices:'Services', navAbout:'Our approach', navContact:'Contact', navQuote:'Let’s talk ↗',
    location:'AT HOME IN CENTRAL FLORIDA',heroTitle:'A better space.<br>A place you love.',heroText:'From the little fixes to the big transformations. Home renovations, remodeling and repairs, with care in every detail.',heroCta:'Tell us about your project',heroExplore:'Explore our services ↓',heroFoot:'YOUR HOME. NEW POSSIBILITIES.',imageNote:'Illustrative image',intro:'Thoughtful improvements. From floor to finish.',instagramVisit:'See our work on Instagram',
    servicesLabel:'WHAT WE DO',servicesTitle:'Your vision.<br>Our hands-on approach.',servicesIntro:'An updated kitchen. A fresh finish. The repair you’ve been putting off. Let’s make your home work better for you.',service1:'Renovations & remodeling',service1Text:'Reimagine kitchens and living spaces with improvements that fit the way you live.',service2:'Floors & finishes',service2Text:'Flooring, tile, painting and the finishing details that bring a room together.',service3:'Repairs & home improvements',service3Text:'Practical help for home repairs, decks, fences and everyday improvements.',servicesCaption:'Images illustrate service categories. Visit Instagram to see the company’s projects.',
    approachLabel:'THE F. GREAT WAY',approachTitle:'Transforming spaces.<br><em>Building trust.</em>',approachText:'We’re a family-owned business serving Central Florida. We believe taking care of your home starts with listening to you.',meetUs:'Get to know us on Instagram ↗',step1:'Start with a conversation',step1Text:'Tell us what you have in mind. Share your ideas, photos and project location.',step2:'Work through the details',step2Text:'Discuss the scope, materials and next steps directly with our team.',step3:'Bring your space to life',step3Text:'Move forward with a shared plan and attention to the details that matter to you.',
    socialTitle:'See the work.<br>Find your inspiration.',socialText:'Explore projects, transformations and behind-the-scenes moments on our Instagram.',socialCta:'Explore Instagram',contactLabel:'LET’S MAKE IT HAPPEN',contactTitle:'Your next chapter<br>starts at home.',contactIntro:'Have a project in mind? Send us a few details and choose how you’d like to connect.',nameLabel:'Your name',projectLabel:'Tell us about your project',projectPlaceholder:'What would you like to improve? Where is your project located?',whatsappSend:'Continue on WhatsApp',instagramSend:'Copy message & open Instagram ↗',formNote:'WhatsApp opens with your message ready to send. For Instagram, we copy it so you can paste it into the conversation. You send the message in the selected app.',findLabel:'FIND & CONTACT US',addressLabel:'Location',addressNote:'Map shows the ZIP code area. Contact us for the exact address before visiting.',directions:'Open in Google Maps ↗',footerText:'Home renovations, remodeling & repairs · Central Florida',copied:'Message copied. Paste it into the Instagram conversation.',copyFailed:'Automatic copying is unavailable. Copy the message below and paste it into Instagram:',ready:'Your message is ready in WhatsApp.',messageIntro:'Hi, F. Great Services! My name is',messageProject:'I’d like to discuss this project:',title:'F. Great Services | Home Renovations in Central Florida',description:'Home renovations, remodeling and repairs in Central Florida. Talk to F. Great Services about your next project.',mapTitle:'Google Maps — Orlando, FL 32827',navLabel:'Main navigation'
  },
  pt: {
    navServices:'Serviços',navAbout:'Como trabalhamos',navContact:'Contato',navQuote:'Vamos conversar ↗',location:'SEU LAR NA FLÓRIDA CENTRAL',heroTitle:'Um novo espaço.<br>Um lar para amar.',heroText:'Dos pequenos reparos às grandes transformações. Reformas, renovações e melhorias, com cuidado em cada detalhe.',heroCta:'Conte sobre seu projeto',heroExplore:'Conheça nossos serviços ↓',heroFoot:'SEU LAR. NOVAS POSSIBILIDADES.',imageNote:'Imagem ilustrativa',intro:'Melhorias com cuidado. Do piso ao acabamento.',instagramVisit:'Veja nossos trabalhos no Instagram',
    servicesLabel:'O QUE FAZEMOS',servicesTitle:'Sua visão.<br>Nosso cuidado na execução.',servicesIntro:'Uma cozinha renovada. Um novo acabamento. Aquele reparo que ficou para depois. Vamos deixar sua casa melhor para você.',service1:'Reformas e renovações',service1Text:'Transforme cozinhas e ambientes com melhorias que acompanham seu jeito de viver.',service2:'Pisos e acabamentos',service2Text:'Pisos, revestimentos, pintura e os detalhes que dão vida ao ambiente.',service3:'Reparos e melhorias',service3Text:'Ajuda prática com reparos, decks, cercas e melhorias para o dia a dia da sua casa.',servicesCaption:'As imagens ilustram as categorias de serviços. Veja os projetos da empresa no Instagram.',
    approachLabel:'O JEITO F. GREAT',approachTitle:'Transformando espaços.<br><em>Construindo confiança.</em>',approachText:'Somos uma empresa familiar que atende a Flórida Central. Acreditamos que cuidar da sua casa começa por ouvir você.',meetUs:'Conheça nossa empresa no Instagram ↗',step1:'Tudo começa com uma conversa',step1Text:'Conte o que você tem em mente. Compartilhe ideias, fotos e a localização do projeto.',step2:'Planejamos os detalhes',step2Text:'Converse diretamente com a equipe sobre o serviço, os materiais e os próximos passos.',step3:'Seu espaço ganha vida',step3Text:'Avance com um plano definido em conjunto e atenção aos detalhes que importam para você.',
    socialTitle:'Conheça os trabalhos.<br>Encontre inspiração.',socialText:'Explore projetos, transformações e bastidores do nosso trabalho no Instagram.',socialCta:'Visite o Instagram',contactLabel:'VAMOS TIRAR DO PAPEL',contactTitle:'Uma nova fase<br>começa em casa.',contactIntro:'Tem um projeto em mente? Conte um pouco sobre sua ideia e escolha como prefere conversar.',nameLabel:'Seu nome',projectLabel:'Conte sobre seu projeto',projectPlaceholder:'O que você gostaria de melhorar? Onde fica o imóvel?',whatsappSend:'Continuar no WhatsApp',instagramSend:'Copiar mensagem e abrir Instagram ↗',formNote:'O WhatsApp abre com sua mensagem pronta para enviar. No Instagram, copiamos o texto para você colar na conversa. Você faz o envio no aplicativo escolhido.',findLabel:'LOCALIZAÇÃO E CONTATO',addressLabel:'Localização',addressNote:'O mapa mostra a região do CEP. Solicite o endereço completo antes de visitar.',directions:'Abrir no Google Maps ↗',footerText:'Reformas, renovações e reparos · Flórida Central',copied:'Mensagem copiada. Cole o texto na conversa do Instagram.',copyFailed:'Não foi possível copiar automaticamente. Copie a mensagem abaixo e cole no Instagram:',ready:'Sua mensagem está pronta no WhatsApp.',messageIntro:'Olá, F. Great Services! Meu nome é',messageProject:'Gostaria de conversar sobre este projeto:',title:'F. Great Services | Reformas na Flórida Central',description:'Reformas, renovações e reparos na Flórida Central. Converse com a F. Great Services sobre seu próximo projeto.',mapTitle:'Google Maps — Orlando, FL 32827',navLabel:'Navegação principal'
  }
};
let language = 'en';
function setLanguage(next) {
  language = next === 'pt' ? 'pt' : 'en';
  const dictionary = translations[language];
  document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(element => { element.innerHTML = dictionary[element.dataset.i18n]; });
  document.querySelectorAll('[data-placeholder]').forEach(element => { element.placeholder = dictionary[element.dataset.placeholder]; });
  document.querySelectorAll('[data-lang]').forEach(button => { button.setAttribute('aria-pressed', String(button.dataset.lang === language)); });
  document.title = dictionary.title;
  document.querySelector('meta[name="description"]').content = dictionary.description;
  document.querySelector('.map').title = dictionary.mapTitle;
  document.querySelector('nav').setAttribute('aria-label', dictionary.navLabel);
  document.getElementById('form-status').textContent = '';
  try { localStorage.setItem('fgreat-language', language); } catch {}
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
try { setLanguage(localStorage.getItem('fgreat-language') || 'en'); } catch { setLanguage('en'); }
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('project-form');
function buildMessage() {
  const dictionary = translations[language];
  return `${dictionary.messageIntro} ${form.elements.name.value.trim()}.\n\n${dictionary.messageProject}\n${form.elements.project.value.trim()}`;
}
function validate() {
  for (const field of [form.elements.name, form.elements.project]) {
    field.setCustomValidity(field.value.trim() ? '' : (language === 'pt' ? 'Preencha este campo.' : 'Please fill out this field.'));
  }
  return form.reportValidity();
}
form.addEventListener('input', event => event.target.setCustomValidity?.(''));
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!validate()) return;
  // Same-tab navigation avoids popup blockers and works with mobile app handoff.
  window.location.assign(`https://wa.me/14074936660?text=${encodeURIComponent(buildMessage())}`);
});
document.getElementById('instagram-message').addEventListener('click', async () => {
  if (!validate()) return;
  const message = buildMessage();
  const status = document.getElementById('form-status');
  status.textContent = '';
  try {
    await navigator.clipboard.writeText(message);
    status.textContent = translations[language].copied;
  } catch {
    status.textContent = translations[language].copyFailed;
    const fallback = document.createElement('textarea');
    fallback.value = message;
    fallback.readOnly = true;
    fallback.setAttribute('aria-label', language === 'pt' ? 'Mensagem para copiar' : 'Message to copy');
    status.appendChild(fallback);
    fallback.focus();
    fallback.select();
  }
  // Let visitors copy the text before opening the other app. This also avoids
  // clipboard failures caused by switching tabs before copying has completed.
  const link = document.createElement('a');
  link.href = 'https://ig.me/m/fgreatservices';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.className = 'button instagram-handoff';
  link.textContent = language === 'pt' ? 'Abrir conversa no Instagram ↗' : 'Open Instagram conversation ↗';
  status.appendChild(link);
});
