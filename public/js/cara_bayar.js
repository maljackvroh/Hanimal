document.addEventListener('DOMContentLoaded', function() {
const totalAmountPlaceholder = document.getElementById('amount');
const totalAmount = sessionStorage.getItem('totalAmount') || 'Rp 0'; // default jika tidak ada nilai

if (totalAmount) {
      totalAmountPlaceholder.textContent = formatRupiah(totalAmount);
    }
  });
  function formatRupiah(angka) {
    var reverse = angka.toString().split('').reverse().join('');
    var ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return 'Rp ' + ribuan;
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.className += " active";
}

function goBack() {
    window.history.back();
}
    
function getQueryParams() {
    const queryParams = new URLSearchParams(window.location.search);
    let queryObject = {};
    for (let [key, value] of queryParams.entries()) {
        queryObject[key] = value;
    }
      return queryObject;
}

function openResi() {
      const params = getQueryParams();
      const resiUrl = `/resi?name=${params.name}&animal_type=${params.animal_type}&address=${params.address}&age=${params.age}&gender=${params.gender}&phone=${params.phone}&medicine_cost=${params.medicine_cost}&admin_cost=${params.admin_cost}&service_cost=${params.service_cost}`;
      window.open(resiUrl, '_blank');
}
    
    