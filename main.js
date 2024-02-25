import { formAssembly } from './components/form/formAssembly.js';
import { NewInstanceForm } from './data/data-form.js';

function updateUI() {
    const newForm = formAssembly(NewInstanceForm);

    document.body.append(newForm);
}

updateUI();
