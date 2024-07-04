document.addEventListener('DOMContentLoaded', function() {
    const serviceCostInput = document.querySelector('input[name="service_cost"]');
    const totalAmountPlaceholder = document.getElementById('totalAmount');
    const serviceCostFromSession = sessionStorage.getItem('totalPesanan');
    
    if (serviceCostFromSession) {
      serviceCostInput.value = serviceCostFromSession;
    }

    function getScript1Total() {
      const medicineCost = 50000;
      const adminCost = 5000;
      const travelCost = 50000;
      const serviceCost = parseInt(sessionStorage.getItem('totalPesanan')) || 0;
      
      const totalScript1 = medicineCost + adminCost + serviceCost + travelCost;
      return totalScript1;
    }
    
    function formatRupiah(angka) {
      var reverse = angka.toString().split('').reverse().join('');
      var ribuan = reverse.match(/\d{1,3}/g);
      ribuan = ribuan.join('.').split('').reverse().join('');
      return ribuan;
    }
    
    function setTotalFromScript1() {
      const totalScript1 = getScript1Total();
      totalAmountPlaceholder.textContent = `Rp ${formatRupiah(totalScript1)}`;
    }
    
    setTotalFromScript1();
});
    