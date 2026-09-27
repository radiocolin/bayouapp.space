// Renders a legal page's markdown (privacy.md, terms.md) into its
// `.legal` container, named by the container's data-source attribute —
// the same keep-the-text-in-markdown approach as the Wheelie site.
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.querySelector(".legal[data-source]");
  if (!container) return;
  try {
    const response = await fetch(container.dataset.source);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    container.innerHTML = marked.parse(await response.text(), { gfm: true });

    const title = container.querySelector("h1");
    if (title) title.classList.add("headline");
    const updated = [...container.querySelectorAll("p")].find((p) => p.textContent.startsWith("Last Updated:"));
    if (updated) updated.classList.add("updated");
  } catch (error) {
    console.error("Couldn’t load", container.dataset.source, error);
    container.querySelector(".loading").textContent = "This page couldn’t be loaded. Please try again, or email hello@bayouapp.space.";
  }
});
