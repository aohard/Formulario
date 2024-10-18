document.addEventListener('DOMContentLoaded', function() {
    const hoverZones = document.querySelectorAll('.hover-zone');
    const mainImage = document.getElementById('mainImage');

    // Función para ajustar el tamaño y la posición de las hover-zones para que coincidan con la imagen principal
    const adjustHoverZones = () => {
        const mainRect = mainImage.getBoundingClientRect();

        hoverZones.forEach((zone) => {
            zone.style.width = `${mainRect.width * 0.25}px`;
            zone.style.height = `${mainRect.height * 0.07}px`;

            switch (zone.id) {
                case 'hover1':
                    zone.style.top = `${mainRect.top + window.scrollY + mainRect.height * 0.17}px`;
                    zone.style.left = `${mainRect.left + window.scrollX + mainRect.width * 0.3}px`;
                    break;
                case 'hover2':
                    zone.style.top = `${mainRect.top + window.scrollY + mainRect.height * 0.31}px`;
                    zone.style.left = `${mainRect.left + window.scrollX + mainRect.width * 0.3}px`;
                    break;
                case 'hover3':
                    zone.style.top = `${mainRect.top + window.scrollY + mainRect.height * 0.45}px`;
                    zone.style.left = `${mainRect.left + window.scrollX + mainRect.width * 0.3}px`;
                    break;
            }

            zone.style.position = 'absolute';
        });
    };

    window.addEventListener('resize', adjustHoverZones);
    window.addEventListener('scroll', adjustHoverZones);
    adjustHoverZones();

    hoverZones.forEach((zone, index) => {
        const expandImage = document.getElementById(`expandImage${index + 1}`);
        const observation = document.getElementById(`observation${index + 1}`);

        // Evento cuando el mouse entra en la zona de hover
        zone.addEventListener('mouseenter', function() {
            // Ajustar el tamaño de la imagen expandida
            expandImage.style.width = `${zone.clientWidth * 8}px`;
            expandImage.style.height = `${zone.clientHeight * 8}px`;

  // Posicionar la imagen emergente de manera que su parte superior esté fija en la parte superior de la hover-zone
  const zoneRect = zone.getBoundingClientRect();
  expandImage.style.position = 'absolute';
  expandImage.style.top = `${zoneRect.top + window.scrollY + zoneRect.height / 0.25}px`;  // Posicionar desde la parte superior de la hover-zone
  expandImage.style.left = `${zoneRect.left + window.scrollX + (zoneRect.width / 1.8) - (expandImage.clientWidth / 2)}px`;  // Mantener centrada horizontalmente


            expandImage.style.opacity = '1';

                 // Ajustar la posición de la observación y hacerla visible debajo de la imagen principal
                 if (observation) {
                    observation.style.position = 'absolute';
                    observation.style.top = `${mainImage.getBoundingClientRect().bottom + window.scrollY + 20}px`;  // Posicionar debajo de la imagen principal con un margen de 20px
                    observation.style.left = `${mainImage.getBoundingClientRect().left + window.scrollX + (mainImage.getBoundingClientRect().width / 2)}px`;  // Posicionar en el centro horizontal de la imagen principal
                    observation.style.transform = 'translateX(-50%)';  // Ajustar para que quede centrada horizontalmente
                    observation.style.width = `${mainImage.getBoundingClientRect().width * 0.75}px`;  // Ocupar el 75% del ancho de la imagen principal
                    observation.style.opacity = '1';
                }
            });

        // Evento cuando el mouse sale de la zona de hover
        zone.addEventListener('mouseleave', function() {
            expandImage.style.width = '0';
            expandImage.style.height = '0';
            expandImage.style.opacity = '0';
            if (observation) {
                observation.style.opacity = '0';
            }
        });
    });
});
