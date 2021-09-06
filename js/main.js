var btnSubmit = document.querySelector('.js-contact-submit-btn');
var form = document.querySelector('.js-contact-form');

var inputName = document.querySelector('.js-contact-name-input');
var inputRelation = document.querySelector('.js-contact-relation-input');
var inputPhone = document.querySelector('.js-form-phone-input');

var contactsList = document.querySelector('.js-contact-list');

var contactsArray = []
var id = 0;

if(form){
  form.addEventListener('submit', function(evt){
    evt.preventDefault();


    id++;
    var contactItem = document.createElement('li');
    var contactName = document.createElement('h3');
    var contactRelation = document.createElement('p');
    var contactNumber = document.createElement('a');
    var contact = {
      name : null,
      relation : null,
      phone : null
    }

    contactName.textContent = inputName.value;
    contactRelation.textContent = inputRelation.value;
    contactNumber.textContent = inputPhone.value;


    contact.name = inputName.value;
    contact.relation = inputRelation.value;
    contact.phone = inputPhone.value;

    inputName.value = '';
    inputRelation.value = '';
    inputPhone.value = '';

    contactItem.appendChild(contactName);
    contactItem.appendChild(contactRelation);
    contactItem.appendChild(contactNumber);

    contactNumber.href="tel:" + inputPhone.value

    contactsList.appendChild(contactItem);
    contactsArray.push(contact);
  });
}
console.log(contactsArray);