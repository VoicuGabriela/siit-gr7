document.querySelector('form').addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    const reqFields = document.querySelectorAll('.js-required');
    const radios = document.querySelectorAll('[name=gender]');
    const succesMessage = document.querySelector('[data-succes-message]');
    const nameMsg = document.querySelector('[data-name]');



    for (let i = 0; i < reqFields.length; i++) {
        const field = reqFields[i];


        if (field.value === '') {
            console.warn('Nu s-a completat field-ul cu numele: ', field.name);
            field.style.border = '1px solid #c00';
            field.addEventListener(
                'change',
                () => removeErrorState(field),
                { once: true }
            );
            e.preventDefault();
        } else {
            e.preventDefault();
            succesMessage.classList.add('success');
            succesMessage.innerHTML = 'Thank you for contacting us ' + nameMsg.value

        }
    }

    if (!radios[0].checked && !radios[1].checked) {
        const parent = radios[0].parentElement.parentElement;
        parent.style.border = '1px solid #c00';
        radios[0].addEventListener('change', () => removeErrorState(parent));
        radios[1].addEventListener('change', () => removeErrorState(parent));
        console.warn('Nu s-a ales sexul');
        e.preventDefault();
    }


    console.log(reqFields)
    setTimeout(() => {
        succesMessage.classList.remove('success');
        succesMessage.innerHTML = ''
    }, 2000);
}


function removeErrorState(elem) {
    elem.style.border = '1px solid #afafaf'
}