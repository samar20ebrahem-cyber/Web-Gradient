class NotesApp{
    constructor(){
        this.textareaNote = document.getElementById('noteText');
        this.addBtnNote = document.getElementById('addBtn');
        this.textColorNote = document.getElementById('text-color');
        this.bgColorNote = document.getElementById('bg-color');
        this.notesContainer = document.getElementById('notes-container');
        this.event();
    }

    event(){
     this.addBtnNote.addEventListener('click',(e)=>{
        this.addNotes();
     });
    }

    addNotes(){
    const textValue = this.textareaNote.value.trim();
    if(textValue === ''){
      alert("Please write a note first");
      return;
    }

    const textColorValue =this.textColorNote.value;
    const bgColorValue =this.bgColorNote.value;

    this.renderNotes(textValue, textColorValue, bgColorValue);
    this.textareaNote.value = "";
    }

    renderNotes(textValue, textColorValue, bgColorValue){
    //  creat a div
    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card');
    noteCard.style.backgroundColor=bgColorValue;
    noteCard.style.color=textColorValue;
    noteCard.textContent=textValue;
    const noteTextSpan = document.createElement('span');
    noteTextSpan.textContent = textValue;
    noteCard.appendChild(noteTextSpan);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.style.cursor = 'pointer'

    deleteBtn.addEventListener('click',()=>{
        noteCard.remove();
    });
    noteCard.appendChild(deleteBtn);
    this.notesContainer.appendChild(noteCard);
    }
}

const app = new NotesApp();