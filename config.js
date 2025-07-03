module.exports = {
    // 🔹 Bot Temel Ayarları
    Token: "",
    Prefix: ".",
    
    // 🔹 Bot Sahipleri ve Geliştiriciler  
    Developer: "",
    BotOwners: [""],
    Developers: [""],
    
    // 🔹 Bot Durumu ve Bilgileri
    Durum: "Xedevil Tarafından Yapıldı",
    Footer: "Xedevil Tarafından Yapıldı",
    BotName: "Tendy Register Bot",
    BotVersion: "2.1.0",
    
    // 🔹 Web Panel Ayarları
    WebPort: 5000,
    WebHost: "0.0.0.0",
    
    // 🔹 Database Ayarları
    DatabasePath: "./croxydb/croxydb.json",
    
    // 🔹 Log Ayarları
    ConsoleLog: true,
    FileLog: false,
    LogLevel: "info", // error, warn, info, debug
    
    // 🔹 Güvenlik Ayarları
    MaxCommandsPerMinute: 10, // Kullanıcı başına dakikada maksimum komut
    CooldownTime: 3000, // Komutlar arası bekleme süresi (ms)
    
    // 🔹 Kayıt Sistemi Ayarları
    RegisterSettings: {
        MinAge: 13,
        MaxAge: 99,
        DefaultNickname: "· İsim | ",
        RequireAge: true,
        AutoRole: true
    },
    
    // 🔹 Moderasyon Ayarları
    ModerationSettings: {
        AutoMod: false,
        BadWordFilter: false,
        LinkFilter: false,
        SpamProtection: false,
        RaidProtection: false
    },
    
    // 🔹 Özellikler
    Features: {
        TagSystem: true,
        WelcomeSystem: true,
        LevelSystem: false,
        EconomySystem: false,
        MusicSystem: false,
        GameSystem: false
    },
    
    // 🔹 Embed Renkleri
    Colors: {
        Success: "#00ff00",
        Error: "#ff0000", 
        Warning: "#ffff00",
        Info: "#00ffff",
        Primary: "#5865F2",
        Secondary: "#57F287"
    },
    
    // 🔹 Zaman Ayarları
    TimeZone: "Europe/Istanbul",
    Language: "tr",
    
    // 🔹 API Ayarları (Gelecekte kullanım için)
    APIs: {
        Weather: "",
        Music: "",
        Images: "",
        News: ""
    }
};
