import React from 'react' 

class Form extends React.Component {
    state = {
        text: "",
        category: ""
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return(
            <form onSubmit={(e) => this.props.handleFormSubmit(e, this.state)} className="new-task-form">
                <input  onChange={this.handleChange} type="text" placeholder="New task details" name="text" value={this.state.text}/>
                <select onChange={this.handleChange} name="category" value={this.state.category}> 
                    <option>Food</option>
                    <option>Money</option>
                    <option>Code</option>
                    <option>Misc</option>
                </select>
                <input type="submit" value="Add task"/>
            </form>
        )
    }
}

export default Form