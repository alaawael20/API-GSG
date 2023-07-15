import MainLayout from './components/MainLayout';
import Router from './router/index';

function App() {
  return (
    <div className='App'>
      <MainLayout>
        <Router />
      </MainLayout>
    </div>
  );
}

export default App;
