
var React = require('react');

var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;


var Master = require('./components/master.jsx');
var Home = require('./components/home.jsx');
var GetStarted = require('./components/get-started.jsx');
var Feed = require('./components/feed.jsx'); 


// Here we define all our material-ui ReactComponents.
/*


var GetStarted = require('./components/pages/get-started.jsx');

var Customization = require('./components/pages/customization.jsx');
var Colors = require('./components/pages/customization/colors.jsx');
var Themes = require('./components/pages/customization/themes.jsx'); 
var InlineStyles = require('./components/pages/customization/inline-styles.jsx'); 

var Components = require('./components/pages/components.jsx');
var AppBar = require('./components/pages/components/app-bar.jsx');
var Avatars = require('./components/pages/components/avatars.jsx');
var Buttons = require('./components/pages/components/buttons.jsx');
var Cards = require('./components/pages/components/cards.jsx');
var DatePicker = require('./components/pages/components/date-picker.jsx');
var Dialog = require('./components/pages/components/dialog.jsx');
var DropDownMenu = require('./components/pages/components/drop-down-menu.jsx');
var Icons = require('./components/pages/components/icons.jsx');
var IconButtons = require('./components/pages/components/icon-buttons.jsx');
var LeftNav = require('./components/pages/components/left-nav.jsx');
var Lists = require('./components/pages/components/lists.jsx');
var Menus = require('./components/pages/components/menus.jsx');
var Paper = require('./components/pages/components/paper.jsx');
var Progress = require('./components/pages/components/progress.jsx');
var Sliders = require('./components/pages/components/sliders.jsx');
var Snackbar = require('./components/pages/components/snackbar.jsx');
var Switches = require('./components/pages/components/switches.jsx');
var Table = require('./components/pages/components/table.jsx');
var Tabs = require('./components/pages/components/tabs.jsx');
var TextFields = require('./components/pages/components/text-fields.jsx');
var TimePicker = require('./components/pages/components/time-picker.jsx');
var Toolbars = require('./components/pages/components/toolbars.jsx');


/** Routes: https://github.com/rackt/react-router/blob/master/docs/api/components/Route.md
  * 
  * Routes are used to declare your view hierarchy.
  *
  * Say you go to http://material-ui.com/#/components/paper
  * The react router will search for a route named 'paper' and will recursively render its 
  * handler and its parent handler like so: Paper > Components > Master
  */

var AppRoutes = (
  <Route name="root" path="/" handler={Master}>
    <Route name="home" handler={Home} />
    <Route name="get-started" handler={GetStarted} />
    <Route name="feed" handler={Feed} />


    <DefaultRoute handler={Home}/>
  </Route>
);

module.exports = AppRoutes;