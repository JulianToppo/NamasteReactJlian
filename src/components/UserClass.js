import React from "react";


class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            count:0,
            count2:0
        }
    }

    

    render() {
        const {name,location}=this.props
        const {count,count2}=this.state
        return (
            <div className='user-details'>
                <h4>{count + "   "+ count2}</h4>
                <button onClick={()=>{
                    this.setState({
                    count:count+ 1,
                    count2:count2+2
                    })
                }}>Increase</button>
                <h4>{name}</h4>
                <h4>{location}</h4>
                <h4>contact number</h4>
                <h4>contact details</h4>
            </div>
        )
    }

}


export default UserClass