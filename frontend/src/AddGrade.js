import React from "react";

export class AddGrade extends React.Component {
    constructor(props) {
        super(props);
        this.grade = '';
        this.theme = '';

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1 = function(event){
        this.grade = event.target.value;
    }

    handleChange2 = function(event){
        this.theme = event.target.value;
    }

    handleSubmit(event) {
        fetch('https://grade-manager.herokuapp.com/grades/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                grade: 6,
                theme: "Form",
            })
        }).then(r => document.append(r));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="number" min={1} max={6} step={0.1} onChange={this.handleChange1} />
                </label>
                <label>
                    Name:
                    <input type="text" onChange={this.handleChange2}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}