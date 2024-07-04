document.addEventListener('DOMContentLoaded', function() {
  const name = sessionStorage.getItem('name');
  const animalType = sessionStorage.getItem('animalType');
  const address = sessionStorage.getItem('address');
  const age = sessionStorage.getItem('age');
  const gender = sessionStorage.getItem('gender');
  const phone = sessionStorage.getItem('phone');
  const medicineCost = sessionStorage.getItem('medicineCost');
  const adminCost = sessionStorage.getItem('adminCost');
  const serviceCost = sessionStorage.getItem('serviceCost');
  const travelCost = sessionStorage.getItem('travelCost');
  const totalAmount = sessionStorage.getItem('totalAmount');

  const nameElement = document.querySelector('.info p:nth-child(1)');
  const animalTypeElement = document.querySelector('.info p:nth-child(2)');
  const addressElement = document.querySelector('.info p:nth-child(3)');
  const ageElement = document.querySelector('.info p:nth-child(4)');
  const genderElement = document.querySelector('.info p:nth-child(5)');
  const phoneElement = document.querySelector('.info p:nth-child(6)');

  const medicineCostElement = document.querySelector('.invoice-details p:nth-child(1)');
  const adminCostElement = document.querySelector('.invoice-details p:nth-child(2)');
  const serviceCostElement = document.querySelector('.invoice-details p:nth-child(3)');
  const travelCostElement = document.querySelector('.invoice-details p:nth-child(4)');
  const totalAmountElement = document.querySelector('.total span');

  nameElement.textContent = `Nama Lengkap: ${name}`;
  animalTypeElement.textContent = `Jenis Hewan: ${animalType}`;
  addressElement.textContent = `Alamat: ${address}`;
  ageElement.textContent = `Umur: ${age} tahun`;
  genderElement.textContent = `Jenis Kelamin: ${gender}`;
  phoneElement.textContent = `Nomor Telepon: ${phone}`;

  medicineCostElement.textContent = `Biaya Obat: Rp ${formatRupiah(medicineCost)}`;
  adminCostElement.textContent = `Biaya Administrasi: Rp ${formatRupiah(adminCost)}`;
  serviceCostElement.textContent = `Biaya Pelayanan: Rp ${formatRupiah(serviceCost)}`;
  travelCostElement.textContent = `Biaya Perjalanan: Rp ${formatRupiah(travelCost)}`;
  totalAmountElement.textContent = `Total Pembayaran: Rp ${formatRupiah(totalAmount)}`;
});
