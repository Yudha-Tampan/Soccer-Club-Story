// ┌──────────────────────────────────────────────────────┐
// │                 DATA GAME (Konfigurasi)              │
// └──────────────────────────────────────────────────────┘

const languages = {
    indonesia: {
        lanjutkan: "Lanjutkan Permainan",
        permainanBaru: "Permainan Baru",
        bahasa: "Ganti Bahasa (ID)",
        pilihKlub: "Pilih Klub",
        start: "Mulai Permainan",
        kembali: "Kembali",
        sponsor: "Sponsor",
        skuad: "Skuad",
        formasi: "Formasi",
        transfer: "Transfer",
        pertandingan: "Mainkan Pertandingan",
        save: "Simpan Game",
        transferDitolak: "Pemain ini telah menolak transfer ke tim Anda.",
        transferDiterima: "Transfer berhasil!",
        jual: "Jual Pemain",
        kontrakSponsor: "Kontrak Sponsor",
        batalkanSponsor: "Batalkan",
        komentarMulai: "{0} memulai pertandingan!",
        oper: "{0} mengoper bola...",
        tendang: "{0} melepaskan tendangan!",
        gol: "GOL! {0} mencetak gol!",
        skor: "Skor: {0} - {1}",
        tim: "Tim Anda: {0}",
        sponsorBonus: "+{0} dari sponsor!"
    },
    inggris: {
        lanjutkan: "Continue Game",
        permainanBaru: "New Game",
        bahasa: "Change Language (EN)",
        pilihKlub: "Choose Club",
        start: "Start Game",
        kembali: "Back",
        sponsor: "Sponsor",
        skuad: "Squad",
        formasi: "Formation",
        transfer: "Transfer",
        pertandingan: "Play Match",
        save: "Save Game",
        transferDitolak: "The player rejected your offer.",
        transferDiterima: "Transfer successful!",
        jual: "Sell Player",
        kontrakSponsor: "Sign Sponsor",
        batalkanSponsor: "Cancel",
        komentarMulai: "{0} kicks off!",
        oper: "{0} passes the ball...",
        tendang: "{0} shoots!",
        gol: "GOAL! {0} scores!",
        skor: "Score: {0} - {1}",
        tim: "Your team: {0}",
        sponsorBonus: "+{0} from sponsor!"
    },
    jepang: {
        lanjutkan: "ゲームを続ける",
        permainanBaru: "新しいゲーム",
        bahasa: "言語を変更 (JP)",
        pilihKlub: "クラブを選択",
        start: "ゲーム開始",
        kembali: "戻る",
        sponsor: "スポンサー",
        skuad: "選手リスト",
        formasi: "フォーメーション",
        transfer: "トランスファー",
        pertandingan: "試合開始",
        save: "ゲームを保存",
        transferDitolak: "この選手はあなたのオファーを拒否しました。",
        transferDiterima: "トランスファー成功！",
        jual: "選手を売る",
        kontrakSponsor: "スポンサー契約",
        batalkanSponsor: "キャンセル",
        komentarMulai: "{0}がキックオフ！",
        oper: "{0}がパスした…",
        tendang: "{0}がシュート！",
        gol: "ゴール！{0}が得点！",
        skor: "スコア: {0} - {1}",
        tim: "あなたのチーム: {0}",
        sponsorBonus: "スポンサーから+{0}！"
    }
};

let currentLang = localStorage.getItem('bahasa') || 'indonesia';

const clubs = [
    // Eropa (top)
    { id: "arsenal", nama: "Arsenal", negara: "Inggris", saldo: 320000000, bendera: "🇬🇧", sponsorAwal: { nama: "Emirates", bonus: 20000000 } },
    { id: "manutd", nama: "Manchester United", negara: "Inggris", saldo: 250000000, bendera: "🇬🇧", sponsorAwal: { nama: "TeamViewer", bonus: 18000000 } },
    { id: "mancity", nama: "Manchester City", negara: "Inggris", saldo: 600000000, bendera: "🇬🇧", sponsorAwal: { nama: "Etihad Airways", bonus: 25000000 } },
    { id: "chelsea", nama: "Chelsea", negara: "Inggris", saldo: 210000000, bendera: "🇬🇧", sponsorAwal: { nama: "Three UK", bonus: 17000000 } },
    { id: "liverpool", nama: "Liverpool", negara: "Inggris", saldo: 190000000, bendera: "🇬🇧", sponsorAwal: { nama: "Standard Chartered", bonus: 19000000 } },
    
    { id: "barcelona", nama: "Barcelona", negara: "Spanyol", saldo: 80000000, bendera: "🇪🇸", sponsorAwal: { nama: "Spotify", bonus: 15000000 } },
    { id: "realmadrid", nama: "Real Madrid", negara: "Spanyol", saldo: 350000000, bendera: "🇪🇸", sponsorAwal: { nama: "Fly Emirates", bonus: 22000000 } },
    { id: "atletico", nama: "Atletico Madrid", negara: "Spanyol", saldo: 70000000, bendera: "🇪🇸", sponsorAwal: { nama: "Plus500", bonus: 12000000 } },
    
    { id: "bayern", nama: "Bayern Munich", negara: "Jerman", saldo: 200000000, bendera: "🇩🇪", sponsorAwal: { nama: "Deutsche Telekom", bonus: 16000000 } },
    { id: "dortmund", nama: "Borussia Dortmund", negara: "Jerman", saldo: 90000000, bendera: "🇩🇪", sponsorAwal: { nama: "Evonik", bonus: 10000000 } },
    { id: "leverkusen", nama: "Bayer Leverkusen", negara: "Jerman", saldo: 55000000, bendera: "🇩🇪", sponsorAwal: { nama: "Bayer AG", bonus: 9000000 } },
    
    { id: "milan", nama: "AC Milan", negara: "Italia", saldo: 85000000, bendera: "🇮🇹", sponsorAwal: { nama: "Emirates", bonus: 14000000 } },
    { id: "inter", nama: "Inter Milan", negara: "Italia", saldo: 100000000, bendera: "🇮🇹", sponsorAwal: { nama: "Lenovo", bonus: 13000000 } },
    { id: "juventus", nama: "Juventus", negara: "Italia", saldo: 120000000, bendera: "🇮🇹", sponsorAwal: { nama: "Jeep", bonus: 15000000 } },
    
    // Asia: Jepang (J1 League)
    { id: "kawasaki", nama: "Kawasaki Frontale", negara: "Jepang", saldo: 45000000, bendera: "🇯🇵", sponsorAwal: { nama: "Kawasaki Heavy Industries", bonus: 5000000 } },
    { id: "yokohama", nama: "Yokohama F. Marinos", negara: "Jepang", saldo: 40000000, bendera: "🇯🇵", sponsorAwal: { nama: "Nissan", bonus: 6000000 } },
    { id: "urawa", nama: "Urawa Red Diamonds", negara: "Jepang", saldo: 38000000, bendera: "🇯🇵", sponsorAwal: { nama: "Mitsubishi", bonus: 5500000 } },
    { id: "kashima", nama: "Kashima Antlers", negara: "Jepang", saldo: 35000000, bendera: "🇯🇵", sponsorAwal: { nama: "Sumitomo Metal", bonus: 4500000 } },
    
    // Asia: Korea Selatan (K-League)
    { id: "jeonbuk", nama: "Jeonbuk Hyundai Motors", negara: "Korea Selatan", saldo: 42000000, bendera: "🇰🇷", sponsorAwal: { nama: "Hyundai Motors", bonus: 7000000 } },
    { id: "ulsan", nama: "Ulsan Hyundai", negara: "Korea Selatan", saldo: 38000000, bendera: "🇰🇷", sponsorAwal: { nama: "Hyundai Heavy Industries", bonus: 6500000 } },
    { id: "seoulfc", nama: "FC Seoul", negara: "Korea Selatan", saldo: 30000000, bendera: "🇰🇷", sponsorAwal: { nama: "GS Group", bonus: 5000000 } },
    
    // China Super League
    { id: "shanghaiport", nama: "Shanghai Port", negara: "China", saldo: 60000000, bendera: "🇨🇳", sponsorAwal: { nama: "SAIC Motor", bonus: 8000000 } },
    { id: "beijingguoan", nama: "Beijing Guoan", negara: "China", saldo: 45000000, bendera: "🇨🇳", sponsorAwal: { nama: "Sinobo Group", bonus: 6000000 } },
    { id: "shandong", nama: "Shandong Taishan", negara: "China", saldo: 40000000, bendera: "🇨🇳", sponsorAwal: { nama: "Taishan Sports", bonus: 5500000 } },
    
    // Qatar Stars League
    { id: "al_sadd", nama: "Al Sadd", negara: "Qatar", saldo: 65000000, bendera: "🇶🇦", sponsorAwal: { nama: "Ooredoo", bonus: 9000000 } },
    { id: "alhilal", nama: "Al Hilal", negara: "Arab Saudi", saldo: 250000000, bendera: "🇸🇦", sponsorAwal: { nama: "Roshn", bonus: 12000000 } },
    { id: "al_duhail", nama: "Al Duhail", negara: "Qatar", saldo: 60000000, bendera: "🇶🇦", sponsorAwal: { nama: "Ooredoo", bonus: 8500000 } },
    
    // UEA Pro League
    { id: "alain", nama: "Al Ain", negara: "UAE", saldo: 50000000, bendera: "🇦🇪", sponsorAwal: { nama: "First Abu Dhabi Bank", bonus: 7500000 } },
    { id: "shabab_ahli", nama: "Shabab Al Ahli", negara: "UAE", saldo: 48000000, bendera: "🇦🇪", sponsorAwal: { nama: "Emirates NBD", bonus: 7000000 } },
    
    // Thailand League 1
    { id: "buriram", nama: "Buriram United", negara: "Thailand", saldo: 15000000, bendera: "🇹🇭", sponsorAwal: { nama: "Chang Beer", bonus: 2500000 } },
    { id: "bangkok_utd", nama: "Bangkok United", negara: "Thailand", saldo: 12000000, bendera: "🇹🇭", sponsorAwal: { nama: "Bangkok Bank", bonus: 2000000 } },
    
    // Malaysia Super League
    { id: "jdt", nama: "Johor Darul Ta'zim", negara: "Malaysia", saldo: 30000000, bendera: "🇲🇾", sponsorAwal: { nama: "JDT Foundation", bonus: 3000000 } },
    { id: "selangor", nama: "Selangor FC", negara: "Malaysia", saldo: 6000000, bendera: "🇲🇾", sponsorAwal: { nama: "Menteri Besar Incorporated", bonus: 1200000 } },
    
    // Indonesia (realistis)
    { id: "persija", nama: "Persija Jakarta", negara: "Indonesia", saldo: 9000000, bendera: "🇮🇩", sponsorAwal: { nama: "SiCepat", bonus: 800000 } },
    { id: "persib", nama: "Persib Bandung", negara: "Indonesia", saldo: 8500000, bendera: "🇮🇩", sponsorAwal: { nama: "OXO", bonus: 750000 } },
    { id: "baliutd", nama: "Bali United", negara: "Indonesia", saldo: 10000000, bendera: "🇮🇩", sponsorAwal: { nama: "Shopee", bonus: 900000 } },
    { id: "psm", nama: "PSM Makassar", negara: "Indonesia", saldo: 6500000, bendera: "🇮🇩", sponsorAwal: { nama: "Tiket.com", bonus: 600000 } },
    { id: "persebaya", nama: "Persebaya Surabaya", negara: "Indonesia", saldo: 5500000, bendera: "🇮🇩", sponsorAwal: { nama: "Bank Jatim", bonus: 500000 } },
    { id: "arema", nama: "Arema FC", negara: "Indonesia", saldo: 4000000, bendera: "🇮🇩", sponsorAwal: { nama: "Indomaret", bonus: 400000 } },
    { id: "madura", nama: "Madura United", negara: "Indonesia", saldo: 5000000, bendera: "🇮🇩", sponsorAwal: { nama: "Bank Jatim", bonus: 450000 } },
    { id: "borneo", nama: "Borneo FC", negara: "Indonesia", saldo: 5200000, bendera: "🇮🇩", sponsorAwal: { nama: "Pupuk Kaltim", bonus: 520000 } },
    { id: "psis", nama: "PSIS Semarang", negara: "Indonesia", saldo: 4500000, bendera: "🇮🇩", sponsorAwal: { nama: "Djarum", bonus: 450000 } },
    { id: "persik", nama: "Persik Kediri", negara: "Indonesia", saldo: 4000000, bendera: "🇮🇩", sponsorAwal: { nama: "BRI", bonus: 400000 } }
];

const squadByClub = {
    // =====================
    // EROPA
    // =====================

    // Arsenal
    arsenal: [
        { nama: "Bukayo Saka", posisi: "RW", harga: 85000000, ovr: 85, skill: 88, starter: true },
        { nama: "Martin Ødegaard", posisi: "CM", harga: 90000000, ovr: 85, skill: 90, starter: true },
        { nama: "Declan Rice", posisi: "CM", harga: 95000000, ovr: 85, skill: 87, starter: true },
        { nama: "William Saliba", posisi: "CB", harga: 70000000, ovr: 84, skill: 82, starter: true },
        { nama: "David Raya", posisi: "GK", harga: 35000000, ovr: 82, skill: 80, starter: true }
    ],

    // Manchester United
    manutd: [
        { nama: "Bruno Fernandes", posisi: "AM", harga: 70000000, ovr: 85, skill: 87, starter: true },
        { nama: "Marcus Rashford", posisi: "LW", harga: 65000000, ovr: 84, skill: 86, starter: true },
        { nama: "Casemiro", posisi: "CM", harga: 50000000, ovr: 84, skill: 82, starter: true },
        { nama: "Lisandro Martínez", posisi: "CB", harga: 45000000, ovr: 83, skill: 80, starter: true },
        { nama: "André Onana", posisi: "GK", harga: 40000000, ovr: 82, skill: 81, starter: true }
    ],

    // Manchester City
    mancity: [
        { nama: "Erling Haaland", posisi: "ST", harga: 150000000, ovr: 90, skill: 88, starter: true },
        { nama: "Kevin De Bruyne", posisi: "AM", harga: 80000000, ovr: 89, skill: 92, starter: true },
        { nama: "Rodri", posisi: "CM", harga: 90000000, ovr: 88, skill: 86, starter: true },
        { nama: "Rúben Dias", posisi: "CB", harga: 60000000, ovr: 86, skill: 83, starter: true },
        { nama: "Ederson", posisi: "GK", harga: 50000000, ovr: 85, skill: 84, starter: true }
    ],

    // Chelsea
    chelsea: [
        { nama: "Cole Palmer", posisi: "AM", harga: 60000000, ovr: 84, skill: 87, starter: true },
        { nama: "Nicolas Jackson", posisi: "ST", harga: 50000000, ovr: 83, skill: 84, starter: true },
        { nama: "Enzo Fernández", posisi: "CM", harga: 55000000, ovr: 84, skill: 85, starter: true },
        { nama: "Wesley Fofana", posisi: "CB", harga: 50000000, ovr: 83, skill: 81, starter: true },
        { nama: "Robert Sánchez", posisi: "GK", harga: 30000000, ovr: 82, skill: 80, starter: true }
    ],

    // Liverpool
    liverpool: [
        { nama: "Mohamed Salah", posisi: "RW", harga: 75000000, ovr: 87, skill: 88, starter: true },
        { nama: "Darwin Núñez", posisi: "ST", harga: 65000000, ovr: 84, skill: 83, starter: true },
        { nama: "Alexis Mac Allister", posisi: "CM", harga: 50000000, ovr: 83, skill: 84, starter: true },
        { nama: "Virgil van Dijk", posisi: "CB", harga: 60000000, ovr: 87, skill: 84, starter: true },
        { nama: "Alisson", posisi: "GK", harga: 55000000, ovr: 88, skill: 86, starter: true }
    ],

    // Barcelona
    barcelona: [
        { nama: "Pedri", posisi: "CM", harga: 80000000, ovr: 85, skill: 92, starter: true },
        { nama: "Gavi", posisi: "CM", harga: 70000000, ovr: 84, skill: 89, starter: true },
        { nama: "Robert Lewandowski", posisi: "ST", harga: 35000000, ovr: 85, skill: 84, starter: true },
        { nama: "Ronald Araujo", posisi: "CB", harga: 60000000, ovr: 84, skill: 80, starter: true },
        { nama: "Ter Stegen", posisi: "GK", harga: 45000000, ovr: 85, skill: 86, starter: true }
    ],

    // Real Madrid
    realmadrid: [
        { nama: "Jude Bellingham", posisi: "AM", harga: 100000000, ovr: 87, skill: 89, starter: true },
        { nama: "Vinícius Jr", posisi: "LW", harga: 120000000, ovr: 88, skill: 91, starter: true },
        { nama: "Rodrygo", posisi: "RW", harga: 90000000, ovr: 86, skill: 88, starter: true },
        { nama: "Antonio Rüdiger", posisi: "CB", harga: 50000000, ovr: 85, skill: 82, starter: true },
        { nama: "Thibaut Courtois", posisi: "GK", harga: 60000000, ovr: 90, skill: 88, starter: true }
    ],

    // Atletico Madrid
    atletico: [
        { nama: "Antoine Griezmann", posisi: "AM", harga: 45000000, ovr: 85, skill: 87, starter: true },
        { nama: "Álvaro Morata", posisi: "ST", harga: 30000000, ovr: 83, skill: 82, starter: true },
        { nama: "Koke", posisi: "CM", harga: 25000000, ovr: 82, skill: 83, starter: true },
        { nama: "José Giménez", posisi: "CB", harga: 35000000, ovr: 83, skill: 81, starter: true },
        { nama: "Jan Oblak", posisi: "GK", harga: 50000000, ovr: 87, skill: 85, starter: true }
    ],

    // Bayern Munich
    bayern: [
        { nama: "Harry Kane", posisi: "ST", harga: 80000000, ovr: 85, skill: 84, starter: true },
        { nama: "Jamal Musiala", posisi: "AM", harga: 90000000, ovr: 85, skill: 91, starter: true },
        { nama: "Joshua Kimmich", posisi: "CM", harga: 65000000, ovr: 84, skill: 88, starter: true },
        { nama: "Dayot Upamecano", posisi: "CB", harga: 45000000, ovr: 82, skill: 78, starter: true },
        { nama: "Manuel Neuer", posisi: "GK", harga: 10000000, ovr: 82, skill: 83, starter: true }
    ],

    // Borussia Dortmund
    dortmund: [
        { nama: "Julian Brandt", posisi: "AM", harga: 40000000, ovr: 83, skill: 85, starter: true },
        { nama: "Niclas Füllkrug", posisi: "ST", harga: 25000000, ovr: 82, skill: 81, starter: true },
        { nama: "Marcel Sabitzer", posisi: "CM", harga: 30000000, ovr: 82, skill: 83, starter: true },
        { nama: "Mats Hummels", posisi: "CB", harga: 15000000, ovr: 83, skill: 80, starter: true },
        { nama: "Gregor Kobel", posisi: "GK", harga: 35000000, ovr: 84, skill: 82, starter: true }
    ],

    // Bayer Leverkusen
    leverkusen: [
        { nama: "Florian Wirtz", posisi: "AM", harga: 85000000, ovr: 86, skill: 90, starter: true },
        { nama: "Victor Boniface", posisi: "ST", harga: 40000000, ovr: 83, skill: 84, starter: true },
        { nama: "Granit Xhaka", posisi: "CM", harga: 20000000, ovr: 82, skill: 83, starter: true },
        { nama: "Jonathan Tah", posisi: "CB", harga: 25000000, ovr: 82, skill: 80, starter: true },
        { nama: "Lukáš Hrádecký", posisi: "GK", harga: 15000000, ovr: 81, skill: 79, starter: true }
    ],

    // AC Milan
    milan: [
        { nama: "Rafael Leão", posisi: "LW", harga: 75000000, ovr: 85, skill: 90, starter: true },
        { nama: "Sandro Tonali", posisi: "CM", harga: 60000000, ovr: 83, skill: 85, starter: true },
        { nama: "Olivier Giroud", posisi: "ST", harga: 10000000, ovr: 81, skill: 78, starter: true },
        { nama: "Fikayo Tomori", posisi: "CB", harga: 45000000, ovr: 82, skill: 77, starter: true },
        { nama: "Mike Maignan", posisi: "GK", harga: 50000000, ovr: 85, skill: 82, starter: true }
    ],

    // Inter Milan
    inter: [
        { nama: "Lautaro Martínez", posisi: "ST", harga: 80000000, ovr: 86, skill: 85, starter: true },
        { nama: "Nicolò Barella", posisi: "CM", harga: 70000000, ovr: 85, skill: 86, starter: true },
        { nama: "Hakan Çalhanoğlu", posisi: "CM", harga: 40000000, ovr: 84, skill: 85, starter: true },
        { nama: "Alessandro Bastoni", posisi: "CB", harga: 50000000, ovr: 84, skill: 82, starter: true },
        { nama: "Yann Sommer", posisi: "GK", harga: 15000000, ovr: 82, skill: 80, starter: true }
    ],

    // Juventus
    juventus: [
        { nama: "Dusan Vlahović", posisi: "ST", harga: 65000000, ovr: 84, skill: 83, starter: true },
        { nama: "Federico Chiesa", posisi: "RW", harga: 50000000, ovr: 83, skill: 85, starter: true },
        { nama: "Manuel Locatelli", posisi: "CM", harga: 40000000, ovr: 82, skill: 83, starter: true },
        { nama: "Danilo", posisi: "CB", harga: 20000000, ovr: 81, skill: 79, starter: true },
        { nama: "Wojciech Szczęsny", posisi: "GK", harga: 25000000, ovr: 83, skill: 81, starter: true }
    ],


    // =====================
    // ASIA
    // =====================

    // Al Hilal (KSA)
    alhilal: [
        { nama: "Neymar Jr", posisi: "LW", harga: 60000000, ovr: 85, skill: 92, starter: true },
        { nama: "Sergej Milinković-Savić", posisi: "CM", harga: 55000000, ovr: 84, skill: 88, starter: true },
        { nama: "Rúben Neves", posisi: "CM", harga: 45000000, ovr: 83, skill: 86, starter: true },
        { nama: "Kalidou Koulibaly", posisi: "CB", harga: 30000000, ovr: 82, skill: 80, starter: true },
        { nama: "Bono", posisi: "GK", harga: 20000000, ovr: 82, skill: 81, starter: true }
    ],

    // Al Sadd (Qatar)
    al_sadd: [
        { nama: "Baghdad Bounedjah", posisi: "ST", harga: 8000000, ovr: 78, skill: 79, starter: true },
        { nama: "Akram Afif", posisi: "LW", harga: 12000000, ovr: 80, skill: 82, starter: true },
        { nama: "Gabriel Torres", posisi: "CM", harga: 5000000, ovr: 76, skill: 77, starter: true },
        { nama: "Tarek Salman", posisi: "CB", harga: 3000000, ovr: 76, skill: 74, starter: true },
        { nama: "Saad Al Sheeb", posisi: "GK", harga: 2000000, ovr: 75, skill: 73, starter: true }
    ],

    // Al Duhail (Qatar)
    al_duhail: [
        { nama: "Yacine Brahimi", posisi: "RW", harga: 10000000, ovr: 80, skill: 84, starter: true },
        { nama: "Michael Olunga", posisi: "ST", harga: 15000000, ovr: 81, skill: 80, starter: true },
        { nama: "Mehdi Taremi", posisi: "ST", harga: 18000000, ovr: 82, skill: 81, starter: true },
        { nama: "Pedro Miguel", posisi: "CB", harga: 2500000, ovr: 75, skill: 73, starter: true },
        { nama: "Alireza Beiranvand", posisi: "GK", harga: 3000000, ovr: 77, skill: 76, starter: true }
    ],

    // Ulsan Hyundai (Korea)
    ulsan: [
        { nama: "Joo Min-kyu", posisi: "ST", harga: 2500000, ovr: 75, skill: 74, starter: true },
        { nama: "Jung Seung-hyun", posisi: "CB", harga: 2000000, ovr: 74, skill: 72, starter: true },
        { nama: "Kim Young-gwon", posisi: "CB", harga: 1500000, ovr: 76, skill: 73, starter: true },
        { nama: "Valeri Qazaishvili", posisi: "AM", harga: 3000000, ovr: 78, skill: 79, starter: true },
        { nama: "Jo Hyeon-woo", posisi: "GK", harga: 2500000, ovr: 77, skill: 76, starter: true }
    ],

    // Yokohama F. Marinos (Jepang)
    yokohama: [
        { nama: "Anderson Lopes", posisi: "ST", harga: 3500000, ovr: 78, skill: 79, starter: true },
        { nama: "Yan Matheus", posisi: "RW", harga: 3000000, ovr: 77, skill: 78, starter: true },
        { nama: "Ryo Miyaichi", posisi: "LW", harga: 1000000, ovr: 73, skill: 74, starter: true },
        { nama: "Eduardo", posisi: "CB", harga: 1500000, ovr: 74, skill: 72, starter: true },
        { nama: "William Popp", posisi: "GK", harga: 1200000, ovr: 72, skill: 70, starter: true }
    ],

    // Kawasaki Frontale
    kawasaki: [
        { nama: "Leandro Damião", posisi: "ST", harga: 2000000, ovr: 76, skill: 77, starter: true },
        { nama: "Akihiro Ienaga", posisi: "RW", harga: 1500000, ovr: 75, skill: 78, starter: true },
        { nama: "Shogo Taniguchi", posisi: "CB", harga: 1800000, ovr: 76, skill: 74, starter: true },
        { nama: "Tatsuya Hasegawa", posisi: "CM", harga: 1200000, ovr: 74, skill: 75, starter: true },
        { nama: "Jung Sung-ryong", posisi: "GK", harga: 1000000, ovr: 73, skill: 72, starter: true }
    ],

    // Urawa Red Diamonds
    urawa: [
        { nama: "Tomoaki Makino", posisi: "CB", harga: 800000, ovr: 74, skill: 72, starter: true },
        { nama: "Shinzo Koroki", posisi: "ST", harga: 1000000, ovr: 75, skill: 76, starter: true },
        { nama: "Ryota Moriwaki", posisi: "RB", harga: 700000, ovr: 73, skill: 71, starter: true },
        { nama: "Yuki Abe", posisi: "CM", harga: 500000, ovr: 72, skill: 73, starter: true },
        { nama: "Shusaku Nishikawa", posisi: "GK", harga: 600000, ovr: 73, skill: 72, starter: true }
    ],

    // Kashima Antlers
    kashima: [
        { nama: "Everaldo", posisi: "LW", harga: 2500000, ovr: 77, skill: 78, starter: true },
        { nama: "Shoma Doi", posisi: "AM", harga: 1500000, ovr: 75, skill: 77, starter: true },
        { nama: "Koki Anzai", posisi: "RB", harga: 1200000, ovr: 74, skill: 73, starter: true },
        { nama: "Kwoun Sun-tae", posisi: "CB", harga: 1000000, ovr: 73, skill: 72, starter: true },
        { nama: "Kwoun Sun-tae", posisi: "GK", harga: 800000, ovr: 72, skill: 71, starter: true }
    ],

    // Jeonbuk Hyundai Motors
    jeonbuk: [
        { nama: "Gustavo", posisi: "ST", harga: 3000000, ovr: 78, skill: 79, starter: true },
        { nama: "Moon Seon-min", posisi: "LW", harga: 2000000, ovr: 76, skill: 77, starter: true },
        { nama: "Kim Jin-su", posisi: "LB", harga: 1500000, ovr: 75, skill: 74, starter: true },
        { nama: "Hong Jeong-ho", posisi: "CB", harga: 1800000, ovr: 76, skill: 75, starter: true },
        { nama: "Song Bum-keun", posisi: "GK", harga: 1500000, ovr: 75, skill: 74, starter: true }
    ],

    // FC Seoul
    seoulfc: [
        { nama: "Cho Young-wook", posisi: "ST", harga: 1500000, ovr: 74, skill: 75, starter: true },
        { nama: "Osmar", posisi: "CB", harga: 1000000, ovr: 73, skill: 72, starter: true },
        { nama: "Kim Jin-kyu", posisi: "CM", harga: 800000, ovr: 72, skill: 73, starter: true },
        { nama: "Yun Il-lok", posisi: "RW", harga: 1200000, ovr: 74, skill: 76, starter: true },
        { nama: "Yang Han-been", posisi: "GK", harga: 700000, ovr: 71, skill: 70, starter: true }
    ],

    // Shanghai Port
    shanghaiport: [
        { nama: "Wu Lei", posisi: "ST", harga: 5000000, ovr: 78, skill: 79, starter: true },
        { nama: "Oscar", posisi: "AM", harga: 8000000, ovr: 80, skill: 83, starter: true },
        { nama: "Wang Shenchao", posisi: "RB", harga: 1000000, ovr: 73, skill: 72, starter: true },
        { nama: "Zhang Linpeng", posisi: "CB", harga: 2000000, ovr: 75, skill: 74, starter: true },
        { nama: "Yan Junling", posisi: "GK", harga: 1500000, ovr: 74, skill: 73, starter: true }
    ],

    // Beijing Guoan
    beijingguoan: [
        { nama: "Zhang Yuning", posisi: "ST", harga: 3000000, ovr: 76, skill: 77, starter: true },
        { nama: "Renato Augusto", posisi: "CM", harga: 4000000, ovr: 77, skill: 79, starter: true },
        { nama: "Li Lei", posisi: "LB", harga: 1500000, ovr: 74, skill: 75, starter: true },
        { nama: "Jin Pengxiang", posisi: "CB", harga: 1200000, ovr: 73, skill: 72, starter: true },
        { nama: "Hou Sen", posisi: "GK", harga: 1000000, ovr: 72, skill: 71, starter: true }
    ],

    // Shandong Taishan
    shandong: [
        { nama: "Graziano Pellè", posisi: "ST", harga: 2500000, ovr: 77, skill: 78, starter: true },
        { nama: "Sun Zhensheng", posisi: "CM", harga: 1000000, ovr: 73, skill: 74, starter: true },
        { nama: "Zheng Zheng", posisi: "CM", harga: 1200000, ovr: 74, skill: 75, starter: true },
        { nama: "Shi Ke", posisi: "CB", harga: 1500000, ovr: 75, skill: 74, starter: true },
        { nama: "Wang Dalei", posisi: "GK", harga: 1200000, ovr: 74, skill: 73, starter: true }
    ],

    // Al Ain (UAE)
    alain: [
        { nama: "Kodjo Laba", posisi: "ST", harga: 6000000, ovr: 79, skill: 80, starter: true },
        { nama: "Sofiane Rahimi", posisi: "LW", harga: 5500000, ovr: 80, skill: 81, starter: true },
        { nama: "Kouame Autonne", posisi: "CM", harga: 2000000, ovr: 75, skill: 74, starter: true },
        { nama: "Khalid Al-Blooshi", posisi: "CB", harga: 1200000, ovr: 73, skill: 71, starter: true },
        { nama: "Khalid Eisa", posisi: "GK", harga: 1500000, ovr: 75, skill: 74, starter: true }
    ],

    // Shabab Al Ahli (UAE)
    shabab_ahli: [
        { nama: "Igor Coronado", posisi: "AM", harga: 4000000, ovr: 78, skill: 80, starter: true },
        { nama: "Soufiane Rahimi", posisi: "RW", harga: 5000000, ovr: 79, skill: 81, starter: true },
        { nama: "Caio Lucas", posisi: "CM", harga: 3000000, ovr: 77, skill: 78, starter: true },
        { nama: "Ahmed Abbas", posisi: "CB", harga: 1000000, ovr: 73, skill: 72, starter: true },
        { nama: "Majid Naser", posisi: "GK", harga: 1200000, ovr: 74, skill: 73, starter: true }
    ],

    // Buriram United (Thailand)
    buriram: [
        { nama: "Supachok Sarachat", posisi: "AM", harga: 2000000, ovr: 76, skill: 78, starter: true },
        { nama: "Diogo", posisi: "ST", harga: 1500000, ovr: 75, skill: 76, starter: true },
        { nama: "Pansa Hemviboon", posisi: "CB", harga: 800000, ovr: 73, skill: 72, starter: true },
        { nama: "Theerathon Bunmathan", posisi: "LB", harga: 1000000, ovr: 74, skill: 75, starter: true },
        { nama: "Siwarak Tedsungnoen", posisi: "GK", harga: 700000, ovr: 72, skill: 71, starter: true }
    ],

    // Bangkok United
    bangkok_utd: [
        { nama: "Peerapong Panyanum", posisi: "ST", harga: 800000, ovr: 72, skill: 73, starter: true },
        { nama: "Manuel Bihr", posisi: "CB", harga: 1200000, ovr: 74, skill: 73, starter: true },
        { nama: "Worachit Kanitsribampen", posisi: "AM", harga: 1500000, ovr: 75, skill: 77, starter: true },
        { nama: "Tristan Do", posisi: "RB", harga: 1000000, ovr: 74, skill: 73, starter: true },
        { nama: "Kittipong Phuthawchueak", posisi: "GK", harga: 600000, ovr: 71, skill: 70, starter: true }
    ],

    // Johor Darul Ta'zim (Malaysia)
    jdt: [
        { nama: "Bergson", posisi: "ST", harga: 3000000, ovr: 78, skill: 79, starter: true },
        { nama: "Arif Aiman", posisi: "RW", harga: 2500000, ovr: 77, skill: 78, starter: true },
        { nama: "Fernando Forestieri", posisi: "AM", harga: 2000000, ovr: 76, skill: 77, starter: true },
        { nama: "Jordi Amat", posisi: "CB", harga: 2000000, ovr: 75, skill: 73, starter: true },
        { nama: "Syihan Hazmi", posisi: "GK", harga: 1500000, ovr: 74, skill: 72, starter: true }
    ],

    // Selangor FC
    selangor: [
        { nama: "Rufino Segovia", posisi: "ST", harga: 500000, ovr: 72, skill: 73, starter: true },
        { nama: "Andik Vermansah", posisi: "RW", harga: 400000, ovr: 71, skill: 74, starter: true },
        { nama: "Bunyamin Umar", posisi: "CM", harga: 300000, ovr: 70, skill: 71, starter: true },
        { nama: "Azam Azmi", posisi: "CB", harga: 250000, ovr: 69, skill: 68, starter: true },
        { nama: "Haziq Nadzli", posisi: "GK", harga: 200000, ovr: 70, skill: 69, starter: true }
    ],

    // Persija Jakarta
    persija: [
        { nama: "Marko Šimić", posisi: "ST", harga: 700000, ovr: 75, skill: 76, starter: true },
        { nama: "Rizky Ridho", posisi: "CB", harga: 500000, ovr: 74, skill: 73, starter: true },
        { nama: "Hanno Behrens", posisi: "CM", harga: 600000, ovr: 74, skill: 75, starter: true },
        { nama: "Riko Simanjuntak", posisi: "RW", harga: 450000, ovr: 73, skill: 78, starter: true },
        { nama: "Andritany Ardhiyasa", posisi: "GK", harga: 400000, ovr: 72, skill: 71, starter: true }
    ],

    // Persib Bandung
    persib: [
        { nama: "Ciro Alves", posisi: "LW", harga: 650000, ovr: 75, skill: 77, starter: true },
        { nama: "David da Silva", posisi: "ST", harga: 600000, ovr: 76, skill: 76, starter: true },
        { nama: "Marc Klok", posisi: "CM", harga: 550000, ovr: 75, skill: 74, starter: true },
        { nama: "Nick Kuipers", posisi: "CB", harga: 500000, ovr: 74, skill: 72, starter: true },
        { nama: "Teja Paku Alam", posisi: "GK", harga: 350000, ovr: 72, skill: 71, starter: true }
    ],

    // Bali United
    baliutd: [
        { nama: "Ilija Spasojević", posisi: "ST", harga: 500000, ovr: 75, skill: 74, starter: true },
        { nama: "Privat Mbarga", posisi: "RW", harga: 450000, ovr: 74, skill: 77, starter: true },
        { nama: "Brwa Nouri", posisi: "CM", harga: 400000, ovr: 73, skill: 72, starter: true },
        { nama: "Jajang Mulyana", posisi: "CB", harga: 300000, ovr: 72, skill: 70, starter: true },
        { nama: "Adilson Maringá", posisi: "GK", harga: 350000, ovr: 74, skill: 73, starter: true }
    ],

    // PSM Makassar
    psm: [
        { nama: "Wiljan Pluim", posisi: "AM", harga: 400000, ovr: 73, skill: 75, starter: true },
        { nama: "Yevhen Bokhashvili", posisi: "ST", harga: 350000, ovr: 72, skill: 73, starter: true },
        { nama: "Rasyid Bakri", posisi: "CM", harga: 300000, ovr: 71, skill: 72, starter: true },
        { nama: "Hussein El Dor", posisi: "CB", harga: 250000, ovr: 70, skill: 69, starter: true },
        { nama: "Rizky Dwi Febrianto", posisi: "GK", harga: 200000, ovr: 71, skill: 70, starter: true }
    ],

    // Persebaya Surabaya
    persebaya: [
        { nama: "Mario Jardel", posisi: "ST", harga: 300000, ovr: 72, skill: 73, starter: true },
        { nama: "Taisei Marukawa", posisi: "LW", harga: 350000, ovr: 73, skill: 75, starter: true },
        { nama: "Moch. Hidayat", posisi: "CM", harga: 250000, ovr: 70, skill: 71, starter: true },
        { nama: "Richardo Ferreira", posisi: "CB", harga: 200000, ovr: 71, skill: 70, starter: true },
        { nama: "Ernando Ari", posisi: "GK", harga: 250000, ovr: 72, skill: 71, starter: true }
    ],

    // Arema FC
    arema: [
        { nama: "Carlos Fortes", posisi: "ST", harga: 250000, ovr: 71, skill: 72, starter: true },
        { nama: "Hanif Sjahbandi", posisi: "CM", harga: 200000, ovr: 70, skill: 71, starter: true },
        { nama: "Seydou Camara", posisi: "CB", harga: 180000, ovr: 69, skill: 68, starter: true },
        { nama: "Ikhfanul Alam", posisi: "RB", harga: 150000, ovr: 68, skill: 69, starter: true },
        { nama: "Aji Kusuma", posisi: "GK", harga: 120000, ovr: 69, skill: 68, starter: true }
    ],

    // Madura United
    madura: [
        { nama: "Beto Gonçalves", posisi: "ST", harga: 300000, ovr: 72, skill: 73, starter: true },
        { nama: "Slamet Nurcahyono", posisi: "CM", harga: 250000, ovr: 71, skill: 72, starter: true },
        { nama: "Alfonsius Kelvan", posisi: "CB", harga: 200000, ovr: 70, skill: 69, starter: true },
        { nama: "Evan Dimas", posisi: "CM", harga: 220000, ovr: 71, skill: 73, starter: true },
        { nama: "Mohammad Ridho", posisi: "GK", harga: 180000, ovr: 70, skill: 69, starter: true }
    ],

    // Borneo FC
    borneo: [
        { nama: "Matheus Vivian", posisi: "CB", harga: 200000, ovr: 70, skill: 69, starter: true },
        { nama: "Diego Michiels", posisi: "LB", harga: 180000, ovr: 69, skill: 70, starter: true },
        { nama: "Raphael Maitimo", posisi: "CM", harga: 220000, ovr: 71, skill: 72, starter: true },
        { nama: "Francisco Silva", posisi: "ST", harga: 250000, ovr: 72, skill: 73, starter: true },
        { nama: "Rusdi Suparman", posisi: "GK", harga: 150000, ovr: 69, skill: 68, starter: true }
    ],

    // PSIS Semarang
    psis: [
        { nama: "Taisei Marukawa", posisi: "LW", harga: 300000, ovr: 73, skill: 75, starter: true },
        { nama: "Ridho Syuhada", posisi: "ST", harga: 200000, ovr: 70, skill: 71, starter: true },
        { nama: "Muhammad Alwi Slamat", posisi: "CM", harga: 180000, ovr: 69, skill: 70, starter: true },
        { nama: "Riky Ridho", posisi: "CB", harga: 150000, ovr: 68, skill: 67, starter: true },
        { nama: "Jandia Eka Putra", posisi: "GK", harga: 120000, ovr: 69, skill: 68, starter: true }
    ],

    // Persik Kediri
    persik: [
        { nama: "Yusuf Efendi", posisi: "ST", harga: 150000, ovr: 68, skill: 69, starter: true },
        { nama: "Taufiq Febriyanto", posisi: "CM", harga: 120000, ovr: 67, skill: 68, starter: true },
        { nama: "Rachmat Irianto", posisi: "CB", harga: 100000, ovr: 68, skill: 67, starter: true },
        { nama: "Kusnandar", posisi: "RB", harga: 80000, ovr: 66, skill: 67, starter: true },
        { nama: "Dikri Yusron", posisi: "GK", harga: 100000, ovr: 67, skill: 66, starter: true }
    ]
};

const transferList = [
// ========== TIER ULTRA INFINITE ==========
{ nama: "Omega Eternum", posisi: "ST", harga: 999999999999999999999999999999, klubSebelumnya: "Infinite Plane", ovr: 100000000000000000000 },
{ nama: "Aetherion Omniverse", posisi: "AM", harga: 999999999999999999999999999998, klubSebelumnya: "Infinite Plane", ovr: 100000000000000000000 },
{ nama: "Nyx Voidwalker", posisi: "LW", harga: 999999999999999999999999999997, klubSebelumnya: "Infinite Plane", ovr: 100000000000000000000 },
{ nama: "Kairos Transcendent", posisi: "CM", harga: 999999999999999999999999999996, klubSebelumnya: "Infinite Plane", ovr: 100000000000000000000 },
{ nama: "Luminar Apex", posisi: "CB", harga: 999999999999999999999999999995, klubSebelumnya: "Infinite Plane", ovr: 100000000000000000000 },
{ nama: "Eternius Prime", posisi: "GK", harga: 999999999999999999999999999994, klubSebelumnya: "Infinite Plane", ovr: 100000000000000000000 },
{ nama: "Veylar Omnipotent", posisi: "RW", harga: 999999999999999999999999999993, klubSebelumnya: "Infinite Plane", ovr: 100000000000000000000 },
{ nama: "Zerathion Cosmos", posisi: "LB", harga: 999999999999999999999999999992, klubSebelumnya: "Infinite Plane", ovr: 100000000000000000000 },
    // ========== TIER MITOLOGI ==========
{ nama: "Pele (Prime)", posisi: "ST", harga: 400000000, klubSebelumnya: "Santos", ovr: 96, gambar: "p.jpg" },
{ nama: "Diego Maradona (Prime)", posisi: "AM", harga: 420000000, klubSebelumnya: "Napoli", ovr: 97, gambar: "maradona.jpg"},
{ nama: "Johan Cruyff (Prime)", posisi: "AM", harga: 380000000, klubSebelumnya: "Ajax", ovr: 95, gambar: "cruyff.jpg"},
{ nama: "George Best (Prime)", posisi: "RW", harga: 300000000, klubSebelumnya: "Man United", ovr: 94, gambar: "best.jpg" },
{ nama: "Marco Van Basten (Prime)", posisi: "ST", harga: 310000000, klubSebelumnya: "AC Milan", ovr: 94, gambar: "marco.jpg"},
{ nama: "Lev Yashin (Prime)", posisi: "GK", harga: 280000000, klubSebelumnya: "Dynamo Moscow", ovr: 95, gambar: "lev.jpg" },
    // ========== TIER LEGEND ABSOLUT ==========
{ nama: "Ronaldo Nazario (Prime)", posisi: "ST", harga: 300000000, klubSebelumnya: "Inter Milan", ovr: 95, gambar: "nazario.jpg" },
{ nama: "Ronaldinho (Prime)", posisi: "AM", harga: 250000000, klubSebelumnya: "Barcelona", ovr: 94, gambar: "ronal.jpg" },
{ nama: "Zinedine Zidane (Prime)", posisi: "CM", harga: 220000000, klubSebelumnya: "Real Madrid", ovr: 94, gambar: "zidane.jpg" },
{ nama: "Thierry Henry (Prime)", posisi: "ST", harga: 200000000, klubSebelumnya: "Arsenal", ovr: 93, gambar: "henry.jpg" },
{ nama: "Kaka (Prime)", posisi: "AM", harga: 180000000, klubSebelumnya: "AC Milan", ovr: 92, gambar: "kaka.jpg" },
{ nama: "Xavi Hernandez (Prime)", posisi: "CM", harga: 160000000, klubSebelumnya: "Barcelona", ovr: 92, gambar: "xavi.jpg" },
{ nama: "Andres Iniesta (Prime)", posisi: "CM", harga: 160000000, klubSebelumnya: "Barcelona", ovr: 92, gambar: "iniesta.jpg" },
{ nama: "Paolo Maldini (Prime)", posisi: "CB", harga: 170000000, klubSebelumnya: "AC Milan", ovr: 94, gambar: "maldini.jpg" },
{ nama: "Oliver Kahn (Prime)", posisi: "GK", harga: 150000000, klubSebelumnya: "Bayern Munich", ovr: 93, gambar: "kahn.jpg" }
];
// Daftar pelatih
const pelatihList = [
    {
        nama: "Pep Guardiola",
        spesialisasi: "Tiki-Taka",
        harga: 50000000,
        ovrBonus: 3,
        skillBonus: 2,
        efek: "Dapatkan 3 pemain muda OVR 80",
        gambar: "pep.jpg",
        bonus: [
            { nama: "Pablo Gavi", posisi: "CM", ovr: 80, skill: 82, harga: 3000000 },
            { nama: "Pedri", posisi: "CM", ovr: 81, skill: 83, harga: 3500000 },
            { nama: "Lamine Yamal", posisi: "RW", ovr: 80, skill: 85, harga: 5000000 }
        ]
    },
    {
        nama: "Carlo Ancelotti",
        spesialisasi: "Penyeimbang",
        harga: 40000000,
        ovrBonus: 2,
        skillBonus: 1,
        efek: "OVR semua pemain naik 1",
        gambar: "ancelotti.jpg",
        bonus: [
            { nama: "Eduardo Camavinga", posisi: "CM", ovr: 82, skill: 84, harga: 4500000 }
        ]
    },
    {
        nama: "Jürgen Klopp",
        spesialisasi: "Gegenpress",
        harga: 45000000,
        ovrBonus: 2,
        skillBonus: 2,
        efek: "Dapatkan 2 pemain dengan pressing tinggi",
        gambar: "klopp.jpg",
        bonus: [
            { nama: "Luis Díaz", posisi: "LW", ovr: 82, skill: 85, harga: 5500000 },
            { nama: "Darwin Núñez", posisi: "ST", ovr: 81, skill: 83, harga: 5000000 }
        ]
    },
    {
        nama: "Zinedine Zidane",
        spesialisasi: "Playmaker",
        harga: 60000000,
        ovrBonus: 4,
        skillBonus: 3,
        efek: "Dapatkan 2 legenda OVR 90",
        gambar: "zinedine.jpg",
        bonus: [
            { nama: "Zidane (Prime)", posisi: "AM", ovr: 92, skill: 94, harga: 15000000 },
            { nama: "Ronaldo Nazário", posisi: "ST", ovr: 91, skill: 93, harga: 15000000 }
        ]
    },
    {
        nama: "Thomas Tuchel",
        spesialisasi: "Defensif",
        harga: 35000000,
        ovrBonus: 1,
        skillBonus: 3,
        efek: "Dapatkan 2 defender elite",
        gambar: "tuchel.jpg",
        bonus: [
            { nama: "Matthijs de Ligt", posisi: "CB", ovr: 84, skill: 82, harga: 7000000 },
            { nama: "Alphonso Davies", posisi: "LB", ovr: 84, skill: 88, harga: 9000000 }
        ]
    },
    
    // ⭐ PELATIH BARU DIMULAI DARI SINI ⭐
    
    {
        nama: "José Mourinho",
        spesialisasi: "Park The Bus",
        harga: 55000000,
        ovrBonus: 2,
        skillBonus: 3,
        efek: "Dapatkan 3 defender keras kepala",
        gambar: "mourinho.jpg",
        bonus: [
            { nama: "Sergio Ramos", posisi: "CB", ovr: 88, skill: 90, harga: 12000000 },
            { nama: "Pepe", posisi: "CB", ovr: 86, skill: 85, harga: 8000000 },
            { nama: "João Cancelo", posisi: "RB", ovr: 85, skill: 87, harga: 9500000 }
        ]
    },
    {
        nama: "Diego Simeone",
        spesialisasi: "Ultra Defensif",
        harga: 48000000,
        ovrBonus: 1,
        skillBonus: 4,
        efek: "Dapatkan 2 pemain bertahan agresif",
        gambar: "simeone.jpg",
        bonus: [
            { nama: "José Giménez", posisi: "CB", ovr: 84, skill: 80, harga: 7500000 },
            { nama: "Koke", posisi: "CM", ovr: 83, skill: 84, harga: 6000000 }
        ]
    },
    {
        nama: "Luis Enrique",
        spesialisasi: "Attack Control",
        harga: 52000000,
        ovrBonus: 3,
        skillBonus: 2,
        efek: "Dapatkan 3 pemain menyerang kreatif",
        gambar: "enrique.jpg",
        bonus: [
            { nama: "Neymar Jr", posisi: "LW", ovr: 89, skill: 93, harga: 20000000 },
            { nama: "Ousmane Dembélé", posisi: "RW", ovr: 84, skill: 90, harga: 10000000 },
            { nama: "Marco Asensio", posisi: "RW", ovr: 82, skill: 82, harga: 6000000 }
        ]
    },
    {
        nama: "Xavi Hernandez",
        spesialisasi: "Positional Play",
        harga: 50000000,
        ovrBonus: 3,
        skillBonus: 2,
        efek: "Dapatkan 2 maestro passing",
        gambar: "hernan.jpg",
        bonus: [
            { nama: "Ilkay Gündoğan", posisi: "CM", ovr: 85, skill: 87, harga: 9000000 },
            { nama: "Frenkie de Jong", posisi: "CM", ovr: 86, skill: 88, harga: 11000000 }
        ]
    },
    {
        nama: "Hansi Flick",
        spesialisasi: "High Line",
        harga: 52000000,
        ovrBonus: 2,
        skillBonus: 3,
        efek: "Dapatkan 2 pemain cepat OVR 85",
        gambar: "flick.jpg",
        bonus: [
            { nama: "Leroy Sané", posisi: "LW", ovr: 85, skill: 88, harga: 10000000 },
            { nama: "Kingsley Coman", posisi: "RW", ovr: 85, skill: 89, harga: 10000000 }
        ]
    },
    {
    nama: "Marcelo Bielsa",
    spesialisasi: "Tactical Overload",
    harga: 9999999999999999999999,
    ovrBonus: 120000000000000000,
    skillBonus: 140000000000000000,
    efek: "Formasi bisa dibuat tanpa batas, pemain bisa punya 3 posisi utama sekaligus.",
    gambar: "bielsa.jpg",
    bonus: [
    { nama: "Aurelio Vortex", posisi: "CM", ovr: 9000000000000, skill: 9500000000000000, harga: 500000000000000000 },
    { nama: "Ragnar Blitz", posisi: "RW", ovr: 8800000000000, skill: 910000000000000, harga: 45000000000000000000 },
    { nama: "Kaizen Raptura", posisi: "ST", ovr: 92000000000000000, skill: 94000000000000000, harga: 5500000000000000000 },
    { nama: "Draven Coldspire", posisi: "CB", ovr: 95000, skill: 91000, harga: 55000000000 },
    { nama: "Onyx Gravemind", posisi: "DM", ovr: 92000, skill: 92000, harga: 52000000000 },
    { nama: "Vexar Dominion", posisi: "GK", ovr: 96000, skill: 96000, harga: 58000000000 },
    { nama: "Sirius Alvaron", posisi: "CAM", ovr: 93000, skill: 97000, harga: 60000000000 },
    { nama: "Velrox Lumina", posisi: "LW", ovr: 91000, skill: 93000, harga: 48000000000 },
    { nama: "Titan Morvane", posisi: "CB", ovr: 94000, skill: 90000, harga: 57000000000 },{ nama: "Sirius Alvaron", posisi: "CAM", ovr: 93000, skill: 97000, harga: 60000000000 },
    { nama: "Velrox Lumina", posisi: "LW", ovr: 91000, skill: 93000, harga: 48000000000 },
    { nama: "Titan Morvane", posisi: "CB", ovr: 94000, skill: 90000, harga: 57000000000 },
    ]
},
{
    nama: "Apex Prime Overlord",
    spesialisasi: "The Unbound Supremacy",
    harga: 1,
    ovrBonus: 9999999999999999999999999999990000000000,
    skillBonus: 888888888888888888888888888880000000000,
    efek: "Menciptakan ulang seluruh semesta tim mu",
    gambar: "apex.png",
    bonus: [
            // 1–15 (dari kamu)
            { nama: "Zyrex Ultimora", posisi: "ST", ovr: 9999999999999990000000000, skill: 8888888888888880000000000, harga: 50000000000000000 },
            { nama: "Kael Venomstrike", posisi: "CF", ovr: 9999999999999980000000000, skill: 8888888888888870000000000, harga: 50000000000000000 },
            { nama: "Ravion Hellflare", posisi: "LW", ovr: 9999999999999970000000000, skill: 8888888888888860000000000, harga: 50000000000000000 },
            { nama: "Drake Solarborn", posisi: "RW", ovr: 9999999999999960000000000, skill: 8888888888888850000000000, harga: 50000000000000000 },
            { nama: "Mythra Zephyrion", posisi: "AM", ovr: 9999999999999950000000000, skill: 8888888888888840000000000, harga: 50000000000000000 },
            { nama: "Lexion Dawnbringer", posisi: "CM", ovr: 9999999999999940000000000, skill: 8888888888888830000000000, harga: 50000000000000000 },
            { nama: "Xavor Nullstride", posisi: "DM", ovr: 9999999999999930000000000, skill: 8888888888888820000000000, harga: 50000000000000000 },
            { nama: "Tyran Voidwalker", posisi: "LM", ovr: 9999999999999920000000000, skill: 8888888888888810000000000, harga: 50000000000000000 },
            { nama: "Rynox Frostbane", posisi: "RM", ovr: 9999999999999910000000000, skill: 8888888888888800000000000, harga: 50000000000000000 },
            
            { nama: "Vectra Steelclaw", posisi: "CB", ovr: 9999999999999900000000000, skill: 8888888888888790000000000, harga: 50000000000000000 },
            { nama: "Gravon Ironhide", posisi: "CB", ovr: 9999999999999890000000000, skill: 8888888888888780000000000, harga: 50000000000000000 },
            { nama: "Zenoth Shattercore", posisi: "LB", ovr: 9999999999999880000000000, skill: 8888888888888770000000000, harga: 50000000000000000 },
            { nama: "Voltrix Edgewind", posisi: "RB", ovr: 9999999999999870000000000, skill: 8888888888888760000000000, harga: 50000000000000000 },
            
            { nama: "Ulthor Titanborn", posisi: "GK", ovr: 9999999999999860000000000, skill: 8888888888888750000000000, harga: 50000000000000000 },
            
            // 16–30 (penambahan gua)
            { nama: "Aroxx Blazewarden", posisi: "ST", ovr: 9999999999999850000000000, skill: 8888888888888740000000000, harga: 50000000000000000 },
            { nama: "Krylen Voidstalker", posisi: "CF", ovr: 9999999999999840000000000, skill: 8888888888888730000000000, harga: 50000000000000000 },
            { nama: "Zelphyr Darkwings", posisi: "LW", ovr: 9999999999999830000000000, skill: 8888888888888720000000000, harga: 50000000000000000 },
            { nama: "Mavros Skyflare", posisi: "RW", ovr: 9999999999999820000000000, skill: 8888888888888710000000000, harga: 50000000000000000 },
            { nama: "Elyndra Mystborne", posisi: "AM", ovr: 9999999999999810000000000, skill: 8888888888888700000000000, harga: 50000000000000000 },
            
            { nama: "Kryos Emberfang", posisi: "CM", ovr: 9999999999999800000000000, skill: 8888888888888690000000000, harga: 50000000000000000 },
            { nama: "Talon Nightwraith", posisi: "DM", ovr: 9999999999999790000000000, skill: 8888888888888680000000000, harga: 50000000000000000 },
            { nama: "Vayron Stormreaver", posisi: "LM", ovr: 9999999999999780000000000, skill: 8888888888888670000000000, harga: 50000000000000000 },
            { nama: "Ryvex Grimslash", posisi: "RM", ovr: 9999999999999770000000000, skill: 8888888888888660000000000, harga: 50000000000000000 },
            
            { nama: "Thronax Stonebreaker", posisi: "CB", ovr: 9999999999999760000000000, skill: 8888888888888650000000000, harga: 50000000000000000 },
            { nama: "Gryvak Colossion", posisi: "CB", ovr: 9999999999999750000000000, skill: 8888888888888640000000000, harga: 50000000000000000 },
            { nama: "Zerion Windclasp", posisi: "LB", ovr: 9999999999999740000000000, skill: 8888888888888630000000000, harga: 50000000000000000 },
            { nama: "Kaizon Swiftbreaker", posisi: "RB", ovr: 9999999999999730000000000, skill: 8888888888888620000000000, harga: 50000000000000000 },
            
            { nama: "Orvath Chronotitan", posisi: "GK", ovr: 9999999999999720000000000, skill: 8888888888888610000000000, harga: 50000000000000000 }
            ]
}
];

const lawanList = [
    // 🔥 TIER LEGEND (Sangat Sulit - OVR 88+)
    { nama: "Manchester City", negara: "Inggris", bendera: "🇬🇧", skuad: ["Ederson", "Walker", "Dias", "Rodri", "De Bruyne", "Haaland", "Foden"], ovr: 90 },
    { nama: "Real Madrid", negara: "Spanyol", bendera: "🇪🇸", skuad: ["Courtois", "Carvajal", "Alaba", "Modrić", "Bellingham", "Vinícius Jr.", "Rodrygo"], ovr: 89 },
    { nama: "Bayern Munich", negara: "Jerman", bendera: "🇩🇪", skuad: ["Neuer", "Kimmich", "Upamecano", "Musiala", "Sané", "Kane", "Gnabry"], ovr: 88 },
    { nama: "Barcelona", negara: "Spanyol", bendera: "🇪🇸", skuad: ["Ter Stegen", "Araújo", "Koundé", "Pedri", "Gavi", "Lewandowski", "Yamal"], ovr: 87 },
    { nama: "Brazil", negara: "Dunia", bendera: "🇧🇷", skuad: ["Alisson", "Danilo", "Marquinhos", "Casemiro", "Neymar", "Vinícius Jr.", "Richarlison"], ovr: 91 },
    { nama: "Argentina", negara: "Dunia", bendera: "🇦🇷", skuad: ["Martínez", "Molina", "Romero", "De Paul", "Messi", "Di María", "Álvarez"], ovr: 90 },
    { nama: "Prancis", negara: "Dunia", bendera: "🇫🇷", skuad: ["Lloris", "Koundé", "Upamecano", "Tchouaméni", "Griezmann", "Mbappé", "Dembélé"], ovr: 90 },
    
    // ⚔️ TIER ELITE (Sulit - OVR 84–87)
    { nama: "Liverpool", negara: "Inggris", bendera: "🇬🇧", skuad: ["Alisson", "Alexander-Arnold", "Van Dijk", "Mac Allister", "Salah", "Núñez", "Díaz"], ovr: 87 },
    { nama: "Arsenal", negara: "Inggris", bendera: "🇬🇧", skuad: ["Raya", "White", "Saliba", "Ødegaard", "Saka", "Havertz", "Trossard"], ovr: 86 },
    { nama: "Inter Milan", negara: "Italia", bendera: "🇮🇹", skuad: ["Sommer", "Pavard", "Bastoni", "Barella", "Çalhanoğlu", "Lautaro", "Thuram"], ovr: 86 },
    { nama: "PSG", negara: "Prancis", bendera: "🇫🇷", skuad: ["Donnarumma", "Hakimi", "Marquinhos", "Vitinha", "Dembélé", "Mbappé", "Barcola"], ovr: 85 },
    { nama: "Dortmund", negara: "Jerman", bendera: "🇩🇪", skuad: ["Kobel", "Ryerson", "Hummels", "Sabitzer", "Brandt", "Füllkrug", "Adeyemi"], ovr: 84 },
    { nama: "Al Hilal", negara: "Arab Saudi", bendera: "🇸🇦", skuad: ["Bono", "Al-Ghannam", "Koulibaly", "Neves", "Neymar", "Marega", "Dawasari"], ovr: 85 },
    { nama: "Portugal", negara: "Dunia", bendera: "🇵🇹", skuad: ["Diogo Costa", "Cancelo", "Dias", "B. Silva", "Fernandes", "C. Ronaldo", "Félix"], ovr: 88 },
    
    // 🛡️ TIER KUAT (Sedang-Sulit - OVR 80–83)
    { nama: "Manchester United", negara: "Inggris", bendera: "🇬🇧", skuad: ["Onana", "Wan-Bissaka", "Maguire", "Casemiro", "Fernandes", "Rashford", "Højlund"], ovr: 83 },
    { nama: "Juventus", negara: "Italia", bendera: "🇮🇹", skuad: ["Szczęsny", "Danilo", "Bremer", "Locatelli", "Chiesa", "Vlahović", "Kostić"], ovr: 82 },
    { nama: "Chelsea", negara: "Inggris", bendera: "🇬🇧", skuad: ["Sánchez", "James", "Fofana", "Enzo", "Palmer", "Jackson", "Mudryk"], ovr: 83 },
    { nama: "Atlético Madrid", negara: "Spanyol", bendera: "🇪🇸", skuad: ["Oblak", "Giménez", "Witsel", "Koke", "Griezmann", "Morata", "Correa"], ovr: 82 },
    { nama: "Napoli", negara: "Italia", bendera: "🇮🇹", skuad: ["Meret", "Di Lorenzo", "Rrahmani", "Anguissa", "Politano", "Osimhen", "Kvaratskhelia"], ovr: 83 },
    { nama: "Ulsan Hyundai", negara: "Korea Selatan", bendera: "🇰🇷", skuad: ["Jo Hyeon-woo", "Kim Tae-hwan", "Kim Young-gwon", "Lee Chung-yong", "Valeri", "Joo Min-kyu", "Larsson"], ovr: 80 },
    { nama: "Yokohama F. Marinos", negara: "Jepang", bendera: "🇯🇵", skuad: ["Popp", "Kosaka", "Eduardo", "Ito", "Anderson Lopes", "Yan Matheus", "Mizunuma"], ovr: 80 },
    { nama: "Belanda", negara: "Dunia", bendera: "🇳🇱", skuad: ["Bijlow", "Dumfries", "Van Dijk", "De Jong", "Gakpo", "Depay", "Weghorst"], ovr: 85 },
    
    // 🌏 TIER ASIA & LOKAL (Sedang - OVR 75–79)
    { nama: "Johor Darul Ta'zim", negara: "Malaysia", bendera: "🇲🇾", skuad: ["Hazmi", "Amat", "Forestieri", "Bergson", "Arif Aiman", "Faisal Halim", "Brendan Gan"], ovr: 78 },
    { nama: "Buriram United", negara: "Thailand", bendera: "🇹🇭", skuad: ["Siwarak", "Theerathon", "Pansa", "Supachok", "Diogo", "Jonathan Bolingi", "Rattanakorn"], ovr: 77 },
    { nama: "Persib Bandung", negara: "Indonesia", bendera: "🇮🇩", skuad: ["Teja", "Kuipers", "Klok", "Ciro", "David da Silva", "Febri Hariyadi", "Dedi Kusnandar"], ovr: 75 },
    { nama: "Persija Jakarta", negara: "Indonesia", bendera: "🇮🇩", skuad: ["Andritany", "Ridho", "Behrens", "Simic", "Riko", "Hanif Sjahbandi", "Ramdani Lestaluhu"], ovr: 75 },
    { nama: "Bali United", negara: "Indonesia", bendera: "🇮🇩", skuad: ["Maringá", "Jajang", "Nouri", "Spasojević", "Mbarga", "Ilija Spaso", "Leonard Tupamba"], ovr: 74 }
];

const formations = ["4-4-2", "4-3-3", "3-5-2", "5-3-2"];

// ┌──────────────────────────────────────────────────────┐
// │                   UTILITAS UMUM                      │
// └──────────────────────────────────────────────────────┘

function t(key, ...args) {
    let str = languages[currentLang][key] || key;
    args.forEach((arg, i) => {
        str = str.replace(`{${i}}`, arg);
    });
    return str;
}

function simpanGame(state) {
    localStorage.setItem('tfm_game', JSON.stringify(state));
}

function muatGame() {
    const data = localStorage.getItem('tfm_game');
    return data ? JSON.parse(data) : null;
}

function updateUIBahasa() {
    const btn = document.getElementById('btnBahasa');
    if (btn) {
        btn.textContent = t('bahasa');
    }
}
// Hitung kebutuhan posisi berdasarkan formasi
function hitungFormasi(formasi) {
    const [def, mid, att] = formasi.split('-').map(Number);
    return {
        GK: 1,
        DEF: def,
        MID: mid,
        ATT: att
    };
}

// Pilih 11 starter otomatis berdasarkan formasi
function aturStarterOtomatis(skuad, formasi) {
    const kebutuhan = hitungFormasi(formasi);
    const starter = [];
    const cadangan = [...skuad];
    
    // 1. Pilih 1 GK
    const gk = cadangan.find(p => p.posisi === "GK");
    if (gk) {
        gk.starter = true;
        starter.push(gk);
        cadangan.splice(cadangan.indexOf(gk), 1);
    }
    
    // 2. Pilih Defender (CB, RB, LB)
    const defenders = cadangan.filter(p =>
        p.posisi === "CB" || p.posisi === "RB" || p.posisi === "LB" || p.posisi === "WB"
    ).sort((a, b) => b.ovr - a.ovr);
    for (let i = 0; i < kebutuhan.DEF && defenders.length > 0; i++) {
        const p = defenders.shift();
        p.starter = true;
        starter.push(p);
        cadangan.splice(cadangan.findIndex(x => x === p), 1);
    }
    
    // 3. Pilih Midfielder (CM, AM, DM, RW, LW)
    const midfielders = cadangan.filter(p =>
        p.posisi === "CM" || p.posisi === "AM" || p.posisi === "DM" ||
        p.posisi === "RW" || p.posisi === "LW" || p.posisi === "WM"
    ).sort((a, b) => b.ovr - a.ovr);
    for (let i = 0; i < kebutuhan.MID && midfielders.length > 0; i++) {
        const p = midfielders.shift();
        p.starter = true;
        starter.push(p);
        cadangan.splice(cadangan.findIndex(x => x === p), 1);
    }
    
    // 4. Pilih Attacker (ST, CF, WF)
    const attackers = cadangan.filter(p =>
        p.posisi === "ST" || p.posisi === "CF" || p.posisi === "WF"
    ).sort((a, b) => b.ovr - a.ovr);
    for (let i = 0; i < kebutuhan.ATT && attackers.length > 0; i++) {
        const p = attackers.shift();
        p.starter = true;
        starter.push(p);
        cadangan.splice(cadangan.findIndex(x => x === p), 1);
    }
    
    // 5. Jika belum 11, isi dengan pemain terbaik tersisa
    while (starter.length < 11 && cadangan.length > 0) {
        const p = cadangan.reduce((max, pemain) => pemain.ovr > max.ovr ? pemain : max);
        p.starter = true;
        starter.push(p);
        cadangan.splice(cadangan.findIndex(x => x === p), 1);
    }
    
    // 6. Pastikan sisanya cadangan
    cadangan.forEach(p => p.starter = false);
    
    return [...starter, ...cadangan];
}
// ┌──────────────────────────────────────────────────────┐
// │                   FUNGSI LOBI                        │
// └──────────────────────────────────────────────────────┘

function toggleBahasa() {
    const urutan = ['indonesia', 'inggris', 'jepang'];
    const idx = (urutan.indexOf(currentLang) + 1) % urutan.length;
    currentLang = urutan[idx];
    localStorage.setItem('bahasa', currentLang);
    updateUIBahasa();
    location.reload();
}

function mulaiBaru() {
    localStorage.removeItem('tfm_game');
    window.location.href = 'permainan-baru.html';
}

function lanjutkan() {
    const game = muatGame();
    if (game) {
        window.location.href = 'menu-klub.html';
    } else {
        alert("Tidak ada game yang tersimpan.");
    }
}

// ┌──────────────────────────────────────────────────────┐
// │                PEMILIHAN KLUB                        │
// └──────────────────────────────────────────────────────┘

let klubDipilih = null;

function renderDaftarKlub() {
    const container = document.getElementById('daftarKlub');
    if (!container) return;
    
    container.innerHTML = clubs.map(club => `
    <button onclick="pilihKlub('${club.id}')" class="block w-full text-left p-3 bg-gray-800 hover:bg-gray-700 rounded">
      <strong>${club.nama}</strong> • ${club.negara} • Saldo: $${club.saldo.toLocaleString()}
    </button>
  `).join('');
}

function pilihKlub(id) {
    klubDipilih = clubs.find(c => c.id === id);
    document.querySelectorAll('#daftarKlub button').forEach(btn => btn.classList.remove('bg-blue-700'));
    event.target.classList.add('bg-blue-700');
    document.getElementById('btnStart').disabled = false;
}

function mulaiGame() {
    if (!klubDipilih) return;
    
    let skuadAwal = JSON.parse(JSON.stringify(squadByClub[klubDipilih.id]));
    // Atur 11 starter otomatis berdasarkan formasi default
    skuadAwal = aturStarterOtomatis(skuadAwal, "4-4-2");
    
    const state = {
        klub: klubDipilih,
        skuad: skuadAwal,
        formasi: "4-4-2",
        sponsorAktif: klubDipilih.sponsorAwal || { nama: "Tidak Ada", bonus: 0 },
        sponsorUndangan: null,
        pelatihAktif: null,
        riwayatPertandingan: [],
        lastSaved: Date.now()
    };
    
    simpanGame(state);
    window.location.href = 'menu-klub.html';
}
// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    updateUIBahasa();
    
    if (window.location.pathname.includes('permainan-baru.html')) {
        renderDaftarKlub();
    }
});