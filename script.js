const opening = document.getElementById("opening");
const envelope = document.getElementById("envelope");
const seal = document.getElementById("seal");
const website = document.getElementById("website");

let opened = false;

function openInvitation() {
  if (opened) return;
  opened = true;

  envelope.classList.add("open");

  setTimeout(() => {
    website.classList.add("show");
  }, 500);

  setTimeout(() => {
    opening.classList.add("hide");
  }, 1300);
}

seal.addEventListener("click", (event) => {
  event.stopPropagation();
  openInvitation();
});

envelope.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openInvitation();
  }
});
