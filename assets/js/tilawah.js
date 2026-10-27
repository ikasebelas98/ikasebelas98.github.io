/* ==========================================
   OWOJ TILAWAH DASHBOARD ENGINE - DYNAMIC SYNCED
========================================== */

const QURAN_JUZ_DATA = {
    1: [{ no: 1, name: "Al-Fatihah", ayat: "1 - 7" }, { no: 2, name: "Al-Baqarah", ayat: "1 - 141" }],
    2: [{ no: 2, name: "Al-Baqarah", ayat: "142 - 252" }],
    3: [{ no: 2, name: "Al-Baqarah", ayat: "253 - 286" }, { no: 3, name: "Ali 'Imran", ayat: "1 - 92" }],
    4: [{ no: 3, name: "Ali 'Imran", ayat: "93 - 200" }, { no: 4, name: "An-Nisa'", ayat: "1 - 23" }],
    5: [{ no: 4, name: "An-Nisa'", ayat: "24 - 147" }],
    6: [{ no: 4, name: "An-Nisa'", ayat: "148 - 176" }, { no: 5, name: "Al-Ma'idah", ayat: "1 - 81" }],
    7: [{ no: 5, name: "Al-Ma'idah", ayat: "82 - 120" }, { no: 6, name: "Al-An'am", ayat: "1 - 110" }],
    8: [{ no: 6, name: "Al-An'am", ayat: "111 - 165" }, { no: 7, name: "Al-A'raf", ayat: "1 - 87" }],
    9: [{ no: 7, name: "Al-A'raf", ayat: "88 - 206" }, { no: 8, name: "Al-Anfal", ayat: "1 - 40" }],
    10: [{ no: 8, name: "Al-Anfal", ayat: "41 - 75" }, { no: 9, name: "At-Taubah", ayat: "1 - 92" }],
    11: [{ no: 9, name: "At-Taubah", ayat: "93 - 129" }, { no: 10, name: "Yunus", ayat: "1 - 109" }, { no: 11, name: "Hud", ayat: "1 - 5" }],
    12: [{ no: 11, name: "Hud", ayat: "6 - 123" }, { no: 12, name: "Yusuf", ayat: "1 - 52" }],
    13: [{ no: 12, name: "Yusuf", ayat: "53 - 111" }, { no: 13, name: "Ar-Ra'd", ayat: "1 - 43" }, { no: 14, name: "Ibrahim", ayat: "1 - 52" }],
    14: [{ no: 15, name: "Al-Hijr", ayat: "1 - 99" }, { no: 16, name: "An-Nahl", ayat: "1 - 128" }],
    15: [{ no: 17, name: "Al-Isra'", ayat: "1 - 111" }, { no: 18, name: "Al-Kahf", ayat: "1 - 74" }],
    16: [{ no: 18, name: "Al-Kahf", ayat: "75 - 110" }, { no: 19, name: "Maryam", ayat: "1 - 98" }, { no: 20, name: "Taha", ayat: "1 - 135" }],
    17: [{ no: 21, name: "Al-Anbiya'", ayat: "1 - 112" }, { no: 22, name: "Al-Hajj", ayat: "1 - 78" }],
    18: [{ no: 23, name: "Al-Mu'minun", ayat: "1 - 118" }, { no: 24, name: "An-Nur", ayat: "1 - 64" }, { no: 25, name: "Al-Furqan", ayat: "1 - 20" }],
    19: [{ no: 25, name: "Al-Furqan", ayat: "21 - 77" }, { no: 26, name: "Asy-Syu'ara'", ayat: "1 - 227" }, { no: 27, name: "An-Naml", ayat: "1 - 55" }],
    20: [{ no: 27, name: "An-Naml", ayat: "56 - 93" }, { no: 28, name: "Al-Qasas", ayat: "1 - 88" }, { no: 29, name: "Al-'Ankabut", ayat: "1 - 45" }],
    21: [{ no: 29, name: "Al-'Ankabut", ayat: "46 - 69" }, { no: 30, name: "Ar-Rum", ayat: "1 - 60" }, { no: 31, name: "Luqman", ayat: "1 - 34" }, { no: 32, name: "As-Sajdah", ayat: "1 - 30" }, { no: 33, name: "Al-Ahzab", ayat: "1 - 30" }],
    22: [{ no: 33, name: "Al-Ahzab", ayat: "31 - 73" }, { no: 34, name: "Saba'", ayat: "1 - 54" }, { no: 35, name: "Fatir", ayat: "1 - 45" }, { no: 36, name: "Yasin", ayat: "1 - 27" }],
    23: [{ no: 36, name: "Yasin", ayat: "28 - 83" }, { no: 37, name: "As-Saffat", ayat: "1 - 182" }, { no: 38, name: "Sad", ayat: "1 - 88" }, { no: 39, name: "Az-Zumar", ayat: "1 - 31" }],
    24: [{ no: 39, name: "Az-Zumar", ayat: "32 - 75" }, { no: 40, name: "Ghafir", ayat: "1 - 85" }, { no: 41, name: "Fussilat", ayat: "1 - 46" }],
    25: [{ no: 41, name: "Fussilat", ayat: "47 - 54" }, { no: 42, name: "Asy-Syura", ayat: "1 - 53" }, { no: 43, name: "Az-Zukhruf", ayat: "1 - 89" }, { no: 44, name: "Ad-Dukhan", ayat: "1 - 59" }, { no: 45, name: "Al-Jasiyah", ayat: "1 - 37" }],
    26: [{ no: 46, name: "Al-Ahqaf", ayat: "1 - 35" }, { no: 47, name: "Muhammad", ayat: "1 - 38" }, { no: 48, name: "Al-Fath", ayat: "1 - 29" }, { no: 49, name: "Al-Hujurat", ayat: "1 - 18" }, { no: 50, name: "Qaf", ayat: "1 - 45" }, { no: 51, name: "Az-Zariyat", ayat: "1 - 30" }],
    27: [{ no: 51, name: "Az-Zariyat", ayat: "31 - 60" }, { no: 52, name: "At-Tur", ayat: "1 - 49" }, { no: 53, name: "An-Najm", ayat: "1 - 62" }, { no: 54, name: "Al-Qamar", ayat: "1 - 55" }, { no: 55, name: "Ar-Rahman", ayat: "1 - 78" }, { no: 56, name: "Al-Waqi'ah", ayat: "1 - 96" }, { no: 57, name: "Al-Hadid", ayat: "1 - 29" }],
    28: [{ no: 58, name: "Al-Mujadilah", ayat: "1 - 22" }, { no: 59, name: "Al-Hasyr", ayat: "1 - 24" }, { no: 60, name: "Al-Mumtahanah", ayat: "1 - 13" }, { no: 61, name: "As-Saff", ayat: "1 - 14" }, { no: 62, name: "Al-Jumu'ah", ayat: "1 - 11" }, { no: 63, name: "Al-Munafiqun", ayat: "1 - 11" }, { no: 64, name: "At-Taghabun", ayat: "1 - 18" }, { no: 65, name: "At-Talaq", ayat: "1 - 12" }, { no: 66, name: "At-Tahrim", ayat: "1 - 12" }],
    29: [{ no: 67, name: "Al-Mulk", ayat: "1 - 30" }, { no: 68, name: "Al-Qalam", ayat: "1 - 52" }, { no: 69, name: "Al-Haqqah", ayat: "1 - 52" }, { no: 70, name: "Al-Ma'arij", ayat: "1 - 44" }, { no: 71, name: "Nuh", ayat: "1 - 28" }, { no: 72, name: "Al-Jinn", ayat: "1 - 28" }, { no: 73, name: "Al-Muzzammil", ayat: "1 - 20" }, { no: 74, name: "Al-Muddassir", ayat: "1 - 56" }, { no: 75, name: "Al-Qiyamah", ayat: "1 - 40" }, { no: 76, name: "Al-Insan", ayat: "1 - 31" }, { no: 77, name: "Al-Mursalat", ayat: "1 - 50" }],
    30: [
        { no: 78, name: "An-Naba'", ayat: "1 - 40" }, { no: 79, name: "An-Nazi'at", ayat: "1 - 46" }, { no: 80, name: "'Abasa", ayat: "1 - 42" },
        { no: 81, name: "At-Takwir", ayat: "1 - 29" }, { no: 82, name: "Al-Infitar", ayat: "1 - 19" }, { no: 83, name: "Al-Mutaffifin", ayat: "1 - 36" },
        { no: 84, name: "Al-Insyiqaq", ayat: "1 - 25" }, { no: 85, name: "Al-Buruj", ayat: "1 - 22" }, { no: 86, name: "At-Tariq", ayat: "1 - 17" },
        { no: 87, name: "Al-A'la", ayat: "1 - 19" }, { no: 88, name: "Al-Ghasyiyah", ayat: "1 - 26" }, { no: 89, name: "Al-Fajr", ayat: "1 - 30" },
        { no: 90, name: "Al-Balad", ayat: "1 - 20" }, { no: 91, name: "Asy-Syams", ayat: "1 - 15" }, { no: 92, name: "Al-Lail", ayat: "1 - 21" },
        { no: 93, name: "Ad-Duha", ayat: "1 - 11" }, { no: 94, name: "Al-Insyirah", ayat: "1 - 8" }, { no: 95, name: "At-Tin", ayat: "1 - 8" },
        { no: 96, name: "Al-'Alaq", ayat: "1 - 19" }, { no: 97, name: "Al-Qadr", ayat: "1 - 5" }, { no: 98, name: "Al-Bayyinah", ayat: "1 - 8" },
        { no: 99, name: "Az-Zalzalah", ayat: "1 - 8" }, { no: 100, name: "Al-'Adiyat", ayat: "1 - 11" }, { no: 101, name: "Al-Qari'ah", ayat: "1 - 11" },
        { no: 102, name: "At-Takasur", ayat: "1 - 8" }, { no: 103, name: "Al-'Asr", ayat: "1 - 3" }, { no: 104, name: "Al-Humazah", ayat: "1 - 9" },
        { no: 105, name: "Al-Fil", ayat: "1 - 5" }, { no: 106, name: "Quraisy", ayat: "1 - 4" }, { no: 107, name: "Al-Ma'un", ayat: "1 - 7" },
        { no: 108, name: "Al-Kausar", ayat: "1 - 3" }, { no: 109, name: "Al-Kafirun", ayat: "1 - 6" }, { no: 110, name: "An-Nasr", ayat: "1 - 3" },
        { no: 111, name: "Al-Lahab", ayat: "1 - 5" }, { no: 112, name: "Al-Ikhlas", ayat: "1 - 4" }, { no: 113, name: "Al-Falaq", ayat: "1 - 5" }, { no: 114, name: "An-Nas", ayat: "1 - 6" }
    ]
};

let officialStartDate = null; // Disimpan di Firestore (settings/tilawah_config)
let allDbAlumni = [];
let assignedParticipants = []; // Dinamis berdasarkan input peserta
let currentUserRole = "member";
let cachedAuthUser = null;

// HITUNG PEKAN BERJALAN BERDASARKAN HARI SENIN RESMI SETELAH TOMBOL START DIKLIK
function getElapsedWeeks() {
    if (!officialStartDate) return 0;
    const now = new Date();
    const start = new Date(officialStartDate);
    
    if (now < start) return 0;
    const diffTime = now - start;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
}

// RUMUS TUGAS JUZ: No. 1 di awal selalu mulai dari Juz 1, lalu bergeser +1 tiap Senin
function getJuzForIndex(index) {
    const elapsedWeeks = getElapsedWeeks();
    return ((index + elapsedWeeks) % 30) + 1;
}

// SWITCH TAB UI
window.switchTab = function(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.tab-btn-bar').forEach(btn => btn.classList.remove('active'));

    const activeTab = document.getElementById(tabId);
    if (activeTab) activeTab.classList.remove('hidden');

    const btn = document.getElementById('btn' + tabId.charAt(0).toUpperCase() + tabId.slice(1));
    if (btn) btn.classList.add('active');
};

// INITIALIZE DASHBOARD & FETCH FROM FIREBASE
window.initTilawahDashboard = async function(user, namaPanggilan) {
    cachedAuthUser = user;

    try {
        if (window.firebaseDb) {
            const { collection, getDocs, doc, getDoc } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
            
            if (user) {
                const userDoc = await getDoc(doc(window.firebaseDb, "alumni", user.uid));
                if (userDoc.exists()) {
                    currentUserRole = userDoc.data().role || "member";
                    if (currentUserRole === "admin" || currentUserRole === "super_admin") {
                        const adminBtns = document.getElementById("adminActionButtons");
                        if (adminBtns) adminBtns.classList.remove("hidden");
                    }
                }
            }

            // AMBIL CONFIG START
            const configDoc = await getDoc(doc(window.firebaseDb, "settings", "tilawah_config"));
            if (configDoc.exists()) {
                officialStartDate = configDoc.data().startDate || null;
            }

            // AMBIL DATA ALUMNI (Pastikan baris ini tereksekusi)
            const alumniSnap = await getDocs(collection(window.firebaseDb, "alumni"));
            allDbAlumni = [];
            alumniSnap.forEach(d => allDbAlumni.push({ id: d.id, ...d.data() }));
            console.log("Total alumni dimuat:", allDbAlumni.length); // Cek di console F12 apakah > 0

            // AMBIL PESERTA TILAWAH
            const tilawahDoc = await getDoc(doc(window.firebaseDb, "settings", "tilawah_participants"));
            if (tilawahDoc.exists() && tilawahDoc.data().participants) {
                assignedParticipants = tilawahDoc.data().participants;
            }
        }
    } catch (err) {
        console.error("Gagal memuat data tilawah:", err);
    }

    updateBadgeStatus();
    renderTab1Participants();
    renderActiveJuzCards(user);
    renderColorWheel();
    updateYearlyStats();
};

function updateBadgeStatus() {
    const badge = document.getElementById("currentWeekBadge");
    if (!badge) return;

    if (!officialStartDate) {
        badge.innerHTML = `<span class="text-amber-400 font-bold">Status: Belum Dimulai (Menunggu Start Admin)</span>`;
    } else {
        const currentWeek = getElapsedWeeks() + 1;
        badge.innerText = `Pekan ke-${currentWeek} Berjalan`;
    }
}

// ADMIN ACTION: KLIK TOMBOL START MEMBACA
window.triggerStartOwoj = async function() {
    if (!confirm("Yakin ingin memulai program OWOJ? Tanggal resmi Pekan ke-1 akan dikunci pada hari Senin terdekat.")) return;

    // Cari hari Senin terdekat dari hari ini
    const now = new Date();
    const day = now.getDay(); // 0 = Minggu, 1 = Senin, dst.
    const diffToMonday = day === 1 ? 0 : (day === 0 ? 1 : (8 - day));
    
    const mondayDate = new Date(now);
    mondayDate.setDate(now.getDate() + diffToMonday);
    mondayDate.setHours(0, 0, 0, 0);

    officialStartDate = mondayDate.toISOString();

    try {
        if (window.firebaseDb) {
            const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
            await setDoc(doc(window.firebaseDb, "settings", "tilawah_config"), {
                startDate: officialStartDate,
                startedBy: cachedAuthUser ? cachedAuthUser.email : "Admin",
                updatedAt: new Date().toISOString()
            });
            alert(`Program OWOJ berhasil dimulai! Pekan ke-1 resmi berjalan mulai hari Senin, ${mondayDate.toLocaleDateString('id-ID')}.`);
        }
    } catch (err) {
        console.error("Gagal menyimpan config start:", err);
        alert("Gagal memulai program.");
    }

    updateBadgeStatus();
    renderTab1Participants();
    renderActiveJuzCards(cachedAuthUser);
};

// RENDER TAB 1: TABEL PESERTA TILAWAH (DINAMIS SESUAI JUMLAH PESERTA)
function renderTab1Participants() {
    const tbody = document.getElementById("participantTableBody");
    if (!tbody) return;

    tbody.innerHTML = "";

    if (assignedParticipants.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="p-8 text-center text-slate-500">Belum ada peserta terdaftar. Silakan gunakan tombol "Kelola Peserta" untuk mendaftarkan peserta.</td></tr>`;
        return;
    }

    assignedParticipants.forEach((participant, index) => {
        const no = index + 1;
        const assignedJuz = getJuzForIndex(index);

        const tr = document.createElement("tr");
        tr.className = "hover:bg-slate-800/40 transition";

        tr.innerHTML = `
            <td class="p-3.5 font-bold text-amber-400">${no}</td>
            <td class="p-3.5 font-semibold text-white">${(participant.namaPanggilan || "ALUMNI").toUpperCase()}</td>
            <td class="p-3.5 text-slate-300">${participant.namaLengkap || "-"}</td>
            <td class="p-3.5 text-center">
                <span class="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold rounded-lg text-xs">
                    Juz ${assignedJuz}
                </span>
            </td>
            <td class="p-3.5 text-center">
                <div class="flex items-center justify-center gap-2">
                    <span class="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md text-xs font-semibold">
                        Aktif
                    </span>
                    ${(currentUserRole === "admin" || currentUserRole === "super_admin") ? `
                        <button onclick="removeParticipant(${index})" title="Hapus Peserta" class="w-7 h-7 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white rounded-lg flex items-center justify-center transition">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    ` : ''}
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// RENDER TAB 2: KARTU JUZ HANYA UNTUK PESERTA YANG AKTIF
function renderActiveJuzCards(currentUser) {
    const container = document.getElementById("juzGrid30Container");
    if (!container) return;

    container.innerHTML = "";

    if (assignedParticipants.length === 0) {
        container.innerHTML = `<div class="col-span-full p-12 text-center text-slate-500 bg-slate-900/50 rounded-2xl border border-slate-800">Belum ada kartu Juz yang ditampilkan karena peserta tilawah masih kosong.</div>`;
        return;
    }

    assignedParticipants.forEach((participant, index) => {
        const assignedJuz = getJuzForIndex(index);
        const surahs = QURAN_JUZ_DATA[assignedJuz] || [];
        const assignedName = (participant.namaPanggilan || "ALUMNI").toUpperCase();
        const isUserAssigned = currentUser && participant.id === currentUser.uid;
        const bgClass = (assignedJuz % 2 !== 0) ? 'juz-card-bg-dark' : 'juz-card-bg-lite';

        const card = document.createElement("div");
        card.className = `juz-card-box ${bgClass} ${isUserAssigned ? 'user-assigned' : ''}`;
        card.id = `juz-btn-${assignedJuz}`;

        let htmlContent = `
            <div>
                <div class="flex justify-between items-start mb-2">
                    <h2 class="text-3xl md:text-4xl font-extralight tracking-tight text-white">JUZ ${assignedJuz}</h2>
                    <div class="text-[10px] opacity-80 text-right">
                        <div>No. Urut: ${index + 1}</div>
                        <div>Pekan ke-${getElapsedWeeks() + 1}</div>
                    </div>
                </div>
                <h3 class="text-xl font-bold mb-4 tracking-wide text-amber-300">${assignedName}</h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        `;

        surahs.forEach((s) => {
            htmlContent += `
                <div class="surah-card relative overflow-hidden cursor-pointer transition p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-amber-400/50 flex items-center justify-between" onclick="triggerReportTilawah(${assignedJuz}, '${s.name}', this)">
                    <!-- Garis Lintang Merah Diperlebar 2.5x Lipat -->
                    <div class="red-slash-line absolute inset-0 pointer-events-none hidden items-center justify-center">
                        <div class="w-[140%] h-8 bg-red-500/70 rotate-[-15deg] transform shadow-sm"></div>
                    </div>

                    <div class="flex items-center gap-3.5 w-full relative z-10">
                        <!-- Angka Nomor Surat -->
                        <div class="surah-number font-black text-3xl shrink-0 text-center" style="color: #080c1d !important; background: transparent !important; border: none !important; box-shadow: none !important;">${s.no}</div>
                        <div class="surah-info truncate w-full">
                            <div class="font-bold text-white truncate text-sm surah-title">${s.name}</div>
                            <div class="text-[10px] text-slate-400 surah-ayat">ayat ${s.ayat}</div>
                        </div>
                    </div>
                    <!-- Sisi Kanan: Badge Tanggal & Jam Selesai -->
                    <div class="surat-time-badge hidden shrink-0 text-right pl-3 border-l border-slate-300/40 ml-2 relative z-10">
                        <div class="text-[11px] font-bold text-slate-900 date-text"></div>
                        <div class="text-[10px] text-slate-700 font-medium time-text"></div>
                    </div>
                </div>
            `;
        });

        htmlContent += `
                </div>
            </div>

            <div class="space-y-1 pt-2 border-t border-white/20">
                <div class="flex justify-between text-[11px] font-semibold opacity-90">
                    <span>Progres Bacaan Pekan Ini</span>
                    <span class="text-amber-400 font-bold progress-text">0%</span>
                </div>
                <div class="w-full bg-slate-900/60 h-3 rounded-full overflow-hidden p-0.5 border border-white/20">
                    <div class="bg-amber-400 h-full rounded-full transition-all duration-300 progress-bar-fill" style="width: 0%"></div>
                </div>
            </div>
        `;

        card.innerHTML = htmlContent;
        container.appendChild(card);
    });
}

// TOGGLE CHECKLIST SURAT
window.toggleSurahCheck = function(element) {
    element.classList.toggle("completed");
    
    const cardBox = element.closest('.juz-card-box');
    const totalSurahs = cardBox.querySelectorAll('.surah-card').length;
    const completedSurahs = cardBox.querySelectorAll('.surah-card.completed').length;
    const percent = Math.round((completedSurahs / totalSurahs) * 100);

    const percentText = cardBox.querySelector('.progress-text');
    const progressBar = cardBox.querySelector('.progress-bar-fill');

    if (percentText) percentText.innerText = `${percent}%`;
    if (progressBar) progressBar.style.width = `${percent}%`;
};

// HAPUS PESERTA DARI LIST
window.removeParticipant = async function(index) {
    if (!confirm(`Yakin ingin menghapus peserta nomor urut ${index + 1}?`)) return;

    assignedParticipants.splice(index, 1);

    try {
        if (window.firebaseDb) {
            const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
            await setDoc(doc(window.firebaseDb, "settings", "tilawah_participants"), {
                participants: assignedParticipants,
                updatedAt: new Date().toISOString()
            });
            alert("Peserta berhasil dihapus.");
        }
    } catch (err) {
        console.error("Gagal memperbarui database:", err);
        alert("Gagal menghapus peserta.");
    }

    renderTab1Participants();
    renderActiveJuzCards(cachedAuthUser);
};

// MODAL ADMIN MANAGEMENT FUNCTIONS
window.openManageModal = function() {
    const modal = document.getElementById("manageParticipantsModal");
    const alumniDbSelect = document.getElementById("alumniDbSelect");

    if (!modal) return;

    // Ambil ID peserta yang sudah terdaftar di OWOJ agar tidak muncul lagi
    const registeredIds = assignedParticipants.map(p => p.id);

    alumniDbSelect.innerHTML = `<option value="">-- Pilih Alumni dari Database --</option>`;
    
    if (allDbAlumni && allDbAlumni.length > 0) {
        const filteredAlumni = allDbAlumni.filter(alumni => {
            // Ambil semua kemungkinan indikator role atau nama
            const role = (alumni.role || "").toLowerCase().trim();
            const namaPanggilan = (alumni.namaPanggilan || "").toLowerCase();
            const namaLengkap = (alumni.namaLengkap || "").toLowerCase();
            
            // Deteksi apakah akun ini adalah admin/super_admin berdasarkan role ATAU mengandung kata 'admin' pada namanya
            const isRoleAdmin = role === "admin" || role === "super_admin" || role.includes("admin");
            const isNameAdmin = namaPanggilan.includes("admin") || namaLengkap.includes("admin");
            const isAlreadyRegistered = registeredIds.includes(alumni.id);

            // Jika terdeteksi sebagai admin/super_admin atau sudah terdaftar, sembunyikan dari dropdown
            if (isRoleAdmin || isNameAdmin || isAlreadyRegistered) {
                return false;
            }

            return true;
        });

        if (filteredAlumni.length > 0) {
            filteredAlumni.forEach(alumni => {
                const nama = alumni.namaLengkap || alumni.namaPanggilan || "Alumni";
                alumniDbSelect.innerHTML += `<option value="${alumni.id}">${nama} (${alumni.kelas || '11.98'})</option>`;
            });
        } else {
            alumniDbSelect.innerHTML += `<option value="" disabled>Tidak ada alumni yang tersedia untuk didaftarkan</option>`;
        }
    } else {
        alumniDbSelect.innerHTML += `<option value="" disabled>Data alumni kosong atau belum termuat</option>`;
    }

    modal.classList.remove("hidden");
    modal.classList.add("flex");
};

window.closeManageModal = function() {
    const modal = document.getElementById("manageParticipantsModal");
    if (modal) {
        modal.classList.remove("flex");
        modal.classList.add("hidden");
    }
};

window.saveParticipantToSlot = async function() {
    const alumniId = document.getElementById("alumniDbSelect").value;

    if (!alumniId) {
        alert("Silakan pilih alumni terlebih dahulu!");
        return;
    }

    const selected = allDbAlumni.find(a => a.id === alumniId);
    if (selected) {
        // Cek apakah alumni sudah terdaftar sebelumnya
        const isAlreadyRegistered = assignedParticipants.some(p => p.id === selected.id);
        if (isAlreadyRegistered) {
            alert("Alumni ini sudah terdaftar sebagai peserta OWOJ!");
            return;
        }

        // Tambahkan ke urutan paling bawah secara otomatis
        assignedParticipants.push({
            id: selected.id,
            namaPanggilan: selected.namaPanggilan || selected.namaLengkap || "Alumni",
            namaLengkap: selected.namaLengkap || "-",
            kelas: selected.kelas || "-"
        });
    }

    try {
        if (window.firebaseDb) {
            const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
            await setDoc(doc(window.firebaseDb, "settings", "tilawah_participants"), {
                participants: assignedParticipants,
                updatedAt: new Date().toISOString()
            });
            alert("Peserta OWOJ berhasil ditambahkan!");
        }
    } catch (err) {
        console.error("Gagal menyimpan ke Firestore:", err);
        alert("Gagal menyimpan data peserta. Error: " + err.message);
    }

    closeManageModal();
    renderTab1Participants();
    renderActiveJuzCards(cachedAuthUser);
};

// RENDER COLOR WHEEL & STATS
function renderColorWheel() {
    const svg = document.getElementById('colorWheelSvg');
    if (!svg) return;

    svg.innerHTML = '';
    const cx = 250, cy = 250, rOuter = 230, rInner = 90;
    const totalSlices = 30;

    for (let i = 0; i < totalSlices; i++) {
        const juzNum = i + 1;
        const startAngle = (i * 360 / totalSlices) - 90;
        const endAngle = ((i + 1) * 360 / totalSlices) - 90;

        const x1 = cx + rOuter * Math.cos(Math.PI * startAngle / 180);
        const y1 = cy + rOuter * Math.sin(Math.PI * startAngle / 180);
        const x2 = cx + rOuter * Math.cos(Math.PI * endAngle / 180);
        const y2 = cy + rOuter * Math.sin(Math.PI * endAngle / 180);

        const x3 = cx + rInner * Math.cos(Math.PI * endAngle / 180);
        const y3 = cy + rInner * Math.sin(Math.PI * endAngle / 180);
        const x4 = cx + rInner * Math.cos(Math.PI * startAngle / 180);
        const y4 = cy + rInner * Math.sin(Math.PI * startAngle / 180);

        const hue = (i * 360 / 30);
        const pathData = `M ${x1} ${y1} A ${rOuter} ${rOuter} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 0 0 ${x4} ${y4} Z`;

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", pathData);
        path.setAttribute("fill", `hsl(${hue}, 85%, 50%)`);
        path.setAttribute("class", "wheel-slice");

        path.addEventListener("mouseenter", () => {
            const hoverInfo = document.getElementById("wheelHoverInfo");
            if (hoverInfo) {
                hoverInfo.innerHTML = `<strong>JUZ ${juzNum}</strong> | Status: Progres Aktif Pekan Ini`;
            }
        });

        svg.appendChild(path);
    }
}

function updateYearlyStats() {
    const totalKhatam = document.getElementById("yearlyTotalKhatam");
    const disciplineRate = document.getElementById("yearlyDisciplineRate");
    const currentWeekNum = document.getElementById("yearlyCurrentWeekNum");

    const currentWeek = getElapsedWeeks() + 1;
    if (totalKhatam) totalKhatam.innerText = `${Math.floor(currentWeek / 30)} Kali`;
    if (disciplineRate) disciplineRate.innerText = `94%`;
    if (currentWeekNum) currentWeekNum.innerText = `Pekan ${currentWeek}`;
}

let activeJuzTarget = null;      // Menyimpan data juz aktif
let activeSuratElement = null;   // Menyimpan elemen surat spesifik yang sedang diklik

// 1. Fungsi saat user mengklik tombol surat/juz untuk melapor
window.triggerReportTilawah = function(juzNumber, suratInfo, element) {
    activeJuzTarget = { juzNumber, suratInfo };
    activeSuratElement = element; // Simpan referensi elemen surat yang diklik
    
    const modalText = document.getElementById("confirmReportText");
    modalText.innerHTML = `Alhamdulillah, apakah benar tilawah untuk <b>Juz ${juzNumber} (${suratInfo})</b> sudah selesai dibaca?`;
    
    const confirmModal = document.getElementById("confirmReportModal");
    confirmModal.classList.remove("hidden");
    confirmModal.classList.add("flex");
};

// Tombol "Tidak" pada konfirmasi
document.getElementById("cancelReportBtn")?.addEventListener("click", () => {
    const confirmModal = document.getElementById("confirmReportModal");
    confirmModal.classList.remove("flex");
    confirmModal.classList.add("hidden");
    
    // Batalkan perubahan, kosongkan target tanpa mengubah warna surat
    activeJuzTarget = null;
    activeSuratElement = null;
});

// Tombol "Iya" pada konfirmasi
document.getElementById("yesReportBtn")?.addEventListener("click", async () => {
    if (!activeJuzTarget || !activeSuratElement) return;

    const confirmModal = document.getElementById("confirmReportModal");
    confirmModal.classList.remove("flex");
    confirmModal.classList.add("hidden");

    const optionsDate = { day: 'numeric', month: 'long', year: 'numeric' };
    const currentDate = new Date().toLocaleDateString('id-ID', optionsDate);
    
    const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: false };
    const currentTime = "jam : " + new Date().toLocaleTimeString('id-ID', optionsTime);

    // Tandai surat selesai secara visual (latar jadi putih)
    activeSuratElement.classList.add("completed");

    // Tampilkan garis lintang merah transparan
    const redSlash = activeSuratElement.querySelector('.red-slash-line');
    if (redSlash) {
        redSlash.classList.remove('hidden');
        redSlash.classList.add('flex');
    }

    // Ubah warna teks & angka besar menjadi #080c1d saat surat selesai
    const titleEl = activeSuratElement.querySelector('.surah-title');
    const subTitleEl = activeSuratElement.querySelector('.surah-ayat');
    const numEl = activeSuratElement.querySelector('.surah-number');
    
    if (titleEl) { titleEl.classList.remove('text-white'); titleEl.classList.add('text-[#080c1d]'); }
    if (subTitleEl) { subTitleEl.classList.remove('text-slate-400'); subTitleEl.classList.add('text-[#1e293b]'); }
    if (numEl) { 
        numEl.classList.remove('text-amber-400'); 
        numEl.classList.add('text-[#080c1d]'); 
    }

    // Tampilkan badge tanggal dan jam di sebelah kanan
    const timeBadge = activeSuratElement.querySelector('.surat-time-badge');
    if (timeBadge) {
        timeBadge.querySelector('.date-text').innerText = currentDate;
        timeBadge.querySelector('.time-text').innerText = currentTime;
        timeBadge.classList.remove("hidden");
    }

    // Update progress bar kartu juz terkait
    const cardBox = activeSuratElement.closest('.juz-card-box');
    if (cardBox) {
        const totalSurahs = cardBox.querySelectorAll('.surah-card').length;
        const completedSurahs = cardBox.querySelectorAll('.surah-card.completed').length;
        const percent = Math.round((completedSurahs / totalSurahs) * 100);

        const percentText = cardBox.querySelector('.progress-text');
        const progressBar = cardBox.querySelector('.progress-bar-fill');

        if (percentText) percentText.innerText = `${percent}%`;
        if (progressBar) progressBar.style.width = `${percent}%`;
    }
    
    showWhatsappModal(activeJuzTarget.juzNumber, activeJuzTarget.suratInfo, currentDate, currentTime);
});

// 2. Fungsi memunculkan format ucapan selamat untuk Grup WhatsApp (Dilengkapi Jam & Link)
function showWhatsappModal(juzNumber, suratInfo, dateStr, timeStr) {
    const waModal = document.getElementById("whatsappModal");
    const waTextArea = document.getElementById("waMessageText");
    const sendWaBtn = document.getElementById("sendWaBtn");

    const userName = window.currentUserName || "Alumni";
    const websiteLink = window.location.href; // Mengambil link halaman web saat ini secara dinamis

    // Susun teks ucapan lengkap dengan Jam dan Link Website
    const message = `✨ *LAPORAN TILAWAH OWOJ* ✨\n` +
                    `Ika SMAN 11 Bandung Angkatan '98\n\n` +
                    `Alhamdulillah, saya *${userName}* telah menyelesaikan:\n` +
                    `📖 *Juz ${juzNumber}* (${suratInfo})\n` +
                    `📅 Tanggal: ${dateStr} pukul ${timeStr}\n\n` +
                    `_Barakallahu fiikum, semoga istiqomah dan membawa keberkahan._ 🤲\n\n` +
                    `🔍 Cek progres selengkapnya di sini:\n${websiteLink}`;

    waTextArea.value = message;

    // Buat link intent WhatsApp
    const encodedMessage = encodeURIComponent(message);
    sendWaBtn.href = `https://api.whatsapp.com/send?text=${encodedMessage}`;

    waModal.classList.remove("hidden");
    waModal.classList.add("flex");
}

window.closeWaModal = function() {
    const waModal = document.getElementById("whatsappModal");
    waModal.classList.remove("flex");
    waModal.classList.add("hidden");
};