export let CVInformation = {
    personalInformation : {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email:'',
        address: ''
    },
    professionalSummary:{
        role:'',
        summary:''
    },
    workExperience:[],
    education:[],
    skills:[],
}

export function changeCVInformation(newCVInformation){
    CVInformation = newCVInformation;
}