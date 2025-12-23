const bgImage = document.querySelector('.preview .layer-background');

  document.querySelectorAll('.bg button[data-src]').forEach(button => {
    button.addEventListener('click', () => {
      bgImage.src = button.dataset.src;
    });
});

const neck = document.querySelector('.preview .layer-neck');

  document.querySelectorAll('.neck button[data-src]').forEach(button => {
    button.addEventListener('click', () => {
      neck.src = button.dataset.src;
    });
});

const hair = document.querySelector('.preview .layer-hair');

  document.querySelectorAll('.hair button[data-src]').forEach(button => {
    button.addEventListener('click', () => {
      hair.src = button.dataset.src;
    });
});

const accessories = document.querySelector('.preview .layer-accessories');

  document.querySelectorAll('.accessories button[data-src]').forEach(button => {
    button.addEventListener('click', () => {
      accessories.src = button.dataset.src;
    });
});

const ears = document.querySelector('.preview .layer-ears');

  document.querySelectorAll('.ears button[data-src]').forEach(button => {
    button.addEventListener('click', () => {
      ears.src = button.dataset.src;
    });
});

const eyes = document.querySelector('.preview .layer-eyes');

  document.querySelectorAll('.eyes button[data-src]').forEach(button => {
    button.addEventListener('click', () => {
      eyes.src = button.dataset.src;
    });
});

const mouth = document.querySelector('.preview .layer-mouth');

  document.querySelectorAll('.mouth button[data-src]').forEach(button => {
    button.addEventListener('click', () => {
      mouth.src = button.dataset.src;
    });
});

// Download button functionality

const downloadBtn = document.querySelector('.download-btn');
  const preview = document.querySelector('.preview .aplaca');

  downloadBtn.addEventListener('click', () => {
    html2canvas(preview, {
      backgroundColor: null, // keep transparency if any
      scale: 2               // higher = better quality
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = 'avatar-preview.jpg';
      link.href = canvas.toDataURL('image/jpeg', 0.95);
      link.click();
    });
  });