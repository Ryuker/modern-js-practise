import '@fortawesome/fontawesome-free/css/all.css';
import styles from "./styles/style.css";

// Component Imports
import Modal from './components/Modal';
import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';
import IdeasApi from './services/ideasApi';

// Instantiate Modal
const modal = new Modal();
const ideaForm = new IdeaForm();
const ideaList = new IdeaList();

