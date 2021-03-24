export const environment = {
    production: false,
    google: {
        webClientId: "8076749073-mknj6gcj4qhk4kvvghnci714pn2obgpd.apps.googleusercontent.com",
        hostedDomain: "siswa.uthm.edu.my"
    },
    auth: {
        codeLoginUrl: "http://172.20.10.4:8000/api/auth/students/login",
        credentialsLoginUrl: "https://jmclicks.com/api/login",
        lecturersInviteUrl: "http://172.20.10.4:8000/api/auth/lecturers/invite",
    }
};
