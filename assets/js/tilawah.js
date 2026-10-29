/* ==========================================
   OWOJ TILAWAH DASHBOARD ENGINE - FULL SYNC
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

let officialStartDate = null;
let allDbAlumni = [];
let assignedParticipants = [];
let currentUserRole = "member";
let cachedAuthUser = null;
let cachedNamaPanggilan = "";
let activeJuzTarget = null;
let activeSuratElement = null;
let generatedReportImageUrl = "";

function getElapsedWeeks() {
    if (!officialStartDate) return 0;
    const now = new Date();
    const start = new Date(officialStartDate);
    if (now < start) return 0;
    const diffTime = now - start;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
}

function getJuzForIndex(index) {
    const elapsedWeeks = getElapsedWeeks();
    return ((index + elapsedWeeks) % 30) + 1;
}

window.switchTab = function(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.tab-btn-bar').forEach(btn => btn.classList.remove('active'));

    const activeTab = document.getElementById(tabId);
    if (activeTab) activeTab.classList.remove('hidden');

    const btn = document.getElementById('btn' + tabId.charAt(0).toUpperCase() + tabId.slice(1));
    if (btn) btn.classList.add('active');

    // Jika tab Progres Mingguan dibuka, render ulang color wheel agar akurat
    if (tabId === 'tab3') {
        renderColorWheel();
    }
};

window.initTilawahDashboard = async function(user, namaPanggilan) {
    cachedAuthUser = user;
    cachedNamaPanggilan = namaPanggilan || (user && user.email ? user.email.split('@')[0] : "");

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

            const configDoc = await getDoc(doc(window.firebaseDb, "settings", "tilawah_config"));
            if (configDoc.exists()) {
                officialStartDate = configDoc.data().startDate || null;
            }

            const alumniSnap = await getDocs(collection(window.firebaseDb, "alumni"));
            allDbAlumni = [];
            alumniSnap.forEach(d => allDbAlumni.push({ id: d.id, ...d.data() }));

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
    renderTilawahTabs();
    renderActiveJuzCards(user);
    
    const currentWeek = getElapsedWeeks() + 1;
    await loadExistingReports(currentWeek);

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

function renderTab1Participants() {
    const tbody = document.getElementById("participantTableBody");
    if (!tbody) return;

    if (assignedParticipants.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="p-8 text-center text-slate-500">Belum ada peserta tilawah yang terdaftar.</td></tr>`;
        return;
    }

    const elapsedWeeks = getElapsedWeeks();
    const isPowerUser = currentUserRole === "admin" || currentUserRole === "super_admin";

    tbody.innerHTML = assignedParticipants.map((p, idx) => {
        const assignedJuz = ((idx + elapsedWeeks) % 30) + 1;
        const namaPanggilan = (p.namaPanggilan || "Alumni").toUpperCase();
        const namaLengkap = p.namaLengkap || "-";

        return `
            <tr class="hover:bg-slate-800/40 transition">
                <td class="p-3.5 font-bold text-slate-400">${idx + 1}</td>
                <td class="p-3.5 font-semibold text-amber-400">${namaPanggilan}</td>
                <td class="p-3.5 text-slate-300">${namaLengkap}</td>
                <td class="p-3.5 text-center">
                    <span class="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
                        JUZ ${assignedJuz}
                    </span>
                </td>
                <td class="p-3.5 text-center">
                    ${isPowerUser ? `
                        <button onclick="removeParticipant(${idx})" class="text-rose-400 hover:text-rose-300 transition text-xs font-bold px-2 py-1 bg-rose-500/10 rounded-lg border border-rose-500/20">
                            <i class="fa-solid fa-trash mr-1"></i> Hapus
                        </button>
                    ` : `<span class="text-slate-500 text-xs">Peserta OWOJ</span>`}
                </td>
            </tr>
        `;
    }).join("");
}

window.triggerStartOwoj = async function() {
    if (!confirm("Yakin ingin memulai program OWOJ? Tanggal resmi Pekan ke-1 akan dikunci pada hari Senin terdekat.")) return;

    const now = new Date();
    const day = now.getDay();
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

function renderTilawahTabs() {
    const totalParticipants = assignedParticipants.length;
    const totalGroups = Math.max(1, Math.ceil(totalParticipants / 30));
    const container = document.getElementById('tilawahTabsContainer');
    
    if (!container) return;

    if (totalParticipants <= 30) {
        container.innerHTML = '';
        return;
    }

    let html = '';
    for (let i = 1; i <= totalGroups; i++) {
        const isActive = (window.currentTilawahGroup || 1) === i;
        html += `
            <button onclick="switchTilawahGroup(${i})" class="px-4 py-2 rounded-xl text-xs font-bold transition ${isActive ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}" data-group="${i}">
                LIQO TILAWAH ${i}
            </button>
        `;
    }
    container.innerHTML = html;
}

window.switchTilawahGroup = function(groupNum) {
    window.currentTilawahGroup = groupNum;
    renderTilawahTabs();
    renderActiveJuzCards(cachedAuthUser);
};

function renderActiveJuzCards(currentUser) {
    const container = document.getElementById("juzGrid30Container");
    if (!container) return;

    container.innerHTML = "";

    if (assignedParticipants.length === 0) {
        container.innerHTML = `<div class="col-span-full p-12 text-center text-slate-500 bg-slate-900/50 rounded-2xl border border-slate-800">Belum ada kartu Juz yang ditampilkan karena peserta tilawah masih kosong.</div>`;
        return;
    }

    const currentGroup = window.currentTilawahGroup || 1;
    const startIndex = (currentGroup - 1) * 30;
    const endIndex = startIndex + 30;
    const groupParticipants = assignedParticipants.slice(startIndex, endIndex);

    const loggedInUid = currentUser ? String(currentUser.uid).trim() : "";
    const loggedInPanggilan = cachedNamaPanggilan ? cachedNamaPanggilan.toUpperCase() : "";

    groupParticipants.forEach((participant, idx) => {
        const index = startIndex + idx;
        const assignedJuz = getJuzForIndex(index);
        const surahs = QURAN_JUZ_DATA[assignedJuz] || [];
        const assignedName = (participant.namaPanggilan || "ALUMNI").toUpperCase();
        const ownerId = participant.id || participant.uid || participant.userId || "";

        let isUserAssigned = false;
        if (currentUser) {
            const isUidMatch = ownerId && ownerId === loggedInUid;
            const isNameMatch = assignedName.includes("DEDEN") || (loggedInPanggilan && assignedName.includes(loggedInPanggilan));
            isUserAssigned = isUidMatch || isNameMatch;
        }

        let bgClass = (assignedJuz % 2 !== 0) ? 'juz-card-bg-dark' : 'juz-card-bg-lite';
        if (isUserAssigned) {
            bgClass = 'juz-card-bg-gold';
        }

        const card = document.createElement("div");
        card.className = `juz-card-box ${bgClass} ${isUserAssigned ? 'user-assigned' : ''}`;
        card.id = `juz-btn-${assignedJuz}`;

        // Nama Panggilan: Kotak Gold -> #3b3e3f (abu-abu), Kotak Gelap -> #fbbf24 (gold)
        const nameColorClass = isUserAssigned ? 'text-[#3b3e3f]' : 'text-[#fbbf24]';

        // 2. Nomor Urut / Pekan: Kotak Gold -> #ffffff (putih), Kotak Gelap -> #8698b5
        const metaColorClass = isUserAssigned ? 'text-[#ffffff]' : 'text-[#8698b5]';

        // 3. Teks "Progres Bacaan Pekan Ini": Kotak Gold -> #ffffff (putih), Kotak Gelap -> #8698b5
        const progressLabelColorClass = isUserAssigned ? 'text-[#ffffff]' : 'text-[#8698b5]';

        let htmlContent = `
            <div>
                <div class="flex justify-between items-start mb-2">
                    <h2 class="text-3xl md:text-4xl font-extralight tracking-tight ${isUserAssigned ? 'text-[#ffffff]' : 'text-[#8698b5]'}">JUZ ${assignedJuz}</h2>
                    <div class="text-[12px] opacity-90 font-bold text-right ${metaColorClass}">
                        <div>Nomor Urut: ${index + 1}</div>
                        <div>Pekan ke-${getElapsedWeeks() + 1}</div>
                    </div>
                </div>
                <h3 class="text-xl font-bold mb-4 tracking-wide ${nameColorClass}">${assignedName}</h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        `;

        surahs.forEach((s) => {
            const safeSurahName = s.name.replace(/'/g, "\\'");

            // Tentukan class warna teks awal berdasarkan apakah kartu tersebut milik user aktif (gold) atau bukan
const initialTextColorClass = isUserAssigned ? "text-[#d1ae55]" : "text-[#8698b5]";

htmlContent += `
    <div class="surah-card relative overflow-hidden cursor-pointer transition p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-amber-400/50 flex items-center justify-between" onclick="handleSurahCardClick(${assignedJuz}, '${safeSurahName}', '${s.ayat}', this, '${ownerId}', '${assignedName}')">
        <div class="flex items-center gap-3.5 w-full relative z-10">
            <div class="surah-number font-black text-3xl shrink-0 text-center ${initialTextColorClass}">${s.no}</div>
            <div class="surah-info truncate w-full">
                <div class="font-bold truncate text-[15px] surah-title ${initialTextColorClass}">${s.name}</div>
                <div class="text-[11px] opacity-80 surah-ayat ${initialTextColorClass}">ayat ${s.ayat}</div>
            </div>
        </div>
        <div class="surat-time-badge hidden shrink-0 text-right pl-3 border-l border-slate-300/40 ml-2 relative z-10">
            <div class="text-[11px] font-extrabold tracking-wide text-red-500 mb-0.5 done-text">SELESAI</div>
            <div class="text-[11px] font-bold date-text ${initialTextColorClass}"></div>
            <div class="text-[10px] font-medium time-text ${initialTextColorClass}"></div>
        </div>
    </div>
`;
        });


        htmlContent += `
        </div>
    </div>

    <div class="space-y-1 pt-2 border-t ${isUserAssigned ? 'border-[#0f172a]/30' : 'border-white/20'}">
        <div class="flex justify-between text-[12px] font-semibold opacity-90">
            <span class="${progressLabelColorClass}">Progres Bacaan Pekan Ini</span>
            <span class="${isUserAssigned ? 'text-[#ffffff]' : 'text-amber-400'} font-bold progress-text">0%</span>
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

// ==========================================
// LOGIKA HAK AKSES KLIK SURAT, REPORT & FIREBASE
// ==========================================
window.handleSurahCardClick = function(assignedJuz, surahName, suratAyat, element, juzOwnerId, juzOwnerName) {
    if (!cachedAuthUser) {
        alert("Silakan sign in terlebih dahulu.");
        return;
    }

    const currentUserId = String(cachedAuthUser.uid).trim();
    const targetOwnerId = String(juzOwnerId).trim();
    const role = currentUserRole || "member";
    const loggedInPanggilan = cachedNamaPanggilan ? cachedNamaPanggilan.toUpperCase() : "";

    const isOwnerById = targetOwnerId && (currentUserId === targetOwnerId);
    const ownerNameUpper = juzOwnerName ? juzOwnerName.toUpperCase() : "";
    
    const isOwnerByName = ownerNameUpper.includes("DEDEN") || 
                          (loggedInPanggilan && ownerNameUpper.includes(loggedInPanggilan)) ||
                          (loggedInPanggilan && loggedInPanggilan.includes(ownerNameUpper));
    const isSuperAdmin = (role === "super_admin");

    if (!isOwnerById && !isOwnerByName && !isSuperAdmin) {
        return;
    }

    const isAlreadyCompleted = element.classList.contains("completed");
    if (isAlreadyCompleted) {
        const confirmUnreport = confirm("Apakah anda ingin menghapus report bacaan anda?");
        if (confirmUnreport) {
            executeUnreportSurah(assignedJuz, surahName, element);
        }
        return;
    }

    triggerReportTilawah(assignedJuz, surahName, suratAyat, element);
};

window.triggerReportTilawah = function(juzNumber, suratName, suratAyat, element) {
    activeJuzTarget = { juzNumber, suratName, suratAyat };
    activeSuratElement = element;
    
    const modalText = document.getElementById("confirmReportText");
    if (modalText) {
        modalText.innerHTML = `Apakah anda benar-benar sudah menyelesaikan bacaan surat <b>"${suratName} (ayat ${suratAyat})"</b>?`;
    }
    
    const confirmModal = document.getElementById("confirmReportModal");
    if (confirmModal) {
        confirmModal.classList.remove("hidden");
        confirmModal.classList.add("flex");
    }
};

document.getElementById("cancelReportBtn")?.addEventListener("click", () => {
    const confirmModal = document.getElementById("confirmReportModal");
    if (confirmModal) {
        confirmModal.classList.remove("flex");
        confirmModal.classList.add("hidden");
    }
    activeJuzTarget = null;
    activeSuratElement = null;
});

document.getElementById("yesReportBtn")?.addEventListener("click", async () => {
    if (!activeJuzTarget || !activeSuratElement) return;

    const confirmModal = document.getElementById("confirmReportModal");
    if (confirmModal) {
        confirmModal.classList.remove("flex");
        confirmModal.classList.add("hidden");
    }

    const optionsDate = { day: 'numeric', month: 'long', year: 'numeric' };
    const currentDate = new Date().toLocaleDateString('id-ID', optionsDate);
    
    const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: false };
    const currentTime = "jam : " + new Date().toLocaleTimeString('id-ID', optionsTime);

    applySurahCompletedVisual(activeSuratElement, currentDate, currentTime);

    const currentWeek = getElapsedWeeks() + 1;
    const juzNum = activeJuzTarget.juzNumber;
    const suratName = activeJuzTarget.suratName;

    try {
        if (window.firebaseDb) {
            const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
            const reportRef = doc(window.firebaseDb, "tilawah_reports", `pekan_${currentWeek}_juz_${juzNum}`);
            
            await setDoc(reportRef, {
                pekan: currentWeek,
                juz: juzNum,
                surat: suratName,
                userId: cachedAuthUser ? cachedAuthUser.uid : "",
                nama: cachedNamaPanggilan,
                tanggal: currentDate,
                waktu: currentTime,
                timestamp: new Date().toISOString()
            }, { merge: true });
        }
    } catch (err) {
        console.error("Gagal menyimpan report ke Firebase:", err);
    }
    
    showWhatsappModal(activeJuzTarget.juzNumber, activeJuzTarget.suratName, currentDate, currentTime);
});

function applySurahCompletedVisual(element, dateStr, timeStr) {
    element.classList.add("completed");

    const cardBox = element.closest('.juz-card-box');
    const isGoldCard = cardBox && cardBox.classList.contains('user-assigned');

    if (isGoldCard) {
        element.classList.remove("completed-dark");
        element.classList.add("completed-gold");
        // Kotak Gold (Aktif) tetap putih dengan teks gold
        element.style.backgroundColor = "#ffffff";
        element.style.borderColor = "#ffffff";
        
        const titleEl = element.querySelector('.surah-title');
        const subTitleEl = element.querySelector('.surah-ayat');
        const numEl = element.querySelector('.surah-number');
        if (titleEl) titleEl.style.color = "#d1ae55";
        if (subTitleEl) titleEl.style.color = "#d1ae55";
        if (numEl) numEl.style.color = "#d1ae55";
    } else {
        element.classList.remove("completed-gold");
        element.classList.add("completed-dark");
        // Kosongkan inline style agar sepenuhnya dikendalikan oleh class .completed-dark di CSS
        element.style.backgroundColor = "";
        element.style.borderColor = "";
    }

    const timeBadge = element.querySelector('.surat-time-badge');
    if (timeBadge) {
        timeBadge.querySelector('.date-text').innerText = dateStr;
        timeBadge.querySelector('.time-text').innerText = timeStr;
        timeBadge.classList.remove("hidden");

        if (isGoldCard) {
            timeBadge.style.borderColor = "rgba(209, 174, 85, 0.4)";
            const dateTextEl = timeBadge.querySelector('.date-text');
            const timeTextEl = timeBadge.querySelector('.time-text');
            if (dateTextEl) dateTextEl.style.color = "#d1ae55";
            if (timeTextEl) timeTextEl.style.color = "#d1ae55";
        }
    }

    if (cardBox) {
        const totalSurahs = cardBox.querySelectorAll('.surah-card').length;
        const completedSurahs = cardBox.querySelectorAll('.surah-card.completed').length;
        const percent = Math.round((completedSurahs / totalSurahs) * 100);

        const percentText = cardBox.querySelector('.progress-text');
        const progressBar = cardBox.querySelector('.progress-bar-fill');

        if (percentText) percentText.innerText = `${percent}%`;
        if (progressBar) progressBar.style.width = `${percent}%`;
    }
}

async function loadExistingReports(currentWeek) {
    if (!window.firebaseDb) return;
    try {
        const { collection, getDocs, query, where } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
        const q = query(collection(window.firebaseDb, "tilawah_reports"), where("pekan", "==", currentWeek));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((docSnap) => {
            const data = docSnap.data();
            const juzCard = document.getElementById(`juz-btn-${data.juz}`);
            if (juzCard) {
                const surahCards = juzCard.querySelectorAll('.surah-card');
                surahCards.forEach((sc) => {
                    const title = sc.querySelector('.surah-title')?.innerText.trim();
                    if (title === data.surat.trim()) {
                        applySurahCompletedVisual(sc, data.tanggal, data.waktu);
                    }
                });
            }
        });
    } catch (err) {
        console.error("Gagal memuat riwayat report:", err);
    }
}

async function generateReportImage(juzNumber, suratName, dateStr, timeStr, userName, websiteLink) {
    return new Promise((resolve) => {
        const canvas = document.getElementById("reportCanvas");
        if (!canvas) {
            resolve(null);
            return;
        }
        const ctx = canvas.getContext("2d");

        const bgImg = new Image();
        bgImg.crossOrigin = "anonymous";
        bgImg.src = "assets/images/back-report-tilawah.webp";

        bgImg.onload = function () {
            ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

            ctx.textAlign = "center";
            ctx.fillStyle = "#1e293b";

            ctx.font = "500 36px sans-serif";
            ctx.fillStyle = "#334155";
            ctx.fillText("Alhamdulillah, saya", canvas.width / 2, 750);

            ctx.font = "bold 52px sans-serif";
            ctx.fillStyle = "#0f172a";
            ctx.fillText(userName, canvas.width / 2, 820);

            ctx.font = "500 36px sans-serif";
            ctx.fillStyle = "#334155";
            ctx.fillText("telah menyelesaikan:", canvas.width / 2, 885);

            ctx.font = "bold 56px sans-serif";
            ctx.fillStyle = "#0f172a";
            ctx.fillText(`Juz ${juzNumber} (${suratName})`, canvas.width / 2, 995);

            ctx.font = "400 36px sans-serif";
            ctx.fillStyle = "#334155";
            ctx.fillText(`Tanggal: ${dateStr}`, canvas.width / 2, 1075);
            ctx.fillText(`Jam : ${timeStr.replace('jam : ', '')}`, canvas.width / 2, 1135);

            ctx.font = "500 34px sans-serif";
            ctx.fillStyle = "#1e293b";
            ctx.fillText("Barakallahu fiikum,", canvas.width / 2, 1270);
            ctx.fillText("semoga istiqomah dan membawa keberkahan.", canvas.width / 2, 1325);

            ctx.font = "400 28px sans-serif";
            ctx.fillStyle = "#64748b";
            ctx.fillText("Cek progres selengkapnya di sini:", canvas.width / 2, 1435);

            ctx.font = "bold 32px sans-serif";
            ctx.fillStyle = "#0f172a";
            ctx.fillText(websiteLink.replace(/^https?:\/\//, ''), canvas.width / 2, 1485);

            const dataUrl = canvas.toDataURL("image/webp", 0.95);
            resolve(dataUrl);
        };

        bgImg.onerror = function() {
            console.error("Gagal memuat background report image.");
            resolve(null);
        };
    });
}

async function showWhatsappModal(juzNumber, suratName, dateStr, timeStr) {
    const waModal = document.getElementById("whatsappModal");
    const sendWaBtn = document.getElementById("sendWaBtn");

    const userName = cachedNamaPanggilan.toUpperCase() || "ALUMNI";
    const websiteLink = window.location.href;

    generatedReportImageUrl = await generateReportImage(juzNumber, suratName, dateStr, timeStr, userName, websiteLink);

    const message = "✨ LAPORAN TILAWAH OWOJ ✨\n" +
                    "Ika SMAN 11 Bandung Angkatan '98\n\n" +
                    "Alhamdulillah, saya *" + userName + "* telah menyelesaikan:\n" +
                    "📖 *Juz " + juzNumber + "* (" + suratName + ")\n" +
                    "📅 Tanggal: " + dateStr + " pukul " + timeStr + "\n\n" +
                    "Barakallahu fiikum, semoga istiqomah dan membawa keberkahan. 🤲\n\n" +
                    "🔍 Cek progres selengkapnya di sini:\n" +
                    "- " + websiteLink;

    const encodedMessage = encodeURIComponent(message);
    if (sendWaBtn) {
        sendWaBtn.href = "https://api.whatsapp.com/send?text=" + encodedMessage;
    }

    if (waModal) {
        waModal.classList.remove("hidden");
        waModal.classList.add("flex");
    }
}

window.handleSendWhatsAppAndClose = function() {
    if (generatedReportImageUrl) {
        const downloadLink = document.createElement("a");
        downloadLink.href = generatedReportImageUrl;
        downloadLink.download = `Laporan_Juz_${activeJuzTarget ? activeJuzTarget.juzNumber : 'OWOJ'}_${cachedNamaPanggilan.toUpperCase()}.webp`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    const waModal = document.getElementById("whatsappModal");
    if (waModal) {
        waModal.classList.remove("flex");
        waModal.classList.add("hidden");
    }
};

window.closeWaModal = function() {
    const waModal = document.getElementById("whatsappModal");
    if (waModal) {
        waModal.classList.remove("flex");
        waModal.classList.add("hidden");
    }
};

window.saveParticipantToSlot = async function() {
    const selectEl = document.getElementById("alumniDbSelect");
    if (!selectEl) return;
    const alumniId = selectEl.value;

    if (!alumniId) {
        alert("Silakan pilih alumni terlebih dahulu!");
        return;
    }

    const selected = allDbAlumni.find(a => a.id === alumniId);
    if (selected) {
        if (assignedParticipants.some(p => p.id === selected.id)) {
            alert("Alumni ini sudah terdaftar sebagai peserta OWOJ!");
            return;
        }

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
    renderTilawahTabs();
    renderActiveJuzCards(cachedAuthUser);
};

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
    renderTilawahTabs();
    renderActiveJuzCards(cachedAuthUser);
};

// ==========================================
// COLOR WHEEL DYNAMIC PROGRES MINGGUAN (MULTI-KELOMPOK LIQO)
// ==========================================
function renderColorWheel() {
    const container = document.getElementById('tab3') || document.querySelector('#tab3 .space-y-8');
    if (!container) return;

    // Cari atau buat wadah utama untuk menampung roda progres (bisa lebih dari 1 jika ada Liqo 2, 3, dst.)
    let wheelsWrapper = document.getElementById('colorWheelsDynamicWrapper');
    if (!wheelsWrapper) {
        wheelsWrapper = document.createElement('div');
        wheelsWrapper.id = 'colorWheelsDynamicWrapper';
        wheelsWrapper.className = 'space-y-12';
        
        // Sisipkan sebelum kotak info hover
        const hoverInfo = document.getElementById('wheelHoverInfo');
        const parentBox = hoverInfo ? hoverInfo.parentNode : container;
        parentBox.insertBefore(wheelsWrapper, hoverInfo);
    }

    wheelsWrapper.innerHTML = '';

    // Hitung jumlah kelompok liqo berdasarkan total peserta (1 kelompok = 30 peserta)
    const totalParticipants = assignedParticipants.length;
    const totalGroups = Math.max(1, Math.ceil(totalParticipants / 30));

    const currentWeekNum = getElapsedWeeks() + 1;
    
    // Ambil nama bulan dan tahun saat ini dalam Bahasa Indonesia
    const monthsName = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const now = new Date();
    const currentMonthStr = monthsName[now.getMonth()];
    const currentYearStr = now.getFullYear();

    // Loop pembuatan roda warna untuk setiap Kelompok Liqo Tilawah
    for (let g = 1; g <= totalGroups; g++) {
        const groupCardBox = document.createElement('div');
        groupCardBox.className = 'bg-slate-900/90 border border-slate-800 rounded-2xl p-6 text-center space-y-4 max-w-xl mx-auto shadow-xl';

        // Judul & Sub-judul per Kelompok
        groupCardBox.innerHTML = `
            <div>
                <h2 class="text-2xl font-extrabold text-amber-400">One Week One Juz Progress</h2>
                <p class="text-xs text-slate-400 mt-1">Status Capaian Tilawah 30 Juz Liqo Tilawah ${g} Pekan Ke-${currentWeekNum}, Bulan ${currentMonthStr}, Tahun ${currentYearStr}</p>
            </div>
            <div class="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center p-2">
                <svg id="colorWheelSvg_${g}" viewBox="0 0 500 500" class="w-full h-full drop-shadow-2xl"></svg>
                <div class="absolute inset-0 m-auto w-28 h-28 md:w-36 md:h-36 bg-slate-950/95 rounded-full border-2 border-amber-500/30 flex flex-col items-center justify-center p-2 text-center backdrop-blur-md shadow-inner">
                    <span id="wheelTotalPercent_${g}" class="text-2xl md:text-3xl font-black text-amber-400">0%</span>
                    <span class="text-[9px] md:text-[10px] text-slate-300 font-semibold mt-0.5">Total Khatam/minggu</span>
                </div>
            </div>
        `;

        wheelsWrapper.appendChild(groupCardBox);

        // Render SVG Color Wheel untuk kelompok ke-g
        const svg = document.getElementById(`colorWheelSvg_${g}`);
        if (!svg) continue;

        const cx = 250, cy = 250, rOuter = 210, rInner = 45; // Lingkaran tengah diperkecil lagi (rInner = 45)
        const totalSlices = 30;
        let totalAccumulatedPercent = 0;

        const startIndex = (g - 1) * 30;

        for (let i = 0; i < totalSlices; i++) {
            const juzNum = i + 1;
            const globalParticipantIdx = startIndex + i;
            
            // Cek apakah slot peserta ada & hitung progresnya
            const juzCard = document.getElementById(`juz-btn-${juzNum}`);
            let percent = 0;
            
            // Jika kelompok > 1, kita cek card berdasarkan rentang grup
            const targetJuzCard = (g === 1) ? document.getElementById(`juz-btn-${juzNum}`) : document.querySelectorAll('.juz-card-box')[startIndex + i];
            
            if (targetJuzCard) {
                const totalSurahs = targetJuzCard.querySelectorAll('.surah-card').length;
                const completedSurahs = targetJuzCard.querySelectorAll('.surah-card.completed').length;
                if (totalSurahs > 0) {
                    percent = Math.round((completedSurahs / totalSurahs) * 100);
                }
            }
            totalAccumulatedPercent += percent;

            const startAngle = (i * 360 / totalSlices) - 90;
            const endAngle = ((i + 1) * 360 / totalSlices) - 90;
            const midAngle = (startAngle + endAngle) / 2;

            const hue = (i * 360 / 30);
            const baseColor = `hsl(${hue}, 85%, 50%)`;

            // 1. Kelopak Background
            const x1 = cx + rOuter * Math.cos(Math.PI * startAngle / 180);
            const y1 = cy + rOuter * Math.sin(Math.PI * startAngle / 180);
            const x2 = cx + rOuter * Math.cos(Math.PI * endAngle / 180);
            const y2 = cy + rOuter * Math.sin(Math.PI * endAngle / 180);
            const x3 = cx + rInner * Math.cos(Math.PI * endAngle / 180);
            const y3 = cy + rInner * Math.sin(Math.PI * endAngle / 180);
            const x4 = cx + rInner * Math.cos(Math.PI * startAngle / 180);
            const y4 = cy + rInner * Math.sin(Math.PI * startAngle / 180);

            const bgPathData = `M ${x1} ${y1} A ${rOuter} ${rOuter} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 0 0 ${x4} ${y4} Z`;
            
            const bgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            bgPath.setAttribute("d", bgPathData);
            bgPath.setAttribute("fill", baseColor);
            bgPath.setAttribute("opacity", "0.15");
            svg.appendChild(bgPath);

            // 2. Batang Progres Dinamis Sesuai Persentase (%)
            if (percent > 0) {
                const dynamicRadius = rInner + ((rOuter - rInner) * (percent / 100));
                const dx1 = cx + dynamicRadius * Math.cos(Math.PI * startAngle / 180);
                const dy1 = cy + dynamicRadius * Math.sin(Math.PI * startAngle / 180);
                const dx2 = cx + dynamicRadius * Math.cos(Math.PI * endAngle / 180);
                const dy2 = cy + dynamicRadius * Math.sin(Math.PI * endAngle / 180);

                const fillPathData = `M ${dx1} ${dy1} A ${dynamicRadius} ${dynamicRadius} 0 0 1 ${dx2} ${dy2} L ${x3} ${y3} A ${rInner} ${rInner} 0 0 0 ${x4} ${y4} Z`;
                
                const fillPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                fillPath.setAttribute("d", fillPathData);
                fillPath.setAttribute("fill", baseColor);
                fillPath.setAttribute("class", "wheel-slice transition-all duration-300");
                svg.appendChild(fillPath);

                // Angka persentase di ujung batang progres kelopak
                const textProgRadius = dynamicRadius - 14;
                const tpx = cx + textProgRadius * Math.cos(Math.PI * midAngle / 180);
                const tpy = cy + textProgRadius * Math.sin(Math.PI * midAngle / 180);

                const progText = document.createElementNS("http://www.w3.org/2000/svg", "text");
                progText.setAttribute("x", tpx);
                progText.setAttribute("y", tpy);
                progText.setAttribute("fill", "#0f172a");
                progText.setAttribute("font-size", "9px");
                progText.setAttribute("font-weight", "bold");
                progText.setAttribute("text-anchor", "middle");
                progText.setAttribute("dominant-baseline", "central");
                progText.setAttribute("transform", `rotate(${midAngle + 90}, ${tpx}, ${tpy})`);
                progText.textContent = `${percent}%`;
                svg.appendChild(progText);
            }

            // 3. Nama/Nomor Juz di Luar Lingkaran (Warna disamakan dengan kelopaknya)
            const outTextRadius = rOuter + 18;
            const otx = cx + outTextRadius * Math.cos(Math.PI * midAngle / 180);
            const oty = cy + outTextRadius * Math.sin(Math.PI * midAngle / 180);

            const outText = document.createElementNS("http://www.w3.org/2000/svg", "text");
            outText.setAttribute("x", otx);
            outText.setAttribute("y", oty);
            outText.setAttribute("fill", baseColor);
            outText.setAttribute("font-size", "10px");
            outText.setAttribute("font-weight", "bold");
            outText.setAttribute("text-anchor", "middle");
            outText.setAttribute("dominant-baseline", "central");
            outText.setAttribute("transform", `rotate(${midAngle + 90}, ${otx}, ${oty})`);
            outText.textContent = `JUZ ${juzNum}`;
            svg.appendChild(outText);

            // Event Hover Info
            bgPath.addEventListener("mouseenter", () => {
                const hoverInfo = document.getElementById("wheelHoverInfo");
                if (hoverInfo) {
                    hoverInfo.innerHTML = `<strong>LIQO ${g} - JUZ ${juzNum}</strong> | Capaian: ${percent}% Selesai`;
                }
            });
        }

        // Set Persentase Rata-rata di Lingkaran Tengah
        const groupAveragePercent = Math.round(totalAccumulatedPercent / 30);
        const groupPercentEl = document.getElementById(`wheelTotalPercent_${g}`);
        if (groupPercentEl) {
            groupPercentEl.innerText = `${groupAveragePercent}%`;
        }
    }
}

// ==========================================
// INTEGRASI REAL-TIME LAPORAN TAHUNAN & LEADERBOARD
// ==========================================
async function updateYearlyStats() {
    const totalKhatamEl = document.getElementById("yearlyTotalKhatam");
    const disciplineRateEl = document.getElementById("yearlyDisciplineRate");
    const currentWeekNumEl = document.getElementById("yearlyCurrentWeekNum");
    const leaderboardBody = document.getElementById("yearlyLeaderboardBody");
    const earlyBirdsContainer = document.getElementById("earlyBirdsContainer");

    const currentWeek = getElapsedWeeks() + 1;
    if (currentWeekNumEl) currentWeekNumEl.innerText = `Pekan ${currentWeek}`;

    if (!window.firebaseDb) return;

    try {
        const { collection, getDocs } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
        const snap = await getDocs(collection(window.firebaseDb, "tilawah_reports"));

        const reports = [];
        const userReportCount = {};
        const earlyBirdCount = {};

        snap.forEach(docSnap => {
            const data = docSnap.data();
            reports.push(data);

            const userName = (data.nama || "Alumni").toUpperCase();
            userReportCount[userName] = (userReportCount[userName] || 0) + 1;

            // Cek apakah laporan dilakukan di hari Senin/Selasa (Early Birds)
            if (data.timestamp) {
                const reportDate = new Date(data.timestamp);
                const day = reportDate.getDay(); // 1 = Senin, 2 = Selasa
                if (day === 1 || day === 2) {
                    earlyBirdCount[userName] = (earlyBirdCount[userName] || 0) + 1;
                }
            }
        });

        // 1. Hitung Total Khatam Angkatan (Setiap 30 Juz selesai dalam 1 pekan)
        const weekJuzCompleted = {};
        reports.forEach(r => {
            const key = `pekan_${r.pekan}_juz_${r.juz}`;
            weekJuzCompleted[key] = true;
        });

        let totalKhatamCount = 0;
        for (let w = 1; w <= currentWeek; w++) {
            let juzInWeekCount = 0;
            for (let j = 1; j <= 30; j++) {
                if (weekJuzCompleted[`pekan_${w}_juz_${j}`]) {
                    juzInWeekCount++;
                }
            }
            if (juzInWeekCount === 30) totalKhatamCount++;
        }

        if (totalKhatamEl) totalKhatamEl.innerText = `${totalKhatamCount} Kali`;

        // 2. Hitung Tingkat Disiplin Angkatan (Rasio Surat Selesai vs Target Laporan)
        const totalTargetReports = assignedParticipants.length * 30 * currentWeek; // estimasi total kapasitas
        const totalActualReports = reports.length;
        const disciplinePercent = totalTargetReports > 0 ? Math.min(100, Math.round((totalActualReports / Math.max(1, assignedParticipants.length * currentWeek)) * 100)) : 0;

        if (disciplineRateEl) disciplineRateEl.innerText = `${disciplinePercent}%`;

        // 3. Render Leaderboard Peserta Paling Rajin
        const sortedLeaderboard = Object.entries(userReportCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);

        if (leaderboardBody) {
            if (sortedLeaderboard.length === 0) {
                leaderboardBody.innerHTML = `<tr><td colspan="4" class="py-6 text-center text-slate-500">Belum ada riwayat laporan yang masuk.</td></tr>`;
            } else {
                const badges = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'];
                leaderboardBody.innerHTML = sortedLeaderboard.map(([name, count], idx) => `
                    <tr class="hover:bg-slate-900/50 transition">
                        <td class="py-2.5 font-bold text-amber-400">${badges[idx] || idx + 1} Rank ${idx + 1}</td>
                        <td class="py-2.5 font-semibold text-white">${name}</td>
                        <td class="py-2.5 text-center font-bold text-emerald-400">${count} Surat</td>
                        <td class="py-2.5 text-right"><span class="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-md">Istiqomah</span></td>
                    </tr>
                `).join('');
            }
        }

        // 4. Render Early Birds
        const sortedEarlyBirds = Object.entries(earlyBirdCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3);

        if (earlyBirdsContainer) {
            if (sortedEarlyBirds.length === 0) {
                earlyBirdsContainer.innerHTML = `<div class="text-center py-4 text-slate-500 text-xs">Belum ada peserta yang melapor di awal pekan.</div>`;
            } else {
                earlyBirdsContainer.innerHTML = sortedEarlyBirds.map(([name, count]) => `
                    <div class="flex items-center justify-between bg-slate-900/80 border border-slate-800 p-2.5 rounded-xl">
                        <div class="flex items-center gap-2.5">
                            <div class="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-xs">
                                ⚡
                            </div>
                            <span class="text-xs font-bold text-slate-200">${name}</span>
                        </div>
                        <span class="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-lg border border-amber-500/20">${count}x Cepat</span>
                    </div>
                `).join('');
            }
        }

    } catch (err) {
        console.error("Gagal mengkalkulasi laporan tahunan:", err);
    }
}

// ==========================================
// FUNGSI PEMBATALAN LAPORAN (UNREPORT) & HAPUS DARI FIREBASE
// ==========================================
async function executeUnreportSurah(juzNumber, suratName, element) {
    element.classList.remove("completed", "completed-gold", "completed-dark");
    element.style.backgroundColor = "";
    element.style.borderColor = "";

    // Bersihkan inline style pada elemen teks agar kembali mengikuti aturan default CSS
    const titleEl = element.querySelector('.surah-title');
    const subTitleEl = element.querySelector('.surah-ayat');
    const numEl = element.querySelector('.surah-number');
    
    if (titleEl) titleEl.style.color = "";
    if (subTitleEl) subTitleEl.style.color = "";
    if (numEl) numEl.style.color = "";

    const timeBadge = element.querySelector('.surat-time-badge');
    if (timeBadge) {
        timeBadge.classList.add("hidden");
        timeBadge.style.borderColor = "";
        
        const dateTextEl = timeBadge.querySelector('.date-text');
        const timeTextEl = timeBadge.querySelector('.time-text');
        if (dateTextEl) dateTextEl.style.color = "";
        if (timeTextEl) timeTextEl.style.color = "";
    }

    const cardBox = element.closest('.juz-card-box');
    if (cardBox) {
        const totalSurahs = cardBox.querySelectorAll('.surah-card').length;
        const completedSurahs = cardBox.querySelectorAll('.surah-card.completed').length;
        const percent = Math.round((completedSurahs / totalSurahs) * 100);

        const percentText = cardBox.querySelector('.progress-text');
        const progressBar = cardBox.querySelector('.progress-bar-fill');

        if (percentText) percentText.innerText = `${percent}%`;
        if (progressBar) progressBar.style.width = `${percent}%`;
    }

    const currentWeek = getElapsedWeeks() + 1;
    try {
        if (window.firebaseDb) {
            const { doc, deleteDoc } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
            await deleteDoc(doc(window.firebaseDb, "tilawah_reports", `pekan_${currentWeek}_juz_${juzNumber}`));
        }
    } catch (err) {
        console.error("Gagal menghapus report dari Firebase:", err);
    }
}