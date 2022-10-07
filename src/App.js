import RouteView from "./router/Index";

if (process.env.NODE_ENV === 'development') {
  const { server } = require('./mocks/workerSetup');
  server.start();
 }

function App() {
  return (
    <RouteView></RouteView>
  );
}

export default App;
