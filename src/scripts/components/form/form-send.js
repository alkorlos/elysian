const formSend = function () {
	const inputs = Array.from(document.querySelectorAll('.form__input'));

	inputs.map(input => {
		const wrapper = input.closest('.form__element');

		input.addEventListener('blur', () => {
			if (!input.value && input.dataset.required) {
				wrapper.classList.remove('form__element_error');
			}

			if (input.value === '' && input.dataset.required) {
				wrapper.classList.add('form__element_error');
			}
		});

		input.addEventListener('valid', () => {
			input.parentNode.classList.remove('form__element_error');
		});

		input.addEventListener('input', e => {
			if (input.dataset.required) {
				input.value = e.target.value;
				if (input.value === '') {
					wrapper.classList.add('form__element_error');
				} else {
					wrapper.classList.remove('form__element_error');
				}
			}
		});
	});

	const forms = Array.from(document.querySelectorAll('.form'));
	forms.map(form => {
		form.addEventListener('submit', e => {
			e.preventDefault();
			e.stopPropagation();

			const formData = new FormData(form);
			const options = {
				method: 'POST',
				credentials: 'include',
				redirect: 'follow',
				body: formData
			};
			let inputsCheck = true;

			const inputs = form.querySelectorAll('.form__input');
			for (let i = 0; i < inputs.length; i++) {
				const formElement = inputs[i].closest('.form__element');
				if (inputs[i].dataset.required && inputs[i].value === '') {
					formElement.classList.add('form__element_error');
					inputsCheck = false;
				} else {
					formElement.classList.remove('form__element_error');
				}
			}

			if (inputsCheck === true) {
				form.querySelector('.form__message').classList.add('form__message_visible');
				form.querySelector('.form__button').classList.add('form__button_hidden');
				return fetch(form.action, options);
			}
		});
	});
};

export { formSend };
