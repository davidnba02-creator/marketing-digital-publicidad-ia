document.querySelectorAll('.accordion-item summary').forEach((summary) => {
  summary.addEventListener('click', () => {
    const current = summary.parentElement;
    document.querySelectorAll('.accordion-item[open]').forEach((item) => {
      if (item !== current) item.removeAttribute('open');
    });
  });
});
