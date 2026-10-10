/* ========= G-PACK — main.js ========= */

/* ---- mobile menu ---- */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

const openMenu = () => { navMenu.classList.add('show-menu'); navToggle.setAttribute('aria-expanded', 'true'); };
const closeMenu = () => { navMenu.classList.remove('show-menu'); navToggle.setAttribute('aria-expanded', 'false'); };

navToggle?.addEventListener('click', openMenu);
navClose?.addEventListener('click', closeMenu);
document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

/* ---- header border + scroll-up button ---- */
const header = document.getElementById('header');
const scrollUp = document.getElementById('scroll-up');
const onScroll = () => {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y >= 20);
  scrollUp.classList.toggle('show-scroll', y >= 500);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---- active nav link ---- */
const navLinks = [...document.querySelectorAll('.nav-link')];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach(l => l.classList.toggle('active-link', l.getAttribute('href') === '#' + id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('section[id]').forEach(s => observer.observe(s));

/* ---- year ---- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---- translations ---- */
const translations = {
  ar: {
    skip: 'تخطي إلى المحتوى',
    nav_home: 'الرئيسية', nav_about: 'من نحن', nav_products: 'منتجاتنا', nav_factory: 'المصنع', nav_contact: 'تواصل معنا', nav_quote: 'اطلب عرض سعر',
    hero_place: 'مصنع كرتون مضلع — جمصة، مصر',
    hero_title: 'كرتون يتحمّل الحِمل والرطوبة',
    hero_lead: 'تحرص جي باك على تزويد العملاء بأفضل المنتجات بأعلى جودة، من خلال شراء أفضل المواد الخام لإنتاج كراتين مقاومة لضغط الأحمال والرطوبة.',
    hero_cta1: 'اطلب عرض سعر', hero_cta2: 'تصفّح المنتجات',
    fact1_k: 'تأسس', fact2_k: 'سنوات خبرة', fact2_v: 'قرابة 20', fact3_k: 'المقاسات والألوان', fact3_v: 'حسب الطلب',
    about_title: 'مصنع كرتون منذ 2017',
    about_p1: 'جي باك للكرتون مصنع تأسس عام 2017 بخبرة تقارب العشرين عاماً. ننتج كافة أنواع الكرتون المضلع المستخدم في تعبئة الإنتاج الزراعي والغذائي والملابس.',
    about_p2: 'مصنعنا في المنطقة الصناعية الثالثة بجمصة، ومجهّز بأحدث الآلات لإنتاج صناديق وألواح الكرتون المطبوعة وغير المطبوعة.',
    sector1: 'الإنتاج الزراعي', sector2: 'المواد الغذائية', sector3: 'الملابس',
    prod_title: 'ما ننتجه',
    prod_lead: 'نصنع الصناديق الكرتونية والألواح المموجة بأي حجم ومواصفات وبجميع الألوان.',
    p1_t: 'كراتين مطبوعة', p1_d: 'طباعة بألوان متعددة بتصميمك وشعارك — مثالية لتعبئة الفاكهة والخضروات والتصدير.',
    p2_t: 'صناديق سادة', p2_d: 'صناديق كرتون مضلع بدون طباعة للشحن والتخزين.',
    p3_t: 'علب بغطاء', p3_d: 'علب بيضاء أو كرافت بغطاء منفصل للملابس والهدايا.',
    p4_t: 'ألواح كرتون مموج', p4_d: 'ألواح بطبقات وسماكات مختلفة حسب الحمل المطلوب.',
    proc_title: 'من الفكرة حتى باب مخزنك', proc_lead: 'جي باك وجهتك الأولى لكل احتياجات التعبئة والتغليف.',
    s1_t: 'تصميم الطباعة', s1_d: 'نجهّز تصميم الكرتونة بالمقاس والشعار المطلوب.',
    s2_t: 'إنتاج العينات', s2_d: 'عينة فعلية تراجعها قبل بدء الإنتاج.',
    s3_t: 'التصنيع', s3_d: 'إنتاج على خطوط حديثة بخامات عالية الجودة.',
    s4_t: 'الشحن والتوصيل', s4_d: 'خدمات لوجستية توصل طلبك إلى موقعك.',
    fac_title: 'داخل المصنع', fac_p: 'خطوط إنتاج حديثة للكرتون المضلع في جمصة. شاهد مرحلة التجميع والتغذية على الماكينة.', fac_cta: 'زيارة المصنع',
    con_title: 'تواصل معنا', con_lead: 'أرسل المقاس والكمية ونوع الطباعة، ونرد عليك بعرض سعر.',
    con_wa: 'واتساب', con_phone: 'خدمة العملاء', con_mail: 'البريد الإلكتروني', con_addr: 'العنوان', con_addr_v: 'جمصة – المنطقة الصناعية الثالثة',
    footer: 'جي باك للكرتون'
  },
  en: {
    skip: 'Skip to content',
    nav_home: 'Home', nav_about: 'About', nav_products: 'Products', nav_factory: 'Factory', nav_contact: 'Contact', nav_quote: 'Get a quote',
    hero_place: 'Corrugated carton factory — Gamasa, Egypt',
    hero_title: 'Cartons built for heavy loads and humidity',
    hero_lead: 'G-Pack sources the best raw materials to produce cartons that resist load pressure and humidity — so your products arrive the way they left.',
    hero_cta1: 'Get a quote', hero_cta2: 'Browse products',
    fact1_k: 'Founded', fact2_k: 'Years of experience', fact2_v: '~20', fact3_k: 'Sizes & colors', fact3_v: 'Made to order',
    about_title: 'Making cartons since 2017',
    about_p1: 'G-Pack Carton was established in 2017, backed by nearly twenty years of experience. We produce all types of corrugated cartons for agricultural, food and clothing packaging.',
    about_p2: 'Our factory in Gamasa’s 3rd Industrial Zone runs modern machinery for printed and unprinted corrugated boxes and sheets.',
    sector1: 'Agriculture', sector2: 'Food', sector3: 'Clothing',
    prod_title: 'What we make',
    prod_lead: 'Corrugated boxes and sheets in any size, specification and color.',
    p1_t: 'Printed cartons', p1_d: 'Multi-color printing with your design and logo — ideal for fruit, vegetables and export.',
    p2_t: 'Plain boxes', p2_d: 'Unprinted corrugated boxes for shipping and storage.',
    p3_t: 'Lid boxes', p3_d: 'White or kraft boxes with separate lids for clothing and gifts.',
    p4_t: 'Corrugated sheets', p4_d: 'Sheets in different plies and thicknesses for the load you need.',
    proc_title: 'From idea to your warehouse', proc_lead: 'G-Pack covers every step of your packaging.',
    s1_t: 'Print design', s1_d: 'We prepare the carton design with your size and logo.',
    s2_t: 'Sampling', s2_d: 'A physical sample for you to approve before production.',
    s3_t: 'Production', s3_d: 'Made on modern lines with high-quality materials.',
    s4_t: 'Delivery', s4_d: 'Logistics that bring your order to your site.',
    fac_title: 'Inside the factory', fac_p: 'Modern corrugated production lines in Gamasa. Watch the feeding and assembly stage.', fac_cta: 'Visit the factory',
    con_title: 'Contact us', con_lead: 'Send the size, quantity and print type and we’ll reply with a quote.',
    con_wa: 'WhatsApp', con_phone: 'Customer service', con_mail: 'Email', con_addr: 'Address', con_addr_v: 'Gamasa – 3rd Industrial Zone',
    footer: 'G-Pack Carton Company'
  }
};

const langLabel = document.getElementById('lang-label');

const setLang = lang => {
  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  langLabel.textContent = lang === 'ar' ? 'English' : 'عربي';
  document.title = lang === 'ar' ? 'جي باك للكرتون | G-PACK Carton' : 'G-PACK Carton | Corrugated boxes, Egypt';
  try { localStorage.setItem('gpack-lang', lang); } catch (e) {}
};

let currentLang = 'ar';
try { currentLang = localStorage.getItem('gpack-lang') || 'ar'; } catch (e) {}
if (currentLang !== 'ar') setLang(currentLang);

document.getElementById('lang-btn').addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  setLang(currentLang);
});
