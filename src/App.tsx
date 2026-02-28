<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>光宙數位創意 - 用影像讓專業被看懂</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <style>
        :root { --accent-gold: #D4A574; --primary-dark: #1a1a1a; }
        body { background-color: #000; color: #fff; font-family: sans-serif; scroll-behavior: smooth; }
        .nav-scrolled { background: rgba(26, 26, 26, 0.95); backdrop-filter: blur(10px); box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
        .accent-text { color: var(--accent-gold); }
        .gold-border { border-color: rgba(212, 165, 116, 0.3); }
        .video-container { position: relative; padding-bottom: 177.78%; height: 0; overflow: hidden; border-radius: 1rem; }
        .video-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; }
        .gallery-img { aspect-ratio: 4/3; object-fit: cover; border-radius: 0.75rem; border: 2px solid rgba(212, 165, 116, 0.2); transition: 0.3s; }
        .gallery-img:hover { transform: scale(1.03); border-color: var(--accent-gold); }
    </style>
</head>
<body>

    <nav id="navbar" class="fixed top-0 w-full z-50 transition-all duration-300 py-5">
        <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div class="text-2xl font-bold accent-text tracking-widest cursor-pointer">光宙數位</div>
            <ul class="hidden md:flex gap-8 text-sm uppercase tracking-wider">
                <li><a href="#home" class="hover:text-[#D4A574] transition">首頁</a></li>
                <li><a href="#services" class="hover:text-[#D4A574] transition">核心服務</a></li>
                <li><a href="#cases" class="hover:text-[#D4A574] transition">實戰案例</a></li>
            </ul>
        </div>
    </nav>

    <section id="home" class="min-h-screen flex flex-col justify-center items-center pt-32 pb-16 px-6 bg-gradient-to-br from-[#1a1a1a] to-[#000]">
        <div class="text-center max-w-5xl">
            <h1 class="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-[#D4A574] to-[#E67E22] bg-clip-text text-transparent">
                光宙數位創意有限公司
            </h1>
            <p class="text-xl text-gray-400 mb-8 font-light">短影音內容製作 × 活動影像紀錄</p>
            <p class="text-2xl md:text-4xl accent-text mb-12 font-semibold">「用影像，讓專業被看懂」</p>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                <div class="video-container"><iframe src="https://www.youtube.com/embed/C5Yd6oJTi1Y"></iframe></div>
                <div class="video-container"><iframe src="https://www.youtube.com/embed/ehOLQEPC9H4"></iframe></div>
                <div class="video-container"><iframe src="https://www.youtube.com/embed/N0m5JpsxeS4"></iframe></div>
                <div class="video-container"><iframe src="https://www.youtube.com/embed/usfunVyVsDQ"></iframe></div>
            </div>
        </div>
    </section>

    <section id="services" class="py-24 px-6 max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-16 accent-text tracking-widest">核心服務</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div class="bg-[#111] p-8 rounded-2xl border gold-border">
                <h3 class="text-2xl font-bold accent-text mb-4">活動紀錄影像服務</h3>
                <p class="text-gray-400 mb-6">熟悉公部門拍攝需求，提供平面與動態雙紀錄。</p>
                
                <h4 class="accent-text font-bold mb-4">📷 活動平面攝影作品</h4>
                <div class="grid grid-cols-2 gap-3 mb-6">
                    <img src="DSC00068.jpg" class="gallery-img">
                    <img src="DSC00069.jpg" class="gallery-img">
                    <img src="DSC01169.jpg" class="gallery-img">
                    <img src="data1.PNG" class="gallery-img">
                </div>
                <a href="https://drive.google.com/drive/folders/1MCgYwM6XIotRy--mduFCHQRFaUH9vEYW" target="_blank" class="block w-full py-3 bg-[#D4A574]/10 border border-[#D4A574] text-center rounded-lg hover:bg-[#D4A574]/20 transition">查看更多雲端作品</a>
            </div>

            <div class="bg-[#111] p-8 rounded-2xl border gold-border">
                <h3 class="text-2xl font-bold accent-text mb-4">短影音內容製作</h3>
                <p class="text-gray-400 mb-6">不只是流量影片，是能被理解的內容。</p>
                <ul class="space-y-3 mb-8 text-gray-300">
                    <li>▸ 專業內容說明</li>
                    <li>▸ 教學與知識型內容</li>
                    <li>▸ 人物品牌定位</li>
                </ul>
                <div class="space-y-3">
                    <a href="https://youtube.com/shorts/yluitL_0Xt8" target="_blank" class="block p-3 bg-white/5 rounded-lg hover:translate-x-2 transition">專業型內容展示 →</a>
                    <a href="https://youtube.com/shorts/YiEu8fYL4-g" target="_blank" class="block p-3 bg-white/5 rounded-lg hover:translate-x-2 transition">轉換導向內容展示 →</a>
                </div>
            </div>
        </div>
    </section>

    <section id="cases" class="py-24 bg-[#0a0a0a]">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-16 accent-text tracking-widest">流量數據證明</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="text-center">
                    <img src="data1.PNG" class="gallery-img mb-2 mx-auto">
                    <p class="text-sm text-gray-500">1.3M+ 自然流量</p>
                </div>
                <div class="text-center">
                    <img src="data2.JPG" class="gallery-img mb-2 mx-auto">
                    <p class="text-sm text-gray-500">879K+ 洞察報告</p>
                </div>
                <div class="text-center">
                    <img src="data3.JPG" class="gallery-img mb-2 mx-auto">
                    <p class="text-sm text-gray-500">4.1M+ 總瀏覽量</p>
                </div>
                <div class="text-center">
                    <img src="data4.JPG" class="gallery-img mb-2 mx-auto">
                    <p class="text-sm text-gray-500">多支影片穩定成長</p>
                </div>
            </div>
        </div>
    </section>

    <footer class="py-20 text-center border-t border-white/10">
        <p class="accent-text text-xl font-bold mb-4">光宙數位創意</p>
        <p class="text-gray-500 text-sm">© 2026 Chiawei Weng. All Rights Reserved.</p>
    </footer>

    <script>
        window.addEventListener('scroll', function() {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('nav-scrolled');
            } else {
                nav.classList.remove('nav-scrolled');
            }
        });
    </script>
</body>
</html>
