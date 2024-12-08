const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}

async function checkAccess() {
    try {
      const response = await fetch('https://ipinfo.io?token=YOUR_API_TOKEN'); // Replace with your token
      const data = await response.json();
  
      if (data.country !== 'US') {
        document.getElementById('content').style.display = 'none';
        document.getElementById('blocked').style.display = 'block';
      }
    } catch (error) {
      console.error('Error fetching geolocation:', error);
    }
  }
  
  checkAccess();
  
