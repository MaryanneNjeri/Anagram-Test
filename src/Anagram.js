import React from "react";

class Anagram extends React.Component {
	constructor(props){
		super(props);
		this.state={
			word1:'',
			word2:''
		};

		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

	}
	handleChange = ({target})=>{
		this.setState({[target.name]:target.value})

	};
   // the anagram function accepts two parameters;

	isAnagram=(string1,string2)=>{
		/*
	* sanitize function is used to clean up the string by converting all to the same case
	* by using toLowerCase function
	* .replace() method is used to searches through the string and replaces any non alphabetical character
	* with an empty string
	* .split() method is used to split the string into an array of characters
	* to same case
	* */
		const sanitizeString = function (str) {
			return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
		};
		if(sanitizeString(string1) === sanitizeString(string2)){
			alert('Input one is anagram of input two')
		}
		else{
			alert('Input one is not anagram of input two')
		}
	};
	onSubmit=(event)=>{
		const { word1,word2 } = this.state;
         this.isAnagram(word1,word2);
		// this helps prevent a traditional form submission
		event.preventDefault()
	};

	render() {
		return (
			<div className="anagram">
				<form onSubmit={this.onSubmit}>
					<input type="text" placeholder="word 1" name="word1" value={this.state.word1} onChange={this.handleChange}/>
					<br />
					<input type="text" placeholder="word 2" name="word2" value={this.state.word2} onChange={this.handleChange} />
					<br />

					<button type="submit">Check Anagram</button>
				</form>

				<p>ANAGRAM TEST: "This is not an anagram"</p>
			</div>
		);
	}
}

export default Anagram;
