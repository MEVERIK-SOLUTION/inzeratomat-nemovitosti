document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generateBtn');
  const outputSection = document.getElementById('outputSection');
  const listingOutput = document.getElementById('listingOutput');

  generateBtn.addEventListener('click', () => {
    // Collect values from form
    const offerType = document.getElementById('offerType').value.trim();
    const propertyType = document.getElementById('propertyType').value.trim();
    const dispozice = document.getElementById('dispozice').value.trim();
    const areaHouse = document.getElementById('areaHouse').value.trim();
    const areaPlot = document.getElementById('areaPlot').value.trim();
    const location = document.getElementById('location').value.trim();
    const price = document.getElementById('price').value.trim();
    const floors = document.getElementById('floors').value.trim();
    const orientationSelect = document.getElementById('gardenOrientation');
    const orientaceValues = Array.from(orientationSelect.selectedOptions).map(opt => opt.value);
    const tech = document.getElementById('tech').value.trim();

    // Build orientation string
    const orientace = orientaceValues.length > 0 ? orientaceValues.join(', ') : '–';

    // Format price with thousands separators
    const formattedPrice = price ? Number(price).toLocaleString('cs-CZ') + ' Kč' : 'na vyžádání';

    // Template for listing
    const listing = [];
    listing.push(`**${offerType} ${propertyType} ${dispozice}, ${areaHouse} m², pozemek ${areaPlot} m² – ${location}**\n`);
    listing.push(`Nabízíme k ${offerType.toLowerCase()} ${propertyType} o dispozici ${dispozice}, umístěný v klidné lokalitě ${location}. ` +
                 `Nemovitost má užitnou plochu přibližně ${areaHouse} m² a nachází se na pozemku o výměře ${areaPlot} m². ` +
                 `Jedná se o ${floors}-podlažní objekt, který poskytuje komfortní rodinné bydlení.`);
    if (tech) {
      listing.push(`Vybavení a technologie: ${tech}.`);
    }
    listing.push(`Orientace zahrady: ${orientace}.`);
    listing.push(`Cena: ${formattedPrice}.`);
    listing.push(`Pro více informací nás neváhejte kontaktovat.`);

    // Display the listing
    listingOutput.textContent = listing.join('\n\n');
    outputSection.style.display = 'block';
  });
});