document.addEventListener('DOMContentLoaded', function() {
  const serviceCostInput = document.querySelector('input[name="service_cost"]');
  const totalAmountPlaceholder = document.getElementById('totalAmount');
  
  const totalPesanan = sessionStorage.getItem('totalPesanan');
  
  if (totalPesanan) {
    serviceCostInput.value = totalPesanan;
  }

  const medicineCost = 50000;
  const adminCost = 5000;
  const travelCost = 0;
  
  const totalBiaya = parseInt(totalPesanan) + medicineCost + adminCost + travelCost;
  
  totalAmountPlaceholder.textContent = `Rp ${formatRupiah(totalBiaya)}`;

  sessionStorage.setItem('totalAmount', totalBiaya);

  function formatRupiah(angka) {
    var reverse = angka.toString().split('').reverse().join('');
    var ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return ribuan;
  }
});
