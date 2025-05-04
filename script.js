// Atasozleri listesi
const atasozleri = [
    "Abanın kadri yağmurda bilinir",
    "Acele giden ecele gider",
    "Acı patlıcanı kırağı çalmaz",
    "Açıklı başta akıl olmaz",
    "Adı çıkmış dokuza inmez sekize",
    "Ağacı kurt insanı dert yer",
    "Ağaç yaş iken eğilir",
    "Ağaç yaprağıyla gürler",
    "Ağustosun yarısı yaz yarısı kiştir",
    "Ak akçe kara gün içindir",
    "Akacak kan damarda durmaz",
    "Akan su yosun tutmaz",
    "Akıl akıldan üstündür",
    "Akıl yaşta değil baştadır",
    "Akıllı düşman akılsız dosttan hayırlıdır",
    "Akılsız başın cezasını ayak çeker",
    "Akıl yolu birdir",
    "Alacakla borç ödenmez",
    "Altının kıymetini sarraf bilir",
    "Anca beraber kanca beraber",
    "Arpa eken buğday biçmez",
    "Aslan yattığı yerden bellidir",
    "Ateş düştüğü yeri yakar",
    "Azıcık aşım ağrısız başım",
    "Baca eğri de olsa dumanı doğru çıkar",
    "Bağa bak üzüm olsun yemeye yüzün olsun",
    "Bakarsan bağ olur bakmazsan dağ olur",
    "Bal tutan parmağını yalar",
    "Balık baştan kokar",
    "Bedava sirke baldan tatlıdır",
    "Benim adım Hıdır elimden gelen budur",
    "Besle kargayı oysun gözünü",
    "Bilmemek ayıp değil öğrenmemek ayıp",
    "Bir elin nesi var iki elin sesi var",
    "Bir fincan kahvenin kırk yıl hatırı vardır",
    "Bir koltuğa iki karpuz sığmaz",
    "Bir musibet bin nasıhatten iyidir",
    "Birlikten kuvvet doğar",
    "Borç yığidin kamçısıdır",
    "Bugünün işini yarına bırakma",
    "Can çıkar huy çıkmaz",
    "Çalışan kazanır elması kızarır",
    "Çayı geçerken at değiştirilmez",
    "Çıkmadık candan umut kesilmez",
    "Çoğu zarar azı karar",
    "Çul içinde aslan yatar",
    "Dağ başı dumanlı olmaz",
    "Dağ dağa kavuşmaz insan insana kavuşur",
    "Damlaya damlaya göl olur",
    "Davulun sesi uzaktan hoş gelir",
    "Deli dostun olacağına akıllı düşmanın olsun",
    "Demir tavında dövülür",
    "Denize düşen yılana sarılır",
    "Derdini söylemeyen derman bulamaz",
    "Deveden büyük fil var",
    "Dilin kemiği yok",
    "Doğru söyleyeni dokuz köyden kovarlar",
    "Dost acı söyler",
    "Dost başa düşman ayağa bakar",
    "Dost kara günde belli olur",
    "Duvarı nem insanı gam yıkar",
    "Düşmez kalkmaz bir Allah",
    "El elden üstündür",
    "El elin eşeğini türkü çağırarak arar",
    "Emanete hıyanet olmaz",
    "Eşeğe altın semer vursalar yine eşektir",
    "Eşek hoşaftan ne anlar",
    "Ev alma komşu al",
    "Evdeki hesap çarşıya uymaz",
    "Fala inanma falsız kalma",
    "Fazla mal göz çıkarmaz",
    "Fazla naz aşık usandırır",
    "Geç olsun da güç olmasın",
    "Gelen geçer konan göçer",
    "Gelen gideni aratır",
    "Gençliğin kıymeti ihtiyarlıkta bilinir",
    "Görünen köy kılavuz istemez",
    "Gülme komşuna gelir başına",
    "Gülü seven dikenine katlanır",
    "Güneş balçıkla sıvanmaz",
    "Güvenme varlığa düşersin darlığa",
    "Hamama giren terler",
    "Hatasız kul olmaz",
    "Havlayan köpek ısırmaz",
    "Hazıra dağlar dayanmaz",
    "Her yiğidin bir yoğurt yiyişi vardır",
    "Huylu huyundan vazgeçmez",
    "İğneyi kendine çuvaldızı başkasına batır",
    "İki cambaz bir ipte oynamaz",
    "İnsan konuşa konuşa hayvan koklaşa koklaşa anlaşır",
    "İş bilenin kılıç kuşananın",
    "İşleyen demir pas tutmaz",
    "İşten artmaz dişten artar",
    "İt ürür kervan yürür",
    "İti an çomağı hazırla",
    "İyilik eden iyilik bulur",
    "Kaçan balık büyük olur",
    "Kalp kalbe karşıdır",
    "Kara haber tez duyulur",
    "Kaza geliyorum demez",
    "Kaz gelecek yerden tavuk esirgenmez",
    "Kedi uzanamadığı ciğere murdar der",
    "Kefenin cebi yok",
    "Kelin ilacı olsa başına sürer",
    "Kendi düşen ağlamaz",
    "Keser döner sap döner gün gelir hesap döner",
    "Keskin sirke küpüne zarar",
    "Kır atın yanında duran ya huyundan ya suyundan",
    "Kızım sana söylüyorum gelinim sen anla",
    "Kiminin parası kiminin duası",
    "Komşunun tavuğu komşuya kaz görünür",
    "Korkunun ecele faydası yoktur",
    "Kurt kocayınca köpeğin maskarası olur",
    "Kurt kişi geçirir ama yediği ayazı da unutmaz",
    "Lafla peynir gemisi yürümez",
    "Leyleğin ömrü laklakla geçer",
    "Mal canın yongasıdır",
    "Mart kapıdan baktırır kazma kürek yaktırır",
    "Meyve veren ağaç taşlanır",
    "Minareyi çalan kılıfını hazırlar",
    "Misafir umduğunu değil bulduğunu yer",
    "Mum dibine ışık vermez",
    "Mühür kimde ise Süleyman odur",
    "Ne doğrarsan aşına o çıkar kaşığına",
    "Ne oldum dememeli ne olacağım demeli",
    "Oğlan dayıya kız halaya çeker",
    "Öfke baldan tatlıdır",
    "Öfkeyle kalkan zararla oturur",
    "Öküz öldü ortaklık bitti",
    "Ölmüş eşek kurttan korkmaz",
    "Paça ıslanmadan balık tutulmaz",
    "Para her kapıyı açar",
    "Parayı veren düdüğü çalar",
    "Para parayı çeker",
    "Perşembenin gelişi çarşambadan bellidir",
    "Pilavdan dönenin kaşığı kırılsın",
    "Pişmiş aşa su katılmaz",
    "Rüzgâr eken fırtına biçer",
    "Sabreden derviş muradına ermiş",
    "Sağ elin verdiğini sol el görmesin",
    "Sağır duymaz uydurur",
    "Sağlam kafa sağlam vücutta bulunur",
    "Sakla samanı gelir zamanı",
    "Sayılı günler tez geçer",
    "Selam verdik borçlu çıktık",
    "Sen ağa ben ağa bu ineği kim sağa",
    "Sinek küçüktür ama mide bulandırır",
    "Son gülen iyi güler",
    "Son pişmanlık fayda etmez",
    "Sora sora Bağdat bulunur",
    "Söz gümüşse sükut altındır",
    "Su akar yolunu bulur",
    "Su akarken testiyi doldurmalı",
    "Su testisi su yolunda kırılır",
    "Su uyur düşman uyumaz",
    "Sürüden ayrılanı kurt kapar",
    "Tarlada izi olmayanın harmanda yüzü olmaz",
    "Taşıma su ile değirmen dönmez",
    "Tatlı dil yılanı deliğinden çıkarır",
    "Tatlı yiyelim tatlı konuşalım",
    "Tavşan dağa küsmüş dağın haberi olmamış",
    "Yalnız taş duvar olmaz",
    "Tekkeyi bekleyen çorbayı içer",
    "Tembele iş buyur sana akıl öğretsin",
    "Tencere dibin kara seninki benden kara",
    "Tencere yuvarlanmış kapağını bulmuş",
    "Terazi var tartı var her şeyin bir vakti var",
    "Terzi kendi söküğünü dikemez",
    "Teşbihte hata olmaz",
    "Tırnağın varsa başını kaşı",
    "Toprağı işleyen ekmeği dişler",
    "Ucuz alan pahalı alır",
    "Ulular köprü olsa basıp geçme",
    "Ummadığın taş baş yarar",
    "Umut fakirin ekmeğidir",
    "Üzüm üzüme baka baka kararır",
    "Üzümünü ye bağını sorma",
    "Vakit nakittir",
    "Vakitsiz öten horozun başını keserler",
    "Veren el alan elden üstündür",
    "Yalancının mumu yatsıya kadar yanar",
    "Yalnızlık Allah'a mahsustur",
    "Yanlış hesap Bağdat'tan döner",
    "Yaş kesen baş keser",
    "Yatanın yürüyene borcu vardır",
    "Yavuz hırsız ev sahibini bastırır",
    "Yayladaki yoğurda sarımsak dövülmez",
    "Yaza çıkardık danayı beğenmez oldu anayı",
    "Yazın başı pişenin kışın aşı pişer",
    "Yenilen pehlivan güreşe doymaz",
    "Yerin kulağı var",
    "Yiğidi öldür ama hakkını yeme",
    "Yol yürümekle borç ödemekle tükenir",
    "Yuvarlanan taş yosun tutmaz",
    "Yuvayı dişi kuş yapar",
    "Zararın neresinden dönülse kârdır",
    "Zenginin malı züğürdün çenesini yorar"
];

// Oyun değerleri
let mevcutAtasozu = "";
let gizliKelimeler = "";
let puan = 0;
let zamanlayici;
let kalanSure;
let oyunAktif = false;
let kullanilanAtasozleri = [];
let sonBilemedigiAtasozu = "";

// Ekran bileşenleri
const anaMenu = document.getElementById("ana-menu");
const oyunEkrani = document.getElementById("oyun-ekrani");
const bitisEkrani = document.getElementById("bitis-ekrani");
const kredilerEkrani = document.getElementById("krediler-ekrani");
const baslatButonu = document.getElementById("oyunu-baslat");
const tekrarOynaButonu = document.getElementById("tekrar-oyna");
const kredilerButonu = document.getElementById("krediler");
const kredileriKapatButonu = document.getElementById("kredileri-kapat");
const zorlukSecici = document.getElementById("zorluk");
const sureGosterge = document.querySelector(".sure");
const toplamPuanGosterge = document.getElementById("toplam-puan");
const atasozuGosterge = document.getElementById("atasozu-gosterge");
const kolayCevapInput = document.getElementById("cevap-giris");
const zorCevapInput1 = document.getElementById("cevap-giris-1");
const zorCevapInput2 = document.getElementById("cevap-giris-2");
const kolayKontrolButonu = document.getElementById("cevabi-kontrol-et");
const zorKontrolButonu = document.getElementById("cevabi-kontrol-et-zor");
const geriBildirim = document.getElementById("geri-bildirim");
const sonPuan = document.getElementById("son-puan");
const kolayInputGrubu = document.getElementById("kolay-giris");
const zorInputGrubu = document.getElementById("zor-giris");

// Sayfa yüklendiğinde son seçilen zorluk seviyesini yükle
document.addEventListener("DOMContentLoaded", () => {
    const kayitliZorluk = localStorage.getItem("zorlukSeviyesi");
    if (kayitliZorluk) {
        zorlukSecici.value = kayitliZorluk;
    }
});

// Zorluk seviyesi değiştiğinde kaydet
zorlukSecici.addEventListener("change", () => {
    localStorage.setItem("zorlukSeviyesi", zorlukSecici.value);
});

// Ekranlari değiştirme fonksiyonu
function ekranGoster(ekran) {
    document.querySelectorAll(".ekran").forEach(s => s.classList.remove("aktif"));
    ekran.classList.add("aktif");
}

// Rastgele atasözü secme
function rastgeleAtasozuSec() {
    if (kullanilanAtasozleri.length === atasozleri.length) {
        kullanilanAtasozleri = [];
    }
    
    let kullanilabilirAtasozleri = atasozleri.filter(a => !kullanilanAtasozleri.includes(a));
    const rastgeleIndex = Math.floor(Math.random() * kullanilabilirAtasozleri.length);
    const atasozu = kullanilabilirAtasozleri[rastgeleIndex];
    kullanilanAtasozleri.push(atasozu);
    return atasozu;
}

// Kelime gizleme . En az 4 harfli kelimeler gizlenir.
function kelimeGizle(atasozu, zorluk) {
    const kelimeler = atasozu.split(" ");
    const uzunKelimeler = kelimeler.filter(kelime => kelime.length > 3);
    
    if (uzunKelimeler.length === 0) {
        sureyiGuncelle();
        sonrakiSoru();
        return false;
    }
    
    let sonuc = atasozu;
    gizliKelimeler = "";
    
    if (zorluk === "zor" && uzunKelimeler.length >= 2) {
        // İki farklı kelime seç
        const ilkIndex = Math.floor(Math.random() * uzunKelimeler.length);
        const ilkKelime = uzunKelimeler[ilkIndex];
        
        // İkinci kelimeyi seç (ilk kelimeden farkli olmali)
        let ikinciIndex;
        do {
            ikinciIndex = Math.floor(Math.random() * uzunKelimeler.length);
        } while (ikinciIndex === ilkIndex);
        
        const ikinciKelime = uzunKelimeler[ikinciIndex];
        
        // Kelimeleri cümledeki sirasina gore düzenle
        const ilkKelimeSirasi = kelimeler.indexOf(ilkKelime);
        const ikinciKelimeSirasi = kelimeler.indexOf(ikinciKelime);
        
        if (ilkKelimeSirasi < ikinciKelimeSirasi) {
            gizliKelimeler = ilkKelime + "," + ikinciKelime;
        } else {
            gizliKelimeler = ikinciKelime + "," + ilkKelime;
        }
        
        // Gizli kelimeleri ayır
        const gizliIlkKelime = `<span class="gizli-kelime">${"_ ".repeat(ilkKelime.length).trim()}</span>`;
        const gizliIkinciKelime = `<span class="gizli-kelime">${"_ ".repeat(ikinciKelime.length).trim()}</span>`;
        
        // Kelimeleri sırasına gore değiştir.Hangisi cümlede önce gelirse o kelime öne alınıyor.
        if (ilkKelimeSirasi < ikinciKelimeSirasi) {
            sonuc = sonuc.replace(ilkKelime, gizliIlkKelime)
                        .replace(ikinciKelime, gizliIkinciKelime);
        } else {
            sonuc = sonuc.replace(ikinciKelime, gizliIkinciKelime)
                        .replace(ilkKelime, gizliIlkKelime);
        }
    } else {
        // Kolay mod veya yeterli uzun kelime yoksa tek kelime gizle
        const rastgeleIndex = Math.floor(Math.random() * uzunKelimeler.length);
        const gizlenecekKelime = uzunKelimeler[rastgeleIndex];
        gizliKelimeler = gizlenecekKelime;
        sonuc = sonuc.replace(gizlenecekKelime, `<span class="gizli-kelime">${"_ ".repeat(gizlenecekKelime.length).trim()}</span>`);
    }
    
    return sonuc;
}

// Oyunu başlatma
function oyunuBaslat() {
    const zorluk = zorlukSecici.value;
    kalanSure = zorluk === "zor" ? 30 : 15;
    puan = 0;
    toplamPuanGosterge.textContent = "0";
    oyunAktif = true;
    ekranGoster(oyunEkrani);
    
    // Zorluk seviyesine göre oyunu başlat
    kolayInputGrubu.classList.remove("aktif");
    zorInputGrubu.classList.remove("aktif");
    if (zorluk === "zor") {
        zorInputGrubu.classList.add("aktif");
    } else {
        kolayInputGrubu.classList.add("aktif");
    }
    
    sureyiGuncelle();
    sonrakiSoru();
}

// Sonraki soru
function sonrakiSoru() {
    mevcutAtasozu = rastgeleAtasozuSec();
    const gizliAtasozu = kelimeGizle(mevcutAtasozu, zorlukSecici.value);
    atasozuGosterge.innerHTML = gizliAtasozu;
    kolayCevapInput.value = "";
    zorCevapInput1.value = "";
    zorCevapInput2.value = "";
    geriBildirim.textContent = "";
    
    if (zorlukSecici.value === "zor") {
        zorCevapInput1.focus();
    } else {
        kolayCevapInput.focus();
    }
    
    // Yeni soru için süreyi sıfırla
    kalanSure = zorlukSecici.value === "zor" ? 30 : 15;
    sureGosterge.textContent = kalanSure;
}

// Süreyi sıfırla
function sureyiGuncelle() {
    if (!oyunAktif) return;
    
    sureGosterge.textContent = kalanSure;
    if (kalanSure > 0) {
        kalanSure--;
        setTimeout(sureyiGuncelle, 1000);
    } else {
        sonBilemedigiAtasozu = mevcutAtasozu; // Süre bittiğinde son atasözünü kaydet
        oyunuBitir();
    }
}

// Cevabı kontrol et    
function cevabiKontrolEt() {
    if (!oyunAktif) return;
    
    const zorluk = zorlukSecici.value;
    let dogruMu = false;
    
    if (zorluk === "zor") {
        const cevap1 = zorCevapInput1.value.trim().toLowerCase();
        const cevap2 = zorCevapInput2.value.trim().toLowerCase();
        const gizliKelimelerListesi = gizliKelimeler.split(",");
        
        // Kelimeleri cumledeki sirasina gore kontrol et
        const kelimeler = mevcutAtasozu.split(" ");
        const ilkKelimeSirasi = kelimeler.indexOf(gizliKelimelerListesi[0]);
        const ikinciKelimeSirasi = kelimeler.indexOf(gizliKelimelerListesi[1]);
        
        if (ilkKelimeSirasi < ikinciKelimeSirasi) {
            dogruMu = (cevap1 === gizliKelimelerListesi[0].toLowerCase() && 
                      cevap2 === gizliKelimelerListesi[1].toLowerCase());
        } else {
            dogruMu = (cevap1 === gizliKelimelerListesi[1].toLowerCase() && 
                      cevap2 === gizliKelimelerListesi[0].toLowerCase());
        }
        
    } else {
        const cevap = kolayCevapInput.value.trim().toLowerCase();
        dogruMu = cevap === gizliKelimeler.toLowerCase();
    }
    
    if (dogruMu) {
        geriBildirim.textContent = "Doğru!";
        geriBildirim.className = "geri-bildirim dogru";
        let mevcutSure = parseInt(sureGosterge.textContent);
        puan += mevcutSure;
        toplamPuanGosterge.textContent = Math.round(puan);
        oyunAktif = false;
        
        setTimeout(() => {
            if (kullanilanAtasozleri.length < atasozleri.length) {
                oyunAktif = true;
                sonrakiSoru();
                sureyiGuncelle();
            } else {
                oyunuBitir();
            }
        }, 2000);
    } else {
        geriBildirim.textContent = "Yanlış! Tekrar dene.";
        geriBildirim.className = "geri-bildirim yanlis";
        if (zorluk === "zor") {
            zorCevapInput1.value = "";
            zorCevapInput2.value = "";
            zorCevapInput1.focus();
        } else {
            kolayCevapInput.value = "";
            kolayCevapInput.focus();
        }
    }
}

// Oyunu bitirme
function oyunuBitir() {
    oyunAktif = false;
    sonPuan.textContent = Math.round(puan);
    
    // Son bilemediği atasözünü göster
    const sonAtasozuGosterge = document.createElement("p");
    sonAtasozuGosterge.className = "son-atasozu";
    sonAtasozuGosterge.textContent = `Bilemediğin atasözü: ${sonBilemedigiAtasozu}`;
    
    // Eğer daha önce eklenmişse kaldır
    const eskiSonAtasozu = bitisEkrani.querySelector(".son-atasozu");
    if (eskiSonAtasozu) {
        eskiSonAtasozu.remove();
    }
    
    // Yeni atasözünü ekle
    bitisEkrani.insertBefore(sonAtasozuGosterge, bitisEkrani.querySelector("button"));
    
    ekranGoster(bitisEkrani);
}

// Event listeners
baslatButonu.addEventListener("click", oyunuBaslat);
tekrarOynaButonu.addEventListener("click", () => ekranGoster(anaMenu));
kredilerButonu.addEventListener("click", () => ekranGoster(kredilerEkrani));
kredileriKapatButonu.addEventListener("click", () => ekranGoster(anaMenu));
kolayKontrolButonu.addEventListener("click", cevabiKontrolEt);
zorKontrolButonu.addEventListener("click", cevabiKontrolEt);

kolayCevapInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        cevabiKontrolEt();
    }
});

zorCevapInput1.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        zorCevapInput2.focus();
    }
});

zorCevapInput2.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        cevabiKontrolEt();
    }
}); 