import React, {useState} from 'react'
import './index.css'
import { Link, useHistory } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form";
import NavBar from '../NavBar/index'

export default function Challenge() {
    const history = useHistory()

    type FormValues = {
        userId: number, 
        company: string,
        role: string, 
        location: string, 
        match: number, 
        question: string, 
        repositoryLink: string, 
        resume: File | null, 
        // htmlExperience: number | null | any, 
        htmlExperience: any, 
        cssExperience: number | null | any, 
        javaScriptExperience: number | null | any, 
        reactExperience: number | null | any, 
        description: string, 
        invention: string,
        novel: string, 
        additional: string,  

    }

    const [formData, setFormData] = useState({
        userId: 1, 
        company: 'Amazon', 
        role: 'React', 
        location: 'React', 
        match: 7, 
        question: 'Create a bathtub using JavaScript (preferably React). There should be a button that adds water to the tub, and a button that removes water. Bonus points if you can create this using React hooks.', 
        repositoryLink: '', 
        resume: null, 
        htmlExperience: null, 
        cssExperience: null, 
        javaScriptExperience: null, 
        reactExperience: null, 
        description: '', 
        invention: '', 
        novel: '', 
        additional: ''
    })

    const { register, handleSubmit } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        // const html = parseInt(data.htmlExperience) ?

        setFormData(prevState => ({
            userId: prevState.userId, 
            company: prevState.company, 
            role: prevState.role, 
            location: prevState.location, 
            match: prevState.match, 
            question: prevState.question, 
            repositoryLink: data.repositoryLink, 
            resume: prevState.resume, 
            htmlExperience: data.htmlExperience, 
            cssExperience: data.cssExperience, 
            javaScriptExperience: data.javaScriptExperience, 
            reactExperience: data.javaScriptExperience, 
            description: data.description, 
            invention: data.invention, 
            novel: data.novel, 
            additional: data.additional
        })); 

        history.push('/confirmation')
    }

    return (
        <>
            <NavBar />
            <div className="challenge-container">
                <div>
                    <Link to="/dashboard">Back to Results</Link>
                </div>
                <section className='company-info'>
                    <h1>Company: Amazon</h1>
                    <h2>Role: React Developer</h2>
                    <h3>Location: Remote</h3>
                    <h3>Match: 7/10 based on your skills and experience</h3>
                </section>
                <section className="challenge-info">
                    {/* <form onSubmit={event => handleSubmit(event)}> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="challenge-description">
                            <h2>Challenge description:</h2>
                            <p>Create a bathtub using JavaScript (preferably React). There should be a button that adds water to the tub, and a button that removes water. Bonus points if you can create this using React hooks.</p>
                            <label>Paste your github repository here:</label>
                            {/* <input type="text" name="repository" id="repository" /> */}
                            <input {...register("repositoryLink")}/>
                            <h4>Resume Upload</h4>
                            <input type="file" name="repository" id="repository" />
                        </div>
                        <div className="additional-questions">
                            <h2>Additional Questions</h2>
                            <div className="question">
                                <label htmlFor="html">How many years of professional HTML experience do you have?</label>
                                {/* <select name="html" id="html"> */}
                                <select id="htmlExperience" {...register("htmlExperience")}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5+</option>
                                </select>
                            </div>
                            <div className="question">
                                <label htmlFor="css">How many years of professional CSS experience do you have?</label>
                                {/* <select name="css" id="css"> */}
                                <select {...register("cssExperience")}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5+</option>
                                </select>
                            </div>
                            <div className="question">
                                <label htmlFor="javascript">How many years of professional JavaScript experience do you have?</label>
                                {/* <select name="javascript" id="javascript"> */}
                                <select {...register("javaScriptExperience")}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5+</option>
                                </select>
                            </div>
                            <div className="question">
                                <label htmlFor="react">How many years of professional React experience do you have?</label>
                                {/* <select name="react" id="react"> */}
                                <select {...register("reactExperience")}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5+</option>
                                </select>
                            </div>
                            <div className="question">
                                <label htmlFor="one-sentence-description">Describe yourself in one sentence:</label>
                                {/* <input type="text" name="one-sentence-description" id="one-sentence-description" /> */}
                                <input type="text" {...register("description")} />
                            </div>
                            <div className="question">
                                <label htmlFor="greatest-invention">What is the greatest invention?</label>
                                {/* <input type="text" name="greatest-invention" id="greatest-invention" /> */}
                                <input type="text" {...register("invention")} />

                            </div>
                            <div className="question">
                                <label htmlFor="favorite-novel">What is your favovorite novel?</label>
                                {/* <input type="text" name="favorite-novel" id="favorite-novel"/> */}
                                <input type="text" {...register("novel")} />

                            </div>
                            <label htmlFor="additional">Anything else you would like to add?</label>
                            {/* <textarea name="additional-info" id="additional-info" /> */}
                            <textarea {...register("additional")} />

                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </div>
        </>
    )
}
