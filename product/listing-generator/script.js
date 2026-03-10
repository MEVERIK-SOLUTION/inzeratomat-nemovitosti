document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generateBtn');
  const outputSection = document.getElementById('outputSection');
  const listingShort = document.getElementById('listingShort');
  const listingMedium = document.getElementById('listingMedium');
  const listingLong = document.getElementById('listingLong');

  function withFallback(value, fallback) {
    return value ? value : fallback;
  }

  function copyText(text) {
    if (!text) {
      return;
    }
    navigator.clipboard.writeText(text).catch(() => {
      // Clipboard API can fail on insecure contexts.
    });
  }

  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-copy-target');
      const target = document.getElementById(targetId);
      if (!target) {
        return;
      }
      copyText(target.textContent);
      const original = btn.textContent;
      btn.textContent = 'Zkopírováno';
      setTimeout(() => {
        btn.textContent = original;
      }, 1000);
    });
  });

  generateBtn.addEventListener('click', () => {
    // Collect values from form.
    const offerType = document.getElementById('offerType').value.trim();
    const propertyType = document.getElementById('propertyType').value.trim();
    const dispozice = withFallback(document.getElementById('dispozice').value.trim(), 'neuvedeno');
    const areaHouse = withFallback(document.getElementById('areaHouse').value.trim(), 'neuvedeno');
    const areaPlot = withFallback(document.getElementById('areaPlot').value.trim(), 'neuvedeno');
    const location = withFallback(document.getElementById('location').value.trim(), 'neuvedeno');
    const price = document.getElementById('price').value.trim();
    const floors = withFallback(document.getElementById('floors').value.trim(), 'neuvedeno');
    const orientationSelect = document.getElementById('gardenOrientation');
    const orientaceValues = Array.from(orientationSelect.selectedOptions).map((opt) => opt.value);
    const tech = document.getElementById('tech').value.trim();

    // Build orientation string.
    const orientace = orientaceValues.length > 0 ? orientaceValues.join(', ') : '–';

    // Format price with thousands separators.
    const formattedPrice = price ? Number(price).toLocaleString('cs-CZ') + ' Kč' : 'na vyžádání';

    const shortVariant = [];
    shortVariant.push(`${offerType} ${propertyType} ${dispozice}, ${areaHouse} m², pozemek ${areaPlot} m², ${location}`);
    shortVariant.push(`Cena: ${formattedPrice}`);
    shortVariant.push(`Dispozice: ${dispozice}, podlaží: ${floors}`);
    if (tech) {
      shortVariant.push(`Technologie: ${tech}`);
    }
    shortVariant.push('Více informací na vyžádání.');

    const mediumVariant = [];
    mediumVariant.push(`Nabízíme k ${offerType.toLowerCase()} ${propertyType} o dispozici ${dispozice} v lokalitě ${location}.`);
    mediumVariant.push(`Užitná plocha cca ${areaHouse} m², pozemek ${areaPlot} m², ${floors} podlaží.`);
    if (tech) {
      mediumVariant.push(`Technologie a vybavení: ${tech}.`);
    }
    mediumVariant.push(`Orientace zahrady: ${orientace}.`);
    mediumVariant.push(`Cena: ${formattedPrice}.`);
    mediumVariant.push('Kontaktujte nás pro domluvení prohlídky.');

    const longVariant = [];
    longVariant.push(`${offerType} ${propertyType} ${dispozice} – ${location}`);
    longVariant.push(`Nabízíme k ${offerType.toLowerCase()} ${propertyType} v klidné lokalitě ${location}. Nemovitost nabízí dispozici ${dispozice}, užitnou plochu přibližně ${areaHouse} m² a pozemek o výměře ${areaPlot} m².`);
    longVariant.push(`Objekt má ${floors} podlaží a je vhodný pro komfortní rodinné bydlení i dlouhodobou investici.`);
    if (tech) {
      longVariant.push(`Mezi hlavní přednosti patří: ${tech}.`);
    }
    longVariant.push(`Orientace zahrady: ${orientace}.`);
    longVariant.push(`Cena: ${formattedPrice}.`);
    longVariant.push('V případě zájmu o detailní podklady a termín prohlídky nás neváhejte kontaktovat.');

    listingShort.textContent = shortVariant.join('\n');
    listingMedium.textContent = mediumVariant.join('\n\n');
    listingLong.textContent = longVariant.join('\n\n');
    outputSection.style.display = 'block';
  });
});