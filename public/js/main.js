const form = document.forms.formTest;
const btn = document.querySelector('.specialBtn');
const respTxt = document.querySelector('.resttext');


async function loadFile(data) {
  try {
    const response = await axios.post('/uploads', data);
    const dataRes = response.data;
    console.log(dataRes);
    if (dataRes.valid) {
      form.filename.value = '';
    }
    respTxt.innerText = dataRes.status;
    btn.classList.remove('disabled');
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  btn.classList.add('disabled');
  const data = new FormData(form);
  loadFile(data);
});
