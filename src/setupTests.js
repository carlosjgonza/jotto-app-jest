
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// Configure adapter
Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
});
