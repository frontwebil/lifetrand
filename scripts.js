function getFormattedDate() {
  const today = new Date();
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return today.toLocaleDateString('en-US', options);
}

document.getElementById('today-date').innerHTML = getFormattedDate();