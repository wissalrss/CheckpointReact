import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <form>
          <div class="form-group">
        <input type="text" class="form-control"   placeholder="Nom" />
      </div>
      <div class="form-group">
        <input type="text" class="form-control"   placeholder="Prenom" />
      </div>
      <div class="form-group">
        <input type="email" class="form-control"   placeholder="Email" />
      </div>
      <div class="form-group">
        <input type="text" class="form-control"   placeholder="Adresse" />
      </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
