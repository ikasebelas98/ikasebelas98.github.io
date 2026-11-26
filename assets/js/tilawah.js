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

// ==========================================
// KONFIGURASI PERIODE & ROTASI PEKAN (WIB / UTC+7)
// ==========================================
const DEFAULT_START_ISO = "2026-11-23T00:00:00+07:00";
const WIB_OFFSET_MS = 7 * 60 * 60 * 1000;
const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;
const BASE_PEKAN_PROGRAM = 24;
const JUZ_ROTATION_SHIFT = 0;

let cachedAuthUser = null;
let cachedNamaPanggilan = "";
let currentUserRole = "member";
let activeJuzTarget = null;
let activeSuratElement = null;
let generatedReportImageUrl = null;
let allDbAlumni = [];
let assignedParticipants = [];
let activeTabId = "tab2";
let isUserSuperAdmin = false;

let officialStartDate = DEFAULT_START_ISO;
let manualWeekOffset = 0;
let manualSlotJuzOverrides = {};

// Blueprint posisi slot Kelompok A (1..30) sesuai urutan acuan
const INITIAL_GROUP_A_BLUEPRINT = [
    { slotNumber: 3,  matchNames: ["NANA", "NANA OCIN"] },
    { slotNumber: 4,  matchNames: ["DELA"] },
    { slotNumber: 5,  matchNames: ["MPI"] },
    { slotNumber: 8,  matchNames: ["AHER"] },
    { slotNumber: 9,  matchNames: ["NOVI PIPI"] },
    { slotNumber: 10, matchNames: ["NINA"] },
    { slotNumber: 12, matchNames: ["GABY"] },
    { slotNumber: 15, matchNames: ["RERE"] },
    { slotNumber: 16, matchNames: ["ASEP"] },
    { slotNumber: 17, matchNames: ["WAWAN"] },
    { slotNumber: 19, matchNames: ["NITA"] },
    { slotNumber: 20, matchNames: ["DINNY/DINOT", "DINNY", "DINOT"] },
    { slotNumber: 21, matchNames: ["YEISSA"] },
    { slotNumber: 22, matchNames: ["KARIM"] },
    { slotNumber: 24, matchNames: ["UNIE"] },
    { slotNumber: 25, matchNames: ["IRA"] },
    { slotNumber: 26, matchNames: ["RINA/NA", "RINA", "NA"] },
    { slotNumber: 27, matchNames: ["ACHY"] },
    { slotNumber: 28, matchNames: ["REINY"] },
    { slotNumber: 29, matchNames: ["LITA"] },
    { slotNumber: 30, matchNames: ["IKE"] }
];

function getWibMondayStartMs(dateInput) {
    const baseMs = new Date(dateInput).getTime();
    if (Number.isNaN(baseMs)) return null;

    const wibDate = new Date(baseMs + WIB_OFFSET_MS);
    const utcDay = wibDate.getUTCDay();
    const diffToMonday = utcDay === 0 ? -6 : 1 - utcDay;

    const mondayWibMidnightUtcMs = Date.UTC(
        wibDate.getUTCFullYear(),
        wibDate.getUTCMonth(),
        wibDate.getUTCDate() + diffToMonday,
        0, 0, 0, 0
    );

    return mondayWibMidnightUtcMs - WIB_OFFSET_MS;
}

function getElapsedWeeks() {
    const startMondayMs = getWibMondayStartMs(officialStartDate || DEFAULT_START_ISO);
    const nowMondayMs = getWibMondayStartMs(Date.now());

    if (startMondayMs === null || nowMondayMs === null) {
        return Math.max(0, manualWeekOffset);
    }

    const rawWeeks = nowMondayMs < startMondayMs
        ? 0
        : Math.floor((nowMondayMs - startMondayMs) / MS_PER_WEEK);

    return Math.max(0, rawWeeks + manualWeekOffset);
}

function getActivePeriodRange() {
    const elapsed = getElapsedWeeks();
    const baseStartMondayMs = getWibMondayStartMs(officialStartDate || DEFAULT_START_ISO) ?? getWibMondayStartMs(DEFAULT_START_ISO);
    const startMs = baseStartMondayMs + (elapsed * MS_PER_WEEK);
    const finishMs = startMs + MS_PER_WEEK - 1000;
    const pekanProgram = BASE_PEKAN_PROGRAM + elapsed;
    const monthWeekInfo = getMonthWeekInfo(startMs);
    const mainLabel = `Periode ke-1 • Pekan ke-${pekanProgram} • ${monthWeekInfo.label}`;

    return {
        elapsed,
        pekanProgram,
        startMs,
        finishMs,
        monthWeekInfo,
        mainLabel
    };
}

function getJuzRotationStep() {
    return Math.max(0, getElapsedWeeks() + JUZ_ROTATION_SHIFT);
}

// Rotasi otomatis setiap Senin 00:00:00 WIB berdasarkan nomor slot dan pekan berjalan
function getJuzForSlotAndWeek(slotNumber) {
    const safeSlot = Math.max(1, Number(slotNumber) || 1);
    const zeroBasedSlot = (safeSlot - 1) % 30;
    const rotationStep = getJuzRotationStep();
    return ((zeroBasedSlot + rotationStep) % 30) + 1;
}

function getEffectiveJuzForSlot(slotNumber) {
    const period = getActivePeriodRange();
    const weekKey = `pekan_${period.elapsed + 1}`;
    const specificKey = `${weekKey}_slot_${slotNumber}`;

    const rawOverride = manualSlotJuzOverrides[specificKey];
    const parsed = Number(rawOverride);
    if (Number.isInteger(parsed) && parsed >= 1 && parsed <= 30) {
        return parsed;
    }

    return getJuzForSlotAndWeek(slotNumber);
}

function isPowerEditorUser(user, role) {
    const email = (user && user.email ? user.email : "").trim().toLowerCase();
    const panggilan = (cachedNamaPanggilan || "").trim().toUpperCase();
    const isAdminRole = role === "admin" || role === "super_admin" || isUserSuperAdmin;
    const isNanaOcin = panggilan.includes("NANA OCIN");
    const isAllowedEmail = email === "denzrusmana060f08@gmail.com";
    return Boolean(isAdminRole || isNanaOcin || isAllowedEmail);
}

window.updateSlotJuzInline = async function(slotNumber, _arrayIndex, newJuzValue) {
    if (!isPowerEditorUser(cachedAuthUser, currentUserRole)) {
        alert("Akses ditolak. Pengubahan langsung Juz di tabel khusus Admin, Nana Ocin, dan Super Admin.");
        return;
    }

    const juzNum = Number(newJuzValue);
    if (!Number.isInteger(juzNum) || juzNum < 1 || juzNum > 30) return;

    const period = getActivePeriodRange();
    const specificKey = `pekan_${period.elapsed + 1}_slot_${slotNumber}`;

    manualSlotJuzOverrides[specificKey] = juzNum;

    try {
        if (window.firebaseDb) {
            const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
            await setDoc(doc(window.firebaseDb, "settings", "tilawah_config"), {
                startDate: officialStartDate,
                manualOffset: manualWeekOffset,
                slotJuzOverrides: manualSlotJuzOverrides,
                updatedAt: new Date().toISOString()
            }, { merge: true });
        }
    } catch (err) {
        console.error("Gagal menyimpan perubahan Juz langsung:", err);
        alert("Gagal menyimpan perubahan Juz ke database.");
        return;
    }

    renderTab1Participants();
    renderActiveJuzCards(cachedAuthUser);
    await loadExistingReports(period.elapsed + 1);
    renderColorWheel();
};

function getSlotCodeByNumber(slotNumber) {
    const num = Number(slotNumber);
    if (!Number.isFinite(num) || num < 1) return "";
    if (num <= 30) return `A-${num}`;
    if (num <= 60) return `B-${num - 30}`;
    const groupIdx = Math.floor((num - 1) / 30);
    const codeNum = ((num - 1) % 30) + 1;
    return `G${groupIdx + 1}-${codeNum}`;
}

function getSlotCodeByIndex(index) {
    return getSlotCodeByNumber(Number(index) + 1);
}

function slotNumberToIndex(slotNumber) {
    return Number(slotNumber) - 1;
}

function getReportDocId(weekNum, juzNum, suratName, userId = "", slotCode = "") {
    const safeSurahId = String(suratName || "").replace(/[^a-zA-Z0-9]/g, "_");
    const cleanUid = String(userId || "").trim().replace(/[^a-zA-Z0-9_-]/g, "_");
    const cleanSlot = String(slotCode || "").trim().replace(/[^a-zA-Z0-9_-]/g, "_");
    const parts = [`pekan_${weekNum}`, `juz_${juzNum}`, `surat_${safeSurahId}`];
    if (cleanSlot) parts.push(`slot_${cleanSlot}`);
    if (cleanUid) parts.push(`user_${cleanUid}`);
    return parts.join("_");
}

window.switchTab = async function(tabId) {
    const validTabs = ["tab1", "tab2", "tab3", "tab4"];
    const targetTab = validTabs.includes(tabId) ? tabId : "tab2";
    activeTabId = targetTab;

    validTabs.forEach((id, idx) => {
        const panel = document.getElementById(id);
        const btn = document.getElementById(`btnTab${idx + 1}`);
        const isSelected = id === targetTab;

        if (panel) {
            panel.classList.toggle("hidden", !isSelected);
            panel.classList.toggle("block", isSelected);
        }

        if (btn) {
            btn.classList.toggle("active", isSelected);
        }
    });

    const period = getActivePeriodRange();
    const currentWeek = period.elapsed + 1;

    if (targetTab === "tab1") {
        updateBadgeStatus();
        renderTab1Participants();
    } else if (targetTab === "tab2") {
        renderTilawahTabs();
        renderActiveJuzCards(cachedAuthUser);
        await loadExistingReports(currentWeek);
    } else if (targetTab === "tab3") {
        renderColorWheel();
        await updateWeeklyFastFinishers();
    } else if (targetTab === "tab4") {
        await updateYearlyStats();
        await renderMonthlyRecapTable();
    }
};

function getMonthWeekInfo(ms = Date.now()) {
    const d = new Date(ms);
    const wib = new Date(d.getTime() + WIB_OFFSET_MS);
    const dayOfMonth = wib.getUTCDate();
    const weekOfMonth = Math.min(5, Math.max(1, Math.ceil(dayOfMonth / 7)));

    const monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"
    ];
    const monthName = monthNames[wib.getUTCMonth()] || "";
    const yearNum = wib.getUTCFullYear();

    return {
        weekOfMonth,
        monthName,
        yearNum,
        label: `Minggu ke-${weekOfMonth} bulan ${monthName} ${yearNum}`
    };
}

function formatWibDateId(ms) {
    const d = new Date(ms);
    const parts = new Intl.DateTimeFormat("id-ID", {
        timeZone: "Asia/Jakarta",
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }).formatToParts(d);

    const map = {};
    parts.forEach(p => { map[p.type] = p.value; });
    const monthFormatted = (map.month || "").replace(/^November$/i, "Nopember");
    return `${map.weekday}, ${map.day} ${monthFormatted} ${map.year}`;
}

function updateBadgeStatus() {
    const period = getActivePeriodRange();
    const startStr = formatWibDateId(period.startMs);
    const finishStr = formatWibDateId(period.finishMs);

    const badgeHtml = `
        <div class="leading-snug">
            <div>${period.mainLabel}</div>
            <div class="text-[11px] text-slate-300 font-normal">START: ${startStr}, PUKUL 00.00 WIB</div>
            <div class="text-[11px] text-slate-300 font-normal">FINISH: ${finishStr}, PUKUL 24.00 WIB</div>
        </div>
    `;

    const badgeA = document.getElementById("currentWeekBadge");
    if (badgeA) badgeA.innerHTML = badgeHtml;

    const badgeB = document.getElementById("currentWeekBadgeB");
    if (badgeB) badgeB.innerHTML = badgeHtml;

    const subA = document.getElementById("groupASubtitle");
    if (subA) subA.textContent = `Kode slot A-1 s.d. A-30 • ${period.mainLabel}`;

    const subB = document.getElementById("groupBSubtitle");
    if (subB) subB.textContent = `Kode slot B-1 s.d. B-30 • ${period.mainLabel}`;
}

async function refreshAllViewsAfterWeekChange() {
    const period = getActivePeriodRange();
    updateBadgeStatus();
    renderTab1Participants();
    renderTilawahTabs();
    renderActiveJuzCards(cachedAuthUser);
    await loadExistingReports(period.elapsed + 1);
    renderColorWheel();
    await updateYearlyStats();
    await renderMonthlyRecapTable();
    await updateWeeklyFastFinishers();
}

window.triggerNextWeek = async function() {
    if (!isUserSuperAdmin) {
        alert("Akses ditolak. Fitur ini khusus Super Admin.");
        return;
    }
    if (!confirm("Geser rotasi pekan ke depan secara manual? Data laporan mingguan lama Anda akan tetap aman.")) return;

    manualWeekOffset += 1;

    try {
        if (window.firebaseDb) {
            const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
            await setDoc(doc(window.firebaseDb, "settings", "tilawah_config"), {
                startDate: officialStartDate,
                manualOffset: manualWeekOffset,
                slotJuzOverrides: manualSlotJuzOverrides,
                updatedAt: new Date().toISOString()
            }, { merge: true });
        }
        alert("Berhasil digeser maju 1 Pekan!");
    } catch (err) {
        console.error("Gagal menyimpan offset manual:", err);
    }

    await refreshAllViewsAfterWeekChange();
};

window.triggerBackWeek = async function() {
    if (!isUserSuperAdmin) {
        alert("Akses ditolak. Fitur ini khusus Super Admin.");
        return;
    }
    if (!confirm("Kembalikan rotasi pekan ke sebelumnya secara manual?")) return;

    manualWeekOffset -= 1;

    try {
        if (window.firebaseDb) {
            const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
            await setDoc(doc(window.firebaseDb, "settings", "tilawah_config"), {
                startDate: officialStartDate,
                manualOffset: manualWeekOffset,
                slotJuzOverrides: manualSlotJuzOverrides,
                updatedAt: new Date().toISOString()
            }, { merge: true });
        }
        alert("Berhasil dikembalikan mundur 1 Pekan!");
    } catch (err) {
        console.error("Gagal menyimpan offset manual:", err);
    }

    await refreshAllViewsAfterWeekChange();
};

function adjustAdminButtonState() {
    const containers = [
        document.getElementById("adminActionButtons"),
        document.getElementById("adminActionButtonsB")
    ].filter(Boolean);

    if (containers.length === 0) return;

    const buttonMarkup = isUserSuperAdmin
        ? `
            <button type="button" onclick="triggerBackWeek()" class="bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs px-3 py-2 rounded-lg transition shadow-md flex items-center gap-1.5" title="Mundur 1 Pekan">
                <i class="fa-solid fa-backward-step"></i> Prev Week
            </button>
            <button type="button" onclick="triggerNextWeek()" class="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs px-3 py-2 rounded-lg transition shadow-md flex items-center gap-1.5" title="Maju 1 Pekan">
                <i class="fa-solid fa-forward-step"></i> Next Week
            </button>
            <button type="button" onclick="openManageModal()" class="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-3 py-2 rounded-lg transition shadow-md flex items-center gap-1.5">
                <i class="fa-solid fa-user-gear"></i> Kelola Peserta
            </button>
        `
        : `
            <button type="button" onclick="openManageModal()" class="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg transition shadow-md flex items-center gap-2">
                <i class="fa-solid fa-user-plus"></i> Kelola Peserta
            </button>
        `;

    containers.forEach((el) => {
        el.innerHTML = buttonMarkup;
        if (!el.classList.contains("hidden")) {
            el.classList.remove("hidden");
        }
    });
}

function applyGroupABlueprint(rawList) {
    const sourceItems = (Array.isArray(rawList) ? rawList : [])
        .filter(p => p && p.id && p.id !== "empty_slot");

    const usedIds = new Set();
    const groupA = Array.from({ length: 30 }, (_, idx) => ({
        id: "empty_slot",
        slotCode: `A-${idx + 1}`,
        namaPanggilan: "",
        namaLengkap: "",
        kelas: "-"
    }));

    // 1. Tempatkan peserta yang cocok dengan blueprint pada slot A-nya
    INITIAL_GROUP_A_BLUEPRINT.forEach(bp => {
        const idx = bp.slotNumber - 1;
        if (idx < 0 || idx >= 30) return;

        const found = sourceItems.find(item => {
            if (usedIds.has(item.id)) return false;
            const pName = String(item.namaPanggilan || "").trim().toUpperCase();
            const fName = String(item.namaLengkap || "").trim().toUpperCase();
            return bp.matchNames.some(m => pName === m || pName.includes(m) || fName.includes(m));
        });

        if (found) {
            usedIds.add(found.id);
            groupA[idx] = {
                ...found,
                slotCode: `A-${bp.slotNumber}`
            };
        }
    });

    // 2. Isi slot kosong yang tersisa di Kelompok A terlebih dahulu
    const remaining = sourceItems.filter(item => !usedIds.has(item.id));
    for (let i = 0; i < 30 && remaining.length > 0; i++) {
        if (groupA[i].id === "empty_slot") {
            const nextItem = remaining.shift();
            usedIds.add(nextItem.id);
            groupA[i] = {
                ...nextItem,
                slotCode: `A-${i + 1}`
            };
        }
    }

    // 3. Jika masih ada kelebihan peserta (> 30), masukkan ke Kelompok B
    const groupB = [];
    for (let idx = 0; idx < remaining.length; idx++) {
        const slotNum = 31 + idx;
        groupB.push({
            ...remaining[idx],
            slotCode: getSlotCodeByNumber(slotNum)
        });
    }

    return [...groupA, ...groupB];
}

function buildGroupTableRowsHtml(startSlotNumber, endSlotNumber, canEditInline) {
    const groupRows = [];

    for (let slotNumber = startSlotNumber; slotNumber <= endSlotNumber; slotNumber++) {
        const arrayIndex = slotNumberToIndex(slotNumber);
        const slotCode = getSlotCodeByNumber(slotNumber);
        const participant = assignedParticipants[arrayIndex];
        const isEmpty = !participant || !participant.id || participant.id === "empty_slot";
        const assignedJuz = getEffectiveJuzForSlot(slotNumber);

        groupRows.push({
            slotNumber,
            arrayIndex,
            slotCode,
            participant,
            isEmpty,
            assignedJuz
        });
    }

    groupRows.sort((a, b) => a.slotNumber - b.slotNumber);

    return groupRows.map((row, idx) => {
        const displayNo = idx + 1;
        const resolvedCode = (row.participant && row.participant.slotCode) || row.slotCode;

        if (row.isEmpty) {
            return `
                <tr class="hover:bg-slate-800/30 transition">
                    <td class="p-3.5 font-bold text-slate-400">${displayNo}</td>
                    <td class="p-3.5 font-bold text-amber-300/80">${resolvedCode}</td>
                    <td class="p-3.5 text-slate-500">-</td>
                    <td class="p-3.5 text-slate-500">-</td>
                    <td class="p-3.5 text-center text-slate-500">-</td>
                    <td class="p-3.5 text-center text-slate-500">-</td>
                </tr>
            `;
        }

        const namaPanggilan = (row.participant.namaPanggilan || "-").toUpperCase();
        const namaLengkap = row.participant.namaLengkap || "-";
        const juzOptionsHtml = Array.from({ length: 30 }, (_, i) => i + 1)
            .map(j => `<option value="${j}" ${j === row.assignedJuz ? "selected" : ""}>JUZ ${j}</option>`)
            .join("");

        const juzFieldHtml = canEditInline
            ? `
                <select
                    aria-label="Edit Juz ${namaPanggilan}"
                    onchange="updateSlotJuzInline(${row.slotNumber}, ${row.arrayIndex}, this.value)"
                    class="bg-slate-800 border border-amber-500/40 text-amber-300 text-xs font-bold px-2.5 py-1 rounded-lg cursor-pointer focus:border-amber-400 outline-none"
                >
                    ${juzOptionsHtml}
                </select>
            `
            : `
                <span class="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
                    JUZ ${row.assignedJuz}
                </span>
            `;

        return `
            <tr class="hover:bg-slate-800/40 transition">
                <td class="p-3.5 font-bold text-slate-400">${displayNo}</td>
                <td class="p-3.5 font-bold text-amber-300/80">${resolvedCode}</td>
                <td class="p-3.5 font-semibold text-amber-400">${namaPanggilan}</td>
                <td class="p-3.5 text-slate-300">${namaLengkap}</td>
                <td class="p-3.5 text-center">${juzFieldHtml}</td>
                <td class="p-3.5 text-center">
                    ${canEditInline ? `
                        <button type="button" onclick="removeParticipant(${row.arrayIndex}, '${resolvedCode}')" class="text-rose-400 hover:text-rose-300 transition text-xs font-bold px-2 py-1 bg-rose-500/10 rounded-lg border border-rose-500/20">
                            <i class="fa-solid fa-trash mr-1"></i> Hapus
                        </button>
                    ` : `<span class="text-slate-500 text-xs">Peserta OWOJ</span>`}
                </td>
            </tr>
        `;
    }).join("");
}

function renderTab1Participants() {
    const tbodyA = document.getElementById("participantTableBodyA");
    const tbodyB = document.getElementById("participantTableBodyB");
    if (!tbodyA && !tbodyB) return;

    const canEditInline = isPowerEditorUser(cachedAuthUser, currentUserRole);

    if (tbodyA) {
        tbodyA.innerHTML = buildGroupTableRowsHtml(1, 30, canEditInline);
    }
    if (tbodyB) {
        tbodyB.innerHTML = buildGroupTableRowsHtml(31, 60, canEditInline);
    }
}

function renderTilawahTabs() {
    const totalParticipants = assignedParticipants.length;
    const totalGroups = Math.max(1, Math.ceil(totalParticipants / 30));
    const container = document.getElementById("tilawahTabsContainer");

    if (!container) return;

    if (totalParticipants <= 30) {
        container.innerHTML = "";
        return;
    }

    let html = "";
    for (let i = 1; i <= totalGroups; i++) {
        const isActive = (window.currentTilawahGroup || 1) === i;
        html += `
            <button type="button" onclick="switchTilawahGroup(${i})" class="px-4 py-2 rounded-xl text-xs font-bold transition ${isActive ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20" : "bg-slate-800 text-slate-300 hover:bg-slate-700"}" data-group="${i}">
                LIQO TILAWAH ${i}
            </button>
        `;
    }
    container.innerHTML = html;
}

window.switchTilawahGroup = async function(groupNum) {
    const totalGroups = Math.max(1, Math.ceil(assignedParticipants.length / 30));
    const safeGroup = Math.min(Math.max(1, Number(groupNum) || 1), totalGroups);
    window.currentTilawahGroup = safeGroup;
    renderTilawahTabs();
    renderActiveJuzCards(cachedAuthUser);
    const period = getActivePeriodRange();
    await loadExistingReports(period.elapsed + 1);
    renderColorWheel();
};

function renderActiveJuzCards(currentUser) {
    const container = document.getElementById("juzGrid30Container");
    if (!container) return;

    container.innerHTML = "";

    const validParticipants = assignedParticipants.filter(p => p && p.id && p.id !== "empty_slot");

    if (validParticipants.length === 0) {
        container.innerHTML = `
            <div class="col-span-full p-8 text-center bg-slate-900 border border-slate-700 rounded-2xl shadow-lg my-4">
                <p class="text-amber-400 font-bold text-base md:text-lg">
                    Belum ada kartu Juz yang ditampilkan karena peserta tilawah masih kosong.
                </p>
                <p class="text-slate-300 text-xs mt-1">
                    Silakan tambahkan peserta melalui menu Kelola Peserta.
                </p>
            </div>
        `;
        return;
    }

    const currentGroup = window.currentTilawahGroup || 1;
    const startIndex = (currentGroup - 1) * 30;
    const endIndex = startIndex + 30;
    const groupParticipants = assignedParticipants.slice(startIndex, endIndex);

    const loggedInUid = currentUser ? String(currentUser.uid).trim() : "";
    const loggedInPanggilan = cachedNamaPanggilan ? cachedNamaPanggilan.toUpperCase() : "";
    const period = getActivePeriodRange();

    groupParticipants.forEach((participant, idx) => {
        if (!participant || !participant.id || participant.id === "empty_slot") {
            return;
        }

        const index = startIndex + idx;
        const slotNumber = index + 1;
        const slotCode = getSlotCodeByNumber(slotNumber);
        const assignedJuz = getEffectiveJuzForSlot(slotNumber);
        const surahs = QURAN_JUZ_DATA[assignedJuz] || [];
        const assignedName = (participant.namaPanggilan || "ALUMNI").toUpperCase();
        const ownerId = participant.id || participant.uid || participant.userId || "";

        let isUserAssigned = false;
        if (currentUser) {
            const isUidMatch = ownerId && ownerId === loggedInUid;
            const isNameMatch = assignedName.includes("DEDEN") || (loggedInPanggilan && assignedName.includes(loggedInPanggilan));
            isUserAssigned = isUidMatch || isNameMatch;
        }

        const bgClass = isUserAssigned
            ? "juz-card-bg-gold"
            : ((assignedJuz % 2 !== 0) ? "juz-card-bg-dark" : "juz-card-bg-lite");

        const card = document.createElement("div");
        card.className = `juz-card-box ${bgClass} ${isUserAssigned ? "user-assigned" : ""}`;
        card.id = `juz-btn-g${currentGroup}-${assignedJuz}-slot-${slotCode}`;
        card.dataset.juz = String(assignedJuz);
        card.dataset.group = String(currentGroup);
        card.dataset.slotNumber = String(slotNumber);
        card.dataset.slotCode = slotCode;
        card.dataset.ownerId = String(ownerId);
        card.dataset.ownerName = assignedName;

        const nameColorClass = isUserAssigned ? "text-[#3b3e3f]" : "text-[#ffffff]";
        const metaColorClass = isUserAssigned ? "text-[#ffffff]" : "text-[#8698b5]";
        const progressLabelColorClass = isUserAssigned ? "text-[#ffffff]" : "text-[#8698b5]";

        let htmlContent = `
            <div>
                <div class="flex justify-between items-start mb-2">
                    <h2 class="text-3xl md:text-4xl font-extralight tracking-tight ${isUserAssigned ? "text-[#ffffff]" : "text-[#8698b5]"}">JUZ ${assignedJuz}</h2>
                    <div class="text-[12px] opacity-90 font-bold text-right ${metaColorClass}">
                        <div>Nomor Urut: ${slotCode} (${slotNumber})</div>
                        <div>Pekan ke-${period.pekanProgram} • ${period.monthWeekInfo.label}</div>
                    </div>
                </div>
                <h3 class="text-xl font-bold mb-4 tracking-wide ${nameColorClass}">${assignedName}</h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        `;

        surahs.forEach((s) => {
            const safeSurahName = s.name.replace(/'/g, "\\'");
            const initialTextColorClass = isUserAssigned ? "text-[#d1ae55]" : "text-[#8698b5]";

            htmlContent += `
                <div class="surah-card relative overflow-hidden cursor-pointer transition p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-amber-400/50 flex items-center justify-between" onclick="handleSurahCardClick(${assignedJuz}, '${safeSurahName}', '${s.ayat}', this, '${ownerId}', '${assignedName}', '${slotCode}')">
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

            <div class="space-y-1 pt-2 border-t ${isUserAssigned ? "border-[#0f172a]/30" : "border-white/20"}">
                <div class="flex justify-between text-[12px] font-semibold opacity-90">
                    <span class="${progressLabelColorClass}">Progres Bacaan Pekan Ini</span>
                    <span class="${isUserAssigned ? "text-[#ffffff]" : "text-amber-400"} font-bold progress-text">0%</span>
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
window.handleSurahCardClick = function(assignedJuz, surahName, suratAyat, element, juzOwnerId, juzOwnerName, slotCode = "") {
    if (!cachedAuthUser) {
        alert("Silakan sign in terlebih dahulu.");
        return;
    }

    const cardBox = element ? element.closest(".juz-card-box") : null;
    const resolvedSlotCode = slotCode || (cardBox && cardBox.dataset ? cardBox.dataset.slotCode : "") || "";

    const currentUserId = String(cachedAuthUser.uid).trim();
    const targetOwnerId = String(juzOwnerId || "").trim();
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
            executeUnreportSurah(assignedJuz, surahName, element, targetOwnerId, resolvedSlotCode);
        }
        return;
    }

    triggerReportTilawah(assignedJuz, surahName, suratAyat, element, targetOwnerId, juzOwnerName, resolvedSlotCode);
};

window.triggerReportTilawah = function(juzNumber, suratName, suratAyat, element, juzOwnerId = "", juzOwnerName = "", slotCode = "") {
    const cardBox = element ? element.closest(".juz-card-box") : null;
    const resolvedSlotCode = slotCode || (cardBox && cardBox.dataset ? cardBox.dataset.slotCode : "") || "";

    activeJuzTarget = { juzNumber, suratName, suratAyat, juzOwnerId, juzOwnerName, slotCode: resolvedSlotCode };
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

    const targetSnapshot = { ...activeJuzTarget };
    const elementSnapshot = activeSuratElement;

    const confirmModal = document.getElementById("confirmReportModal");
    if (confirmModal) {
        confirmModal.classList.remove("flex");
        confirmModal.classList.add("hidden");
    }

    const optionsDate = { day: "numeric", month: "long", year: "numeric" };
    const currentDate = new Date().toLocaleDateString("id-ID", optionsDate);

    const optionsTime = { hour: "2-digit", minute: "2-digit", hour12: false };
    const currentTime = "jam : " + new Date().toLocaleTimeString("id-ID", optionsTime);

    applySurahCompletedVisual(elementSnapshot, currentDate, currentTime);

    const period = getActivePeriodRange();
    const currentWeek = period.elapsed + 1;
    const juzNum = targetSnapshot.juzNumber;
    const suratName = targetSnapshot.suratName;
    const slotCode = targetSnapshot.slotCode || "";
    const reporterUid = cachedAuthUser ? cachedAuthUser.uid : "";
    const effectiveUserId = reporterUid || targetSnapshot.juzOwnerId || "";
    const reporterName = (cachedNamaPanggilan || targetSnapshot.juzOwnerName || "ALUMNI").toUpperCase();

    try {
        if (window.firebaseDb) {
            const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
            const docId = getReportDocId(currentWeek, juzNum, suratName, effectiveUserId, slotCode);
            const reportRef = doc(window.firebaseDb, "tilawah_reports", docId);

            await setDoc(reportRef, {
                pekan: currentWeek,
                pekanProgram: period.pekanProgram,
                periodeLabel: period.mainLabel,
                periodeStartMs: period.startMs,
                periodeFinishMs: period.finishMs,
                juz: juzNum,
                surat: suratName,
                slotCode: slotCode,
                userId: effectiveUserId,
                nama: reporterName,
                tanggal: currentDate,
                waktu: currentTime,
                timestamp: new Date().toISOString()
            }, { merge: true });
        }
    } catch (err) {
        console.error("Gagal menyimpan report ke Firebase:", err);
    }

    renderColorWheel();
    await showWhatsappModal(juzNum, suratName, currentDate, currentTime, reporterName);
});

function applySurahCompletedVisual(element, dateStr, timeStr) {
    element.classList.add("completed");

    const cardBox = element.closest(".juz-card-box");
    const isGoldCard = cardBox && cardBox.classList.contains("user-assigned");

    if (isGoldCard) {
        element.classList.remove("completed-dark");
        element.classList.add("completed-gold");
        element.style.backgroundColor = "#ffffff";
        element.style.borderColor = "#ffffff";

        const titleEl = element.querySelector(".surah-title");
        const subTitleEl = element.querySelector(".surah-ayat");
        const numEl = element.querySelector(".surah-number");
        if (titleEl) titleEl.style.color = "#d1ae55";
        if (subTitleEl) subTitleEl.style.color = "#d1ae55";
        if (numEl) numEl.style.color = "#d1ae55";
    } else {
        element.classList.remove("completed-gold");
        element.classList.add("completed-dark");
        element.style.backgroundColor = "";
        element.style.borderColor = "";
    }

    const timeBadge = element.querySelector(".surat-time-badge");
    if (timeBadge) {
        const dateEl = timeBadge.querySelector(".date-text");
        const timeEl = timeBadge.querySelector(".time-text");
        if (dateEl) dateEl.innerText = dateStr;
        if (timeEl) timeEl.innerText = timeStr;
        timeBadge.classList.remove("hidden");

        if (isGoldCard) {
            timeBadge.style.borderColor = "rgba(209, 174, 85, 0.4)";
            if (dateEl) dateEl.style.color = "#d1ae55";
            if (timeEl) timeEl.style.color = "#d1ae55";
        }
    }

    if (cardBox) {
        const totalSurahs = cardBox.querySelectorAll(".surah-card").length;
        const completedSurahs = cardBox.querySelectorAll(".surah-card.completed").length;
        const percent = totalSurahs > 0 ? Math.round((completedSurahs / totalSurahs) * 100) : 0;

        const percentText = cardBox.querySelector(".progress-text");
        const progressBar = cardBox.querySelector(".progress-bar-fill");

        if (percentText) percentText.innerText = `${percent}%`;
        if (progressBar) progressBar.style.width = `${percent}%`;
    }
}

function isReportInActivePeriod(data, period) {
    const reportMs = data && data.timestamp ? new Date(data.timestamp).getTime() : NaN;
    if (!Number.isNaN(reportMs)) {
        return reportMs >= period.startMs && reportMs <= period.finishMs;
    }
    return Number(data?.pekan) === (period.elapsed + 1) || Number(data?.pekanProgram) === period.pekanProgram;
}

async function loadExistingReports(currentWeek) {
    if (!window.firebaseDb) return;
    const period = getActivePeriodRange();
    const targetWeek = currentWeek || (period.elapsed + 1);

    document.querySelectorAll(".surah-card").forEach((sc) => {
        sc.classList.remove("completed", "completed-gold", "completed-dark");
        sc.style.backgroundColor = "";
        sc.style.borderColor = "";

        const titleEl = sc.querySelector(".surah-title");
        const subTitleEl = sc.querySelector(".surah-ayat");
        const numEl = sc.querySelector(".surah-number");
        if (titleEl) titleEl.style.color = "";
        if (subTitleEl) subTitleEl.style.color = "";
        if (numEl) numEl.style.color = "";

        const timeBadge = sc.querySelector(".surat-time-badge");
        if (timeBadge) {
            timeBadge.classList.add("hidden");
            timeBadge.style.borderColor = "";

            const dateTextEl = timeBadge.querySelector(".date-text");
            const timeTextEl = timeBadge.querySelector(".time-text");
            if (dateTextEl) dateTextEl.style.color = "";
            if (timeTextEl) timeTextEl.style.color = "";
        }
    });

    try {
        const { collection, getDocs, query, where } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
        const q = query(collection(window.firebaseDb, "tilawah_reports"), where("pekan", "==", targetWeek));
        const querySnapshot = await getDocs(q);

        const currentGroup = window.currentTilawahGroup || 1;

        querySnapshot.forEach((docSnap) => {
            const data = docSnap.data();
            const hasTimestamp = Boolean(data && data.timestamp);
            if (hasTimestamp && !isReportInActivePeriod(data, period)) {
                return;
            }

            const slotCode = String(data.slotCode || "").trim();
            const juzCard =
                (slotCode && document.getElementById(`juz-btn-g${currentGroup}-${data.juz}-slot-${slotCode}`)) ||
                document.getElementById(`juz-btn-g${currentGroup}-${data.juz}`) ||
                document.getElementById(`juz-btn-${data.juz}`);
            if (juzCard) {
                const targetSurah = String(data.surat || "").trim().toLowerCase();
                const surahCards = juzCard.querySelectorAll(".surah-card");
                surahCards.forEach((sc) => {
                    const title = (sc.querySelector(".surah-title")?.innerText || "").trim().toLowerCase();
                    if (title && title === targetSurah) {
                        applySurahCompletedVisual(sc, data.tanggal || "", data.waktu || "");
                    }
                });
            }
        });

        document.querySelectorAll(".juz-card-box").forEach((cardBox) => {
            const totalSurahs = cardBox.querySelectorAll(".surah-card").length;
            const completedSurahs = cardBox.querySelectorAll(".surah-card.completed").length;
            const percent = totalSurahs > 0 ? Math.round((completedSurahs / totalSurahs) * 100) : 0;

            const percentText = cardBox.querySelector(".progress-text");
            const progressBar = cardBox.querySelector(".progress-bar-fill");

            if (percentText) percentText.innerText = `${percent}%`;
            if (progressBar) progressBar.style.width = `${percent}%`;
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
            ctx.fillText(`Jam : ${timeStr.replace("jam : ", "")}`, canvas.width / 2, 1135);

            ctx.font = "500 34px sans-serif";
            ctx.fillStyle = "#1e293b";
            ctx.fillText("Barakallahu fiikum,", canvas.width / 2, 1270);
            ctx.fillText("semoga istiqomah dan membawa keberkahan.", canvas.width / 2, 1325);

            ctx.font = "400 28px sans-serif";
            ctx.fillStyle = "#64748b";
            ctx.fillText("Cek progres selengkapnya di sini:", canvas.width / 2, 1435);

            ctx.font = "bold 32px sans-serif";
            ctx.fillStyle = "#0f172a";
            ctx.fillText(websiteLink.replace(/^https?:\/\//, ""), canvas.width / 2, 1485);

            const dataUrl = canvas.toDataURL("image/webp", 0.95);
            resolve(dataUrl);
        };

        bgImg.onerror = function() {
            console.error("Gagal memuat background report image.");
            resolve(null);
        };
    });
}

async function showWhatsappModal(juzNumber, suratName, dateStr, timeStr, customUserName = "") {
    const waModal = document.getElementById("whatsappModal");
    const sendWaBtn = document.getElementById("sendWaBtn");

    const userName = (customUserName || cachedNamaPanggilan || "ALUMNI").toUpperCase();
    const websiteLink = window.location.href;

    generatedReportImageUrl = await generateReportImage(juzNumber, suratName, dateStr, timeStr, userName, websiteLink);

    const message = "✨ LAPORAN TILAWAH OWOJ ✨\n" +
                    "IKA SMAN 11 Bandung Angkatan '98\n\n" +
                    "Alhamdulillah, saya *" + userName + "* telah menyelesaikan:\n" +
                    "📖 *Juz " + juzNumber + "* (" + suratName + ")\n" +
                    "📅 Tanggal: " + dateStr + " pukul " + timeStr + "\n\n" +
                    "Barakallahu fiikum, semoga istiqomah dan membawa keberkahan. 🤲\n\n" +
                    "🔍 Cek progres selengkapnya di sini:\n" +
                    "- " + websiteLink;

    const encodedMessage = encodeURIComponent(message);
    if (sendWaBtn) {
        sendWaBtn.href = "https://wa.me/?text=" + encodedMessage;
    }

    if (waModal) {
        waModal.classList.remove("hidden");
        waModal.classList.add("flex");
    }
}

async function getPngBlobFromSource(imageSource) {
    const reportCanvas = document.getElementById("reportCanvas");
    if (reportCanvas && typeof reportCanvas.toBlob === "function") {
        const canvasBlob = await new Promise((resolve) => {
            try {
                reportCanvas.toBlob((blob) => resolve(blob || null), "image/png");
            } catch (_) {
                resolve(null);
            }
        });
        if (canvasBlob) {
            return canvasBlob;
        }
    }

    if (!imageSource) return null;

    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "anonymous";

        img.onload = () => {
            try {
                const canvas = document.createElement("canvas");
                canvas.width = img.naturalWidth || img.width || 1080;
                canvas.height = img.naturalHeight || img.height || 1920;

                const ctx = canvas.getContext("2d");
                if (!ctx) {
                    resolve(null);
                    return;
                }

                ctx.drawImage(img, 0, 0);
                canvas.toBlob((blob) => resolve(blob || null), "image/png");
            } catch (_) {
                resolve(null);
            }
        };

        img.onerror = () => resolve(null);
        img.src = imageSource;
    });
}

async function copyReportBannerToClipboard(imageSource) {
    if (!navigator.clipboard || typeof navigator.clipboard.write !== "function" || typeof window.ClipboardItem === "undefined") {
        return false;
    }

    try {
        const pngBlob = await getPngBlobFromSource(imageSource);
        if (!pngBlob) {
            return false;
        }

        await navigator.clipboard.write([
            new ClipboardItem({
                "image/png": pngBlob
            })
        ]);

        return true;
    } catch (err) {
        console.warn("Gagal menyalin gambar ke clipboard:", err);
        return false;
    }
}

function downloadReportBanner(imageSource) {
    if (!imageSource) return;

    try {
        const downloadLink = document.createElement("a");
        downloadLink.href = imageSource;
        downloadLink.download = `Laporan_Juz_${activeJuzTarget ? activeJuzTarget.juzNumber : "OWOJ"}_${(cachedNamaPanggilan || "ALUMNI").toUpperCase()}.webp`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    } catch (err) {
        console.warn("Download otomatis banner gagal:", err);
    }
}

window.handleSendWhatsAppAndClose = async function(event) {
    if (event) {
        event.preventDefault();
    }

    const sendWaBtn = document.getElementById("sendWaBtn");
    const rawHref = sendWaBtn ? (sendWaBtn.getAttribute("href") || "") : "";
    const waUrl = rawHref.replace(/^https:\/\/api\.whatsapp\.com\/send\?/i, "https://wa.me/");

    if (generatedReportImageUrl) {
        await copyReportBannerToClipboard(generatedReportImageUrl);
    }

    const waModal = document.getElementById("whatsappModal");
    if (waModal) {
        waModal.classList.remove("flex");
        waModal.classList.add("hidden");
    }

    if (waUrl && waUrl !== "#") {
        const openedWin = window.open(waUrl, "_blank", "noopener,noreferrer");
        if (openedWin) {
            try {
                openedWin.opener = null;
            } catch (_) {}
        } else {
            const tempAnchor = document.createElement("a");
            tempAnchor.href = waUrl;
            tempAnchor.target = "_blank";
            tempAnchor.rel = "noopener noreferrer";
            document.body.appendChild(tempAnchor);
            tempAnchor.click();
            document.body.removeChild(tempAnchor);
        }
    }

    if (generatedReportImageUrl) {
        setTimeout(() => {
            downloadReportBanner(generatedReportImageUrl);
        }, 300);
    }
};

window.closeWaModal = function() {
    const waModal = document.getElementById("whatsappModal");
    if (waModal) {
        waModal.classList.remove("flex");
        waModal.classList.add("hidden");
    }
};

// ==========================================
// FUNGSI MODAL KELOLA PESERTA OWOJ
// ==========================================
window.openManageModal = function() {
    const modal = document.getElementById("manageParticipantsModal");
    if (modal) {
        modal.classList.remove("hidden");
        modal.classList.add("flex");

        const selectEl = document.getElementById("alumniDbSelect");
        if (selectEl) {
            const registeredIds = assignedParticipants
                .map(p => p && p.id && p.id !== "empty_slot" ? p.id : null)
                .filter(Boolean);

            const filteredAlumni = allDbAlumni.filter(a => {
                const role = (a.role || "member").toLowerCase();
                const isAdminOrSuper = role === "admin" || role === "super_admin";
                const isAlreadyRegistered = registeredIds.includes(a.id);

                return !isAdminOrSuper && !isAlreadyRegistered;
            });

            selectEl.innerHTML = '<option value="">-- Pilih Alumni --</option>' +
                filteredAlumni.map(a => `<option value="${a.id}">${a.namaLengkap || a.namaPanggilan || "Alumni"} (${a.namaPanggilan || "-"})</option>`).join("");
        }

        const slotSelectEl = document.getElementById("manualSlotSelect");
        if (slotSelectEl) {
            let optionsHtml = '<option value="">-- Pilih Nomor Urut (1 - 60) --</option>';
            for (let i = 1; i <= 60; i++) {
                const targetIdx = i - 1;
                const existingParticipant = assignedParticipants[targetIdx];
                const isOccupied = existingParticipant && existingParticipant.id && existingParticipant.id !== "empty_slot";

                if (!isOccupied) {
                    optionsHtml += `<option value="${i}">Nomor Urut ${i} (${getSlotCodeByNumber(i)})</option>`;
                }
            }
            slotSelectEl.innerHTML = optionsHtml;
        }
    }
};

window.closeManageModal = function() {
    const modal = document.getElementById("manageParticipantsModal");
    if (modal) {
        modal.classList.remove("flex");
        modal.classList.add("hidden");
    }
};

window.saveParticipantToSlot = async function() {
    const selectEl = document.getElementById("alumniDbSelect");
    const slotSelectEl = document.getElementById("manualSlotSelect");
    if (!selectEl) return;

    const alumniId = selectEl.value;
    if (!alumniId) {
        alert("Silakan pilih alumni terlebih dahulu!");
        return;
    }

    const selected = allDbAlumni.find(a => a.id === alumniId);
    if (!selected) return;

    if (assignedParticipants.some(p => p && p.id && p.id === selected.id && p.id !== "empty_slot")) {
        alert("Alumni ini sudah terdaftar sebagai peserta OWOJ!");
        return;
    }

    const manualSlot = slotSelectEl && slotSelectEl.value ? parseInt(slotSelectEl.value, 10) : null;
    let targetIndex = -1;

    if (manualSlot && manualSlot >= 1 && manualSlot <= 60) {
        targetIndex = manualSlot - 1;
    } else {
        targetIndex = assignedParticipants.findIndex(p => !p || !p.id || p.id === "empty_slot");
        if (targetIndex === -1) {
            targetIndex = assignedParticipants.length;
        }
    }

    while (assignedParticipants.length <= targetIndex) {
        const fillerIdx = assignedParticipants.length;
        assignedParticipants.push({
            id: "empty_slot",
            slotCode: getSlotCodeByIndex(fillerIdx),
            namaPanggilan: "",
            namaLengkap: "",
            kelas: "-"
        });
    }

    const resolvedSlotNumber = targetIndex + 1;
    const resolvedSlotCode = getSlotCodeByNumber(resolvedSlotNumber);

    assignedParticipants[targetIndex] = {
        id: selected.id,
        slotCode: resolvedSlotCode,
        namaPanggilan: selected.namaPanggilan || selected.namaLengkap || "Alumni",
        namaLengkap: selected.namaLengkap || "-",
        kelas: selected.kelas || "-"
    };

    try {
        if (window.firebaseDb) {
            const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
            await setDoc(doc(window.firebaseDb, "settings", "tilawah_participants"), {
                participants: assignedParticipants,
                updatedAt: new Date().toISOString()
            });
            alert("Peserta OWOJ berhasil disimpan!");
        }
    } catch (err) {
        console.error("Gagal menyimpan ke Firestore:", err);
        alert("Gagal menyimpan data peserta. Error: " + err.message);
    }

    if (slotSelectEl) slotSelectEl.value = "";
    closeManageModal();
    renderTab1Participants();
    renderTilawahTabs();
    renderActiveJuzCards(cachedAuthUser);

    const period = getActivePeriodRange();
    await loadExistingReports(period.elapsed + 1);
    renderColorWheel();
    await updateYearlyStats();
    await renderMonthlyRecapTable();
};

window.removeParticipant = async function(slotIndex, targetSlotCode = "") {
    if (!isPowerEditorUser(cachedAuthUser, currentUserRole)) {
        alert("Akses ditolak. Fitur ini khusus Admin, Nana Ocin, dan Super Admin.");
        return;
    }

    let resolvedIndex = slotIndex;
    if (targetSlotCode) {
        const matchedIdx = assignedParticipants.findIndex((p, idx) => {
            const pCode = String(p?.slotCode || getSlotCodeByIndex(idx) || "").trim().toUpperCase();
            return pCode === String(targetSlotCode).trim().toUpperCase();
        });
        if (matchedIdx !== -1) {
            resolvedIndex = matchedIdx;
        }
    }

    const slotCodeLabel = targetSlotCode || getSlotCodeByIndex(resolvedIndex);
    const targetParticipant = assignedParticipants[resolvedIndex];
    const nama = targetParticipant && targetParticipant.namaPanggilan ? targetParticipant.namaPanggilan : "peserta ini";

    if (!confirm(`Hapus ${nama} (${slotCodeLabel}) dari daftar peserta Tilawah?`)) return;

    assignedParticipants[resolvedIndex] = {
        id: "empty_slot",
        slotCode: slotCodeLabel,
        namaPanggilan: "",
        namaLengkap: "",
        kelas: "-"
    };

    try {
        if (window.firebaseDb) {
            const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
            await setDoc(doc(window.firebaseDb, "settings", "tilawah_participants"), {
                participants: assignedParticipants,
                updatedAt: new Date().toISOString()
            });
        }

        renderTab1Participants();
        renderTilawahTabs();
        renderActiveJuzCards(cachedAuthUser);

        const period = getActivePeriodRange();
        await loadExistingReports(period.elapsed + 1);
        renderColorWheel();
        await updateYearlyStats();
        await renderMonthlyRecapTable();
    } catch (err) {
        console.error("Gagal menghapus peserta:", err);
        alert("Gagal menghapus peserta dari database.");
    }
};

// ==========================================
// COLOR WHEEL DYNAMIC PROGRES MINGGUAN
// ==========================================
function renderColorWheel() {
    const container = document.getElementById("tab3") || document.querySelector("#tab3 .space-y-8");
    if (!container) return;

    let wheelsWrapper = document.getElementById("colorWheelsDynamicWrapper");
    if (!wheelsWrapper) {
        wheelsWrapper = document.createElement("div");
        wheelsWrapper.id = "colorWheelsDynamicWrapper";
        wheelsWrapper.className = "space-y-12 w-full flex flex-col items-center justify-center";

        const hoverInfo = document.getElementById("wheelHoverInfo");
        const parentBox = hoverInfo ? hoverInfo.parentNode : container;
        parentBox.insertBefore(wheelsWrapper, hoverInfo);
    }

    wheelsWrapper.innerHTML = "";

    const totalParticipants = assignedParticipants.length;
    const totalGroups = Math.max(1, Math.ceil(totalParticipants / 30));
    const period = getActivePeriodRange();

    for (let g = 1; g <= totalGroups; g++) {
        const groupCardBox = document.createElement("div");
        groupCardBox.className = "w-full max-w-3xl text-center space-y-4 px-2 py-4";

        groupCardBox.innerHTML = `
            <div>
                <h2 class="text-2xl md:text-3xl font-extrabold text-amber-400">One Week One Juz Progress</h2>
                <p class="text-xs text-slate-400 mt-1">Status Capaian Tilawah 30 Juz Liqo Tilawah ${g} • Pekan ke-${period.pekanProgram} • ${period.monthWeekInfo.label}</p>
            </div>

            <div class="relative w-full max-w-2xl mx-auto aspect-square flex items-center justify-center p-0">
                <svg id="colorWheelSvg_${g}" viewBox="0 0 600 600" class="w-full h-full drop-shadow-2xl overflow-visible"></svg>
                <div class="absolute inset-0 m-auto w-16 h-16 md:w-24 md:h-24 bg-slate-950 rounded-full border-2 border-amber-500/30 flex flex-col items-center justify-center p-1 text-center shadow-inner">
                    <span id="wheelTotalPercent_${g}" class="text-xl md:text-2xl font-black text-amber-400">0%</span>
                    <span class="text-[7px] md:text-[8px] text-slate-300 font-semibold mt-0.5 leading-tight">Total Khatam<br>/ minggu</span>
                </div>
            </div>
        `;

        wheelsWrapper.appendChild(groupCardBox);

        const svg = document.getElementById(`colorWheelSvg_${g}`);
        if (!svg) continue;

        const cx = 300, cy = 300, rOuter = 245, rInner = 15;
        const totalSlices = 30;
        let totalAccumulatedPercent = 0;

        for (let i = 0; i < totalSlices; i++) {
            const juzNum = i + 1;
            let percent = 0;
            const targetJuzCard =
                document.getElementById(`juz-btn-g${g}-${juzNum}`) ||
                document.getElementById(`juz-btn-${juzNum}`);

            if (targetJuzCard) {
                const totalSurahs = targetJuzCard.querySelectorAll(".surah-card").length;
                const completedSurahs = targetJuzCard.querySelectorAll(".surah-card.completed").length;
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

                const textProgRadius = dynamicRadius - 12;
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

            const outTextRadius = rOuter + 22;
            const otx = cx + outTextRadius * Math.cos(Math.PI * midAngle / 180);
            const oty = cy + outTextRadius * Math.sin(Math.PI * midAngle / 180);

            const outText = document.createElementNS("http://www.w3.org/2000/svg", "text");
            outText.setAttribute("x", otx);
            outText.setAttribute("y", oty);
            outText.setAttribute("fill", baseColor);
            outText.setAttribute("font-size", "11px");
            outText.setAttribute("font-weight", "bold");
            outText.setAttribute("text-anchor", "middle");
            outText.setAttribute("dominant-baseline", "central");
            outText.setAttribute("transform", `rotate(${midAngle + 90}, ${otx}, ${oty})`);
            outText.textContent = `JUZ ${juzNum}`;
            svg.appendChild(outText);

            bgPath.addEventListener("mouseenter", () => {
                const hoverInfo = document.getElementById("wheelHoverInfo");
                if (hoverInfo) {
                    hoverInfo.innerHTML = `<strong>LIQO ${g} - JUZ ${juzNum}</strong> | Capaian: ${percent}% Selesai`;
                }
            });
        }

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

    const period = getActivePeriodRange();
    const currentWeek = period.elapsed + 1;

    if (currentWeekNumEl) {
        currentWeekNumEl.innerHTML = `
            <div class="leading-tight">
                <div>Pekan ke-${period.pekanProgram}</div>
                <div class="text-xs font-semibold text-slate-300 mt-1">${period.monthWeekInfo.label}</div>
            </div>
        `;
    }

    if (!window.firebaseDb) return;

    try {
        const { collection, getDocs } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
        const snap = await getDocs(collection(window.firebaseDb, "tilawah_reports"));

        const reports = [];
        const userReportCount = {};
        const earlyBirdCount = {};
        const uniqueReportKeys = new Set();

        snap.forEach(docSnap => {
            const data = docSnap.data();
            const ownerKey = data.userId || data.nama || docSnap.id;
            const uniqueKey = `${data.pekan}_${data.juz}_${data.surat}_${ownerKey}`;
            if (uniqueReportKeys.has(uniqueKey)) return;
            uniqueReportKeys.add(uniqueKey);

            reports.push(data);

            const userName = (data.nama || "Alumni").toUpperCase();
            userReportCount[userName] = (userReportCount[userName] || 0) + 1;

            if (data.timestamp) {
                const reportDate = new Date(data.timestamp);
                const day = reportDate.getDay();
                if (day === 1 || day === 2) {
                    earlyBirdCount[userName] = (earlyBirdCount[userName] || 0) + 1;
                }
            }
        });

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

        const activeCount = assignedParticipants.filter(p => p && p.id && p.id !== "empty_slot").length;
        const totalTargetReports = activeCount * 30 * currentWeek;
        const totalActualReports = reports.length;
        const disciplinePercent = totalTargetReports > 0 ? Math.min(100, Math.round((totalActualReports / totalTargetReports) * 100)) : 0;

        if (disciplineRateEl) disciplineRateEl.innerText = `${disciplinePercent}%`;

        const sortedLeaderboard = Object.entries(userReportCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);

        if (leaderboardBody) {
            if (sortedLeaderboard.length === 0) {
                leaderboardBody.innerHTML = `<tr><td colspan="4" class="py-6 text-center text-slate-500">Belum ada riwayat laporan yang masuk.</td></tr>`;
            } else {
                const badges = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣"];
                leaderboardBody.innerHTML = sortedLeaderboard.map(([name, count], idx) => `
                    <tr class="hover:bg-slate-900/50 transition">
                        <td class="py-2.5 font-bold text-amber-400">${badges[idx] || idx + 1} Rank ${idx + 1}</td>
                        <td class="py-2.5 font-semibold text-white">${name}</td>
                        <td class="py-2.5 text-center font-bold text-emerald-400">${count} Surat</td>
                        <td class="py-2.5 text-right"><span class="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-md">Istiqomah</span></td>
                    </tr>
                `).join("");
            }
        }

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
                `).join("");
            }
        }

    } catch (err) {
        console.error("Gagal mengkalkulasi laporan tahunan:", err);
    }
}

// ==========================================
// FUNGSI PEMBATALAN LAPORAN (UNREPORT) & HAPUS DARI FIREBASE
// ==========================================
async function executeUnreportSurah(juzNumber, suratName, element, ownerId = "", slotCode = "") {
    element.classList.remove("completed", "completed-gold", "completed-dark");
    element.style.backgroundColor = "";
    element.style.borderColor = "";

    const titleEl = element.querySelector(".surah-title");
    const subTitleEl = element.querySelector(".surah-ayat");
    const numEl = element.querySelector(".surah-number");

    if (titleEl) titleEl.style.color = "";
    if (subTitleEl) subTitleEl.style.color = "";
    if (numEl) numEl.style.color = "";

    const timeBadge = element.querySelector(".surat-time-badge");
    if (timeBadge) {
        timeBadge.classList.add("hidden");
        timeBadge.style.borderColor = "";

        const dateTextEl = timeBadge.querySelector(".date-text");
        const timeTextEl = timeBadge.querySelector(".time-text");
        if (dateTextEl) dateTextEl.style.color = "";
        if (timeTextEl) timeTextEl.style.color = "";
    }

    const cardBox = element.closest(".juz-card-box");
    if (cardBox) {
        const totalSurahs = cardBox.querySelectorAll(".surah-card").length;
        const completedSurahs = cardBox.querySelectorAll(".surah-card.completed").length;
        const percent = totalSurahs > 0 ? Math.round((completedSurahs / totalSurahs) * 100) : 0;

        const percentText = cardBox.querySelector(".progress-text");
        const progressBar = cardBox.querySelector(".progress-bar-fill");

        if (percentText) percentText.innerText = `${percent}%`;
        if (progressBar) progressBar.style.width = `${percent}%`;
    }

    const resolvedSlotCode = slotCode || (cardBox && cardBox.dataset ? cardBox.dataset.slotCode : "") || "";
    const period = getActivePeriodRange();
    const currentWeek = period.elapsed + 1;
    const effectiveUid = (cachedAuthUser && cachedAuthUser.uid) || ownerId || "";

    try {
        if (window.firebaseDb) {
            const { doc, deleteDoc } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
            const docIdWithSlotAndUser = getReportDocId(currentWeek, juzNumber, suratName, effectiveUid, resolvedSlotCode);
            const docIdWithUser = getReportDocId(currentWeek, juzNumber, suratName, effectiveUid);
            const legacyDocId = getReportDocId(currentWeek, juzNumber, suratName, "");

            await deleteDoc(doc(window.firebaseDb, "tilawah_reports", docIdWithSlotAndUser)).catch(() => {});
            if (docIdWithSlotAndUser !== docIdWithUser) {
                await deleteDoc(doc(window.firebaseDb, "tilawah_reports", docIdWithUser)).catch(() => {});
            }
            if (docIdWithUser !== legacyDocId) {
                await deleteDoc(doc(window.firebaseDb, "tilawah_reports", legacyDocId)).catch(() => {});
            }
        }
    } catch (err) {
        console.error("Gagal menghapus report dari Firebase:", err);
    }

    renderColorWheel();
}

window.initTilawahDashboard = async function(user, namaPanggilan) {
    cachedAuthUser = user;
    cachedNamaPanggilan = namaPanggilan || (user && user.email ? user.email.split("@")[0] : "");
    currentUserRole = "member";
    isUserSuperAdmin = false;

    try {
        if (window.firebaseDb) {
            const { collection, getDocs, doc, getDoc } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");

            if (user) {
                const userDoc = await getDoc(doc(window.firebaseDb, "alumni", user.uid));
                const userEmail = (user.email || "").trim().toLowerCase();
                const allowedTilawahAdmins = ["denzrusmana060f08@gmail.com"];
                const isTilawahAdminByEmail = allowedTilawahAdmins.includes(userEmail);

                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    currentUserRole = userData.role || "member";
                    isUserSuperAdmin = (currentUserRole === "super_admin" || isTilawahAdminByEmail);

                    const namaPanggilanUpper = (userData.namaPanggilan || "").trim().toUpperCase();
                    const namaLengkapUpper = (userData.namaLengkap || "").trim().toUpperCase();

                    const isMainAdmin = (currentUserRole === "admin" || currentUserRole === "super_admin");
                    const isTilawahAdminByName = namaPanggilanUpper.includes("NANA OCIN") ||
                        namaLengkapUpper.includes("NANA OCIN") ||
                        userData.tilawahRole === "admin";

                    if (isMainAdmin || isTilawahAdminByName || isTilawahAdminByEmail) {
                        const adminBtns = document.getElementById("adminActionButtons");
                        if (adminBtns) {
                            adminBtns.classList.remove("hidden");
                            adjustAdminButtonState();
                        }
                    }
                } else if (isTilawahAdminByEmail) {
                    const adminBtns = document.getElementById("adminActionButtons");
                    if (adminBtns) {
                        adminBtns.classList.remove("hidden");
                        isUserSuperAdmin = true;
                        adjustAdminButtonState();
                    }
                }
            }

            officialStartDate = DEFAULT_START_ISO;
            manualWeekOffset = 0;
            manualSlotJuzOverrides = {};

            const configDoc = await getDoc(doc(window.firebaseDb, "settings", "tilawah_config"));
            if (configDoc.exists()) {
                const cfg = configDoc.data();
                if (typeof cfg.manualOffset === "number") {
                    manualWeekOffset = cfg.manualOffset;
                }
                if (cfg.slotJuzOverrides && typeof cfg.slotJuzOverrides === "object") {
                    manualSlotJuzOverrides = { ...cfg.slotJuzOverrides };
                }
            }
            adjustAdminButtonState();

            const alumniSnap = await getDocs(collection(window.firebaseDb, "alumni"));
            allDbAlumni = [];
            alumniSnap.forEach(d => allDbAlumni.push({ id: d.id, ...d.data() }));

            const tilawahDoc = await getDoc(doc(window.firebaseDb, "settings", "tilawah_participants"));
            if (tilawahDoc.exists() && Array.isArray(tilawahDoc.data().participants)) {
                const normalized = tilawahDoc.data().participants.map((p, idx) => {
                    const code = getSlotCodeByIndex(idx);
                    if (!p || !p.id) {
                        return {
                            id: "empty_slot",
                            slotCode: code,
                            namaPanggilan: "",
                            namaLengkap: "",
                            kelas: "-"
                        };
                    }
                    return {
                        ...p,
                        slotCode: p.slotCode || code
                    };
                });

                assignedParticipants = applyGroupABlueprint(normalized).map((p, idx) => ({
                    ...p,
                    slotCode: getSlotCodeByIndex(idx)
                }));
            }
        }
    } catch (err) {
        console.error("Gagal memuat data tilawah:", err);
    }

    updateBadgeStatus();
    renderTab1Participants();
    renderTilawahTabs();
    renderActiveJuzCards(user);

    const period = getActivePeriodRange();
    await loadExistingReports(period.elapsed + 1);

    renderColorWheel();
    await updateYearlyStats();
    await renderMonthlyRecapTable();
    await updateWeeklyFastFinishers();

    window.switchTab(activeTabId || "tab2");

    if (!window.__tilawahWeekWatcherInterval) {
        let lastKnownElapsedWeeks = getElapsedWeeks();
        window.__tilawahWeekWatcherInterval = setInterval(async () => {
            const latestElapsedWeeks = getElapsedWeeks();
            if (latestElapsedWeeks !== lastKnownElapsedWeeks) {
                lastKnownElapsedWeeks = latestElapsedWeeks;
                await refreshAllViewsAfterWeekChange();
            }
        }, 60000);
    }
};

// ==========================================
// RENDER LEADERBOARD MINGGUAN (CEPAT SELESAI PEKAN INI)
// ==========================================
async function updateWeeklyFastFinishers() {
    const period = getActivePeriodRange();
    const currentWeek = period.elapsed + 1;
    if (!window.firebaseDb) return;

    try {
        const { collection, getDocs, query, where } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
        const q = query(collection(window.firebaseDb, "tilawah_reports"), where("pekan", "==", currentWeek));
        const snap = await getDocs(q);

        const userFirstReportTime = {};
        snap.forEach(docSnap => {
            const data = docSnap.data();
            if (!isReportInActivePeriod(data, period)) return;

            const userName = (data.nama || "Alumni").toUpperCase();
            const reportTime = new Date(data.timestamp || Date.now()).getTime();

            if (!userFirstReportTime[userName] || reportTime < userFirstReportTime[userName]) {
                userFirstReportTime[userName] = reportTime;
            }
        });

        const sortedFast = Object.entries(userFirstReportTime)
            .sort((a, b) => a[1] - b[1])
            .slice(0, 5);

        const container = document.getElementById("weeklyFastContainer");
        if (container) {
            if (sortedFast.length === 0) {
                container.innerHTML = `<div class="text-center py-4 text-slate-500 text-xs">Belum ada laporan di Pekan ke-${period.pekanProgram} ini.</div>`;
            } else {
                container.innerHTML = sortedFast.map(([name], idx) => `
                    <div class="flex items-center justify-between bg-slate-900/80 border border-slate-800 p-2.5 rounded-xl mb-2">
                        <div class="flex items-center gap-2.5">
                            <span class="font-bold text-amber-400 text-xs">#${idx + 1}</span>
                            <span class="text-xs font-bold text-slate-200">${name}</span>
                        </div>
                        <span class="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/20">Selesai Pekan Ini</span>
                    </div>
                `).join("");
            }
        }
    } catch (err) {
        console.error("Gagal memuat early/fast finishers mingguan:", err);
    }
}

// ==========================================
// RENDER TABEL MATRIKS REKAPITULASI BULANAN (BERBASIS MINGGU KALENDER MASEHI)
// ==========================================
window.renderMonthlyRecapTable = async function() {
    const tbody = document.getElementById("monthlyRecapTableBody");
    if (!tbody) return;

    const monthSelect = document.getElementById("filterMonthSelect");
    const selectedMonth = monthSelect ? parseInt(monthSelect.value, 10) : new Date().getMonth() + 1;
    const currentYear = 2026;

    const validParticipants = assignedParticipants.filter(p => p && p.id && p.id !== "empty_slot");
    if (validParticipants.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="py-6 text-center text-slate-500">Belum ada peserta terdaftar.</td></tr>`;
        return;
    }

    if (!window.firebaseDb) return;

    try {
        const { collection, getDocs } = await import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
        const snap = await getDocs(collection(window.firebaseDb, "tilawah_reports"));

        function getWibCalendarWeekOfMonth(timestampValue) {
            const ms = new Date(timestampValue).getTime();
            if (Number.isNaN(ms)) return null;
            const wib = new Date(ms + WIB_OFFSET_MS);
            const day = wib.getUTCDate();
            const weekNum = Math.ceil(day / 7);
            return {
                month: wib.getUTCMonth() + 1,
                year: wib.getUTCFullYear(),
                weekNum: weekNum > 5 ? 5 : weekNum
            };
        }

        const recapData = {};

        snap.forEach(docSnap => {
            const data = docSnap.data();
            if (!data.timestamp) return;

            const wibInfo = getWibCalendarWeekOfMonth(data.timestamp);
            if (!wibInfo) return;
            if (wibInfo.month !== selectedMonth || wibInfo.year !== currentYear) return;

            const name = (data.nama || "").trim().toUpperCase();
            if (!name) return;

            const calendarWeek = wibInfo.weekNum;
            const juzNum = data.juz;
            const suratName = data.surat;

            if (!recapData[name]) {
                recapData[name] = {};
            }
            if (!recapData[name][calendarWeek]) {
                recapData[name][calendarWeek] = { juz: juzNum, suratSet: new Set() };
            }
            if (suratName) {
                recapData[name][calendarWeek].suratSet.add(suratName);
            }
        });

        tbody.innerHTML = validParticipants.map((p, idx) => {
            const namaPanggilan = (p.namaPanggilan || "Alumni").toUpperCase();
            const userCalendarReports = recapData[namaPanggilan] || {};

            let weeksHtml = "";
            for (let w = 1; w <= 5; w++) {
                const weekData = userCalendarReports[w];
                let badgeContent = `<span class="text-slate-600">-</span>`;

                if (weekData && weekData.suratSet.size > 0) {
                    const juzNum = weekData.juz;
                    const totalSurahInJuz = QURAN_JUZ_DATA[juzNum] ? QURAN_JUZ_DATA[juzNum].length : 2;
                    const completedCount = weekData.suratSet.size;
                    const percent = Math.min(100, Math.round((completedCount / totalSurahInJuz) * 100));

                    const badgeColor = percent >= 100
                        ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-400 border-amber-500/30";

                    badgeContent = `
                        <div class="inline-block px-2.5 py-1.5 rounded-lg text-[11px] font-bold border ${badgeColor} text-center leading-tight shadow-sm">
                            <div class="text-amber-300">Juz ${juzNum}</div>
                            <div class="text-[9px] opacity-90 mt-0.5">${completedCount} dari ${totalSurahInJuz} surat (${percent}%)</div>
                        </div>
                    `;
                }

                weeksHtml += `<td class="p-3 text-center align-middle">${badgeContent}</td>`;
            }

            return `
                <tr class="hover:bg-slate-900/50 transition">
                    <td class="p-3 font-bold text-slate-400 align-middle">${idx + 1}</td>
                    <td class="p-3 font-semibold text-amber-400 align-middle">${namaPanggilan}</td>
                    ${weeksHtml}
                </tr>
            `;
        }).join("");

    } catch (err) {
        console.error("Gagal merender rekapitulasi bulanan:", err);
        tbody.innerHTML = `<tr><td colspan="7" class="py-6 text-center text-rose-400">Gagal memuat data matriks bulanan.</td></tr>`;
    }
};
