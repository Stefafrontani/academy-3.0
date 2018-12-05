import InputWithDatalist from './InputWithDatalist.js';
import { connect } from 'react-redux';
import { getWeatherCards } from '../../redux/actions/weatherCards.js';

const mapDispatchToProps = {
  getWeatherCards
}

export default connect(null, mapDispatchToProps)(InputWithDatalist);