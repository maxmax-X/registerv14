module.exports = {
    // 🔹 Genel Sunucu Ayarları
    sunucuID: "",
    tag: ["Test - "], // Array formatında tag sistemi
    
    // 🔹 Kayıt Sistemi
    registerChat: "",
    registerYetkili: "",
    kayıtsızRol: "",
    kayıtsızİsim: "· İsim | ",

    // 🔹 Cinsiyet Rolleri
    üyeRol: "", // Genel üye rolü
    erkekRolleri: ["", ""], // Üye rolü + Erkek rolü
    kadınRolleri: ["", ""], // Üye rolü + Kadın rolü

    // 🔹 Tag Sistemi
    tagRol: "",
    tagLog: "",

    // 🔹 Genel Kanallar
    genelChat: "",
    updateChannel: "", // Güncelleme mesajları için kanal
    boosterRol: "",
    
    // 🔹 Yetkili Rolleri
    adminRolleri: [""], // Admin rolleri
    moderatorRolleri: [], // Moderatör rolleri
    
    // 🔹 Log Kanalları
    welcomeChannel: "", // Hoş geldin kanalı
    leaveChannel: "", // Çıkış kanalı
    modlogChannel: "", // Moderasyon log kanalı
    voiceLogChannel: "", // Ses kanalı log
    
    // 🔹 Otomatik Rol Sistemi
    otoRol: [], // Otomatik verilecek roller
    
    // 🔹 Kufur Engel
    kufurEngel: true, // Küfür engelleme sistemi
    reklamEngel: true, // Reklam engelleme sistemi
    
    // 🔹 Invite Sistemi
    inviteChannel: "", // Invite log kanalı
    
    // 🔹 Yaş Sistemi
    minYas: 13, // Minimum yaş sınırı
    maxYas: 99, // Maximum yaş sınırı
    
    // 🔹 Stat Sistemi
    statChannel: "", // İstatistik kanalı
    
    // 🔹 Ceza Sistemi
    cezaLog: "", // Ceza log kanalı
    jailRol: "", // Jail rolü
    muteRol: "", // Mute rolü
    
    // 🔹 Özel Ayarlar
    botSahipleri: [""], // Bot sahipleri
    geliştiriciler: [""], // Geliştiriciler
    
    // 🔹 Emoji Ayarları - Default emojiler
    emojiler: {
        onay: "✅",
        red: "❌", 
        loading: "⏳",
        star: "⭐",
        crown: "👑"
    }
};
