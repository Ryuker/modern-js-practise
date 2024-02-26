import '@fortawesome/fontawesome-free/css/all.css';
import styles from "./styles/style.css";

const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modal-btn');


function open() {
  modal.style.display = 'block';
}

function close() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target === modal) {
    close();
  }
}

// event listeners
modalBtn.addEventListener('click', open);
window.addEventListener('click', outsideClick);
