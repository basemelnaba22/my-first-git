
import './App.css';
import  Posts  from './feature/Posts/postCounter';
import AddPostForm from './feature/Posts/AddPostForm';

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <Posts />
    </div>
  );
}

export default App;
