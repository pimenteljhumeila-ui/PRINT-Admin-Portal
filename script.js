const loginScreen=document.getElementById('loginScreen'), app=document.getElementById('app');
document.getElementById('loginForm').addEventListener('submit',e=>{e.preventDefault();loginScreen.classList.add('hidden');app.classList.remove('hidden');document.querySelector('.demo-note').style.display='block';});
document.getElementById('togglePassword').addEventListener('click',()=>{const p=document.getElementById('password');p.type=p.type==='password'?'text':'password';});
document.getElementById('logout').addEventListener('click',()=>{app.classList.add('hidden');loginScreen.classList.remove('hidden');});
function showPage(id){document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id===id));window.scrollTo({top:0,behavior:'smooth'});}
document.querySelectorAll('[data-page]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();showPage(el.dataset.page);}));
document.getElementById('orderStatus').addEventListener('change',e=>{let visible=0;document.querySelectorAll('#ordersTable tbody tr').forEach(row=>{const ok=e.target.value==='All'||row.dataset.status===e.target.value;row.style.display=ok?'':'none';if(ok)visible++;});document.getElementById('resultCount').textContent=`Showing ${visible} of 4 results`;});
document.querySelectorAll('.eye-btn').forEach(btn=>btn.addEventListener('click',()=>showPage('orderDetail')));
document.getElementById('updateDetail').addEventListener('click',()=>toast('Order status updated (demo only).'));
document.querySelectorAll('.save-prices').forEach(btn=>btn.addEventListener('click',()=>toast('Price changes saved (demo only).')));
function toast(message){const t=document.getElementById('toast');t.textContent=message;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200);}
document.getElementById('globalSearch').addEventListener('input',e=>{const q=e.target.value.toLowerCase();if(!q)return;showPage('orders');document.querySelectorAll('#ordersTable tbody tr').forEach(row=>row.style.display=row.innerText.toLowerCase().includes(q)?'':'none');});
function clock(){document.getElementById('clock').textContent=new Date().toLocaleString('en-PH',{hour:'2-digit',minute:'2-digit',dateStyle:'short'});}
clock();setInterval(clock,30000);
