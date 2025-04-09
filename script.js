
let sb = document.querySelector(".sb");
let gt = document.querySelector(".gt");
let resumeform = document.querySelector("#resumeform");
let dresume = document.querySelector(".dresume");
let gender = document.querySelector("#gender");
let maritalStatus = document.querySelector("#maritalStatus");
let religion = document.querySelector("#religion");



let edcount = 1;



let imgUrl = ""
const FindUrl = () => { 
    let fileReader = new FileReader();
    fileReader.readAsDataURL(image.files[0]);
    fileReader.onload = () => { 
        imgUrl = fileReader.result;
    
    }
}
image.addEventListener("change", FindUrl);
  
function downloadPDF() {
  const element = document.getElementById("resume-output");

  // Use html2pdf library to generate and download the PDF
  const opt = {
    margin: 0.5,
    filename: 'Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
}



let skillinp = document.querySelector(".skillinp");
let addSkill = document.querySelector(".addSkill");
let experienceinp = document.querySelector(".experienceinp");
let addExperience = document.querySelector(".addExperience");
let educationinp = document.querySelector(".educationinp");
let addEducation = document.querySelector(".addEducation");
let hobies = document.querySelector(".hobies");
let addHobies = document.querySelector(".addHobies");

// create skill element



let count = 1;

const createSkill = () => { 
let skillInp = document.createElement("div");
skillInp.className = "skillinp1";
    skillInp.innerHTML = `
   <input type="text" id="skills${count}" name="skills"> 
          <button class="removeSkiil" type="button">Remove</button>
          `;
    skillinp.appendChild(skillInp);
   


}
// remove skill element
const removeSkill = (e) => {
    if (e.target.classList.contains("removeSkiil")) {
        e.target.parentElement.remove();
        count--;
    }
}
skillinp.addEventListener("click", removeSkill);

addSkill.addEventListener("click", () => {
  count++;
  if (count > 5) {
      alert("You can add up to 5 skills only.");
      return
    } 
    createSkill();
}
)

// create experience element
let excount = 1;
const createExperience = () => { 
    let experienceInp = document.createElement("div");
    experienceInp.className = "experienceinp1";
    experienceInp.innerHTML = `
   <input type="text" id="experience${excount}" name="experience"> 
          <button class="removeExperience" type="button">Remove</button>
          `;
    experienceinp.appendChild(experienceInp);
}
// remove experience element
const removeExperience = (e) => {
    
    if (e.target.classList.contains("removeExperience")) {
        e.target.parentElement.remove();
        excount--;
    }
    
}
addExperience.addEventListener("click", () => { 
    
    console.log(count);
    excount++;
    
    if (excount > 5) {
        alert("You can add up to 5 experience only.");
        return
    }
    createExperience();
})
experienceinp.addEventListener("click", removeExperience);


// education element
const createEducation = () => {
    let educationInp = document.createElement("div");
    educationInp.className = "educationinp1";
    educationInp.innerHTML = `
   <input type="text" id="education${edcount}" name="education"> 
          <button class="removeEducation" type="button">Remove</button>
          `;
    educationinp.appendChild(educationInp);
}
// remove education element
const removeEducation = (e) => {
    
    if (e.target.classList.contains("removeEducation")) {
        e.target.parentElement.remove();
        edcount--;
    }
    
}

addEducation.addEventListener("click", () => { 
        
        
        edcount++;
        
        if (edcount > 5) {
            alert("You can add up to 5 education only.");
            return
        }
        createEducation();
})

educationinp.addEventListener("click", removeEducation);

// create hobies element
let hbcount = 1;
const createHobies = () => {
    let hobiesInp = document.createElement("div");
    hobiesInp.className = "hobiesinp1";
    hobiesInp.innerHTML = `
   <input type="text" id="hobies${hbcount}" name="hobies"> 
          <button class="removeHobies" type="button">Remove</button>
          `;
    hobies.appendChild(hobiesInp);
}
// remove hobies element
const removeHobies = (e) => {
    
    if (e.target.classList.contains("removeHobies")) {
        e.target.parentElement.remove();
        hbcount--;
        
    }
    
}
addHobies.addEventListener("click", () => { 
        
        hbcount++;
        
        if (hbcount > 5) {
            alert("You can add up to 5 hobies only.");
            return
        }
        createHobies();
})
hobies.addEventListener("click", removeHobies);





resumeform.addEventListener("submit", (e) => { 
    e.preventDefault();
    let Fullname = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let address = document.querySelector("#address");
let father = document.querySelector("#father");
let dob = document.querySelector("#dateOfBirth");
let languages = document.querySelector("#language");
let objective = document.querySelector("#summary");
let skills = document.querySelector("#skills");
let education = document.querySelector("#education");
let experience = document.querySelector("#experience");
let hobbies = document.querySelector("#hobies");
let image = document.querySelector("#image");

let skills2 = document.querySelector("#skills2");
let skills3 = document.querySelector("#skills3");
let skills4 = document.querySelector("#skills4");
let skills5 = document.querySelector("#skills5");

let education2 = document.querySelector("#education2");
let education3 = document.querySelector("#education3");
let education4 = document.querySelector("#education4");
let education5 = document.querySelector("#education5");

let experience2 = document.querySelector("#experience2");
let experience3 = document.querySelector("#experience3");
let experience4 = document.querySelector("#experience4");
let experience5 = document.querySelector("#experience5");

let hobies2 = document.querySelector("#hobies2");
let hobies3 = document.querySelector("#hobies3");
let hobies4 = document.querySelector("#hobies4");
    let hobies5 = document.querySelector("#hobies5");
    let form =document.querySelector("form")
let sb = document.querySelector(".sb");
    let gt = document.querySelector(".gt");
    let conent= `   <div class="pritable">
    <div class="picture">
        <img src=${imgUrl} alt="img">
    </div>
    <div class="intro">

        <h1>RESUME</h1>
        <div class="detailPer">

            <h2>${Fullname.value}</h2>
            <p>+91 ${phone.value}</p>
            <p>Email Id:${email.value} </p>
        </div>
    </div>

    <div class="objective">
        <h2>OBJECTIVE</h2>
        <p>${objective.value}.</p>
    </div>
    <div class="education">
        <h2>EDUCATION</h2>
        <ul>

            
            <li>${education.value}</li>

          ${ education2?.value ? `<li>${education2.value}</li>` : "" }
            ${ education3?.value ? `<li>${education3.value}</li>` : "" }
            ${ education4?.value ? `<li>${education4.value}</li>` : "" }
            ${ education5?.value ? `<li>${education5.value}</li>` : "" }
      
        </ul>
</div>
    <div class="skills">
        <h2>SKILLS</h2>
        <ul>
            <li>${skills?.value}</li>
        ${ skills2?.value ? `<li>${skills2.value}</li>` : "" } 
            ${ skills3?.value ? `<li>${skills3.value}</li>` : "" }
            ${ skills4?.value ? `<li>${skills4.value}</li>` : "" }
            ${ skills5?.value ? `<li>${skills5.value}</li>` : "" }
        </ul>
    </div>

  
    <div class="workExperience">
        <h2>WORK EXPERIENCE</h2>
        <ul>
            <li>${experience?.value}</li>
            ${ experience2?.value ? `<li>${experience2.value}</li>` : "" }
            ${ experience3?.value ? `<li>${experience3.value}</li>` : "" }
            ${ experience4?.value ? `<li>${experience4.value}</li>` : "" }
            ${ experience5?.value ? `<li>${experience5.value}</li>` : "" }
        </ul>
       
    </div>
    <div class="strengthHobbies">
        <h2>STRENGHTS & HOBBIES</h2>
       <ul>
            <li>${hobbies?.value}</li>
            ${ hobies2?.value ? `<li>${hobies2.value}</li>` : "" }
            ${ hobies3?.value ? `<li>${hobies3.value}</li>` : "" }
            ${ hobies4?.value ? `<li>${hobies4.value}</li>` : "" }
            ${ hobies5?.value ? `<li>${hobies5.value}</li>` : "" }
        </ul>
       </ul>
    </div>
    <div class="personalDetails">
        <h2>PERSONAL DETAILS</h2>
        <div class="per">
              <div class="cd">

                  <p>Father's Name: </p>
                  
                   <span>Mr.${father.value}</span>

              </div>
              <div class="cd">

                  <p>Date of Birth: </p><span>${dob.value}</span>
              </div>
              <div class="cd">

                  <p>Gender: </p><span>${gender.value}</span>
              </div>
              <div class="cd">

                  <p>Languages Known:</p> <span> ${languages?.value}</span>
              </div>
              <div class="cd">

                  <p>Marital Status:</p> <span> ${maritalStatus?.value}</span>
              </div>
              <div class="cd">

                  <p>Religion:</p> <span> ${religion?.value}</span>
              </div>
              <div class="cd">

                  <p>Address:</p> <span> ${address.value}</span>
              </div>
            </div>

            
            <div class="dc">
                <h2>DECLARATION </h2>
                <p> I hereby declare that the information provided above is true to the best of my knowledge and belief.</p>

            </div>
            <div class="cd dt">

                <p>Date ........</p>
                <span>${Fullname.value}</span>
            </div>
           
    </div>
</div>`
    let resumeOutput = document.querySelector("#resume-output");
  

    document.getElementById("resume-output").innerHTML = conent;
    let header = document.querySelector(".header");

    header.style.display = "none";


    resumeform.style.display = "none";
    resumeOutput.style.display = "block";
    gt.style.display = "block";
    dresume.style.display = "block";


})
gt.addEventListener("click", () => { 
    resumeform.style.display = "block";
    gt.style.display = "none";
})


dresume.addEventListener("click", () => {
    dresume.style.display = "none";
    downloadPDF();
})