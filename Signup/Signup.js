// 3D Mouse Follow Effect
document.addEventListener('mousemove', (e) => {
    const loginWrapper = document.getElementById('loginWrapper');
    const rect = loginWrapper.getBoundingClientRect();
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / window.innerHeight) * -20;
    const rotateY = (mouseX / window.innerWidth) * 20;
    
    loginWrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Reset transform on mouse leave
document.addEventListener('mouseleave', () => {
    const loginWrapper = document.getElementById('loginWrapper');
    loginWrapper.style.transform = 'rotateX(0) rotateY(0)';
});

// Password Toggle Function
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeOpen = document.getElementById('eyeOpen');
    const eyeClosed = document.getElementById('eyeClosed');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeOpen.style.display = 'none';
        eyeClosed.style.display = 'block';
    } else {
        passwordInput.type = 'password';
        eyeOpen.style.display = 'block';
        eyeClosed.style.display = 'none';
    }
}

// Create Floating Particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 5 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = Math.random() * 10 + 15 + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    
    document.getElementById('particles').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 25000);
}

// Generate particles periodically
setInterval(createParticle, 2000);

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

// Form Validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    let isValid = true;
    
    // Reset errors
    emailError.classList.remove('show');
    passwordError.classList.remove('show');
    
    // Validate email
    if (!email.value.trim()) {
        emailError.textContent = 'ایمیل خود را وارد کنید';
        emailError.classList.add('show');
        isValid = false;
    } else if (!validateEmail(email.value)) {
        emailError.textContent = 'ایمیل معتبر وارد کنید';
        emailError.classList.add('show');
        isValid = false;
    }
    
    // Validate password
    if (!password.value.trim()) {
        passwordError.classList.add('show');
        isValid = false;
    }
    
    if (isValid) {
        const button = document.querySelector('.login-button');
        button.textContent = 'در حال ورود...';
        button.style.opacity = '0.7';
        
        setTimeout(() => {
            button.textContent = 'ورود به حساب کاربری';
            button.style.opacity = '1';
            alert('به دنیای انیمه خوش آمدید!');
        }, 2000);
    }
});

// Remove error on input
document.getElementById('email').addEventListener('input', function() {
    document.getElementById('emailError').classList.remove('show');
});

document.getElementById('password').addEventListener('input', function() {
    document.getElementById('passwordError').classList.remove('show');
});

// Google Login Function
function googleLogin() {
    const button = document.querySelector('.google-button');
    button.style.opacity = '0.7';
    
    setTimeout(() => {
        button.style.opacity = '1';
        alert('احراز هویت با گوگل در اینجا انجام می‌شود!');
    }, 1000);
}

// Initial particles
for (let i = 0; i < 2; i++) {
    createParticle();
}
// جایگزین کردن بخش Form Validation با کد زیر
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    let isValid = true;
    
    // Reset errors
    usernameError.classList.remove('show');
    emailError.classList.remove('show');
    passwordError.classList.remove('show');
    
    // Validate username
    if (!username.value.trim()) {
        usernameError.classList.add('show');
        isValid = false;
    } else if (username.value.trim().length < 3) {
        usernameError.textContent = 'نام کاربری باید حداقل 3 کاراکتر باشد';
        usernameError.classList.add('show');
        isValid = false;
    }
    
    // Validate email
    if (!email.value.trim()) {
        emailError.textContent = 'ایمیل خود را وارد کنید';
        emailError.classList.add('show');
        isValid = false;
    } else if (!validateEmail(email.value)) {
        emailError.textContent = 'لطفا ایمیل معتبر وارد کنید';
        emailError.classList.add('show');
        isValid = false;
    }
    
    // Validate password
    if (!password.value.trim()) {
        passwordError.classList.add('show');
        isValid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = 'رمز عبور باید حداقل 6 کاراکتر باشد';
        passwordError.classList.add('show');
        isValid = false;
    }
    
    if (isValid) {
        const button = document.querySelector('.login-button');
        button.textContent = 'در حال پردازش...';
        button.style.opacity = '0.7';
        
        setTimeout(() => {
            button.textContent = 'ورود / ثبت نام';
            button.style.opacity = '1';
            alert(`خوش آمدید ${username.value}!`);
        }, 2000);
    }
});

// Remove error on input for username
document.getElementById('username').addEventListener('input', function() {
    document.getElementById('usernameError').classList.remove('show');
});

// بقیه event listener ها مثل قبل باقی می‌مانند




// Mobile Device Motion Effect
function initDeviceMotion() {
    // بررسی پشتیبانی مرورگر
    if (window.DeviceOrientationEvent) {
        // برای iOS 13+ نیاز به درخواست مجوز است
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
                .then(response => {
                    if (response === 'granted') {
                        addDeviceOrientationListener();
                    }
                })
                .catch(console.error);
        } else {
            // برای Android و iOS قدیمی‌تر
            addDeviceOrientationListener();
        }
    }
}

function addDeviceOrientationListener() {
    let initialAlpha = null;
    let initialBeta = null;
    let initialGamma = null;
    
    window.addEventListener('deviceorientation', (event) => {
        const loginWrapper = document.getElementById('loginWrapper');
        
        // ذخیره مقادیر اولیه
        if (initialAlpha === null) {
            initialAlpha = event.alpha;
            initialBeta = event.beta;
            initialGamma = event.gamma;
        }
        
        // محاسبه تفاوت از حالت اولیه
        const deltaX = event.gamma - initialGamma; // چپ و راست
        const deltaY = event.beta - initialBeta;   // بالا و پایین
        
        // محدود کردن حرکت
        const maxTilt = 15; // حداکثر درجه چرخش
        const tiltX = Math.max(-maxTilt, Math.min(maxTilt, deltaY / 3));
        const tiltY = Math.max(-maxTilt, Math.min(maxTilt, deltaX / 3));
        
        // اعمال transform
        loginWrapper.style.transform = `
            perspective(1000px)
            rotateX(${-tiltX}deg)
            rotateY(${tiltY}deg)
            translateZ(10px)
        `;
    });
}

// غیرفعال کردن mouse effect در موبایل و فعال کردن device motion
function detectMobile() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // غیرفعال کردن mouse effect
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
        
        // فعال کردن device motion
        initDeviceMotion();
    }
}

// ذخیره توابع mouse در متغیر برای امکان حذف آنها
function handleMouseMove(e) {
    const loginWrapper = document.getElementById('loginWrapper');
    const rect = loginWrapper.getBoundingClientRect();
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / window.innerHeight) * -20;
    const rotateY = (mouseX / window.innerWidth) * 20;
    
    loginWrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function handleMouseLeave() {
    const loginWrapper = document.getElementById('loginWrapper');
    loginWrapper.style.transform = 'rotateX(0) rotateY(0)';
}

// جایگزین کردن event listener های قبلی mouse
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseleave', handleMouseLeave);

// اضافه کردن دکمه برای فعال‌سازی در iOS (اختیاری)
function addMotionButton() {
    if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function') {
        const button = document.createElement('button');
        button.textContent = '🔄 فعال‌سازی حرکت';
        button.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #ff9500;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 20px;
            font-size: 12px;
            font-family: 'Vazir', sans-serif;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 4px 10px rgba(255, 149, 0, 0.3);
        `;
        
        button.onclick = () => {
            initDeviceMotion();
            button.remove();
        };
        
        document.body.appendChild(button);
    }
}

// فراخوانی تابع تشخیص موبایل هنگام بارگذاری صفحه
window.addEventListener('load', () => {
    detectMobile();
    addMotionButton();
});

// Smooth transition برای حرکت نرم‌تر
const style = document.createElement('style');
style.textContent = `
    @media (hover: none) and (pointer: coarse) {
        .login-wrapper {
            transition: transform 0.15s ease-out !important;
        }
    }
`;
document.head.appendChild(style);






// Touch-based Tilt Effect برای موبایل
function addMobileTouchEffect() {
    const loginWrapper = document.getElementById('loginWrapper');
    const loginContainer = document.querySelector('.login-container');
    
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    
    // شروع لمس
    loginContainer.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
    });
    
    // حرکت انگشت
    loginContainer.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        currentX = touch.clientX;
        currentY = touch.clientY;
        
        // محاسبه فاصله حرکت
        const deltaX = (currentX - startX) / window.innerWidth;
        const deltaY = (currentY - startY) / window.innerHeight;
        
        // محدود کردن چرخش
        const rotateY = Math.max(-15, Math.min(15, deltaX * 30));
        const rotateX = Math.max(-15, Math.min(15, -deltaY * 30));
        
        loginWrapper.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateZ(20px)
        `;
    });
    
    // پایان لمس
    loginContainer.addEventListener('touchend', () => {
        loginWrapper.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
}

// Swipe to Shake Effect
function addShakeEffect() {
    const loginWrapper = document.getElementById('loginWrapper');
    let touchStartX = 0;
    let touchStartTime = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartTime = Date.now();
    });
    
    document.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndTime = Date.now();
        const distance = Math.abs(touchEndX - touchStartX);
        const timeDiff = touchEndTime - touchStartTime;
        
        // اگر سریع و به اندازه کافی کشیده شد
        if (distance > 100 && timeDiff < 300) {
            loginWrapper.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                loginWrapper.style.animation = '';
            }, 500);
        }
    });
}

// اضافه کردن انیمیشن shake به CSS
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0) rotateZ(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px) rotateZ(-2deg); }
        20%, 40%, 60%, 80% { transform: translateX(10px) rotateZ(2deg); }
    }
    
    .login-wrapper {
        transition: transform 0.2s ease-out;
    }
    
    /* افکت فشار برای موبایل */
    .login-container:active {
        transform: scale(0.98);
        transition: transform 0.1s ease;
    }
`;
document.head.appendChild(shakeStyle);

// تشخیص موبایل و فعال کردن افکت‌ها
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    // غیرفعال کردن mouse effects
    document.removeEventListener('mousemove', handleMouseMove);
    
    // فعال کردن touch effects
    addMobileTouchEffect();
    addShakeEffect();
}







