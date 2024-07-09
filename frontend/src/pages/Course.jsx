import Header from "../components/Header"
import { PageTitle } from "../components/pageTitle"

function Course() {
  return (
    <>
    <Header />
    <PageTitle title='Course' />
    <div className="container">
      <h1 className="container-header text-center">Intoduction to Programming</h1>
      <h3 className="font-18 text-center mt-5">Unlock the World of Coding: Your Yourney Begins Here</h3>
      <div className="w-96 h-auto mt-10 bg-slate-300 rounded m-6 p-2"> 
        <div className="text-center justify-evenly">
        <h1 className="text-3xl">Course Overview</h1>
        <p className="mt-4">Programming is a powerful tool that allows you to create software, automate tasks, and bring your ideas to life. Whether you're looking to start a new career, enhance your skills, or simply explore a new hobby, this course will provide you with the foundational knowledge you need to succeed.</p>
        </div>
      </div>
      <p></p>
    </div>
    </>
  )
}

export default Course