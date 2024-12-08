const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}

async function checkLocation() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        if (data.country === 'US') {
            document.getElementById('main-content').style.display = 'block';
        } else {
            document.getElementById('restricted-message').style.display = 'block';
        }
    } catch (error) {
        console.error('Error fetching geolocation data:', error);
        document.getElementById('restricted-message').textContent =
            'Unable to verify location. Please try again later.';
        document.getElementById('restricted-message').style.display = 'block';
    }
}
checkLocation();
  
