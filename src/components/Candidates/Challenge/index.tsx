import React, {useState, useLayoutEffect} from 'react'
import './index.css'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import NavBar from '../../NavBar/index'
import {challenges} from '../../../STORE/challenges'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faWrench, faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function CandidateChallenge(props: {handleLogout: () => void}) {
    const history = useHistory()
    const {id} = useParams<{id?: string}>()
    const idNumber = Number(id)
    const challenge = challenges.filter((challenge) => challenge.id === idNumber)
    const [formData, setFormData] = useState(challenge[0])

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    type FormValues = {
        id: number | string, 
        userId: number, 
        company: string,
        role: string, 
        location: string, 
        match: number, 
        challengeQuestion: string, 
        challengeAnswerLabel: string, 
        challengeAnswer: string, 
        resume: File | null, 
        professionalQuestions: Array<object>, 
        personalityQuestions: Array<object>, 
        additional: string,  
    }

    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            ...challenge[0]
        }
    });

    const {fields: professionalQuestions} = useFieldArray({
        control, 
        name: "professionalQuestions", 
    })

    const {fields: personalityQuestions} = useFieldArray({
        control, 
        name: "personalityQuestions", 
    })


    const onSubmit: SubmitHandler<FormValues> = (data) => {
        // const html = parseInt(data.htmlExperience) ?
        console.log(data)

        // setFormData(prevState => ({
        //     userId: prevState.userId, 
        //     company: prevState.company, 
        //     role: prevState.role, 
        //     location: prevState.location, 
        //     match: prevState.match, 
        //     challengeQuestion: prevState.challengeQuestion, 
        //     repositoryLink: data.repositoryLink, 
        //     resume: prevState.resume, 
        //     htmlExperience: data.htmlExperience, 
        //     cssExperience: data.cssExperience, 
        //     javaScriptExperience: data.javaScriptExperience, 
        //     reactExperience: data.javaScriptExperience, 
        //     description: data.description, 
        //     invention: data.invention, 
        //     novel: data.novel, 
        //     additional: data.additional
        // }))
        history.push('/confirmation'); 
    }

    return (
        <>
            <NavBar handleLogout={props.handleLogout} />
            <div className="challenge-container">
                <div className='back'>
                    <Link to="/candidate-dashboard">Back to Results</Link>
                </div>
                <section className='company-info'>
                    <div>
                        <FontAwesomeIcon icon={faBuilding}/>
                        <h2>{formData.company}</h2>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faWrench} />
                        <h2>{formData.role}</h2>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <h2>{formData.location}</h2>
                    </div>
                </section>
                <section className="challenge-info">
                    <h3>{formData.match}/10 match based on your skills and experience</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="challenge-description">
                            <h2>Challenge</h2>
                            <p>{formData.challengeQuestion}</p>
                            <label>{formData.challengeAnswerLabel}: </label>
                            <input {...register("challengeAnswer")}/>
                        </div>
                        <div className="additional-questions">
                            <h2>Additional Questions</h2>
                            {
                                professionalQuestions.map((item, i) => {
                                    return <div className="question" key={i}>
                                        <label>{item.question}</label>
                                        <select {...register(`professionalQuestions.${i}.answer`)}>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5+</option>
                                        </select>
                                    </div>
                                })
                            }
                            {
                                personalityQuestions.map((item, i) => {
                                    return <div className="question" key={i}>
                                    <label>{item.question}</label>
                                    <input type="text" {...register(`personalityQuestions.${i}.answer`)} />
                                </div>
                                })
                            }
                            <label>Anything else you would like to add?</label>
                            <textarea {...register("additional")} />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </div>
        </>
    )
}