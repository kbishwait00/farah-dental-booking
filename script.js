
function calculateTotal() {
  const services = Array.from(document.getElementById('services').selectedOptions).map(opt => opt.value);
  const regularCount = parseInt(document.getElementById('regularCount').value) || 0;
  const wisdomCount = parseInt(document.getElementById('wisdomCount').value) || 0;
  let total = 0;

  if (services.includes("cleaning")) total += 10;
  if (services.includes("braces")) total += 1500;
  if (services.includes("regular")) total += 15 * regularCount;
  if (services.includes("wisdom")) total += 30 * wisdomCount;

  document.getElementById("total").innerText = `Total: ${total} JOD`;
}
