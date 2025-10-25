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
