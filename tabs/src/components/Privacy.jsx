import React from "react";
import * as microsoftTeams from "@microsoft/teams-js";
/**
 * This component is used to display the required
 * privacy statement which can be found in a link in the
 * about tab.
 */
class Privacy extends React.Component {

  
  openPopup = () =>{
    const taskModuleInfo = {

      title: "My Teams App",
   
      url : "https://my-teams-app.herokuapp.com/",
   
      width : 1000,
   
      height: 500
   
    
   
     };
    microsoftTeams.tasks.startTask(taskModuleInfo);
  }
  render() {
    return (
      <div>
        <a onClick={this.openPopup}>Click Here</a>
      </div>
    );
  }
}

export default Privacy;
