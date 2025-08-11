const calendarEl = document.getElementById("calendar");
const monthYearEl = document.getElementById("monthYear");
const selectedDateEl = document.getElementById("selectedDate");
const agendaListEl = document.getElementById("agendaList");

let current = new Date();

const agendaDummy = {
  "2025-07-29": [
    {
      title: "Sosialisasi kepada masyarakat daerah",
      time: "08:00 - 12:00 WIB",
      organizer: "Kepala Dinas Kominfo Kota Bogor",
      type: ["Agenda Offline", "Pimpinan"],
      status: "Terjadwal"
    }
  ],
   "2025-08-07": [
    {
      title: "Sosialisasi kepada masyarakat daerah",
      time: "08:00 - 12:00 WIB",
      organizer: "Kepala Dinas Kominfo Kota Bogor",
      type: ["Agenda Offline", "Pimpinan"],
      status: "Terjadwal"
    }
  ]
};

function renderCalendar(date) {
  calendarEl.innerHTML = "";

  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

  monthYearEl.textContent = `${firstDay.toLocaleString('default', { month: 'long' })} ${year}`;

  const headers = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
  headers.forEach(day => {
    const div = document.createElement("div");
    div.classList.add("day-header");
    div.textContent = day;
    calendarEl.appendChild(div);
  });

  for (let i = 0; i < startDay; i++) {
    const div = document.createElement("div");
    calendarEl.appendChild(div);
  }

  for (let day = 1; day <= lastDay.getDate(); day++) {
    const div = document.createElement("div");
    div.textContent = day;
    div.onclick = () => showAgenda(year, month + 1, day);
    calendarEl.appendChild(div);
  }
}

function showAgenda(year, month, day) {
  const key = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  selectedDateEl.textContent = `Agenda ${day} ${new Date(year, month - 1).toLocaleString('default', { month: 'long' })} ${year}`;

  agendaListEl.innerHTML = "";
  const items = agendaDummy[key];
  if (items) {
    items.forEach(item => {
      const div = document.createElement("div");
      div.className = "agenda-card";
      div.innerHTML = `
        <small>${item.organizer}</small>
        <p><strong>${item.title}</strong></p>
        <p>${item.time}</p>
        ${item.type.map(t => `<span class="badge">${t}</span>`).join('')}
        <span class="status">${item.status}</span>
      `;
      agendaListEl.appendChild(div);
    });
  } else {
    agendaListEl.innerHTML = `<p>Tidak ada agenda pada tanggal ini.</p>`;
  }
}

function changeMonth(diff) {
  current.setMonth(current.getMonth() + diff);
  renderCalendar(current);
}

renderCalendar(current);
