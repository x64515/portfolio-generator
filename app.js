const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?'
//     }

//   .then(answers => console.log(answers)
//   var inquirer = require('inquirer');
const promptUser = ()=>{
return inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub Username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
  // .catch(error => {
  //   if(error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //   } else {
  //     // Something else when wrong
  //   }
  // });
}
 
  const promptProject = portfolioData => {

    if(!portfolioData.projects){
    portfolioData.projects = [];
 };
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descripdtionInput) {
            return true;
          } else {
            console.log('Please provide a description of the project');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('Please provide a description of the project');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
     
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    })
  // .then(projectData=>{
  //   portfolioData.projects.push(projectData);
    
    // if (projectData.confirmAddProject) {
    //   return promptProject(portfolioData);
    // } else {
    //   return portfolioData;
    // }})
  // .Catch(error => {
  //     if(error.isTtyError) {
  //       // Prompt couldn't be rendered in the current environment
  //    console.log(error);
  // }
// })
};
 
  promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData)})