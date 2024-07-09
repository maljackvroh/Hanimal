const hargaElements = document.querySelectorAll('#tarif-selectable-table tr.tarif-selectable td.tarif-td:nth-child(2)');
    
    hargaElements.forEach(element => {
      let harga = parseInt(element.textContent);
      element.textContent = `Rp ${formatRupiah(harga)}`;
    });

    const selectableRows = document.querySelectorAll('#tarif-selectable-table tr.tarif-selectable');

    selectableRows.forEach(row => {
      row.addEventListener('click', () => {
        row.classList.toggle('selected-tarif');
        updateTotal();
      });
    });

    const tarifButtonPesan = document.querySelector('.tarif-button');
    const totalAmount = document.getElementById('totalAmount');
    let total = 0;

    function updateTotal() {
      total = 0;
      const selectedRows = document.querySelectorAll('.selected-tarif td.tarif-td:nth-child(2)');
      selectedRows.forEach(row => {
        let harga = parseInt(row.textContent.replace(/\D/g, ''));
        total += harga;
      });
      totalAmount.textContent = `Rp ${formatRupiah(total)}`;
      sessionStorage.setItem('totalPesanan', total);
    }

    function formatRupiah(angka) {
      var reverse = angka.toString().split('').reverse().join('');
      var ribuan = reverse.match(/\d{1,3}/g);
      ribuan = ribuan.join('.').split('').reverse().join('');
      return ribuan;
    } 