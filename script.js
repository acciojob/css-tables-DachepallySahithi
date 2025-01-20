//your JS code here. If required.
function sortTable() {
  const table = document.querySelector('table');
  const rows = Array.from(table.rows).slice(1); // Exclude the header row

  rows.sort((a, b) => {
    const cellA = a.cells[0].textContent.toLowerCase();
    const cellB = b.cells[0].textContent.toLowerCase();
    return cellA.localeCompare(cellB);
  });

  rows.forEach(row => table.appendChild(row));
}
window.on;oad=sortTable;