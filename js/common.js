// --- Sample Data ---
let notebooks = [
    { id: 1, title: 'ریاضیات پیشرفته', noteCount: 2, date: '۱۴۰۳/۱۰/۱۵' },
    { id: 2, title: 'فیزیک عمومی', noteCount: 1, date: '۱۴۰۳/۱۰/۱۲' },
    { id: 3, title: 'برنامه‌نویسی پیشرفته', noteCount: 2, date: '۱۴۰۳/۱۱/۰۵' },
    { id: 4, title: 'مهندسی نرم‌افزار', noteCount: 0, date: '۱۴۰۳/۰۹/۳۰' },
    { id: 5, title: 'پایگاه داده', noteCount: 0, date: '۱۴۰۳/۰۹/۲۱' },
    { id: 6, title: 'شبکه‌های کامپیوتری', noteCount: 0, date: '۱۴۰۳/۱۰/۰۸' }
];

let notes = {
    1: [
        { id: 101, title: 'مشتق و کاربردهای آن', course: 'ریاضیات پیشرفته', date: '۱۴۰۳/۰۷/۱۵', preview: 'در این جلسه به بررسی مفهوم مشتق و کاربردهای آن در حل مسائل پرداختیم...', content: '<p>در این جلسه به بررسی عمیق مفهوم <b>مشتق</b> و کاربردهای گسترده‌ی آن در علوم مهندسی و ریاضیات پرداختیم. مشتق، به عنوان یکی از مفاهیم بنیادین حساب دیفرانسیل و انتگرال، نرخ لحظه‌ای تغییر یک تابع را نسبت به متغیرش اندازه‌گیری می‌کند. به بیان ساده‌تر، شیب خط مماس بر نمودار تابع در یک نقطه معین است.</p><h2>تعریف رسمی مشتق</h2><p>مشتق تابع (f(x در نقطه x=a، که با (f\'(a نمایش داده می‌شود، از طریق حد زیر تعریف می‌گردد:</p><blockquote>f\'(a) = lim (h→0) [f(a+h) - f(a)] / h</blockquote><p>این فرمول به ما امکان می‌دهد تا شیب دقیق نمودار را در هر نقطه‌ای که تابع در آن مشتق‌پذیر باشد، محاسبه کنیم. اگر این حد وجود داشته باشد، می‌گوییم تابع در آن نقطه مشتق‌پذیر است.</p><h2>قواعد اصلی مشتق‌گیری</h2><p>برای سهولت در محاسبات، مجموعه‌ای از قواعد پایه‌ای تعریف شده‌اند که به ما در یافتن مشتق توابع مختلف کمک می‌کنند. برخی از مهم‌ترین این قواعد عبارتند از:</p><ul><li><b>قاعده توان:</b> اگر f(x) = x^n باشد، آنگاه f\'(x) = nx^(n-1).</li><li><b>قاعده ضرب:</b> مشتق حاصل‌ضرب دو تابع برابر است با مشتق تابع اول در خود تابع دوم، به علاوه خود تابع اول در مشتق تابع دوم.</li><li><b>قاعده تقسیم:</b> برای مشتق گرفتن از یک تابع کسری، از فرمول مشخصی استفاده می‌شود که شامل مشتق صورت و مخرج است.</li><li><b>قاعده زنجیره‌ای:</b> این قاعده برای مشتق‌گیری از توابع ترکیبی به کار می‌رود و یکی از پرکاربردترین قواعد در حساب دیفرانسیل است.</li></ul><h2>کاربردهای کلیدی مشتق</h2><p>مفهوم مشتق تنها به ریاضیات محدود نمی‌شود و در زمینه‌های مختلفی کاربرد دارد:</p><ol><li><b>بهینه‌سازی:</b> با استفاده از مشتق می‌توان نقاط ماکزیمم و مینیمم یک تابع را پیدا کرد. این کاربرد در اقتصاد، مهندسی و مدیریت برای یافتن بهترین راه‌حل‌ها بسیار حیاتی است.</li><li><b>فیزیک:</b> مفاهیمی مانند سرعت لحظه‌ای (مشتق مکان نسبت به زمان) و شتاب لحظه‌ای (مشتق سرعت نسبت به زمان) مستقیماً از تعریف مشتق به دست می‌آیند.</li><li><b>رسم نمودار:</b> با تحلیل مشتق اول و دوم یک تابع، می‌توان رفتار آن (صعودی یا نزولی بودن، تقعر و نقاط عطف) را به دقت بررسی و نمودار آن را رسم کرد.</li><li><b>تقریب خطی:</b> از خط مماس (که شیب آن همان مشتق است) می‌توان برای تقریب زدن مقادیر تابع در نزدیکی یک نقطه مشخص استفاده کرد.</li></ol><p>در مجموع، درک عمیق مشتق و تسلط بر قواعد آن، دریچه‌ای به سوی حل مسائل پیچیده‌تر در علوم و مهندسی باز می‌کند. این جزوه تنها مقدمه‌ای بر این مبحث گسترده بود و در جلسات آینده به بررسی جزئیات بیشتری خواهیم پرداخت.</p>'},
        { id: 102, title: 'انتگرال معین و نامعین', course: 'ریاضیات پیشرفته', date: '۱۴۰۳/۰۷/۲۰', preview: 'انتگرال به عنوان عمل معکوس مشتق تعریف می‌شود...', content: '<p>انتگرال به عنوان عمل معکوس مشتق تعریف می‌شود...</p>' }
    ],
    2: [
        { id: 201, title: 'قوانین نیوتن', course: 'فیزیک عمومی', date: '۱۴۰۳/۱۰/۱۲', preview: 'سه قانون حرکت نیوتن پایه و اساس مکانیک کلاسیک هستند...', content: '<p>سه قانون حرکت نیوتن پایه و اساس مکانیک کلاسیک هستند...</p>' }
    ],
    3: [
         { id: 301, title: 'مقدمات پایتون', course: 'برنامه‌نویسی پیشرفته', date: '۱۴۰۳/۱۱/۰۱', preview: 'در این جلسه با سینتکس پایه پایتون آشنا شدیم...', content: '<p>در این جلسه با سینتکس پایه پایتون آشنا شدیم...</p>' },
         { id: 302, title: 'ساختارهای داده', course: 'برنامه‌نویسی پیشرفته', date: '۱۴۰۳/۱۱/۰۵', preview: 'لیست‌ها، تاپل‌ها و دیکشنری‌ها در پایتون بررسی شدند...', content: '<p>لیست‌ها، تاپل‌ها و دیکشنری‌ها در پایتون بررسی شدند...</p>' }
    ]
};

// --- Utility Functions ---
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function setupSidebarToggle() {
    const toggleBtn = document.getElementById('sidebar-toggle');
    const appContainer = document.querySelector('.app-container');
    if (!toggleBtn || !appContainer) return;

    if (localStorage.getItem('sidebarCollapsed') === 'true') {
        appContainer.classList.add('sidebar-collapsed');
    }

    toggleBtn.addEventListener('click', () => {
        appContainer.classList.toggle('sidebar-collapsed');
        const isCollapsed = appContainer.classList.contains('sidebar-collapsed');
        localStorage.setItem('sidebarCollapsed', isCollapsed);
    });
}

function setupThemeSwitcher() {
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    if(!themeToggle) return;

    const applyTheme = (theme) => {
        document.body.dataset.theme = theme;
        themeToggle.checked = (theme === 'dark');
    };

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    themeToggle.addEventListener('change', () => {
        const newTheme = themeToggle.checked ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
}

// Store and retrieve data from localStorage
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key, defaultValue = null) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
}

// Initialize data from localStorage or use defaults
function initializeData() {
    const storedNotebooks = getFromLocalStorage('notebooks');
    const storedNotes = getFromLocalStorage('notes');

    if (storedNotebooks) notebooks = storedNotebooks;
    if (storedNotes) notes = storedNotes;
}

// Save data to localStorage
function saveData() {
    saveToLocalStorage('notebooks', notebooks);
    saveToLocalStorage('notes', notes);
}
