const addBtn = document.getElementById("addEvent");
const eventList = document.getElementById("eventList");
const clearBtn = document.getElementById("clearAll");
const sampleBtn = document.getElementById("sample");


addBtn.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;

  if (!title || !date) {
    alert("Please fill required fields");
    return;
  }

  createEventCard(title, date, category, description);
});


function createEventCard(title, date, category, description) {
  const card = document.createElement("div");
  card.className = "event";

  card.innerHTML = `
    <button class="delete">×</button>
    <h3>${title}</h3>
    <p>📅 ${date}</p>
    <span>${category}</span>
    <p>${description || "No description"}</p>
  `;

  eventList.appendChild(card);
}


eventList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});


clearBtn.addEventListener("click", () => {
  eventList.innerHTML = "";
});


sampleBtn.addEventListener("click", () => {
  createEventCard("Emifest", "2026-01-14", "Social", "Sample event");
  createEventCard("Tech Talk", "2026-02-10", "Conference", "JavaScript session");
});


