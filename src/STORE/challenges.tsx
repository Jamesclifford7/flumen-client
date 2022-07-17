type FormValues = {
    userId: number, 
    company: string,
    role: string, 
    location: string, 
    match: number, 
    challengeQuestion: string, 
    repositoryLink: string, 
    resume: File | null, 
    professionalQuestions: Array<String>, 
    personalityQuestions: Array<String>, 
    additional: string, 
}

export const challenges = [
    {
        userId: 1, 
        company: 'Amazon', 
        role: 'React', 
        location: 'React', 
        match: 7, 
        challengeQuestion: 'Create a bathtub using JavaScript (preferably React). There should be a button that adds water to the tub, and a button that removes water. Bonus points if you can create this using React hooks.', 
        repositoryLink: '', 
        resume: null, 
        professionalQuestions: [
            {
                question: "How many years of professional HTML experience do you have?", 
                answer: 0
            }, 
            {
                question: "How many years of professional CSS experience do you have?", 
                answer: 0
            }, 
            {
                question: "How many years of professional JavaScript experience do you have?", 
                answer: 0
            },  
            {
                question: "How many years of professional React experience do you have?", 
                answer: 0
            }
        ], 
        personalityQuestions: [
            {
                question: "Describe yourself in one sentence:", 
                answer: ""
            }, 
            {
                question: "What is the greatest invention?", 
                answer: ""
            }, 
            {
                question: "What is your favovorite novel?", 
                answer: ""
            }, 
            {
                question: "Anything else you would like to add?", 
                answer: ""
            }
        ], 
        additional: 'Is there anything else you would like to add', 
    }, 
    {
        userId: 1, 
        company: 'Amazon', 
        role: 'React', 
        location: 'React', 
        match: 7, 
        challengeQuestion: 'Create a bathtub using JavaScript (preferably React). There should be a button that adds water to the tub, and a button that removes water. Bonus points if you can create this using React hooks.', 
        repositoryLink: '', 
        resume: null, 
        professionalQuestions: [], 
        personalityQuestions: [], 
        additional: '', 
    }, 
    {
        userId: 1, 
        company: 'Amazon', 
        role: 'React', 
        location: 'React', 
        match: 7, 
        challengeQuestion: 'Create a bathtub using JavaScript (preferably React). There should be a button that adds water to the tub, and a button that removes water. Bonus points if you can create this using React hooks.', 
        repositoryLink: '', 
        resume: null, 
        professionalQuestions: [], 
        personalityQuestions: [], 
        additional: '', 
    }
]