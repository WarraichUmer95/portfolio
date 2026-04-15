export function scrollToSection(targetHref) {
  if (!targetHref?.startsWith("#")) {
    return false;
  }

  const target = document.querySelector(targetHref);

  if (!target) {
    return false;
  }

  const top = target.getBoundingClientRect().top + window.scrollY - 88;

  window.scrollTo({
    top,
    behavior: "smooth",
  });

  const cleanUrl = `${window.location.pathname}${window.location.search}`;
  window.history.replaceState(null, "", cleanUrl);

  return true;
}
