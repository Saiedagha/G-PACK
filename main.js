// *========= show menu ======*//
const navmenu = document.getElementById("nav-menu"),
      navtoggle = document.getElementById("nav-toggle"),
      navclose = document.getElementById("nav-close")

//   menu show //
if(navtoggle){
    navtoggle.addEventListener('click' , () => {
        navmenu.classList.add('show-menu');
    })
}

// menu hidden //
if(navclose){
    navclose.addEventListener('click', () => {
        navmenu.classList.remove('show-menu')
    })
}

// *=== remove menu mobile ===*//
const navlink = document.querySelectorAll('.nav-link')

const linkaction = () =>{
    const navmenu = document.getElementById('nav-menu')
    navmenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click', linkaction))

// *=== add shadow header ===*//
const scrollheader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')    
}
window.addEventListener('scroll', scrollheader)

// *=== show scroll up ///
const scrollup = () =>{
    const scrollup = document.getElementById('scroll-up')
     this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                        : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

// === Scroll sections active link ===
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionClass = document.querySelector('.nav-menu a[href*="' + sectionId + '"]');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link');
    } else {
      sectionClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);


// === scroll reveal animation///



const translations = {
    ar: {
        home: 'الصفحة الرئيسية',
        about: 'من نحن',
        camb:'شركة جي باك',
        services:'الخدمات',
        contact:'التواصل',
        heds: '      تحرص جي باك على تزويد العملاء بأفضل المنتجات بأعلى جودة و ذلك من خلال شراء أفضل المواد الخام لإنتاج كراتين مقاومه لضغط الاحمال و الرطوبة',
        btn1:'من نحن',
        tnt: 'جي باك للكرتون مصنع كرتون تأسس عام 2017، بخبرة كبيرة تقارب العشرين عاماً. ننتج كافة أنواع الكرتون المضلع المستخدم في تعبئة الإنتاج الزراعي والغذائي والملابس.',
        btn2:'خدماتنا',
        ord:'  جي باك شركة لتصنيع الكرتون  في مدينة جمصة في مصر ومجهزة بأحدث الآلات لإنتاج الكرتون المضلع جي باك شركه متخصصة في إنتاج صناديق و الواح الكرتون المطبوعة وغير المطبوعة يعتبر مصنع جي باك لصناعة الكرتون وجهتك الاولى لجميع احتياجات التعبئة والتغليف الخاصة بك حيث يمكن تصميم الطباعة و انتاج العينات و توفير الخدمات اللوجستية نحن نهدف إلى توفير كرتون عالي الجودة ',
        q:'نقوم بتصنيع الصناديق الكرتونية والألواح المموجة بأي حجم ومواصفات وبجميع الألوان',
        l:'الموقع علي الخريطه',
        cont:'تواصل معنا',
        serv:'خدمة العملاء',
        loc:'العنوان',
        loca:'جمصة المنطقة الصناعية الثالثة',
        soci:'ميديا',
        f:'شركة جي باك للكرتون'
    },
    en: {
        home: 'Home Page',
        about:'about us',
        camb:"G-Pack Company",
        services:'services',    
        contact:'contact us',
         heds:'G-Pack is committed to providing customers with the highest-quality products by sourcing the best raw materials to produce cartons resistant to load pressure and humidity.',
         btn1:'about us',
         tnt:'G-Pack Carton is a cardboard manufacturing company established in 2017, backed by nearly twenty years of experience. We produce all types of corrugated cartons used for packaging agricultural, food, and clothing products.',
         btn2:'our services',
          ord:'G-Pack is a cardboard manufacturing company based in Gamasa, Egypt, equipped with the latest machinery for producing corrugated cardboard. G-Pack specializes in manufacturing printed and unprinted cardboard boxes and sheets. The G-Pack factory is your first destination for all your packaging needs — from design, printing, and sample production to logistics support. Our goal is to provide high-quality cardboard product',
           q:'We manufacture cardboard boxes and corrugated sheets in any size, specifications, and colors.',
           l:'location',
           cont:'contact us',
           serv:'Customer Service',
           loc:'Address',
           loca:'Gamasa, 3rd Industrial Zone',
           soci:'social',
           f:'G-Pack Carton Company'
    }
   
};

let currentLang = "ar";

document.getElementById("lang-btn").addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";

  // تغيير النصوص
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[currentLang][key];
  });

  // تغيير اتجاه الصفحة
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  // تغيير نص الزر
  document.getElementById("lang-btn").textContent = currentLang === "ar" ? "English" : "عربي";
});

