import { connect } from 'react-redux';
import App from './app';

export const mapStateToProps = (state, ownProps) => ({
  state
});

// fetchTopSongs: () => dispatch(fetchTopSongs())
export const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
