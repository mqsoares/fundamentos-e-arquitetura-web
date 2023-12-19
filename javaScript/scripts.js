const baseUrl = "http://localhost:3000";

const studentModal = document.querySelector("#student-modal");
const studentTable = document.querySelector("#student-table");
const studentForm = document.querySelector("#student-form");
const studentModalTitle = document.querySelector("#student-modal-title");
const saveStudentButton = document.querySelector("#save-student");

const isValidInput = (whatValid) => {
  const inputsRequired = document.querySelectorAll(`.${whatValid}Required`);
  const modal = document.querySelector(`#${whatValid}-modal`);
  const messageInvalid = document.querySelector(`.${whatValid}-span-invalid`)
  const validations = [];

  if (modal.hasAttribute("open")) {
    inputsRequired.forEach(el => {
        const elTrim = el.value.trim();
        if(!elTrim) {
          el.classList.add("vazio");
          messageInvalid.innerHTML = "*** Todos os campos são obrigatórios, tente novamente.";
          validations.push(false);
        } else {
          el.classList.remove("vazio");
          validations.push(true);
        }
    })
  }

  const isValid = validations.every(el => el == true);
  return isValid;
}

const openStudentModal = () => studentModal.showModal();
const closeStudentModal = () => studentModal.close();

const createStudent = () => {
  studentModalTitle.innerHTML = `Novo Aluno`;
  saveStudentButton.innerHTML = "Criar";
  openStudentModal();
  saveStundentData(`${baseUrl}/alunos`, "POST");
};

const createStudentTableRow = (id, name, matricula, curso) => {
  const tableTr = document.createElement("tr");
  tableTr.innerHTML = `
    <td>${name}</td>
    <td>${matricula}</td>
    <td>${curso}</td>
    <td align="center">
      <button class="button button--danger" onclick="deleteStudentTable(${id})">Apagar</button>
      <button class="button button--success" onclick="editdStudentModal(${id})"}>Editar</button>
    </td>`;
  studentTable.appendChild(tableTr);
};


const saveStundentData = (url, method) => {
  studentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (isValidInput("student")){
      // capturar os dados do formulário
      const formData = new FormData(studentForm);
      // transformar os dados do formulário em um objeto
      const payload = new URLSearchParams(formData);
      fetch(url, {
        method: method,
        body: payload,
      }).catch((error) => {
        closeStudentModal();
        alert("Ocorreu um erro. Tente mais tarde.");
        console.error(error);
      });
    }
  });
};

const deleteStudentTable = (id) => {
  fetch(`${baseUrl}/alunos/${id}`, {
    method: "DELETE",
  }).catch((error) => {
    alert("Ocorreu um erro. Tente mais tarde.");
    console.error(error);
  });
};

const editdStudentModal = (id) => {
  fetch(`${baseUrl}/alunos/${id}`)
    .then((resp) => resp.json())
    .then((data) => {
      const { nome, matricula, curso } = data;
      studentModalTitle.innerHTML = `Editar Aluno ${nome}`;
      document.querySelector("#nome").value = nome;
      document.querySelector("#matricula").value = matricula;
      document.querySelector("#curso").value = curso;
      saveStudentButton.innerHTML = "Salvar";
      openStudentModal();
      saveStundentData(`${baseUrl}/alunos/${id}`, "PUT");
    })
    .catch((error) => {
      alert("Ocorreu um erro. Tente mais tarde.");
      console.error(error);
    });
};

const loadStudentTable = async () => {
  try {
    const response = await fetch(`${baseUrl}/alunos`);
    const data = await response.json();
    data.forEach((student) => {
      createStudentTableRow(
        student.id,
        student.nome,
        student.matricula,
        student.curso
      );
    });
  } catch (error) {
    alert("Ocorreu um erro. Tente mais tarde.");
    console.error(error);
  }
};

const subjectCard = document.querySelector(".subject-list")
const subjectModal = document.querySelector("#subject-modal");
const subjectModalTitle = document.querySelector("#subject-modal-title");
const saveSubjectButton = document.querySelector("#save-subject");
const subjectForm = document.querySelector("#subject-form");

const createSubjectCard = (id, nome, cargaHoraria, professor, status, observacos) => {
  const divCard = document.createElement("div");
  divCard.classList.add("subject-card");
  divCard.innerHTML = `
      <h3 class="subject-card__title">${nome}</h3>
      <hr />
      <ul class="subject-card__list">
        <li>carga horária: ${cargaHoraria}</li>
        <li>Professor: ${professor}</li>
        <li>Status <span class="tag tag--${status === "Opcional" ? "success" : "danger"}">${status}</span></li>
      </ul>
      <p>${observacos}</p>
     <br>
      <div style="text-align: end;">
        <button class="button button--danger" onclick="deleteSubjectCard(${id})">Apagar</button>
        <button class="button button--success" onclick="updateSubjectCard(${id})">Editar</button>
      </div>
  `
  subjectCard.appendChild(divCard)
};

const loadSubjectCards = async () => {
  try {
    const response = await fetch(`${baseUrl}/disciplinas`);
    const data = await response.json();
    // console.log(data)
    data.forEach(({id, nome, cargaHoraria, professor, status, observacos}) => {
      createSubjectCard( id, nome, cargaHoraria, professor, status, observacos);
    });
  } catch (error) {
    alert("Ocorreu um erro. Tente mais tarde.");
    console.error(error);
  }
};

const openSubjectModal = () => subjectModal.showModal();
const closeSubjectModal = () => subjectModal.close();

const createSubject = () => {
  subjectModalTitle.innerHTML = "Nova Disciplina";
  saveSubjectButton.innerHTML = "Criar";
  openSubjectModal();
  saveSubjectData(`${baseUrl}/disciplinas`, "POST");
};

const saveSubjectData = (url, method) => {
  subjectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (isValidInput("subject")){
      const formData = new FormData(subjectForm);
      const payload = new URLSearchParams(formData);
  
      fetch(url, {
        method: method,
        body: payload,
      }).catch((error) => {
        closeSubjectModal();
        alert("Ocorreu um erro. Tente mais tarde.");
        console.error(error);
      });
    }
  });
};

const deleteSubjectCard = (id) => {
  fetch(`${baseUrl}/disciplinas/${id}`, {
    method: "DELETE",
  }).catch((error) => {
    alert("Ocorreu um erro. Tente mais tarde.");
    console.error(error);
  });
};

const updateSubjectCard = (id) => {
  console.log("Entrou no update")
  fetch(`${baseUrl}/disciplinas/${id}`)
    .then(res => res.json())
    .then((data) => {
      const {nome, cargaHoraria, professor, status, observacos} = data;
      
      subjectModalTitle.innerHTML = `Editar Disciplina ${nome}`;
      saveSubjectButton.innerHTML = "Salvar";
      
      document.querySelector("#disciplina").value = nome;
      document.querySelector("#carga").value = cargaHoraria;
      document.querySelector("#professor").value = professor;
      document.querySelector("#status").value = status;
      document.querySelector("#observacoes").value = observacos;

      openSubjectModal();
      saveSubjectData(`${baseUrl}/disciplinas/${id}`, "PUT");
    })
    .catch((error) => {
      alert("Ocorreu um erro. Tente mais tarde.");
      console.error(error);
    });
}

loadStudentTable();
loadSubjectCards();
