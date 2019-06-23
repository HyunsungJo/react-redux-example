import React, {Component} from "react";
import './App.css';
import {connect} from "react-redux";
import {addItem} from "./actions";

const data = [
    {
        name: "Ivel Z3",
        manufacturer: "Ivasim",
        year: 1969,
        origin: "Croatia"
    },
    {
        name: "Bally Astrocade",
        manufacturer: "Bally Consumer Products",
        year: 1977,
        origin: "USA"
    },
    {
        name: "Sord M200 Smart Home Computer",
        manufacturer: "Sord Computer Corporation",
        year: 1971,
        origin: "Japan"
    },
    {
        name: "Commodore 64",
        manufacturer: "Commodore",
        year: 1982,
        origin: "USA"
    }
];

const mapStateToProps = state => {
    return { items : state.items };
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => {
            dispatch(addItem(item));
        }
    };
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        const name = this.state.value;
        const obj = data.filter(item => item.name === name)[0];
        this.props.addItem(obj);
        event.preventDefault();
    }

    render() {
        const hello = <div id="Hello">
            <h1>Hello, world</h1>
        </div>;

        const label = <label>Pick your favorite machine:</label>;

        const selector = <select onChange={this.handleChange}>
            <option value="">-- pick a model --</option>
            {data.map((obj, i) => <option key={i} value={obj.name}>{obj.name} ({obj.year})</option>)}
        </select>;

        const button = <input type="submit" value="Add"/>;

        const form = <div id="Form">
            <form id="FormElement" onSubmit={this.handleSubmit}>
                {label}
                <br></br>
                {selector}
                {button}
            </form>
        </div>;

        const itemList = <div id="ItemList">
            {this.props.items.map(item =><div key={item.name}>
                <ul>
                    <li>Name: {item.name}</li>
                    <li>Manufacturer: {item.manufacturer}</li>
                    <li>Year: {item.year}</li>
                    <li>Origin: {item.origin}</li>
                </ul>
            </div>)}
        </div>;

        return (
            <div className="App">
                {hello}
                {form}
                {itemList}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

