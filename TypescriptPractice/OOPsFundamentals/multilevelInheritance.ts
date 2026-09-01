class Principal {

    SchoolName: String;
    SchoolStrength: number;

    constructor(schoolName: string, schoolStrength: number){
        this.SchoolName = schoolName
        this.SchoolStrength = schoolStrength
    }

    SchoolDetails(){
        console.log("SchoolDetails are : ", this.SchoolName)
        console.log(this.SchoolDetails)
}
}



class Teachers extends Principal{

    constructor(TeacherName: string, Subject: String){
        super(SchoolName)
        // this.TeacherName =TeacherName
        // this.Subject = Subject
        
    }

    SchoolDetails(){
        console.log("SchoolDetails are : ", this.SchoolName)
        console.log(this.SchoolDetails)
}


}


class Students extends Teachers {


}