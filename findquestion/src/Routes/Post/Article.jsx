import React, {useState} from 'react';
import './article.css'
import firebase from "../../Utils/firebase";


// // Not working  - unable to initilise firebase
// collection is
// https://console.firebase.google.com/u/0/project/sit313-app/firestore/data/~2FArticle

let db = firebase.collection()

const Article = () => {
    //
    // const allInputs = {imgUrl: ''}
    // const [imageAsFile, setImageAsFile] = useState('')
    // const [imageAsUrl, setImageAsUrl] = useState(allInputs)
    //
    // console.log(imageAsFile)
    // const handleImageAsFile = (e) => {
    //     const image = e.target.files[0]
    //     setImageAsFile(imageFile => (image))
    // }
    // const saveAnswer = (event) => {
    //     event.Default();
    //     const elementsArray = [...event.target.elements];
    //
    //     console.log(elementsArray);
    //
    //     const formData = elementsArray.reduce((accumulator, currentValue) => {
    //         if (currentValue.id) {
    //             accumulator[currentValue.id] = currentValue.value;
    //         }
    //         return accumulator;
    //     }, {});
    //
    //     db.collection("Article").add("hello")
    // };

    //
    // set the IDs for the variables
    const [title, setTitle] = useState('');

    const addItem = title => {
        firebase.collection('ArticleData').add({title});
    };

    // handle when the data is submitted - console log to see if working
    const handleSubmit = event => {
        addItem(title);
        console.log("title has been added as '", title, "'")
    };

    // Update the state every time an event happens
    const handleChange = event => {
        setTitle(event.target.value);
        console.log(title)
    };

    return (
        <div className="ask">
            <h1>Post an Article</h1>
            <div>
                <form submit = {handleSubmit()}>
                    <label className="label">Enter Title</label>
                    <input className="input"
                           type="text"
                           id="title"
                           value={title}
                           placeholder=' Enter your title here'
                           onChange={handleChange}

                          />


                    <label className="imageLabel"> Add an Image: </label>
                    <input className="inputImage"
                           type="file"/>
                    <button className="uploadImage"
                            type="submit"
                            // onChange={handleImageAsFile}

                           > Submit</button>


                    <label className="label">Abstract</label>
                    <textarea className="inputAbstract"
                              placeholder=' Please enter a 200 word abstract'
                              type="text"

                              />


                    <label className="label">Article Text</label>
                    <textarea className="inputProblem"
                              placeholder=' Please enter a 1000 word article'
                              type="text"

                              />


                    <label className="label">Tags</label>
                    <input className="input"
                           type="text"
                           placeholder=' Please Add up to 3 tags for your article eg. "Java" '
                        />

                    <button type="submit" onClick={handleSubmit}>Submit The Article To Our Database</button>
                </form>
            </div>
        </div>
    )
}
export default Article;