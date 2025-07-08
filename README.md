# 🤖 EVL Bot - Özellikleri

## 📋 Genel Bilgiler

**Bot Adı:** EVL Bot  
**Versiyon:** v2.2.1 
**Framework:** Discord.js v14  
**Geliştirici:** Xedevil  
**Lisans:** MIT  
**Platform:** Replit (24/7 Hosting)  

---

## ✨ Bot Özellikleri

### 🔐 Kayıt Sistemi
- **Manuel Kayıt**: `.kayıt @kullanıcı isim yaş` komutu ile kayıt
- **Cinsiyet Bazlı Kayıt**: `.erkek` ve `.kadın` komutları
- **Otomatik Rol Verme**: Kayıt sonrası otomatik rol ataması
- **Yaş Kontrolü**: 13-99 yaş aralığı kontrolü
- **Hesap Güvenliği**: Yeni hesaplar için güvenlik kontrolü
- **İsim Formatı**: Otomatik `· Name | Yaş` formatı
- **Kayıt Geçmişi**: Kullanıcı kayıt geçmişi takibi

### 🏷️ Tag Sistemi
- **Otomatik Tag Kontrolü**: Sunucu tagı olan üyeleri tespit
- **Tag Alma/Bırakma Takibi**: Tag değişikliklerini otomatik logla
- **Taglı Üye İstatistikleri**: Toplam taglı üye sayısı
- **Tag Alım Modu**: `.taglı-alım aç/kapat` komutu
- **Tag Sıfırlama**: Taglı üye verilerini sıfırlama

### 📊 İstatistik Sistemi
- **Kayıt İstatistikleri**: Toplam, erkek, kadın kayıt sayıları
- **Kullanıcı Profili**: Bireysel kayıt geçmişi
- **Son Kayıtlar**: En son yapılan kayıtların listesi
- **Günlük/Haftalık/Aylık İstatistikler**: Detaylı zaman bazlı analiz
- **Web Panel İstatistikleri**: Görsel dashboard

### 🛡️ Moderasyon Araçları
- **İsim Değiştirme**: `.isim @kullanıcı yeni-isim`
- **Kayıtsıza Atma**: `.kayıtsız @kullanıcı`
- **Mesaj Silme**: `.sil [sayı]` komutu
- **Veri Sıfırlama**: Kayıt verilerini sıfırlama
- **Bot Koruma**: Otomatik bot rolü verme

### 🌐 Web Panel
- **Dashboard**: Ana sayfa ile genel istatistikler
- **Kayıt Listesi**: Tüm kayıtları görüntüleme
- **Kullanıcı Profilleri**: Bireysel kullanıcı sayfaları
- **Tag Logları**: Tag işlemleri geçmişi
- **Bot Komutları**: Komut listesi ve açıklamaları
- **Ayarlar**: Bot konfigürasyon sayfası

### 🔄 24/7 Sistem
- **Keep-Alive Monitoring**: Sürekli aktiflik garantisi
- **Uptime Tracking**: Çalışma süresi takibi
- **Auto-Restart**: Otomatik yeniden başlatma
- **Health Check**: Sistem durumu kontrolü
- **Memory Management**: Bellek optimizasyonu

### 📈 Otomatik Güncelleme
- **Dosya İzleme**: Kod değişikliklerini otomatik tespit
- **Update Logger**: Güncellemeleri otomatik kaydetme
- **Duyuru Sistemi**: Güncellemeleri otomatik duyurma
- **Versiyon Takibi**: Sistem versiyonlarını izleme

---

## 🛠️ Kurulum Rehberi

### 1. 📁 Proje Klonlama
```bash
# Replit'te yeni bir proje oluşturun
# Git ile projeyi içe aktarın veya dosyaları yükleyin
```

### 2. 🔧 Ortam Değişkenleri
`.env` dosyası oluşturun ve aşağıdaki değişkenleri doldurun:

```env
# Discord Bot
DISCORD_BOT_TOKEN=your_discord_bot_token_here
BOT_OWNER_ID=your_discord_user_id_here
BOT_PREFIX=.
BOT_STATUS=Made by Xedevil

# Sunucu Ayarları
GUILD_ID=your_server_id_here
REGISTER_CHANNEL=register_channel_id_here
LOG_CHANNEL=log_channel_id_here
UPDATE_CHANNEL=update_channel_id_here

# Roller
UNREGISTERED_ROLE=unregistered_role_id_here
MALE_ROLE=male_role_id_here
FEMALE_ROLE=female_role_id_here
REGISTERED_ROLE=registered_role_id_here
BOT_ROLE=bot_role_id_here
STAFF_ROLES=staff_role_id1,staff_role_id2

# Database
SESSION_SECRET=your_session_secret_here
DATABASE_URL=postgresql_connection_string_here

# Web Panel
WEB_PORT=5000
WEB_HOST=0.0.0.0

# Keep-Alive
KEEP_ALIVE_PORT=3000
```

### 3. 🔑 Discord Bot Oluşturma
1. [Discord Developer Portal](https://discord.com/developers/applications)'a gidin
2. "New Application" butonuna tıklayın
3. Bot'a bir isim verin
4. "Bot" sekmesine gidin
5. "Add Bot" butonuna tıklayın
6. Token'ı kopyalayın ve `.env` dosyasına ekleyin
7. Bot'a gerekli izinleri verin:
   - Read Messages/View Channels
   - Send Messages
   - Manage Roles
   - Manage Nicknames
   - Read Message History
   - Use Slash Commands

### 4. 📦 Bağımlılıklar
`package.json` dosyası otomatik olarak bağımlılıkları yükler:
- discord.js v14
- express
- ejs
- moment
- croxydb
- pg (PostgreSQL)

### 5. 🏷️ Sunucu Ayarları
Bot'u sunucunuza ekledikten sonra:
1. Gerekli rolleri oluşturun
2. Kanalları oluşturun
3. `ayarlar/setting.js` dosyasındaki ID'leri güncelleyin
4. Bot'a yeterli yetkileri verin

### 6. 🚀 Bot Başlatma
```bash
# Ana başlatma komutu
node app.js

# Monitor ile başlatma (önerilen)
node start_monitor.js

# Shell script ile başlatma
chmod +x start-bot.sh
./start-bot.sh
```

---

## 🎮 Komut Listesi

### 📝 Kayıt Komutları
| Komut | Kullanım | Açıklama |
|-------|----------|----------|
| `.kayıt` | `.kayıt @kullanıcı isim yaş` | Kullanıcıyı kayıt eder |
| `.erkek` | `.erkek @kullanıcı isim yaş` | Erkek olarak kayıt eder |
| `.kadın` | `.kadın @kullanıcı isim yaş` | Kadın olarak kayıt eder |
| `.kayıtsız` | `.kayıtsız @kullanıcı` | Kayıtlı kullanıcıyı kayıtsıza atar |
| `.isim` | `.isim @kullanıcı yeni-isim` | Kullanıcının ismini değiştirir |

### 🏷️ Tag Komutları
| Komut | Kullanım | Açıklama |
|-------|----------|----------|
| `.taglı-alım` | `.taglı-alım aç/kapat` | Tag alım modunu açar/kapatır |
| `.taglı-sıfırla` | `.taglı-sıfırla` | Taglı üye verilerini sıfırlar |

### 📊 İstatistik Komutları
| Komut | Kullanım | Açıklama |
|-------|----------|----------|
| `.teyit.stats` | `.teyit.stats` | Sunucu kayıt istatistiklerini gösterir |
| `.profil` | `.profil @kullanıcı` | Kullanıcı profilini gösterir |

### 🛠️ Yönetici Komutları
| Komut | Kullanım | Açıklama |
|-------|----------|----------|
| `.help` | `.help` | Yardım menüsünü gösterir |
| `.ping` | `.ping` | Bot gecikmesini gösterir |
| `.sil` | `.sil [sayı]` | Belirtilen sayıda mesajı siler |
| `.sıfırla` | `.sıfırla` | Kayıt verilerini sıfırlar |
| `.duyuru` | `.duyuru` | Duyuru gönderir |
| `.update` | `.update` | Güncelleme duyurusu gönderir |
| `.hepsini-gonder` | `.hepsini-gonder` | Tüm güncellemeleri gönderir |

---

## 🌐 Web Panel Sayfaları

### 📊 Dashboard (`/`)
- Sunucu genel istatistikleri
- Son kayıtlar listesi
- Bot durumu bilgileri
- Grafiksel veri görüntüleme

### 📋 Kayıt Listesi (`/registrations`)
- Tüm kayıtları görüntüleme
- Filtreleme ve arama
- Sayfalama sistemi
- Export özellikleri

### 👤 Kullanıcı Profili (`/profile/:userId`)
- Bireysel kullanıcı bilgileri
- Kayıt geçmişi
- Tag durumu bilgileri

### 🏷️ Tag Logları (`/tag-logs`)
- Tag alma/bırakma geçmişi
- Zaman bazlı filtreleme
- Detaylı log görüntüleme

### 🎮 Komutlar (`/commands`)
- Tüm bot komutları
- Kullanım örnekleri
- Kategori bazlı listeleme

### ⚙️ Ayarlar (`/settings`)
- Bot konfigürasyonu
- Sunucu ayarları
- Sistem durumu

---

## 🔧 Teknik Detaylar

### 📂 Dosya Yapısı
```
EVL-Bot/
├── Ready/              # Bot hazır event'leri
├── ayarlar/            # Konfigürasyon dosyaları
├── command/            # Bot komutları
├── database/           # Veritabanı dosyaları
├── events/             # Discord event'leri
├── utils/              # Yardımcı fonksiyonlar
├── web/                # Web panel dosyaları
├── app.js              # Ana bot dosyası
├── config.js           # Temel konfigürasyon
└── package.json        # Bağımlılıklar
```

### 🗄️ Veritabanı
- **CroxyDB**: Hızlı yerel veri depolama
- **PostgreSQL**: Gelişmiş veri yönetimi (opsiyonel)
- **JSON**: Konfigürasyon ve log dosyaları

### 🔄 Monitoring Sistemi
- **Health Check**: `/health` endpoint'i
- **Status Check**: `/status` endpoint'i
- **Uptime Stats**: `/uptime` endpoint'i
- **Self-Ping**: 5 dakikada bir otomatik ping

### 🛡️ Güvenlik
- Environment variables ile hassas veri koruma
- Rate limiting
- Input validation
- Error handling

---

## 🎯 Özellik Roadmap

### ✅ Tamamlanan
- [x] Temel kayıt sistemi
- [x] Tag sistemi
- [x] Web panel
- [x] 24/7 sistem
- [x] Otomatik güncelleme
- [x] İstatistik sistemi

### 🔄 Geliştirme Aşamasında
- [ ] PostgreSQL entegrasyonu
- [ ] Advanced moderasyon araçları
- [ ] Backup sistemi
- [ ] API endpoint'leri

### 🔮 Planlanan
- [ ] Müzik sistemi
- [ ] Economy sistemi
- [ ] Ticket sistemi
- [ ] Özel komut oluşturucu

---

## ❓ SSS (Sık Sorulan Sorular)

**S: Bot çevrimdışı görünüyor?**  
C: Keep-alive sistemi sayesinde bot 24/7 aktif olmalı. Replit'in bazen gösterim gecikmesi olabilir.

**S: Komutlar çalışmıyor?**  
C: Bot'un gerekli yetkilere sahip olduğundan ve prefix'in doğru olduğundan emin olun.

**S: Web panel açılmıyor?**  
C: Port 5000'in açık olduğundan ve web server'ın başladığından emin olun.

**S: Veriler kayboldu?**  
C: CroxyDB verileri `croxydb/` klasöründe saklanır. Backup almayı unutmayın.

**S: Bot yavaş çalışıyor?**  
C: Replit'in ücretsiz planında bazen performans sınırlamaları olabilir.

---

## 📞 Destek

**Geliştirici:** Xedevil  
**GitHub:** [EVL Bot Repository]  
**Discord:** [Support Server]  
**Dokümantasyon:** Bu dosya  

---

## 📄 Lisans

Bu proje MIT lisansı altında yayınlanmıştır. Detaylar için `LICENSE` dosyasına bakın.

---

**🎉 EVL Bot'u seçtiğiniz için teşekkürler! Herhangi bir sorunuz olursa lütfen iletişime geçin.**

---

*Son güncelleme: 8 TEMMUZ  2025 13:28*  
*Versiyon: v2.2.1*  
*Geliştirici: Xedevil*

