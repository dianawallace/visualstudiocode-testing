
class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      markdown: initialMarkdown
    }
  }

render() {
    return (
        <div></div> 
    );
  }
}





ReactDOM.render(<App/>, document.getElementById('root'));
