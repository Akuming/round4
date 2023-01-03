import { useState } from "react";

const CreateRiddles = () => {
    const [answer, setAnswer] = useState("");
    const [firstClue, setFirstClue] = useState("");
    const [secondClue, setSecondClue] = useState("");
    const [thirdClue, setThirdClue] = useState("");
    const [anyOtherClue, setAnyOtherClue] = useState("");
    const [information, setInformation] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    function displaySuccessMessage(){
        return(
        <div id="alert-3" class="flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200" role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Info</span>
            <div class="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
                Your riddle has been entered successfully. 
            </div>
            <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300" data-dismiss-target="#alert-3" aria-label="Close">
                <span class="sr-only">Close</span>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
        )
    }

    

    function submitRiddle(e){
        e.preventDefault();
        //console.log("The answer is " + answer);
        //console.log("The first clue is " + firstClue);
        //console.log("The second clue is " + secondClue);
        //console.log("The third clue is " + thirdClue);
        //console.log("The extra clue is " + anyOtherClue);
        //console.log("The information is " + information);
        setAnswer("");
        setFirstClue("");
        setSecondClue("");
        setThirdClue("");
        setAnyOtherClue("");
        setInformation("");
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "answer" : answer,
                "first_clue": firstClue,
                "second_clue": secondClue,
                "third_clue": thirdClue,
                "any_other_clue": anyOtherClue,
                "information": information
            })
        };
        fetch('https://db3idk4cvj.execute-api.eu-west-2.amazonaws.com/dev/createRiddle', requestOptions)
        .then(response => response.json())
        .then(data => {
             console.log(data);
             if(data["message"] === "Success"){
                setShowAlert(true);
             }
             displaySuccessMessage();
            })
    }


    return ( 
        <div>
            {/*Start of alert*/}
            {showAlert ? (
            <div id="alert-3" className="flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200" role="alert">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Info</span>
                <div className="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
                    Your riddle has been entered successfully. 
                </div>
                <button type="button" onClick={() => setShowAlert(false)} class="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300" data-dismiss-target="#alert-3" aria-label="Close">
                    <span className="sr-only">Close</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div> ) : null}
            {/*End of alert*/}

            {/*Form data to take the riddle*/}
            <form>
                <div className="mb-6">
                    <label htmlFor="answer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Answer*</label>
                    <input type="text" name="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} required id="answer" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="firstClue" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Clue*</label>
                    <input type="text" name="firstClue" required value={firstClue} onChange={(e) => setFirstClue(e.target.value)} id="firstClue" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="secondClue" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Second Clue*</label>
                    <input type="text" name="secondClue" required id="secondClue" value={secondClue} onChange={(e) => setSecondClue(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="thirdClue" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Third Clue*</label>
                    <input type="text" name="thirdClue" required id="thirdClue" value={thirdClue} onChange={(e) => setThirdClue(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="anyOtherClue" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Any Other Information</label>
                    <input type="text" name="anyOtherClue" id="anyOtherClue" value={anyOtherClue} onChange={(e) => setAnyOtherClue(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="tellUsMore" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tell us more. To be shown to user after the riddle</label>
                    <textarea name="information" value={information} onChange={(e) => setInformation(e.target.value)} placeholder="Leave a comment..." id="information" cols="30" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                </div>
                
                <button onClick={(e) => {submitRiddle(e)}} className="createRiddle text-white bg-green-600 font-sans hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Create Riddle</button>
            </form>
            {/*End of form to take the riddle*/}            
        </div>
     );
}
 
export default CreateRiddles;