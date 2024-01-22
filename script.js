document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.checkbox');
    const totalAmountElement = document.getElementById('total-amount');
    const packages = document.querySelectorAll('.package');
  
    let totalAmount = 45;
  
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
        const price = parseInt(checkbox.getAttribute('data-price'));
  
        if (checkbox.checked) {
          totalAmount += price;
        } else {
          totalAmount -= price;
        }
  
        totalAmountElement.textContent = totalAmount + ' Euro';
      });
    });
  
    packages.forEach(function (package) {
      package.addEventListener('click', function (event) {
        console.log('Click pe pachet');
  
        const options = package.querySelectorAll('.option');
        const clickedInsideOption = Array.from(options).some(option => option.contains(event.target));
  
        if (!clickedInsideOption) {
          console.log('Deschide/opreste pachet');
  
          options.forEach(function (option) {
            if (option.style.display === 'none' || option.style.display === '') {
              option.style.display = 'block';
            } else {
              option.style.display = 'none';
            }
          });
  
          // Închide celelalte pachete
          packages.forEach(function (otherPackage) {
            if (otherPackage !== package) {
              otherPackage.querySelectorAll('.option').forEach(function (otherOption) {
                otherOption.style.display = 'none';
              });
            }
          });
        }
      });
    });
  });
  