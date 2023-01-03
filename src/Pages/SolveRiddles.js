import { useEffect, useState } from "react";
import levenshtein from "js-levenshtein";

const SolveRiddles = () => {
    const [clueDescription, setClueDescription] = useState("");
    const [clueNumberLabel, setClueNumberLabel] = useState("");
    const [riddles, setRiddles] = useState([]);
    const [answer, setAnswer] = useState("");
    const [riddleCounter, setRiddleCounter] = useState(0);
    const [nextButtonHidden, setNextButtonHidden] = useState(false);
    const [backButtonHidden, setBackButtonHidden] = useState(true);
    const [numberOfWordsInAnswer, setNumberOfWordsInAnswer] = useState(1);
    const [numberOfCharsInAnswer, setNumberOfCharsInAnswer] = useState(0);
    const [stringDistance, setStringDistance] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");
    const [userNumberOfWords, setUserNumberOfWords] = useState(0);
    const [userChars, setUserChars] = useState(0);
    const [trueAnswer, setTrueAnswer] = useState(false);
    const [falseAnswer, setFalseAnswer] = useState(false);
    let index = 0;

    useEffect(() => {
        
            /*const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            };
            setClueNumberLabel("First Clue");
            fetch('https://db3idk4cvj.execute-api.eu-west-2.amazonaws.com/dev/getRiddles?' + new URLSearchParams({
                "number" : 3
            }), requestOptions)
            .then(response => response.json())
            .then(data => {
                setRiddles(data);
            });*/
            setUpEverything();
    },[]);


    const setUpEverything = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        const response = await fetch('https://db3idk4cvj.execute-api.eu-west-2.amazonaws.com/dev/getRiddles?' + new URLSearchParams({
            "number" : 3
        }), requestOptions);
        const data = await response.json();
        setRiddles(data);
        console.log(data);
        setAnswer(data[index].answer);
        setClueDescription(data[index].first_clue);
        setClueNumberLabel("First Clue");
        setNumberOfWordsInAnswer(WordCount(data[index].answer));
        setNumberOfCharsInAnswer(CharCount(data[index].answer));
        setStringDistance(StringDistance("", data[index].answer));
        console.log("I have gotten the data");
        //console.log("Riddles is ", riddles);
    }

    function WordCount(str) { 
        return str.split(" ").length;
      }

    function CharCount(str) {
        return str.length;
    }

    function StringDistance(userChars, answer){
        return levenshtein(userChars, answer);
    }

    function calculateMetrics(answerFromUser){
        setUserAnswer(answerFromUser);
        setUserNumberOfWords(WordCount(answerFromUser));
        setUserChars(CharCount(answerFromUser));
        setStringDistance(StringDistance(answerFromUser.toLowerCase(), answer.toLowerCase()));
    }

    function checkAnswer(){
        if (userAnswer.toLowerCase() === answer.toLowerCase()){
            console.log("Right answer");
            setTrueAnswer(true);
            setFalseAnswer(false);
        }
        else{
            console.log("Try again");
            setTrueAnswer(false);
            setFalseAnswer(true);
        }
    }

    function clearTrueAnswerModal(){
        setTrueAnswer(false);
    }

    const TrueAnswerModal = () => {
        return(
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <svg
                        class="h-6 w-6 text-green-600"
				        fill="none"
				        stroke="currentColor"
				        viewBox="0 0 24 24"
				        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
					    stroke-linecap="round"
					    stroke-linejoin="round"
					    stroke-width="2"
					    d="M5 13l4 4L19 7"
				        ></path>
			            </svg>
                    </div>
		            <h3 class="text-lg leading-6 font-medium text-gray-900">Correct Answer!</h3>
		            <div class="mt-2 px-7 py-3">
			        <p class="text-sm text-gray-500">
                        Congratulations!! Solve another!!!
			        </p>
		        </div>
		        <div class="items-center px-4 py-3">
                    <button
                    onClick={clearTrueAnswerModal}
                    id="ok-btn"
				    class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                    >
				    OK
                    </button>
                </div>
            </div>
            </div>
        )
    }


    function clearFalseAnswerModal(){
        setFalseAnswer(false);
    }


    const FalseAnswerModal = () => {
        return(
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <svg
                        class="h-6 w-6 text-green-600"
				        fill="none"
				        stroke="currentColor"
				        viewBox="0 0 24 24"
				        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
					    stroke-linecap="round"
					    stroke-linejoin="round"
					    stroke-width="2"
					    d="M5 13l4 4L19 7"
				        ></path>
			            </svg>
                    </div>
		            <h3 class="text-lg leading-6 font-medium text-gray-900">Wrong Answer!</h3>
		            <div class="mt-2 px-7 py-3">
			        <p class="text-sm text-gray-500">
                        Please try again
			        </p>
		        </div>
		        <div class="items-center px-4 py-3">
                    <button
                    onClick={clearFalseAnswerModal}
                    id="ok-btn"
				    class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                    >
				    OK
                    </button>
                </div>
            </div>
            </div>
        )
    }

    function nextClue(){
        console.log("The riddleCounter before the nextClue shenanigans is " + riddleCounter);
        if(riddleCounter == 0){
            setClueDescription(riddles[index].second_clue);
            setRiddleCounter(riddleCounter + 1);
            setClueNumberLabel("Second Clue");
            setNextButtonHidden(false)
            setBackButtonHidden(false);
        }else if(riddleCounter == 1){
            setClueDescription(riddles[index].third_clue);
            setRiddleCounter(riddleCounter + 1);
            setClueNumberLabel("Third Clue");
            if (riddles[index].any_other_clue === ""){
                setNextButtonHidden(true);   
            }else{
                setNextButtonHidden(false);
            }
            setBackButtonHidden(false);
        }else if(riddleCounter == 2){
            setClueDescription(riddles[index].any_other_clue);
            setRiddleCounter(riddleCounter + 1);
            setClueNumberLabel("Last Clue");
            setNextButtonHidden(true)
            setBackButtonHidden(false);
        }
        console.log("The riddleCounter after the nextClue shenanigans is " + riddleCounter);
    }


    function previousClue(){
        console.log("The riddleCounter before the nextClue shenanigans is " + riddleCounter);
        if(riddleCounter == 1){
            setClueDescription(riddles[index].first_clue);
            setRiddleCounter(riddleCounter - 1);
            setClueNumberLabel("First Clue");
            setBackButtonHidden(true);
            setNextButtonHidden(false);
        }else if(riddleCounter == 2){
            setClueDescription(riddles[index].second_clue);
            setRiddleCounter(riddleCounter - 1);
            setClueNumberLabel("Second Clue");
            setBackButtonHidden(false);
            setNextButtonHidden(false);
        }else if(riddleCounter == 3){
            setClueDescription(riddles[index].third_clue);
            setRiddleCounter(riddleCounter - 1);
            setClueNumberLabel("Third Clue");
            setBackButtonHidden(false);
            setNextButtonHidden(false);
        }
        console.log("The riddleCounter after the nextClue shenanigans is " + riddleCounter);
    }

    //grid h-screen place-items-center
    //flex items-center justify-center h-screen

    return (
        <>
        <div className="grid grid-rows-2 gap-15 place-items-center mt-10"> 
          <div className="p-6 w-96 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{clueNumberLabel}</h5>
            </a>
               

           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{clueDescription} 
             <a href="#" className="text-gray-300 font-sm hover:text-gray-500 ml-5" onClick={previousClue} hidden={backButtonHidden}>
                <u>Previous Clue</u>
             </a>
             <a href="#" className="text-gray-300 font-sm hover:text-gray-500 ml-5" onClick={nextClue} hidden={nextButtonHidden}>
                <u>Next Clue</u>
             </a>
            </p>
             
             <input type="text" name="answer" onChange={(e) => {calculateMetrics(e.target.value)}} required id="answer" className="block p-4 w-full mb-5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            <a href="#" onClick={checkAnswer}  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Go!
              <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            {trueAnswer ? <TrueAnswerModal></TrueAnswerModal> : null}
            {falseAnswer ? <FalseAnswerModal></FalseAnswerModal> : null}
        </div>


            <div className="p-6 max-w-sm mt-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <label htmlFor="">Word Count : </label>
                <p>{userNumberOfWords}/{numberOfWordsInAnswer}</p>
                <label htmlFor="">Character count : </label>
                <p>{userChars}/{numberOfCharsInAnswer}</p>
                <label htmlFor="">Distance Away From Answer : </label>
                <p>{stringDistance}</p>
            </div>
    </div>
    {/*<div className="hidden">
    {
        riddles.map((riddle) => (
            <p onChange={setInformation()}>The riddle's answer is {riddle.answer}</p>
        ))
    }
</div>*/}
    </>
     );
}
 
export default SolveRiddles;