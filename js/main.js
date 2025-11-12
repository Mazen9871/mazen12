const lightModeBtn = document.getElementById('lightmode');
const darkModeBtn = document.getElementById('darkmode');
const body = document.body;

// Apply a theme and persist it to localStorage. Also update the radio inputs if present.
function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
    try { localStorage.setItem('theme', theme); } catch (e) { /* ignore storage errors */ }

    if (lightModeBtn) lightModeBtn.checked = (theme === 'light');
    if (darkModeBtn) darkModeBtn.checked = (theme === 'dark');
}

// Load saved theme on startup (defaults to light)
(function() {
    const saved = (function(){ try { return localStorage.getItem('theme'); } catch(e){ return null; } })();
    if (saved === 'dark' || saved === 'light') {
        applyTheme(saved);
    } else {
        // default: use current body class or light
        applyTheme(body.classList.contains('dark-mode') ? 'dark' : 'light');
    }
})();

// Attach event listeners safely (some pages may not include the inputs)
if (lightModeBtn) {
    lightModeBtn.addEventListener('click', () => applyTheme('light'));
}
if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => applyTheme('dark'));
}


const projectsData = {
    
    diriyah: `<h2>بوابة الدرعية</h2>
        <img src="images/logo2.png" alt="الدرعية" style="width: 100%;">
        <p>بوابة الدرعية هي مشروع لإعادة إحياء جوهرة المملكة وتاريخها.</p>
        <p>(استكشف أكثر من 600 عام من الثقافة والتاريخ الأصيل، المستمد من التجارب التراثية الفريدة والملهمة، واستفد من فرص تعليمية وثقافية رائعة، بالإضافة إلى الاستمتاع بأحياء سكنية تتماشى مع أسلوب حياة عالمي في مشروع بوابة الدرعية المتميز)</p>
    `,

    neom: `<h2>مشروع نيوم</h2>
        <img src="images/NEOM.webp" alt="نيوم" style="width: 100%;">
        <p>نيوم هي مدينة المستقبل، تم بناؤها على أسس الاستدامة والتكنولوجيا.</p>
        <p>(مدينة "نيوم" التي تحول ساحل البحر الأحمر في شمال غرب المملكة العربية السعودية إلى مدينة مختلفة لا مثيل لها.)</p>
    `,

    qiddiya: `<h2>القدية</h2>
        <img src="images/Qiddiya6.jpg" alt="القدية" style="width: 100%;">
        <p>القدية ستكون عاصمة الترفيه والرياضة والفنون في المملكة.</p>
        <p>(عاصمة المستقبل للترفيه والرياضة والثقافة في المملكة، وتسعى إلى بناء وجهات وبرامج ومبادرات تقوم على مفهوم اللعب من شأنها رفع جودة الحياة للزوار والمقيمين.)</p>
    `,

    redsea: `<h2>مشروع البحر الأحمر</h2>
        <img src="images/red sea back.webp" alt="البحر الأحمر" style="width: 100%;"> 
        <p>وجهة سياحية فاخرة تعتمد على الطبيعة والتراث.</p>
        <p>(البحر الأحمر، الوجهة السياحية الفاخرة على الساحل الغربي، للمملكة العربية السعودية.)</p>
    `,

    roshn: `<h2>مشروع روشن</h2>
        <img src="images/Roshn.jpeg" alt="روشن" style="width: 100%;"> 
        <p>روشن هو مشروع لبناء مجتمعات سكنية عصرية وحيوية.</p>
        <p>(تلبي روشن طلب السعوديين المتزايد على امتلاك المنازل، كشركة تطوير عقاري وطنية، تقوم بإنشاء أحياء سكنية متكاملة حيوية ورائعة للعيش، تناسب مختلف الأذواق.)</p>
    `
}

function showProject(projectName) {
    const contentContainer = document.getElementById("project-content-container");
    const projectHTML = projectsData[projectName];
    contentContainer.innerHTML = projectHTML;
}