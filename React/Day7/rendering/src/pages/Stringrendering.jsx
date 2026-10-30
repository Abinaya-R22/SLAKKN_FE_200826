import { Link } from "react-router-dom"

const Stringrendering = () => {
  let title_datas="AI"

  return (<>
  <div className="bg-blue-400 font-bold p-2">
        
        <div className="flex gap-15 mx-15 items-center justify-center h-100">
          
          <h1 className="mt-5 bg-white text-center w-35 h-25 p-3">String Rendering </h1>
          
          <h2>Artificial intelligence</h2>
          <p>{title_datas}  is a set of technologies that empowers computers to learn, reason, and perform a variety of advanced tasks in ways that used to require human intelligence,
             such as understanding language, analyzing data, and even providing helpful suggestions. 
            Its a transformational technology that can bring meaningful and positive change to people and societies and the world.
It encompasses many different disciplines, including computer science, data analytics and statistics, hardware and software engineering, linguistics, neuroscience, and even philosophy and psychology. 
{title_datas} is about teaching computers to do the amazing things our own brains can do, from understanding the world around them to learning new things and even coming up with fresh ideas.
For instance, {title_datas} is used in optical character recognition (OCR) to pull text and data from various images and documents. 
This process transforms unstructured content into structured, business-ready data, helping uncover valuable insights.</p>
    </div>
    <Link to={"/"} className="bg-black text-white rounded w-30 p-1">Back</Link>
  </div>
  </>
      )
}

export default Stringrendering
