/* ========= G-PACK — main.js ========= */
document.documentElement.classList.add('js');

const WA_NUMBER = '201065767929';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---- mobile menu ---- */
const navMenu = $('#nav-menu');
const navToggle = $('#nav-toggle');
const openMenu = () => { navMenu.classList.add('show-menu'); navToggle.setAttribute('aria-expanded', 'true'); };
const closeMenu = () => { navMenu.classList.remove('show-menu'); navToggle.setAttribute('aria-expanded', 'false'); };
navToggle.addEventListener('click', openMenu);
$('#nav-close').addEventListener('click', closeMenu);
$$('.nav-link').forEach(l => l.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

/* ---- header state + scroll-up ---- */
const header = $('#header');
const scrollUp = $('#scroll-up');
const onScroll = () => {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 40);
  scrollUp.classList.toggle('show-scroll', y > 600);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---- active nav link ---- */
const navLinks = $$('.nav-link');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(l => l.classList.toggle('active-link', l.getAttribute('href') === '#' + entry.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
$$('section[id]').forEach(s => sectionObserver.observe(s));

/* ---- scroll reveal (staggered within each parent) ---- */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = $$('.reveal');
revealEls.forEach(el => {
  const siblings = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
  el.style.setProperty('--d', (siblings.indexOf(el) * 0.1) + 's');
});
if ('IntersectionObserver' in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

/* ---- count-up numbers ---- */
const countUp = el => {
  const to = +el.dataset.to;
  const from = +(el.dataset.from || 0);
  const dur = 1600;
  const start = performance.now();
  const tick = now => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(from + (to - from) * eased);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
if (!reduceMotion) {
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      countUp(entry.target);
      countObserver.unobserve(entry.target);
    });
  }, { threshold: 0.6 });
  $$('.count').forEach(el => countObserver.observe(el));
}

/* ---- year ---- */
$('#year').textContent = new Date().getFullYear();

/* ---- translations ---- */
const translations = {
  ar: {
    skip: 'تخطي إلى المحتوى', addr_short: 'جمصة – المنطقة الصناعية الثالثة',
    nav_home: 'الرئيسية', nav_about: 'من نحن', nav_products: 'منتجاتنا', nav_factory: 'المصنع', nav_contact: 'تواصل معنا', nav_quote: 'اطلب عرض سعر',
    hero_place: 'مصنع كرتون مضلع في جمصة، مصر',
    hero_title: 'كرتون يتحمّل الحِمل والرطوبة',
    hero_lead: 'نصنع صناديق وألواح الكرتون المضلع المطبوعة وغير المطبوعة بأي مقاس ولون، من أجود الخامات، عشان منتجك يوصل زي ما خرج.',
    hero_cta1: 'اطلب عرض سعر', hero_cta2: 'تصفّح المنتجات',
    st1: 'سنة التأسيس', st2: 'سنة خبرة في الصناعة', st3: 'قطاعات: زراعي، غذائي، ملابس', st4: 'وبجميع الألوان', st4_v: 'أي مقاس',
    mq: 'كراتين مطبوعة ✦ صناديق سادة ✦ ألواح مموجة ✦ كراتين فاكهة وخضار ✦ علب ملابس ✦ تعبئة غذائية ✦',
    badge: 'منذ', about_kicker: 'من نحن', about_title: 'شريكك في التعبئة والتغليف',
    about_p1: 'جي باك للكرتون مصنع تأسس عام 2017 بخبرة تقارب العشرين عاماً. ننتج كافة أنواع الكرتون المضلع المستخدم في تعبئة الإنتاج الزراعي والغذائي والملابس.',
    about_p2: 'مصنعنا في المنطقة الصناعية الثالثة بجمصة، ومجهّز بأحدث الآلات لإنتاج صناديق وألواح الكرتون المطبوعة وغير المطبوعة.',
    ck1: 'مقاومة لضغط الأحمال والرطوبة', ck2: 'أجود أنواع الخامات', ck3: 'طباعة بتصميمك وشعارك', ck4: 'عينات قبل الإنتاج',
    why_kicker: 'ليه جي باك؟', why_title: 'كرتون معمول عشان يشيل',
    w1_t: 'يتحمّل الأحمال', w1_d: 'طبقات مضلعة قوية تحمي المنتج أثناء الرصّ والنقل.',
    w2_t: 'مقاوم للرطوبة', w2_d: 'مناسب لتعبئة الفاكهة والخضروات والتخزين.',
    w3_t: 'طباعة بألوانك', w3_d: 'نصمّم ونطبع شعارك وبيانات منتجك على الكرتونة.',
    w4_t: 'توصيل لموقعك', w4_d: 'خدمات لوجستية توصل طلبك لحد مخزنك.',
    prod_kicker: 'منتجاتنا', prod_title: 'ما ننتجه', prod_lead: 'نصنع الصناديق الكرتونية والألواح المموجة بأي حجم ومواصفات وبجميع الألوان.',
    p1_t: 'كراتين مطبوعة', p1_d: 'طباعة بألوان متعددة بتصميمك وشعارك — مثالية للفاكهة والخضروات والتصدير.',
    p2_t: 'صناديق سادة', p2_d: 'صناديق كرتون مضلع بدون طباعة للشحن والتخزين.',
    p3_t: 'علب بغطاء', p3_d: 'علب بيضاء أو كرافت بغطاء منفصل للملابس والهدايا.',
    p4_t: 'ألواح كرتون مموج', p4_d: 'ألواح بطبقات وسماكات مختلفة حسب الحمل المطلوب.',
    ask: 'اطلب السعر',
    proc_kicker: 'طريقة الشغل', proc_title: 'من الفكرة حتى باب مخزنك',
    s1_t: 'تصميم الطباعة', s1_d: 'نجهّز تصميم الكرتونة بالمقاس والشعار المطلوب.',
    s2_t: 'إنتاج العينات', s2_d: 'عينة فعلية تراجعها قبل بدء الإنتاج.',
    s3_t: 'التصنيع', s3_d: 'إنتاج على خطوط حديثة بخامات عالية الجودة.',
    s4_t: 'الشحن والتوصيل', s4_d: 'خدمات لوجستية توصل طلبك إلى موقعك.',
    fac_kicker: 'المصنع', fac_title: 'داخل المصنع', fac_p: 'خطوط إنتاج حديثة للكرتون المضلع في جمصة. شاهد مرحلة التجميع والتغذية على الماكينة.', fac_cta: 'زيارة المصنع',
    cta_title: 'محتاج كراتين بمقاس خاص؟', cta_p: 'ابعتلنا المقاس والكمية، ونرد عليك بعرض سعر في أسرع وقت.', cta_btn: 'ابدأ طلبك الآن',
    con_kicker: 'تواصل معنا', con_title: 'كلّمنا مباشرة',
    con_wa: 'واتساب', con_phone: 'خدمة العملاء', con_mail: 'البريد الإلكتروني', con_addr: 'العنوان',
    q_title: 'اطلب عرض سعر', q_note: 'املأ البيانات وهيتفتح واتساب برسالة جاهزة.',
    q_name: 'الاسم / الشركة', q_name_ph: 'مثال: مزارع النيل', q_type: 'نوع الكرتون',
    q_size: 'المقاس (سم)', q_size_ph: '40 × 30 × 25', q_qty: 'الكمية', q_qty_ph: '1000',
    q_msg: 'تفاصيل إضافية', q_msg_ph: 'نوع الطباعة، عدد الألوان، موعد التسليم…',
    q_err: 'اكتب الاسم عشان نعرف نرد عليك.', q_send: 'إرسال على واتساب',
    f_about: 'مصنع كرتون مضلع في جمصة منذ 2017. صناديق وألواح مطبوعة وغير مطبوعة بأي مقاس ولون.',
    f_links: 'روابط', f_contact: 'تواصل', footer: 'جي باك للكرتون. جميع الحقوق محفوظة.',
    wa_hello: 'السلام عليكم، أريد عرض سعر من جي باك:', wa_name: 'الاسم', wa_type: 'النوع', wa_size: 'المقاس', wa_qty: 'الكمية', wa_msg: 'تفاصيل'
  },
  en: {
    skip: 'Skip to content', addr_short: 'Gamasa – 3rd Industrial Zone',
    nav_home: 'Home', nav_about: 'About', nav_products: 'Products', nav_factory: 'Factory', nav_contact: 'Contact', nav_quote: 'Get a quote',
    hero_place: 'Corrugated carton factory in Gamasa, Egypt',
    hero_title: 'Cartons built for heavy loads and humidity',
    hero_lead: 'We make printed and plain corrugated boxes and sheets in any size and color, from top-grade materials — so your product arrives the way it left.',
    hero_cta1: 'Get a quote', hero_cta2: 'Browse products',
    st1: 'Year founded', st2: 'Years in the industry', st3: 'Sectors: farming, food, clothing', st4: 'and in every color', st4_v: 'Any size',
    mq: 'Printed cartons ✦ Plain boxes ✦ Corrugated sheets ✦ Fruit & vegetable cartons ✦ Clothing boxes ✦ Food packaging ✦',
    badge: 'Since', about_kicker: 'About us', about_title: 'Your packaging partner',
    about_p1: 'G-Pack Carton was established in 2017, backed by nearly twenty years of experience. We produce all types of corrugated cartons for agricultural, food and clothing packaging.',
    about_p2: 'Our factory in Gamasa’s 3rd Industrial Zone runs modern machinery for printed and unprinted corrugated boxes and sheets.',
    ck1: 'Resists load pressure and humidity', ck2: 'Top-grade raw materials', ck3: 'Printed with your design and logo', ck4: 'Samples before production',
    why_kicker: 'Why G-Pack?', why_title: 'Cartons made to carry',
    w1_t: 'Load-bearing', w1_d: 'Strong corrugated layers protect your product while stacking and shipping.',
    w2_t: 'Humidity-resistant', w2_d: 'Suited to fruit and vegetable packing and storage.',
    w3_t: 'Your colors', w3_d: 'We design and print your logo and product details on the carton.',
    w4_t: 'Delivered to you', w4_d: 'Logistics that bring your order to your warehouse.',
    prod_kicker: 'Products', prod_title: 'What we make', prod_lead: 'Corrugated boxes and sheets in any size, specification and color.',
    p1_t: 'Printed cartons', p1_d: 'Multi-color printing with your design and logo — ideal for fruit, vegetables and export.',
    p2_t: 'Plain boxes', p2_d: 'Unprinted corrugated boxes for shipping and storage.',
    p3_t: 'Lid boxes', p3_d: 'White or kraft boxes with separate lids for clothing and gifts.',
    p4_t: 'Corrugated sheets', p4_d: 'Sheets in different plies and thicknesses for the load you need.',
    ask: 'Ask for a price',
    proc_kicker: 'How we work', proc_title: 'From idea to your warehouse',
    s1_t: 'Print design', s1_d: 'We prepare the carton design with your size and logo.',
    s2_t: 'Sampling', s2_d: 'A physical sample for you to approve before production.',
    s3_t: 'Production', s3_d: 'Made on modern lines with high-quality materials.',
    s4_t: 'Delivery', s4_d: 'Logistics that bring your order to your site.',
    fac_kicker: 'Factory', fac_title: 'Inside the factory', fac_p: 'Modern corrugated production lines in Gamasa. Watch the feeding and assembly stage.', fac_cta: 'Visit the factory',
    cta_title: 'Need cartons in a custom size?', cta_p: 'Send us the size and quantity and we’ll reply with a quote quickly.', cta_btn: 'Start your order',
    con_kicker: 'Contact', con_title: 'Talk to us directly',
    con_wa: 'WhatsApp', con_phone: 'Customer service', con_mail: 'Email', con_addr: 'Address',
    q_title: 'Get a quote', q_note: 'Fill in the details and WhatsApp opens with a ready message.',
    q_name: 'Name / company', q_name_ph: 'e.g. Nile Farms', q_type: 'Carton type',
    q_size: 'Size (cm)', q_size_ph: '40 × 30 × 25', q_qty: 'Quantity', q_qty_ph: '1000',
    q_msg: 'Extra details', q_msg_ph: 'Print type, number of colors, delivery date…',
    q_err: 'Add your name so we know who to reply to.', q_send: 'Send on WhatsApp',
    f_about: 'Corrugated carton factory in Gamasa since 2017. Printed and plain boxes and sheets in any size and color.',
    f_links: 'Links', f_contact: 'Contact', footer: 'G-Pack Carton. All rights reserved.',
    wa_hello: 'Hello, I would like a quote from G-Pack:', wa_name: 'Name', wa_type: 'Type', wa_size: 'Size', wa_qty: 'Quantity', wa_msg: 'Details'
  }
};

let currentLang = 'ar';
const t = key => translations[currentLang][key] ?? key;

const setLang = lang => {
  currentLang = lang;
  const dict = translations[lang];
  $$('[data-i18n]').forEach(el => { const v = dict[el.dataset.i18n]; if (v !== undefined) el.textContent = v; });
  $$('[data-i18n-ph]').forEach(el => { const v = dict[el.dataset.i18nPh]; if (v !== undefined) el.placeholder = v; });
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $('#lang-label').textContent = lang === 'ar' ? 'English' : 'عربي';
  document.title = lang === 'ar' ? 'جي باك للكرتون | G-PACK Carton' : 'G-PACK Carton | Corrugated boxes, Egypt';
  try { localStorage.setItem('gpack-lang', lang); } catch (e) {}
};

try { const saved = localStorage.getItem('gpack-lang'); if (saved && saved !== 'ar') setLang(saved); } catch (e) {}
$('#lang-btn').addEventListener('click', () => setLang(currentLang === 'ar' ? 'en' : 'ar'));

/* ---- product "ask for price" preselects the type ---- */
$$('.product-link').forEach(a => a.addEventListener('click', () => { $('#q-type').value = a.dataset.product; }));

/* ---- quote form → WhatsApp ---- */
const form = $('#quote');
const nameInput = $('#q-name');
const err = $('#quote-error');
form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get('name') || '').trim();
  if (!name) {
    err.hidden = false; nameInput.classList.add('invalid'); nameInput.focus();
    return;
  }
  err.hidden = true; nameInput.classList.remove('invalid');
  const lines = [
    t('wa_hello'),
    `${t('wa_name')}: ${name}`,
    `${t('wa_type')}: ${t(data.get('type'))}`,
    data.get('size') && `${t('wa_size')}: ${data.get('size').trim()}`,
    data.get('qty') && `${t('wa_qty')}: ${data.get('qty').trim()}`,
    data.get('msg') && `${t('wa_msg')}: ${data.get('msg').trim()}`
  ].filter(Boolean);
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
});
nameInput.addEventListener('input', () => { if (nameInput.value.trim()) { err.hidden = true; nameInput.classList.remove('invalid'); } });

/* ---- "why" carousel dots (mobile) ---- */
(() => {
  const track = $('.why-grid');
  const dotsWrap = $('#why-dots');
  if (!track || !dotsWrap) return;
  const items = $$('.why-item', track);
  const dots = items.map((item, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.tabIndex = -1;
    b.addEventListener('click', () => {
      const tr = track.getBoundingClientRect(), ir = item.getBoundingClientRect();
      track.scrollBy({ left: (ir.left + ir.width / 2) - (tr.left + tr.width / 2), behavior: reduceMotion ? 'auto' : 'smooth' });
    });
    dotsWrap.appendChild(b);
    return b;
  });
  const update = () => {
    const mid = track.getBoundingClientRect().left + track.clientWidth / 2;
    let best = 0, bestDist = Infinity;
    items.forEach((it, i) => {
      const r = it.getBoundingClientRect();
      const d = Math.abs(r.left + r.width / 2 - mid);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === best));
  };
  track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  window.addEventListener('resize', update);
  update();
})();
