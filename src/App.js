import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import StaffPage from './pages/staff/staff.component';
import DashboardPage from './pages/dashboard/dashboard.component';
import AgencyPage from './pages/agency/agency.component';
import LocationsPage from './pages/locations/locations.component';
import LatestPage from './pages/latest/latest.component';
import UpcomingPage from './pages/upcoming/upcoming.component';
import ResourcesPage from './pages/resources/resources.components';
import YourSteinPage from './pages/yourStein/yourStein.component';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={StaffPage} />
          <Route path='/dashboard' component={DashboardPage} />
          <Route path='/agency' component={AgencyPage} />
          <Route path='/locations' component={LocationsPage} />
          <Route path='/latest' component={LatestPage} />
          <Route path='/upcoming' component={UpcomingPage} />
          <Route path='/resources' component={ResourcesPage} />
          <Route path='/your' component={YourSteinPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
